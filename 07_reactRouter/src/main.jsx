import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoder } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		children: [
// 			{
// 				path: "",
// 				element: <Home />,
// 			},
// 			{
// 				path: "about",
// 				element: <About />,
// 			},
// 			{
// 				path: "contact",
// 				element: <Contact />,
// 			},
// 		],
// 	},
// ]);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="user/:userid" element={<User />} />
			<Route loader={githubInfoLoder} path="github" element={<Github />} />
		</Route>
	)
);


{/* 
    For creating router/router/users
    example: abc.com/about/def
    <Route path='abc' element={ <abc/> }> 
        <Route path='def' element={ <def/> } />
    </Route>
*/}


createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
