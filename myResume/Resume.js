import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <div className="header">
        <h1>Padigapati Gurva Reddy</h1>
        <p>📞 +91-6300878984 | 📧 padigapatigurvareddy02112000@gmail.com</p>
        <p>🔗 <a href="https://www.linkedin.com/in/padigapati-gurva-reddy-46b85a241" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
      </div>

      <div className="section education">
        <h2>Education</h2>
        <h3>Bachelor of Technology, Computer Science & Engineering</h3>
        <p>Teegala Krishna Reddy Engineering College (2019-2023) | 6.95 CGPA</p>
        <h3>Intermediate (10+2), Mathematics, Physics, Chemistry</h3>
        <p>Narayana Junior College (2017-2019) | 95.2%</p>
        <h3>SSC (10th)</h3>
        <p>Sri Chaitanya Techno School (2016-2017) | 9.2 CGPA</p>
      </div>

      <div className="section skills">
        <h2>Skills</h2>
        <ul>
          <li>Java, SQL, C++, C, Python</li>
          <li>Data Structures & Algorithms (DSA)</li>
          <li>MS Word, Communication, Problem Solving</li>
        </ul>
      </div>

      <div className="section projects">
        <h2>Projects</h2>
        <h3>Smart ATM System Using Fingerprint Module</h3>
        <p>Developed using Python to allow card-less ATM transactions with fingerprint authentication.</p>
        <h3>Density-Based Smart Traffic Green Light Timer Allocation System</h3>
        <p>Implemented using Canny Edge Detection Algorithm to optimize traffic signal timing and reduce congestion.</p>
      </div>

      <div className="section publications">
        <h2>Publications</h2>
        <p>
          "Density-Based Smart Traffic Green Light Timer Allocation System Using Canny Edge Detection Algorithm" – Published in the International Journal of Techno-Engineering, 2023. 
          <a href="http://ijte.uk/archive/2023/DENSITY-BASED-SMART-TRAFFIC-GREEN-LIGHT-TIMER-ALLOCATION-SYSTEM-USING-CANNY-EDGE-DETECTION-ALGORITHM.pdf" target="_blank" rel="noopener noreferrer">Read here</a>
        </p>
      </div>

      <div className="section achievements">
        <h2>Achievements</h2>
        <ul>
          <li>Participated in College Cricket Team</li>
          <li>Organized College Orientation Program</li>
        </ul>
      </div>

      <div className="section interests">
        <h2>Interests</h2>
        <ul>
          <li>Playing Cricket</li>
          <li>Travelling</li>
          <li>Reading Books</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
