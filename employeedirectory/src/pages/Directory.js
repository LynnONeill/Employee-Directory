import React, { useEffect, useState } from "react";
import Api from "../utils/Api";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Search from "../components/Search";
import Table from "../components/Table";



function Directory()  {
    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState();
    const [filtered, setFiltered] = useState([]);
 
    useEffect(() => {
   
        Api.getEmployees()
        .then(employees => {
            console.log(employees);
            setEmployees(employees);
            } 
        )
        .catch(err => console.log(err));
      }, []);


/// Function to handle input change upon entering name search ////////////////////////
    const handleSearchChange = event => {
        console.log("search initiated");
         setSearch(event.target.value);
        
    };

    const handleClick = event => {
        console.log(search)
        filterEmployees(search)
       
    }

    /// This function will use the search state to filter through the employee state and rerender the employee list //////
   function filterEmployees(search) {
       console.log(search);
       console.log(employees);

            employees.filter(employees => {
                if(employees.firstName == search || employees.lastName == search) {
                const filteredList = [];
                filteredList.push(employees)
                console.log(filteredList)
                setEmployees(filteredList)
            }
       });
    }



/// Will render all employees from the current employee state ////////////////////////////
    function renderEmployee(employee) {
        return (
            <tr>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
            </tr>
        )
    };

///// Returned JSX for UI ///////////////////////////////////////////////////////    
    return (
        <div>
            <Wrapper>
                <Header />
                <Search
                  handleSearchChange={handleSearchChange}
                  handleClick={handleClick}
                />
                <Table
                  employees={employees.map(renderEmployee)}
                />
            </Wrapper>
        </div>
    )
};

export default Directory;