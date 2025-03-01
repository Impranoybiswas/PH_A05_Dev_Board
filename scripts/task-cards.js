const cardDetails = [
  {
    teg: "ShopEase",
    title: "Fix Mobile Button Issue",
    details:
      "Buttons are an integral component of every smartphone. You practically cannot do without them in day-to-day operations. While today's devices have fewer buttons than the old-time featured phones, the mini widget coordinates essential device operations. And when used over time, they either become weak or damaged.",
    deadline: "22 May 2025",
  },
  {
    teg: "CloudSync",
    title: "Add Dark Mode",
    details:
      "Install Dark Reader browser extension. Configure the dark theme: brightness, contrast and sepia. Enable for all websites or particular domains. Use the following official links",
    deadline: "25 March 2025",
  },
  {
    teg: "SwiftPay",
    title: "Optimize Home page",
    details:
      "Search engines prioritize high-quality content and interpret other websites sharing your content as a form of authority.Search engines prioritize high-quality content and interpret other websites sharing your content as a form of authority.",
    deadline: "22 February 2025",
  },
  {
    teg: "Meta",
    title: "Create Emoji Support",
    details:
      "In Meta Bussiness, we are building a new way to work, play and create together. We are building a new way to work, play and create together. We are building a new way to work, play and create together.",
    deadline: "21 March 2025",
  },
  {
    teg: "Google LLC",
    title: "Integrate OpenAI API",
    details:
      "Google Integrate OpenAI API to provide chatbot support to users. Google Integrate OpenAI API to provide chatbot support to users. Google Integrate OpenAI API to provide chatbot support to users. ",
    deadline: "21 May 2025",
  },
  {
    teg: "Glassdoar",
    title: "Improve Job searching",
    details:
      "Improve Job searching and application process for job seekers. Improve Job searching and application process for job seekers. Improve Job searching and application process for job seekers.",
    deadline: "13 Augest 2025",
  },
  {
    teg: "Instagram",
    title: "Create a Post Template",
    details:
      "Instagram Create a Post Template. instagram always try to make a Post Template. ",
    deadline: "14 January 2025",
  },
  {
    teg: "Google LLC",
    title: "Integrate Data Survery",
    details:
      "Google Integrate Data Survery to provide chatbot support to users. Google Integrate Data Survery to provide chatbot support to users. Google Integrate Data Survery to provide chatbot support to users. ",
    deadline: "21 May 2025",
  },
  {
    teg: "Twitter",
    title: "Create a Tweet Template",
    details:
      "Twitter Make a Tweet Template. Twitter is now making a Tweet Template. ",
    deadline: "21 March 2025",
  },
];

const mainContent = document.getElementById("content-main");

for (let i = 0; i < cardDetails.length; i++) {
  const div = document.createElement("div");
  div.classList.add("card", "task-card", "p-4", "space-y-4", "shadow-sm");
  div.innerHTML = `
  <h2 class="text-sm font-semibold bg-white px-4 py-2 rounded-md w-fit">${cardDetails[i].teg}</h2>
  <h1 class="text-xl font-semibold">${cardDetails[i].title}</h1>
  <p class="text-sm text-justify line-clamp-2 bg-white pt-2 pb-1 px-2 rounded-md">${cardDetails[i].details}</p>
  <div class="flex justify-between items-center text-sm">
  <div><span>Deadline :</span><br /><span class="font-semibold">${cardDetails[i].deadline}</span></div>
  <button class="btn">Completed</button></div>
  `;
  mainContent.appendChild(div);
}

const discoverButton = document.getElementById("discover-button");
discoverButton.addEventListener("click", () => {
  window.location.href = "./blog.html";
});
