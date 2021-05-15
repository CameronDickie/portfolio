import React from "react";
import "../styles/main.css";
// import "../components/winbox.bundle.js"
import "../styles/winbox.min.css";
import WinBox from "../components/winbox.js";

class Main extends React.Component {  
  componentDidMount() {
    const about = document.querySelector("#about");
    const contact = document.querySelector("#contact");
    const aboutContent = document.querySelector("#about-content");
    const contactContent = document.querySelector("#contact-content");

    about.addEventListener("click", () => {
      const aboutBox = new WinBox({
          title: 'about me',
          background: '#00aa00',
      });
      aboutBox.body.innerHTML = "<p>I am a thing with information about Cameron</p>"
      /*
        Left off @ 17:04
        https://www.youtube.com/watch?v=jQCk2yo10YY
      */
    });
  }
  render() {
    return (
      <div class="container">
        <nav>
          <ul>
            <li id="about">/about</li>
            <li id="contact">/contact</li>
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
          <div class="about-content">
            <h2>
              about-me:$<span class="cursor">|</span>
            </h2>
            <p>my name is cameron dickie</p>
            <p>and this is where the information about me goes</p>
          </div>

          <div class="contact-content">
            <h2>
              contact-me:$<span class="cursor">|</span>
            </h2>
            <p>you can contact me at the email and phone number below</p>
            <ul>
              <li>+1 (905) 462-1566</li>
              <li>cameronbdickie@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
