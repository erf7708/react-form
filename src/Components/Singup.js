import React, { useEffect, useState } from 'react';
import { Validate } from '../Validation/Validate';

// import { ToastContainer} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import notify from '../tostify/notify';
 
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
        <div style={{textAlign:"center"}} >
            <form onSubmit={submitHandler} >
                <h2>SingUp</h2>
                <div>
                    <lable>Name</lable>
                    <input type="text" name="name" value={data.name}     onChange={ChangeHandler} onFocus={isTouched} />
                    {error.name && touched.name &&<span>{error.name}</span>}
                </div>
                <div>
                    <lable>Email</lable>
                    <input type="email" name="email" value={data.email}   onChange={ChangeHandler}onFocus={isTouched}  />
                    {error.email && touched.email && <span>{error.email}</span>}
                </div>
                <div>
                    <lable>Password</lable>
                    <input type="password" name="password" value={data.password}   onChange={ChangeHandler}  onFocus={isTouched}/>
                    {error.password && touched.password && <span>{error.password}</span>}
                </div>
                <div>
                    <lable>ConfrimePassword</lable>
                    <input type="password" name="confrimePassword" value={data.confrimePassword}   onChange={ChangeHandler} onFocus={isTouched}  />
                    {error.confrimePassword && touched.confrimePassword  && <span>{error.confrimePassword}</span>}
                </div>
                <div>
                    <lable>I agree with your site rules</lable>
                    <input type="checkbox" name="isCheck" value={data.isCheck}   onChange={ChangeHandler} onFocus={isTouched} />
                    {error.isCheck  && touched.isCheck  &&  <span>{error.isCheck}</span>}
                </div>
                <div>
            
                    <a href='#'>Login</a>
                    <button type="submit">SingUp</button>
                </div>
            </form>
            {/* <ToastContainer /> */}
        </div>
    );
}

export default Singup;