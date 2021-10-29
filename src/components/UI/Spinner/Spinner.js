import Loader from 'react-loader-spinner';

const Spinner = () => {
	return (
		<div className='container mt-10'>
			<Loader
				type='Rings'
				className='text-center'
				color='white'
				height={150}
				width={150}
				timeout={30000} //30 secs
			/>
		</div>
	);
};

export default Spinner;
