import React, {Component, Fragment} from 'react';
import '../css/addfood.css';
import axios from 'axios';


const foodInitState ={
  name: '',
  price: 0,
  inStock: true
};

class AddFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodItemList: [],
      food: foodInitState
    }
  }

  handleChangeName = e => this.setState({
    food: {
      ...this.state.food,
      name: e.target.value
    }
  });

  handleChangePrice = e => this.setState({
    food: {
      ...this.state.food,
      price: e.target.value
    }
  });

  handleChangeInStock = e => this.setState({
    food: {
      ...this.state.food,
      inStock: e.target.checked
    }
  });

  handleClearFoodFields = () => this.setState({ food: foodInitState });

  handleAddFoodItem = e => {
    let { food, foodItemList } = this.state;
    if (food.name.length <= 0 || food.price.length <= 0)
      return alert('Food item name or Unit price cannot be blank!');

    if (isNaN(food.price))
      return alert('Price must be number!');

    if (food.price < 0)
      return alert("Price must be a non-negative number!");

    for(let id in foodItemList)
      if(foodItemList[id].name === food.name)
        return alert("Food name already exists.");

    // THIS IS NEEDED
    food.price = Number(food.price);
    // foodItemList.push(food);

    const newFoodItem = [...foodItemList];
    newFoodItem.push(food);
    this.setState({ foodItemList: newFoodItem }, this.handleClearFoodFields);
    alert("Add food item is succesful!");
    // e.preventDefault();

    
    let foodList = this.state.food;
    const configvar ={
      headers:{
        'Content-Type': 'Application/json'
      }
    }

    axios.post('http://localhost:8080/CSDB/rest/foodlist', foodList, configvar)
      .then(res => {
        console.log(res.data);
      });

      e.preventDefault();
  }


  render() {
    console.log(this.state);

    return (
      <Fragment>
        <div>
          <p className="title"><b>Add </b> Food Item </p>
        </div>
        <div />
        <div className="flex-margin">
          <form>
            <input required
            autoComplete="off"
              type="text"
              name="name"
              id="name"
              value={this.state.food.name}
              onChange={this.handleChangeName} />
            <label alt="Food Item Name" placeholder="Enter Food Item Name" />
            <br />
            <input required
              autoComplete="off"
              type="text"
              name="price"
              id="price"
              value={this.state.food.price}
              onChange={this.handleChangePrice} />
            <label alt="Unit Price (₱)" placeholder="Enter Unit Price" />
            <br /><div className="text">Is it in Stock?</div>
            <div className="button r" id="button-1">
              <input
                type="checkbox"
                name="inStock"
                id="inStock"
                className="checkbox"
                checked={this.state.food.inStock}
                onChange={this.handleChangeInStock} />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
            <br />
            <button type="button" onClick={this.handleAddFoodItem} className="submit">Submit</button>
          </form>
        </div>
      </Fragment>

    )

  }
}

export default AddFood