const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const updateToggleButtonText = () => {
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '라이트 모드로 보기';
    } else {
        themeToggleBtn.textContent = '다크 모드로 보기';
    }
};

// Theme Logic
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
} else {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
}

// 초기 버튼 텍스트 설정
updateToggleButtonText();

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    let theme = 'light-mode';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
    }
    localStorage.setItem('theme', theme);
    updateToggleButtonText();
});

// Smooth Scroll for Internal Links (Optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});