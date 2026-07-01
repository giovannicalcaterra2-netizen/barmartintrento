# Bar Martin AI Site — Preview operativa

Questa cartella contiene una prima preview statica del nuovo sito Bar Martin, pensata per essere modificabile via prompt e pubblicabile solo dopo approvazione.

## Come aprire la preview

Apri `index.html` nel browser.

Il sito non usa build, non usa librerie esterne pesanti e funziona come static site.

## Struttura

- `index.html`: landing page unica, responsive.
- `css/styles.css`: identità visuale e layout.
- `js/content.js`: contenuti usati dalla preview senza server locale.
- `js/app.js`: render eventi/menu, tabs e animazioni.
- `data/events.json`: archivio eventi, utile per futuro CMS/AI.
- `data/menu.json`: archivio menu, utile per futuro CMS/AI.
- `ai/`: istruzioni per creare il GPT/agent.
- `social/`: standard grafici e prompt social.
- `graphics/`: template HTML esportabili come PNG via screenshot.
- `docs/`: roadmap, deploy e flusso operativo.

## Principio operativo

Prompt Giovanni → modifica contenuti/codice → preview → approvazione → pubblicazione.

Non pubblicare mai direttamente senza preview approvata.
