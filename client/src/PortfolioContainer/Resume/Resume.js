import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
//import {Link} from 'react-router-dom'
import './Resume.css';
//import logoSrc from '../../assets/Resume';

const Resume = (props) => {
	/* STATES */
	const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
	const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

	let fadeInScreenHandler = (screen) => {
		if (screen.fadeInScreen !== props.id) return;

		Animations.animations.fadeInScreen(props.id);
	};
	const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
		fadeInScreenHandler
	);

	/* REUSABLE MINOR COMPONENTS */
	const ResumeHeading = (props) => {
		return (
			<div className="resume-heading">
				<div className="resume-main-heading">
					<div className="heading-bullet"></div>
					<span>{props.link ? 
							<a href={`${props.link}`} target="_blank" rel="noreferrer">{props.heading ? props.heading : ''}</a>
								: props.heading ? props.heading : '' 
								}
					</span>
					{props.fromDate && props.toDate ? (
						<div className="heading-date">
							{props.fromDate + '-' + props.toDate}
						</div>
					) : (
						<div></div>
					)}
				</div>
				<div className="resume-sub-heading">
					<span>{props.subHeading ? props.subHeading : ''}</span>
				</div>
				<div className="resume-heading-description">
					<span>{props.description ? props.description : ''}</span>
				</div>
			</div>
		);
	};

	/* STATIC RESUME DATA FOR THE LABELS*/
	const resumeBullets = [
		{ label: 'Education', logoSrc: 'education.svg' },
		{ label: 'Work History', logoSrc: 'work-history.svg' },
		{ label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
		{ label: 'Projects', logoSrc: 'projects.svg' },
		{ label: 'Interests', logoSrc: 'interests.svg' },
	];

	//here we have
	const programmingSkillsDetails = [
		{ skill: 'JavaScript', ratingPercentage: 85 },
		{ skill: 'React JS', ratingPercentage: 75 },
		{ skill: 'Express JS', ratingPercentage: 80 },
		{ skill: 'Node JS', ratingPercentage: 82 },
		{ skill: 'HTML', ratingPercentage: 80 },
		{ skill: 'CSS', ratingPercentage: 80 },
	];

	const projectsDetails = [
		{
			title: 'Weather Dashboard',
			duration: { fromDate: '2021', toDate: '2022' },
			description:
				'This weather dashboard takes advantage of the OpenWeatherMap API, and user input to get the forecast.',
            link: "https://jamillerooks.github.io/weather-dashboard/",
			subHeading: 'Technologies Used:  JavaScript, Heroku, Express Js, Node Js, HTML, CSS.',
		},
		{
			title: 'Employee Tracker ',
			duration: { fromDate: '2021', toDate: '2022' },
			description:
				'Content management system(CMS) command-line application that creates an employee database',
			link: "https://drive.google.com/file/d/1jySu5nwRtFInbw9of-zKVNiz_BTqblbZ/view",
			subHeading:
				'Technologies Used: Mysql, JavaScript, Node JS,',
		},
		{
			title: 'Tech Blog ',
			duration: { fromDate: '2021', toDate: '2022' },
			description:
				'CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts.',
			link: "https://tech-blog-launch.herokuapp.com/",
			subHeading:
				'Technologies Used: Mysql, JavaScript, Node JS, Handlebars, Sequelize, Heroku',
		},

	];

	const resumeDetails = [
		<div className="resume-screen-container" key="education">
			<ResumeHeading
				heading={'Troy University'}
				subHeading={'Bachelor of Science Business Management'}
				fromDate={'2003'}
				toDate={'2007'}
			/>

			<ResumeHeading
				heading={'Georgia Tech University'}
				subHeading={'Georgia Tech Coding Boot Camp'}
				fromDate={'2021'}
				toDate={'2022'}
			/>
			<ResumeHeading
				heading={'Crossland High School'}
				subHeading={'Vocational Business Management'}
				fromDate={'1981'}
				toDate={'1984'}
			/>
		</div>,

		/* WORK EXPERIENCE */
		<div className="resume-screen-container" key="work-experience">
			<div className="experience-container">
				<ResumeHeading
					heading={'Sparrow Property Management, Inc./ Keller Williams Realty'}
					subHeading={'Business Owner, Real Estate Broker'}
					fromDate={'1997'}
					toDate={'Present'}
				/>
				<div className="experience-description">
					<span className="resume-description-text">
					- Develop roadmap and standards for all property technology including access control, 
					tenant engagement, amenity management and building network infrastructure design and delivery.
					</span>
				</div>
				<div className="experience-description">
					<span className="resume-description-text">
						- Utilize market knowledge and promotional strategies to drive occupancy to 98%.
					</span>
					<br />
					<span className="resume-description-text">
						- Identify industry trends and make recommendations to Senior Leadership on new technologies 
					    that can optimize property level performance.
					</span>
					<br />
					<span className="resume-description-text">
						- Prepare annual property technology budget in coordination with Real Estate Services and 
					    Asset Management.
					</span>
					<br />
				</div>
			</div>
		</div>,

		/* PROGRAMMING SKILLS */
		<div
			className="resume-screen-container programming-skills-container"
			key="programming-skills">
			{programmingSkillsDetails.map((skill, index) => (
				<div className="skill-parent" key={index}>
					<div className="heading-bullet"></div>
					<span>{skill.skill}</span>
					<div className="skill-percentage">
						<div
							style={{ width: skill.ratingPercentage + '%' }}
							className="active-percentage-bar"></div>
					</div>
				</div>
			))}
		</div>,

		/* PROJECTS */
		<div className="resume-screen-container" key="projects">
			{projectsDetails.map((projectsDetail, index) => (
				<ResumeHeading
					key={index}
					link={projectsDetail.link}
					heading={projectsDetail.title}
					subHeading={projectsDetail.subHeading}
					description={projectsDetail.description}
					fromDate={projectsDetail.duration.fromDate}
					toDate={projectsDetail.duration.toDate}
				/>
			))}
		</div>,

		/* Interests */
		<div className="resume-screen-container" key="interests">
			<ResumeHeading
				heading="Business Mentor for Young Entrepreneurs"
				description="Provide advice and guidance on accounting, taxes, marketing and cash management."
			/>
			<ResumeHeading
				heading="Skating"
				description="Roller skating is a fun and exciting way to stay physically fit."
			/>
			<ResumeHeading
				heading="Gardening"
				description="I love to see things grow. Gardening is a rewarding way to nourish growth and feed a community"
			/>
		</div>,
	];

	const handleCarousel = (index) => {
		let offsetHeight = 360;

		let newCarouselOffset = {
			style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
		};

		setCarouselOffsetStyle(newCarouselOffset);
		setSelectedBulletIndex(index);
	};

	const getBullets = () => {
		return resumeBullets.map((bullet, index) => (
			<div
				onClick={() => handleCarousel(index)}
				className={
					index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
				}
				key={index}>
					<img
          className="bullet-logo"
		  //src={`/Resume/logo512.png`}
          src={`/Resume/${bullet.logoSrc}`}
          alt=" "  />
				{/* <img
					className="bullet-logo"
					//src={bullet.logoSrc} alt="image not found" />					 */}
				
				<span className="bullet-label">{bullet.label}</span>
			</div>
		));
	};

	const getResumeScreens = () => {
		return (
			<div
				style={carouselOffsetStyle.style}
				className="resume-details-carousel">
				{resumeDetails.map((ResumeDetail) => ResumeDetail)}
			</div>
		);
	};

	useEffect(() => {
		return () => {
			/* UNSUBSCRIBE THE SUBSCRIPTIONS */
			fadeInSubscription.unsubscribe();
		};
	}, [fadeInSubscription]);

	return (
		<div
			className="resume-container screen-container fade-in"
			id={props.id || ''}>
			<div className="resume-content">
				<ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
				<div className="resume-card">
					<div className="resume-bullets">
						<div className="bullet-container">
							<div className="bullet-icons"></div>
							<div className="bullets">{getBullets()}</div>
						</div>
					</div>

					<div className="resume-bullet-details">{getResumeScreens()}</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
