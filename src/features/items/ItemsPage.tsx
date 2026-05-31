import { useUrlPagination } from "../../hooks/useUrlPagination";
import { useGetItems } from "./api/useGetItems";
import ItemsTable from "./components/ItemsTable";
import { UI_TEXTS } from "../../constants/dictionary";
import { PageSizeSelector } from "../../components/PageSizeSelector.tsx";
import { Pagination } from "../../components/Pagination.tsx";

export const ItemsPage = () => {
  const { skip, take, page, goToNextPage, goToPreviousPage, setPageSize } =
    useUrlPagination();

  const { data, isLoading, isError } = useGetItems({ skip, take });

  const total = data?.total ?? 0;
  const pageCount = Math.max(1, Math.ceil(total / take));

  if (isError) {
    return (
      <div className="mt-10 text-center font-bold text-red-500">
        {UI_TEXTS.TABLE.ERROR}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6">
        <h1 className="mb-6 text-center text-xl font-semibold text-gray-800">
          {UI_TEXTS.ITEMS_LIST_TITLE}
        </h1>

        <ItemsTable items={data?.data ?? []} isLoading={isLoading} />
      </main>

      <footer className="sticky bottom-0 z-10 border-t border-gray-200 bg-white">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:justify-between">
          <PageSizeSelector value={take} onChange={setPageSize} />
          <Pagination
            page={page}
            pageCount={pageCount}
            onNext={goToNextPage}
            onPrevious={goToPreviousPage}
          />
        </div>
      </footer>
    </div>
  );
};
