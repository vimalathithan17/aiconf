import React from 'react';

const TrackBox = ({ title, description }) => {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #004AAD, #00B4D8)',
        color: '#FFFFFF',
        borderRadius: '14px',
        padding: '27px',
        width: '350px',
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
      <h3
        style={{
          margin: '9px 0 4.5px 0',
          fontFamily: 'Montserrat, "Trebuchet MS", Helvetica, sans-serif',
          fontWeight: '800',
          letterSpacing: '0.5px',
          color: '#FFFFFF',
          fontSize: '1.5em',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: '10px 0 0 0',
          fontSize: '1em',
          fontFamily: 'Segoe UI, Arial, sans-serif',
        }}
      >
        {description}
      </p>
    </div>
  );
};

const ConferenceTracks = () => {
  const tracks = [
    {
      title: 'AI Genesis',
      description:
        'Evolution & Foundations of AI, Neural Networks, Expert Systems, and Explainability.',
    },
    {
      title: 'AI Impact',
      description:
        'AI in Healthcare, Business, Security, Finance, Education, Smart Cities & Societal Transformation.',
    },
    {
      title: 'AI Horizon',
      description:
        'AGI, Quantum AI, Edge Computing, Large Language Models, AI for Sustainability & Future Trends.',
    },
  ];

return (
    <><h2 style={{
                fontFamily: 'Libre Baskerville, Georgia, serif',
                fontSize: '2em',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '30px',
                marginTop: '0',
        }}>Call for Papers</h2><section style={{
                marginBottom: '60px',
                background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                maxWidth: '1000px',
                margin: '0 auto',
        }}>
                        <p style={{
                                fontSize: '1.1em',
                                marginTop: '15px',
                                lineHeight: '1.6',
                                maxWidth: '900px',
                                margin: '0 auto 15px',
                                textAlign: 'justify-center',
                                textJustify: 'inter-word'
                        }}>
                                We invite researchers, academicians, industry professionals, and practitioners to submit original papers on the foundations, applications, and future directions of Artificial Intelligence. The conference welcomes research articles, reviews, and technical contributions across various fields. Submissions spanning the full spectrum of AI, particularly those that bridge disciplines or explore emerging areas, are especially encouraged.
                        </p>
                </section>
                </>
);
};

export default ConferenceTracks;