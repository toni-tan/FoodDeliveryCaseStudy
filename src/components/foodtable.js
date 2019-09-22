
import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
import '../css/foodtable.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const foodInitState = {
    name: '',
    price: 0,
    inStock: true
};

class FoodTable extends Component {
    // state = { show: false };

    // showModal = () => {
    //   this.setState({ show: true });
    // };
  
    // hideModal = () => {
    //   this.setState({ show: false });
    // };

    constructor(props) {
        super(props);

        this.state = {
            foodItemList: [],
            food: foodInitState,
          	filter: 'none' // || stock out-of-stock none
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
  
 		changeFilter = value => this.setState({ filter: value });
    
		filterList = () => {
      if(this.state.filter === 'stock')
        return this.state.foodItemList.filter(item => item.inStock);
      else if(this.state.filter === 'out-of-stock')
        return this.state.foodItemList.filter(item => !item.inStock);
      else
        return this.state.foodItemList;
    }
    
   

    render() {
        const foodItemList = this.filterList();
        const { filter } = this.state;
      
      
        return (
            <Fragment>
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
                                        <td><button  onClick={this.showModal}><FontAwesomeIcon icon={faEdit} /></button></td>
                                    </tr>
                                </tbody>

                            )
                        })
                    }
                </table>
            </Fragment>
        );
    }
}
export default FoodTable