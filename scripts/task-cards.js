const cardDetails = [
  {
    teg: "ShopEase",
    title: "Fix Mobile Button Issue",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    deadline: "21 March 2025",
  },
  {
    teg: "CloudSync",
    title: "Add Dark Mode",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    deadline: "21 March 2025",
  },
  {
    teg: "SwiftPay",
    title: "Optimize Home page",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    deadline: "21 March 2025",
  },
  {
    teg: "Meta",
    title: "Fix Mobile Button Issue",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    deadline: "21 March 2025",
  },
  {
    teg: "Google LLC",
    title: "Integrate OpenAI API",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    deadline: "21 March 2025",
  },
  {
    teg: "Glassdoar",
    title: "Improve Job searching",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    deadline: "21 March 2025",
  },
  {
    teg: "Glassdoar",
    title: "Pranoy Doe",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    deadline: "21 March 2025",
  },
  {
    teg: "Glassdoar",
    title: "Pranoy Doe",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    deadline: "21 March 2025",
  },
  {
    teg: "Glassdoar",
    title: "Pranoy Doe",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    deadline: "21 March 2025",
  },
];

const mainContent = document.getElementById("content-main");

for (let i = 0; i < cardDetails.length; i++) {
  const div = document.createElement("div");
  div.classList.add("card", "p-4", "space-y-4", "shadow-sm");
  div.innerHTML = `
  <h2 class="text-sm font-semibold bg-white px-4 py-2 rounded-md w-fit">${cardDetails[i].teg}</h2>
  <h1 id="card6-title" class="text-xl font-semibold">${cardDetails[i].title}</h1>
  <p class="text-sm text-justify line-clamp-2 bg-white pt-2 pb-1 px-2 rounded-md">${cardDetails[0].details}</p>
  <div class="flex justify-between items-center text-sm">
  <div><span>Deadline :</span><br /><span class="font-semibold">${cardDetails[0].deadline}</span></div>
  <button id="card6-btn" class="btn">Completed</button></div>
  `;
  mainContent.appendChild(div);
}

const discoverButton = document.getElementById("discover-button");
discoverButton.addEventListener("click", () => {
  window.location.href = "./blog.html";
});
