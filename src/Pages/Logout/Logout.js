import React from 'react';
import { useHistory } from 'react-router';
import './styles.sass';

const Logout = ({ isLoggedIn }) => {
   const history = useHistory();
   const handleClick = () => {
      isLoggedIn(false);
      history.push('/login');
   };

   return (
      <div className='logout-container'>
         <div className='logout-wrapper'>
            <h1 className='logout-title'>Are you sure you want to Log Out?</h1>
            <button className='logout-btn' onClick={handleClick}>
               Log Out
            </button>
         </div>
      </div>
   );
};

export default Logout;
