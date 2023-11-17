import memegen from "./Assets/memegen.PNG";
import login from "./Assets/login.PNG";
import cloneAirBnB from "./Assets/airbnb.PNG";
import businessCard from "./Assets/businessCard.PNG";
import apparel from "./Assets/apparelpic.PNG";
import bookDb from "./Assets/bookDBpic.PNG";
import vector from "./Assets/figma to html 3.PNG";
import healthy from "./Assets/figma to html 2.jpg";
import paint from "./Assets/paint.gif";
import studentInfo from "./Assets/student.gif";
import speech from "./Assets/voice.jpeg";
import web2 from "./Assets/PersonalWeb2.PNG";
import calculator from "./Assets/calculator.PNG";
import Tictactoe from "./Assets/TicTacToe.PNG";
import Plantify from "./Assets/plantify.PNG";
import studentData from "./Assets/studentInfo.PNG";
const data = [
  {
    id: 1,
    title: "Plantify",
    image: Plantify,
    desc: "A Plant shopping store made with NextJS + MongoDB + TailwindCSS",
    link: " https://plantify-shop.vercel.app/",
  },
  {
    id: 2,
    title: "Student Information",
    image: studentData,
    desc: "A student Information System made with NextJS + MongoDB + TailwindCSS",
    link: "https://classroom-info-db.vercel.app/",
  },
  {
    id: 1,
    title: "Meme Generator",
    image: memegen,
    desc: "Made with React Js. A meme generator where you can put top and bottom text. This demonstrates API fetching.",
    link: " http://LeNikki.github.io/MemeGenerator",
  },
  {
    id: 2,
    title: "Login Form Route to Dashboard",
    image: login,
    desc: "Made with React Js and JWT Auth. A login authentication system which routes your to your dashboard once logged in.",
    link: " http://LeNikki.github.io/Login_route",
  },
  {
    id: 3,
    title: "Clone AirBNB",
    image: cloneAirBnB,
    desc: "Made with React Js. A Clone of AirBnB's landing page",
    link: " https://LeNikki.github.io/CloneAirBnB",
  },
  {
    id: 4,
    title: "Digital Card",
    image: businessCard,
    desc: "Made with React Js. A simple Digital Business Card",
    link: "https://lenikki.github.io/DigitalBusinessCard/",
  },

  {
    id: 5,
    title: "Apparel Shop Template",
    image: apparel,
    desc: "Made with HTML and CSS. Simple Clothing Email Template.",
    link: "https://github.com/LeNikki/Apparel-Email-Template",
  },

  {
    id: 6,
    title: "Library Database",
    image: bookDb,
    desc: "Made with C# Winforms. Database used is MySQL Workbench. Library Database which demonstrates CRUD operations.",
    link: "https://github.com/LeNikki/Library-Database",
  },
  {
    id: 7,
    title: "Vector Gallery",
    image: vector,
    desc: "Designed using Figma. Made with HTML and CSS. Demonstrates grid layouting in pure CSS.",
    link: "https://lenikki.github.io/Vector.github.io/",
  },
  {
    id: 8,
    title: "Healthy Foodie",
    image: healthy,
    desc: "Designed using Figma. Made with HTML and CSS. Simple Food Website.",
    link: "https://lenikki.github.io/Healthy-Foodie/",
  },
  {
    id: 9,
    title: "Paint Windows Application",
    image: paint,
    desc: "Made with C# Winforms. Basic Paint Application with Filter tools which demonstrates CRUD operations, and uses Graphics and Bitmap in C#.",
    link: "https://github.com/LeNikki/Library-Database",
  },
  {
    id: 10,
    title: "Student Information",
    image: studentInfo,
    desc: "Made with Python Framework: Django; database used is MySQL. For front-end, I used Bootstrap for exposure to the framework. Demonstrates basic CRUD opeartions.",
    link: "https://github.com/LeNikki/Student-Information-Database",
  },
  {
    id: 11,
    title: "Speech AI",
    image: speech,
    desc: "Made with Python, imported certain packages for the Speech AI. Demonstrates basic python functions.",
    link: "https://github.com/LeNikki/Speech-Assistant",
  },

  {
    id: 12,
    title: "Personal Website",
    image: web2,
    desc: "Made with pure HTML, CSS, jQuery and Javascript. Demonstrates basic animations using Javascript.",
    link: "https://lenikki.github.io/PersonalWeb2/",
  },
  {
    id: 13,
    title: "Calculator Windows Application",
    image: calculator,
    desc: "Made with C#. A project that demonstrates calculation algorithms. Operates 4 arithmetic operations and percentage",
    link: "https://github.com/LeNikki/Calculator",
  },
  {
    id: 14,
    title: "TicTacToe Console Based App",
    image: Tictactoe,
    desc: "Made with C#. A project that performs game algorithms for TicTacToe.",
    link: "https://github.com/LeNikki/TicTAcToe",
  },
];

export default data;
