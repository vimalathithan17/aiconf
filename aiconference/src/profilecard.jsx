import React from 'react';

const ProfileCard = ({ name, designation, organization, photoUrl }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #004AAD, #00B4D8)',
      color: '#FFFFFF',
      borderRadius: '14px',
      padding: '27px',
      width: '306px',
      textAlign: 'center',
      marginBottom: '27px',
      boxShadow: '0 9px 18px rgba(0, 0, 0, 0.5)',
      border: '4.5px solid #BCC6CC',
      transition: 'transform 0.3s, box-shadow 0.3s',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.1)';
      e.currentTarget.style.boxShadow = '0 13.5px 27px rgba(0, 0, 0, 0.7)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 9px 18px rgba(0, 0, 0, 0.5)';
    }}
    >
      {photoUrl && (
        <div style={{
          width: '180px',
          height: '180px',
          borderRadius: '63%',
          background: 'linear-gradient(135deg, #E5E4E2, #BCC6CC)',
          padding: '4.5px',
          display: 'inline-block',
          marginBottom: '13.5px',
        }}>
          <img
            src={photoUrl}
            alt={name}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </div>
      )}
      <h2 style={{
        margin: '9px 0 4.5px 0',
        fontFamily: 'Montserrat, "Trebuchet MS", Helvetica, sans-serif',
        fontWeight: '800',
        letterSpacing: '0.5px',
        color: '#FFFFFF',
      }}>{name}</h2>
      <p style={{ 
        margin: '4.5px 0', 
        fontSize: '1em',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }}>{designation}</p>
      <p style={{ 
        margin: '10px 0 0 0', 
        fontSize: '0.9em',
        fontFamily: 'Segoe UI, Arial, sans-serif'
      }}>{organization}</p>
    </div>
  );
};

export default ProfileCard;
