// Scroll-to-top button
const btn = document.createElement('button');
btn.innerText = "↑";
btn.id = "scrollTop";
btn.style.cssText = "position:fixed;bottom:30px;right:30px;padding:10px;border:none;border-radius:50%;background:#00bfff;color:#fff;font-size:18px;cursor:pointer;display:none;z-index:1000;";
document.body.appendChild(btn);

window.onscroll = () => {
  btn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Theme toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

