import { useUrlPagination } from "../../hooks/useUrlPagination";
import { useGetItems } from "./api/useGetItems";
import ItemsTable from "./components/ItemsTable";
import { UI_TEXTS } from "../../constants/dictionary";
import { DEFAULT_PAGE_SIZE, DEFAULT_SKIP } from "../../constants/pagination";
import Pagination from "../../components/Pagination.tsx";

function ItemsPage() {
  const { skip, take, page, goToNextPage, goToPreviousPage } = useUrlPagination(
    DEFAULT_SKIP,
    DEFAULT_PAGE_SIZE,
  );
  const { data, isLoading, isError } = useGetItems({ skip, take });

  const total = data?.total ?? 0;
  const pageCount = Math.max(1, Math.ceil(total / take));
  const canGoPrevious = skip > DEFAULT_SKIP;
  const canGoNext = skip + take < total;

  if (isError) {
    return (
      <div className="text-red-500 text-center mt-10 font-bold">
        {UI_TEXTS.TABLE.ERROR}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="mb-6 text-center text-2xl font-bold text-gray-900">
        {UI_TEXTS.ITEMS_MANAGEMENT_TITLE}
      </h1>
      <ItemsTable items={data?.data ?? []} isLoading={isLoading} />

      <Pagination
        currentPage={page}
        pageCount={pageCount}
        onNext={goToNextPage}
        onPrevious={goToPreviousPage}
        canGoNext={canGoNext}
        canGoPrevious={canGoPrevious}
      />
    </div>
  );
}

export default ItemsPage;
