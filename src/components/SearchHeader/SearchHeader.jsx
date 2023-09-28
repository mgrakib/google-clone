import Image from "next/image";
import SearchBox from "../SearchBox/SearchBox";
import { TbGridDots } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import SearchHeaderOption from "../SearchHeaderOption/SearchHeaderOption";
import Link from "next/link";
import HandelDark from "../HandelDark/HandelDark";

const SearchHeader = () => {
    return (
		<header className='sticky top-0 bg-white'>
			<div className='flex items-center p-6 justify-between'>
                <Link href={'/'} className="cursor-pointer">
                <Image
					height={40}
					width={120}
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
				/></Link>

				<div className='flex-1 '>
					<SearchBox />
				</div>

                <HandelDark />
				<div className='hidden md:flex items-center'>
					<AiOutlineSetting className='header-icon' />
					<TbGridDots className='header-icon' />
				</div>
				<button className='bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md duration-300'>
					Sing in
				</button>
			</div>

            <SearchHeaderOption />
		</header>
	);
};

export default SearchHeader;