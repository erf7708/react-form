import React, { useEffect, useState } from 'react';
import { Validate } from '../Validation/Validate';
import Styles from  "../Components/Login.module.css"
import { Link } from 'react-router-dom';
function Login(props) {
    const[data,setData] = useState({
        email:"",
        password:""
    })

    const ChangeHandler =(event) =>{
        setData({...data,[event.target.name] : event.target.value})
    }

    const [error,setError] =useState({});
    const[touch,setTouch] = useState({});

    useEffect(()=>{
        setError(Validate(data,"login"))
    },[data,touch])

    const focusHandler =(event)=>{
        setTouch({...touch,[event.target.name]:true})
    }

    const subHandler = (event) =>{
        event.preventDefault();

        if(!Object.keys(error).length){
            console.log(data)
        }else{
            setTouch({
                email:true,
                password:true
            })
        }
    }

    return (
        <div className={Styles.container}>
            <form onSubmit={subHandler} className={Styles.formContainer} >
                <h2 className={Styles.header}>Login</h2>
                <div className={Styles.formField}>
                    <lable>Email</lable>
                    <input
                     className={(error.email && touch.email) ? Styles.uncompleted : Styles.formInput}
                     type="text"
                     name='email' 
                     value={data.email}
                      onChange={ChangeHandler} 
                        onFocus={focusHandler} />
                    {error.email && touch.email &&<span>{error.email}</span>}
                </div>
                <div className={Styles.formField}>
                    <lable>Password</lable>
                    <input 
                    className={(error.password && touch.password) ? Styles.uncompleted : Styles.formInput}
                    type="password" 
                    name='password' 
                    value={data.password}
                     onChange={ChangeHandler}
                     onFocus={focusHandler} />
                    {error.password && touch.password &&<span>{error.password}</span>}
                </div>
                <div className={Styles.formButtons}>
                    <Link to="/singup">SingUp</Link>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;