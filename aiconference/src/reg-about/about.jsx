<div style={{ padding: '2rem' }}></div>
import psgImage from './PSGTECH.jpg';
import psgAiImage from './AICons_logo.jpg'; 
import psgCareImage from './PSGCARE.jpg'; 

const About = () => {
  return (
    <div style={{ backgroundColor: '#023e8a', color: 'white', fontFamily: 'sans-serif' }}>
      <div style={{ padding: '2rem', lineHeight: '1.8', textAlign: 'left' }}>
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>About PSGCT</h2>
          <hr style={{ border: '1px solid white' }} />
          
          <div style={{ display: 'flex', gap: '2rem', flexDirection: window.innerWidth < 768 ? 'column' : 'row' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <img 
                src={psgImage}
                alt="PSG College main building" 
                style={{ 
                  width: '100%', 
                  height: '400px', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginTop: '20px'
                }} 
              />
            </div>
            <div style={{ flex: '1.5' }}>
              <p>
                PSG College of Technology established by PSG & Sons' Charities. It is a premier institution, imparting relevant Engineering education since 1951. College has a very strong Alumni network. Our Alumni occupy top positions in Government and Corporate Sector. The College offers 21 undergraduate programmes and 24 postgraduate programmes including Engineering and Technology, Computer Applications, Management Sciences, Basic and Applied Sciences.
              </p>
              <p>
                PSG CT is equipped with several state-of-the-art Centers of Excellence that include TIFAC Core in Product Design, Machine Tool Research Centre, Engineering Design Centre, Virtual Reality Centre, Tool and Die Centre for Nano-technology, Centre for Robotics, Centre for excellence in Artificial Intelligence and Software, Centre for Non-Linear Dynamics, Danfoss Centre of Excellence for Welding Engineering and Technology.
              </p>
              <p>
                Under the banner of PSG Industrial Institute, there are in-campus manufacturing units of machine tools, pumps, motors and off-campus foundry units. Furthermore, PSG CT has established very good network with industry, research institutes, alumni and entrepreneurs.
              </p>
            </div>
          </div>
          
          <p style={{ marginTop: '1.5rem' }}>
            PSG CT was ranked second under Colleges/Institutes (Govt. & Govt. Aided) (Technical) by ATAL Ranking of Institutions on Innovation Achievements (ARRIIA), Ministry of Education, Government of India in the year 2021 and the best industry linked institution on by AICTE-CII in the year 2012.
          </p>
          <p>
            During the occasion of India assuming the G20 Presidency on December 1, 2022, PSG CT was identified as one among the 75 educational institutions across India, with special responsibilities towards organizing special lectures, student exchange programmes, academic and cultural activities to spread awareness among the youth and the academic community on the G20 agenda.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>The AI Consortium @ PSG College of Technology</h2>
          <hr style={{ border: '1px solid white' }} />
          
          {/* Added the AI Consortium image and text in a flex layout */}
          <div style={{ display: 'flex', gap: '2rem', flexDirection: window.innerWidth < 768 ? 'column' : 'row' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <img 
                src={psgAiImage}
                alt="PSG AI Consortium" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginTop: '20px'
                }} 
              />
            </div>
            <div style={{ flex: '1.5' }}>
              <p>
                The growth of Artificial Intelligence must be guided by strong ethical principles and Responsible AI, ensuring that its development promotes fairness, transparency, and societal well-being.
              </p>
              <p>
                The AI Consortium at PSG College of Technology, inspired by the vision of EPIQAI – Empowering Ethics, Progress, Innovation & Quality in AI, serves as a dynamic platform for fostering AI research, innovation, and industry collaboration. AICTE has declared 2025 as the Year of AI, emphasizing its integration into higher education to prepare students for an AI-driven world.
              </p>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1rem' }}>Key Measures for AI Integration</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>AI Affirmation Pledge</li>
                <li>Campus-wide AI Awareness Campaigns</li>
                <li>AI First Curriculum</li>
                <li>Faculty Development Programs</li>
                <li>Industry Collaboration</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                AI excellence at PSG Tech began in 2019 with the launch of the Centre for Artificial Intelligence Research (AIR), laying the groundwork for impactful research and collaborations.
              </p>
            </div>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '1rem' }}>AI Wing and Specialized Centers</h3>
          <p>
            Located on the 3rd floor of E-Block and managed by the CSE Department, the AI Wing houses four specialized centers:
          </p>
          <ul style={{ paddingLeft: '1.5rem' }}>
            <li>Centre for Algorithms and Applied AI (3AI)</li>
            <li>Centre for AI Research (AIR)</li>
            <li>Centre for Smart Cyber-Physical Systems (SCPS)</li>
            <li>Centre for Cyber Security and Privacy (CSP)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>About PSG CARE</h2>
          <hr style={{ border: '1px solid white' }} />
          
          {/* Added the PSG CARE image and text in a flex layout */}
          <div style={{ display: 'flex', gap: '2rem', flexDirection: window.innerWidth < 768 ? 'column' : 'row' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <img 
                src={psgCareImage}
                alt="PSG CARE" 
                style={{ 
                  width: '100%', 
                  height: '350px', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  marginTop: '20px'
                }} 
              />
            </div>
            <div style={{ flex: '1.5' }}>
              <p>
                The PSG Center for Academic Research and Excellence was founded in October, 2015 by the PSG & Sons' Charities Trust with a mission to promote teaching excellence in all the colleges under the Trust. Toward this end, CARE will encourage the use of learner-centric pedagogical practices that facilitate effective learning and will foster dialogue and reflection on effective teaching through workshops, seminars.
              </p>
              <p>
                The center also focuses on creating and sustaining effective faculty student relationships and aims to pursue its mission.
              </p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Helping faculty members assess the effectiveness of their teaching through appropriate student and peer feedback mechanisms</li>
                <li>Encouraging research activities that enhance the quality of teaching at PSG</li>
                <li>Supporting dissemination of research findings about the teaching learning process</li>
              </ul>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Scope of the Conference</h2>
          <hr style={{ border: '1px solid white' }} />
          <p>
            Contemporary Intelligent System focuses on methods and algorithms for solving challenging problems and systems that behave intelligently in specialized domains such as medical diagnostics, decision making, security, gene expression analysis, speech and text recognition. The scope of this conference is to welcome original research papers contributing innovative ideas and out of box thinking in broad domains of Artificial Intelligence and allied areas in the perspective of Communication, IoT and Cyber Security. The conference aims to integrate the researchers from industry with academicians and scholars together to interchange their findings and results.
          </p>
        </section>
      </div>

      <div style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>IMPORTANT DATES</h2>

        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse', 
          borderRadius: '8px', 
          overflow: 'hidden',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)'
        }}>
          <tbody>
            <tr style={{ background: 'linear-gradient(to right, #001f54, #023e8a)', color: 'white' }}>
              <td style={{ padding: '1.2rem', border: '3px solid white', fontWeight: 'bold' }}>Abstract Submission Deadline</td>
              <td style={{ padding: '1.2rem', border: '3px solid white', textAlign: 'center', fontWeight: 'bold' }}>16-06-2025</td>
            </tr>
            <tr style={{ background: 'linear-gradient(to right, #001f54, #023e8a)', color: 'white' }}>
              <td style={{ padding: '1.2rem', border: '3px solid white', fontWeight: 'bold' }}>Full Paper Submission</td>
              <td style={{ padding: '1.2rem', border: '3px solid white', textAlign: 'center', fontWeight: 'bold' }}>14-07-2025</td>
            </tr>
            <tr style={{ background: 'linear-gradient(to right, #001f54, #023e8a)', color: 'white' }}>
              <td style={{ padding: '1.2rem', border: '3px solid white', fontWeight: 'bold' }}>Notification of Acceptance</td>
              <td style={{ padding: '1.2rem', border: '3px solid white', textAlign: 'center', fontWeight: 'bold' }}>1-10-2025</td>
            </tr>
            <tr style={{ background: 'linear-gradient(to right, #001f54, #023e8a)', color: 'white' }}>
              <td style={{ padding: '1.2rem', border: '3px solid white', fontWeight: 'bold' }}>Camera-Ready Paper Submission</td>
              <td style={{ padding: '1.2rem', border: '3px solid white', textAlign: 'center', fontWeight: 'bold' }}>15-10-2025</td>
            </tr>
            <tr style={{ background: 'linear-gradient(to right, #001f54, #023e8a)', color: 'white' }}>
              <td style={{ padding: '1.2rem', border: '3px solid white', fontWeight: 'bold' }}>Registration Deadline</td>
              <td style={{ padding: '1.2rem', border: '3px solid white', textAlign: 'center', fontWeight: 'bold' }}>31-10-2025</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default About;