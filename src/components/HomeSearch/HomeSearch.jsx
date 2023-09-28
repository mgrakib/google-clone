'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
const HomeSearch =  () => {
    const router  = useRouter()
    const [input, setInput] = useState('')
    const [randomSearchLoading, setRandomSearchLoading] = useState(false)
    const handelSubmti = (e) => {
        e.preventDefault();
        if(!input.trim()) return
        
        router.push(`/search/web?searchThem=${input}`)
    }

    const randomSearch = async () => {
        setRandomSearchLoading(true);
        const res = await fetch(`https://random-word-api.herokuapp.com/word`);
        if(!res.ok) return
        const data = await res.json()

        
        setRandomSearchLoading(true);
        router.push(`search/web?searchThem=${data[0]}`)

    }
    return (
		<>
			<form
				onSubmit={handelSubmti}
				className='flex w-full mt-5 mx-auto max-w-[90%] sm:max-w-xl lg:max-w-2xl border border-gray-200 rounded-full focus-within:shadow-md hover:shadow-md duration-200 px-5 py-3'
			>
				<AiOutlineSearch className='text-xl text-gray-500 mr-3' />

				<input
					value={input}
					onChange={e => setInput(e.target.value)}
					type='text'
					className='flex-grow focus:outline-none'
				/>

				<BsFillMicFill className='text-xl text-gray-500 mr-3' />
			</form>

			<div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 space-x-0 sm:space-x-2 mt-8'>
				<button
					onClick={handelSubmti}
					className='btn'
				>
					Google Search{" "}
				</button>
				<button
					disabled={randomSearchLoading}
					onClick={randomSearch}
					className='btn flex items-center justify-center'
				>
					{randomSearchLoading ? (
						<img
							src='loading.svg'
							alt='loading...'
							className='text-center'
						/>
					) : (
						"I am feeling Lucky"
					)}
				</button>
			</div>
		</>
	);
};

export default HomeSearch;