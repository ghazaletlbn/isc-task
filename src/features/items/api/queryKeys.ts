export const itemsKeys = {
    all: ['items'] as const,
    lists: () => [...itemsKeys.all, 'list'] as const,
    list: (params: { skip: number; take: number }) =>
        [...itemsKeys.lists(), params] as const,
};
