import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { 
  FaAtom, FaIndustry, FaRocket, FaChevronDown
} from 'react-icons/fa';

const cardStyle = {
  width: '360px',
  height: '320px',
  margin: '15px',
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
  boxSizing: 'border-box',
  textAlign: 'center',
};

const TopicCard = ({ title, description, topics, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  const handleScroll = (e) => {
    setScrollPosition(e.target.scrollTop);
    setContentHeight(e.target.scrollHeight);
    setContainerHeight(e.target.clientHeight);
  };

  // Determine if there's more content to scroll down to
  const hasMoreContent = contentHeight > containerHeight && scrollPosition < contentHeight - containerHeight;

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
          padding: '20px', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          overflowY: 'hidden',
          position: 'relative'
        }} onClick={handleClick}>
          <h4 style={{ 
            fontFamily: 'Libre Baskerville, Georgia, serif', 
            fontSize: '1.1em', 
            fontWeight: 'bold', 
            marginTop: '0',
            marginBottom: '8px'
          }}>{description}</h4>
          <div 
            style={{ 
              overflowY: 'auto', 
              flex: 1,
              paddingRight: '10px',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
            onScroll={handleScroll}
          >
            <ul style={{ 
              listStyleType: 'disc', 
              paddingLeft: '20px', 
              fontSize: '0.8em', 
              textAlign: 'left', 
              margin: 0 
            }}>
              {topics.map((topic, index) => (
                <li key={index} style={{ marginBottom: '4px' }}>{topic}</li>
              ))}
            </ul>
          </div>
          
          {/* Only show down arrow when there's more content */}
          {hasMoreContent && (
            <div style={{
              position: 'absolute',
              bottom: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255, 255, 255, 0.8)',
              textAlign: 'center',
              fontSize: '1.2em',
              pointerEvents: 'none'
            }}>
              <FaChevronDown />
            </div>
          )}

          {/* Add CSS for scrollbar hiding */}
          <style>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      </ReactCardFlip>
    </div>
  );
};

const TopicsSection = () => {
  const topicsData = [
    {
      title: 'Track 1: AI Genesis',
      description: 'Origin, Evolution, and Development of AI Technologies',
      icon: <FaAtom />,
      topics: [
        'Foundations of Artificial Intelligence',
        'Evolution of Machine Learning Algorithms',
        'Evolution from Symbolic to Autonomous Reasoning',
        'Symbolic AI and Logic-Based Approaches',
        'Neural Networks: From Perceptrons to Deep Learning',
        'Historical Perspectives on AI Research',
        'Knowledge Representation & Reasoning',
        'Expert Systems and Rule-Based Models',
        'Reinforcement Learning Development',
        'Milestones in Natural Language Processing',
        'AI Hardware Evolution (CPUs → GPUs → TPUs)',
        'Programming Languages in AI (Lisp, Prolog, Python)',
        'Benchmarking and Dataset Evolution',
        'Explainability in Classical AI Systems'
      ]
    },
    {
      title: 'Track 2: AI Impact',
      description: 'Transforming Industries, Societies, and Workspaces',
      icon: <FaIndustry />,
      topics: [
        'AI in Healthcare: Diagnosis, Imaging, Drug Discovery',
        'AI Agents in Business Automation and Decision Support',
        'Deployment of Autonomous Agents in Real-Time Systems',
        'Role of AI Agents in Cybersecurity and Surveillance',
        'Smart Manufacturing and Industry 4.0',
        'Finance, Banking, and FinTech Applications',
        'AI in Education and Personalized Learning',
        'Smart Cities and Urban Intelligence',
        'Agriculture and Food Security through AI',
        'AI and Ethics in Society',
        'AI for Governance and Public Policy',
        'Human-AI Collaboration in the Workplace',
        'AI in Creative Industries: Art, Music, Media',
        'Fairness, Bias, and Responsible AI',
        'NLP Applications in Enterprises',
        'Accessibility and Inclusive AI Systems',
        'Societal and Behavioral Impacts of AI',
        'AI Regulations and Policy Frameworks'
      ]
    },
    {
      title: 'Track 3: AI Horizon',
      description: 'Future Trends, Innovations, and the Next Frontiers of AI',
      icon: <FaRocket />,
      topics: [
        'Artificial General Intelligence (AGI)',
        'Quantum Machine Learning',
        'Neuromorphic Computing',
        'Federated & Trustworthy AI',
        'Continual & Zero-shot Learning',
        'Edge AI & TinyML',
        'Agentic AI & Autonomous Systems',
        'Large Language Models (LLMs)',
        'Cognitive Architectures',
        'AI for Sustainability & Climate',
        'AI in XR, Metaverse & Digital Twins',
        'AI + Blockchain & Web3',
        'Multi-modal Models',
        'AI in CPS, IoT & 6G',
        'Generative & Creative AI'
      ]
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
      borderRadius: '20px',
      padding: '40px 30px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
      maxWidth: '1200px',
      margin: '40px auto',
    }}>
      <h2 style={{ 
        fontFamily: 'Libre Baskerville, Georgia, serif',
        fontSize: '2em', 
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '30px',
        color: 'white',
      }}>Conference Tracks & Topics</h2>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'nowrap',
        justifyContent: 'center', 
        gap: '20px',
        alignItems: 'stretch',
        maxWidth: '100%',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          paddingBottom: '5px',
        }}>
          {topicsData.map((data, index) => (
            <TopicCard 
              key={index} 
              title={data.title} 
              description={data.description}
              topics={data.topics} 
              icon={data.icon} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicsSection;