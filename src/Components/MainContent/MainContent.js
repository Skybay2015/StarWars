import React from 'react';
import Films from '../Films';
import Planets from '../Planets';
import People from '../People';
import Starships from '../Starships';
import Vehicles from '../Vehicles';
import Species from '../Species';

const MainContent = ({ type }) => {
   switch (type) {
      case 'People':
         return <People />;

      case 'Planets':
         return <Planets />;

      case 'Films':
         return <Films />;

      case 'Species':
         return <Species />;

      case 'Vehicles':
         return <Vehicles />;

      case 'Starships':
         return <Starships />;
      default:
         return (
            <div className='d-flex justify-content-center pt-5 w-100'>
               <h1 style={{ textAlign: 'center' }}>{'Select the option'}</h1>
            </div>
         );
   }
};

export default MainContent;
