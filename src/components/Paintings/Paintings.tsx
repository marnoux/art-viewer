import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/UI/carousel';
import useArtObjects from '@/data/hooks/useArtObjects';
import { ArtObject } from '@/data/types/types';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import PaintingsSkeleton from './PaintingsSkeleton';

type PaintingsProps = {
	selectedArtist: string | null;
};

const Paintings = ({ selectedArtist }: PaintingsProps) => {
	const [filteredData, setFilteredData] = useState([]);
	const { data, isLoading } = useArtObjects();

	useEffect(() => {
		if (isEmpty(data?.artObjects) || isLoading || !selectedArtist) return;

		const filteredData = data?.artObjects.filter((artObject: ArtObject) => {
			console.log(selectedArtist);

			return artObject.principalOrFirstMaker === selectedArtist;
		});

		setFilteredData(filteredData);
	}, [data, isLoading, selectedArtist]);

	useEffect(() => {
		setFilteredData(data?.artObjects);
	}, [isLoading]);

	const onlyOneItem = filteredData?.length === 1;

	const flexBasis = onlyOneItem ? '' : 'sm:basis-1/2 basis-full md:basis-1/3';

	return isEmpty(filteredData) ? (
		<PaintingsSkeleton />
	) : (
		<Carousel>
			{!onlyOneItem && (
				<>
					<CarouselPrevious />
					<CarouselNext />
				</>
			)}

			<CarouselContent className="w-[calc(100vw-10rem)]">
				{filteredData.map((artObject: ArtObject) => (
					<CarouselItem key={artObject.id} className={`${flexBasis} p-5`}>
						<p>{artObject?.title}</p>
						<img src={artObject?.webImage?.url} alt={artObject?.title} />
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

export default Paintings;
