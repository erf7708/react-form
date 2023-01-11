 export const Validate =(data) =>{
   const errors ={}

    if(!data.name.trim()){
        errors.name="Name is required"
    }else{
        delete errors.name;
    }

    if(!data.email){
        errors.email ="Email is required"
    }else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)){
        errors.email="Email is invalid"
    }else{
        delete errors.email
    }

    if(!data.password){
        errors.password="Password is required"
    }else if(data.password.lenght < 6){
        errors.password="Password must more 8 carecter"
    }else{
        delete errors.password
    }

    if(!data.confrimePassword){
        errors.confrimePassword="Repeating the password is required"
    }else if(data.confrimePassword !== data.password){
        errors.confrimePassword="The password does not match the duplicate password"
    }else{
        delete errors.confrimePassword
    }

    if(data.isCheck){
        delete errors.isCheck;
    }else{
        errors.isCheck="isCheck is required"
    }

    return errors;
}