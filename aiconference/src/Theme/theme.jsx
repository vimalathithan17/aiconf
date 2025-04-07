import React from 'react';

const ThemeSection = () => {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #004AAD, #00B4D8)',
      color: '#FFFFFF',
      padding: '30px',
      borderRadius: '20px',
      border: '4.5px solid #BCC6CC',
      marginBottom: '10px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
      maxWidth: '850px',
      margin: '0 auto 20px auto'
    }}>
      <h2 style={{ 
        fontFamily: 'Libre Baskerville, Georgia, serif',
        fontSize: '2em', 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '0',
      }}>THEME</h2>
      <p style={{ 
        fontFamily: 'Libre Baskerville, Georgia, serif',
        fontSize: '1.2em', 
        fontWeight: 'bold', 
        marginTop: '10px',
        textAlign: 'center',
        marginBottom: '25px'
      }}>
        "EPIQ AI: Shaping a Responsible and Transformative Future"
      </p>
      <p style={{ 
        fontSize: '1.1em', 
        marginTop: '15px',
        lineHeight: '1.6',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'justify-center',
        textJustify: 'inter-word'
      }}>
        AI is revolutionizing industries, research, and society, but it must be ethical, progressive, innovative, and of high quality to maximize its potential responsibly. EPIQ AI 2024 brings together researchers, industry experts, policymakers, and innovators to shape a future where AI is trustworthy, impactful, and sustainable.
      </p>
    </section>
  );
};

export default ThemeSection;