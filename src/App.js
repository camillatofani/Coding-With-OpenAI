import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';
import TypeOf from './pages/TypeOf/TypeOf';
import FixMyCode from './pages/FixMyCode/FixMyCode';
import Docs from './pages/Docs/Docs';

const App = () => {
	return (
		<Router>
			<Header />
			<div className={ styles.nav }>
				<Link to="/"><Button style={{ marginRight: '10px' }} text="Home"></Button></Link>
				<Link to="/type-of"><Button style={{ marginRight: '10px' }} text="Type of"></Button></Link>
				<Link to="/fix-my-code"><Button style={{ marginRight: '10px' }} text="Fix my code"></Button></Link>
				<Link to="/docs"><Button style={{ marginRight: '10px' }} text="Docs"></Button></Link>
			</div>
			<Routes>
				<Route path="/" element={ <h1>Home</h1> } />
				<Route path="/type-of" element={ <TypeOf /> } />
				<Route path="/fix-my-code" element={ <FixMyCode /> } />
				<Route path="/docs" element={ <Docs /> } />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
