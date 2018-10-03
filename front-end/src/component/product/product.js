import React from 'react'
import './product.css'
import Aux from '../../hoc/auxx'
import { Link } from 'react-router-dom'



const product = (props) => {
	return	( <Aux>
		
			<div className="row" >
				<div className="col-12" >
					<div className="prodImage">
						<Link to={"/productDetail/" + props.product.id} >
							<img src={`img/${props.product.image}`} className="img-thumbnail product-img" />
						</Link>
					</div>

				</div>

			</div>
			<div className="row product-detail">
				<div className="col-12" >
					{props.product.name} (${props.product.price})
				</div>

			</div>
		</Aux>

		)
	}
export default product 