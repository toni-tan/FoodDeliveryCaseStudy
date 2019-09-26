import React, { Component, Fragment } from "react";
import "../css/updatefood.css";
import { withRouter } from "react-router-dom";

class UpdateOrder extends Component {
  constructor(props) {
    super(props);
    const { order } = this.props;
    
    console.log("hello",this.props.order)
    this.state={
        order_id: order.order_id,
        cName: order.cName,
        address: order.address,
        contact: order.contact,
        status: order.status
    };
    
    //ETO
    console.log("PASSED PROPs", this.props);
    console.log("order", this.props.order);
  }
  
  handleChangeName = event => this.setState({ cName: event.target.value })
  handleChangeAddress = event => this.setState({ address: event.target.value })
  handleChangeContactNumber = event => this.setState({ contact: event.target.value })
  handleChangeStatus = event => this.setState({ status: event.target.value })
  handleClickUpdate = () => this.props.handleUpdateComponent({ ...this.state })

  render() {
    const {
        hideModal,
    } = this.props;
    
    return (
        <div className="rootCss">
            <div className="innerCss">
                <p className="title-modal">
                    <b>Update </b> Order
                </p>

                <form>
                    <input
                        required
                        autoComplete="off"
                        type="text"
                        name="cName"
                        id="cName"
                        onChange={this.handleChangeName}
                        defaultValue={this.state.cName}
                    />
                    <label alt="Customer Name" />
                    <br />
                    <input
                        required
                        autoComplete="off"
                        type="text"
                        name="address"
                        id="address"
                        value={this.state.address}
                        onChange={this.handleChangeAddress}
                    />
                    <label alt="Address" />
                    <br />
                    <input
                        required
                        autoComplete="off"
                        type="text"
                        name="contact"
                        id="contact"
                        value={this.state.contact}
                        onChange={this.handleChangeContactNumber}
                    />
                    <label alt="Contact Number" />
                    <br />
                    
                    <div className="radio-group" onChange={this.handleChangeStatus} checked={this.state.status}>
                            <input type="radio" id="0" value="0"  name="selector" /><label htmlFor="0" className="mylabel">Received</label>
                            <input type="radio" id="1" value="1"  name="selector" /><label htmlFor="1" className="mylabel">Kitchen</label>
                            <input type="radio" id="2" value="2"  name="selector" /><label htmlFor="2" className="mylabel">In Transit</label>
                            <input type="radio" id="3" value="3"  name="selector" /><label htmlFor="3" className="mylabel">Delivered</label>
                            <input type="radio" id="4" value="4"  name="selector" /><label htmlFor="4" className="mylabel">Canceled</label>
                        </div>
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
                        >Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
 }
}


export default UpdateOrder