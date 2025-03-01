const homeButton = document.getElementById("home-button");

homeButton.addEventListener("click", () => {
  window.location.href = "./index.html";
});

const blogContents = [
  {
    q: "What are the different ways to select an element in the DOM?",
    a: "There are several ways to selecting elements in the DOM : <br>1. querySelector <br>2. querySelectorAll <br>3. getElementById <br>4. getElementsByClassName <br>5. getElementsByTagName",
  },
  {
    q: "What is the difference between innerHTML, innerText, and textContent ?",
    a: "When you use the innerHTML property, it reads both the HTML markup and the text content of the element. This means when you use it to set the content of elements, you can include HTML tags, and the browser will render them correctly.<br><b>Example</b> : <i>&lt;body&gt;&lt;div&gt;&lt;h2&gt;Programming Hero&lt;/h2&gt;&lt;/div&gt;&lt;/body&gt; is a teg Then div.innerHTML output is &lt;h2&gt;Programming Hero&lt;/h2&gt;</i><br><br>This property focuses on the rendered text content. When you use innerText to read the content of an element, it returns the text as it appears on screen. It ignores HTML tags. And it also does not include text that is hidden with CSS styles.<br><b>Example</b><i> : &lt;body&gt;&lt;div&gt;&lt;h2&gt;Programming Hero&lt;/h2&gt;&lt;/div&gt;&lt;/body&gt; is a teg Then div.innerText output is Programming Hero</i><br><br>The textContent property also ignores all HTML tags and returns only the text. Whiles innerText reads text as it is rendered on screen, textContent reads text as it is in the markup. It also returns all text, whether it's rendered on screen or not.<br><b>Example</b><i> : &lt;body&gt;&lt;div&gt;&lt;h2&gt;Programming Hero&lt;/h2&gt;&lt;/div&gt;&lt;/body&gt; is a teg Then div.textContent output is Programming Hero</i>",
  },
  {
    q: "What is event delegation in the DOM?",
    a: "Event Delegation হল উপর থেকে Button এর Event এর জন্য একটি লিস্ট এর মত তৈরি করা যাতে বেশি eventListener ব্যবহার করতে না হয়",
  },
  {
    q: "What is event bubbling in the DOM?",
    a: "Event Bubbling হল ভিতরের  বাটন গুলার সাথে তার পেরেন্ট এর সাথে Event যুক্ত করে একটা গাছের মত বানানো, যেখানে গাছের শীর্ষে থাকবে বাটন এর eventListener.",
  },
  {
    q: "How do you create, add, and remove elements using JavaScript?",
    a: "There is several method to create, add, and remove elements using JavaScript : <br>01. To Create :  createElement(), setAttribute() <br>02. To Add : append(), appendChild(), prepend(), insertBefore()<br>03. To Remove : remove(), removeChild()",
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
