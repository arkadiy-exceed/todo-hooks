// import { useState } from 'react';
import './Auth.css';

function Auth() {

    return (
        <div>
            <h2>sign in</h2>

            <form className='form'>

                <input
                    className='form__input'
                    placeholder='your username'
                    type='text'
                />

                <input
                    className='form__input'
                    placeholder='your password'
                    type='password'
                />

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