import React, { Component } from 'react';
import '../App.css';


class Home extends Component {
  render() {
    return (
     
      <div className="App">

      
<div class="container-fluid" id="maincontainer">

<div class ="row" id="rowheading">
<div class="col">
<p class="text-center" id="helloheading2">We are <span id="microsoft">MyCrowSawft</span> </p>
<p class="text-cenert" id="firstpara"> <br></br>  </p>
</div>
</div>
<div class ="row" id="rowheading">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<p class="text-left" id="heading"> </p>
</div>
</div>

<div class ="row" id="rowsingleline">
<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
<p class="text-left" id="singlepara">    </p>
</div>
</div>
<div class="container" id="footer">  </div>
</div>
      </div>
    );
  }
}

export default Home;
