let screen = document.querySelector(".screen");
let fullBtn = document.querySelectorAll(".fullScr");
let content = document.querySelector("#content");

function fullScr() {
  let screen = document.querySelector(".screen");
  let fullScrButton = document.querySelector(".fullScr");
  if (screen.classList.contains("active")) {
    screen.classList.remove("active");
    fullScrButton.innerHTML = "&#8249;";
  } else {
    screen.classList.add("active");
    fullScrButton.innerHTML = "&#8249;";
  }
}

function screenFunction(button) {
  let screen = document.querySelector(".screen");
  if (window.innerWidth <= 768) {
    screen.classList.add("active");
  }
  if (button === "skills") {
    skills();
  } else if (button === "projects") {
    projects();
  } else if (button === "bio") {
    bio();
  } else if (button === "contact") {
    contact();
  } else if (button === "experience") {
    experience();
  } else if (button === "tools") {
    tools();
  } else if (button === "robots") {
    robots();
  } else if (button === "resume") {
    resume();
  } else if (button === "hallofframes") {
    hallOfFrames();
  } else if (button === "freelancing") {
    freelancing();
  }
}

function toggleDescription() {
  if (window.innerWidth > 768) return;
  const descDiv = document.querySelector(".descDIV");
  const toggleIcon = document.querySelector(".toggle-desc-icon");

  if (descDiv.classList.contains("show")) {
    descDiv.classList.remove("show");
    descDiv.classList.add("hide");
    setTimeout(() => {
      descDiv.style.display = "none";
    }, 300);
    toggleIcon.innerHTML = "&#x25BC;";
  } else {
    descDiv.style.display = "flex";
    descDiv.classList.remove("hide");
    descDiv.classList.add("show");
    toggleIcon.innerHTML = "&#x25B2;";
  }
}

const quotes = [
  "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing. – Pelé",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "It always seems impossible until it’s done. – Nelson Mandela",
  "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
  "Strength does not come from winning. Your struggles develop your strengths. – Arnold Schwarzenegger",
  "When you feel like quitting, think about why you started. – Unknown",
  "Tough times never last, but tough people do. – Robert H. Schuller",
  "Believe you can and you’re halfway there. – Theodore Roosevelt",
  "You are enough just as you are. You don’t need to prove anything to anyone. – Unknown",
  "The moment you doubt whether you can fly, you cease forever to be able to do it. – J.M. Barrie, Peter Pan",
  "You have within you right now, everything you need to deal with whatever the world can throw at you. – Brian Tracy",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
  "Growth begins when we begin to accept our own weakness. – Jean Vanier",
  "The only way to grow is to step out of your comfort zone. – Unknown",
  "Change your thoughts and you change your world. – Norman Vincent Peale",
  "Every accomplishment starts with the decision to try. – John F. Kennedy",
  "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
  "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",
  "Positive thinking will let you do everything better than negative thinking will. – Zig Ziglar",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
  "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh, Alice in Wonderland",
  "Your attitude determines your direction. – Unknown",
  "Dream big and dare to fail. – Norman Vaughan",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Shoot for the moon. Even if you miss, you’ll land among the stars. – Norman Vincent Peale",
  "Don’t let small minds convince you that your dreams are too big. – Unknown",
  "Dreams don’t work unless you do. – John C. Maxwell",
  "Do what you can, with what you have, where you are. – Theodore Roosevelt",
  "Action is the foundational key to all success. – Pablo Picasso",
  "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
  "Don’t wait for the perfect moment. Take the moment and make it perfect. – Unknown",
  "Small steps every day lead to big results over time. – Unknown",
  "Fall seven times, stand up eight. – Japanese Proverb",
  "Resilience is knowing that you are the only one that has the power and the responsibility to pick yourself up. – Mary Holloway",
  "The oak fought the wind and was broken, the willow bent when it must and survived. – Robert Jordan",
  "You may encounter many defeats, but you must not be defeated. – Maya Angelou",
  "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
  "Gratitude turns what we have into enough. – Unknown",
  "The more you praise and celebrate your life, the more there is in life to celebrate. – Oprah Winfrey",
  "Happiness is not having what you want, but wanting what you have. – Rabbi Hyman Schachtel",
  "When you focus on the good, the good gets better. – Abraham Hicks",
  "Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for. – Zig Ziglar",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "The purpose of our lives is to be happy. – Dalai Lama",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. – Mahatma Gandhi",
  "Don’t count the days, make the days count. – Muhammad Ali",
  "Life is either a daring adventure or nothing at all. – Helen Keller"
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function showDefaultContent() {
  const defaultQuoteElement = document.getElementById('default-quote');
  defaultQuoteElement.textContent = getRandomQuote();
  defaultQuoteElement.style.animation = "fadeIn 1s ease-in-out";
}

document.addEventListener('DOMContentLoaded', () => {
  showDefaultContent();
  setInterval(showDefaultContent, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".follower");
  const follower2 = document.querySelector(".follower2");
  const follower3 = document.querySelector(".follower3");
  const loadingAnimation = document.getElementById("loading-animation");

  loadingAnimation.classList.add("active");

  setTimeout(() => {
    loadingAnimation.classList.remove("active");
  }, 1790);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    setTimeout(() => {
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
    }, 50);

    setTimeout(() => {
      follower2.style.left = `${e.clientX}px`;
      follower2.style.top = `${e.clientY}px`;
    }, 100);

    setTimeout(() => {
      follower3.style.left = `${e.clientX}px`;
      follower3.style.top = `${e.clientY}px`;
    }, 130);

    let bgColor = window.getComputedStyle(document.body).backgroundColor;
    let isDark = bgColor.includes("0, 0, 0");

    cursor.style.background = "rgb(0, 0, 0)";
    follower.style.background = "rgba(0, 255, 191, 0.89)";
    follower2.style.background = "rgba(34, 255, 0, 0.89)";
    follower3.style.background = "rgba(179, 255, 0, 0.89)";
  });

  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
      button.style.transform = "scale(0.95)";
      setTimeout(() => {
        button.style.transform = "scale(1)";
      }, 150);
    });
  });
});


