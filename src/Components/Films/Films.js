import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { FILMS_QUERY } from '../../GraphQL/Queries';

const Films = () => {
   const { data } = useQuery(FILMS_QUERY);
   const [films, setFilms] = useState([]);

   useEffect(() => {
      if (data) {
         const { films } = data.allFilms;
         const sortedFilms = films
            .slice()
            .sort((a, b) => a.episodeID - b.episodeID);
         setFilms(sortedFilms);
      }
   }, [data]);

   return (
      <div className='d-flex flex-row justify-content-around flex-wrap'>
         {films.map((film) => {
            return (
               <div className='col-3 bg-light mt-5 m-2 p-2 pt-3' key={film.id}>
                  <h2 className='text-center'>{film.title}</h2>
                  <div className='d-flex flex-wrap'>
                     <span className='w-100  mb-2'>
                        Episode: {film.episodeID}
                     </span>
                     <span className='w-100 mb-2'>
                        Director: {film.director}
                     </span>
                     <span>Producers: {film.producers.join(', ')}</span>
                  </div>
               </div>
            );
         })}
      </div>
   );
};

export default Films;
