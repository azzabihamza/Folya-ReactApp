import React from "react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "features/auth/authSlice";
import { useLoginMutation } from "features/auth/authApiSlice";

import { Card } from "../components/card";
import { Input } from "../components/forms/input";
import { Button } from "../components/button";

interface FormValues {
  user: string;
  password: string;
}

const Login: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    user: "",
    password: "",
  })
  const navigate = useNavigate();
  const userRef = useRef<HTMLInputElement>();
  const errRef = useRef<HTMLInputElement>();
  
  //message error toast
  const [errMsg, setErrMsg] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    // userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [formValues.user, formValues.password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submit");
    e.preventDefault();

    try {
      const userData = await login(formValues).unwrap();
      console.log(userData);
      dispatch(setCredentials({ ...userData, formValues }));
      setFormValues({ user: "", password: "" });
      navigate("/dashboard");
    } catch (err) {
      if (!err.response) {
        setErrMsg("Server is not responding");
      } else if (err.response.status === 400) {
        setErrMsg("Invalid username or password");
      } else if (err.response.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  };


  const handeleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, user: e.target.value });
  };

  const handelePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  

  return (
    <section className="login h-screen bg-gray-alt p-4">
      <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
      <Card className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-4 w-auto flex flex-col items-center">
         <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input 
            label="Email user" 
            placeholder="Email user" 
            id="user"
            type="text"
            value={formValues.user}  
            ref={userRef}
            required={true}
            autoComplete="off"
            onChange={handeleUserInputChange} />
          </div>
          <div className="mb-4">
            <Input 
            label="Password" 
            placeholder="Password" 
            type="password"
            value={formValues.password}
            required={true}
            onChange={handelePasswordInputChange} 
            />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit" className="bg-primary-light hover:bg-primary-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  disabled={false} >
              Sign In
            </Button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
         </form>
          
         
          

          {/* <h1>Employee Login</h1>

          <form onSubmit={handleSubmit}>
            <label htmlFor="emailuser">Email user:</label>
            <input
              type="text"
              id="user"
              ref={userRef}
              value={user}
              onChange={handeleUserInput}
              autoComplete="off"
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={handlePasswordInput}
              value={password}
              required
            />
            <button>Sign In</button>
          </form> */}
       
      </Card>
    </section>
  );
};

export default Login;
