import Link from 'next/link';
import React from 'react';
import { TbGridDots } from "react-icons/tb";
import HandelDark from '../HandelDark/HandelDark';
const HomeHeader = () => {
    return (
		<header className='flex justify-end p-5 text-sm'>
			<div className='flex space-x-4 items-center'>
				<HandelDark />
				<Link href={"https://mail.google.com/mail/u/0/#inbox"}>
					Gmail
				</Link>
				<Link href={"https://www.google.com/imghp?hl=en"}>Image</Link>

				<TbGridDots className='text-2xl' />

				<button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md duration-300'>
					Sing in
				</button>
			</div>
		</header>
	);
};

export default HomeHeader;