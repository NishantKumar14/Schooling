import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
	return(
		<div>
			<h3>Custom App | Chai</h3>
		</div>
	)
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
	<a href="https://google.com" target='_blank'>VisitGoogle </a>
)

const anotherUser = 'ChaiAurReact';

const reactElement = React.createElement(
	'a',
	{ href:'https://google.com', target:'_blank' },
	'Click me to visit Google',
	anotherUser
)

ReactDom.createRoot(document.getElementById('root')).render(
	reactElement

	
  	// <React.StrictMode>
  	// </React.StrictMode>
)
