import React from 'react'
import './layout.css'
import Aux from '../../hoc/auxx'
import Navigation from '../navigation/navigation'


const layout = (props) => {
	return (
		<Aux>
			<Navigation/>
			<div>{props.children}</div>
		</Aux>
	)
}
export default layout 