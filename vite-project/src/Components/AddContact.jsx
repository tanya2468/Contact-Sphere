import React, { useState } from 'react';
import '../assets/css/form.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaAt, FaPhoneFlip, FaRegAddressCard, FaUserPlus } from 'react-icons/fa6';

const AddContact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!values.name || !values.email || !values.phone || !values.address) {
      toast.error("Please fill in all fields");
      return;
    }

    axios.post('https://contact-sphere.onrender.com/contactmsyt/add-contact', values, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => {
        if (res.data.success) {
          toast.success("Contact Added Successfully", {
            position: "top-right",
            autoClose: 5000,
          });
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="add-form-container">
      <form className='add-form' onSubmit={handleSubmit}>
        <h2>Create Contact</h2>
        <div className="form-group">
          <FaUserPlus />
          <input type="text" placeholder='Enter Name' className='form-control' name='name' value={values.name} onChange={handleInput} />
        </div>
        <div className="form-group">
          <FaAt />
          <input type="email" placeholder='Enter Email' className='form-control' name='email' autoComplete='off' value={values.email} onChange={handleInput} />
        </div>
        <div className="form-group">
          <FaPhoneFlip />
          <input type="text" placeholder='Enter Phone Number' className='form-control' name='phone' value={values.phone} onChange={handleInput} />
        </div>
        <div className="form-group">
          <FaRegAddressCard />
          <input type="text" placeholder='Enter Address' className='form-control' name='address' value={values.address} onChange={handleInput} />
        </div>
        <button className='form-btn'>Add</button>
      </form>
    </div>
  );
};

export default AddContact;
