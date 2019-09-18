import React, {Component, Fragment} from 'react';
import '../css/foodlist.css'
import '../css/App.css'

class FoodList extends Component {
  render() {
    return (
      <Fragment>
        {/* <div className="flex-container"> */}
          {/* <div className="container"> */}
          <div><p className="title"><b>Food</b> List </p></div>
          <div>   
            <button class="icon-btn add-btn">
                  <div class="add-icon"></div>
                  <div class="btn-txt">Add Food</div>
            </button>
          </div>
          {/* </div> */}
          {/* </div> */}
        
        
      
      </Fragment>
      )
  }
}
export default FoodList