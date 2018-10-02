import React, { Component } from 'react'
import './products.css'
import Aux from '../../hoc/auxx'
import Product from '../../component/product/product'
import dummyData from '../../data/products'
class products extends Component {



	state = {
		products: null,
		displayProducts: []
	}
	componentWillMount() {

		if (this.state.products == null) {
			console.log("component will mount state updated")
			let allProducts = dummyData()
			let showProducts = [...allProducts]
			this.setState({ products: allProducts, displayProducts: showProducts })
		} else {
			console.log("component will mount already data")
		}

	}

	searchHandler = (event) => {

		event.preventDefault();
		const serchText = event.target['searchText'].value;
		if (serchText) {
			const displayProduct = this.state.products.filter((product) => {
				if (product.name.includes(serchText)) {
					return product
				}

			})
			if (displayProduct.length > 0) {
				this.setState({ displayProducts: displayProduct })
				console.log("has some thing" + displayProduct)
			} else {
				let showProducts = [...this.state.products];
				this.setState({ displayProducts: showProducts })
			}

		} else {
			let showProducts = [...this.state.products];
			this.setState({ displayProducts: showProducts })
		}


	}

	render() {

		let renderProduct = this.state.displayProducts.map((product) => {
			return (
				<div className="col-3">
					<Product product={product} />
				</div>
			)
		})

		return (
			<Aux>
				<div className="row" >
					<div className="col-12" style={{ backgroundColor: 'white', margin: '50px 20px' }} >
						<form className="form-inline" name="frm" onSubmit={this.searchHandler}>
							<input name="searchText" className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
							<button name="btn" className="btn btn-outline-success my-2 my-sm-0 btn-lg" type="submit">Search</button>
						</form>
					</div>
				</div>

				<div className="row" style={{}}>
					{renderProduct}
				</div>
			</Aux>
		)
	}//end of render
}
export default products 