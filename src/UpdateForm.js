
import axios from "axios";
import React, { useState } from 'react'


function UpdateForm(loginFormData) {
  const [formValue, setformValue] = useState({
      id:'',
        name:'',
        email: '',
        gender: '',
        status:''
    });
    
    const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }
    
   
    
  
    let handleSubmit = async (e) => {
        
      e.preventDefault();
      
        
        const loginFormData = new FormData();
        loginFormData.append('id',formValue.id)
        loginFormData.append("name", formValue.name)
        loginFormData.append("email", formValue.email)
        loginFormData.append("gender", formValue.gender)
        loginFormData.append("status", formValue.status)
      
          
          var config = {
            method: 'put',
            url: `https://gorest.co.in/public/v1/users/${formValue.id}`,
            headers: { 
              'Authorization': 'Bearer bc1e0809f9bb5ce03125ea49290ec9c8acc225870ebd21e484217e79b88800db', 
              'Content-Type': 'application/json'
            },
              data: loginFormData,
              responseType: 'json',
          };
          
          axios(config)
          .then(function (response) {
            console.log((response.data.data));
          })
          .catch(function (error) {
            console.log(error);
          });
          
      }
    
    
    return (
        
            
        <div style={{ display:'block'}} >
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
    <p>ID: <input type="text" id="id1" defaultValue={formValue.id}/></p>
    <p> Name: <input type="text" name="name" id="name1" defaultValue={formValue.name} onChange={handleChange}/></p><br/>
    <p> Email: <input type="email" name="email" id="email1" defaultValue={formValue.email} onChange={handleChange}/></p><br/>
    <p>Gender: <input type="text" name="gender" id="gender1" defaultValue={formValue.gender} onChange={handleChange}/></p><br/>
    <p>Status: <select name="status" id="status1" defaultValue={formValue.status} onChange={handleChange}>
    <option value="active">Active</option>
    <option value="inactive">Inactive</option>
</select></p><br/>
    <button id="btn1" type="submit">Update</button>
                </form></div>
               
        
  )
}

export default UpdateForm