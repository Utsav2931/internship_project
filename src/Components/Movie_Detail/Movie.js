import React, { useState } from "react";
import { useLocation } from "react-router-dom"
import './Movie.css'
import Modal from "../Modal/Modal"
import Form from "../Form/Form";

function Movie() {
   
   const [showModal, setModal] = useState(false)
   
   const location = useLocation();
   console.log(location.state.movie.show.summary.replace('<p>', ''))
   return (
      <div className="outerDiv">
         <div className="imageDiv">
            <img className="img" src={location.state.movie.show.image.original} alt="" />
         </div>
         <div className="infoDiv">
            <div className="title">{location.state.movie.show.name}</div>
            <div className="movieInfo">
               <p>{location.state.movie.show.genres[0]}</p>
               <p>{location.state.movie.show.premiered}</p>
               <p>{location.state.movie.show.runtime} Min</p>
            </div>
            <div className="desc">{location.state.movie.show.summary.replace('<p>', '').replace('</p>', '')}</div>
            <div className="ratings"> Ratings: {location.state.movie.show.rating.average}</div>
            <button class="button" onClick={() => { setModal(true) }}><span>Book Now </span></button>
            <Modal show={showModal} handleClose={() => {
               setModal(false)
            }}>
               <Form name={location.state.movie.show.name} genre={location.state.movie.show.genres[0]}></Form>
            </Modal>
         </div>
      </div>
   )
}



export default Movie;