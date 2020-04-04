import React, { useEffect, useState } from "react";
import Api from "../utils/Api";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Search from "../components/Search";
import Table from "../components/Table";
import Sort from "../components/Sort"



function Directory()  {
    const [employees, setEmployees] = useState([]);
    const [fullList, setFullList] = useState([]);
    const [search, setSearch] = useState();
 
    useEffect(() => {
   
        Api.getEmployees()
        .then(employees => {
            console.log(employees);
            setEmployees(employees);
            setFullList(employees);
            } 
        )
        .catch(err => console.log(err));
      }, []);


/// Function to handle input change upon entering name search ////////////////////////
    const handleSearchChange = event => {
        console.log("search initiated");
        const newSearch = event.target.value;
        const lowerCaseSearch = newSearch.toLowerCase();
        setSearch(lowerCaseSearch);
        console.log(search);
        return;
    };

    const handleClick = event => {
        console.log(search)
        filterEmployees(search)
       
    }
    
    const handleSort = event => {
        console.log("handleSort log");
        const arr = [...employees].sort(sortEmployees);
        console.log(arr)
        setEmployees(arr)

        return;
    }

    const sortEmployees = function(a, b) {
        if(a.lastName < b.lastName) {
            return -1;
        }
        if(a.lastName > b.lastName) {
            return 1;
        }
        if(a.firstName < b.firstName) {
            return -1;
        }
        if(a.firstName < b.lastName) {
            return 1;
        }
    }
    /// This function will use the search state to filter through the employee state and rerender the employee list //////
   function filterEmployees(search) {
       console.log(search);
       console.log(employees);
        if(search !== "") {
            employees.filter(employees => {
                if(employees.firstName.toLowerCase() === search || employees.lastName.toLowerCase() === search) {
                const filteredList = [];
                filteredList.push(employees)
                console.log(filteredList)
                setEmployees(filteredList)
            }})
          
        } else {
            console.log(fullList);
            setEmployees(fullList)

        }
    }

  



/// Will render all employees from the current employee state ////////////////////////////
    function renderEmployee(employee) {
        return (
            <tr key={employee.id}>
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
                <Sort 
                handleSort={handleSort}
                />
                <Table
                  employees={employees.map(renderEmployee)}
                />
            </Wrapper>
        </div>
    )
};

export default Directory;