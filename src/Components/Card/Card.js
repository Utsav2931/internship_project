import React from "react";
import "./Card.css"
import {
   Link
} from "react-router-dom";

function Card(props) {
   return (
      <div className="container">
         <div className="grid">
            {props.data.map(item => {
               return <CardData data={item} />
            })}
         </div>
      </div>
   )
}

function CardData(props) {
   return (
      <article>
         <img src={props.data.show.image.original} alt=""></img>
         <div className="text">
            <h3>{props.data.show.name}</h3>
            <Link to={{
               pathname: '/movie',
               state: {
                  movie: props.data
               }
            }}> <button >View Details</button></Link>

         </div>
      </article>
   )
}

export default Card;