import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'semantic-ui-react';
import './styles.sass';

const starWarsOptions = [
   {
      key: 'People',
      text: 'People',
      value: 'People',
   },
   {
      key: 'Films',
      text: 'Films',
      value: 'Films',
   },
   {
      key: 'Starships',
      text: 'Starships',
      value: 'Starships',
   },
   {
      key: 'Vehicles',
      text: 'Vehicles',
      value: 'Vehicles',
   },
   {
      key: 'Species',
      text: 'Species',
      value: 'Species',
   },
   {
      key: 'Planets',
      text: 'Planets',
      value: 'Planets',
   },
];

const Header = ({ handleSelect }) => {
   return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
         <div className='container-fluid'>
            <span className='navbar-brand'>Star Wars</span>
            <div
               className='collapse navbar-collapse'
               id='navbarSupportedContent'>
               <Dropdown
                  fluid
                  placeholder='Select Friend'
                  selection
                  onChange={handleSelect}
                  options={starWarsOptions}
               />
            </div>
            <Link className='mx-5 logout' to='/logout'>
               Log Out
            </Link>
         </div>
      </nav>
   );
};

export default Header;
