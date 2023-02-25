import React from "react";
import Footer from "../../Footer";
import Navigation from "../../Navigation";
import SignInFormBg from "../SignUp/SignInFormBg";
import SignUpForm from "../SignUp/SignUpForm";

const SignUp = () => {
	return (
		<section>
			<Navigation />
			<div className="signup_wrapper">
				<SignUpForm />
				<SignInFormBg />
			</div>
			<Footer />
		</section>
	);
};

export default SignUp;
