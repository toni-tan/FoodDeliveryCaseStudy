import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/addorder.css';
import axios from 'axios';

const foodInitState = {
    id: '',
    name: '',
    price: 0,
    inStock: true
};

const orderInitState = {
    order_id: 0,
    cName: '',
    address: '',
    contact: '',
    total: 0,
    status: ''

};

class AddOrder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            foodItemList: [],
            food: foodInitState,
            id: 0,
            orderList: [],
            order: orderInitState,
            selectedOptionID: -1,
        }

    }

    componentDidMount() {
        this.getUpdateFood();

    }


    getUpdateFood = () => {
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


    handleChangeCustomerName = e => this.setState({
        order: {
            ...this.state.order,
            cName: e.target.value
        }
    });

    handleChangeAddress = e => this.setState({
        order: {
            ...this.state.order,
            address: e.target.value
        }
    });

    handleChangeContact = e => this.setState({
        order: {
            ...this.state.order,
            contact: e.target.value
        }
    });

    handleChangeStatus = e => this.setState({
        order: {
            ...this.state.order,
            status: e.target.checked
        }
    });


    //   handleClearFoodFields = () => this.setState({ food: foodInitState });

    handleCancel = () => {
        let path = "/orders";
        this.props.history.push(path);
    }

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

    getPriceById = () => {
        const item = this.state.foodItemList.find(food => food.id == this.state.selectedOptionID);
        return item.price;
    }

    displayInStockOnly = () => this.state.foodItemList.filter(item => item.inStock);
    handleChangeOrderItem = event => {
        console.log("I NEED THIS!!!!!!!!!!!!!!!!!!!!!!", event.target.value)
        this.setState({
            selectedOptionID: event.target.value
        })
    }

    render() {
        console.log(this.state);
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
                            value={this.state.order.cName}
                            onChange={this.handleChangeCustomerName}
                        />
                        <label alt="Customer Name" placeholder="Enter Customer Name" />
                        <br />

                        <input required
                            autoComplete="off"
                            type="text"
                            name="address"
                            id="address"
                            value={this.state.order.address}
                            onChange={this.handleChangeAddress}
                        />
                        <label alt="Address" placeholder="Enter Address" />
                        <br />

                        <input required
                            autoComplete="off"
                            type="text"
                            name="contact"
                            id="contact"
                            value={this.state.order.contact}
                            onChange={this.handleChangeContact}
                        />
                        <label alt="Contact Number" placeholder="Enter Contact Number" />
                        <br />
                        <select value={this.state.selectedOptionID} onChange={this.handleChangeOrderItem}>
                            <option value={-1}>Order Items</option>
                            {
                                this.displayInStockOnly().map(food => {
                                    return (
                                        <option key={food.id} value={food.id}>{food.name}</option>
                                    )
                                })
                            }
                        </select>
                        {
                            this.state.selectedOptionID !== -1 ?
                                <>
                               <p/>Quantity:
                                <input />
                                </> : null
                        }
                        {
                            this.state.selectedOptionID !== -1 ?
                                <div>
                                    Price: {this.getPriceById()}
                                </div> : null
                        }
                        
                        <br />
                        <b>Total:</b>
                        <p />
                        <b>Status: </b>
                        <br />
                        <div class="radio-group" onChange={this.handleChangeStatus}>
                            <input type="radio" id="0" name="selector" /><label for="0" className="mylabel">Received</label>
                            <input type="radio" id="1" name="selector" /><label for="1" className="mylabel">Kitchen</label>
                            <input type="radio" id="2" name="selector" /><label for="2" className="mylabel">In Transit</label>
                            <input type="radio" id="3" name="selector" /><label for="3" className="mylabel">Delivered</label>
                            <input type="radio" id="4" name="selector" /><label for="4" className="mylabel">Canceled</label>
                        </div>
                        <div className="buttons">
                            <button type="button" onClick={this.handleCancel} className="cancel">Cancel</button>
                            <button type="button" className="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </Fragment>

        )

    }
}

export default withRouter(AddOrder)