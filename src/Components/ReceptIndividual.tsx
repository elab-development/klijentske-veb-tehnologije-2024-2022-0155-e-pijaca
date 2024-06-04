import React from 'react'
import { Recept } from '../models/Recept'


interface ReceptProps{
    r: Recept;
}


const ReceptIndividual : React.FC<ReceptProps> = ({r})=> {
  return (
    <div className="recept">
        <img src="https://img.spoonacular.com/recipes/987-556x370.jpg" alt="slika" />
     {r.title}
     {r.id}
     {r.instructions}
       
    </div>
  )
}


export default ReceptIndividual