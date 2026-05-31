export const UI_TEXTS = {
  ITEMS_LIST_TITLE: "Items List",
  PAGINATION: {
    NEXT: "Next",
    PREVIOUS: "Previous",
    ROWS_PER_PAGE: "Rows per page:",
    PAGE_STATUS: (page: number, pageCount: number) =>
      `Page ${page} of ${pageCount}`,
  },
  TABLE: {
    HEADERS: {
      ITEM: "Item",
      DATE: "Creation Date",
    },
    EMPTY: "No data found.",
    ERROR: "Something went wrong while loading items.",
    RETRY: "Retry",
    RETRYING: "Retrying...",
  },
  STATUS: {
    LOADING: "Loading items, please wait.",
    UPDATING: "Updating items.",
    ERROR: "Failed to load items.",
  },
} as const;
