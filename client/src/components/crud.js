import React, { Component, useState, useEffect } from 'react';
import '../App.css';
import Axios from 'axios';




class CRUD extends Component {

  
  getInverntorydata = ()=> {
    Axios.get('http://localhost:3306/').
    then((response) =>{
      const data = response.data;
      this.setState({ posts: data});
      console.log('Data has been received');
      console.log(data)
    }).catch(() => {
      alert("error")
    });
  }


  render() {
    return (
     
      <div >

      
<div class="container-fluid" id="contactdiv">

//TO DO
//to create a input form 
<div id ="shoppingcontainer" class="container">
<div class="row justify-content-md-left">
    <div id="productCard" class="col col-lg-3">
     
    </div>
   
  </div>
</div>

</div>  
</div>
    );
  }
}

export default CRUD;
