import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import '../css/foodtable.css';
import axios from 'axios';

const foodInitState ={
    name: '',
    price: 0,
    inStock: true
  };

class FoodTable extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          foodItemList: [],
          food: foodInitState
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


    render(){
        const foodItemList = this.state.foodItemList;

        return(
         <Fragment>
             <div>Sort by: </div>
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
                    <td>{food.price}</td>
                    <td>{food.inStock}</td>
                    <td>ahshs</td>
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