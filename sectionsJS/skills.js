function skills() {
  const skills = [
    // Web Development
    [
      "HTML",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      95,
    ],
    [
      "CSS",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      90,
    ],
    [
      "JavaScript",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      90,
    ],
    [
      "React",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      60,
    ],
    [
      "Bootstrap",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      85,
    ],
    [
      "Django",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      85,
    ],
    [
      "Flask",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      70,
    ],
    [
      "SQL",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      85,
    ],
    [
      "SQLite",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      80,
    ],
    [
      "PostgreSQL",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      80,
    ],
    [
      "MongoDB",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      75,
    ],

    // Programming Languages
    [
      "Python",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      90,
    ],
    [
      "Java",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      85,
    ],
    [
      "C++",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      80,
    ],

    // Others
    [
      "Arduino",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
      70,
    ],
    [
      "Blender",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
      65,
    ],
    [
      "Raspberry Pi",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
      75,
    ],
    [
      "TensorFlow",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      75,
    ],
  ];

  function skillsList(filteredSkills) {
    let skillHTML = "";
    for (let i = 0; i < filteredSkills.length; i++) {
      const level =
        filteredSkills[i][2] >= 80
          ? "Expert"
          : filteredSkills[i][2] >= 60
          ? "Intermediate"
          : "Beginner";

      skillHTML += `
                <div class="card" style="width: 150px;
                  height: 200px;
                  position: relative;
                  margin: 20px;">
                    <div class="card-inner">
                        <div class="card-front">
                            <img id="skill-logo" src="${filteredSkills[i][1]}" style="max-width: 100px; max-height: 100px;" alt="${filteredSkills[i][0]}">
                        </div>
                        <div class="card-back">
                            <img src="${filteredSkills[i][1]}" alt="${filteredSkills[i][0]}" class="skill-back-img">
                            <p style="font-size: 1.2em; font-weight: bold;">${filteredSkills[i][0]}</p>
                            <p>Proficiency:</p>
                            <div style="position: relative; width: 80px; height: 80px; margin: 10px auto;">
                                <svg width="80" height="80">
                                    <circle cx="40" cy="40" r="35" stroke="#e0e0e0" stroke-width="10" fill="none"></circle>
                                    <circle cx="40" cy="40" r="35" stroke="#76c7c0" stroke-width="10" fill="none" 
                                        stroke-dasharray="${2 * Math.PI * 35}" 
                                        stroke-dashoffset="${2 * Math.PI * 35 - (filteredSkills[i][2] / 100) * (2 * Math.PI * 35)}" 
                                        style="transform: rotate(-90deg); transform-origin: 50% 50%;"></circle>
                                </svg>
                                <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 1em; font-weight: bold;">
                                    ${filteredSkills[i][2]}%
                                </div>
                            </div>
                            <span style="display: inline-block; margin-top: 10px; padding: 5px 10px; background-color: ${
                              level === "Expert"
                                ? "#4caf50"
                                : level === "Intermediate"
                                ? "#ff9800"
                                : "#f44336"
                            }; color: white; border-radius: 5px; font-size: 0.9em;">${level}</span>
                        </div>
                    </div>
                </div>
            `;
    }
    return skillHTML;
  }

  const applyOneTimeFlip = () => {
    const cards = document.querySelectorAll(".card-inner");
    cards.forEach((card) => {
      card.classList.add("flip-once");
    });
    setTimeout(() => {
      cards.forEach((card) => {
        card.classList.remove("flip-once");
      });
    }, 1000);
  };

  function renderSkills(filteredSkills = skills) {
    const content = document.getElementById("content");
    content.innerHTML = `
        <div class="card-container">
            ${skillsList(filteredSkills)}
        </div>
    `;

    const applySlowMotionEffect = () => {
        const cards = document.querySelectorAll(".card");
        cards.forEach((card) => {
            card.classList.remove("visible");
            card.classList.add("hidden");
        });
        setTimeout(() => {
            cards.forEach((card) => {
                card.classList.remove("hidden");
                card.classList.add("visible");
            });
        }, 50);
    };

    applySlowMotionEffect();
    applyOneTimeFlip();
  }

  renderSkills();
}


