'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonFill } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";


const HandelDark = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const currentThem = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        setMounted(true)
    },[])

    console.log(theme, ' this is')
    return (
		<div>
			{mounted &&
				(currentThem === "dark" ? (
					<MdOutlineLightMode
						className='cursor-pointer text-gray-700 hover:text-blue-600'
						onClick={() => setTheme("light")}
					/>
				) : (
					<BsMoonFill
						className='cursor-pointer text-gray-700 hover:text-blue-600'
						onClick={() => setTheme("dark")}
					/>
				))}
		</div>
	);
};

export default HandelDark;