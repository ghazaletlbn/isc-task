import { UI_TEXTS } from "../constants/dictionary.ts";

interface PaginationProps {
  page: number;
  pageCount: number;
  onNext: () => void;
  onPrevious: () => void;
  disabled?: boolean;
}

export const Pagination = ({
  page,
  pageCount,
  onNext,
  onPrevious,
  disabled = false,
}: PaginationProps) => {
  const isFirst = disabled || page <= 1;
  const isLast = disabled || page >= pageCount;

  const buttonBase =
    "rounded border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500";
  const activeButton =
    "border-gray-300 bg-white text-gray-700 hover:bg-gray-50";
  const disabledButton =
    "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed";

  return (
    <nav aria-label="Pagination" className="flex items-center gap-3">
      <button
        type="button"
        onClick={onPrevious}
        disabled={isFirst}
        className={`${buttonBase} ${isFirst ? disabledButton : activeButton}`}
        aria-label="Previous page"
      >
        {UI_TEXTS.PAGINATION.PREVIOUS}
      </button>

      <span className="min-w-[7rem] text-center text-sm text-gray-600">
        {UI_TEXTS.PAGINATION.PAGE_STATUS(page, pageCount)}
      </span>

      <button
        type="button"
        onClick={onNext}
        disabled={isLast}
        className={`${buttonBase} ${isLast ? disabledButton : activeButton}`}
        aria-label="Next page"
      >
        {UI_TEXTS.PAGINATION.NEXT}
      </button>
    </nav>
  );
};
