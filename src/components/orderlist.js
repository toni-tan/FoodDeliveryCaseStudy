import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import '../css/orderlist.css'

class OrderList extends Component {
  handleClick = () => {
    let path = "/addorder";
    this.props.history.push(path);
  }

 render() {
      return (
        <Fragment>
         
           <div><p className="title"><b>Order</b> List</p></div>
           <div>
            <button className="icon-btn add-btn" onClick={this.handleClick}>
                  <div className="add-icon"></div>
                  <div className="btn-txt">Add Order</div>
            </button>
          </div>
        </Fragment>
        )
    }
  }

export default withRouter(OrderList) 