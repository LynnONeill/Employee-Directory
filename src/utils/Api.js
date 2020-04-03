import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    getEmployees: function () {
        return axios
            .get("https://randomuser.me/api/?results=1000&nat=us")
            .then(res => {
                const employees = res.data.results;
                return employees.map(employee => {
                    return{
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        phone: employee.phone,
                        email: employee.email,
                        gender: employee.gender,
                        id: employee.id.value
                    }
                   
                })

            })
}
};