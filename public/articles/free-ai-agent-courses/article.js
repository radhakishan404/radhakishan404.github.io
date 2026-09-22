const status = document.getElementById("copy-status");
const courses = [...document.querySelectorAll(".course-card")].map((card) => ({
  title: card.querySelector("h3").textContent,
  url: card.querySelector(".visit").href
}));

async function copy(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    status.textContent = message;
  } catch {
    status.textContent = "Copy is unavailable here. Select the text and copy it manually.";
  }
}

document.getElementById("copy-links").addEventListener("click", () => {
  copy(courses.map(({ title, url }) => `${title}\n${url}`).join("\n\n"), "All 10 official links copied.");
});

document.getElementById("copy-prompt").addEventListener("click", () => {
  copy(document.getElementById("starter-prompt").textContent, "First-project brief copied.");
});
