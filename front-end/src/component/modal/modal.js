import React from 'react'
import './modal.css'
const modal = (props) => {
	return (props.show?<div className="modal1">{props.children}</div>:null)
}
export default modal