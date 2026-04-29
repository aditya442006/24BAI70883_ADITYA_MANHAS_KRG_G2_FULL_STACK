import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// Student Registration Form Component
function StudentRegistration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    mobileNumber: '',
    gender: '',
    course: '',
    skills: [],
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter(skill => skill !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted! Check console for details.');
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      password: '',
      mobileNumber: '',
      gender: '',
      course: '',
      skills: [],
      address: ''
    });
  };

  return (
    <div style={styles.body}>
      <div style={styles.formContainer}>
        <h2 style={styles.h2}>Student Registration</h2>

        <form onSubmit={handleSubmit}>
          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleInputChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleInputChange}
              style={styles.inline}
            />
            <span> Male</span>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleInputChange}
              style={{ ...styles.inline, marginLeft: '20px' }}
            />
            <span> Female</span>
          </div>

          <label style={styles.label}>Course</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            style={styles.input}
          >
            <option>Select Course</option>
            <option>BCA</option>
            <option>B.Tech</option>
            <option>MCA</option>
          </select>

          <label style={styles.label}>Skills</label>
          <div>
            <input
              type="checkbox"
              value="HTML"
              checked={formData.skills.includes('HTML')}
              onChange={handleInputChange}
              style={styles.inline}
            />
            <span> HTML</span>
            <input
              type="checkbox"
              value="CSS"
              checked={formData.skills.includes('CSS')}
              onChange={handleInputChange}
              style={{ ...styles.inline, marginLeft: '20px' }}
            />
            <span> CSS</span>
            <input
              type="checkbox"
              value="JavaScript"
              checked={formData.skills.includes('JavaScript')}
              onChange={handleInputChange}
              style={{ ...styles.inline, marginLeft: '20px' }}
            />
            <span> JavaScript</span>
          </div>

          <label style={styles.label}>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            style={{ ...styles.input, minHeight: '80px', fontFamily: 'Arial' }}
          />

          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="submit" style={{ ...styles.btn, ...styles.submit }}>
              Submit
            </button>
            <button type="reset" onClick={handleReset} style={{ ...styles.btn, ...styles.reset }}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Home Page Component
function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>🏠 Home Page</h2>
      <p>Welcome to our application! Use the navigation above to explore different pages.</p>
    </div>
  );
}

// About Page Component
function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>ℹ️ About Page</h2>
      <p>This is a multi-page application using React Router.</p>
    </div>
  );
}

// Contact Page Component
function Contact() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>📞 Contact Page</h2>
      <p>Contact us at: info@example.com</p>
    </div>
  );
}

// Main App Component with Router
function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#ddd", marginBottom: "20px" }}>
        <Link to="/" style={{ margin: "10px", textDecoration: "none", color: "blue" }}>Home</Link>
        <Link to="/about" style={{ margin: "10px", textDecoration: "none", color: "blue" }}>About</Link>
        <Link to="/contact" style={{ margin: "10px", textDecoration: "none", color: "blue" }}>Contact</Link>
        <Link to="/registration" style={{ margin: "10px", textDecoration: "none", color: "blue" }}>Registration</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<StudentRegistration />} />
      </Routes>
    </Router>
  );
}

const styles = {
  body: {
    fontFamily: 'Arial',
    backgroundColor: '#f2f2f2',
    minHeight: '100vh',
    padding: '20px'
  },
  formContainer: {
    width: '400px',
    margin: '30px auto',
    padding: '20px',
    background: '#fff',
    border: '1px solid #ccc',
    borderRadius: '8px'
  },
  h2: {
    textAlign: 'center'
  },
  label: {
    display: 'block',
    marginTop: '10px',
    marginBottom: '5px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    border: '1px solid #aaa',
    borderRadius: '5px',
    boxSizing: 'border-box',
    fontFamily: 'Arial'
  },
  inline: {
    width: 'auto',
    marginRight: '10px'
  },
  btn: {
    marginTop: '15px',
    padding: '10px',
    flex: 1,
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'opacity 0.2s'
  },
  submit: {
    backgroundColor: 'green',
    color: 'white'
  },
  reset: {
    backgroundColor: 'red',
    color: 'white'
  }
};

export default App;
