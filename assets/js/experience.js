AOS.init();

// Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Cloud Engineer Intern",
    cardImage: "assets/images/experience-page/awslogo.png",
    place: "Amazon Web Services" ,
    time: "(May - Aug, 2025)",
    desp: "<li>Developed and deployed scalable cloud infrastructure using AWS services such as EC2, S3, and Lambda, enhancing application performance and reliability.</li><li>Implemented Infrastructure as Code (IaC) using AWS CloudFormation and Terraform, automating resource provisioning and management to improve deployment efficiency by 40%.</li><li>Monitored and optimized cloud resources using AWS CloudWatch and AWS Cost Explorer, reducing operational costs by 25% through resource right-sizing and eliminating unused assets.</li><li>Collaborated with cross-functional teams to design and implement secure cloud architectures, adhering to best practices for data protection and compliance.</li>"

  },
  {
    title: "IT Student Technician",
    cardImage: "assets/images/experience-page/havergal.png",
    place: "Havergal College",
    time: "(Sept - Dec, 2024)",
    desp: "<li>Developed and deployed custom automation solutions using Google Apps Scripts, streamlining workflows and improving data management across Google Workspace applications.</li><li>Utilized Zoho's database platform to manage and analyze technical support tickets, identifying recurring issues and implementing process optimizations, minimizing resolution time by 70%.</li><li>Conducted simulated Phishing Campaigns, and Security Compliance assessments to identify vulnerabilities within the organization.</li><li>Led simulated phishing campaigns using KnowBe4, analyzed results to identify vulnerabilities, and developed targeted training to improve cybersecurity awareness and resilience within the organization.</li>"
  },
  {
    title: "Information Technology Intern",
    cardImage: "assets/images/experience-page/havergal.png",
    place: "Havergal College",
    time: "(May - Sept, 2024)",
    desp: "<li>Leveraged JAM Management and Microsoft Intune to oversee and secure a fleet of 500+ user devices, optimizing device provisioning, enforcing security compliance, and streamlining remote management to enhance operational efficiency and minimize downtime.</li><li>Captured and packaged internet-sourced applications, then created tailored JAMF policies to automate deployment, enforce security, and ensure consistent device configurations.</li>",
  },
  {
    title: "Teaching Assistant",
    cardImage: "assets/images/experience-page/kumon.png",
    place: "Kumon Math and Reading Centre",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<li>Provided personalized Math and English tutoring, ensuring workbook completion while analyzing performance and delivering feedback to enhance academic growth.</li><li>Designed tailored learning strategies based on student assessments, improving comprehension and overall achievement.</li>"
  },
];


const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  

  {
    title: "Elle Hacks",
    subtitle: "Mentor/ Participant",
    image: "assets/images/experience-page/ellehacks.jpg",
    desp: "Created excellence in Canada’s largest hackathons for women and gender-diverse students.",
    href: "https://ellehacks.com/",
  },
  {
    title: "Hack the North",
    subtitle: "Participant",
    image: "assets/images/experience-page/hacknorth.png",
    desp: "Contributed to Hack the North, working with teams to craft innovative solutions under tight deadlines, refining skills in coding, problem-solving, and collaboration.",
    href: "https://hackthenorth.com/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
