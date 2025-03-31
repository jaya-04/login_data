import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    DOB: "",
    Roll_no: "",
    college: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name"><strong>Name</strong></label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              autoComplete="off"
              className="form-control rounded-0"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              autoComplete="off"
              className="form-control rounded-0"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              className="form-control rounded-0"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="DOB"><strong>DOB</strong></label>
            <input
              type="text"
              id="dob"
              name="dob"
              placeholder="Enter dob"
              className="form-control rounded-0"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Roll no"><strong>Roll no</strong></label>
            <input
              type="string"
              id="Roll no"
              name="Roll no"
              placeholder="Enter Roll no"
              className="form-control rounded-0"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="college"><strong>college</strong></label>
            <input
              type="string"
              id="college"
              name="college"
              placeholder="Enter college"
              className="form-control rounded-0"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded">
            Register
          </button>
        </form>

        <p>Already have an account?</p>
        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Login
        </Link>
      </div>
    </div>
  );
}
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
  } catch (error) {
    console.error("Error:", error);
  }
};



export default Signup;