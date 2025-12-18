# Gestore di Spese Personali (Web App)

Questo progetto consiste nella realizzazione di una web app per tracciare le spese quotidiane , permettendo l'inserimento, la visualizzazione e la gestione dinamica dei dati4. L'applicazione è sviluppata esclusivamente con tecnologie web standard (HTML, CSS e JavaScript), senza l'ausilio di framework esterni5.

## 🎯 Obiettivo del Progetto 6
L'applicazione permette all'utente di:
* Inserire nuove spese.
* Visualizzare l'elenco delle spese inserite.
* Calcolare e visualizzare il totale complessivo.
* Eliminare singole spese dalla lista11.
* Aggiornare automaticamente i dati nella pagina senza ricaricarla.

## 🛠️ Tecnologie Utilizzate
* **HTML**: Per la struttura della pagina.
* **CSS**: Per lo stile, il layout e il design responsive.
* **JavaScript**: Per la logica applicativa, la gestione degli eventi e la manipolazione del DOM.

## 📂 Struttura dei File
Il progetto segue questa organizzazione:
* `index.html`: Struttura dell'interfaccia.
* `style.css`: Foglio di stile.
* `script.js`: Logica di funzionamento.

## 💻 Funzionalità e Requisiti

### Interfaccia Utente (HTML)
* **Sezione Inserimento**: Input per descrizione (testo) e importo (numero) con bottone di aggiunta.
* **Elenco Spese**: Ogni spesa mostra descrizione, importo e un bottone "Elimina".
* **Riepilogo**: Un `div` dedicato che evidenzia il totale delle spese.

### Logica Applicativa (JavaScript)
* **Gestione Dati**: Utilizzo di un array di oggetti per salvare le spese.
* **Validazione**: Controllo che i campi non siano vuoti prima del salvataggio.
* **Dinamismo**: Aggiornamento automatico del totale e della lista a ogni inserimento o eliminazione.
* **Eventi**: Utilizzo di `addEventListener` o `onclick` e selettori del DOM (`getElementById`/`querySelector`).

## 🚫 Vincoli
* Vietato l'uso di librerie esterne o framework (es. Bootstrap, React).
* Vietato l'uso di `alert()` per mostrare i dati.

## 🌟 Estensioni Facoltative (Bonus)
* Salvataggio persistente in `localStorage`.
* Gestione di categorie (cibo, trasporti, ecc.) e filtri.
* Messaggio "Nessuna spesa inserita" quando la lista è vuota.
* Pulsante di "Reset" per ripulire l'intera lista.
