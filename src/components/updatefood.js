import React, { Component, Fragment } from 'react';
import '../css/updatefood.css';
import { withRouter } from 'react-router-dom';
let UpdateFood = props =>{

    
    const { 
        handleChangeName,
        handleChangePrice,
        handleChangeInStock,
        //handleAddComponent,
        handleUpdateComponent, 
        showComponentModal,
        hideModal,   
        // modalFlow,
        // componentItem
        food
    } = props;

    
    if (!showComponentModal) 
        return null;

    console.log(food);

    return (
            <div className="rootCss">
            <div className="innerCss">
            
          <p className="title-modal"><b>Update </b> Food Item </p>
        
            <form>
            <input required
            autoComplete="off"
              type="text"
              name="name"
              id="name"
              defaultValue={food.name}
              onChange={handleChangeName} />
            <label alt="Food Item Name" />
            <br />
            <input required
              autoComplete="off"
              type="text"
              name="price"
              id="price"
              defaultValue={food.price}
              onChange={handleChangePrice} />
            <label alt="Unit Price (₱)" />
            <br /><div className="text">Is it in Stock?</div>
            <div className="button r" id="button-1">
              <input
                type="checkbox"
                name="inStock"
                id="inStock" 
                className="checkbox"
                defaultChecked={food.inStock}
                onChange={handleChangeInStock} />
              <div className="knobs"></div>
              <div className="layer"></div>
            </div>
            <br />
            <div className="buttons">
            <button type="button" onClick={hideModal} className="cancel">Cancel</button>
            <button type="button" onClick={handleUpdateComponent} className="submit">Submit</button>
            </div>
          </form>
             </div>
            </div>
       
    )
}

export default UpdateFood