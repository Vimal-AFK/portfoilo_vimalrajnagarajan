function freelancing() {
  const content = document.getElementById("content");

  const freelancingWorks = [
    {
      image: "images/freelancingImages/siva-web.png",
      alt: "E-commerce Website",
      description: "Custom E-commerce website for a local business."
    }
  ];

  let worksHTML = freelancingWorks
    .map(
      (work) => `
      <div class="work-item">
        <img src="${work.image}" alt="${work.alt}" class="work-image">
        <p class="work-description">${work.description}</p>
      </div>
    `
    )
    .join("");

  let freelancingHTML = `
    <div class="freelancing-container">
        <h2 class="freelancing-title">Freelancing</h2>
        <form class="freelancing-form" onsubmit="submitToWhatsApp(event)">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required><br>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email address" required><br>
            <label for="type-of-website">Type of Website:</label>
            <select id="type-of-website" name="type-of-website" required>
                <option value="" disabled selected>Select a type</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Portfolio">Portfolio</option>
                <option value="Blog">Blog</option>
                <option value="Other">Other</option>
            </select><br>
            <label for="deadline">Deadline:</label>
            <input type="date" id="deadline" name="deadline" required><br>
            <label for="budget">Budget (in USD):</label>
            <input type="number" id="budget" name="budget" placeholder="Enter your budget" min="1" required><br>
            <label for="requirements">Requirements:</label>
            <textarea id="requirements" name="requirements" placeholder="Describe your requirements" required></textarea><br>
            <button type="submit">Submit</button>
        </form>
        <h3>My Freelancing Work</h3>
        <div class="freelancing-works">
            ${worksHTML}
        </div>
    </div>
  `;

  content.innerHTML = freelancingHTML;
}

function submitToWhatsApp(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const typeOfWebsite = document.getElementById("type-of-website").value;
  const deadline = document.getElementById("deadline").value;
  const budget = document.getElementById("budget").value;
  const requirements = document.getElementById("requirements").value;

  const message = `Name: ${name}, Email: ${email}, Type of Website: ${typeOfWebsite}, Deadline: ${deadline}, Budget: $${budget}, Requirements: ${requirements}`;
  const phoneNumber = "919345667160";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.location.href = whatsappURL;
}
