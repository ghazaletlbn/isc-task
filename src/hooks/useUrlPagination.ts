import {useSearchParams} from 'react-router-dom';

export const useUrlPagination = (defaultTake = 10) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const skip = parseInt(searchParams.get('skip') || '0', 10);
    const take = parseInt(searchParams.get('take') || String(defaultTake), 10);

    const setPagination = (newSkip: number, newTake: number) => {
        setSearchParams({skip: String(newSkip), take: String(newTake)});
    };

    return {skip, take, setPagination};
};
