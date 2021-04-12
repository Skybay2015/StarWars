import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { SPECIES_QUERY } from '../../GraphQL/Queries';

const Species = () => {
   const { data } = useQuery(SPECIES_QUERY);
   const [species, setSpecies] = useState([]);

   useEffect(() => {
      if (data) {
         setSpecies(data.allSpecies.species);
      }
   }, [data]);

   return (
      <div className='d-flex flex-row justify-content-around flex-wrap'>
         {species.map((creature) => {
            return (
               <div
                  className='col-3 bg-light mt-5 m-2 p-2 pb-2 pt-3 mb-5'
                  key={creature.id}>
                  <h2 className='text-center'>{creature.name}</h2>
                  <div className='d-flex flex-wrap'>
                     <span className='w-100 mb-2'>
                        Avarage Lifespan:{' '}
                        {creature.avarageLifespan || 'unknown'}
                     </span>
                     <span className='w-100 mb-2'>
                        Avarage Height: {creature.avarageHeight || 'unknown'}
                     </span>
                     <span className='w-100 mb-2'>
                        Language: {creature.language || 'unknown'}
                     </span>
                     <span className='w-100 mb-2'>
                        Skin Colors: {creature.skinColors.join(', ')}
                     </span>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Species;
