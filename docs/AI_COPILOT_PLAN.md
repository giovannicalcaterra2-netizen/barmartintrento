# Bar Martin AI Copilot — Piano operativo

Questo documento non è parte visibile del sito. Serve per trasformare il sito Bar Martin in un sistema gestibile da prompt.

## Obiettivo

Creare un flusso in cui Giovanni scrive una richiesta in linguaggio naturale, ottiene una preview del sito o dei contenuti social, controlla il risultato e approva la pubblicazione.

Flusso ideale:

1. Giovanni scrive il prompt.
2. Il Copilot interpreta la richiesta.
3. Il Copilot modifica solo i file necessari.
4. Viene generata una preview.
5. Giovanni controlla e approva.
6. Solo dopo l'approvazione, le modifiche vengono pubblicate.

## Regola fondamentale

Mai pubblicare direttamente senza approvazione umana.

Ogni modifica deve passare da:

Prompt -> modifica -> preview -> approvazione -> pubblicazione.

## Cosa può modificare il Copilot

- testi della home;
- eventi;
- menu;
- foto e gallery;
- contatti e orari;
- link Instagram o prenotazione;
- grafiche social e caption;
- file HTML/CSS/JS del sito.

## Cosa non deve fare

- non inventare eventi non confermati;
- non cambiare prezzi senza richiesta esplicita;
- non pubblicare promozioni non approvate;
- non inserire chiavi API, password o dati privati nel repository pubblico;
- non usare frasi tipo “generato con AI” nel sito o nelle grafiche.

## Modalità di lavoro consigliata

### Fase 1 — Prompt manuale con ChatGPT

Giovanni chiede modifiche a ChatGPT. ChatGPT modifica il repository GitHub e Giovanni controlla la preview.

Esempi:

- “Aggiungi un evento karaoke venerdì alle 22.”
- “Togli lo speed dating dalla home.”
- “Metti in evidenza le feste di laurea.”
- “Crea una grafica Instagram per una serata latina.”

### Fase 2 — Repository strutturato

Separare sempre di più contenuti e layout:

- `index.html` per struttura home;
- `menu.html` per menu;
- `js/content.js` per eventi e menu;
- `css/martin.css` e `css/assets.css` per stile;
- `images/` per logo e foto;
- `docs/` per istruzioni interne.

### Fase 3 — Preview automatica

Ogni modifica dovrebbe produrre una preview separata prima della pubblicazione. La soluzione più sicura è lavorare con branch o pull request.

Flusso:

1. crea branch `preview/nome-modifica`;
2. applica modifiche;
3. controlla preview;
4. se approvata, merge su `main`;
5. GitHub Pages pubblica la nuova versione.

### Fase 4 — Copilot avanzato

Quando il sistema è stabile, si può costruire un backend che riceve comandi tipo:

- `update_event`
- `update_menu_item`
- `update_home_copy`
- `generate_social_caption`
- `create_social_brief`
- `publish_after_approval`

Il backend deve sempre distinguere tra azioni di preview e azioni di pubblicazione.

## Comandi prompt consigliati

### Modifica sito

“Modifica il sito Bar Martin mettendo in evidenza [cosa], senza cambiare prezzi o orari. Fammi prima un riepilogo delle modifiche.”

### Evento

“Aggiungi questo evento alla sezione eventi: [nome, data, ora, descrizione, CTA]. Mantieni tono breve, chiaro e commerciale.”

### Menu

“Aggiorna il menu: [voce, prezzo, categoria]. Non modificare altre voci.”

### Gallery

“Sostituisci la foto [nome file] con [nuovo file]. Mantieni layout Instagram compatto.”

### Social

“Crea una grafica e una caption per [evento/offerta], target studenti e giovani adulti a Trento, stile Bar Martin.”

## Standard di approvazione

Prima di pubblicare, controllare sempre:

- il sito si vede bene da telefono;
- non ci sono frasi tecniche o interne;
- le CTA sono chiare;
- i prezzi sono corretti;
- le immagini non sono tagliate male;
- Instagram e telefono funzionano;
- non ci sono segreti o dati privati nel repository.
