import React, { useEffect, useState } from 'react';
import ProfileCard from './profilecard'; 
import NormalCardGrid from './normalcard';

import TrusteeImage from './assets/trustee.jpg';
import PrakasanImage from './assets/Prakasan.png';
import GRKImage from './assets/GRK.jpg';
import VinothImage from './assets/Vinoth Kumar.png';
import IndhumathiImage from './assets/Indumathi.png';
import RekhaImage from './assets/Rekha.png';
import SathiyapriyaImage from './assets/Sathiyapriya.png';
import SenthilPrabhaImage from './assets/SenthilPrabha.png';
import VijayanImage from './assets/vijayan K.jpg';
import FerranteImage from './assets/ferrante.jpg';
import BhamaImage from './assets/Bhama.png';
import PabloImage from './assets/pablo.jpg';
import GopikaRaniImage from './assets/Gopikarani.png';
import ThirumahalImage from './assets/Thirumahal.png';
import ShanmugamImage from './assets/Shanmugam.png';
import SivaranjiniImage from './assets/Sivaranjani.png';
import MuruganImage from './assets/Murugan.png';
import NirmalaImage from './assets/Nirmala.png';
import ACRImage from './assets/ACR.jpg';
import SangeethaImage from './assets/Sangeetha.png';
import PrakashImage from './assets/Prakash.jpg';
import MPrakashImage from './assets/M.Prakash.png';
import SureshImage from './assets/Suresh.png';
import VijayalakshmiImage from './assets/Vijiyalakashmi.png';
import SivarajImage from './assets/Sivaraj.png';
import MaruthamaniImage from './assets/Maruthamani.png';
import ArulJothiImage from './assets/Aruljothi.png';
import NatarajanImage from './assets/Natarajan.png';
import JayaprasathImage from './assets/Jayaprasanth.png';
import PrabhavathiImage from './assets/Prabavathi.png';
import SureshkumarImage from './assets/Sureshkumar.png';
import BrindhaImage from './assets/Brindha.png';
import KarthikVijaykumarImage from './assets/Karthik Vijayakumar.png';
import DharaniImage from './assets/Dharani-DNVAoUd9.jpg';
import saisundara from './assets/Sai Sundar.png';
import praveeen from './assets/Praveen.png';
import dhanalakshmi from './assets/Dhanalakshmi.png';
import surjith from './assets/Surjit.png';
import abirami from './assets/Abirami.png';
import kanchana from './assets/kanchana.jpg';
import sridevi from './assets/Sridevi.png';
import kalpana from './assets/Kalpana.png';
import niresh from './assets/NIresh.png';
import veerakumar from './assets/Veerakumar.jpg';
import thillairajan from './assets/Thillairajan.png';
import rajesh from './assets/Rajesh.png';
import kathirvel from './assets/Kathirvel.png';
import anisha from './assets/ANisha.png';

function Comitte() {
  useEffect(() => {
    document.body.style.backgroundColor = '#1E3A8A'; 
    document.body.style.margin = '0';

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  const sampleNormalCards = [
    { 
      name: 'Dr D Indhumathi', 
      designation: "Associate Professor , CSE", 
      organization: 'PSG College of Technology', 
      iconUrl: IndhumathiImage 
    },
    { 
      name: 'Dr R Rekha', 
      designation: 'Associate Professor , IT', 
      organization: 'PSG College of Technology', 
      iconUrl: RekhaImage 
    },
    { 
      name: 'Dr K Sathiyapriya', 
      designation: 'Associate Professor , CSE', 
      organization: 'PSG College of Technology', 
      iconUrl: SathiyapriyaImage 
    },
    { 
      name: 'Dr R Senthil Prabha', 
      designation: 'Associate Professor , IT', 
      organization: 'PSG College of Technology', 
      iconUrl: SenthilPrabhaImage 
    },
  ];

  const Track1 = [
    {
        name: 'Dr D Indhumathi',
        designation: 'Associate Professor , CSE',   
        organization: 'PSG College of Technology', 
        iconUrl: IndhumathiImage 
    },
    {
        name: 'Dr R Rekha', 
      designation: 'Associate Professor , IT', 
      organization: 'PSG College of Technology', 
      iconUrl: RekhaImage 
    }
  ];
  const Track2 = [
    {
        name: 'Dr K Sathiyapriya',
        designation: 'Associate Professor , CSE',   
        organization: 'PSG College of Technology', 
        iconUrl: SathiyapriyaImage 
    },
    {
      name: 'Dr S Bhama', 
      designation: 'Assistant Professor (Sl.G) , CA', 
      organization: 'PSG College of Technology', 
      iconUrl: BhamaImage 
    }
  ];
  const Track3 = [
    {
        name: 'Dr R Senthil Prabha',
        designation: 'Associate Professor , IT',  
        organization: 'PSG College of Technology', 
        iconUrl: SenthilPrabhaImage
    },
    {
      name: 'Dr N Gopika Rani', 
      designation: 'Assistant Professor (Sl.G) , CSE', 
      organization: 'PSG College of Technology', 
      iconUrl: GopikaRaniImage 
    }
  ];
  const Finance = [
    {
      name: 'Ms Thirumahal',
      designation: 'Assistant Professor(Sl.G) , CSE',
      organization: 'PSG College of Technology',
      iconUrl: ThirumahalImage,
    },
    {
      name: 'Dr C Shanmugam',
      designation: 'Assistant Professor(Sl.G) , MECH',
      organization: 'PSG College of Technology',
      iconUrl: ShanmugamImage,
    },
    {
      name: 'Dr S Sivaranjini',
      designation: 'Assistant Professor(Sr.G) , CSE',
      organization: 'PSG College of Technology',
      iconUrl: SivaranjiniImage,
    },
  ];
  const Tutorial = [
    {
      name: 'Dr R Murugan',
      designation: 'Professor (CAS) , TEXT',
      organization: 'PSG College of Technology',
      iconUrl: MuruganImage,
    },
    {
      name: 'Dr Nirmala Varghese',
      designation: 'Associate Professor , AFD',
      organization: 'PSG College of Technology',
      iconUrl: NirmalaImage,
    },
    {
      name: 'Mr A C Ramesh',
      designation: 'Assistant Professor(Sl.G) , CSE',
      organization: 'PSG College of Technology',
      iconUrl: ACRImage,
    },
  ];
  const Publication = [
    {
      name: 'Dr B Sangeetha',
      designation: 'Assistant Professor(Sl.G) , IT',
      organization: 'PSG College of Technology',
      iconUrl: SangeethaImage,
    },
    {
      name: 'Mr J Prakash',
      designation: 'Assistant Professor(Sr.G) , CSE',
      organization: 'PSG College of Technology',
      iconUrl: PrakashImage,
    },
    {
      name: 'Mr M Prakash',
      designation: 'Librarian',
      organization: 'Dr GRD Memorial Library , PSG TECH',
      iconUrl: MPrakashImage,
    },
  ];
  const poster = [
    {
      name: 'Dr M Suresh',
      designation: 'Associate Professor , RAE',
      organization: 'PSG College of Technology',
      iconUrl: SureshImage,
    },
    {
      name: 'Dr S Vijayalakshmi',
      designation: 'Assistant Professor(Sl.G) , CSE',
      organization: 'PSG College of Technology',
      iconUrl: VijayalakshmiImage,
    },
    {
      name: 'Dr D Sivaraj',
      designation: 'Assistant Professor(Sl.G) , ECE',
      organization: 'PSG College of Technology',
      iconUrl: SivarajImage,
    },
    {
      name: 'Dr D Maruthamani',
      designation: 'Assistant Professor(Sl.G) , CHEM',
      organization: 'PSG College of Technology',
      iconUrl: MaruthamaniImage,
    },
    {
      name: 'Dr S Arul Jothi',
      designation: 'Assistant Professor(Sr.G) , CSE',
      organization: 'PSG College of Technology',
      iconUrl: ArulJothiImage,
    },
  ];
  const govn = [
    {
      name: 'Dr A Natarajan',
      designation: 'Professor(CAS) , EEE',
      organization: 'PSG College of Technology',
      iconUrl: NatarajanImage,
    },
    {
      name: 'Dr D Jayaprasath',
      designation: 'Associate Professor , ICE',
      organization: 'PSG College of Technology',
      iconUrl: JayaprasathImage,
    },
    {
      name: 'Dr J Prabhavathi',
      designation: 'Assistant Professor, ENG',
      organization: 'PSG College of Technology',
      iconUrl: PrabhavathiImage,
    },
  ];
  const industry = [
    {
      name: 'Dr K Suresh Kumar',
      designation: (
        <>
          Associate Professor & HOD , HUM <br /> Director - PSG STEP
        </>
      ),
      organization: 'PSG College of Technology',
      iconUrl: SureshkumarImage,
    },
    {
      name: 'Dr D Brindha',
      designation: 'Assistant Professor(Sl.G) , BME',
      organization: 'PSG College of Technology',
      iconUrl: BrindhaImage,
    },
    {
      name: 'Mr G Karthik Vijaykumar',
      designation: 'Assistant Professor(Sr.G), BIOTECH',
      organization: 'PSG College of Technology',
      iconUrl: KarthikVijaykumarImage,
    },
    {
      name: 'Ms A Dharani',
      designation: 'Assistant Professor, CSE',
      organization: 'PSG College of Technology',
      iconUrl: DharaniImage,
    },
  ];
  const publicity = [
    {
      name: 'Dr G Sai Sundara Krishnan',
      designation: 'Professor , AMCS',
      organization: 'PSG College of Technology',
      iconUrl: saisundara,
    },
    {
      name: 'Dr S Praveen Kumar',
      designation: 'Assistant Professor, CIVIL',
      organization: 'PSG College of Technology',
      iconUrl: praveeen,
    },
  ];
  const sponsor = [
    {
      name: 'Dr D Dhanalakshmi',
      designation: 'Assistant Professor(Sl.G) , APS',
      organization: 'PSG College of Technology',
      iconUrl: dhanalakshmi,
    },
    {
      name: 'Dr R Surjith',
      designation: 'Assistant Professor(Sl.G), FT',
      organization: 'PSG College of Technology',
      iconUrl: surjith,
    },
    {
      name: 'Ms S K Abirami',
      designation: 'Assistant Professor, CSE',
      organization: 'PSG College of Technology',
      iconUrl: abirami,
    },
  ];
const international=[
    {
        name: 'Dr J Kanchana',
        designation: (
            <>
              Professor , Mechanical Engineering <br /> Director 
            </>
          ),
        organization: 'PSG Institute of Advanced Studies',
        iconUrl: kanchana,
      },
      {
        name: 'Dr B Sridevi',
        designation: 'Professor , MATH',
        organization: 'PSG College of Technology',
        iconUrl: sridevi,
      },
      {
        name: 'Dr M Kalpana',
        designation: 'Associate Professor , HUM',
        organization: 'PSG College of Technology',
        iconUrl: kalpana,
      },
      {
        name: 'Dr J Niresh',
        designation: 'Assistant Professor(Sr.G) , AUTO',
        organization: 'PSG College of Technology',
        iconUrl: niresh,
      },
      {
        name: 'Mr Veera Kumar',
        designation: 'Assistant Professor , CSE',
        organization: 'PSG College of Technology',
        iconUrl: veerakumar,
      },
];
const panelist = [
    {
      name: 'Dr K Thillairajan',
      designation: 'Associate Professor(CAS) , MET',
      organization: 'PSG College of Technology',
      iconUrl: thillairajan,
    },
    {
      name: 'Dr R Rajesh',
      designation: 'Assistant Professor(Sl.G), PROD',
      organization: 'PSG College of Technology',
      iconUrl: rajesh,
    },
    {
      name: 'Dr P Kathirvel',
      designation: 'Assistant Professor, PHY',
      organization: 'PSG College of Technology',
      iconUrl: kathirvel,
    },
    {
      name: 'Ms C D Anisha',
      designation: 'Assistant Professor, CSE',
      organization: 'PSG College of Technology',
      iconUrl: anisha,
    },
  ];

  const advisoryProfiles = [
    {
      name: 'Dr A Natarajan',
      designation: 'Professor(CAS) , EEE',
      organization: 'PSG College of Technology',
      photoUrl: NatarajanImage,
    },
    {
      name: 'Dr D Jayaprasath',
      designation: 'Associate Professor , ICE',
      organization: 'PSG College of Technology',
      photoUrl: JayaprasathImage,
    },
    {
      name: 'Dr J Prabhavathi',
      designation: 'Assistant Professor, ENG',
      organization: 'PSG College of Technology',
      photoUrl: PrabhavathiImage,
    },
    {
      name: 'Dr K Suresh Kumar',
      designation: (
        <>
          Associate Professor & HOD , HUM <br /> Director - PSG STEP
        </>
      ),
      organization: 'PSG College of Technology',
      photoUrl: SureshkumarImage,
    },
    {
      name: 'Dr D Brindha',
      designation: 'Assistant Professor(Sl.G) , BME',
      organization: 'PSG College of Technology',
      photoUrl: BrindhaImage,
    },
    {
      name: 'Mr G Karthik Vijaykumar',
      designation: 'Assistant Professor(Sr.G), BIOTECH',
      organization: 'PSG College of Technology',
      photoUrl: KarthikVijaykumarImage,
    },
    {
      name: 'Ms A Dharani',
      designation: 'Assistant Professor, CSE',
      organization: 'PSG College of Technology',
      photoUrl: DharaniImage,
    },
    {
      name: 'Dr G Sai Sundara Krishnan',
      designation: 'Professor , AMCS',
      organization: 'PSG College of Technology',
      photoUrl: saisundara,
    },
  ];

  const [activeSection, setActiveSection] = useState('Finance');
  const [activeTrack, setActiveTrack] = useState('Track1'); 

  const renderTrackSection = () => {
    switch (activeTrack) {
      case 'Track1':
        return (
          <>
            <ProfileCard
              name="Dr Vijayan K Ansari"
              designation={
                <>
                  Professor & Director , Vision Lab <br /> Department of Electrical and Computer Engineering
                </>
              }
              organization="University of Dayton, USA"
              photoUrl={VijayanImage}
            />
            <NormalCardGrid cards={Track1} />
          </>
        );
      case 'Track2':
        return (
          <>
            <ProfileCard
              name="Dr Ferrante Neri"
              designation={
                <>
                  Professor <br /> Machine Learning and Artificial Intelligence
                </>
              }
              organization="University of Surrey , UK"
              photoUrl={FerranteImage}
            />
            <NormalCardGrid cards={Track2} />
          </>
        );
      case 'Track3':
        return (
          <>
            <ProfileCard
              name="Dr Pablo Moscato"
              designation={
                <>
                  Professor of Data Science <br /> School of Information and Physical Sciences (Data Science and Statistics)
                </>
              }
              organization="University of Newcastle, Australia"
              photoUrl={PabloImage}
            />
            <NormalCardGrid cards={Track3} />
          </>
        );
      default:
        return null;
    }
  };

  const renderMainSection = () => {
    switch (activeSection) {
      case 'Finance':
        return <NormalCardGrid cards={Finance} />;
      case 'Tutorial':
        return <NormalCardGrid cards={Tutorial} />;
      case 'Publication':
        return <NormalCardGrid cards={Publication} />;
      case 'Poster':
        return <NormalCardGrid cards={poster} />;
      case 'govn':
        return <NormalCardGrid cards={govn} />;
      case 'industry':
        return <NormalCardGrid cards={industry} />;
      case 'publicity':
        return <NormalCardGrid cards={publicity} />;
      case 'sponsor':
        return <NormalCardGrid cards={sponsor} />;
      case 'international':
        return <NormalCardGrid cards={international} />;
      case 'panelist':
        return <NormalCardGrid cards={panelist} />;
      default:
        return null;
    }
  };

 

  return (
    <div style={{ padding: '40px', fontFamily: 'Georgia, serif', color: '#FFFFFF' }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5em',
        marginBottom: '40px',
        color: '#FFFFFF',
      }}>ORGANIZING COMMITTEE</h2>

      {/* Chief Patron and Patron */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', flexWrap: 'wrap', marginBottom: '60px' }}>
        <div>
          <h3 style={{ textAlign: 'center' }}>CHIEF PATRON</h3>
          <ProfileCard
            name="Shri L Gopalakrishnan"
            designation="Managing Trustee"
            organization="PSG & Sons Charities Trust"
            photoUrl={TrusteeImage}
          />
        </div>
        <div>
          <h3 style={{ textAlign: 'center'}}>PATRON</h3>
          <ProfileCard
            name="Dr K Prakasan"
            designation="Principal"
            organization="PSG College of Technology"
            photoUrl={PrakasanImage}
          />
        </div>
      </div>

      {/* Institutional Steering Committee */}
      <div style={{ marginBottom: '60px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h3>INSTITUTION STEERING COMMITTEE</h3>
          <ProfileCard
            name={
              <>
                Deans and Head of the Departments
              </>
            }
            designation=""
            organization="PSG College of Technology"
          />
        </div>
      </div>

      {/* General Chairs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', flexWrap: 'wrap' }}>
        <div>
          <h3 style={{ textAlign: 'center'}}>GENERAL CHAIR</h3>
          <ProfileCard
            name="Dr G R Karpagam"
            designation={
              <>
                Professor, CSE <br /> Director <br />PSG - AI Consortium
              </>
            }
            organization="PSG College of Technology"
            photoUrl={GRKImage}
          />
        </div>
        <div>
          <h3 style={{ textAlign: 'center'}}>GENERAL CHAIR</h3>
          <ProfileCard
            name="Dr B Vinothkumar"
            designation={
              <>
                Professor, IT <br /> Infrastructure Technical Lead <br /> PSG - AI Consortium
              </>
            }
            organization="PSG College of Technology"
            photoUrl={VinothImage}
          />
        </div>
      </div>
      {/* Sample Normal Cards Section */}
      <div style={{ marginTop: '60px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>ORGANIZING CHAIRS</h3>
        <NormalCardGrid cards={sampleNormalCards} />
      </div>
      
      {/* Track Chairs Section */}
      <div style={{ marginTop: '60px' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>TRACK CHAIRS</h3>
        <br />
        {/* Track Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          gap: '20px',
        }}>
          <button
            onClick={() => setActiveTrack('Track1')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '10px',
              backgroundColor: activeTrack === 'Track1' ? '#00B4D8' : '#004AAD',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '1em',
              transition: 'background-color 0.3s',
            }}
          >
            TRACK 1 : AI GENESIS
          </button>
          <button
            onClick={() => setActiveTrack('Track2')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '10px',
              backgroundColor: activeTrack === 'Track2' ? '#00B4D8' : '#004AAD',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '1em',
              transition: 'background-color 0.3s',
            }}
          >
            TRACK 2 : AI IMPACT
          </button>
          <button
            onClick={() => setActiveTrack('Track3')}
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '10px',
              backgroundColor: activeTrack === 'Track3' ? '#00B4D8' : '#004AAD',
              color: '#FFFFFF',
              cursor: 'pointer',
              fontSize: '1em',
              transition: 'background-color 0.3s',
            }}
          >
            TRACK 3 : AI HORIZON
          </button>
        </div>
        {/* Render Active Track */}
        <div style={{
          backgroundColor: 'linear-gradient(135deg, #004AAD, #00B4D8)',
          borderRadius: '20px',
          padding: '20px',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column', // Align items in a column
          alignItems: 'center', // Center-align items
          gap: '20px',
        }}>
          {renderTrackSection()}
        </div>

    <br />
    <br />

      {/* Main Section Tabs */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '20px',
        gap: '20px',
      }}>
        <button
          onClick={() => setActiveSection('Finance')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'Finance' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          FINANCE CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('Tutorial')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'Tutorial' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)',
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          TUTORIAL CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('Publication')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'Publication' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          PUBLICATION CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('Poster')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'Poster' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          POSTER AND EXPO CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('govn')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'govn' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          GOVERNMENT LIASION CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('industry')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'industry' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          INDUSTRY LIASION CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('publicity')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'publicity' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          PUBLICITY AND PUBLIC RELATIONS CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('sponsor')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'sponsor' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          SPONSORSHIP CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('international')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'international' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          INTERNATIONAL LIAISON CHAIRS
        </button>
        <button
          onClick={() => setActiveSection('panelist')}
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '10px',
            backgroundColor: activeSection === 'panelist' ? '#00B4D8' : '#004AAD',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1em',
            transition: 'background-color 0.3s',
            flex: '1 1 calc(20% - 20px)', 
            maxWidth: 'calc(20% - 20px)',
          }}
        >
          PANELIST LIAISON CHAIRS
        </button>
      </div>

      {/* Render Main Section */}
      <div style={{
        backgroundColor: 'linear-gradient(135deg, #004AAD, #00B4D8)',
        borderRadius: '20px',
        padding: '20px',
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
        color: '#FFFFFF',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
      }}>
        {renderMainSection()}
      </div>

      </div>
    </div>
  );
}

export default Comitte;
