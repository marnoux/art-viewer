import { isEmpty } from 'lodash';
import PaintingsSkeleton from './PaintingsSkeleton';
import { ArtObject } from '@/data/types/types';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../UI/dialog';
import { useEffect, useRef, useState } from 'react';
import useArtObjects from '@/data/hooks/useArtObjects';
import { useInView } from 'framer-motion';

const AllPaintings = () => {
	const [artObjects, setArtObjects] = useState<ArtObject[]>([]);

	const { data, isLoading, fetchNextPage } = useArtObjects();

	const ref = useRef(null);

	const isInView = useInView(ref);

	useEffect(() => {
		if (isInView) {
			fetchNextPage();
		}
	}, [isInView, fetchNextPage]);

	useEffect(() => {
		if (isLoading) return;

		const allArtObjects = data?.pages.flatMap(page => page.artObjects) || [];

		setArtObjects(allArtObjects);
	}, [data, isLoading]);

	return isEmpty(artObjects) ? (
		<PaintingsSkeleton />
	) : (
		<>
			{artObjects.map((artObject: ArtObject) => (
				<div key={artObject.id}>
					<Dialog>
						<DialogTrigger>
							<p>{artObject.title}</p>
							<img src={artObject.webImage?.url} alt={artObject.title} />
						</DialogTrigger>
						<DialogContent className="w-11/12 mt-5 max-h-screen overflow-auto">
							<DialogHeader>
								<DialogTitle className="mb-5">{artObject.longTitle}</DialogTitle>
								<DialogDescription>
									<img
										className="object-cover rounded-sm  w-full h-full"
										alt={artObject.title}
										src={artObject.webImage.url}
									/>
								</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</div>
			))}
			<div ref={ref} />
		</>
	);
};
export default AllPaintings;
