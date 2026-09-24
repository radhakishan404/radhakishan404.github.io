(() => {
  const status = document.getElementById("copy-status");
  if (!navigator.clipboard || !window.isSecureContext) return;
  document.querySelectorAll(".copy-prompt").forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", async () => {
      const prompt = document.getElementById(button.dataset.target);
      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(prompt.textContent);
        button.textContent = "Copied";
        if (status) status.textContent = "Prompt copied. Paste it into Claude.";
      } catch {
        button.textContent = "Copy unavailable";
        if (status) status.textContent = "Select the prompt and copy it manually.";
      }
      window.setTimeout(() => { button.textContent = original; }, 2000);
    });
  });
})();
