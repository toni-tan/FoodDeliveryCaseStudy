import React, {Component, Fragment} from 'react';
import '../css/addfood.css';

class AddFood extends Component {
    render() {
         return (
           <Fragment>
               
            <div>
                <p className="title"><b>Add </b> Food Item </p>
            </div>
          <div> </div>
          <div className="flex-margin"> 
          <form>
            <input required type="text" />
            <label alt="Food Item Name" placeholder="Enter Food Item Name" />
            <br />
            <input required type="text" />
            <label alt="Unit Price (₱)" placeholder="Enter Unit Price" />
            <br /><div className="text">Is it in Stock?</div>  
            <div class="button r" id="button-1">
          <input type="checkbox" className="checkbox"/> 
          <div className="knobs"></div>
          <div className="layer"></div>
        </div>
          </form>
        </div> 
           </Fragment>
           )
       }
     }
   
   export default AddFood 