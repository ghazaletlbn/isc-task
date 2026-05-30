export interface Item {
    id: number;
    title: string;
    description: string;
    createdAt: string;
}

export interface PaginatedResponse<T> {
    total: number;
    skip: number;
    take: number;
    data: T[];
}
