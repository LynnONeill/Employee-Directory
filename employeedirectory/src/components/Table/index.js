import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Table({ employees }) {
    return (
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                
                    {employees}
            
              
            </ReactBootStrap.Table>
    
    );
}

export default Table;