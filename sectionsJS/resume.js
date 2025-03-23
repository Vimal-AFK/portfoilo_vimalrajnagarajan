function resume() {
  const content = document.getElementById("content");

  let resumeHTML = `
    <div class="resume-container">
        <h2 class="resume-title">My Resume</h2>
        <a href="files/resume.pdf" download class="resume-download">Download Resume</a>
    </div>
  `;

  content.innerHTML = resumeHTML;
}
