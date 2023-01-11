import React, { useEffect, useState } from 'react';
import { Validate } from '../Validation/Validate';
import Styles from "../Components/Singup.module.css";
// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import notify from '../tostify/notify';
import { Link } from 'react-router-dom';
 
function Singup(props) {

    const[data,setData] = useState({
        name:"",
        email:"",
        password:"",
        confrimePassword:"",
        isCheck:false

    })

    const [error,setError] =useState({});
    const[touched,setTouched] =useState({})
    useEffect(()=>{
        setError(Validate(data,"singup"))
        
    },[data,touched])

    const ChangeHandler = event =>{
        if(event.target.name === "isCheck"){
            setData({...data,[event.target.name] :event.target.checked })
        }else{
            setData({...data,[event.target.name] : event.target.value})
        }
       
    }

    const isTouched =(event)=>{
        setTouched({...touched,[event.target.name] :true})
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        if(!Object.keys(error).length){
        //    notify("Success submit data","success")
            console.log(data)
           
            
        }else{

            // notify("Error submit data","error")

            setTouched({
                name:true,
                email:true,
                password:true,
                confrimePassword:true,
                isCheck:true
            })
        }
    }

    return (
        <div className={Styles.container}  >
            <form onSubmit={submitHandler} className={Styles.formContainer} >
                <h2 className={Styles.header}>SingUp</h2>
                <div className={Styles.formField}>
                    <lable>Name</lable>
                    <input 
                    className={(error.name && touched.name) ? Styles.uncompleted : Styles.formInput}
                    type="text" 
                    name="name" 
                    value={data.name}   
                      onChange={ChangeHandler}
                       onFocus={isTouched} />
                    {error.name && touched.name &&<span>{error.name}</span>}
                </div>
                <div  className={Styles.formField}>
                    <lable>Email</lable>
                    <input
                     className={(error.email && touched.email) ? Styles.uncompleted : Styles.formInput}
                     type="email"
                      name="email"
                       value={data.email}
                          onChange={ChangeHandler}
                          onFocus={isTouched}  />
                    {error.email && touched.email && <span>{error.email}</span>}
                </div>
                <div  className={Styles.formField}>
                    <lable>Password</lable>
                    <input 
                    className={(error.password && touched.password) ? Styles.uncompleted : Styles.formInput}
                    type="password"
                     name="password" 
                     value={data.password} 
                       onChange={ChangeHandler}
                         onFocus={isTouched}/>
                    {error.password && touched.password && <span>{error.password}</span>}
                </div>
                <div  className={Styles.formField}>
                    <lable>ConfrimePassword</lable>
                    <input 
                    className={(error.confrimePassword && touched.confrimePassword) ? Styles.uncompleted : Styles.formInput}
                    type="password"
                     name="confrimePassword" 
                     value={data.confrimePassword} 
                       onChange={ChangeHandler} 
                       onFocus={isTouched}  />
                    {error.confrimePassword && touched.confrimePassword  && <span>{error.confrimePassword}</span>}
                </div>
                <div  className={Styles.formField}>
                    <div className={Styles.checkBoxContainer}>

                    <lable>I agree with your site rules</lable>
                    <input type="checkbox" name="isCheck" value={data.isCheck}   onChange={ChangeHandler} onFocus={isTouched} />
                    
                    </div>
                    {error.isCheck  && touched.isCheck  &&  <span>{error.isCheck}</span>}
                </div>
                <div className={Styles.formButtons}>
            
                    <Link to="/login">Login</Link>
                    <button type="submit">SingUp</button>
                </div>
            </form>
            {/* <ToastContainer /> */}
        </div>
    );
}

export default Singup;