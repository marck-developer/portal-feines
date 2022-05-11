import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
// global context and useNavigate later

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false    
}
// if possible prefer local state
// global state

const Register = () => {

    const [values, setValues] = useState(initialState)

  // global context and useNavigate later

    const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
    }

    const handleChange = (e) => {
    console.log(e.target)
    }

    const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
    }

    return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Inicia sessió' : "Registra't"}</h3>
        {values.showAlert && <Alert />}

        {/* name field */}
        {!values.isMember && (<FormRow 
        type='text'
        name='usuari'
        value={values.name}
        handleChange={handleChange}
        />
        )}
        {/* email field */}
        <FormRow 
        type='email'
        name='correu electrònic'
        value={values.email}
        handleChange={handleChange}
        />
        {/* password field */}
        <FormRow 
        type='password'
        name='contrasenya'
        value={values.password}
        handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>
            enviar
        </button>
        <p>
        {values.isMember ? 'Encara no estàs registrat?' : 'Ja estàs registrat?'}

        <button type='button' onClick={toggleMember} className='member-btn'>
        {values.isMember ? 'Registre' : 'Inicia sessió'}
        </button>
    </p>
        </form>
    </Wrapper>
    )
}
export default Register