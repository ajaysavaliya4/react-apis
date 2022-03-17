import React,{useState,useEffect} from "react";
import axios from "axios";

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import CreateForm from "./CreateForm";
import UpdateForm from './UpdateForm'



function GetData(loginFormData) {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
 
    
  const [persons, setPersons] = useState([]);
 
  const handleAddClick = () => { setIsOpen(true) };
  
    const handleClick = (e) => {
      setIsModalOpen(true)

  }
  const handleCloseDialog = () => {
    setIsOpen(false)
    setIsModalOpen(false)
  }
  
  
  const getData = () => {
    axios.get("https://gorest.co.in/public/v1/users", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer bc1e0809f9bb5ce03125ea49290ec9c8acc225870ebd21e484217e79b88800db'
      }
    })
      .then(response => setPersons(response.data.data))
  }
 
  useEffect(() => { getData() }, []);
  
 
  return (
   
    <div>
      <table className="table table-striped" >
        <thead>
          <tr>
            <th> ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        
        <tbody>
         
          {(persons).map((person,i) => {
            return (
              
              <tr key={i} onClick={handleClick}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.gender}</td>
                <td>{person.status}</td>
              </tr>)
          })}
            
        </tbody>
          
      </table>
      <i className="fa fa-plus-circle" style={{ fontSize: '60px', position: 'absolute', right: '10px', bottom: '10px', position: 'fixed' }} onClick={handleAddClick} />
       
      <div >
        <Dialog aria-label="Create Form" isOpen={isOpen} style={{ width: '30%', borderRadius: '10px' }} onDismiss={() => setIsOpen(false)} onSubmit={handleCloseDialog}>
          <CreateForm />
          
        </Dialog>
      </div>
      <div >
        <Dialog aria-label="Create Form" isOpen={isModalOpen} style={{ width: '30%', borderRadius: '10px' }} onDismiss={() => setIsModalOpen(false)} onSubmit={handleCloseDialog} >
          <UpdateForm />
          
        </Dialog>
      </div>
      
     
      
            
     
        
   
        
          
       </div>
  );
 
}


export default GetData