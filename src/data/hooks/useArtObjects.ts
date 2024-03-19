import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const useArtObjects = () => {
	const {
		fetchNextPage,
		fetchPreviousPage,
		hasNextPage,
		hasPreviousPage,
		isFetchingNextPage,
		isFetchingPreviousPage,
		data,
		isLoading,
	} = useInfiniteQuery({
		queryKey: ['InfiniteArtObjects'],
		queryFn: async ({ pageParam }) => {
			console.log(pageParam);

			const response = await fetch(
				`https://www.rijksmuseum.nl/api/nl/collection?key=yW6uq3BV&p=${pageParam}&ps=10&imgonly=true&toppieces=true`
			);
			if (!response.ok) {
				throw new Error('Failed to fetch data from Rijksmuseum API');
			}

			return response.json();
		},
		initialPageParam: 0,
		getPreviousPageParam: firstPage => firstPage.previousId ?? undefined,
		getNextPageParam: (lastPage, _, lastPageParam) => (lastPage.length === 0 ? undefined : lastPageParam + 1),
		maxPages: 10,
	});

	return {
		fetchNextPage,
		fetchPreviousPage,
		hasNextPage,
		hasPreviousPage,
		isFetchingNextPage,
		isFetchingPreviousPage,
		data,
		isLoading,
	};
};

export default useArtObjects;
