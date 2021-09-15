// import { useState } from 'react';
import './Regist.css';

function Regist() {

    return (
        <div>
            <h2>sign up</h2>

            <form className='form'>
                <input
                    className='form__input'
                    placeholder='enter your email'
                    type='email'
                />

                <input
                    className='form__input'
                    placeholder='enter your username'
                    type='text'
                />

                <input
                    className='form__input'
                    placeholder='create a password'
                    type='password'
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