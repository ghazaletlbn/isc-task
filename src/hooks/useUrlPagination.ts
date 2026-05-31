import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import {
  DEFAULT_PAGE_SIZE,
  DEFAULT_SKIP,
  isValidPageSize,
} from "../constants/pagination.ts";

const parseSkip = (value: string | null, take: number) => {
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 0) return DEFAULT_SKIP;
  return Math.floor(parsed / take) * take;
};
const parseTake = (value: string | null, fallback: number) => {
  const parsed = Number(value);
  return isValidPageSize(parsed) ? parsed : fallback;
};

export const useUrlPagination = (defaultTake: number = DEFAULT_PAGE_SIZE) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const take = parseTake(searchParams.get("take"), defaultTake);
  const skip = parseSkip(searchParams.get("skip"), take);

  const page = Math.floor(skip / take) + 1;

  const setPagination = useCallback(
    (newSkip: number, newTake: number) => {
      setSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams);
        params.set("skip", String(Math.max(DEFAULT_SKIP, newSkip)));
        params.set("take", String(newTake));
        return params;
      });
    },
    [setSearchParams],
  );

  const goToNextPage = useCallback(
    () => setPagination(skip + take, take),
    [skip, take, setPagination],
  );

  const goToPreviousPage = useCallback(
    () => setPagination(Math.max(DEFAULT_SKIP, skip - take), take),
    [skip, take, setPagination],
  );

  const setPageSize = useCallback(
    (newTake: number) => setPagination(DEFAULT_SKIP, newTake),
    [setPagination],
  );

  return { skip, take, page, goToNextPage, goToPreviousPage, setPageSize };
};
