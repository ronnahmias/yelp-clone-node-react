import React from 'react'

const AddRestaurant = () => {
  return (
    <div class="mb-4">
        <form action="">
            <div className="form-row" >
                <div className="col-form" >
                    <input type="text" className="form-control" placeholder="שם"/>
                </div>
                <div className="col-form" >
                    <input type="text" className="form-control" placeholder="מיקום" />
                </div>
                <div className="col-form" >
                    <select className="custom-select my-1 mr-sm-2">
                        <option disabled selected>טווח מחירים</option>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <button className="btn-form btn btn-primary">הוסף</button>
            </div>
        </form>
    </div>
  )
}

export default AddRestaurant