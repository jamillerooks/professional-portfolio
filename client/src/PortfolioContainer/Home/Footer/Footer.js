import React from 'react';
import './Footer.css';
import shape from '../../../assets/Home/shape-bg.png';

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer-parent">
				<img src={shape} alt="wavy line" />
			</div>
		</div>
	);
}

export default Footer;
