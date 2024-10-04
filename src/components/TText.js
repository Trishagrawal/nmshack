import React from 'react';
import ParticleEffect from './Title';

function TText() {
  const hS = {
    fontSize: '3.5vw',
    color: 'cyan', 
    marginBottom: '3rem',
    textAlign: "Center",
    marginTop: '5rem'
    
  };
  return (
    <>
      {/* <h1
        style={{
          position: 'absolute',
          top: '10vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '7vw',
          width: '60vw',
          textAlign: 'center'
          
          
        }}
      >
        Machine Learning 
      </h1> */}
      <ParticleEffect text='Tech for Change' cl={['#44a1a0', '#0d5c63', '#fffffa']} />
      <h2
        style={{
          position: 'absolute',
          top: '35vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '2vw',
          width: '60vw',
          textAlign: 'center'

          
        }}
      >
        Gr 6-8 / Yr 7-9
      </h2>

      <div
        style={{
          position: 'absolute',
          top: '40vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '1.5vw',
          width: '60vw',
          textAlign: 'left'
        }}
      >
        <h2 style={hS}>1. Tech4Change: Innovating for a Better Tomorrow</h2>
        <p>
            
            
            <strong>Theme:</strong> “Tech4Change” – Empowering young minds to tackle real-world challenges using advanced technology.
            <br />
            <strong>Objective:</strong> Students in grades 6 to 8 will use Pictoblox, HTML, Tinkercad, Minecraft, App Development, and Fusion 360 to create innovative solutions linked to SDGs, demonstrating their coding, design, and problem-solving abilities.
        </p>

        <h2 style={hS}>2. Team Structure</h2>
        <p>
            <strong>Participants:</strong> Students from grades 6, 7, and 8
            <br />
            <strong>Team Size:</strong> 3-4 students per team.
            <br />
            <strong>Tools Provided:</strong> Pictoblox software, HTML editors, Tinkercad accounts, Minecraft licenses, App Inventor, and Fusion 360 software.
        </p>

        <h2 style={hS}>3. Timeline</h2>
        <p>
            <strong>1. Introduction & Problem Statement (20 minutes):</strong>
        </p>
        <ul>
            <li>Introduction to Tech4Change, the SDGs, and the role of technology in solving global and local problems.</li>
            <li>Presentation of complex problem scenarios with real-world relevance.</li>
            <li>Explanation of available tools, their features, and how they can be leveraged for different solutions.</li>
        </ul>

        <p>
            <strong>2. Design, Coding, and Prototyping (120 minutes):</strong>
        </p>
        <ul>
            <li>Phase 1 (30 minutes): Ideation and planning - Teams brainstorm, sketch, and outline their solutions.</li>
            <li>Phase 2 (60 minutes): Development - Teams code, design, and prototype their solutions using selected technologies.</li>
            <li>Phase 3 (30 minutes): Testing - Teams test their prototypes, refine code, and make necessary adjustments based on initial functionality.</li>
        </ul>

        <p>
            <strong>3. Presentation & Demonstration (40 minutes):</strong> Each team presents and demonstrates their project to the judges (8 minutes per team, including Q&A). Presentations should cover problem understanding, the solution's development process, SDG impact, and technological integration.
        </p>

        <h2 style={hS}>4. Judging Rubric</h2>
        <table border="1" cellpadding="10" cellspacing="0" align='center'>
            <tr>
                <th>Criteria</th>
                <th>Description</th>
                <th>Points</th>
            </tr>
            <tr>
                <td>Problem Understanding</td>
                <td>Depth of understanding of the problem and SDG alignment.</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Creativity & Innovation</td>
                <td>Originality and innovation in the approach and use of technology.</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Technical Skills</td>
                <td>Complexity and proficiency demonstrated in coding, designing, and prototyping.</td>
                <td>10</td>
            </tr>
            <tr>
                <td>SDG Impact</td>
                <td>Potential impact of the solution on achieving the relevant SDG.</td>
                <td>10</td>
            </tr>
            <tr>
                <td>Teamwork</td>
                <td>Evidence of collaboration and effective teamwork.</td>
                <td>5</td>
            </tr>
            <tr>
                <td>Presentation</td>
                <td>Clarity, confidence, and effectiveness of the presentation.</td>
                <td>5</td>
            </tr>
        </table>

        <h2 style={hS}>5. Prizes</h2>
        <p>
            <strong>Certificates:</strong> For all participants to acknowledge their effort and participation.
            <br />
            <strong>Trophies/Medals:</strong> For the top 3 teams to recognize outstanding solutions.
            <br />
            <strong>Special Awards:</strong> For Best Use of Technology, Most Impactful SDG Solution, and Best Presentation.
        </p>


        
      </div>
    </>
  );
}

export { TText };
