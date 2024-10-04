import React from 'react';
import ParticleEffect from './Title';

function CText() {
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
        }}
      >
        Codalo
      </h1> */}
      <ParticleEffect text='Codalo' cl={['#44a1a0', '#0d5c63', '#fffffa']} />
      <h2
        style={{
          position: 'absolute',
          top: '30vh',
          left: '50vw',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '2vw',
          width: '60vw',
          textAlign: 'center'

          
        }}
      >
        Gr 9-10 / Yr 10-11
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
          textAlign: 'left',
        }}
        
      >
        <h2 style={hS}>1. Overview</h2>
        <p>
          This event is structured as an exhilarating sumo robot battle, providing young students with a unique opportunity to explore robotics and programming .It promotes collaboration, innovation, and global connectivity, inviting tech enthusiasts and aspiring inventors to unleash their creativity through STEM-based projects.Participants will design and build their own sumo robots to compete in a thrilling arena, where the goal is to outmaneuver and push opponents out of the ring. Contestants will present their creations across 2dynamic rounds designed to inspire problem-solving and teamwork. The 2 Round’s include —TITAN and ROBOT.IO—culminating in an action-packed sumo battle showdown, where strategy and engineering prowess will determine the ultimate champion.

          Participants will showcase their ideas across two exciting rounds: <strong>TITAN</strong> and <strong>ROBOT.IO</strong>. These rounds are designed to inspire problem-solving and teamwork.
        </p>

        <h2 style={hS}>2. Event Structure</h2>
        <p>
          <strong>Team Composition:</strong> Up to 6 members involved in programming and building the robot.
          <br />
          

        </p>

        <h2 style={hS}>3. General Guidelines</h2>
        <p>
          <strong>Eligibility:</strong> Participants must be in grades 9-10
          <br /><br />
          <strong>Registration:</strong> Teams must complete the online registration form by the specified deadline and submit all required documentation, including consent forms and project descriptions.
          <br /><br />
          <strong>Project Guidelines:</strong>
          <ul>
            <li>Projects must adhere to STEM-based themes provided for each round.</li>
            <li>All projects must be original and developed specifically for the Codalo competition.</li>
            <li>Teams must explain their project, including objectives and methodologies, during their presentation.</li>
          </ul>
        </p>

        <h2 style={hS}>4. Event Details</h2>
        <p>
          <strong>Round 1: TITAN</strong> - This is the first round of Codalo, Which will involve all the teams presenting their Robot Design to a panel of judges. The Team should have a Presentation about their robot and its features. Each team will be allotted 5 Minutes for Presentation and 2 min for Q&A from the judges. The teams will be graded ONLY ACCORDING TO THE RUBRICS.
          Bonus points (+5) will be awarded if the robot addresses any of the SDG goals.
          <br /><br />
          <strong>Round 2: ROBOT.IO</strong> - The Robotic Battle Competition features teams of four members each, tasked with building robots using LEGO Spike or EV3 kits. Each match will be  for 2 minutes 30 seconds , where teams compete to score points by hitting their opponent's robot, earning one point per hit. Teams can also gain bonus points for successful defenses and creative robot designs, judged by a panel. All robots must be controlled remotely, adhering to safety protocols to prevent injury or damage. A judge will oversee each match, keeping track of time and scoring on a scoreboard that displays team names, points for hits and defenses, and overall scores.

        </p>

        <h2 style={hS}>5. Robot Specifications</h2>
        <p>
          <strong></strong>
          <ul>
            <li>Length: 30 cm</li>
            <li>Width: 16 cm</li>
            <li>Height: 15 cm</li>
          </ul>
        </p>

        <h2 style={hS}>6. Rules and Code of Conduct</h2>
        <p>
          <strong>Equipment:</strong> Only Lego EV3 or Spike can be used to build the robots. Any modifications must be pre-approved by the organizers.
          <br /><br />
          <strong>Code of Conduct:</strong> All participants must display respect and sportsmanship. Unsportsmanlike behavior may lead to disqualification.
          <br /><br />
          <strong>Disqualification:</strong> Violations of rules, cheating, or inappropriate conduct will result in disqualification.
        </p>

        <h2 style={hS}>7. Evaluation Criteria</h2>
        <table border="1" cellpadding="10" cellspacing="0" align="center">
          <tr>
            <th>Criteria</th>
            <th>Percentage</th>
          </tr>
          <tr>
            <td>Creativity</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Uniqueness</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Teamwork</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>Q&A Response</td>
            <td>25%</td>
          </tr>
        </table>

        <h2 style={hS}>8. Intellectual Property</h2>
        <p>
          All intellectual property rights remain with the participants. The organizers reserve the right to use images and videos of the projects for promotional purposes.
        </p>
        <h2 style={hS}>Robot Reference Links</h2>
        <ul>
            <li><a href="https://youtu.be/La0KFxSwxyY?si=59XyuPeRFjhYiSDO" target="_blank">Robot Reference Video 1</a></li>
            <li><a href="https://youtu.be/y2HyhDMsc58?si=nyfS0Q0z8OFmLkYe" target="_blank">Robot Reference Video 2</a></li>
        </ul>

        <h2 style={hS}>FAQs</h2>
        <ul>
        <li>
            <span class="faq-question"><strong>What tools can we use?</strong></span>
            <p>
                Participants should ONLY USE LEGO EV3 OR SPIKE (or both together). They can code the controller in any program. 
                Participants should use AI to CODE THE CONTROLLER. (Note: This question raises a concern, as building AI for the controller might not be realistic. Participants should control it manually.)
            </p>
        </li>

        <li>
            <span class="faq-question"><strong>How will we submit our projects?</strong></span>
            <p>
                The submission of ROUND 1 presentations can be displayed on a smart board during the event.
            </p>
        </li>



        <li>
            <span class="faq-question"><strong>What is the Age/Grade group for CODALO?</strong></span>
            <p>
                Grade 9, Grade 10, Year 10, Year 11.
            </p>
        </li>
      </ul>

      </div>
    </>
  );
}

export { CText };
