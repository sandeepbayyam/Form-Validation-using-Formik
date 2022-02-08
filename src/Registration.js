import React from "react";
import "./style.css";
import {useFormik} from 'formik';

const RegForm =()=>{
  const formik = useFormik({
    initialValues:{
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      confirm:'',
      mobile:'',
      age:'',
      gender:'',
      languages:[]
    },
    validate:function(values){
      const errors={};


    if(!values.firstname){
      errors.firstname=' Firstname Required'
    }else {
      if ( values.firstname.length<3){
      errors.firstname='Must be 3 characters or more'
      }
      if (/[0-9]/.test(values.firstname)){
        errors.firstname='firstname should not be numbers'
        }
    }
    if(!values.lastname){
      errors.lastname='Latname Required'
    }else {
        if ( values.lastname.length<3){
      errors.lastname='Must be 3 characters or more'
         }
         if (/[0-9]/.test(values.lastname)){
          errors.lastname='lastname should not be numbers'
          }
        }
    if (!values.email) {
      errors.email = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Password Required';
    } else if (values.password.length>20) {
      errors.password = 'Password is too long';
    }else if (values.password.length<5) {
      errors.password = 'Password is too short';
    } 

    if (!values.confirm) {
      errors.confirm = 'Confirm Password';
    } else if (values.confirm!=values.password) {
      errors.confirm = 'Password does not matches';
    }
    if (!values.mobile) {
      errors.mobile = 'Mobile number Required';
    } else {
      if (values.mobile>10) {
      errors.mobile = 'Mobile no should contains 10 digits only';
         }
       if (/[A-Za-z]/.test(values.mobile)){
          errors.mobile='Invalid Mobile Number'
          }
    }
    if (!values.age) {
      errors.age = 'Age Required';
    } else if (values.age<18) {
      errors.age = 'Age should be above 18';
    }
    if(!values.gender){
      errors.gender='Please Select Gender'
    }
    if(!values.languages.length){
      errors.languages='Select Languages'
    }else{
      if(values.languages.length<2){
        errors.languages='Please select atleast 2 languages'
      }
    }

     return errors;
    },
   onSubmit:(values,y)=>{
     console.log(values)
     console.log(y)
   }
  })
  return (
    <div className='betterview'>
      <h3>Registration Form</h3>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstname">FirstName:</label>
      <input type="text"
       name='firstname'
       id ='firstname'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values={formik.values.firstname}
      />
        {formik.touched.firstname && formik.errors.firstname && (
          <h2 className='error-msg'>{formik.errors.firstname}</h2> )}
       <br/>
       <br/>
       <label htmlFor="lastname">LastName:</label>
      <input type="text"
       name='lastname'
       id ='lastname'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values={formik.values.lastname}
       /> 
            {formik.touched.lastname && formik.errors.lastname &&(
            <h2 className='error-msg'>{formik.errors.lastname}</h2>
       )}
       <br/>
       <br/>
      <label htmlFor="email">Email:</label>
      <input type="text"
       name='email'
       id ='email'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values={formik.values.email}
       />
           {formik.touched.email && formik.errors.email &&(
            <h2 className='error-msg'>{formik.errors.email}</h2> )}
       <br/>
       <br/>
      <label htmlFor="password">Password:</label>
      <input type="text"
       name='password'
       id ='password'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values={formik.values.password}
       /> 
            {formik.touched.password && formik.errors.password &&(
            <h2 className='error-msg'>{formik.errors.password}</h2> )}
          
      <br/>
      <br/>
      <label htmlFor="confirm"> ConfirmPassword:</label>
      <input type="text"
       name='confirm'
       id ='confirm'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values={formik.values.confirm}
       /> 
             {formik.touched.confirm && formik.errors.confirm &&(
            <h2 className='error-msg'>{formik.errors.confirm}</h2> )}
       <br/>
       <br/>
      <label htmlFor="mobile">Mobile:</label>
      <input type="text"
       name='mobile'
       id ='mobile'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values={formik.values.mobile}
       /> 
            {formik.touched.mobile && formik.errors.mobile &&(
            <h2 className='error-msg'>{formik.errors.mobile}</h2> )}
       <br/>
       <br/>
       <label htmlFor="age">Age:</label>
      <input type="text"
       name='age'
       id ='age'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values={formik.values.age}
       />
            {formik.touched.age && formik.errors.age &&(
            <h2 className='error-msg'>{formik.errors.age}</h2> )}
       <br/>
       <br/>
      <label htmlFor="gender">Gender:</label>
      <input type="radio"
       name='gender'
       id ='gender'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values='male'
       />Male
        <input type="radio"
       name='gender'
       id ='gender'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values='female'
       />Female
        <input type="radio"
       name='gender'
       id ='gender'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values='Others'
       />Others
          {formik.touched.gender && formik.errors.gender &&(
            <h2 className='error-msg'>{formik.errors.gender}</h2> )}
       <br/>
       <br/>
       <label htmlFor="languages">Languages:</label>
      <input type="checkbox"
       name='languages'
       id ='languages'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values='english'
       />English
      <input type="checkbox"
       name='languages'
       id ='languages'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values='telugu'
       />Telugu
      <input type="checkbox"
       name='languages'
       id ='languages'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values='hindi'
       />Hindi
        <input type="checkbox"
       name='languages'
       id ='languages'
       onChange={formik.handleChange}
       onBlur = {formik.handlBlur}
       values='Others'
       />Others 
            {formik.touched.languages && formik.errors.languages &&(
            <h2 className='error-msg'>{formik.errors.languages}</h2> )}
       <br/>
       <br/>
       <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default RegForm;