import React from 'react';
import FormBtn from '../../SignIn/FormBtn';
import png from '../../../images/adminPage/user.png';
import { useContext } from 'react';
import { AppContext } from '../../Context/Context';
import { useEffect, useState } from 'react';
const Users = () => {
	const { users, getUsers, dispatchNotification } = useContext(AppContext);
	const [update, setUpdate] = useState(false);
	const [id, setId] = useState(false);
	const [edit, setEdit] = useState('');
	const [modal, setModal] = useState(false);

	useEffect(() => {
		if (update) {
			getUsers();
		}
		setUpdate(false);
	}, [update, getUsers]);

	const handleDeleteUser = (id) => {
		fetch(`http://159.65.21.42:9000/user/${id}`, {
			method: 'DELETE',
		})
			.then((resp) => resp.json())
			.then((data) => {
				dispatchNotification({
					message: 'User Profile Deleted',
					type: 'success',
				});

				setUpdate(true);
			})
			.catch((error) => {
				dispatchNotification({
					message: 'An error occured!',
					type: 'error',
				});
				console.error(error);
			});
	};

	// handles input onchange events
	const handleUpdate = (e) => {
		let { name, value } = e.target;
		setEdit({ ...edit, [name]: value });
	};

	const editUser = (e) => {
		e.preventDefault();
		fetch(`http://159.65.21.42:9000/user/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(edit),
		})
			.then((resp) => resp.json())
			.then((data) => {
				setModal(false);
				setId(null);
				dispatchNotification({
					message: 'User Successfully Updated!',
					type: 'success',
				});
				setUpdate(true);
				console.log(data);
			})
			.catch((error) => {
				dispatchNotification({
					message: 'An error occured!',
					type: 'error',
				});
				console.error(error);
			});
	};

	const cancelEdit = () => {
		setModal(false);
		setId(null);
		document.body.style.overflowY = 'auto';
	};
	const handleEditBtn = (user) => {
		setId(user._id);
		setModal(true);
		setEdit(user);
		document.body.style.overflowY = 'hidden';
	};

	return (
		<div>
			<h3>Users Display Cards</h3>
			<div className='user_wrapper'>
				{users.map((user) => (
					<div className='user_card' key={user._id}>
						<figure>
							<img src={png} alt={user.description} />
						</figure>
						<p>{user.name}</p>
						<p className='collection'>{user.email}</p>
						<p className='description'>{user.phone}</p>

						<div className='user_btn'>
							<FormBtn
								bg={'green'}
								value='Edit'
								onClick={() => handleEditBtn(user)}
							/>
							<FormBtn
								bg={'red'}
								value='Delete'
								onClick={() => handleDeleteUser(user._id)}
							/>
						</div>
					</div>
				))}
			</div>
			{modal ? (
				<div className='signup_wrapper position_fixed'>
					<div className='sign_up_container'>
						<h3>Edit User Details</h3>
						<form className='sign_up_form'>
							<div>
								<label htmlFor='fName'>Full Name</label>
								<input
									type='text'
									id='name'
									name='name'
									placeholder='Enter your full name'
									value={edit.name}
									onChange={handleUpdate}
								/>
							</div>
							<div>
								<label htmlFor='email'>Email</label>
								<input
									type='text'
									id='email'
									name='email'
									placeholder='Enter your email address'
									value={edit.email}
									onChange={handleUpdate}
								/>
							</div>
							<div>
								<label htmlFor='number'>Phone Number</label>
								<input
									type='text'
									id='number'
									name='phone'
									placeholder='Enter your phone number'
									value={edit.phone}
									onChange={handleUpdate}
								/>
							</div>
							<div>
								<label htmlFor='pwd'>Password</label>
								<input
									type='text'
									id='pwd'
									name='password'
									placeholder='Please enter password'
									value={edit.password}
									onChange={handleUpdate}
								/>
							</div>
							<div className='products_btn'>
								<FormBtn
									width={'45%'}
									value='Cancel'
									bg={'#ea122a'}
									onClick={cancelEdit}
								/>
								<FormBtn
									width={'45%'}
									value='Edit User'
									bg={'#b4cc51'}
									onClick={editUser}
								/>
							</div>
						</form>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default Users;
