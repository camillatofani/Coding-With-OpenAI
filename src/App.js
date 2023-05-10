import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';
import Home from './pages/Home/Home';
import TypeOf from './pages/TypeOf/TypeOf';
import FixMyCode from './pages/FixMyCode/FixMyCode';
import Docs from './pages/Docs/Docs';
import it from './assets/img/it.svg';
import en from './assets/img/en.svg';
import { useTranslation } from 'react-i18next';


const App = () => {
	const { t, i18n } = useTranslation();
	return (
		<Router>
			<img src={ it } className={ styles.flag } alt="it" onClick={ () => i18n.changeLanguage('it') } />
			<img src={ en } className={ styles.flag } alt="it" onClick={ () => i18n.changeLanguage('en') } />
			<Header />
			<div className={ styles.nav }>
				<Link to="/"><Button style={ { marginRight: '10px' } } text={ t("menu.home") }></Button></Link>
				<Link to="/type-of"><Button style={ { marginRight: '10px' } } text={ t("menu.type") }></Button></Link>
				<Link to="/fix-my-code"><Button style={{ marginRight: '10px' }} text="Fix my code"></Button></Link>
				<Link to="/docs"><Button style={{ marginRight: '10px' }} text="Docs"></Button></Link>
			</div>
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/type-of" element={ <TypeOf /> } />
				<Route path="/fix-my-code" element={ <FixMyCode /> } />
				<Route path="/docs" element={ <Docs /> } />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
