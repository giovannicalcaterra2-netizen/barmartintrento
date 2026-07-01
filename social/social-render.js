function getTemplateType() {
  const el = document.querySelector('[data-template]');
  return el ? el.dataset.template : 'post';
}

function getParam(name, fallback) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name) || fallback || '';
}

function applyText(field, value) {
  document.querySelectorAll(`[data-field="${field}"]`).forEach(el => {
    el.textContent = value;
  });
}

function renderSocialTemplate() {
  const type = getTemplateType();
  const defaults = (window.BAR_MARTIN_SOCIAL_DEFAULTS && window.BAR_MARTIN_SOCIAL_DEFAULTS[type]) || {};

  const data = {
    kicker: getParam('kicker', defaults.kicker),
    title: getParam('title', defaults.title),
    subtitle: getParam('subtitle', defaults.subtitle),
    date: getParam('date', defaults.date),
    time: getParam('time', defaults.time),
    cta: getParam('cta', defaults.cta),
    badge: getParam('badge', defaults.badge),
    image: getParam('image', defaults.image)
  };

  Object.entries(data).forEach(([key, value]) => {
    if (key !== 'image') applyText(key, value);
  });

  const img = document.querySelector('[data-field="image"]');
  if (img && data.image) img.src = data.image;
}

document.addEventListener('DOMContentLoaded', renderSocialTemplate);
