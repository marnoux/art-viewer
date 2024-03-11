import { useEffect, useState } from 'react';
import { Input } from '../UI/input';
import { debounce, isEmpty, uniq } from 'lodash';
import useArtObjects from '@/data/hooks/useArtObjects';
import { Card, CardContent } from '@/components/UI/card';
import { Button } from '../UI/button';
import { ArtObject } from '@/data/types/types';

type ArtistProps = {
	selectedArtist: string | null;
	setSelectedArtist: (artist: string) => void;
};

const Artist = ({ selectedArtist, setSelectedArtist }: ArtistProps) => {
	const [searchString, setSearchString] = useState<string>('');
	const [artistList, setArtistList] = useState<string[]>([]);
	const { data, isLoading } = useArtObjects();

	const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchString(e.target.value);
	}, 300);

	useEffect(() => {
		if (isEmpty(data?.artObjects) || isLoading) return;

		const artistList = data?.artObjects.map((artObject: ArtObject) => artObject.principalOrFirstMaker);

		const uniqueArtistList = uniq(artistList);

		const filteredArtistList: string[] = uniqueArtistList
			.filter((v): v is string => typeof v === 'string')
			.filter(artist => artist.toLowerCase().includes(searchString.toLowerCase()));

		setArtistList(filteredArtistList);
	}, [data, searchString]);

	return (
		<div className="flex flex-col justify-center items-center gap-4 w-96">
			{selectedArtist && <h2>Works by {selectedArtist}</h2>}
			<Input className="mb-8" type="text" placeholder={'Search for an artist'} onChange={handleChange} />
			{!isEmpty(artistList) && searchString && (
				<Card>
					<CardContent className="flex flex-col gap-3 justify-between p-2 m-2">
						{artistList.map((artist: string) => (
							<Button
								key={artist}
								onClick={() => {
									setSearchString('');
									setSelectedArtist(artist);
								}}
							>
								{artist}
							</Button>
						))}
					</CardContent>
				</Card>
			)}
		</div>
	);
};

export default Artist;
