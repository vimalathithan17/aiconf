import React, { useEffect } from 'react';
import ProfileCard from './profilecard'; 
import NormalCardGrid from './normalcard';
import Dr_GRK from './assets/Dr_GRK.jpg';
import VinothImage from './assets/Vinoth Kumar.png';

const TempComponent = () => {
  // Set background color when component mounts
  useEffect(() => {
    document.body.style.backgroundColor = '#1E3A8A';
    document.body.style.margin = '0';
    
    // Cleanup function to reset styles when component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  
  return (
    <div style={{
      padding: '70px 40px 40px 40px', // Extra top padding for the back button
      color: 'white',
      fontFamily: 'Georgia, serif',
      maxWidth: '1280px',
      margin: '0 auto'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>ORGANIZING COMMITTEE</h1>
      
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>STEERING COMMITTE</h2>
      <div style={{ 
        marginBottom: '60px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '100px'
      }}>
        
        
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <p>This page is currently under development. More details about committee members will be available soon.</p>
      </div>
    </div>
  );
};

export default TempComponent;

