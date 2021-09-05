import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Everyone. My name is KVV Deepesh</h1>
      <div className="About-Section">
        <h1>About Me</h1>
        <h2>
          I am a third-year undergraduate at IIIT - Bangalore pursuing a degree
          in Electronics and Communications Engineering. Although I am pursuing
          a degree in Electronics and Communications Engineering I have realised
          that my true passion lies in Software Development and Engineering. I
          am now working hard towards my goal to pursue a career in Software
          Engineering.
        </h2>
      </div>
      <div className="Education">
        <h1>Education</h1>
        <ul className="list">
          <li>
            International Institute Of Information Technology Bangalore - CGPA:
            3.51 / 4.00
          </li>
          <br></br>
          <li>Sri Chaitanya Techno College - CGPA: 10.00 / 10.00</li>
          <br></br>
          <li>Sri Chaitanya Techno School - CGPA: 10.00 / 10.00</li>
        </ul>
      </div>
      <div className="Projects">
        <h1>Skills and Projects</h1>
        <h2>
          I am highly interested in Web Development and Software Engineering. I
          have experience with Web development frameworks such as Reactjs and
          Django. I have also worked on some projects related to web
          development and some of my other interests which can be found on my
          github.
          <br></br>
        </h2>
        <h2>
          I have experience programming in a variety of programming languages
          such as C, C++, Python, Java, JavaScript, HTML, CSS
        </h2>
        <a class="Github" href="https://github.com/Deepesh368">
          My Github
        </a>
      </div>
      <div className="Contact">
        <h1>You can contact me at:</h1>
        <h1>Email: kvvdeepesh@gmail.com</h1>
        <h1>Mobile: 9618285092</h1>
      </div>
    </div>
  );
}
