import React from 'react';
import { useEffect, useState } from 'react';
import TableRow from './TableRow';

function Table() {
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3100/transactions')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

 
  const handleCategoryChange = (event) => {
    event.preventDefault();
    const selectedCategory = event.target.value;
    
    console.log('Selected Category:', selectedCategory);
    console.log('Original Data:', data);

    setSelectedCategory(selectedCategory);
  
   
    if (selectedCategory === 'All') {
      setFilteredData(data);
    } else {
      const filteredData = data.filter((item) => item.category === selectedCategory);
      setFilteredData(filteredData);
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3100/transactions/${id}`, {
      method: 'DELETE'
    }).then(() => {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
      setFilteredData(newData);
      console.log('Transaction deleted successfully');
    }).catch((error) => {
      console.error('Error deleting transaction:', error);
    });
  };

  return (
    <div className='container'>
    <h1 className="text-center text-white">Transaction Table</h1>
    <div className='mb-3 text-center'>
      <label htmlFor="category" className='text-white'>Filter by Category:</label>
      <select onChange={handleCategoryChange} id="category" name="category">
        <option value="All">All Categories</option>
        <option value="Food">Food</option>
        <option value="Income">Income</option>
        <option value="Transportation">Transportation</option>
        <option value="Fashion">Fashion</option>
        <option value="Gift">Gift</option>
        <option value="Housing">Housing</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
    <table className="table table-bordered table-striped">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Date</th>
          <th scope="col">Description</th>
          <th scope="col">Category</th>
          <th scope="col">Amount</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Render the table rows */}
        { filteredData.map((item) => {
            return (
              <TableRow 
                   id = {item.id} 
                   key = {item.id}
                   date = {item.date}
                   description = {item.description}
                   category = {item.category}
                   amount = {item.amount}
                   handleDelete={ () => handleDelete(item.id) }
              />
            )
          })
        }
      </tbody>
    </table>
    </div>
  );
}

export default Table;