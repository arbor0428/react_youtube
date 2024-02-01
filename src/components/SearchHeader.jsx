import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { BsSearch, BsYoutube } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
    const {keyword} = useParams();
    const navigate = useNavigate();
    const [text, setText] = useState ('');
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/videos/${text}`);
    };
    useEffect(() => setText(keyword || ''), [keyword])
    return (
    <header className='w-full flex p-4 text-2xl mb-4'>
        <Link to='/' className='flex items-center'>
            <BsYoutube className ='text-3xl text-brand'/>
            <h1 className='font-bold ml-2 text-xl'>Youtube</h1>
        </Link>
        <form className='w-full flex justify-center' onSubmit= {handleSubmit}>
            <input 
                className='w-5/12 py-2 px-8 box-border border border-gray-300 rounded-l-full text-gray-500 text-base'
                type="text" 
                placeholder='Search...' 
                value={text} onChange={(e) => setText(e.target.value)} 
            />
            <button className='border border-l-0 border-gray-300 px-5 rounded-r-full'>
                <BsSearch />
            </button>
        </form>
    </header>
    );
}

