import useArtObjects from '../../data/hooks/useArtObjects';
import Artist from '../Artist/Artist';
import { ArtObject } from '@/data/types/types';
import { useState } from 'react';
import Paintings from '../Paintings/Paintings';
import Filters from '../Filters/Filters';

const Home = () => {
	const [selectedArtist, setSelectedArtist] = useState<string>('');

	return (
		<div className="flex flex-col items-center justify-center w-full p-10">
			<Filters />
			{/* <Artist selectedArtist={selectedArtist} setSelectedArtist={setSelectedArtist} /> */}
			<Paintings selectedArtist={selectedArtist} />
		</div>
	);
};

export default Home;
