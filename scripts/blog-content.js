const homeButton = document.getElementById("home-button");

homeButton.addEventListener("click", () => {
  window.location.href = "./index.html";
});

const blogContents = [
  {
    q: "What are the different ways to select an element in the DOM?",
    a: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
  {
    q: "What are the different ways to select an element in the DOM?",
    a: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  },
  {
    q: "What are the different ways to select an element in the DOM?",
    a: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate..",
  },
];

const blogSection = document.getElementById("blog-section");

for (let i = 0; i < blogContents.length; i++) {
  const div = document.createElement("div");
  div.classList.add(
    "card",
    "p-4",
    "space-y-4",
    "shadow-sm",
    "border-b-2",
    "border-blue-100"
  );
  div.innerHTML = `
    <h1 class="text-lg font-semibold">Question - ${i + 1} : ${
    blogContents[i].q
  }</h1>
    <p class=" text-justify bg-[#ffffffaa] p-4 rounded-md">${
      blogContents[i].a
    }</p>
  `;
  blogSection.appendChild(div);
}
