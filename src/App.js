import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route
					path='/destination'
					element={<Destination></Destination>}
				></Route>
				<Route path='/crew' element={<Crew></Crew>}></Route>
				<Route path='/technology' element={<Technology></Technology>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
