import React from 'react';

const NormalCard = ({ name, designation, organization, iconUrl }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #004AAD, #00B4D8)',
      color: '#FFFFFF',
      borderRadius: '20px',
      padding: '25px',
      width: '260px',
      textAlign: 'center',
      margin: '15px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
      border: '4px solid #BCC6CC',
      transition: 'transform 0.3s, box-shadow 0.3s',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.7)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
    }}
    >
      {iconUrl && (
        <div style={{
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #E5E4E2, #BCC6CC)',
          padding: '5px',
          display: 'inline-block',
          marginBottom: '15px',
        }}>
          <img
            src={iconUrl}
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
      <h3 style={{
        margin: '15px 0 10px 0',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.2em',
        color: '#FFFFFF',
      }}>{name}</h3>
      <p style={{
        margin: '0',
        fontSize: '1em'
      }}>{designation}</p>
      {organization && (
        <p style={{
          margin: '10px 0 0 0',
          fontSize: '0.9em',
        }}>{organization}</p>
      )}
    </div>
  );
};

const NormalCardGrid = ({ cards }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      padding: '10px',
    }}>
      {cards.map((card, index) => (
        <NormalCard
          key={index}
          name={card.name}
          designation={card.designation}
          organization={card.organization}
          iconUrl={card.iconUrl}
        />
      ))}
    </div>
  );
};

export default NormalCardGrid;
