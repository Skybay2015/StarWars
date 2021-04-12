import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { AdminData } from '../../utilities/adminData';
import './styles.css';

const Login = ({ isLoggedIn }) => {
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const history = useHistory();

   const handleNameChange = (e) => {
      setName(e.target.value);
   };

   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
   };

   const handleClick = (e) => {
      e.preventDefault();
      if (name === AdminData.name && password === AdminData.password) {
         isLoggedIn(true);
         setPassword('');
         setName('');

         history.push('/');
      } else {
         alert('Entered data is wrong. Please try again.');
      }
   };

   return (
      <div className='wrapper fadeInDown'>
         <div id='formContent'>
            <input
               value={name}
               onChange={handleNameChange}
               type='text'
               placeholder='Login'
            />
            <input
               value={password}
               onChange={handlePasswordChange}
               type='password'
               name='password'
               placeholder='Password'
            />
            <button onClick={handleClick} className='login-btn'>
               Log In
            </button>
         </div>
      </div>
   );
};

export default Login;
