import type { Item } from "../types";
import ItemRow from "./ItemRow";
import { UI_TEXTS } from "../../../constants/dictionary";

interface ItemsTableProps {
  items: Item[];
  isLoading: boolean;
}
// TODO: Improve UX by replacing isLoading state with table skeleton placeholder
function ItemsTable({ items, isLoading }: ItemsTableProps) {
  if (isLoading) {
    return (
      <div
        role="status"
        className="p-8 text-center text-gray-500 font-medium animate-pulse"
      >
        {UI_TEXTS.TABLE.LOADING}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500 font-medium">
        {UI_TEXTS.TABLE.EMPTY}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm">
      <table className="w-full table-fixed border-collapse text-center">
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
              className="border-b border-gray-300 px-6 py-3  text-gray-500"
            >
              {UI_TEXTS.TABLE.HEADERS.DATE}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {items.map((item) => (
            <ItemRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemsTable;
