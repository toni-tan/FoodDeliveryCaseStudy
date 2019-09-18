import React, {Component, Fragment} from 'react';
import '../css/addfood.css';

class AddFood extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          foodItemList: [],
          food: {
            name: '',
            price: '',
            inStock: ''
          }
        }
      }

      handleChangeInfo = e => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
          food: {
            ...prevState.food,
            [name]: value
          }
        }));
      }

      handleAddFoodItem = e => {
        let {food, foodItemList} = this.state;
        if (food.name.length <= 0 || food.price.length <= 0) {
          return alert('Food item name or Unit price cannot be blank!');
        }
        if (isNaN(food.price)){
            return alert('Price must be number!');
        }
       // let userList = [...this.state.userList];
          foodItemList.push(food);
          this.setState({ foodItemList });
          e.preventDefault();
      }

      
    render() {
        
        console.log(this.state.foodItemList);
         return (
           <Fragment>
               
            <div>
                <p className="title"><b>Add </b> Food Item </p>
            </div>
            <div />
          <div className="flex-margin"> 
          <form>
            <input required type="text" name="name"  id="name" onChange={this.handleChangeInfo} />
            <label alt="Food Item Name" placeholder="Enter Food Item Name" />
            <br />
            <input required type="text" name="price" id="price" onChange={this.handleChangeInfo} />
            <label alt="Unit Price (₱)" placeholder="Enter Unit Price" />
            <br /><div className="text">Is it in Stock?</div>  
            <div className="button r" id="button-1">
            <input type="checkbox" name="inStock" className="checkbox" id="inStock"/> 
            <div className="knobs"></div>
            <div className="layer"></div> 
            </div>
            <br/>
            <button type="button" onClick={this.handleAddFoodItem} className="submit">Submit</button>
        
          </form>
        </div> 
           </Fragment>
           
           )
           
       }
     }
   
   export default AddFood 