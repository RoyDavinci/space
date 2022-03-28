import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../starter-code/assets/shared/logo.svg";
import Menu from "../starter-code/assets/shared/icon-hamburger.svg";
import Close from "../starter-code/assets/shared/icon-close.svg";
import "./header.css";

const Header = () => {
	const [show, setShow] = useState(false);

	return (
		<header>
			<div className='container'>
				<div className='logo'>
					<img src={Logo} alt='' className='logo-image' />
					<img
						src={Menu}
						alt=''
						className='logo-menu'
						onClick={() => setShow(!show)}
					/>
				</div>
				<ul className={show ? "links show" : "links hide"}>
					<li className='close' onClick={() => setShow(!show)}>
						<img src={Close} alt='' />
					</li>
					<li>
						<Link to='/'>
							{" "}
							<strong>00</strong> Home
						</Link>
					</li>
					<li>
						<Link to='/destination'>
							<strong>01</strong> Destination
						</Link>
					</li>
					<li>
						<Link to='/crew'>
							{" "}
							<strong>02</strong> Crew
						</Link>
					</li>
					<li>
						<Link to='/technology'>
							<strong>03</strong> Technology
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
