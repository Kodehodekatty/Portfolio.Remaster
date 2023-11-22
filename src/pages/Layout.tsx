import { Outlet } from 'react-router-dom';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import usePortfolio from '../context/PortfolioContext';

const Layout = () => {
	const { bodyPageOpen } = usePortfolio();
  console.log(bodyPageOpen)

	return (
		<div className='flex flex-col h-full'>
			<Header />
			{bodyPageOpen ? (
					<Outlet />
			) : (
				<div className='h-full break-words p-10'></div>
			)}
			<Footer />
		</div>
	);
};

export default Layout;