export const UI_TEXTS = {
  ITEMS_MANAGEMENT_TITLE: "Items List",
  PAGINATION: {
    NEXT: "Next",
    PREVIOUS: "Previous",
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
