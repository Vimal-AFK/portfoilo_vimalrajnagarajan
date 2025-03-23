function experience() {
  const content = document.getElementById("content");

  let experienceHTML = `
    <div class="experience-container">
        <h2 class="experience-title">My Experience</h2>
        <div class="experience-item">
            <img src="../images/experienceImage/aptitudeIMG1.jpg" alt="Experience 3" class="experience-image">
            <p class="experience-description">Worked on a college placement testing system as part of a team, deploying it in a local system to ensure malpractice-free testing.</p>
        </div>
    </div>
  `;

  content.innerHTML = experienceHTML;
}
