import { UI_TEXTS } from "../constants/dictionary.ts";

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

const buttonClass =
  "min-w-[120px] px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg " +
  "disabled:bg-slate-300 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors";

function Pagination({
  currentPage,
  pageCount,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
}: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-4 mt-6"
    >
      <button
        type="button"
        className={buttonClass}
        onClick={onPrevious}
        disabled={!canGoPrevious}
      >
        {UI_TEXTS.PAGINATION.PREVIOUS}
      </button>

      <span className="min-w-[110px] text-center text-sm font-medium text-gray-600">
        {UI_TEXTS.PAGINATION.PAGE_STATUS(currentPage, pageCount)}
      </span>

      <button
        type="button"
        className={buttonClass}
        onClick={onNext}
        disabled={!canGoNext}
      >
        {UI_TEXTS.PAGINATION.NEXT}
      </button>
    </nav>
  );
}

export default Pagination;
