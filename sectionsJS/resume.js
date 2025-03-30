function resume() {
  const content = document.getElementById("content");

  let resumeHTML = `
    <div class="resume-container">
        <h2 class="resume-title">My Resume</h2>
        <a href="https://drive.google.com/file/d/1hMqY75BYvclgCiz86GPqSQj6ckY3aTl9/view?usp=sharing" class="resume-download">Download Resume</a>
    </div>
  `;

  content.innerHTML = resumeHTML;
}
