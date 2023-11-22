import { useNavigate } from "react-router";
import usePortfolio from "../../context/PortfolioContext";

export const Header = () => {
	const navigate = useNavigate();

	const { headerOpen, setHeaderOpen } = usePortfolio();

	return (
		<div>
			{' '}
			{headerOpen ? (
				<div className='bg-violet-400 flex py-4 w-full justify-between text-white rounded-tr-lg'>
					<button
						onClick={() => {
							navigate('/AboutMe');
						}}
						className='bg-violet-700 border-2 m-auto py-2 px-4 rounded-lg hover:bg-violet-900 active:scale-90 transition-all'
					>
						123 123 123
					</button>
					<button
						onClick={() => {
							navigate('/Work');
						}}
						className='bg-violet-900 border-2 py-2 px-4 m-auto rounded-lg'
					>
						123 213 123
					</button>
					<button
						onClick={() => {
							navigate('/Contact');
						}}
						className='bg-violet-900 border-2 py-2 px-4 m-auto rounded-lg'
					>
						123 123123
					</button>
				</div>
			) : (
				<div className='bg-transparent flex  justify-between text-white rounded-tr-lg'></div>
			)}
		</div>
	);
};