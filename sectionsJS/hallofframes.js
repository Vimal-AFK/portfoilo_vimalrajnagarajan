function hallOfFrames() {
  const content = document.getElementById("content");

  const certificates = [
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQE5g_yO175RIw/feedshare-shrink_800/B56ZWei2wnHsAk-/0/1742121711617?e=1745452800&v=beta&t=lbAF72HomvqZkakGrr7XMwdto2oYbBOmwWeWN79ApdQ",
      alt: "robofesta",
      description: "RoboFesta : SriRamakrishna College",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQEjIRXLnqOvYw/feedshare-shrink_800/B56ZUujZxkHoAg-/0/1740242795891?e=1745452800&v=beta&t=KfjwuO5wU0wT549c9ekgobW6j8XF8wkH6G985B6mN6Q",
      alt: "IETE Certificate",
      description: "IETE Idea Presentation : VCET",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQHsPdcNaFYDFw/feedshare-shrink_2048_1536/B56ZUoAuhdHEAw-/0/1740133039676?e=1745452800&v=beta&t=JwHO2clCDrTN6lh7721PUR1ufSRnOhX_kBo73mYVbyQ",
      alt: "Gyan Mitra 25",
      description: "Gyan Mitra 25 : Mecpo",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQFuQ6Wy3cxSvQ/feedshare-shrink_800/B56ZUNmsBCHoAg-/0/1739690007941?e=1745452800&v=beta&t=Vrl05qLoKAL0juA5HphC-N3F0nUzQq1VjWHP7SdY5VM",
      alt: "psg itech gdg",
      description: "Google Developer Group : PSG iTech",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQHdNA0O9KqbmA/feedshare-shrink_800/B56ZVSzHsfGUAE-/0/1740850891240?e=1745452800&v=beta&t=ghOUlQ-RfVpwO8zMzGuPjEbN-jOa8wBVV2JoqlIbIuY",
      alt: "100days of gfg",
      description: "100 Days of Code : GeeksforGeeks",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQEed5cLtM1n6A/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1732470969074?e=1745452800&v=beta&t=-Rbu3qFeFOekmsHIBdGWyvzX_tikPNtwtAcgiF9qxDU",
      alt: "nptel 70% in dsa java",
      description: "70% in DSA using Java : NPTEL",
    },
    {
      src: "images/hallofframesImages/bannari1.png",
      alt: "ignis 2023",
      description: "Ignis 2023 : Bannari Amman Institute of Technology",
    },
    {
      src: "images/hallofframesImages/bannari01.jpg",
      alt: "bannri  2023 secured 2nd in idea presentation",
      description: "Secured 2nd in Idea Presentation : Bannari Amman Institute of Technology",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D5622AQGss8MtX0yweg/feedshare-shrink_800/feedshare-shrink_800/0/1730010376393?e=1745452800&v=beta&t=265KLe2h3tXqwj18EhKHhKUNKDproMNvins707qAuaM",
      alt: "responsive web design : freecodecamp",
      description: "Responsive Web Design : FreeCodeCamp",
    },
    {
      src: "https://media.licdn.com/dms/image/v2/D562DAQGzY0lHz4HOlg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732024869099?e=1743343200&v=beta&t=GPZZETLPlLABSqEx0LUsDsCJpKCiYvyZ-xCX4LNZS2k",
      alt: "Data Structures and Algorithms using javascript",
      description: "Data Structures and Algorithms using JavaScript : FreeCodeCamp",
    },
    {
      src: "images/hallofframesImages/mecpo2023.jpg",
      alt: "mecpo 2023",
      description: "Gyan Mitra 2023 : Mepco Schlenk Engineering College",
    },
    {
      src: "images/hallofframesImages/mechtronics.png",
      alt: "nptel 51% in mechtronics",
      description: "51% in Mechtronics : NPTEL",
    },
    {
      src: "images/hallofframesImages/tce1.png",
      alt: "itech hackathon 2023",
      description: "iTech Hackathon 2023 : Thiagarajar College of Engineering",
    },
  ];

  let hallOfFramesHTML = `
    <div class="hallofframes-container">
        <h2 class="hallofframes-title">Hall Of Frames</h2>
        <div class="gallery" style="display: flex; flex-wrap: wrap; gap: 16px;">
            ${certificates
              .map(
                (certificate) => `
                <div class="gallery-item" style="flex: 1 1 calc(33.333% - 16px); box-sizing: border-box;">
                    <img src="${certificate.src}" alt="${certificate.alt}" class="gallery-image" style="width: 100%; height: auto;">
                    <p class="gallery-description">${certificate.description}</p>
                </div>
              `
              )
              .join("")}
        </div>
    </div>
  `;

  content.innerHTML = hallOfFramesHTML;
}
