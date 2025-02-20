// menu icons
let menuList = document.getElementById("menulist");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "350px"; // Adjust this value based on your content
  } else {
    menuList.style.maxHeight = "0px";
  }
}

// skills section

// Skill data with skill names and progress
const skills = [
  { name: "HTML", progress: 90 },
  { name: "CSS(Bootstrap, tailwind)", progress: 80 },
  { name: "JAVASCRIPT", progress: 75 },
  { name: "Node.js,Express.js", progress: 75 },
  { name: "SQL,Mongodb", progress: 80 },
  { name: "Basic(python,java)", progress: 65 },
];

const leftside = document.querySelector('.leftside');
if (!leftside) {
  console.error('Error: The leftside container is missing in the HTML.');
}

// Function to render skills with animation
function renderSkills(skills, container) {
  skills.forEach((skill) => {
    const skillContainer = document.createElement('div');
    skillContainer.innerHTML = `
      <span><b>${skill.name}</b></span> 
      <span class="pull-right"><b>0%</b></span>
      <div class="progress">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 0%;"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    `;
    container.appendChild(skillContainer);

    // Animate skill progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      if (currentProgress < skill.progress) {
        currentProgress++;
        skillContainer.querySelector('.progress-bar').style.width = `${currentProgress}%`;
        skillContainer.querySelector('.pull-right b').textContent = `${currentProgress}%`;
      } else {
        clearInterval(interval);
      }
    }, 30); // Speed of progress increment
  });
}

// Render skills
renderSkills(skills, leftside);
// email
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser= require('bodyParser');
const app = express();
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'abcd@gmail.com',
            pass: 'Abcdefgh'
        }
    });

    const mailOptions = {
        from: email,
        to: 'abcd@gmail.com',
        subject: 'This is the subject',
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});