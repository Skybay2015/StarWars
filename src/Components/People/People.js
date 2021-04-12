import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { PEOPLE_QUERY } from '../../GraphQL/Queries';

const People = () => {
   const { data } = useQuery(PEOPLE_QUERY);
   const [people, setPeople] = useState([]);

   useEffect(() => {
      if (data) {
         setPeople(data.allPeople.people);
      }
   }, [data]);

   return (
      <div className='d-flex flex-row justify-content-around flex-wrap'>
         {people.map((person) => {
            return (
               <div
                  className='col-3 bg-light mt-5 m-2 p-2 pb-2 pt-3 mb-5'
                  key={person.id}>
                  <h2 className='text-center'>{person.name}</h2>
                  <div className='d-flex flex-wrap'>
                     <span className='w-100 mb-2'>Gender: {person.gender}</span>
                     <span className='w-100 mb-2'>
                        Mass: {person.mass || 'unknown'}
                     </span>
                     <span className='w-100 mb-2'>
                        Birthday Year: {person.birthYear}
                     </span>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default People;
