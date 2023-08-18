import React,{useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
export default function Login() {
  const [credentials, setCredentials] = useState({ email : "", password : ""})
  let navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault();
          const response  = await fetch("https://foodappserver.onrender.com/api/loginuser", {
            method : "POST",
            mode : "cors",
            headers : {
                'content-type' : "application/json"
            },
            body : JSON.stringify({ email : credentials.email, password : credentials.password})
        });
        const json = await response.json()
        console.log(json)
        if(!json.success)
        {
            alert("Enter Valid Credentials")
        }
        if(json.success)
        { // storing jwt token in user's local storage
          localStorage.setItem("userEmail", credentials.email)
            localStorage.setItem("authToken",json.authToken)
            navigate("/")
        }
    }
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name] : e.target.value})
    }
  return (
    <>
    <div className='container'>
    <form onSubmit = {handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name =  "email" value = {credentials.email} onChange ={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name = "password" value = {credentials.password}id="exampleInputPassword1" onChange = {onChange}/>
  </div>
   <button type="submit" className="btn btn-success">Submit</button>
   <Link to = "/createuser" className= "m-3 btn btn-danger">I'm a new user</Link>
</form>
</div>
    </>
  )
}
