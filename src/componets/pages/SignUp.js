import React from "react";
import SignInFormBg from "../SignUp/SignInFormBg";
import SignUpForm from "../SignUp/SignUpForm";

const SignUp = () => {
	return (
		<section>
			<div className="signup_wrapper">
				<SignUpForm />
				<SignInFormBg />
			</div>
		</section>
	);
};

export default SignUp;
