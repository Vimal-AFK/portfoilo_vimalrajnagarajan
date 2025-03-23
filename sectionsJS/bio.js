function bio() {
    const content = document.getElementById("content");

    let bioHTML = `
    <div class="fun-container">
        <div class="fun-bio">
            <h2 class="bio-title"><p id="hand-shake">👋</p> Hey there! I'm <span class="highlight">Vimal</span></h2>
            <table class="bio-table">
                <tr>
                    <td class="bio-label">🎂 Born on:</td>
                    <td class="bio-value">August 13, 2005 <br> (Yes, I'm timeless!)</td>
                </tr>
                <tr>
                    <td class="bio-label">🏫 Degree :</td>
                    <td class="bio-value"> 2nd ECE @ VCET madurai <br> (Survived exams like a ninja 🥷)</td>
                </tr>
                <tr>
                    <td class="bio-label">🎮 Hobbies:</td>
                    <td class="bio-value"> Bot Making , Coding, Watching Anime, Playing Games </td>
                </tr>
                <tr>
                    <td class="bio-label">🚀 Interests:</td>
                    <td class="bio-value">AI, Machine Learning, Web Development and Robotics </td>
                </tr>
            </table>
            <div class="bio-animation">
                <span>💻</span> <span>⚡</span> <span>🎨</span> <span>🕹️</span> <span>🚀</span>
            </div>
            <div class="bio-footer">
                <p>📌 Fun Fact: I am Spiderman</p>
            </div>
        </div>
    </div>
    `;

    content.innerHTML = bioHTML;
}
