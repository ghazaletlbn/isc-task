export const DEFAULT_SKIP = 0;
export const DEFAULT_PAGE_SIZE = 5;

export const PAGE_SIZE_OPTIONS = [5, 10, 15, 20] as const;

export type PageSize = (typeof PAGE_SIZE_OPTIONS)[number];

export const isValidPageSize = (value: number): value is PageSize =>
  (PAGE_SIZE_OPTIONS as readonly number[]).includes(value);
