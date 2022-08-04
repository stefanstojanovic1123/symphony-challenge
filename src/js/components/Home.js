import _ from 'lodash';

import Hooks from '@/hooks';

import Content from '@ui/Content';

import 'css/pages/home.css';
import { useState } from 'react';
import TextField from './ui/TextField';
import CustomisableTable from './ui/CustomisableTable';

const Home = () => {
	const i18n = Hooks.useI18n();
	Hooks.useTitle(i18n('React Boilerplate'));

	const [users, setUsers] = useState([]);
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [age, setAge] = useState('');
	const [isFormOpen, setIsFormOpen] = useState(false);
	const columns = [
		{
			label: 'name',
			key: 'name'
		},
		{
			label: 'surname',
			key: 'surname'
		},
		{
			label: 'age',
			key: 'age'
		}
	];

	const handleAddUser = (user) => {

		const render = () => {
			return (
				<div>
					<div className={'user-name' + (user.name === 'stefan' ? ' red' : '')}>{user?.name}</div>
					<div className='user-surname'>{user?.surname}</div>
					<div className='user-age'>{user?.age}</div>
					<div className='delete-button' onClick={(e) => handleOnDelete(e, user)}>Delete</div>
				</div>
			)
		}
		user.render = render;
		setUsers([...users, user]);
	}

	const handleOnDelete = (user) => {
		setUsers(users.filter(userToDelete => userToDelete.id !== user.id));
	}
	return (
		<Content className="events-page">
			<div onClick={() => setIsFormOpen(!isFormOpen)}>{isFormOpen ? 
				'Close' : 'Add'
			}</div>
			{isFormOpen ? 
				<div className='add-user-form'>
					<TextField 
						id="name"
						label="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<TextField 
						id="surname"
						label="Surname"
						value={surname}
						onChange={(e) => setSurname(e.target.value)}
					/>
					<TextField 
						id="age"
						label="Age"
						value={age}
						onChange={(e) => setAge(e.target.value)}
					/>

					<div onClick={() => handleAddUser({id: Math.floor(Math.random() * 100),name: name, surname: surname, age: age})}>Save</div>
				</div> : null
			}
			<CustomisableTable columns={columns} rows={users} />
		</Content>
	);
};

export default Home;
