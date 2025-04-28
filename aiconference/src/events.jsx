import React from 'react';

const eventData = [
  { title: 'Preconference Workshops', img: '/events/event1.png' },
  { title: 'Keynote Address', img: '/events/event2.png' },
  { title: 'Project Expo', img: '/events/event3.png' },
  { title: 'Paper Presentation', img: '/events/event4.png' }
];

const EventsSection = () => {
  return (
    <div style={{ 
      margin: '40px auto', 
      padding: '30px', 
      background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))', 
      borderRadius: '20px', 
      maxWidth: '1200px', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)' 
    }}>
      <h2 style={{ 
        color: 'white', 
        textAlign: 'center', 
        marginBottom: '30px', 
        fontSize: '32px', 
        fontWeight: 'bold' 
      }}>
        Events
      </h2>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        flexWrap: 'wrap', 
        gap: '30px' 
      }}>
        {eventData.map((event, index) => (
          <div 
            key={index}
            style={{
              width: '250px',
              background: '#0c3c6c', // updated dark blue color
              borderRadius: '16px',
              overflow: 'hidden',
              textAlign: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src={event.img} 
              alt={event.title} 
              style={{ width: '100%', height: '180px', objectFit: 'cover' }}
            />
            <div style={{ padding: '10px' }}>
              <h3 style={{ 
                color: 'white', 
                fontSize: '18px', 
                fontWeight: 'bold', 
                marginTop: '10px' 
              }}>
                {event.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsSection;
