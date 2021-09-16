import { useState } from 'react';
import './Regist.css';
import axios from 'axios';

function Regist() {

    const [emailInput, setEmailInput] = useState('');
    const [usernameInput, setUsernameInput] = useState('');
    const [passInput, setPassInput] = useState('');
    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    
    const submitForm = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3002/auth/registration', {
            email: emailInput,
            username: usernameInput,
            password: passInput
        })
        .then(res => {
            console.log(res)
            if (res.data.error === 'existing email') {
                setEmailError(res.data.error );
                setUsernameError('');
            } else if (res.data.error === 'existing username') {
                setUsernameError(res.data.error);
                setEmailError('')
            } else {
                console.log('success')
            }
            console.log(res)
        })
    } 

    return (
        <div>
            <h2>sign up</h2>

            <form 
                className='form'
                onSubmit={submitForm}
            >
                <input
                    className='form__input'
                    placeholder='enter your email'
                    type='email'
                    onChange={(e) => setEmailInput(e.target.value)}
                />

                <div className='form__input_error'>
                    {emailError}
                </div>
                

                <input
                    className='form__input'
                    placeholder='enter your username'
                    type='text'
                    onChange={(e) => setUsernameInput(e.target.value)}
                />

                <div className='form__input_error'>
                    {usernameError}
                </div>

                <input
                    className='form__input'
                    placeholder='create a password'
                    type='password'
                    onChange={(e) => setPassInput(e.target.value)}
                />

                <button
                    className='form__btn'
                >
                    sign up
                </button>
            </form>
        </div>
    );
}

export default Regist;