import React, {Component, Fragment} from 'react';
import '../css/orderlist.css'

class OrderList extends Component {
 render() {
      return (
        <Fragment>
         
           <div><p className="title"><b>Order</b> List</p></div>
           <div>
            <button class="icon-btn add-btn">
                  <div class="add-icon"></div>
                  <div class="btn-txt">Add Order</div>
            </button>
          </div>
        </Fragment>
        )
    }
  }

export default OrderList 