import useArtObjects from '../../data/hooks/useArtObjects';
import Artist from '../Artist/Artist';
import { ArtObject } from '@/data/types/types';
import { useEffect, useRef, useState } from 'react';
import Paintings from '../Paintings/Paintings';
import Filters from '../Filters/Filters';
import { useInView } from 'framer-motion';
import AllPaintings from '../Paintings/AllPaintings';

const Home = () => {
	const [selectedArtist, setSelectedArtist] = useState<string>('');

	return (
		<div className="flex flex-col items-center justify-center w-full p-10">
			<Filters />

			<AllPaintings />

			{/* <Paintings selectedArtist={selectedArtist} /> */}
		</div>
	);
};

export default Home;
