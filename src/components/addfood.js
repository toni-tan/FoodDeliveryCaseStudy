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
            inStock: true
          }
        }
      }

      handleChangeInfo = e => {
        const { name, value, checked } = e.target;
    
        if(name === 'inStock')
          return this.setState(prev => ({
            food: {
              ...prev.food,
              inStock: checked
            }
          }));
        
        // THIS 
        else if(name === 'price')
          return this.setState(prev => ({
            food: {
              ...prev.food,
              price: value
            }
          }));
        // AND THIS
        else if(name === 'name')
          return this.setState(prev => ({
            food: {
              ...prev.food,
               name: value
            }
          }));
    
        // IS EQUALS TO THIS
        this.setState((prevState) => ({
          food: {
            ...prevState.food,
            [name]: value
          }	
        }));
      }
      // onChange = e => {
      //   console.log(e.target.value);
      // }

      handleAddFoodItem = e => {
        let {food, foodItemList} = this.state;
        if (food.name.length <= 0 || food.price.length <= 0) {
          return alert('Food item name or Unit price cannot be blank!');
        }
        if (isNaN(food.price)){
            return alert('Price must be number!');
        }
        if (food.price < 0){
          return alert ("Price must be a non-negative number!");
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
            <input required type="text" name="name" autoComplete="off"  id="name" onChange={this.handleChangeInfo} />
            <label alt="Food Item Name" placeholder="Enter Food Item Name" />
            <br />
            <input required type="text" name="price" autoComplete="off" id="price" onChange={this.handleChangeInfo} />
            <label alt="Unit Price (₱)" placeholder="Enter Unit Price" />
            <br /><div className="text">Is it in Stock?</div>  
            <div className="button r" id="button-1">
            <input type="checkbox" name="inStock" className="checkbox" id="inStock" 
            checked={this.state.food.inStock}
            onChange={this.handleChangeInfo} /> 
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