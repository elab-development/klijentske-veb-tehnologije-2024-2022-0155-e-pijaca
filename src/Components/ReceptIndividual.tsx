import React from 'react'
import { Recept } from '../models/Recept'
import '../css/Recepti.css'

interface ReceptProps{
    r: Recept;
}


const ReceptIndividual : React.FC<ReceptProps> = ({r})=> {
  const removeHtmlTags = (html: string) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };


  return (
    <div className="recept">
        <img src={r.image} alt="slika" className="recept-image" />
        <div className="recepti-text">
        <h2>{r.title}</h2>
        <p>{removeHtmlTags(r.instructions)}</p>
        </div> 
    </div>
  )
}


export default ReceptIndividual