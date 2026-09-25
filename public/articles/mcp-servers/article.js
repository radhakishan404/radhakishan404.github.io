(() => {
  const status = document.getElementById("copy-status");
  const copyButtons = [
    document.getElementById("copy-links"),
    document.getElementById("copy-config"),
    document.getElementById("copy-prompt"),
  ].filter(Boolean);
  if (!navigator.clipboard || !window.isSecureContext) return;
  copyButtons.forEach((button) => {
    button.hidden = false;
    button.addEventListener("click", async () => {
      const original = button.textContent;
      let text = "";
      if (button.id === "copy-prompt") {
        text = document.getElementById("starter-prompt").textContent;
      } else if (button.id === "copy-config") {
        text = document.getElementById("starter-config").textContent.trim();
      } else {
        text = Array.from(document.querySelectorAll(".repo-card")).map((card) =>
          card.querySelector(".rank").textContent + " " + card.querySelector("h2").textContent + "\n" + card.querySelector(".owner a").href
        ).join("\n\n");
      }
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "Copied!";
        if (button.id === "copy-links") status.textContent = "All 10 official links copied.";
        else if (button.id === "copy-config") status.textContent = "Claude Code MCP commands copied.";
        else status.textContent = "Starter prompt copied.";
      } catch {
        button.textContent = "Copy unavailable";
        status.textContent = "Your browser blocked copying. You can select the text or open the links directly.";
      }
      window.setTimeout(() => { button.textContent = original; }, 2500);
    });
  });
})();
