import React, { useState } from 'react';

const ShortForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const data = {
            firstName,
            lastName,
            email,
            password
        }
        console.log(data)

    }

    return (
        <div className='h-screen w-96 mx-auto mt-10'>
            <h1 className='text-2xl text-center'>Sign Up</h1>
            <form onSubmit={handleFormSubmit} className='space-y-6 shadow-md p-12'>
                <div className='flex flex-col max-w-xs'>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        className='border border-slate-300 rounded-md p-2'
                        type='text'
                        name='firstName'
                        id='firstName'
                        required
                        onBlur={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className='flex flex-col max-w-xs'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        className='border border-slate-300 rounded-md p-2'
                        type='text'
                        name='lastName'
                        id='lastName'
                        required
                        onBlur={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className='flex flex-col max-w-xs'>
                    <label htmlFor='email'>Email</label>
                    <input
                        className='border border-slate-300 rounded-md p-2'
                        type='email'
                        name='email'
                        id='email'
                        required
                        onBlur={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col max-w-xs'>
                    <label htmlFor='password'>Password</label>
                    <input
                        className='border border-slate-300 rounded-md p-2'
                        type='password'
                        name='password'
                        id='password'
                        required
                        onBlur={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className='px-4 py-3 bg-indigo-500 text-white rounded-md'
                    type='submit'
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ShortForm;