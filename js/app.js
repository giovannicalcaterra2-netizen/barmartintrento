const content = window.BAR_MARTIN_CONTENT || { events: [], menu: [] };
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle?.addEventListener('click', () => navMenu.classList.toggle('open'));
navMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navMenu.classList.remove('open')));

const eventsGrid = document.getElementById('eventsGrid');
if (eventsGrid) {
  eventsGrid.innerHTML = content.events.map(event => `
    <article class="event-card reveal">
      <div>
        <span class="event-date">${event.date}</span>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
      </div>
      <div class="event-bottom">
        <span>${event.time}</span>
        <a href="https://wa.me/393290773833?text=Ciao%20Bar%20Martin%2C%20vorrei%20info%20su%20${encodeURIComponent(event.title)}" target="_blank" rel="noopener">${event.cta}</a>
      </div>
    </article>
  `).join('');
}

const menuPills = document.getElementById('menuPills');
const menuSections = document.getElementById('menuSections');
if (menuPills && menuSections) {
  menuPills.innerHTML = content.menu.map(section => `<a href="#${slug(section.category)}">${section.category}</a>`).join('');
  menuSections.innerHTML = content.menu.map(section => `
    <article class="menu-category reveal" id="${slug(section.category)}">
      <div class="menu-category-head">
        <h2>${section.category}</h2>
        <a href="#top">Su</a>
      </div>
      <div class="menu-items">
        ${section.items.map(item => `
          <div class="menu-item">
            <div>
              <strong>${item.name}</strong>
              ${item.note ? `<small>${item.note}</small>` : ''}
            </div>
            <span>${item.price}</span>
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');
}

function slug(value) {
  return value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 }) : null;

document.querySelectorAll('.reveal').forEach(el => {
  if (observer) observer.observe(el);
  else el.classList.add('visible');
});
