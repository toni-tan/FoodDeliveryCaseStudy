import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import '../css/foodtable.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import UpdateFood from './updatefood';

const foodInitState = {
    name: '',
    price: 0,
    inStock: true
};

class FoodTable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foodItemList: [],
            food: foodInitState,
            filter: 'none', // || stock out-of-stock none
            showComponentModal: false, // modal
            id: 0 //default id
        }
    }

    componentDidMount() {
        // const getUserListURL = 'https://reqres.in/api/users?pages=1';
        const getFoodItemListURL = 'http://localhost:8080/CSDB/rest/foodlist';
        axios.get(getFoodItemListURL).then(res => {
            console.log('SERVICE SUCCESS');
            this.setState({
                foodItemList: res.data
            });
        });

    }


    handleUpdateComponent = e => {
        console.log('UPDATE COMPONENT ITEM', this.state.componentItem);
        
        // Place axios call for delete here
        let foodList = this.state.food;
        const configvar ={
          headers:{
            'Content-Type': 'Application/json'
          }
        }
    
        axios.put('http://localhost:8080/CSDB/rest/foodlist/update/{this.state.id}', foodList, configvar)
          .then(res => {
            console.log(res.data);
          });
    
        this.setState({food: {name: "",  price: 0, inStock: true}});
          e.preventDefault();
        
        this.hideModal();
    }

 	changeFilter = value => this.setState({ filter: value });
    
	filterList = () => {
      if(this.state.filter === 'stock')
        return this.state.foodItemList.filter(item => item.inStock);
      else if(this.state.filter === 'out-of-stock')
        return this.state.foodItemList.filter(item => !item.inStock);
      else
        return this.state.foodItemList;
    }

    // MODAL VISIBILITY FUNCTIONS

    showUpdateModal = (food) => {
        this.setState(prevState => ({
            ...prevState,
            food: food,
            showComponentModal : true 
        }))
    }
    
    hideModal = () => {
        this.setState({showComponentModal : false});
    }
    
    // handleCancel = () => {
    //     let path = "#"; 
    //     this.props.history.push(path);
    //   }
    
    render() {
        
        const foodItemList= this.filterList();
        const { filter } = this.state;
      
      
        return (
                
            <div>
                <div>
                            <UpdateFood 
                                handleChangeName={this.handleChangeName}
                                handleChangePrice={this.handleChangePrice}
                                handleChangeInStock={this.handleChangeInStock}
                                handleUpdateComponent={this.handleUpdateComponent}
                                hideModal = {this.hideModal}
                                showComponentModal={this.state.showComponentModal}
                                showUpdateModal={this.showUpdateModal}
                                food={this.state.food}
                                //modalFlow={this.state.modalFlow}
                                // componentItem={this.state.componentItem}
                            />
                            </div>
                <div>
                  <span onClick={() => this.changeFilter('none')} className={filter === 'none' && 'active-txt'}>ALL </span> | 
                  <span onClick={() => this.changeFilter('stock')}  className={filter === 'stock' && 'active-txt'}> In Stock </span> | 
                  <span onClick={() => this.changeFilter('out-of-stock')}  className={filter === 'out-of-stock' && 'active-txt'}> Out of Stock</span>
          			</div>
                <p />
                <table>
                    <thead>
                        <tr>
                            <th>FOOD ITEM</th>
                            <th>UNIT PRICE</th>
                            <th>IN STOCK</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        foodItemList.map((food) => {
                            return ( 
                                <tbody>
                                    <tr>
                                        <td>{food.name}</td>
                                        <td>₱{food.price}</td>
                                        <td>{food.inStock.toString()}</td>
                                        <td><button onClick={() => this.showUpdateModal(food)}><FontAwesomeIcon icon={faEdit} /></button></td>
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
export default withRouter(FoodTable)