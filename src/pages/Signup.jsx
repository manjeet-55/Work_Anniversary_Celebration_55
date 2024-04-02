import { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../utils/SupabaseClient";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  console.log(formData);

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
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      if (error) throw error;
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "1rem",
        }}
      >
        <input
          placeholder='Fullname'
          name='fullName'
          onChange={handleChange}
          style={{
            width: "15rem",
            height: "2.5rem",
            padding: "0.6rem",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            fontSize: "0.9rem",
          }}
        />

        <input
          placeholder='Email'
          name='email'
          onChange={handleChange}
          style={{
            width: "15rem",
            height: "2.5rem",
            padding: "0.6rem",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            fontSize: "0.9rem",
          }}
        />

        <input
          placeholder='Password'
          name='password'
          type='password'
          onChange={handleChange}
          style={{
            width: "15rem",
            height: "2.5rem",
            padding: "0.6rem",
            border: "1px solid #ccc",
            borderRadius: "0.5rem",
            fontSize: "0.9rem",
          }}
        />

        <button
          type='submit'
          style={{
            width: "15rem",
            height: "2.5rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontSize: "1.05rem",
          }}
        >
          Submit
        </button>

        <p style={{ color: "#333" }}>
          Already have an account?
          <Link
            to='/login'
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            LogIn
          </Link>
        </p>
      </form>
    </div>
  );
};
