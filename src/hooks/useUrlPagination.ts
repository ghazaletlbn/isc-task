import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_SKIP } from "../constants/pagination.ts";

const parseSkip = (value: string | null, fallback: number) => {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= 0 ? parsed : fallback;
};

const parseTake = (value: string | null, fallback: number) => {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
};

export const useUrlPagination = (defaultSkip = 0, defaultTake = 10) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const skip = parseSkip(searchParams.get("skip"), defaultSkip);
  const take = parseTake(searchParams.get("take"), defaultTake);

  const page = Math.floor(skip / take) + 1;

  const setPagination = useCallback(
    (newSkip: number, newTake: number) => {
      setSearchParams((prevParams) => {
        const params = new URLSearchParams(prevParams);
        params.set("skip", String(Math.max(0, newSkip)));
        params.set("take", String(Math.max(1, newTake)));
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

  return {
    skip,
    take,
    page,
    goToNextPage,
    goToPreviousPage,
  };
};
