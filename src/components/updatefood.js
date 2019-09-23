import React, { Component, Fragment } from "react";
import "../css/updatefood.css";
import { withRouter } from "react-router-dom";

class UpdateFood extends Component {
  constructor(props) {
    super(props);
    const { food } = this.props;
    
    this.state = {
      id: food.id,
      name: food.name,
      price: food.price,
      inStock: food.inStock
    };
    
    // ETO
    console.log("PASSED PROPs", this.props);
    console.log("food", this.props.food);
  }
  
 	handleChangeName = event => this.setState({ name: event.target.value })
  handleChangePrice = event => this.setState({ price: event.target.value })
  handleChangeInStock = event => this.setState({ inStock: event.target.checked })
	handleClickUpdate = () => this.props.handleUpdateComponent({ ...this.state })

  render() {
    const {
        hideModal,
    } = this.props;
    
    return (
        <div className="rootCss">
            <div className="innerCss">
                <p className="title-modal">
                    <b>Update </b> Food Item
                </p>

                <form>
                    <input
                        required
                        autoComplete="off"
                        type="text"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.handleChangeName}
                    />
                    <label alt="Food Item Name" />
                    <br />
                    <input
                        required
                        autoComplete="off"
                        type="text"
                        name="price"
                        id="price"
                        value={this.state.price}
                        onChange={this.handleChangePrice}
                    />
                    <label alt="Unit Price (₱)" />
                    <br />
                    <div className="text">Is it in Stock?</div>
                    <div className="button r" id="button-1">
                        <input
                            type="checkbox"
                            name="inStock"
                            id="inStock"
                            className="checkbox"
                            checked={this.state.inStock}
                            onChange={this.handleChangeInStock}
                        />
                        <div className="knobs"></div>
                        <div className="layer"></div>
                    </div>
                    <br />
                    <div className="buttons">
                        <button
                            type="button"
                            onClick={hideModal}
                            className="cancel"
                        >Cancel</button>
                        <button
                            type="button"
                            onClick={this.handleClickUpdate}
                            className="submit"
                        >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}


export default UpdateFood