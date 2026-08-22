"use strict";

const VERSION = "1.0.0";
const LAUNCH_CMD = "npm start";

const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("nexus-theme");
if (savedTheme === "light") document.body.classList.add("light");

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "nexus-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
});

const mobileMenu = document.getElementById("mobileMenu");
const mobileNav = document.getElementById("mobileNav");
mobileMenu?.addEventListener("click", () => mobileNav.classList.toggle("open"));
mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileNav.classList.remove("open"));
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const answer = item.querySelector(".faq-answer");
    const isOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item.open").forEach((other) => {
      if (other !== item) {
        other.classList.remove("open");
        other.querySelector(".faq-answer").style.maxHeight = null;
      }
    });
    if (isOpen) {
      item.classList.remove("open");
      answer.style.maxHeight = null;
    } else {
      item.classList.add("open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

async function copyText(text, statusEl, okMessage) {
  try {
    await navigator.clipboard.writeText(text);
    if (statusEl) statusEl.textContent = okMessage;
  } catch {
    if (statusEl) statusEl.textContent = `Run this in C:\\Nexus: ${text}`;
  }
}

const downloadStatus = document.getElementById("downloadStatus");
document.getElementById("windowsDownload")?.addEventListener("click", async () => {
  await copyText(
    LAUNCH_CMD,
    downloadStatus,
    `Copied “${LAUNCH_CMD}”. In C:\\Nexus run it, or double-click start.bat.`
  );
});

document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const original = btn.textContent;
    await copyText(btn.dataset.copy, downloadStatus, `Copied ${btn.dataset.copy}`);
    btn.textContent = "Copied";
    setTimeout(() => {
      btn.textContent = original;
    }, 1600);
  });
});

document.getElementById("batDownload")?.addEventListener("click", () => {
  if (downloadStatus) {
    downloadStatus.textContent =
      "If the browser blocks the file, use C:\\Nexus\\start.bat instead.";
  }
});

console.log(`NEXUS Landing Page v${VERSION}`);
