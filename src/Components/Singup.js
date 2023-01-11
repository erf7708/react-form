import React, { useEffect, useState } from 'react';
import { Validate } from '../Validation/Validate';
function Singup(props) {

    const[data,setData] = useState({
        name:"",
        email:"",
        password:"",
        confrimePassword:"",
        isCheck:false

    })

    const [error,setError] =useState({});

    useEffect(()=>{
        setError(Validate(data))
        console.log(error)
    },[data])

    const ChangeHandler = event =>{
        if(event.target.name === "isCheck"){
            setData({...data,[event.target.name] :event.target.checked })
        }else{
            setData({...data,[event.target.name] : event.target.value})
        }
       
    }

    return (
        <div style={{textAlign:"center"}} >
            <form>
                <h2>SingUp</h2>
                <div>
                    <lable>Name</lable>
                    <input type="text" name="name" value={data.name}     onChange={ChangeHandler}  />
                </div>
                <div>
                    <lable>Email</lable>
                    <input type="email" name="email" value={data.email}   onChange={ChangeHandler}  />
                </div>
                <div>
                    <lable>Password</lable>
                    <input type="password" name="password" value={data.password}   onChange={ChangeHandler}  />
                </div>
                <div>
                    <lable>ConfrimePassword</lable>
                    <input type="password" name="confrimePassword" value={data.confrimePassword}   onChange={ChangeHandler}   />
                </div>
                <div>
                    <lable>I agree with your site rules</lable>
                    <input type="checkbox" name="isCheck" value={data.isCheck}   onChange={ChangeHandler}  />
                </div>
                <div>
            
                    <a href='#'>Login</a>
                    <button type="submit">SingUp</button>
                </div>
            </form>
        </div>
    );
}

export default Singup;