import React, {Component, Fragment} from 'react';
// import { withRouter } from 'react-router-dom';
import '../css/addorder.css';
import axios from 'axios';

const foodInitState ={
  name: '',
  price: 0,
  inStock: true
};

// const orderInitState ={

// };

class AddOrder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foodItemList: [],
      food: foodInitState,
      id: 0
    }
  }

  componentDidMount() {
    this.getUpdateFood();

}
  

  getUpdateFood = () =>{
    // const getUserListURL = 'https://reqres.in/api/users?pages=1';
    const getFoodItemListURL = 'http://localhost:8080/CSDB/rest/foodlist';
    axios.get(getFoodItemListURL).then(res => {
        console.log('SERVICE SUCCESS');
      console.log(res.data)
        this.setState({
            foodItemList: res.data
        });
    });
  } 


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
const foodItemList = this.state.foodItemList;
    return (
      <Fragment>
        <div>
          <p className="title"><b>Add </b> Order </p>
        </div>
        <div />
        <div className="flex-margin">
          <form>
            <input required
            autoComplete="off"
              type="text"
              name="cName"
              id="cName"
              // value={this.state.food.name}
              // onChange={this.handleChangeName}
              />
            <label alt="Customer Name" placeholder="Enter Customer Name" />
            <br />
            
            <input required
            autoComplete="off"
              type="text"
              name="address"
              id="address"
              // value={this.state.food.name}
              // onChange={this.handleChangeName}
              />
            <label alt="Address" placeholder="Enter Address" />
            <br />

            <input required
              autoComplete="off"
              type="text"
              name="contact"
              id="contact"
              // value={this.state.food.price}
              // onChange={this.handleChangePrice}
               />
            <label alt="Contact Number" placeholder="Enter Contact Number" />
            <br /> 
            <select>
            <option value="" disabled selected>Select your option</option>
            {
              
              foodItemList.map(food => {
                            return (
                              <option>{food.name}</option>                               
                            )
                    })
                  }
             </select>
            <br />
            <b>Total:</b>  
            <p/>
            <b>Status: </b>
            <br/>
            <div class="radio-group">
<input type="radio" id="0" name="selector" /><label for="0" className="mylabel">Received</label>
<input type="radio" id="1" name="selector" /><label for="1" className="mylabel">Kitchen</label>
<input type="radio" id="2" name="selector" /><label for="2" className="mylabel">In Transit</label>
<input type="radio" id="3" name="selector"/><label for="3" className="mylabel">Delivered</label>
<input type="radio" id="4" name="selector" /><label for="4" className="mylabel">Canceled</label>
  </div>
            <div className="buttons">
             <button type="button" onClick={this.handleCancel} className="cancel">Cancel</button>
            <button type="button" onClick={this.handleAddFoodItem} className="submit">Submit</button>
            </div>
          </form>
        </div>
      </Fragment>

    )

  }
}

export default AddOrder