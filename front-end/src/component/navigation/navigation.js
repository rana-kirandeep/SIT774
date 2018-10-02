import React from 'react'
import './navigation.css'
import {Link} from 'react-router-dom'

const clickHandler=(event)=>{
event.target.classList.add("active");
}
const navigation = (props) => {
	return (
		
			<nav className="Navigation" style={{  }}>
			<Link to="/home" onClick={clickHandler}  >Home</Link>
			<Link to="/products">Products </Link>
			<Link to="/contactus">Contact us </Link>
			<Link to="/feedback">Feedback</Link>
			<Link to="/aboutus">About Us</Link>
			</nav>

	)
}
export default navigation 