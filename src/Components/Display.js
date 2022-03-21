import React from 'react';
import { useParams } from "react-router-dom";
import "./Display.css"
import Data from "./Data.json";
import logo from "./Star.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";

export const Display=()=> {
  
  let { id } = useParams();
  let img;
  if(id==1||id==4||id==7){
    img=img1;
  }
  else if(id==2||id==5||id==8){
    img=img2;
  }
  else if(id==3||id==6||id==9){
    img=img3;
  }

  return(
    
      <div classNameName="container-fluid">
        <div className="row  ">
          <div className="col">
            <img className='imagesshoe' src={img} alt="image"></img>
          </div><br></br>
          <div className="col">
            <h2 className="row shoenm">{Data[id-1].name}</h2>
            <br></br>
            <p className="row">In need for speed? You’re in luck. These sneakers are super lightweight and boast a shock absorber sole. Be prepared to fly in all-out comfort. Featuring a sport sock style, an almond toe, a logo to the outside, a sole and shock-absorber sole.</p><br></br>
            <h3 className="row  price">{Data[id-1].price}</h3><br></br>
            <h5 className="row del">Delivery by: {Data[id-1].delivery}</h5>
            <br></br>
            <br></br>
            <br></br>
            <h6 className="row"> Rating  <img src={logo} alt="star"></img></h6><br></br>
            <h4 className="row">Qty</h4><br></br>
            
            <div className="row">
              <button className="plus" type="button" name="button">-</button>
              <input className="text" type="number" ></input>
              <button className="minus" type="button" name="button">+</button>
            </div>
            <div className='wrapper'>
            <button className="button" name="button">Add to Cart</button>
            </div>
            
          </div>
        </div>
      </div>
  )
}