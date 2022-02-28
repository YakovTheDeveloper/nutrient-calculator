import React from "react"
import ReactDOM from "react-dom"
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom"
import { Provider } from "react-redux"
import "./index.css"
import App from "./App"
import store from "./store/store"


ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)



// ReactDOM.render(
//   <BrowserRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>,
//   document.getElementById("root")
// )
