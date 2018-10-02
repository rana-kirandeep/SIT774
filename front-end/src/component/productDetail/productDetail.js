import React, { Component } from 'react'
import './productDetail.css'
import Aux from '../../hoc/auxx'
import Navigation from '../navigation/navigation'
import dummyData from '../../data/products'


class ProductDetail extends Component {
 
	componentWillMount() {
		if (!this.state.item) {
			const products = dummyData();
			const product = products.find((product) => {
				if (this.props.match.params['id'] == product.id) {
					return product;
				}
			})
		
		let item = { ...product };
		this.setState({item:{...product}});
		
		}


		
	}

	state = {
		item: null,
		quantity: 1
	}

	render() {


		return (
			<Aux>
				<div className="row" >
					<div className="col-8" align="center" style={{ backgroundColor1: 'green' }}>
						<div className="pproduct-img">
							<img className="img-fluid product-detail-img" src={"/img/" + this.state.item.id + ".png"} alt={"img/" + this.state.item.id + ".png"} />
						</div>

					</div>
					<div className="col-4" className="product-detail-side" style={{ backgroundColor1: 'red' }} >
						<div>
							<span> Product name:</span> <span>{this.state.item.name}</span>
						</div>
						<div>
							<span> Product Price:</span> <span>${this.state.item.price}</span>
						</div>
						<div>
							<span> Product Description:</span> <span>{this.state.item.description}</span>
						</div>
						<div>
							<span>Quantity</span> <span><input type="text" size="3" value={this.state.quantity} 
							onChange={(event)=>this.setState({quantity:event.target.value})}/></span>
						</div>
					</div>

				</div>
				<div className="row">
					<div className="col-8" align="center" >
						<div style={{ margin: '20px' }}>
							<button className='btn-primary cart-btn'> Add to cart</button>

						</div>
					</div>

				</div>


			</Aux>
		)
	}
}


export default ProductDetail 