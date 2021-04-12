import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { VEHICLES_QUERY } from '../../GraphQL/Queries';

const Vehicles = () => {
   const { data } = useQuery(VEHICLES_QUERY);
   const [vehicles, setVehicles] = useState([]);

   useEffect(() => {
      if (data) {
         setVehicles(data.allVehicles.vehicles);
      }
   }, [data]);

   return (
      <div className='d-flex flex-row justify-content-around flex-wrap'>
         {vehicles.map((vehicle) => {
            return (
               <div
                  className='col-3 bg-light mt-5 m-2 p-2 pb-2 pt-3 mb-5'
                  key={vehicle.id}>
                  <h2 className='text-center'>{vehicle.name}</h2>
                  <div className='d-flex flex-wrap'>
                     <span className='w-100 mb-2'>Model: {vehicle.model}</span>
                     <span className='w-100 mb-2'>
                        Max Atmospering Speed: {vehicle.maxAtmospheringSpeed}
                     </span>
                     <span className='w-100 mb-2'>CREW: {vehicle.crew}</span>
                     <span className='w-100 mb-2'>
                        Length: {vehicle.length}
                     </span>
                     <span className='w-100 mb-2'>
                        Passengers: {vehicle.passengers}
                     </span>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Vehicles;
