import React from "react";
import { Link } from "react-router-dom";
import FormBtn from "./FormBtn";
import { useState } from "react";


const SignInForm = () => {
	const [email, setEmail] = useState("");
	const [pwd, setPwd] = useState("");
	let details ={}

	const handleSignIn = (e) => {
		e.preventDefault();
		details = {
			email: email,
			password: pwd
		}

		fetch("http://159.65.21.42:9000/login", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(details),
		})
			.then((resp) => resp.json())
			.then((data) => {
				alert(JSON.stringify(data));
				setEmail("");
				setPwd("");
		});
		
	}
	return (
		<div className="sign_in_container">
			<legend>Sign In</legend>
			<form className="sign_in_form" onSubmit={handleSignIn}>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						placeholder="Enter your email address"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="pwd">Password</label>
					<input
						type="password"
						id="pwd"
						placeholder="Please enter password"
						value={pwd}
						onChange={(e) => setPwd(e.target.value)}
					/>
				</div>
				<div className="forgot_pwd">
					<p>
						<Link to="/signup" className="links text_decoration">
							Forgot Password?
						</Link>
					</p>
				</div>
				<FormBtn width={"100%"} value="Sign In" bg={"#b4cc51"} />
			</form>

			<p>
				Your personal details are safe with us. View our{" "}
				<Link to="" className="links text_decoration">
					Customer Data Promise
				</Link>
			</p>

			<p>
				Don't have an account?{" "}
				<Link to="/signup" className="links text_decoration">
					Register-&gt;
				</Link>
			</p>

			<p>
				Are you an Admin?{" "}
				<Link to="/adminsignin" className="links text_decoration">
					SignIn-&gt;
				</Link>
			</p>
		</div>
	);
};

export default SignInForm;
