import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
// import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";

function App() {
	return (
		<div>
			<NavBar />
			<h2>All Product</h2>
			<Main />
			<Footer />
		</div>
	);
}

export default App;
