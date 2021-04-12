import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { PLANETS_QUERY } from '../../GraphQL/Queries';

const Planets = () => {
   const { data } = useQuery(PLANETS_QUERY);
   const [planets, setPlanets] = useState([]);

   useEffect(() => {
      if (data) {
         setPlanets(data.allPlanets.planets);
      }
   }, [data]);

   return (
      <div className='d-flex flex-row justify-content-around flex-wrap'>
         {planets.map((planet) => {
            return (
               <div
                  className='col-3 bg-light mt-5 m-2 p-2 pb-2 pt-3 mb-5'
                  key={planet.id}>
                  <h2 className='text-center'>{planet.name}</h2>
                  <div className='d-flex flex-wrap'>
                     <span className='w-100 mb-2'>
                        Diameter: {planet.diameter || 'unknown'}
                     </span>
                     <span className='w-100 mb-2'>
                        Population: {planet.population || 'unknown'}
                     </span>
                     <span className='w-100 mb-2'>
                        Rotation Period: {planet.rotationPeriod || 'unknown'}{' '}
                        hours
                     </span>
                     <span>Climates: {planet.climates.join(', ')}</span>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Planets;
