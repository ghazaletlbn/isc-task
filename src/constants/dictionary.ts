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
    LOADING: "Loading data...",
    EMPTY: "No data found.",
    ERROR: "Error fetching data!",
  },
} as const;
