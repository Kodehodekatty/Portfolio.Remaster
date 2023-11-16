import { useNavigate } from 'react-router'
import header from '../../assets/images/headerbackground2.png'


export const Header = () => {


const navigate = useNavigate()




    return (
        <div className='bg-violet-400 flex py-12 px-20 justify-between text-white rounded-tr-lg'>
            <button onClick={ () => {navigate("/AboutMe")}} 
            className='bg-violet-700 border-2 py-2 px-4 rounded-lg hover:bg-violet-900 active:scale-90 transition-all'>123 123 123</button>
            <button onClick={ () => {navigate("/Work")}}  className='bg-violet-900 border-2 py-2 px-4 rounded-lg'>123 213 123</button>
            <button onClick={ () => {navigate("/Contact")}} className='bg-violet-900 border-2 py-2 px-4 rounded-lg'>123 123123</button>
        </div>

    )
}