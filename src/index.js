import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import setResults from './Levels';
import './custom.css';


class Contents extends Component{
	constructor(props) {
		super(props);
		this.state = {
			// config states
			sex: "men",
			bodyweight: "",
			snatch: "",
			cleanAndJerk: "",
			backSquat: "",
			frontSquat: "",

			// calculation states
			weightclass: "",
			snatchLevel: "",
			cleanAndJerkLevel: "",
			backSquatLevel: "",
			frontSquatLevel: "",
			snatchNext: "",
			cleanAndJerkNext: "",
			backSquatNext: "",
			frontSquatNext: ""

		}
		this.clearForm = this.clearForm.bind(this);
	}

	componentDidMount(){
		function getCookie(cname) {
		    var name = cname + "=";
		    var decodedCookie = decodeURIComponent(document.cookie);
		    var ca = decodedCookie.split(';');
		    for(var i = 0; i < ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0) === ' ') {
		            c = c.substring(1);
		        }
		        if (c.indexOf(name) === 0) {
		            return c.substring(name.length, c.length);
		        }
		    }
		    return "";
		};
		
		var state = {
			sex: getCookie("sex") ? getCookie("sex") : "men",
			bodyweight: getCookie("bodyweight"),
			snatch: getCookie("snatch"),
			cleanAndJerk: getCookie("cleanAndJerk"),
			backSquat: getCookie("backSquat"),
			frontSquat: getCookie("frontSquat")
		};
		this.setState(state);
		setTimeout(()=>setResults(this),1000);
	}

	setCookie(cname, value){
		var expires = function(d){
			var year = d.getFullYear()+10;
			var month = d.getMonth();
			var day = d.getDay();
			return new Date(year, month, day).toUTCString();
		}(new Date());
		
		document.cookie = `${cname}=${value}; ${expires};`;
	}

	clearForm(e){
		var state = {};
		for (const s in this.state){
			if (s === "sex"){
				state[s] = "men";
				this.setCookie("sex", "men");
			} else{
				state[s] = "";
				this.setCookie(s, "");
			}
		}
		this.setState(state);
	}

	getLevelUpPercent(ref, lift){
		var current = Number(ref.state[lift]);
		var next = Number(ref.state[lift+"Next"]);
		var percent = current/next;
		return isFinite(percent) ? percent.toFixed(2) : "";
	}

	setSex(s){
		s = (s === "men" || s === "women") ? s : "men";
		this.setState({sex: s});
		setResults(this, "sex", s);
		this.setCookie("sex", s);
	}

	renderInput(ref, label){
		var lift = label.split(" ");

		for (var i = 0; i < lift.length; i++){
			lift[i] = lift[i][0].toUpperCase()+lift[i].substring(1, lift[i].length).toLowerCase();
		};
		lift = lift.join("");
		lift = lift[0].toLowerCase()+lift.substring(1,lift.length);

		function onChange(e){
			var state = {};
			var value = e.target.value;
			state[lift] = value;
			ref.setState(state);
			setResults(ref, lift, e.target.value);
			ref.setCookie(lift, value);
		}

		function overwriteEnter(e){
			if (e.keyCode === 13) {
				e.preventDefault();
				const form = e.target.form;
				const index = Array.prototype.indexOf.call(form, e.target);
				if (index+1 < form.elements.length-1){
					form.elements[index + 1].focus();
				} else{
					form.elements[4].focus();
				}
			}
		}

		return (
			<div>
				<label>{label}</label>
				<input className="form-control" type="number" value={ref.state[lift]} onChange={onChange} onKeyUp={overwriteEnter}/>
			</div>
		);
	}

	render() {
		return (
			<div>
				<h2>Results {this.state.bodyweight ? " - "+this.state.weightclass+" kg": ""}</h2>
				<table className="table table-bordered table-striped table-condensed">
					<thead>
						<tr>
							<th>Lift</th>
							<th>Level</th>
							<th>Current</th>
							<th>Next Level</th>
							<th>% Level Up</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Snatch</td>
							<td>{this.state.snatchLevel}</td>
							<td>{this.state.snatch}</td>
							<td>{this.state.snatchNext}</td>
							<td>{this.getLevelUpPercent(this, "snatch")}</td>
						</tr>
						<tr>
							<td>Clean &amp; Jerk</td>
							<td>{this.state.cleanAndJerkLevel}</td>
							<td>{this.state.cleanAndJerk}</td>
							<td>{this.state.cleanAndJerkNext}</td>
							<td>{this.getLevelUpPercent(this, "cleanAndJerk")}</td>
						</tr>
						<tr>
							<td>Back Squat</td>
							<td>{this.state.backSquatLevel}</td>
							<td>{this.state.backSquat}</td>
							<td>{this.state.backSquatNext}</td>
							<td>{this.getLevelUpPercent(this, "backSquat")}</td>
						</tr>
						<tr>
							<td>Front Squat</td>
							<td>{this.state.frontSquatLevel}</td>
							<td>{this.state.frontSquat}</td>
							<td>{this.state.frontSquatNext}</td>
							<td>{this.getLevelUpPercent(this, "frontSquat")}</td>
						</tr>
					</tbody>
				</table>
				<hr/>
				<form className="form-group">
					<label htmlFor="sex">Sex</label>
					<div>
						<label className="radio-inline">
							<input type="radio"name="sex" checked={this.state.sex === "men"} onChange={()=>this.setSex("men")} />Male</label>
						<label className="radio-inline">
							<input type="radio" name="sex" checked={this.state.sex === "women"} onChange={()=>this.setSex("women")} />Female</label>
					</div>
					<br/>
					{this.renderInput(this, "Bodyweight")}
					{this.renderInput(this, "Snatch")}
					{this.renderInput(this, "Clean and Jerk")}
					{this.renderInput(this, "Back Squat")}
					{this.renderInput(this, "Front Squat")}
					<button type="button" style={{marginTop:"1em"}} onClick={this.clearForm} className="pull-right btn btn-danger">Clear Form</button>
				</form>
				<br/>
				<br/>
			</div>
		);
	}
}

class Container extends Component{
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-8">
						<Contents />
					</div>
					<div className="col-md-2"></div>
				</div>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div>
				<header className="navbar navbar-top">
					<div className="container-fluid">
						<div className="col-md-1"></div>
						<div className="col-md-10 text-center">
							<h1>CATALYST ATHLETICS</h1>
							<h4>WEIGHTLIFTING LEVELS CALCULATOR</h4>
						</div>
						<div className="col-md-1"></div>
					</div>
				</header>
				<Container />
				<footer className="navbar navbar-bottom">
					<div className="container text-center pull-right">
						<p className="navbar-text">Created by: <a href="https://github.com/TysonNgo/weightlifting-levels">Tyson Ngo</a></p>
						<p className="navbar-text">Calculations based on <a href="https://www.catalystathletics.com/article/1836/Olympic-Weightlifting-Skill-Levels-Chart/"><em>Olympic Weightlifting Skill Levels Chart</em> by <em>Greg Everett</em></a></p>
					</div>
				</footer>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
