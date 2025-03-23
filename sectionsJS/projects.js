function projects() {
  const content = document.getElementById("content");

  const myProjects = [
    {
      title: "VCET Portal - Website to App Conversion",
      description:
        "Converted the VCET Portal website into a mobile app using Android Studio WebView with Java.",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQHN-uiTEmyeMA/profile-treasury-image-shrink_1920_1920/B56ZWfEWBFHEAc-/0/1742130472319?e=1743321600&v=beta&t=ZYwHkKdwIPiOwAnPTyXhBTYp_6oWzMVtyROoGjouiV4",
      link: "https://github.com/Vimal-AFK/vcet_portal_app",
      additionalLink: {
        url: "https://vcet.ac.in/vcetattendance/ParentsLogin.php",
        name: "VCET Original Website",
      },
    },
    {
      title: "BLOGIFY - Content Management System",
      description:
        "A dynamic web application for creating, editing, and publishing blogs with user authentication.",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQHyqd2NEp8nuw/profile-treasury-image-shrink_1280_1280/B56ZXCkJw3GQAQ-/0/1742726012630?e=1743332400&v=beta&t=mTvimNqLSgrEqo6Rl_OGMOXJKdwR1ecQZXRznBP3ZjE",
      link: "https://github.com/Vimal-AFK/CMS",
      additionalLink: {
        url: "https://blogify-vimal.vercel.app/",
        name: "Visit Blogify",
      },
    },
    {
      title: "Weather App",
      description:
        "A React.js app using OpenWeather API to display weather conditions for any city.",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQEoXA8z9kdPgQ/profile-treasury-image-shrink_800_800/B56ZXCiw4TGsAY-/0/1742725652877?e=1743332400&v=beta&t=9LzfMaB3VjnP3JICsXzhs9L6D-AFIvy0ldO-ZrPy7mY",
      link: "https://github.com/Vimal-AFK/vimal-react-app.git",
      additionalLink: {
        url: "https://radiant-donut-d39fc4.netlify.app/",
        name: "Visit Weather App",
      },
    },
    {
      title: "Mitigating Cloud Database Data Loss",
      description:
        "Prevented data loss in cloud databases using a queue data structure and local JSON storage.",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQGpjwJPxR3nqg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1736144801611?e=1743332400&v=beta&t=L5FIZ8cwgV6mGSLu1XLit0qqQm4MKyq8blHBMBUmz-4",
      link: "https://github.com/Vimal-AFK/CloudSolution_With_MongoDB",
      additionalLink: {
        url: "https://www.linkedin.com/in/vimal-raj-nagarajan-457264299/details/projects/",
        name: "Cloud Data Loss Details",
      },
    },
    {
      title: "Rock-Paper-Scissors Game",
      description:
        "An interactive game with randomized choices, real-time results, and score tracking.",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQF1V22Gt7hKLw/profile-treasury-image-shrink_8192_8192/B56ZXCjwvFGoAg-/0/1742725910890?e=1743332400&v=beta&t=y14FgSyDSOqNLGnTuHNK0gKdL53kcOHVb-6PXz9g9YY",
      link: "https://github.com/Vimal-AFK/Rock_Paper_Scissor_Game.git",
      additionalLink: {
        url: "https://vimal-afk.github.io/Rock_Paper_Scissor_Game/",
        name: "Visit RPS Game",
      },
    },
    {
      title: "Water Footprint Finder",
      description:
        "A multilingual app using ML to calculate the water footprint of various products.",
      image:
        "https://media.licdn.com/dms/image/v2/D562DAQENHUXE_uqB2A/profile-treasury-image-shrink_1920_1920/B56ZXClOqvHsAg-/0/1742726294980?e=1743332400&v=beta&t=4KNjrliC3qRhGxju_GliZdzYLMxjMryUNN8wj3zVkp0",
      link: "https://github.com/Vimal-AFK/WATER-FOOT-PRINT.git",
      additionalLink: {
        url: "",
        name: " Visit Water Footprint W",
      },
    },
  ];

  let projectsHTML = '<div class="project-container">';
  myProjects.forEach((project) => {
    projectsHTML += `
      <div class="project-card">
        <img src="${project.image}" alt="${
      project.title
    }" class="project-image">
        <div class="column-sec projectMain">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
        </div>
        <div class="column-sec projectLinks">
          <a id="pLink" href="${
            project.link
          }" target="_blank" class="project-link"><i class="fab fa-github fa-2x"></i></a>
          <br>
          ${
            project.additionalLink
              ? `<a id="extra" href="${project.additionalLink.url}" target="_blank" class="project-link">${project.additionalLink.name}</a>`
              : ""
          }
        </div>
      </div>
    `;
  });
  projectsHTML += "</div>";

  content.innerHTML = projectsHTML;

  return content;
}
