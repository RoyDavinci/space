import React, { useState } from "react";
import Header from "../components/Header";
import "./destination.css";
import { data } from "../starter-code/data";

const Destination = () => {
	const [destination, setDestination] = useState(data.destinations[0]);
	const [active, setActive] = useState(0);

	const handleClick = (id) => {
		setActive(id);
		setDestination(data.destinations[id]);
	};

	return (
		<div className='destination-Container'>
			<Header></Header>
			<h1>01 PICK YOUR DESTINATION</h1>
			<section className='sectionDestination-center'>
				<div className='topDestinationContainer'>
					<img src={destination.images.png} alt='' />
				</div>
				<div className='bottomDestination-Container'>
					<div className='destinationContents'>
						<div className='name-list'>
							<ul>
								{data.destinations.map((name, index) => {
									return (
										<li
											key={index}
											className={active === index ? "active-destination" : ""}
											onClick={() => handleClick(index)}
										>
											{name.name}
										</li>
									);
								})}
							</ul>
						</div>
						<div className='bottomDestination-ContainerItems'>
							<h1>{destination.name}</h1>
							<p>{destination.description}</p>
							<div className='distance'>
								<div className='avg'>
									<p>avg distance</p>
									<p>
										<strong>{destination.distance}</strong>
									</p>
								</div>
								<div className='time'>
									<p>avg travel time</p>
									<p>
										<strong>{destination.travel}</strong>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Destination;
