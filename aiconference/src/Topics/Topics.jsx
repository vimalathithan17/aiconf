import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { 
  FaChevronDown, FaEthernet, FaRobot, FaIndustry, FaLaptopCode, FaBrain, 
  FaCar, FaBolt, FaChartLine, FaFilm, FaGraduationCap, FaLeaf 
} from 'react-icons/fa';

const cardStyle = {
  width: '300px',
  height: '320px',
  margin: '25px',
  cursor: 'pointer',
};

const frontBackSharedStyle = {
  background: 'linear-gradient(135deg, #004AAD, #00B4D8)',
  color: '#fff',
  padding: '30px',
  borderRadius: '20px',
  border: '4.5px solid #BCC6CC',
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box', // This ensures padding doesn't affect width/height
  textAlign: 'center',
};

const TopicCard = ({ title, topics, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

return (
    <div style={cardStyle}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{height: '100%'}}>
            {/* Front */}
            <div key="front" style={{ 
                ...frontBackSharedStyle, 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }} onClick={handleClick}>
                {icon && <div style={{ fontSize: '2.5em', marginBottom: '15px' }}>{icon}</div>}
                <h3 style={{ 
                    fontFamily: 'Libre Baskerville, Georgia, serif', 
                    fontSize: '1.5em', 
                    fontWeight: 'bold',
                    margin: '0 0 10px 0'
                }}>{title}</h3>
                <p style={{ fontSize: '0.9em', marginTop: '15px', opacity: 0.8 }}>Click to view topics</p>
            </div>

            {/* Back */}
            <div key="back" style={{ 
                ...frontBackSharedStyle, 
                padding: '25px', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                overflowY: 'hidden'
            }} onClick={handleClick}>
                <h4 style={{ 
                    fontFamily: 'Libre Baskerville, Georgia, serif', 
                    fontSize: '1.2em', 
                    fontWeight: 'bold', 
                    marginTop: '0',
                    marginBottom: '15px'
                }}>{title}</h4>
                <div style={{ overflowY: 'auto', flex: 1 }}>
                    <ul style={{ 
                        listStyleType: 'disc', 
                        paddingLeft: '20px', 
                        fontSize: '0.85em', 
                        textAlign: 'left', 
                        margin: 0 
                    }}>
                        {topics.map((topic, index) => (
                            <li key={index} style={{ marginBottom: '6px' }}>{topic}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </ReactCardFlip>
    </div>
);
};

const TopicsSection = () => {
  const topicsData = [
    {
      title: 'Ethics & Responsible AI',
      icon: <FaBrain />,
      topics: [
        'Explainable AI & Trustworthy AI',
        'AI Governance, Compliance & Regulations',
        'Bias Detection & Fairness in AI',
        'Privacy-Preserving AI & Federated Learning',
        'AI for Social Good & Humanitarian AI'
      ]
    },
    {
      title: 'AI Foundations & Emerging Technologies',
      icon: <FaEthernet />,
      topics: [
        'Advanced Machine Learning & Deep Learning Techniques',
        'Self-Supervised & Few-Shot Learning',
        'Reinforcement Learning & Decision-Making AI',
        'Generative AI & Foundation Models',
        'AI in Quantum Computing & High-Performance AI'
      ]
    },
    {
      title: 'AI for Industry 5.0 & Smart Systems',
      icon: <FaIndustry />,
      topics: [
        'AI in Manufacturing & Industry 4.0/5.0',
        'Edge AI & Distributed AI Systems',
        'AI-Driven Robotics & Automation',
        'AI in IoT & Smart Cities',
        'AI for Digital Twins & Augmented Reality'
      ]
    },
    {
      title: 'AI in Healthcare & Biomedical Engineering',
      icon: <FaRobot />,
      topics: [
        'AI in Medical Imaging & Diagnostics',
        'AI for Personalized Medicine & Drug Discovery',
        'AI-Powered Healthcare Wearables & Remote Monitoring',
        'AI in Mental Health & Assistive Technologies',
        'AI in Genomics & Computational Biology'
      ]
    },
    {
      title: 'AI in Civil, Structural & Geotechnical Engineering',
      icon: <FaLaptopCode />,
      topics: [
        'AI for Smart Cities & Sustainable Infrastructure',
        'AI in Structural Health Monitoring & Construction Management',
        'Geospatial AI for Disaster Prediction & Risk Management',
        'AI in Traffic Optimization & Urban Planning',
        'AI for Resilient & Sustainable Buildings'
      ]
    },
    {
      title: 'AI in Mechanical, Automotive & Aerospace Engineering',
      icon: <FaCar />,
      topics: [
        'AI in Autonomous Vehicles & Intelligent Transport Systems',
        'AI for Predictive Maintenance in Industrial Engineering',
        'AI in Aerodynamics & Computational Fluid Dynamics',
        'AI for Smart Materials & Nanotechnology',
        'AI in Aerospace Navigation & Space Exploration'
      ]
    },
    {
      title: 'AI in Electrical, Electronics & Communication Systems',
      icon: <FaBolt />,
      topics: [
        'AI in Power Systems, Smart Grids & Renewable Energy',
        'AI in 6G Wireless Communication & RF Signal Processing',
        'AI-Driven Semiconductor & Nanoelectronics',
        'AI in Cybersecurity & Secure Communication',
        'AI in Embedded Systems & Energy-Efficient AI'
      ]
    },
    {
      title: 'AI in Business, Finance & Economics',
      icon: <FaChartLine />,
      topics: [
        'AI in Algorithmic Trading & Risk Management',
        'AI for Supply Chain Optimization & Smart Logistics',
        'AI for Fraud Detection & Financial Compliance',
        'AI in Marketing & Customer Analytics',
        'AI in HR & Workforce Management'
      ]
    },
    {
      title: 'AI in Media, Entertainment & Creative Arts',
      icon: <FaFilm />,
      topics: [
        'AI-Generated Art, Music & Film Production',
        'AI in Game Development & Interactive Media',
        'AI in Journalism & Fake News Detection',
        'AI for Personalized Content Recommendation',
        'AI in Digital Copyright & Content Moderation'
      ]
    },
    {
      title: 'AI in Education & Cognitive Learning',
      icon: <FaGraduationCap />,
      topics: [
        'AI-Powered Personalized Learning & Adaptive Testing',
        'AI in Virtual Classrooms & Intelligent Tutoring Systems',
        'AI in Special Education & Accessibility',
        'AI for Automated Assessments & Learning Analytics',
        'AI for Language Translation & NLP in Education'
      ]
    },
    {
      title: 'AI for Sustainability & Global Challenges',
      icon: <FaLeaf />,
      topics: [
        'AI for Climate Change Modeling & Renewable Energy',
        'AI in Water Resource Management & Smart Agriculture',
        'AI in Disaster Management & Resilience Planning',
        'AI for Sustainable Smart Cities & Green Technologies',
        'AI for Circular Economy & Smart Waste Management'
      ]
    }
  ];

  return (
    <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ 
        fontFamily: 'Libre Baskerville, Georgia, serif',
        fontSize: '2em', 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '30px',
      }}>TOPICS</h2>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',
        justifyContent: 'center', 
        gap: '40px',
        alignItems: 'stretch' // Ensures all cards stretch to same height
      }}>
        {topicsData.map((data, index) => (
          <TopicCard key={index} title={data.title} topics={data.topics} icon={data.icon} />
        ))}
      </div>
    </section>
  );
};

export default TopicsSection;