import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
	// const [data, setData] = useState([]);
	// useEffect(() => {
	//     fetch("https://api.github.com/users/NishantKumar14")
	//         .then((response) => response.json())
	//         .then((data) => {
	//             console.log(data);
	//             setData(data);
	//         });
	// }, []);

	const data = useLoaderData();
	return (
		<div className="flex flex-col items-center bg-gray-600 text-white p-4 mx-72 text-3xl">
			<span className="mb-4">Github followers: {data.followers}</span>
			<img src={data.avatar_url} alt="Git Picture" width={300} />
		</div>
	);
}

export default Github;

export const githubInfoLoder = async () => {
	const response = await fetch("https://api.github.com/users/NishantKumar14");
	return response.json();
};
