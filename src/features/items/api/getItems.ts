import { apiClient } from "../../../lib/apiClient";
import type { Item, PaginatedResponse } from "../types";

export const getItems = async ({
  skip,
  take,
}: {
  skip: number;
  take: number;
}) => {
  const { data } = await apiClient.get<PaginatedResponse<Item>>("/items", {
    params: { skip, take },
  });
  return data;
};
