import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getItems } from "./getItems";
import { itemsKeys } from "./queryKeys";

interface UseGetItemsParams {
  skip: number;
  take: number;
}

export const useGetItems = ({ skip, take }: UseGetItemsParams) => {
  return useQuery({
    queryKey: itemsKeys.list({ skip, take }),
    queryFn: () => getItems({ skip, take }),
    placeholderData: keepPreviousData,
  });
};
