import React, { useEffect, useState } from "react";
import Api from "../utils/Api";
import Search from "../components/Search";
import Table from "../components/Table";



function Directory() {

    const [employee, setEmployee] = useState({});
    const [employees, setEmployees] = useState([]);
    const [filteredEmployees, setFilteredEmployees] = useState([]);


    useEffect(() => {
        loadEmployees();
    }, []);

   
    

    function loadEmployees() {
        Api.getEmployees()
            .then(employees => {
                console.log(employees);
                setEmployees(employees);
                setEmployee(employees[0]);
            })
            .catch(err => console.log(err));
    }

  const renderEmployee = (employee) => {
        return(
            <tr>
              <td>{employee.firstName}</td>  
              <td>{employee.lastName}</td>  
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.gender}</td>
            </tr>
        )
        }
       
    return (
        <div>
            <Search />
            <Table 
                employees={employees.map(renderEmployee)}
             />
        </div>
    )



  






};

export default Directory;