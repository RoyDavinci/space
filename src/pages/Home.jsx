import React from "react";
import Header from "../components/Header";
import "./home.css";

const Home = () => {
	return (
		<main className='homeMain-Container'>
			<Header></Header>
			<div className='content'>
				<section>
					<div className='section-content'>
						<h2>So, you want to travel to</h2>
						<h1>SPACE</h1>
						<h3>
							Let’s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge of
							it. Well sit back, and relax because we’ll give you a truly out of
							this world experience!
						</h3>
					</div>
				</section>
				<article>
					<div className='explore'>
						<h2>Explore</h2>
					</div>
				</article>
			</div>
		</main>
	);
};

export default Home;
