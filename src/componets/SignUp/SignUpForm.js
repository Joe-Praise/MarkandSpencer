import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FormBtn from '../SignIn/FormBtn';
import { useState } from 'react';
import { AppContext } from '../Context/Context';

const SignUpForm = () => {
	const { dispatchNotification } = useContext(AppContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [pwd, setPwd] = useState('');
	const [err, setErr] = useState(false);
	let user = {};

	const handleForm = (e) => {
		e.preventDefault();
		if (name && email && number && pwd !== '') {
			// do nothing
		} else {
			setErr(true);
			return;
		}

		if (
			name === '' ||
			!email.includes('@') ||
			number.length < 5 ||
			pwd.length < 5
		) {
			setErr(true);
			return;
		} else {
			setErr(false);
		}
		user = {
			name: name,
			email: email,
			phone: number,
			password: pwd,
		};

		fetch('http://159.65.21.42:9000/register', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(user),
		})
			.then((resp) => resp.json())
			.then((data) => {
				dispatchNotification({
					message: 'User Created!',
					type: 'success',
				});
				setName('');
				setEmail('');
				setNumber('');
				setPwd('');
			})
			.catch((error) => {
				dispatchNotification({
					message: 'An error occured!',
					type: 'error',
				});
				console.error(error);
			});
	};

	return (
		<div className='sign_up_container'>
			<h1>CREATE AN ACCOUNT</h1>
			<legend>
				Hey there! <br /> Let's get started
			</legend>
			<form className='sign_up_form' onSubmit={handleForm}>
				<div>
					<label htmlFor='fName'>Full Name</label>
					<input
						type='text'
						id='fName'
						placeholder='Enter your full name'
						value={name}
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
					{err === true && name === '' ? (
						<span className='formSpan'>Full name is Required</span>
					) : null}
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						id='email'
						placeholder='Enter your email address'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					{err === true && !email.includes('@') ? (
						<span className='formSpan'>Email is required</span>
					) : null}
				</div>
				<div>
					<label htmlFor='number'>Phone Number</label>
					<input
						type='number'
						id='number'
						placeholder='Enter your phone number'
						value={number}
						onChange={(e) => {
							setNumber(e.target.value);
						}}
					/>
					{(err === true && number.length < 5) ||
					(err === true && number.length > 11) ? (
						<span className='formSpan'>min of 5 and max of 11 characters</span>
					) : null}
				</div>
				<div>
					<label htmlFor='pwd'>Password</label>
					<input
						type='password'
						id='pwd'
						placeholder='Please enter password'
						value={pwd}
						onChange={(e) => {
							setPwd(e.target.value);
						}}
					/>
					{(err === true && pwd.length < 5) ||
					(err === true && pwd.length > 11) ? (
						<span className='formSpan'>min of 5 and max of 11 characters</span>
					) : null}
				</div>
				<FormBtn width={'100%'} value='Create account' bg={'#b4cc51'} />
			</form>

			<p>
				By creating an account you'll automatically be signed up to{' '}
				<Link to='' className='links text_decoration'>
					Sparks
				</Link>
				, our reward scheme.
			</p>

			<p className='signup_p'>
				Already have an account?{' '}
				<Link to='/signin' className='links text_decoration'>
					Sign In &rarr;
				</Link>
			</p>
		</div>
	);
};

export default SignUpForm;
