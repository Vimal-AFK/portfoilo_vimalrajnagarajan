function robots() {
  const content = document.getElementById("content");

  let robotsHTML = `
    <div class="robots-container">
        <h2 class="robots-title">Robots I've Built</h2>
        <div class="robot-item">
            <img src="images/robotImages/linefollower1.jpg" alt="Line Following Robot" class="robot-image">
            <p class="robot-description">A line-following robot: Its designed for precision and speed.</p>
        </div>
        <div class="robot-item">
            <img src="images/robotImages/robosoccer.png" alt="Robot Soccer" class="robot-image">
            <p class="robot-description">Robot Soccer: A soccer-playing robot with advanced movement and control.</p>
        </div>
        <div class="robot-item">
            <img src="images/robotImages/bluetoothcar.png" alt="Bluetooth Car" class="robot-image">
            <p class="robot-description">Bluetooth Car: A car controlled via Bluetooth for remote operations.</p>
        </div>
        <div class="robot-item">
            <img src="images/robotImages/roborace.png" alt="RC Racing Bot" class="robot-image">
            <p class="robot-description">RC Racing Bot: A racing bot currently under development for high-speed competitions.</p>
        </div>
    </div>
  `;

  content.innerHTML = robotsHTML;
}
