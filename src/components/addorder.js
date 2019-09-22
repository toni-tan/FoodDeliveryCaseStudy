import React, {Component, Fragment} from 'react';
// import { withRouter } from 'react-router-dom';
import '../css/addfood.css';
// import axios from 'axios';


// const foodInitState ={
//   name: '',
//   price: 0,
//   inStock: true
// };

class AddOrder extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       foodItemList: [],
//       food: foodInitState
//     }
//   }

//   handleChangeName = e => this.setState({
//     food: {
//       ...this.state.food,
//       name: e.target.value
//     }
//   });

//   handleChangePrice = e => this.setState({
//     food: {
//       ...this.state.food,
//       price: e.target.value
//     }
//   });

//   handleChangeInStock = e => this.setState({
//     food: {
//       ...this.state.food,
//       inStock: e.target.checked
//     }
//   });

//   handleClearFoodFields = () => this.setState({ food: foodInitState });

//   handleCancel = () => {
//     let path = "/";
//     this.props.history.push(path);
//   }

//   handleAddFoodItem = e => {
//     let { food, foodItemList } = this.state;
//     if (food.name.length <= 0 || food.price.length <= 0)
//       return alert('Food item name or Unit price cannot be blank!');

//     if (isNaN(food.price))
//       return alert('Price must be number!');

//     if (food.price < 0)
//       return alert("Price must be a non-negative number!");

//     for(let id in foodItemList)
//       if(foodItemList[id].name.toUpperCase() === food.name.toUpperCase())
//         return alert("Food name already exists.");

//     // THIS IS NEEDED
//     food.price = Number(food.price);
//     // foodItemList.push(food);

//     const newFoodItem = [...foodItemList];
//     newFoodItem.push(food);
//     this.setState({ foodItemList: newFoodItem }, this.handleClearFoodFields);
//     alert("Add food item is succesful!");
//     // e.preventDefault();

    
//     let foodList = this.state.food;
//     const configvar ={
//       headers:{
//         'Content-Type': 'Application/json'
//       }
//     }

//     axios.post('http://localhost:8080/CSDB/rest/foodlist', foodList, configvar)
//       .then(res => {
//         console.log(res.data);
//       });

//       this.setState({food: {name: "",  price: 0, inStock: true}});
//       e.preventDefault();
//   }


  render() {
//     console.log(this.state);

    return (
      <Fragment>
        <div>
          <p className="title"><b>Add </b> Order </p>
        </div>
        <div />
      </Fragment>

    )

  }
}

export default AddOrder