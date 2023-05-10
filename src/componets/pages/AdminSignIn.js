import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
const AdminSignIn = () => {

    const [adminId, setAdminId] = useState("");
    const [pwd, setPwd] = useState("");

    return (
		<div>
			<div className="sign_in_container admin_sign_in">
				<legend>Admin Sign In</legend>
				<form className="sign_in_form">
					<div>
						<label htmlFor="id">Admin ID</label>
						<input
							type="text"
							id="adminId"
							placeholder="Enter your Admin ID"
							value={adminId}
							onChange={(e) => setAdminId(e.target.value)}
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
							<Link
								to="/signup"
								className="links text_decoration"
							>
								Forgot Password?
							</Link>
						</p>
					</div>

					<Link
						to={
							adminId === "AD102030" && pwd === "MARKANDSPENCE"
								? "/secureadmin/dashboard"
								: ""
						}
						className="admin_btn"
						// onClick={handleSignIn}
					>
						Sign in
					</Link>
				</form>

				<p>
					If you're having trouble signing in, refer to the README.FILE for assistance.
				</p>
				<p>
					Don't have an account?{" "}
					<Link to="/" className="links text_decoration">
						Reachout to your supervisor
					</Link>
				</p>
			</div>
		</div>
	);
}

export default AdminSignIn