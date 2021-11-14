import "./App.css";
import Header from "./components/important/header/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/home/home";
import About from "./screens/about/about";
import Footer from "./components/important/footer/footer";

function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Routes>
					<Route path='/about' element={<About />} />

					<Route path='/' element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
