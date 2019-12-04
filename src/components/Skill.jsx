import React, { useState } from 'react';
import '../css/Skill.css'

const Skill = props => {
	const [exp, setExp] = useState(0);
	const [level, setLevel] = useState(1);
	const [visible, setVisible] = useState(false);

	const clickShow = () => {
		visible ? setVisible(false) : setVisible(true)
	}

	return (
		<div className="skillContainer">
			<div className="skillTitleBox">
				<h1 className="skillTitle" onClick={clickShow}> {props.skillName} </h1>
			</div>
			<>
				{visible ?
					<div className="statsBox">
						<h2 className="levelInfo">Level: {props.skill.level} </h2>
						<h3 className="expInfo">Experience: {props.skill.exp} </h3>
						<div className="buttonContainer">
							<button className="btn btn-primary" onClick={props.takeAction}> {props.skillAction} </button>
						</div>
					</div> : null
				}
			</>
		</div>
	);
};

export default Skill;