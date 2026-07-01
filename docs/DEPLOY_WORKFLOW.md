# Workflow deploy consigliato

## Opzione consigliata iniziale

GitHub Pages o Netlify.

## Flusso

1. Giovanni scrive prompt.
2. AI modifica file locali o repository.
3. Viene creata una preview.
4. Giovanni approva.
5. Commit su main.
6. Deploy automatico.
7. Dominio barmartin.it punta al nuovo sito.

## Perché non pubblicare direttamente

Il sito contiene prezzi, eventi, orari e promesse commerciali. Un errore potrebbe creare problemi col cliente. Serve sempre un passaggio di approvazione.

## Struttura repository consigliata

```txt
bar-martin-site/
  index.html
  css/styles.css
  js/content.js
  js/app.js
  data/menu.json
  data/events.json
  social/
  docs/
```

## Comandi base

```bash
git init
git add .
git commit -m "Initial Bar Martin AI site preview"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```
