import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Recept } from '../models/Recept';
import ReceptIndividual from './ReceptIndividual';
import '../css/Recepti.css'



const Recepti = () => {
    const [recepti, setRecept] = useState<Recept[]>([]);


    useEffect(() => {
         const fetchData = async () => {
          const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
            params: {
              tags: 'vegetarian,dessert',
              number: '6'
            }
          };
           try {
             const response = await axios.request(options);
             console.log(response.data.recipes)
             const nizRecepata: Recept[] = response.data.recipes.map((r: any) => {
               return new Recept(r.summary, r.instructions , r.title, r.image);
             });
             setRecept(nizRecepata);
           } catch (error) {
             console.error(error);
           }
         };
         fetchData();
       }, []);


  return (
    <div className='recepti-container'>
    {recepti === null ? "No products" : recepti.map((p) => (
        <ReceptIndividual r={p}/>
      ))}
    </div>
  )
}


export default Recepti