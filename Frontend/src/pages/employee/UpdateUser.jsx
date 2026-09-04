import React, { useEffect, useState } from 'react';
import './UpdateUser.css';
import { Button, Form, FormControl } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [formdata ,setFormdata] = useState({
            name:"",
            email:"",
            phone:"",
            department:""
        })
    
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            setFormdata({
                ...formdata,
                [name]: value
            })
        };

        useEffect(()=>{
                const fetchEmployee = async()=>{
                    try{
                        const response = await fetch(`http://localhost:8080/api/employee/${id}`)
                        const data = await response.json();

                        setFormdata(data);
                    }catch(error){
                        console.log("Error fetchng ", error.message);
                    }
                }

                fetchEmployee();
        },[id])

        const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch(
            `http://localhost:8080/api/employee/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formdata),
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log("User updated:", data);

        navigate('/');

    } catch (error) {
        console.error("Error updating user:", error.message);
    }
};
    
  return (

        <div className='center-form'>
            <h1>Edit Employee</h1>
            <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="formBasicName">
                        <FormControl
                                type="text"
                                name="name"
                                placeholder="Enter name"
                                value={formdata.name}
                                onChange={handleInputChange}
                            />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <FormControl
                                type="email"
                                name="email"
                                placeholder="Enter email"
                                value={formdata.email}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <FormControl
                                type="text"
                                name="phone"
                                placeholder="Enter phone"
                                value={formdata.phone}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                    <Form.Group controlId="formBasicDepartment">
                        <FormControl
                                type="text"
                                name="department"
                                placeholder="Enter department"
                                value={formdata.department}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                    <Button variant="primary" type="submit" className='w-100'>Edit Employee</Button>
                </Form>
            
            
        
    </div>
  )
}

export default UpdateUser
