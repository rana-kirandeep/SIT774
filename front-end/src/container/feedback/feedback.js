import React, { Component } from 'react'
import './feedback.css'
import Aux from '../../hoc/auxx'
import Axios from 'axios';
import FeedbackTable from '../../component/feedbackTable/feedbackTable'

class Feedback extends Component {
	state = {
		rating: null,
		category: null,
		comment: "",
		feedbacks: null
	}

	ratingHandler = (event) => {

		if (event.target.value != this.state.rating) {
			this.setState({ rating: event.target.value })
		} else {
			this.setState({ rating: null })
		}
	}
	categoryHandler = (event) => {

		if (event.target.value != this.state.category) {
			this.setState({ category: event.target.value })
		} else {
			this.setState({ category: null })
		}
	}

	resetHandler = (event) => {
		event.preventDefault();
		this.setState({
			rating: null,
			category: null,
			comment: ""
		})
	}

	submitFeedback = (event) => {

		event.preventDefault();
		let data = {
			rating: this.state.rating,
			category: this.state.category,
			comment: this.state.comment
		}

		Axios.post('http://localhost:4000/feedback',
			data)
			.then(response => {

				if (response.status === 200) {

					this.setState({
						rating: null,
						category: null,
						comment: "",
						feedbacks: response.data
					})


				}
			}).catch((error) => {
				console.log("error in api")
			})
	}

	componentDidMount() {
		Axios.get('http://localhost:4000/feedback')
			.then(response => {
				if (response.status === 200) {
					this.setState({ feedbacks: response.data })
				}
			}).catch((error) => {
				console.log("error in api")
			})
	}

	render() {

		return (
			<Aux>
				<div className="row">
					<div className="col-sm-12">
						<span className="FeedbackTableHeading">Recent Feedbacks</span>
						<FeedbackTable feedbacks={this.state.feedbacks} />


					</div>
				</div>
				<div className="row" >
					<div className="col-12 subSection" >
						<div className="row subSection-heading">

							<div className="col-12 ">Please provide your feedback</div>
						</div>

						<div className="row subSection-body" align="center" >

							<div className="col-1"> </div>
							<div className={this.state.rating == 1 ? "col-2 rating active-rating" : "col-2 rating"}
								align="center">
								<button onClick={this.ratingHandler} value='1'>{'\uD83D\uDE2D'}</button>
							</div>
							<div className={this.state.rating == 2 ? "col-2 rating active-rating" : "col-2 rating"} align="center">
								<button onClick={this.ratingHandler} value='2'>
									{'\uD83D\uDE1E'}</button>
							</div>
							<div className={this.state.rating == 3 ? "col-2 rating active-rating" : "col-2 rating"} align="center">
								<button onClick={this.ratingHandler} value='3'>
									{'\uD83D\uDE10'}</button>
							</div>
							<div className={this.state.rating == 4 ? "col-2 rating active-rating" : "col-2 rating"} align="center">
								<button onClick={this.ratingHandler} value='4'>
									{'\uD83D\uDE42'}</button>
							</div>
							<div className={this.state.rating == 5 ? "col-2 rating active-rating" : "col-2 rating"} align="center">
								<button onClick={this.ratingHandler} value='5'>
									{'\uD83E\uDD29'}</button>
							</div>
							<div className="col-1"> </div>

						</div>
					</div>

				</div>
				<div className="row" >
					<div className="col-12 subSection" >
						<div className="row subSection-heading">

							<div className="col-12 ">Please select your feedback category</div>
						</div>

						<div className="row subSection-body" align="center" >


							<div className={this.state.category == 1 ? "col-4 category active-category" : "col-4 category"}
								align="center">
								<button className="btn btn-lg" onClick={this.categoryHandler} value='1'>General</button>
							</div>
							<div className={this.state.category == 2 ? "col-4 category active-category" : "col-4 category"} align="center">
								<button className="btn btn-lg" onClick={this.categoryHandler} value='2'>Sugession</button>
							</div>
							<div className={this.state.category == 3 ? "col-4 category active-category" : "col-4 category"} align="center">
								<button className="btn btn-lg" onClick={this.categoryHandler} value='3'>Complaint</button>
							</div>




						</div>
					</div>
				</div>

				<div className="row" >
					<div className="col-12 subSection" >
						<div className="form-group row">
							<label className="col-sm-2 col-form-label">Comments: </label>
							<div className="col-sm-10">
								<textarea value={this.state.comment} onChange={(event) => this.setState({ comment: event.target.value })} required
									className="form-control form-control-lg"
									id="exampleFormControlTextarea1" rows="3"></textarea>
							</div>
						</div>
					</div>
				</div>


				<div className="row" >
					<div className="col-sm-2" >
					</div>
					<div className="col-sm-2" >
						<button type="submit" onClick={this.submitFeedback} className="btn btn-primary btn-lg">Submit</button>
					</div>

					<div className="col-sm-2">
						<button type="Reset" onClick={this.resetHandler} className="btn btn-primary btn-lg">Reset</button>
					</div>
				</div>


			</Aux>
		)
	}
}
export default Feedback