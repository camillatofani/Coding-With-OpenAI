import React from 'react';
import styles from './Footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();
	return (
		<footer className={ styles.footer }>
			{ t("footer.coding") } &#0169; { t("general.name") } |&nbsp;<a href={ t("general.website") } taregt='_blank'>Website</a>&nbsp;|&nbsp;<a href={ t("general.linkedin") } target='_blank' rel="noreferrer">Linkedn</a>
		</footer>
	);
};

export default Footer;
