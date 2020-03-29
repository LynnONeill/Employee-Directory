import React, { useEffect, useState } from "react";
import Api from "../utils/Api";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";
import Search from "../components/Search";
import Table from "../components/Table";



function Directory() {

    const [employees, setEmployees] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredEmployees, setFilteredEmployees] = useState([]);


    useEffect(() => {
        loadEmployees(search);
    }, []);



    function loadEmployees(search) {
        Api.getEmployees()
            .then(employees => {
                console.log(employees);
                if (search.length === 0) {
                    setEmployees(employees);
                    console.log("hit here")
                } else {
                    console.log("redirecting to handleSearchChange")
                    handleSearchChange()
                }
            })
            .catch(err => console.log(err));
    }

    const renderEmployee = (employee) => {
        return (
            <tr>
                <td data-th="Image"
                    src={employee.image}
                    className="img-responsive"
                />
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
            </tr>
        )
    };

    const handleSearchChange = function (event) {
        console.log("search initiated")
        const newSearch = event.target.value;
        
            console.log("handleSearchChange hit here.")
        
        setSearch(newSearch);
    }

    const filterEmployees = function(search) {
        let filteredEmployeeList = [];

    }

    return (
        <div>
            <Wrapper>
                <Header />
                <Search
                  handleSearchChange={handleSearchChange}
                  value={search}
                />
                <Table
                  employees={employees.map(renderEmployee)}
                />
            </Wrapper>

        </div>
    )
};

export default Directory;