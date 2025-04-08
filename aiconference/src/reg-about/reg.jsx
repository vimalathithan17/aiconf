import React from 'react';

const Reg = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem', backgroundColor: '#023e8a', color: 'white', maxWidth: '1000px', margin: 'auto', lineHeight: '1.6' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Paper Submission</h2>
<ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
  <li style={{ textAlign: 'left' }}>
    <strong>Submission Guidelines:</strong> We invite authors to submit original research papers, case studies, and review articles relevant to the conference themes. Submissions must adhere to the following guidelines:
  </li>
  <li style={{ textAlign: 'left', fontWeight: 'bold', color: '#d1d5db' }}>
    Accepted full papers [12–15 pages]
  </li>
  <li style={{ textAlign: 'left', fontWeight: 'bold', color: '#d1d5db' }}>
    Accepted short papers [6–8 pages]
  </li>
  <li style={{ textAlign: 'left' }}>
    Selected papers are set to be published by Springer in LNICST, Lecture Notes of the Institute for Computer Sciences, Social Informatics and Telecommunications Engineering Series by Springer (indexed in EI-Compendex, Scopus, DBLP, SCImago, Google Scholar, etc).
  </li>
  <li style={{ textAlign: 'left' }}>
    To submit a paper in CMT (Conference Management Toolkit)
  </li>
</ul>


      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Registration Details</h2>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', listStyleType: 'disc' }}>
        <li style={{ textAlign: 'left' }}>All accepted papers must be registered</li>
        <li style={{ textAlign: 'left' }}>At least one author must attend the conference to present the paper</li>
        <li style={{ textAlign: 'left' }}>Registration includes conference kit, lunch, and access to all sessions</li>
      </ul>

      <p style={{ marginBottom: '1rem', fontWeight: '500' }}>The registration fee for the conference is as follows:</p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          borderRadius: '30px',
          overflow: 'hidden',
          marginBottom: '2rem',
          border: '3px solid white',
          backgroundColor: '#023e8a',
          color: 'white'
        }}>
          <thead>
            <tr style={{ background: 'linear-gradient(to right, #001f54, #023e8a)', color: 'white' }}>
              <th style={{ padding: '1rem', border: '3px solid white', textAlign: 'center' }}>CATEGORY</th>
              <th style={{ padding: '1rem', border: '3px solid white',  textAlign: 'center' }}>INDIAN DELEGATES</th>
              <th style={{ padding: '1rem', border: '3px solid white', textAlign: 'center' }}>FOREIGN DELEGATES</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: '#fff', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Academician, Research Scholar</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>Rs 10,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US$ 125</td>
            </tr>
            <tr style={{ backgroundColor: '#f0f0f0', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Industry person</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>Rs 12,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US$ 140</td>
            </tr>
            <tr style={{ backgroundColor: '#fff', color: '#000' }}>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Attendees</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>Rs 3,000</td>
              <td style={{ padding: '1rem', border: '3px solid white', fontWeight: 'bold' }}>US$ 75</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
        <strong>Note:</strong> Registration fee inclusive of 18% GST.
      </p>

      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Payment Type: Internet Banking</h2>
      <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          border: '3px solid white',
          borderRadius: '1rem',
          overflow: 'hidden',
          backgroundColor: '#ffffff',
          color: '#000'
        }}>
          <thead>
            <tr style={{ background: 'linear-gradient(to right, #001f54, #023e8a)', color: 'white' }}>
              <th style={{ padding: '1rem', textAlign: 'center', border: '3px solid white' }}>Field</th>
              <th style={{ padding: '1rem', textAlign: 'center', border: '3px solid white' }}>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Account Number</td>
              <td style={{ padding: '1rem', border: '3px solid white',fontWeight: 500 }}>1481267367</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Name of the Beneficiary</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>PSG Center for Nonformal and Continuing Education (PSG CNCE)</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Address</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Peelamedu, Coimbatore - 641004</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Name of the Bank</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Central Bank of India</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Account Type</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>Savings</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>IFSC Code</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>CBIN0280913</td>
            </tr>
            <tr>
              <td style={{ padding: '1rem', fontWeight: 'bold', backgroundColor: '#f0f8ff', border: '3px solid white' }}>Swift Code</td>
              <td style={{ padding: '1rem', border: '3px solid white' }}>CBININBBOSB</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a
          href="#"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#001f54',
            color: 'white',
            fontWeight: '500',
            borderRadius: '0.5rem',
            textDecoration: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          Click here for Registration
        </a>
      </div>
    </div>
  );
};

export default Reg;
