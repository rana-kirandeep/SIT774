import React from 'react'
import './feedbackTable.css'
import Aux from '../../hoc/auxx'


const feedbackTable = (props) => {

	let content=null
	if(props.feedbacks && props.feedbacks.length>0){
		debugger
		let tableBody= props.feedbacks.map((feedback)=>{
		return (
				<tr key={feedback.id}>
					<td>{feedback.rating}</td>
					<td>{feedback.category}</td>
					<td>{feedback.comment}</td>
				</tr>)
		})

		 content=(<table className="table table-striped">
							<thead>
							<th>Rating</th>
							<th>Category</th>
							<th>Comment</th>	
							</thead>
							<tbody>{tableBody}</tbody>
							
						</table>)

		
	}
	

	return(
		<div>{content?content: "No feedback Provided"}</div>
		)


}
export default feedbackTable