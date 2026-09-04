import React from 'react'
import { Form, FormControl } from 'react-bootstrap'
import './Postuser.css'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Postuser = () => {

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
    }

   
    const navigate = useNavigate();

    const handlesubmit =async(e) => {
        e.preventDefault();
        console.log(formdata);
        // You can add your logic to send the form data to the server here

        try{
                const response = await fetch('http://localhost:8080/api/employee',{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(formdata)
                });
                const data = await response.json();
                console.log("Employee created : ",data);
                navigate('/');
        }catch(error){
            console.error("Error submitting form:", error);
        }
    }
  return (
    <>
        <div className='center-form'>
            <h1>Post new Employee</h1>
            <Form onSubmit={handlesubmit}>

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

                    <Button variant="primary" type="submit" className='w-100'>Post Employee</Button>
                </Form>
            
            </div>
        </>
  )
}

export default Postuser
