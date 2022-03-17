import React,{useState} from 'react'

import axios from "axios";


function CreateForm(loginFormData,handleCloseDialog) {
    const [formValue, setformValue] = useState({
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
        loginFormData.append("name", formValue.name)
        loginFormData.append("email", formValue.email)
        loginFormData.append("gender", formValue.gender)
        loginFormData.append("status", formValue.status)
      
          
          var config = {
            method: 'post',
            url: 'https://gorest.co.in/public/v1/users',
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
    
      <div>
         
    <h2>Create User:-</h2>
<form  onSubmit={handleSubmit}>
 <p> Name: <input type="text" name="name" value={formValue.name} placeholder="Enter your name"  onChange={handleChange}/></p><br/>
        <p> Email: <input type="email" name='email'value={formValue.email}  placeholder="Enter your email" onChange={handleChange}/></p><br/>
        <p> Gender: <input type="text" name='gender' value={formValue.gender}  placeholder="Enter your gender" onChange={handleChange}/></p><br/>
        <p>Status: <select name="status" value={formValue.status} onChange={handleChange} >
     <option value="active">Active</option>
     <option value="inactive">Inactive</option>
 </select></p><br/>
 <button id="btn" type="submit" >Create</button>
              </form>
                  
      </div>
     
  )
}

export default CreateForm