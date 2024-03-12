import { useQuery } from '@tanstack/react-query';

const useArtObjects = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['ArtObjects'],
		queryFn: async () => {
			const response = await fetch(
				'https://www.rijksmuseum.nl/api/nl/collection?key=yW6uq3BV&p=0&ps=10000&imgonly=true&toppieces=true'
			);
			if (!response.ok) {
				throw new Error('Failed to fetch data from Rijksmuseum API');
			}
			return response.json();
		},
	});

	return { data, isLoading };
};

export default useArtObjects;
