'use client'

import { useEffect, useState } from "react";

const CounteryComp = () => {
    const [country, setCountry] = useState('USA')
    useEffect(() => {
        fetch(
			`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
		)
			.then(res => res.json())
			.then(data => {
                setCountry(data.country);
                console.log(data)
			});
    },[])
    return (
        <div>
            <p>{country}</p>
        </div>
    );
};

export default CounteryComp;