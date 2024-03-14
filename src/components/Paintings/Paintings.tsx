import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/UI/carousel';
import useArtObjects from '@/data/hooks/useArtObjects';
import { ArtObject } from '@/data/types/types';
import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import PaintingsSkeleton from './PaintingsSkeleton';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/UI/dialog';

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
		<>
			<Carousel>
				{!onlyOneItem && (
					<>
						<CarouselPrevious />
						<CarouselNext />
					</>
				)}

				<CarouselContent className="w-[calc(100vw-6rem)]">
					{filteredData.map((artObject: ArtObject) => {
						return (
							<>
								<CarouselItem
									key={artObject.headerImage.guid}
									className={`${flexBasis} p-5 cursor-pointer w-screen h-full`}
									onClick={() => console.log(artObject)}
								>
									<Dialog>
										<DialogTrigger>
											<p>{artObject?.title}</p>
											<img src={artObject?.webImage?.url} alt={artObject?.title} />
										</DialogTrigger>
										<DialogContent className="w-11/12 mt-5 max-h-screen overflow-auto">
											<DialogHeader>
												<DialogTitle className="mb-5">{artObject.longTitle}</DialogTitle>
												<DialogDescription>
													<img
														className="object-cover rounded-sm  w-full h-full"
														alt={artObject?.title}
														src={artObject?.webImage?.url}
													/>
												</DialogDescription>
											</DialogHeader>
										</DialogContent>
									</Dialog>
								</CarouselItem>
							</>
						);
					})}
				</CarouselContent>
			</Carousel>
		</>
	);
};

export default Paintings;
