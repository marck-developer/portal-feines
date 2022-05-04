import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import {Link} from 'react-router-dom'

const Landing = () => {
    return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className='container page'>
        <div className='info'>
            <h1>
            aplicació <span>seguiment</span> feines
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at eligendi in inventore, delectus blanditiis aliquam voluptatum fugit numquam. Vero veritatis eveniet, ipsam beatae cumque itaque perspiciatis impedit quam. Neque?</p>
            <Link to='/register'className='btn btn-hero'>Inicia sessió / Registre't</Link>
        </div>
        <img src={main} alt='caça de feina' className='img main-img'/>
        </div>
    </Wrapper>
    )
}
export default Landing
