// 主题切换功能
const themeToggle = document.getElementById("theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// 检查本地存储中的主题设置
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.body.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    themeToggle.checked = true;
  }
} else if (prefersDarkScheme.matches) {
  document.body.setAttribute("data-theme", "dark");
  themeToggle.checked = true;
}

// 主题切换事件监听
themeToggle.addEventListener("change", function () {
  if (this.checked) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});

// 添加页面滚动动画
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });

  // 观察所有项目卡片
  document.querySelectorAll(".project-card").forEach((card) => {
    observer.observe(card);
  });
});
