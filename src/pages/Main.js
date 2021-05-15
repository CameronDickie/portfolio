import React from "react";
import "../styles/main.css";
// import "../components/winbox.bundle.js"
import "../styles/winbox.min.css";
import WinBox from "../components/winbox.js";
import Phone from "../styles/icons/phone.svg";

class Main extends React.Component {
  componentDidMount() {
    const about = document.querySelector("#about");
    const contact = document.querySelector("#contact");
    const projects = document.querySelector("#projects");
    const aboutContent = document.querySelector("#about-content");
    const contactContent = document.querySelector("#contact-content");
    const projectContent = document.querySelector("#project-content");

    about.addEventListener("click", () => {
      const aboutBox = new WinBox({
        title: "about me",
        background: "#00aa00",
        width: "400px",
        height: "400px",
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function () {
          this.setBackground("#00aa00");
        },
        onblur: function () {
          this.setBackground("#777");
        },
      });
    });

    contact.addEventListener("click", () => {
      const contactBox = new WinBox({
        title: "contact me",
        background: "#00aa00",
        width: "400px",
        height: "400px",
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        x: 250,
        y: 150,
        mount: contactContent,
        onfocus: function () {
          this.setBackground("#00aa00");
        },
        onblur: function () {
          this.setBackground("#777");
        },
      });
    });

    projects.addEventListener("click", () => {
      const projectBox = new WinBox({
        title: "my projects",
        background: "#00aa00",
        width: "400px",
        height: "400px",
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        x: 450,
        y: 250,
        mount: projectContent,
        onfocus: function () {
          this.setBackground("#00aa00");
        },
        onblur: function () {
          this.setBackground("#777");
        },
      });
    });
  }
  render() {
    return (
      <div class="container">
        <nav>
          <ul>
            <li id="about">/about</li>
            <li id="contact">/contact</li>
            <li id="projects">/projects</li>
          </ul>
        </nav>

        <main>
          <h1>
            camerondickie:$<span class="cursor">|</span>
          </h1>
          <h3>find my socials:</h3>
          <ul>
            <li>
              <a href="https://github.com/CameronDickie">github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/cameron-dickie-62b715157/">
                linkedin
              </a>
            </li>
            <li>
              <a href="https://twitter.com/cam_dickie_">twitter</a>
            </li>
          </ul>
        </main>

        <div class="hidden">
          <div id="about-content" class="about-content">
            <h2>
              about-me:$<span class="cursor">|</span>
            </h2>
            <hr></hr>
            <p>
              my name is cameron dickie. i am a student based out of ottawa,
              ontario studying computer science with a minor in mathematics at
              carleton university. i expect to graduate in april of 2022, but
              the skills i have learned in my time during my undergrad have
              revolutionized how i code.
              <br />
              <br />
              i am eager to learn new things. i find great interest in learning
              what technology is cutting edge, and how these technologies can
              change how i approach problem solving in regards to both front-
              and back-end development.
              <br />
              <br />
              some of my interests include artificial intelligence,
              neuroscience, philosophy, video games, skiing, and wakeboarding.
              <br />
              <br />
              some technologies i have expertise in (in no particular order):
              <ul class="dot-jot">
                <li>reactjs</li>
                <li>react native</li>
                <li>nodejs</li>
                <li>expressjs</li>
                <li>firebase-tools</li>
                <li>flutter</li>
                <li>spring</li>
                <li>vuejs</li>
                <li>nuxtjs</li>
                <li>web-sockets</li>
              </ul>
              <br></br>
              some technologies i am actively using and learning:
              <ul class="dot-jot">
                <li>reactjs</li>
                <li>flutter</li>
                <li>nextjs</li>
                <li>web-sockets</li>
                <li>firebase-tools</li>
                <li>aws</li>
              </ul>
            </p>
          </div>

          <div id="contact-content" class="contact-content">
            <h2>
              contact-me:$<span class="cursor">|</span>
            </h2>
            <hr></hr>
            <p>you can contact me at the email and phone number below:</p>
            <ul>
              <li class="contact-stuff">
                <div class="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#00aa00"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
                  </svg>
                </div>
                +1 (905) 462-1566
              </li>
              <li class="contact-stuff">
                <div class="contact-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#00aa00"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
                  </svg>
                </div>
                cameronbdickie@gmail.com
              </li>
            </ul>
          </div>

          <div id="project-content" class="project-content">
            <h2>
              my-projects:$<span class="cursor">|</span>
            </h2>
            <hr></hr>
            <div>
              <div class="proj-info">
                <div>
                  <h4>Course Management System</h4>
                  <a href="https://github.com/CameronDickie/comp3004-team6">
                    github repository
                  </a>
                </div>
                <div>
                  <h6>front-end: react</h6>
                  <h6>back-end: spring</h6>
                </div>
              </div>
              <p>
                a full-stack project completed with three of my other
                classmates.
                <br />
                the project objective was to allow for three types of users: an
                administrator, professors, and students.
                <br />
                <br />
                these users can do some of the following things:
                <ul class="dot-jot">
                  <li>creating courses</li>
                  <li>register in courses</li>
                  <li>uploading files for course content</li>
                  <li>grading student submissions</li>
                  <li>provide final grades for students in a course</li>
                  <li>and much more</li>
                </ul>
                <br />
                noteworthy features include:
                <ul class="dot-jot">
                  <li>
                    implementation of design patterns on the back-end including:
                    observer, factory, strategy, decorator, and composite
                  </li>
                  <li>
                    the use of a web-socket to ensure the real-time updating of
                    users associated with a course (determined by the
                    observer/subject)
                  </li>
                  <li>
                    recursive front-end implementation to allow for professor
                    modification of course-content and its structure
                  </li>
                </ul>
              </p>
            </div>
            {/* start of second project */}
            <hr></hr>
            <div>
              <div class="proj-info">
                <div>
                  <h4>Climate Action Carleton Blog</h4>
                  <a href="https://github.com/CameronDickie/cac-react">
                    github repository
                  </a>
                  <br />
                  <a href="https://climateactioncarleton.ca">website link</a>
                </div>
                <div>
                  <h6>front-end: react</h6>
                </div>
              </div>
              <p>
                a project to provide the campus organization 'climate action
                carleton' with a digital front to organize their most relevant
                content.
                <br></br>
                this helped their organization reach out to students, especially
                first years, during the pandemic when it was not possible to
                meet new people on campus.
                <br></br>
                <br></br>
                this project includes:
                <ul class="dot-jot">
                  <li>
                    a home page consisting of a splash page of the most
                    important content.
                  </li>
                  <li>
                    an about page describing the organization and what their
                    goals are.
                  </li>
                  <li>
                    a contact page containing two forms: one to send an email to
                    the organization, and the other to join.
                  </li>
                  <li>
                    a page to explain their ongoing movement, and help educate
                    users on the issue with containerized pieces of information.
                  </li>
                </ul>
              </p>
            </div>
            {/* start of third project */}
            <hr></hr>
            <div>
              <div class="proj-info">
                <div>
                  <h4>CMXX Website</h4>
                  <a href="https://github.com/JaxsonHood/cmxx">
                    github repository
                  </a>
                  <br />
                  <a href="https://cmxx.ca">website link</a>
                </div>
                <div>
                  <h6>front-end: vue/nuxt.js</h6>
                </div>
              </div>
              <p>
                a simple project to provide a webpage for myself and my roommate
                to show off our web development skills.
                <br></br>
                this project is currently ongoing and requires much more work,
                but was a proof of concept for our vuejs and nuxtjs setup.
                <br></br>
                <br></br>
                this project includes:
                <ul class="dot-jot">
                  <li>
                    a home page providing a general overview of what cmxx is.
                  </li>
                  <li>an about page describing who we as members are.</li>
                </ul>
              </p>
            </div>
            {/* start of fourth project */}
            <hr></hr>
            <div>
              <div class="proj-info">
                <div>
                  <h4>Lunartree Website</h4>
                  <a href="https://lunartree.ca">website link</a>
                </div>
                <div>
                  <h6>front-end: javascript/wordpress</h6>
                </div>
              </div>
              <p>
                a project made in 2017 with a team of two other partners to
                attract new clients.
                <br></br>
                this was for our film and media production company during my
                time in high school.
                <br></br>
                <br></br>
                this project includes:
                <ul class="dot-jot">
                  <li>
                    a landing page where a general overview of our company can
                    be seen, including some of our photography.
                  </li>
                  <li>
                    an 'our services' page which shows what skills our company
                    was willing to offer to potential clients.
                  </li>
                  <li>
                    a 'technology' page which overviews the technology we used
                    at the time (2017) to show that we had the resources
                    available to match our skills.
                  </li>
                  <li>
                    an 'about' page which describes our company and what we
                    offer to clients, giving background into who we are.
                  </li>
                  <li>
                    a 'contact' page which allows users to email our company to
                    determine what they are looking for.
                  </li>
                </ul>
                <br></br>
                the results of this project attracted new clients, such as
                <ul class="dot-jot">
                  <li>the town of milton, ontario.</li>
                  <li>hitherfield private school</li>
                  <li>hawthorne public school</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
