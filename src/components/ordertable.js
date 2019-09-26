import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import '../css/foodtable.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import UpdateOrder from './updateorder';

const orderInitState = {
    order_id: 1,
    cName: '',
    address: '',
    contact: '',
    total: 0,
    calculatedTotal: 0,
    status: '',
    quantity: 0

};

class OrderTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orderList: [],
            order: orderInitState,
            filter: 'none', // || stock out-of-stock none
            showComponentModal: false, // modal
            id: 0 //default id
                    }
    } 

    componentDidMount() {
        this.getOrderItem();

    }

    getOrderItem = () =>{
      // const getUserListURL = 'https://reqres.in/api/users?pages=1';
      const getOrderItemListURL = 'http://localhost:8080/CSDB/rest/orderlist';
      axios.get(getOrderItemListURL).then(res => {
          console.log('SERVICE SUCCESS');
        console.log(res.data)
          this.setState({
              orderList: res.data
          });
      });
    } 


    // UPDATE THIS
    handleUpdateComponent = order => {
      	console.log('OLD VALUE', this.state.order)
        console.log('UPDATED', order);
        
        console.log(order.order_id);
    // let { foodItemList } = this.state;
    // if (food.name.length <= 0 || food.price.length <= 0)
    //   return alert('Food item name or Unit price cannot be blank!');

    // if (isNaN(food.price))
    //   return alert('Price must be number!');

    // if (food.price < 0)
    //   return alert("Price must be a non-negative number!");

    // // for(let id in foodItemList)
    // //   if(foodItemList[id].name.toUpperCase() === food.name.toUpperCase())
    // //     return alert("Existing.");
      
        const configvar ={
          headers:{
            'Content-Type': 'Application/json'
          }
        }
        axios.put(`http://localhost:8080/CSDB/rest/orderlist/update/${order.order_id}`, order, configvar)
          .then(res => {
            console.log(res.data);
            this.getOrderItem();
            // window.location.reload();
          });
      
        this.hideModal();
        // e.preventDefault();
    }

 	changeFilter = value => this.setState({ filter: value });
    
	filterList = () => {
      if(this.state.filter === '0')
        return this.state.orderList.filter(item => item.status ==="0");
      else if(this.state.filter === '1')
        return this.state.orderList.filter(item => item.status ==="1"); 
      else if(this.state.filter === '2')
        return this.state.orderList.filter(item => item.status ==="2"); 
      else if(this.state.filter === '3')
        return this.state.orderList.filter(item => item.status ==="3"); 
      else if(this.state.filter === '4')
        return this.state.orderList.filter(item => item.status ==="4"); 
      else
        return this.state.orderList;
    }

    // MODAL VISIBILITY FUNCTIONS

    showUpdateModal = (order) => {
      console.log("DISPLAY MO TO", order)
        this.setState({
            order: order,
            showComponentModal: true 
        })
    }
    
    hideModal = () => this.setState({showComponentModal : false});
    
    handleCancel = () => {
        let path = "#"; 
        this.props.history.push(path);
      }
    
    render() {
        const orderList= this.filterList();
        const { filter } = this.state;
        // console.log(this.state.orderList);
        // console.log(this.orderItemList);
        // const orderList = this.state.orderItemList;
      
        return (
                
            <div>
                <div>
                  	{ this.state.showComponentModal ? <UpdateOrder
                                handleUpdateComponent={this.handleUpdateComponent}
                                hideModal = {this.hideModal}
                                order={this.state.order}
                                //modalFlow={this.state.modalFlow}
                                // componentItem={this.state.componentItem}
                            /> : null}
                            
                            </div>
                     
                <div>
                  <span onClick={() => this.changeFilter('none')} className={filter === 'none' && 'active-txt'}>ALL </span> | 
                  <span onClick={() => this.changeFilter('0')}  className={filter === '0' && 'active-txt'}> Received </span> | 
                  <span onClick={() => this.changeFilter('1')}  className={filter === '1' && 'active-txt'}> Kitchen</span> |
                  <span onClick={() => this.changeFilter('2')}  className={filter === '2' && 'active-txt'}> In Transit</span> |                  
                  <span onClick={() => this.changeFilter('3')}  className={filter === '3' && 'active-txt'}> Delivered</span> |
                  <span onClick={() => this.changeFilter('4')}  className={filter === '4' && 'active-txt'}> Canceled</span>
          	    </div>
                <p />
                <table>
                    <thead>
                        <tr>
                            <th>ORDER ID</th>
                            <th>CUSTOMER NAME</th>
                            <th>ADDRESS</th>
                            <th>STATUS</th>
                                <th></th>
                        </tr>
                    </thead>
                    {
                        orderList.map(order => {
                            
                          // ETO 
                            return ( 
                                <tbody>
                                    <tr>
                                        <td>{order.order_id}</td>
                                        <td>{order.cName}</td>
                                        <td>{order.address}</td>
                                        <td>{order.status}</td> 
                                        <td><button onClick={() => this.showUpdateModal(order)}><FontAwesomeIcon icon={faEdit} /></button></td> 
                                        {/* <td> <a href="#open-modal"><FontAwesomeIcon icon={faEdit}/></a></td> */}
                                       </tr>
                                </tbody>

                             )
                        })
                    }  
                                    </table>
            </div>
        );
    }
}
export default withRouter(OrderTable)