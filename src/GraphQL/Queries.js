import { gql } from '@apollo/client';

export const FILMS_QUERY = gql`
   {
      allFilms {
         films {
            title
            id
            producers
            director
            episodeID
         }
      }
   }
`;

export const PLANETS_QUERY = gql`
   {
      allPlanets {
         planets {
            name
            id
            rotationPeriod
            diameter
            rotationPeriod
            climates
            population
         }
      }
   }
`;

export const PEOPLE_QUERY = gql`
   {
      allPeople {
         people {
            id
            name
            birthYear
            mass

            gender
         }
      }
   }
`;

export const STARSHIPS_QUERY = gql`
   {
      allStarships {
         starships {
            id
            name
            model
            maxAtmospheringSpeed
            MGLT
            length
            passengers
         }
      }
   }
`;

export const VEHICLES_QUERY = gql`
   {
      allVehicles {
         vehicles {
            id
            name
            crew
            model
            length
            passengers
            maxAtmospheringSpeed
         }
      }
   }
`;

export const SPECIES_QUERY = gql`
   {
      allSpecies {
         species {
            id
            name
            language
            skinColors
            averageLifespan
            averageHeight
         }
      }
   }
`;
