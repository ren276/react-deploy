import React from 'react';
import "./Content.css";
import { useState } from 'react';
import Product from './Product';
import Data from "./Data";
import { SearchOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

export const Content=()=>{
  
  const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
      const filteredData = Data.filter((el) => {
      //if no input the return the original
      if (inputText === '') {
        return el;
       }
      //return the item which contains the user input
      else {
        return el.name.toLowerCase().includes(inputText)
      }
  })

  return (
    <>
    <div className="container d-flex flex-column justify-content-center align-items-center mt-4">
        <h1 className="text3">Wholesale Shoe House</h1>
        <p className="text-center font-weight-light font-weight-light">‘WholeSale Shoe Company’ is your place for athletic and easygoing shoes for the entire family from many name brands. You’ll discover styles for ladies, men and children from brands like Nike, Converse, Vans, Sperry, Madden Girl, Skechers, ASICS and then some!</p>
    </div>

  
    
    
    
    <form>
    <div className='search'>
      <div class="inputIcons">
      <IconButton><SearchOutlined /></IconButton>
      <input class="input-field" type="text" placeholder='Search Your Shoe' onChange={inputHandler}></input>
      
      </div>
    </div>
    <div className='container'>
      <div className='row'>
       
      </div>
    </div>

    </form>
  
    
    <div className="album py-5 bg-light" id="albumm">
        <div className="container">
          <div className="row second">
            <div className="col-8"><h2 id="totalproduct">{filteredData.length} Products</h2></div>
            <div className="container">
              <div className="row list" id="repeat">
                {filteredData.map((shoe) => (
                  <Product
                    id={shoe.id}
                    name={shoe.name}
                    price={shoe.price}
                    star={shoe.star}
                    delivery={shoe.delivery}
                    image={shoe.image}
                    rating={shoe.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    
     
    </>

  )
}
