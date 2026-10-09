(() => {
  const status = document.getElementById("copy-status");
  if (!navigator.clipboard || !window.isSecureContext) return;
  document.querySelectorAll("button[data-copy]").forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", async () => {
      const original = button.textContent;
      const ids = button.dataset.copy.split(",");
      const text = ids.map((id) => document.getElementById(id).textContent.trim()).join("\n\n---\n\n");
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied!";
        status.textContent = ids.length > 1 ? "All three audit prompts copied." : "Copied.";
      } catch {
        button.textContent = "Copy unavailable";
        status.textContent = "Your browser blocked copying. Select the text and copy it manually.";
      }
      window.setTimeout(() => { button.textContent = original; }, 2500);
    });
  });
})();
