import React, { useState } from 'react'
import Employee from '../components/Employee';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header'

function Employees() {

  const employeesData = [
      { 
        id:1,
        name:"Tommy",
        role:"CEO",
        image:"https://cdn.webshopapp.com/shops/268192/files/403373338/poster-tommy-shelby-peaky-blinders-42-x-594-cm-a2.jpg",
      },
      {
        id:2,
        name:"Finn",
        role:"staff",
        image:"https://i2-prod.walesonline.co.uk/incoming/article23499865.ece/ALTERNATES/s1200c/0_Peaky-Blinders-SERIES-4.jpg",
      },
      {
        id:3,
        name:"John",
        role:"staff",
        image:"https://i.pinimg.com/originals/3b/f9/52/3bf95269083f26ddce72b275dc27f3f5.jpg",
      },
      {
        id:4,
        name:"Michael",
        role:"staff",
        image:"https://hips.hearstapps.com/hmg-prod/images/peaky-blinders-michael-gray-season-3-1607686478.jpg?crop=1.00xw:0.335xh;0,0.0577xh&resize=1200:*",
      },
  ];

  const [employees, setEmployees] = useState(employeesData)
  const updateEmployee = (id, newName, newRole) => {
    const updateEmployees = employees.map((employee) => {
      if(id === employee.id){
        return {...employee, name:newName, role:newRole};
      } else {
        return employee;
      }
    })
    setEmployees(updateEmployees);
  };

  const addEmployee = (name, role, img) => {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role, 
      img: img,
    };
    setEmployees([...employees, newEmployee]);
  };
  return (
    <div className='app'>
      <div className='flex flex-wrap justify-center'>
          {employees.map((employee) => {
            const editEmployee =(
              <EditEmployee 
                id={employee.id} 
                name={employee.name} 
                role={employee.role} 
                updateEmployee={updateEmployee}
              />
            );
            return (
              <Employee 
                key={employee.id}
                id={employee.id}
                name={employee.name} 
                role={employee.role} 
                image={employee.image}
                editEmployee={editEmployee}
              />
            );
          })}
      </div>
      <AddEmployee addEmployee={addEmployee}/>
    </div>
  );
}

export default Employees;