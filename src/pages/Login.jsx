import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../utils/SupabaseClient";

export const Login = () => {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);
      sessionStorage.setItem("token", JSON.stringify(data));
      navigate("/");

      //   alert('Check your email for verification link')
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Email' name='email' onChange={handleChange} />

        <input
          placeholder='Password'
          name='password'
          type='password'
          onChange={handleChange}
        />

        <button type='submit'>Submit</button>
      </form>
      Don't have an account? <Link to='/signup'>Sign Up</Link>
    </div>
  );
};
