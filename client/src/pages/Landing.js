import logo from "../assets/images/logo.svg"
import main from "../assets/images/main.svg"

const Landing = () => {
    return (
    <main>
        <nav>
            <img src={logo} alt='portal feines' className='logo' />
        </nav>
        <div className='container page'>
        <div className='info'>
            <h1>
            aplicació <span>seguiment</span> feines
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at eligendi in inventore, delectus blanditiis aliquam voluptatum fugit numquam. Vero veritatis eveniet, ipsam beatae cumque itaque perspiciatis impedit quam. Neque?</p>
            <button className='btn btn-hero'>Inicia sessió / Registre't</button>
        </div>
        <img src={main} alt='caça de feina' className='img main-img'/>
        </div>
    </main>
    )
}
export default Landing
