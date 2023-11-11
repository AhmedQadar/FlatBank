import React from "react";

function Form ({date, description, category, amount, onChange, onSubmit}) {
    
    return (
        <form  onSubmit={onSubmit}>
            <h1 className="text-center text-white">Form</h1>
            <div className="mb-3">
                <label htmlFor="date" className="form-label text-white">Date</label>
                <input 
                type="date" 
                className="form-control" 
                id="date" 
                value={date}
                onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label text-white">Description</label>
                <input
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label text-white">Category</label>
                <input
                type="text"
                className="form-control"
                id="category"
                value={category}
                onChange={onChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label text-white">Amount</label>
                <input
                type="number"
                step="1"
                className="form-control"
                id="amount"
                value={amount}
                onChange={onChange}
                />
            </div>
            <button type="submit" className="btn btn-info">
            Submit
            </button>
        </form>
    )
}
export default Form;