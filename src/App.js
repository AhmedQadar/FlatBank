import './App.css';
import Table from './Components/Table';
import Form from './Components/Form';
import { useState } from 'react';

function App() {
    const [formData, setFormData] = useState ({
      date: '',
      description: '',
      category: '',
      amount: ''
    })

    const collectData = (e) => {
      e.preventDefault();
      setFormData({
        ...formData,
        [e.target.id]: e.target.value 
      })
    }

    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        formData.date === '' ||
        formData.description === '' ||
        formData.category === '' ||
        formData.amount === ''
      ) {
        alert('Please fill in all fields');
        return;
      }

      const newTransaction = {
        date: formData.date,
        description: formData.description,
        category: formData.category,
        amount: formData.amount
      }
  
      fetch('http://localhost:3100/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTransaction)
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(error => {
        console.error(error);
        alert('Failed to create transaction. Please try again.');
      });

      setFormData({
        date: '',
        description: '',
        category: '',
        amount: ''
      })
    }

    return (
      <div>
         {/* Navbar */}
         <nav className= "navbar navbar-expand-lg bg-dark" >
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">Bank Of Flatiron</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">Link</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
        <div className='container mt-5'>
            <div className="card bg-secondary">
              <div className='card-body'>
                <Form 
                data={formData.date} 
                description={formData.description} 
                category={formData.category} 
                amount={formData.amount}
                onChange={collectData}
                onSubmit={handleSubmit}
                /> 
                <Table key="transactionsTable"/>
              </div>
            </div>
        </div>
      </div>
    );
}

export default App;
