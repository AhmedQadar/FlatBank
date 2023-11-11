# Form Js :
1 -
     import React from "react"; - Import the necessary React library.

2 -
        function Form({ date, description, category, amount, onChange, onSubmit }) { - Define a functional component named Form that takes specific props (date, description, category, amount, onChange, onSubmit).

3-
        return  - Start the content that the Form component will render.

3-
        <form onSubmit={onSubmit}> - Create an HTML <form> element, handling the submission with the provided onSubmit function.

4-
        <h1 className="text-center text-white">Form</h1> - Display a centered and styled heading for the form.

5-
        <div className="mb-3"> - Introduce a spacing container with the Bootstrap class mb-3.

6-
        <label htmlFor="date" className="form-label text-white">Date</label> - Add a labeled space for the date input, styled with Bootstrap.

7-
        <input ... /> - Incorporate an input field for the date, controlled by React state (value={date}, onChange={onChange}).

8-
        Repeated similar structures for the description, category, and amount input fields, adjusting type, id, label, value, and onChange accordingly.

9-
        <button type="submit" className="btn btn-info">Submit</button> - Include a styled submit button using Bootstrap classes.

10-
        </form> - Close the HTML <form> element.

11-
        } - End the functional component definition.

        export default Form; - Export the Form component as the default export for use in other files.



# TableRow Js:
1-
            import React from 'react'; - Import the necessary React library.

2-
            function TableRow ({id, date, description, category, amount, handleDelete}) { - Define a functional component named TableRow that accepts specific props (id, date, description, category, amount, handleDelete).

3-
            return  - Begin the content that the TableRow component will render.

            <tr> - Start an HTML table row.

4-
            <th scope="row">{id}</th> - Add a table header cell with the id as the content, indicating the row number.

5-
            <td>{date}</td> - Include a table data cell with the date value.

6-
            <td>{description}</td> - Add a table data cell with the description value.

7-
            <td>{category}</td> - Include a table data cell with the category value.

8-
            <td>{amount}</td> - Add a table data cell with the amount value.

9-
            <td> - Start a table data cell.

10-
            <button className="btn btn-warning mr-2">Update</button> - Include an update button styled with Bootstrap classes.

11-
            <button className="btn btn-danger" onClick={handleDelete}>Delete</button> - Add a delete button styled with Bootstrap classes. The onClick prop is set to the provided handleDelete function.

12-
            </td> - End the table data cell.

            </tr> - End the HTML table row.

13-
            } - End the functional component definition.

            export default TableRow; - Export the TableRow component as the default export for use in other files.

 

#   Table Js :
1-
        import React from 'react'; - Import the necessary React library.

2-
        import { useEffect, useState } from 'react'; - Import the useEffect and useState hooks from React.

3-
        import TableRow from './TableRow'; - Import the TableRow component from a local file.

4-
        function Table() { - Define a functional component named Table.

5-
        const [data, setData] = useState([]); - Initialize state variables using the useState hook for the overall data.

6-
        const [selectedCategory, setSelectedCategory] = useState('All'); - Initialize state variables for the selected category.

7-
        const [filteredData, setFilteredData] = useState([]); - Initialize state variables for the filtered data.

8-
        useEffect(() => { ... }, []); - Use the useEffect hook to fetch data from the server when the component mounts and update the data and filteredData states.

9-
        const handleCategoryChange = (event) => { ... }; - Define a function handleCategoryChange to handle changes in the selected category dropdown.

10-
        const handleDelete = (id) => { ... }; - Define a function handleDelete to handle the deletion of transactions.

11-
        return  - Begin the JSX content that the Table component will render.

12-
        <div className='container'> - Use a Bootstrap container for styling purposes.

13-
        <h1 className="text-center text-white">Transaction Table</h1> - Display a heading for the transaction table in the center.

14-
        <div className='mb-3 text-center'> - Create a container div with Bootstrap styling for spacing.

15-
        <label htmlFor="category" className='text-white'>Filter by Category:</label> - Add a label for the category dropdown.

16-
        <select onChange={handleCategoryChange} id="category" name="category"> ... </select> - Create a dropdown for filtering by category and bind the onChange event to the handleCategoryChange function.

17
        <option value="All">All Categories</option> - Include an option for displaying all categories.

18-
        <option value="Food">Food</option> - Include options for specific categories.

19-
        <table className="table table-bordered table-striped"> - Start an HTML table with Bootstrap styling.

20-
        <thead className="thead-dark"> ... </thead> - Start the table header with a dark background.

21-
        <tr> ... </tr> - Start a table row for the header.

22-
        <tbody> ... </tbody> - Start the table body where rows will be rendered.

23-
        {filteredData.map((item) => { ... })} - Use the map function to render rows using the TableRow component, passing the necessary props and the handleDelete function.

24-
        </tbody> - Close the table body.

25-
        </table> - Close the HTML table.

26-
        </div> - Close the container div.

27-
        } - End the JSX content.

        export default Table; - Export the Table component as the default export for use in other files.



 # App Js
 1-
            import './App.css'; - Import a CSS file named App.css to apply styles to the App component.

2-
            import Table from './Components/Table'; - Import the Table component from a local file.

3-
            import Form from './Components/Form'; - Import the Form component from a local file.

4-
            import { useState } from 'react'; - Import the useState hook from React to manage state in the functional component.

5-
            const [formData, setFormData] = useState ({ ... }) - Initialize state for form data using the useState hook. formData is an object containing date, description, category, and amount.

6-
            const collectData = (e) => { ... } - Define a function collectData to update the form data in response to input changes. It prevents the default form behavior and sets the corresponding state property based on the input's id.

7-
            const handleSubmit = (e) => { ... } - Define a function handleSubmit to handle form submission. It checks if all fields are filled, creates a new transaction object, sends a POST request to the server, and resets the form data.

            return  - Start the JSX content that the App component will render.

8-
            Navbar Section:

            <nav className= "navbar navbar-expand-lg bg-dark" > - Create a Bootstrap navbar with a dark background.
            <a className="navbar-brand text-light" href="#">Bank Of Flatiron</a> - Navbar brand with text and light color.
            <button className="navbar-toggler" ...> - Navbar toggle button for responsive behavior.
            <div className="collapse navbar-collapse" ...> - Container for navbar items.
            Navbar Links:
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"> ... </ul> - Unordered list for navbar links.
            <li className="nav-item"> ... </li> - List item for each navbar link.
            <a className="nav-link active text-light" ...> - Navbar link with text and light color.
            <form className="d-flex" role="search"> ... </form> - Form for searching with an input field and a search button.

9-          
            Main Content Section:

            <div className='container mt-5'> - Container for main content with top margin.
            <div className="card bg-secondary"> - Bootstrap card with a secondary background.
            <div className='card-body'> - Card body.
            <Form ... > - Render the Form component with props passed from the App component.
            <Table key="transactionsTable"> - Render the Table component with a key.
            **</div> - Close the JSX content.

            export default App; - Export the App component as the default export for use in other files.