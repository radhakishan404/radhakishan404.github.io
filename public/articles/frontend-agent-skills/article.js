(() => {
  const status = document.getElementById("copy-status");
  const copyButtons = [document.getElementById("copy-links"), document.getElementById("copy-prompt")];
  if (!navigator.clipboard || !window.isSecureContext) return;
  copyButtons.forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", async () => {
      const original = button.textContent;
      const text = button.id === "copy-prompt"
        ? document.getElementById("starter-prompt").textContent
        : Array.from(document.querySelectorAll(".repo-card")).map((card) =>
          card.querySelector(".rank").textContent + " " + card.querySelector("h2").textContent + "\n" + card.querySelector(".owner a").href
        ).join("\n\n");
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied!";
        status.textContent = button.id === "copy-links" ? "All 10 GitHub links copied." : "Starter prompt copied.";
      } catch {
        button.textContent = "Copy unavailable";
        status.textContent = "Your browser blocked copying. You can select the text or open the repository links directly.";
      }
      window.setTimeout(() => { button.textContent = original; }, 2500);
    });
  });
})();
