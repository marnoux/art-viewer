import { Skeleton } from '@/components/UI/skeleton';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/UI/carousel';

const PaintingsSkeleton = () => {
	return (
		<Carousel>
			<CarouselPrevious />
			<CarouselNext />
			<CarouselContent className="w-[calc(100vw-10rem)]">
				<div className="p-5 gap-5">
					<Skeleton className="w-[100px] h-[20px] rounded-full mb-2" />
					<Skeleton className="w-[250px] h-[220px] rounded-sm" />
				</div>
				<div className="p-5 gap-5">
					<Skeleton className="w-[200px] h-[20px] rounded-full mb-2" />
					<Skeleton className="w-[220px] h-[320px] rounded-sm" />
				</div>
			</CarouselContent>
		</Carousel>
	);
};

export default PaintingsSkeleton;
