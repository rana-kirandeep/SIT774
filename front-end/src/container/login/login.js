import React, { Component } from 'react'
import './login.css'
import Aux from '../../hoc/auxx'
import Axios from 'axios';
import BackDrop from '../../component/backDrop/backDrop'
import Modal from '../../component/modal/modal'
//import FeedbackTable from '../../component/feedbackTable/feedbackTable'


class Login extends Component {

	state = {
		userName: null,
		passwd: null,
		passwd2: null,
		showLogin: true,
		loginError: false

	}

	signupSubmit= (event) => {
		event.preventDefault()
		let data = {
			userName: this.state.userName,
			passwd: this.state.passwd,
		}
		this.createUser(data);
	}

	createUser = (data) => {
		Axios.post('http://localhost:4000/createUser',
			data)
			.then(response => {
				if (response.status === 200) {
					this.setState({showLogin: true,loginError: false})
					if (response.data.createUser) { 
						let { history } = this.props;
						history.push({
							pathname: '/',
						});
					} else {
						this.setState({
							userName: "",
							passwd: ""
						})
					}


				}
			}).catch((error) => {
				console.log("error in api")
			})
	}





	loginHandler = (event) => {
		event.preventDefault()

		let data = {
			userName: this.state.userName,
			passwd: this.state.passwd,
		}
		this.postUser(data);
	}




	postUser = (data) => {
		Axios.post('http://localhost:4000/login',
			data)
			.then(response => {
				debugger
				if (response.status === 200) {
					console.log()
					if (response.data.login) {
						let { history } = this.props;
						history.push({
							pathname: '/products',
						});
					} else {
						this.setState({
							loginError: true,
							userName: "",
							passwd: ""
						})
					}


				}
			}).catch((error) => {
				console.log("error in api")
			})
	}






	signUpHandler = (event) => {
		event.preventDefault();
		this.setState({ showLogin: false })
	}

	render() {
		let errorSection = this.state.loginError ? <div className="error">Login failed Please try again</div> : null

		let login = (<Modal show="true">
			{errorSection}
			<form className="loginForm">

				<div class="form-group row">
					<label for="userName" class="col-sm-2 col-form-label">UserName</label>
					<div class="col-sm-10">
						<input type="text" class="form-control"
							id="userName"
							value={this.state.userName}

							onFocus={()=>this.setState({ loginError: false })}
							onChange={(event) => this.setState({ userName: event.target.value })}
							placeholder="User Name" />
					</div>
				</div>
				<div class="form-group row">
					<label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
					<div class="col-sm-10">
						<input type="password"
							onFocus={()=>this.setState({ loginError: false })}

							value={this.state.passwd}
							onChange={(event) => this.setState({ passwd: event.target.value })}

							class="form-control" id="inputPassword3" placeholder="Password" />
					</div>
				</div>
				<div class="form-group row">

					<div class="col-sm-7" align="center">
						<button type="submit" className="btn btn-primary" onClick={this.loginHandler}>Login</button>
						<a href="" style={{ marginLeft: "20px", fontSize: "1rem" }} onClick={this.signUpHandler}>Signup</a>
					</div>
				</div>

			</form>

		</Modal>
		)
		let signup = (<Modal show="true">
			
			
			<form className="loginForm">

				<div class="form-group row">
					<label for="userName" class="col-sm-2 col-form-label">UserName</label>
					<div class="col-sm-10">
						<input type="text" class="form-control"
							id="userName"
							value={this.state.userName}

							onFocus={()=>this.setState({ loginError: false })}
							onChange={(event) => this.setState({ userName: event.target.value })}
							placeholder="User Name" />
					</div>
				</div>
				<div class="form-group row">
					<label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
					<div class="col-sm-10">
						<input type="password"
							onFocus={()=>this.setState({ loginError: false })}

							value={this.state.passwd}
							onChange={(event) => this.setState({ passwd: event.target.value })}

							class="form-control" id="inputPassword3" placeholder="Password" />
					</div>
				</div>

				<div class="form-group row">
					<label for="passwd2" class="col-sm-2 col-form-label">ReType Password</label>
					<div class="col-sm-10">
						<input type="password"
							onFocus={()=>this.setState({ loginError: false })}

							value={this.state.passwd2}
							onChange={(event) => this.setState({ passwd2: event.target.value })}

							class="form-control" id="passwd2" placeholder="Password" />
					</div>
				</div>
				<div class="form-group row">

					<div class="col-sm-7" align="center">
						<button type="submit" className="btn btn-primary" onClick={this.signupSubmit}>Sign Up</button>
					</div>
				</div>

			</form>

		</Modal>)

		let content = this.state.showLogin ? login : signup

		return (

			<Aux>
				<BackDrop show="true">
				</BackDrop>
				{content}


			</Aux>



		)

	}
}

export default Login