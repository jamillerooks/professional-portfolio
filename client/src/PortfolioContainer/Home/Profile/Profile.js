import React from 'react';
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css';
import '../../../App.css';

function Profile() {
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="colz">
						<div className="colz-icon">
							<a href="https://www.facebook.com/Jamille.Rooks/">
								<i className="fa fa-facebook-square"></i>
							</a>
							<a href="https://www.linkedin.com/in/jamillerooks/">
								<i className="fa fa-linkedin-square"></i>
							</a>
							<a href="https://github.com/jamillerooks">
								<i className="fa fa-github-square"></i>
							</a>
							<a href="https://www.instagram.com/jamillerooks1/">
								<i className="fa fa-instagram"></i>
							</a>
						</div>
					</div>
					<div className="profile-details-name">
						<span className="primary-text">
							{' '}
							Hello, I'm <span className="highlighted-text">Jamille</span>
						</span>
					</div>
					<div className="profile-details-role">
						<span className="primary-text">
							{' '}
							<h1>
								{' '}
								<Typical
									loop={Infinity}
									steps={[
										'Enthusiastic Dev 🔥',
										1000,
										'Full Stack Developer 👩‍💻',
										1000,
										'MERN Stack Dev 📱',
										1000,
										'Front-End Dev 💻',
										1000,
										'React/React Native Dev 🌐',
										1000,
									]}
								/>
							</h1>
							<span className="profile-role-tagline">
								Knack for building applications for front and back end
								operations.
							</span>
						</span>
					</div>
					<div className="profile-options">
						<button
							className="btn primary-btn"
							onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
							{' '}
							Hire Me{' '}
						</button>
						<a
							href="JamilleRooks-Resume.pdf"
							download="JamilleRooks-Resume.pdf">
							<button className="btn highlighted-btn">Get Resume</button>
						</a>
					</div>
				</div>
				<div className="profile-picture">
					<div className="profile-picture-background"></div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
