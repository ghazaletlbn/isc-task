import type { Item } from "../types";
import { formatDateToJalali } from "../../../utils/dateUtils";

interface ItemRowProps {
  item: Item;
}

function ItemRow({ item }: ItemRowProps) {
  return (
    <tr className="divide-x divide-gray-200 hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">
        <div className="font-semibold text-gray-900">{item.title}</div>
        <div className="text-sm text-gray-500 mt-0.5">{item.description}</div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap tabular-nums align-middle">
        {formatDateToJalali(item.createdAt)}
      </td>
    </tr>
  );
}

export default ItemRow;
