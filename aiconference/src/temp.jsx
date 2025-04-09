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
      
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>STEERING COMMITTEE</h2>
      <div style={{ 
        marginBottom: '60px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px', 
            fontWeight: '800' 
          }}>Dr K Prakasan</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '400',  
            fontSize: '1.2em'
          }}>Principal, PSG College of Technology</h4>
        </div>
        
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800' 
          }}>Dr R Rudramoorthy</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '400',  
            fontSize: '1.2em'
          }}>Director, PSG Centre for Academic Research and Excellence</h4>
        </div>
      </div>
      
      <h3 style={{ textAlign: 'center', marginBottom: '25px' }}>CHAIR</h3>
      <div style={{ 
        marginBottom: '60px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr G R Karpagam</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Professor, Dept. of Computer Science and Engineering<br />Director, PSG - AI Consortium</h4>
        </div>
        
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr B Vinoth Kumar</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '1px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Professor, Dept. of Information Technology<br />Infrastructure Technical Lead, PSG - AI Consortium</h4>
        </div>
      </div>

      <h3 style={{ textAlign: 'center', marginBottom: '25px' }}> CO - CHAIR</h3>
      <div style={{ 
        marginBottom: '60px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr Ferrante Nerim</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Professor of Machine Learning and Artificial Intelligence<br />University of Surrey , UK</h4>
        </div>
        </div>
           
        <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>TECHNICAL PROGRAMME COMMITTEE</h2>   
        <h3 style={{ textAlign: 'center', marginBottom: '25px' }}>CHAIR</h3>
      <div style={{ 
        marginBottom: '60px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr D Indumathi</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Associate Professor, Dept. of Computer Science and Engineering</h4>
        </div>
        
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr R Rekha</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '1px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Associate Professor, Dept. of Information Technology</h4>
        </div>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr K Sathiyapriya</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Associate Professor, Dept. of Computer Science and Engineering</h4>
        </div>
        
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr R Senthil Prabha</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '1px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Associate Professor, Dept. of Information Technology</h4>
        </div>
     
      <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr B Sangeetha</h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '1px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Assistant Professor(Sl.Gr), Dept. of Information Technology</h4>
        </div>
        </div>
  
        <h3 style={{ textAlign: 'center', marginBottom: '25px' }}> CO - CHAIR</h3>
      <div style={{ 
        marginBottom: '60px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Dr Pablo Moscato </h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Professor of Data Science<br />
          School of Information and Physical Sciences (Data Science and Statistics)<br />
          University of Newcastle, Australia</h4>
        </div>
        </div>

        <h2 style={{ textAlign: 'center', marginBottom: '25px' }}> SCIENTIFIC COMMITTEE CHAIR</h2>
      <div style={{ 
        marginBottom: '60px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '10px',
            fontWeight: '800'  // Increased boldness for name
          }}>Mr Srikanth Subramanian </h2>
          <h4 style={{ 
            textAlign: 'center', 
            marginBottom: '2px',  // Reduced from 5px to 2px
            fontWeight: '400',  // Reduced boldness for designation
            fontSize: '1.2em'
          }}>Vice President of Engineering @<br />
Salesforce , Bengaluru</h4>
        </div>
        </div>

        <h2 style={{ textAlign: 'center', marginBottom: '25px' }}> ADVISORY COMMITTEE </h2>
        <div style={{ 
        marginBottom: '60px', 
        background: 'linear-gradient(135deg, rgba(0, 74, 173, 0.4), rgba(0, 180, 216, 0.4))',
        borderRadius: '20px',
        padding: '30px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
      <h2 style={{ textAlign: 'center', marginBottom: '25px' }}> NATIONAL ADVISORY COMMITTEE </h2>
      
      <div style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          color: 'white',
          textAlign: 'left'
        }}>
          <tbody>
          <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Albert Sunny
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 Indian Institute of Science Bangalore, Karnataka
              </td>
            </tr>
          <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Badri Narayan Subudhi
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Indian Institute of Technology Jammu , Jammu & Kashmir
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Sonali Agarwal
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 Indian Institute of Information Technology Allahabad
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Siva Kumar K
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  Indian Institute of Technology Hyderabad 
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Vijayakumar Krishnasamy
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 Indian Institute of Information Technology Design and Manufacturing Kancheepuram
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr R Dhanalakshmi
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Indian Institute of Information Technology, Trichy
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Shelly Sachdeva
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 National Institute of Technology, Delhi
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Fazal A Talukdar
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 National Institute of Technology Silchar, Assam
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Santhi Thilagam
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 National Institute of Technology  Karnataka ,Surathkal
              </td>
            </tr>
            
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Surendran B
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 National Institute of Technology Puducherry, Karaikal
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr S Nickolas
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 National Institute of Technology Trichy 
              </td>
            </tr>
            
            
            
            
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Sudha Ramalingam
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 PSG Institute of Medical Sciences and Research
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr V Govindasamy
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 Pondicherry Engineering College, Puducherry
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Amit Konar
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 Jadavpur University, Kolkata
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Mr Siddarth Narayanan
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 Office of Principal Scientific Adviser, Government of India
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Ms Sudha Velusamy
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Samsung R&D Institute, Bangalore
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr C S Saravana Kumar
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 Bosch Global Software Technologies Private Limited, Coimbatore
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Mr Mukund Bhoovaraghavan
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 Microsoft, Hyderabad
              </td>
            </tr>
            
            
            
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Mr Thiyagarajan Subramani
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                 Continental Technical Center, India
              </td>
            </tr>
            
            
          </tbody>
        </table>
      </div>

      <h2 style={{ textAlign: 'center', margin: '40px 0 25px' }}> INTERNATIONAL ADVISORY COMMITTEE </h2>
      
      <div style={{
        width: '100%',
        maxWidth: '800px',
        margin: '0 auto',
        border: '2px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '10px',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.2)'
      }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          color: 'white',
          textAlign: 'left'
        }}>
          <tbody>
            
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Chunting Chris Mi
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                San Diego State University, USA
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Dong-Soo Kwon
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                KAIST, South Korea
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Vikram Kapila
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                NYU Tandon School of Engineering, USA
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Xiao-Zhi Gao
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                University of Eastern Finland, Finland
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Yuval Shavitt
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Tel Aviv University, Israel
              </td>
            </tr>
            
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Richard Voyles
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Purdue University, USA
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Jai Govind Singh
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Asian Institute of Technology, Bangkok
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Vigna Kumaran Ramachandaramurthy
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Universiti Tenaga Nasional, Malaysia
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Ahmed Zobaa
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Brunel University, London, UK
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Tan Wei Hong
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Universiti Malaysia Perlis, Malaysia
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr Barath Narayanan
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                University of Dayton Research Institute, USA
              </td>
            </tr>
            
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Dr M Murugappan
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                Kuwait College of Science and Technology , Kuwait
              </td>
            </tr>
            
            <tr>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                • Ms Abinaya Nagarajan
              </td>
              <td style={{ padding: '12px 20px', borderBottom: '1px solid rgba(255, 255, 255, 0.2)' }}>
                JP Morgan Chase & Co., Singapore
              </td>
            </tr>
            <tr>
              <td style={{ padding: '12px 20px' }}>
                • Dr P N Suganthan
              </td>
              <td style={{ padding: '12px 20px' }}>
                 Qatar University , Qatar
              </td>
            </tr>
            
            
            
          </tbody>
        </table>
      </div>

      {/* End of committee tables */}
      <div style={{ height: '60px' }}></div>

    </div></div>
  );
};

export default TempComponent;

