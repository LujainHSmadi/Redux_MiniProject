import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { login } from '../../features/users/userSlice';

const Login =()=>{
    
    let history = useHistory();
    const isLogged = useSelector((state) => state.users.isLogged);
    // console.log(user);
    const [userData , setUserData] =useState({email:"" , password:""}) 
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        e.preventDefault()
        setUserData({
          ...userData,
          [e.target.name]: e.target.value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
    //    console.log(userData)
        dispatch(login(userData));
    }
    useEffect(()=>{
        isLogged ? history.push("/productList"): history.push("/login");
    },[isLogged])
    

    return(
      

<section className="my-5">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://pyt-blogs.imgix.net/2020/09/pexels-marvin-ozz-2474661-scaled.jpg?auto=format&fit=scale&h=683&ixlib=php-3.3.0&w=1024&wpsize=large.png"
          className="img-fluid" alt="Sample image"/>
      </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <h1 className="form-label">Login</h1>
      <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <br/>
            <label className="form-label" for="form3Example3">Email address</label>
            <input type="email" name="email"  onChange={handleChange} id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          </div>

         
          <div className="form-outline mb-3">
            <label className="form-label" for="form3Example4">Password</label>
            <input type="password" name="password" 
                onChange={handleChange} id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
          </div>

          <div className="d-flex justify-content-between align-items-center">
           
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-dark btn-lg"
              style={{ paddingLeft: '2.5rem; padding-right: 2.5rem' }}>Login</button>
            
          </div>

        </form>
      </div>
    </div>
  </div>
</section>






    )
}

export default Login;