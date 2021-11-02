import React, { useState } from "react";
import { Link} from 'react-router-dom'
import './Form.css'

function Form(props) {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [number, setNumber] = useState("");
   const [error, setError] = useState("");
   const handleSubmit = (e) => {
      if (name == "") {
         setError("Name can't be null");
         return false;
      } else if (email == "") {
         setError("Email can't be null");
         return false;
      } else if (number == "") {
         setError("Number can't be null");
         return false;
      }
      return true
   };
   const movieName = "Movie Name : " + props.name
   const movieGenre = "Movie Genre : " + props.genre
   return (
      <div className="bookNow">
         <div className="form" >
            <center><div className="title">Book Now </div></center>
            {error !== "" ? <span style={{ color: "red",margin: "0px 100px" }}>{error}</span> : ""}

            {/* <label>Name</label> */}
            <input
               placeholder="Movie"
               value={movieName}
               onChange={(e) => setName(e.target.value)}
            />
            <input
               placeholder={props.genre}
               value={movieGenre}
               onChange={(e) => setName(e.target.value)}
            />
            <input
               placeholder="Name"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />

            {/* <label>Email</label> */}
            <input
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <input
               placeholder="Mobile Number"
               value={number}
               onChange={(e) => setNumber(e.target.value)}
            />
            

            {/* <label>Message</label> */}
            <button onClick={() => {
               const flag = handleSubmit();
               console.log("flag: ", flag)
               if (flag) {
                  localStorage.setItem('Movie', props.name)
                  localStorage.setItem('Name', name);
                  localStorage.setItem('Email', email);
                  localStorage.setItem('Number', number);
                  <Link to="/"></Link>
                  alert("Your data has been stored");
                  
               } else {
                  alert("fail")
               }
            }}

            >
               Submit
            </button>
         </div>
      </div>
   )
}

export default Form;