import React, { useState } from "react";
import Header from "../components/Header";
import "./crew.css";
import { data } from "../starter-code/data";

const Crew = () => {
	const [crew, setCrew] = useState(data.crew[0]);
	const [active, setActive] = useState(0);
	// const [change, setChange] = useState(0);

	console.log(crew);
	const handleClick = (id) => {
		setActive(id);
		setCrew(data.crew[id]);
	};

	return (
		<div className='crew-Container'>
			<Header></Header>
			<h1>02 MEET YOUR CREW</h1>
			<section className='crewSection'>
				<div className='crewTopContainer'>
					<img src={crew.images.png} alt='' />
				</div>
				<div className='crewBottomContainer'>
					<div className='bottomContent'>
						<section className='section-CrewDetails'>
							<div className='balls'>
								{data.crew.map((item, index) => {
									return (
										<div
											className={active === index ? "ball active" : "ball"}
											key={index}
											onClick={() => handleClick(index)}
										></div>
									);
								})}
							</div>
							<div className='crewDetails'>
								<h4>{crew.role}</h4>
								<h1>{crew.name}</h1>
								<p>{crew.bio}</p>
							</div>
						</section>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Crew;
