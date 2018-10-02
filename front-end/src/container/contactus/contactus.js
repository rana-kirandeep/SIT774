import React,{Component} from 'react'
import './contactus.css'
import Aux from '../../hoc/auxx'

class Contactus extends Component{
	render() {
	return (
		<Aux>
			<div className="row" >
				<div className="col-12 cheader" >
					Contact us..
				</div>
			</div>
			<div className="row" >
				<div className="col-12 cnotice" >
					Please fill the form below, we will get back to you shortly.
				</div>
			</div>
			<div className="row" align="center" style={{ marginLeft: '10px' }}>
				<div className="col-8 cbody" >
					<form style={{}}>
						<div className="form-group row">
							<label  className="col-sm-2 col-form-label">*Name</label>
							<div className="col-sm-8">
								<input type="text" name="firstname"
									className="form-control form-control-lg"
									id="firstName" placeholder="First Name" />
							</div>
						</div>

						<div className="form-group row">
							<label  className="col-sm-2 col-form-label">*Phone</label>
							<div className="col-sm-8">
								<input type="text" name="Phone"
									className="form-control form-control-lg" id="phone"
									placeholder="Phone" maxlength="10" />
							</div>
						</div>

						<div className="form-group row">
							<label  className="col-sm-2 col-form-label">*Email:</label>
							<div className="col-sm-8">
								<input type="email" required
									className="form-control form-control-lg"
									id="inputEmail3" placeholder="Email" />
							</div>
						</div>

						<div className="form-group row">
							<label  className="col-sm-2 col-form-label">*Comments: </label>
							<div className="col-sm-8">
								<textarea required 
								className="form-control form-control-lg" 
								id="exampleFormControlTextarea1" rows="3"></textarea>
							</div>
						</div>
						
						<div className="row" >
  								<div className="col-sm-2" >
  								</div>
    							<div className="col-sm-2" >
      								<button type="submit" className="btn btn-primary btn-lg">Submit</button>
    							</div>
    							
    							<div  className="col-sm-2">
      								<button type="Reset" className="btn btn-primary btn-lg">Reset</button>
    							</div>
  						</div>		

						
					</form>
				</div>
			</div>
		</Aux>
	)
}
}

export default Contactus 