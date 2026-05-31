import { PAGE_SIZE_OPTIONS } from "../constants/pagination.ts";
import { UI_TEXTS } from "../constants/dictionary.ts";

interface PageSizeSelectorProps {
  value: number;
  onChange: (newSize: number) => void;
  disabled?: boolean;
}

export const PageSizeSelector = ({
  value,
  onChange,
  disabled = false,
}: PageSizeSelectorProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <label htmlFor="page-size-select" className="whitespace-nowrap">
        {UI_TEXTS.PAGINATION.ROWS_PER_PAGE}
      </label>
      <select
        id="page-size-select"
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.target.value))}
        className="rounded border border-gray-300 bg-white px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
      >
        {PAGE_SIZE_OPTIONS.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
};
