import React from 'react';
import './TeamSection.css';

const teamMembers = [
  {
    name: 'Akshay Nalkol',
    image: '/images/member1.jpeg',
    email: 'akshaynalkol2001@gmail.com',
    linkedin: 'https://www.linkedin.com/in/akshay-nalkol-185065230',
    github: 'https://github.com/akshaynalkol',
  },
  {
    name: 'Harsh Kumar Bharti',
    image: '/images/member2.jpeg',
    email: 'harshbharti7@gmail.com',
    linkedin: 'https://www.linkedin.com/in/harsh-kumar-bharti-385b601ba',
    github: 'https://github.com/harshbharti7',
  },
  {
    name: 'Farah Khan',
    image: '/images/member3.jpeg',
    email: 'farahdeebakhan01@gmail.com',
    linkedin: 'https://www.linkedin.com/in/farah-khan-48a343152',
    github: 'https://github.com/farah-Deeba-Khan',
  },
  {
    name: 'Yugandhar Deshmukh',
    image: '/images/member4.jpeg',
    email: 'yugsjdeshmukh194@gmail.com',
    linkedin: ' https://www.linkedin.com/in/yugandhar-deshmukh-060852252',
    github: 'https://github.com/Yugandhar194',
  },
  {
    name: 'Shruti Bangar',
    image: '/images/member5.jpeg',
    email: 'bangarshruti9@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shruti-bangar',
    github: 'https://github.com/bshruti-15/CDAC',
  },
];

const TeamSection = () => {
  return (
    <section className="team-section" id="team">
      <div className="container">
        <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row justify-content-center">
          {teamMembers.map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">
                    <a href={`mailto:${member.email}`}>{member.email}</a> {/* Email link */}
                  </p>
                  <div className="social-links">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <img
                        src="/images/linkedin-icon.png"
                        alt="LinkedIn"
                        className="social-icon"
                      />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <img
                        src="/images/github-icon.png"
                        alt="GitHub"
                        className="social-icon"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
