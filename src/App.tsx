import {useState} from 'react';
import {useGetItems} from './features/items/api/useGetItems';

function App() {
    const [skip, setSkip] = useState(0);
    const take = 10;

    const {data, isLoading, isError, isFetching} = useGetItems({skip, take});

    return (
        <div className="max-w-2xl mx-auto p-6">

            {/* TODO: replace this with full table UI + pagination component + empty state + skeleton loading */}
            <div className="mb-4 text-xs text-gray-400">
                TODO: add table UI, skeleton loading, empty state, and URL sync pagination
            </div>

            <h2 className="text-xl font-semibold mb-4">
                Items
            </h2>

            {/* debug helper */}
            <div className="text-xs text-gray-500 mb-3">
                skip: {skip} | take: {take}
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
                    onClick={() => setSkip((p) => Math.max(0, p - take))}
                    disabled={skip === 0}
                    className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                >
                    Prev
                </button>

                <button
                    onClick={() => setSkip((p) => p + take)}
                    className="px-4 py-2 rounded bg-blue-500 text-white"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;