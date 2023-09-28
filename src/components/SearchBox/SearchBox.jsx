/** @format */

"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
const SearchBox = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [term, setTerm] = useState(searchParams.get("searchThem") || "");

	const handelSubmit = e => {
		e.preventDefault();

		if (!term.trim()) return;
		router.push(`/search/web?searchThem=${term}`);
	};

	return (
		<form
			onSubmit={handelSubmit}
			className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center'
		>
			<input
				type='text'
				name=''
				id=''
				className='w-full focus:outline-none'
				onChange={e => setTerm(e.target.value)}
				value={term}
			/>
			<RxCross2
				onClick={() => setTerm("")}
				className='text-2xl text-gray-500 cursor-pointer sm:mr-2'
			/>
			<BsFillMicFill className='hidden sm:inline-flex text-4xl text-blue-400 pl-4 border-l-2 border-gray-300 mr-3' />
			<AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer' />
		</form>
	);
};

export default SearchBox;
