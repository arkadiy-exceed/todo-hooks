import { useState } from 'react';
import axios from "axios";
import './Auth.css';

function Auth() {
    const [usernameInput, setUsernameInput] = useState('');
    const [passInput, setPassInput] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passError, setPassError] = useState('');

    const submitForm = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3002/auth/login', {
            username: usernameInput,
            password: passInput
        })
        .then(res => {
            if (res.data.error === 'user doesnt exist') {
                setUsernameError(res.data.error);
                setPassError('');
            } else if (res.data.error === 'invalid password') {
                setPassError(res.data.error);
                setUsernameError('')
            } else {
                console.log(res.data);
                setUsernameError('');
                setPassError('');
            }
            console.log(res);
        })
    }

    return (
        <div>
            <h2>sign in</h2>

            <form 
                className='form'
                onSubmit={submitForm}
            >

                <input
                    className='form__input'
                    placeholder='your username'
                    type='text'
                    onChange={(e) => setUsernameInput(e.target.value)}
                />

                <div>
                    {usernameError}
                </div>

                <input
                    className='form__input'
                    placeholder='your password'
                    type='password'
                    onChange={(e) => setPassInput(e.target.value)}
                />

                <div>
                    {passError}
                </div>

                <button
                    className='form__btn'
                >
                    sign in
                </button>
            </form>
        </div>
    );
}

export default Auth;