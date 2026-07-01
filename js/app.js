const content = window.BAR_MARTIN_CONTENT;
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('open')));

const eventsGrid = document.getElementById('eventsGrid');
if (eventsGrid) {
  eventsGrid.innerHTML = content.events.map(event => `
    <article class="event-card reveal">
      <span class="event-date">${event.date}</span>
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <div class="event-meta">
        <span>${event.time}</span>
        <span>${event.tag}</span>
      </div>
    </article>
  `).join('');
}

const menuTabs = document.getElementById('menuTabs');
const menuGrid = document.getElementById('menuGrid');
let activeCategory = 0;

function renderMenu() {
  if (!menuTabs || !menuGrid) return;
  menuTabs.innerHTML = content.menu.map((section, index) => `
    <button class="menu-tab ${index === activeCategory ? 'active' : ''}" data-index="${index}" role="tab" aria-selected="${index === activeCategory}">${section.category}</button>
  `).join('');

  const selected = content.menu[activeCategory];
  menuGrid.innerHTML = selected.items.map(item => `
    <div class="menu-item reveal visible">
      <div>
        <strong>${item.name}</strong>
        <small>${item.note || ''}</small>
      </div>
      <span class="price">${item.price}</span>
    </div>
  `).join('');

  menuTabs.querySelectorAll('.menu-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = Number(btn.dataset.index);
      renderMenu();
    });
  });
}
renderMenu();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
