import React from 'react';
import styles from './Home.module.css'
import { useTranslation } from 'react-i18next';

function Home() {
	const { t } = useTranslation();
	return (
		<div className={ styles.intro }>
			<p>
				{ t("home.mission_1") }  <span className={ styles.beta }>{ t("home.beta") }</span> { t("home.mission_2") }<br/>
				{ t("home.feedback") } <a href={ t("home.linkedin") } target='_blank'>Linkedn</a>.
			</p>
			<p>{ t("home.find") }</p>
			<h3>{ t("menu.type") }</h3>
			<p>{ t("home.type") }</p>
			<h3>{ t("menu.fix") }</h3>
			<p>{ t("home.fix") }</p>
			<h3>{ t("menu.docs") }</h3>
			<p>{ t("home.docs") }</p>
		</div>
	)
}

export default Home
