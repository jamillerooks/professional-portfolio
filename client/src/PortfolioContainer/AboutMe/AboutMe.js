import React, { useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

function AboutMe(props) {
	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;
		Animations.animations.fadeInScreen(props.id);
	};
	const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
		fadeInScreenHandler
	);

	const SCREEN_CONSTRAINTS = {
		description:
			'Accomplished, motivated, and dynamic leader with experience and expertise in web development, project management, and multifaceted collaboration in fast paced environments. Adept at defining vision, developing strategies, and driving continuous improvement. Career track includes contribution to high-performance work cultures with a demonstrated ability to partner throughout all levels of the organization. Seeking a career change to the Web Development sector. Proud Veteran of the United States Army and United States Coast Guard.',
		highlights: {
			bullets: [
				'Full Stack web development',
				'Interactive Front End web design',
				'HTML/CSS/JavaScript/JQuery/Handlebars/Bootstrap',
				'MERN stack - MongoDB, Express.js, React.js, Node.js',
				'Deployment and Delivery - Heroku, Github, Unit Testing',
				'API Design - Client-Server Model/REST/JSON/AJAX(Fetch API)',
				'Managing databases - MySQL - MongoDB',
			],
			heading: 'Areas of Interest:',
		},
	};
	const renderHighlight = () => {
		return SCREEN_CONSTRAINTS.highlights.bullets.map((value, i) => (
			<div className="highlight" key={i}>
				<div className="highlight-blob"></div>
				<span>{value}</span>
			</div>
		));
	};
	return (
		<div className="about-me-container screen-container fade-in" id={props.id || ''}>
			<div className="about-me-parent">
				<ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
				<div className="about-me-card">
					<div className="about-me-profile"></div>
					<div className="about-me-details">
						<span className="about-me-description">
							{SCREEN_CONSTRAINTS.description}
						</span>
						<div className="about-me-highlights">
							<div className="highlight-heading">
								<span>{SCREEN_CONSTRAINTS.highlights.heading}</span>
							</div>
							{renderHighlight()}
						</div>
						<div className="about-me-options">
							<button className="btn primary-btn"
							onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
								{''}
								Hire Me{' '}
							</button>
							<a
								href="JamilleRooks-Resume.pdf"
								download="JamilleRooks-Resume.pdf">
								<button className="btn highlighted-btn">Get Resume</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
