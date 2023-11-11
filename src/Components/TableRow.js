import React from 'react';

function TableRow ({id, date, description, category, amount, handleDelete}) {

    return (
        <tr>
          <th scope="row">{id}</th>
          <td>{date}</td>
          <td>{description}</td>
          <td>{category}</td>
          <td>{amount}</td>
          <td>
          <button className="btn btn-warning mr-2">Update</button>
          <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
          </td>
        </tr>
    
    )
 }
 
 export  default TableRow;