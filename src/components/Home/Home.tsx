import useArtObjects from '../../data/hooks/useArtObjects';

const Home = () => {
	const { data, isLoading } = useArtObjects();

	return (
		<div>
			<p className="">Home</p>
		</div>
	);
};

export default Home;
