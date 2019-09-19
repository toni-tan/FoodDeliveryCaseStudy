import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import '../css/foodlist.css'
import '../css/App.css'

class FoodList extends Component {

  handleClick = () => {
    let path = "/addfood";
    this.props.history.push(path);
  }

  render() {
    return (
      <Fragment>
        {/* <div className="flex-container"> */}
          {/* <div className="container"> */}
          <div><p className="title"><b>Food</b> List </p></div>
          <div>   
            <button className="icon-btn add-btn" onClick={this.handleClick}>
                  <div className="add-icon"></div>
                  <div className="btn-txt">Add Food Item</div>
            </button>
          </div>
          {/* </div> */}
          {/* </div> */}
        
        
      
      </Fragment>
      )
  }
}
export default withRouter(FoodList)