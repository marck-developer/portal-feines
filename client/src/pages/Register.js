import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
// global context and useNavigate later
import { useAppContext } from '../context/appContext'

const initialState = {
    nom: '',
    correu: '',
    contrasenya: '',
    isMember: true,   
}
// if possible prefer local state
// global state

const Register = () => {

    const [values, setValues] = useState(initialState)

  // global context and useNavigate later
    const { isLoading, showAlert, displayAlert } = useAppContext()

    const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const { nom, correu, contrasenya, isMember } = values
        if (!correu || !contrasenya || (!isMember && !nom)) {
            displayAlert()
        return
        }
        console.log(values)
    }

    return (
    <Wrapper className='full-page'>
        <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Inicia sessió' : "Registra't"}</h3>
        {showAlert && <Alert />}

        {/* name field */}
        {!values.isMember && (<FormRow 
        type='text'
        name='nom'
        value={values.nom}
        handleChange={handleChange}
        />
        )}
        {/* email field */}
        <FormRow 
        type='email'
        name='correu' 
        labelText='correu electrònic'   
        value={values.correu}
        handleChange={handleChange}
        />
        {/* contrasenya field */}
        <FormRow 
        type='password'
        name='contrasenya'
        value={values.contrasenya}
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