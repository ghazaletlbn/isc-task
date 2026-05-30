import { useUrlPagination } from './hooks/useUrlPagination';
import {useGetItems} from './features/items/api/useGetItems';

function App() {
    const { skip, take,page, setPagination } = useUrlPagination(0, 10);
    const {data, isLoading, isError, isFetching} = useGetItems({skip, take});
    const total = data?.total ?? 0;
    const hasNextPage = skip + take < total;

    return (
        <div className="max-w-2xl mx-auto p-6">

            {/* TODO: replace this with full table UI + pagination component + empty state + skeleton loading */}
            <div className="mb-4 text-xs text-gray-400">
                TODO: add table UI, skeleton loading, empty state, and URL sync pagination
            </div>

            <h2 className="text-xl font-semibold mb-4">
                Items
            </h2>

            <div className="text-xs text-gray-500 mb-3">
                page: {page}
            </div>

            {isLoading && (
                <p className="text-gray-500">Loading...</p>
            )}

            {isError && (
                <p className="text-red-500">Something went wrong</p>
            )}

            <ul className="space-y-2">
                {data?.data.map((item) => (
                    <li
                        key={item.id}
                        className="p-3 border rounded-lg hover:bg-gray-50 transition"
                    >
                        <strong>{item.title}</strong>
                    </li>
                ))}
            </ul>

            {isFetching && (
                <p className="text-xs text-gray-400 mt-2">
                    Updating...
                </p>
            )}

            <div className="flex gap-3 mt-6">
                <button
                    onClick={() => setPagination(skip - take, take)}
                    disabled={skip === 0}
                    className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                >
                    Prev
                </button>

                <button
                    onClick={() => setPagination(skip + take, take)}
                    disabled={!hasNextPage}
                    className="px-4 py-2 rounded bg-blue-500 text-white disabled:opacity-50 disabled:bg-blue-300"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;