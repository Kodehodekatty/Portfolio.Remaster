
import footer from '../../assets/images/Groupfooter.png'
import usePortfolio from '../../context/PortfolioContext'


export const Footer = () =>
{
const {footerOpen} = usePortfolio()


return (
    <div>
    {footerOpen ? (
<div className='bg-emerald-600 flex py-12 px-20 justify-between text-white rounded-br-lg'>  dsadasd sad sa d sad sad      </div> ) : (<div className='bg-transparent flex py-12 px-20 justify-between text-white rounded-br-lg'/> ) }
</div>
)

}