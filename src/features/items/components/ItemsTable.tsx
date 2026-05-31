import type { Item } from "../types";
import ItemRow from "./ItemRow";
import { UI_TEXTS } from "../../../constants/dictionary";

const COLUMN_COUNT = 2;

interface ItemsTableProps {
  items: Item[];
  isLoading: boolean;
  isError: boolean;
  isFetching: boolean;
  rowsPerPage: number;
  onRetry: () => void;
}

function ItemsTable({
  items,
  isLoading,
  isError,
  isFetching,
  rowsPerPage,
  onRetry,
}: ItemsTableProps) {
  const isDimmed = isFetching && !isLoading && !isError;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
      <table
        className="w-full table-fixed border-collapse text-center"
        aria-busy={isFetching}
      >
        <colgroup>
          <col className="w-2/3" />
          <col className="w-1/3" />
        </colgroup>
        <thead className="bg-gray-50">
          <tr className="divide-x divide-gray-300">
            <th
              scope="col"
              className="border-b border-gray-300 px-6 py-3 text-gray-500"
            >
              {UI_TEXTS.TABLE.HEADERS.ITEM}
            </th>
            <th
              scope="col"
              className="border-b border-gray-300 px-6 py-3 text-gray-500"
            >
              {UI_TEXTS.TABLE.HEADERS.DATE}
            </th>
          </tr>
        </thead>
        <tbody
          className={`divide-y divide-gray-200 transition-opacity duration-200 ${
            isDimmed ? "opacity-50" : "opacity-100"
          }`}
        >
          {isLoading ? (
            <SkeletonRows count={rowsPerPage} />
          ) : isError ? (
            <ErrorRow onRetry={onRetry} isRetrying={isFetching} />
          ) : items.length === 0 ? (
            <EmptyRow />
          ) : (
            items.map((item) => <ItemRow key={item.id} item={item} />)
          )}
        </tbody>
      </table>
    </div>
  );
}

function SkeletonRows({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <tr key={index} className="divide-x divide-gray-200">
          <td className="px-6 py-4">
            <div className="h-4 w-1/3 animate-pulse rounded bg-gray-200" />
            <div className="mt-2 h-3 w-2/3 animate-pulse rounded bg-gray-100" />
          </td>
          <td className="px-6 py-4">
            <div className="mx-auto h-4 w-20 animate-pulse rounded bg-gray-200" />
          </td>
        </tr>
      ))}
    </>
  );
}

function ErrorRow({
  onRetry,
  isRetrying,
}: {
  onRetry: () => void;
  isRetrying: boolean;
}) {
  return (
    <tr>
      <td colSpan={COLUMN_COUNT} className="px-6 py-12 text-center">
        <p className="font-medium text-red-600">{UI_TEXTS.TABLE.ERROR}</p>
        <button
          type="button"
          onClick={onRetry}
          disabled={isRetrying}
          className="mt-3 rounded border border-red-300 bg-white px-4 py-1.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isRetrying ? UI_TEXTS.TABLE.RETRYING : UI_TEXTS.TABLE.RETRY}
        </button>
      </td>
    </tr>
  );
}

function EmptyRow() {
  return (
    <tr>
      <td
        colSpan={COLUMN_COUNT}
        className="px-6 py-12 text-center font-medium text-gray-500"
      >
        {UI_TEXTS.TABLE.EMPTY}
      </td>
    </tr>
  );
}

export default ItemsTable;
