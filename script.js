// Mobile menu toggle
const menuBtn = document.getElementById('menuToggle');
const navUL = document.querySelector('nav ul');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    if (navUL.style.display === 'flex') {
      navUL.style.display = '';
    } else {
      navUL.style.display = 'flex';
      navUL.style.flexDirection = 'column';
      navUL.style.gap = '8px';
      navUL.style.background = 'var(--card)';
      navUL.style.padding = '10px';
      navUL.style.position = 'absolute';
      navUL.style.right = '16px';
      navUL.style.top = '68px';
      navUL.style.borderRadius = '10px';
    }
  });

  navUL.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      if (window.innerWidth < 900) navUL.style.display = '';
    })
  );
}

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();
