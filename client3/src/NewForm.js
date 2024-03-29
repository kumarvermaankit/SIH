import React from 'react'
import './NewForm.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function NewForm(props){

    const navigate = useNavigate();


    async function send(){
        console.log("bhjhvh")
         axios.post("http://localhost:5000/info/add",props.metric)
      
        navigate("/dashboard")
        
        
    }


    function Change(){
        
    }


  return (
    <>
        <div className='form-container'>
            <header>Information Form</header>
            <div className='div'>
                <div className='form'>
                    <div className='details-info personal'>
                        <span className='title'>Profile Image</span>
                        <div className='fields'>
                            <div className='input-field'>
                                <img className='missing-person-image' src={props.metric.photo} alt="missing person image"></img>
                            </div>
                        </div>
                    </div>
                    <div className='details personal'>
                        <span className='title'>Personal Details</span>
                        <div className='fields'>
                            <div className='input-field'>
                                <label>Full Name</label>
                                <input type='text' placeholder='Enter your name' value={props.metric.name} required></input>
                            </div>
                            <div className='input-field'>
                                <label>Date of Birth</label>
                                <input type='text' placeholder='Enter birth date' value={props.metric.dob} required></input>
                            </div>
                            <div className='input-field'>
                                <label>Mobile Number</label>
                                <input type='text' placeholder='Enter mobile number' value={props.metric.mobile} required></input>
                            </div>
                            <div className='input-field'>
                                <label>Father's Name</label>
                                <input type='text' placeholder="Enter your father's name" value={props.metric.father_name} required></input>
                            </div>
                            <div className='input-field'>
                                <label>Gender</label>
                                <input type='text' placeholder='Enter your gender' value={props.metric.gender} required></input>
                            </div>
                            <div className='input-field'>
                                {/* <label>Age</label>
                                <input type='text' placeholder='Enter your age' value={props.metric.age} required></input> */}
                            </div>
                            <div className='input-field-image'>
                                <label>Click to Upload Latest Image
                                <input type="file" placeholder='File upload ka input kaam ni kar rha' ></input></label>
                            </div>
                        </div>
                    </div>
                    <div className='details ID'>
                        <span className='title'>Aadhar Details</span>
                        <div className='fields'>
                            <div className='input-field'>
                                <label>Aadhar Number</label>
                                <input type='number' placeholder='Enter your aadhar number' value={props.metric.UID} required></input>
                            </div>
                            <div className='input-field'>
                                <label>Residential Address (Line 1)</label>
                                <input type='text' placeholder='House No. / Street / Block No.' value={props.metric.address} required></input>
                            </div>
                            <div className='input-field'>
                                {/* <label>Residential Address (Line 2)</label>
                                <input type='text' placeholder='Area / Locality' required></input> */}
                            </div>
                            {/* <div className='input-field'>
                                <label>City</label>
                                <input type='text' placeholder='Enter city' required></input>
                            </div>
                            <div className='input-field'>
                                <label>Pincode</label>
                                <input type='number' placeholder="Enter your address pincode" required></input>
                            </div>
                            <div className='input-field'>
                                <label>Nationality</label>
                                <input type='text' placeholder='Enter your Nationality' required></input>
                            </div> */}
                        </div>
                    </div>
                </div>
                <button onClick={send} className='submit-information'>Submit</button>
            </div>
        </div>
    </>
  )
}

export default NewForm