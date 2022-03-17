import React, { useState } from "react";
import Header from "../components/Header";
import "./technology.css";
import { data } from "../starter-code/data";

const Technology = () => {
	const [tech, setTech] = useState(data.technology[0]);
	const [active, setActive] = useState(0);

	const handleClick = (id) => {
		setActive(id);
		setTech(data.technology[id]);
	};

	return (
		<div className='technologyContainer'>
			<Header></Header>
			<h1>03 SPACE LAUNCH 101</h1>
			<section className='technologyCenter'>
				<div className='technologyTopContainer'>
					<img src={tech.images.portrait} alt='' />
				</div>
				<div className='technologyBottomContainer'>
					<div className='numbers'>
						{data.technology.map((item, index) => {
							return (
								<div
									className={active === index ? "number change" : "number"}
									key={index}
									onClick={() => handleClick(index)}
								>
									<p>{index + 1}</p>
								</div>
							);
						})}
					</div>
					<div className='techContent'>
						<div className='theTech'>
							<h3>THE TECHNOLOGY</h3>
							<h2>{tech.name}</h2>
						</div>
						<p>{tech.description}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Technology;
