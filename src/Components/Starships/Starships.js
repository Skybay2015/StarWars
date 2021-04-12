import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { STARSHIPS_QUERY } from '../../GraphQL/Queries';

const Starships = () => {
   const { data } = useQuery(STARSHIPS_QUERY);
   const [starships, setStarships] = useState([]);

   useEffect(() => {
      if (data) {
         setStarships(data.allStarships.starships);
      }
   }, [data]);

   return (
      <div className='d-flex flex-row justify-content-around flex-wrap'>
         {starships.map((starship) => {
            return (
               <div
                  className='col-3 bg-light mt-5 m-2 p-2 pb-2 pt-3 mb-5'
                  key={starship.id}>
                  <h2 className='text-center'>{starship.name}</h2>
                  <div className='d-flex flex-wrap'>
                     <span className='w-100 mb-2'>Model: {starship.model}</span>
                     <span className='w-100 mb-2'>
                        Max Atmospering Speed: {starship.maxAtmospheringSpeed}
                     </span>
                     <span className='w-100 mb-2'>
                        MGLT: {starship.MGLT || 'unknown'}
                     </span>
                     <span className='w-100 mb-2'>
                        Length: {starship.length}
                     </span>
                     <span className='w-100 mb-2'>
                        Passengers: {starship.passengers}
                     </span>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Starships;
