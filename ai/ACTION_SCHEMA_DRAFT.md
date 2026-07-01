# Schema azioni futuro GPT / backend

Questo è uno schema concettuale per trasformare il GPT in un vero copilota con preview e pubblicazione.

## Azioni minime

### 1. create_preview
Input:
- prompt richiesta
- file modificati
- contenuti modificati

Output:
- preview_url
- diff_summary
- warnings

### 2. publish_site
Input:
- preview_id
- approval_token

Output:
- production_url
- commit_id
- published_at

### 3. generate_social_asset
Input:
- tipo: post | story | facebook | programma_settimana
- evento
- tono
- formato

Output:
- image_preview_url
- caption
- export_files

### 4. update_event
Input:
- titolo
- data
- ora
- descrizione
- prezzo
- link prenotazione
- stato: bozza | approvato | pubblicato

Output:
- evento aggiornato
- preview_url

## Regola approvazione

`publish_site` può essere chiamata solo se Giovanni ha scritto una frase esplicita tipo:
- approvo
- pubblica
- vai online
- confermo pubblicazione

Mai pubblicare dopo frasi vaghe tipo:
- sembra ok
- carino
- forse sì
