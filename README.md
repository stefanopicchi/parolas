# Parolas

App per imparare le lingue con lezioni brevi, grammatica spiegata, vocabolario e ripasso degli errori. Interfaccia in italiano, pensata per telefono e PC, installabile e utilizzabile offline.

Niente streak, XP, monete o personaggi: solo studio.

## Contenuti

| Corso | Livello | Unità | Lezioni | Schede di grammatica |
| --- | --- | --- | --- | --- |
| Inglese | A1 → A2 | 6 | 12 | 6 |
| Spagnolo | A1 → A2 | 8 | 24 | 8 |
| Francese | A1 | 2 | 4 | 4 |
| Tedesco | A1 | 2 | 4 | 3 |

Tipi di esercizio: scelta multipla, traduzione scritta, completamento, riordino delle parole e ascolto.

## Funzionalità

- **Lezioni** con obiettivi, vocaboli, esercizi e feedback immediato. Il corso di spagnolo ha 24 lezioni da 10 esercizi, pensate per alcune settimane di studio.
- **Lingua attiva**: dopo aver scelto un corso, Home, Teoria, Ripasso e Impostazioni mostrano solo quella lingua. Le altre restano nascoste finché non torni al menù iniziale con **Cambia lingua**.
- **Teoria dell'unità**: ogni unità di spagnolo si apre con una parte teorica estesa — regole, tabelle ed esempi — prima delle lezioni. La teoria è originale e in italiano.
- **Ripasso teorico** facoltativo a fine lezione, con obiettivi e parole chiave.
- **Grammatica** con spiegazioni, tabelle, esempi e una sessione di esercizi dedicata.
- **Sezione Teoria** con tutti gli argomenti di grammatica e le teorie delle unità, ricerca testuale e collegamenti alle schede.
- **Ripasso** degli esercizi sbagliati: la voce esce dalla coda quando la risposta è corretta.
- **Vocabolario**: una parola alla volta, scelta dalle lezioni del corso attivo, con traduzione in italiano o nella lingua studiata. Dopo la verifica compaiono la soluzione e una scheda dizionario; le definizioni sono in spagnolo e italiano per il corso di spagnolo.
- **Ascolto** tramite le voci del sistema (`speechSynthesis`): nessun file audio da scaricare. Gli esercizi di ascolto si possono saltare.
- **Tastiera speciale** per accenti e caratteri di spagnolo, francese e tedesco; gli accenti vengono controllati.
- **Risposte mescolate** nelle domande a scelta multipla, così la risposta corretta non è sempre la A.
- **Domande frequenti offline** per ogni lezione e argomento di grammatica.
- **Assistente AI opzionale** per domande extra, con qualunque provider compatibile OpenAI. Ha una pagina dedicata ed è raggiungibile dalla navigazione e dal fondo delle lezioni.
- **Tema chiaro, scuro o automatico** e quattro palette (Viola, Corallo, Verde, Oceano), con applicazione immediata e senza lampi bianchi all'avvio.
- **Progressi locali** salvati in `localStorage`, con **backup** esportabile e reimportabile da Impostazioni (file JSON con progressi, ripasso e impostazioni).
- **PWA**: service worker, precache e installazione su home screen o desktop da un link HTTPS (vedi *Condividere e installare su telefono*).

## Stack

- React 19 + TypeScript
- Vite 8
- React Router (HashRouter)
- `vite-plugin-pwa` (Workbox)

Tutti i contenuti sono moduli TypeScript statici: non serve un backend.

## Avvio

Requisiti: Node.js 22.12+ e npm (`.nvmrc` indica la versione usata da Cloudflare Pages).

```bash
npm install
npm run dev
```

Apri l'indirizzo mostrato da Vite (di solito `http://localhost:5173`).

### Comandi

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Server di sviluppo con HMR |
| `npm run build` | Controllo TypeScript e build di produzione in `dist/` |
| `npm run preview` | Anteprima locale della build di produzione |
| `npm run icons` | Rigenera le icone PWA in `public/icons/` |

## Condividere e installare su telefono

Parolas è una **PWA**: si installa dal browser, senza App Store o Play Store. L'unica cosa necessaria è un indirizzo **HTTPS** pubblico. Su `http://` (per esempio l'IP del PC in rete locale, `http://10.0.0.10:5173`) l'installazione non è disponibile: serve un sito pubblicato.

### Cosa mandare

**Solo il link**, nessun file o archivio. Chi lo riceve:

- **Android (Chrome)**: apre il link → menu ⋮ → *Installa app* (o *Aggiungi a schermata Home*).
- **iPhone / iPad (Safari)**: apre il link → Condividi → *Aggiungi a Home*.
- **PC (Chrome / Edge)**: icona di installazione nella barra degli indirizzi, oppure menu → *Installa Parolas*.

Subito dopo l'installazione l'app ha icona e nome propri e si apre a schermo intero, come un'app normale. Un QR code del link è comodo per farlo aprire direttamente dal telefono.

La **prima apertura deve essere online**: il service worker salva nell'app tutti i file necessari. Dalla seconda apertura Parolas funziona anche senza rete, comprese lezioni, grammatica e ripasso già presenti. L'assistente AI, invece, richiede sempre una connessione. Gli aggiornamenti si scaricano da soli alla riapertura.

### Pubblicare su GitHub e collegare Cloudflare Pages

1. **Crea il repository** su GitHub (va bene anche privato): <https://github.com/new>. Non serve caricare `node_modules` né `dist`: `.gitignore` li esclude.
2. **Carica il progetto** in uno di questi modi:
   - *GitHub Desktop*: *Add local repository* → scegli la cartella del progetto → *Publish repository*.
   - *Da terminale*, nella cartella del progetto:

     ```bash
     git init
     git add .
     git commit -m "Parolas: prima versione"
     git branch -M main
     git remote add origin https://github.com/UTENTE/parolas.git
     git push -u origin main
     ```

   - *Dal sito GitHub*: nel repository vuoto scegli *uploading an existing file* e trascina i file del progetto (non `node_modules`).
3. **Collega Cloudflare Pages**: dashboard Cloudflare → *Workers & Pages* → *Create* → *Pages* → *Connect to Git* → autorizza GitHub e scegli il repository.
4. **Impostazioni di build**:

   | Campo | Valore |
   | --- | --- |
   | Framework preset | *None* |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node.js version | `22.23.4` (già indicata in `.nvmrc`) |

5. *Save and Deploy*: dopo un paio di minuti ottieni un link `https://parolas.pages.dev` (o il nome scelto). Da quel momento ogni `git push` su `main` ricostruisce e aggiorna l'app.

Cloudflare Pages legge il file `public/_headers` incluso nella build, quindi le cache di `sw.js` e degli asset sono già corrette. Con `HashRouter` non servono regole di redirect.

### Alternativa rapida: Netlify Drop

Se non vuoi usare GitHub:

1. `npm run build`
2. Apri <https://app.netlify.com/drop>
3. Trascina la cartella **`dist`** (non il progetto intero).
4. Accedi o crea un account gratuito: ottieni un link tipo `https://parolas-nome.netlify.app`.
5. Manda quel link (o il suo QR code) a chi deve usare l'app.

Per aggiornare il sito si rifà `npm run build` e si trascina di nuovo `dist` nella sezione *Deploys*.

### Altre piattaforme

| Piattaforma | Come pubblicare | Note |
| --- | --- | --- |
| GitHub Pages | pubblica il contenuto di `dist` sul branch `gh-pages` | URL `https://utente.github.io/repo/` |
| Vercel | `npx vercel --prod` con output `dist` | login richiesto |
| Cloudflare Pages | carica direttamente `dist` con *Upload assets* | senza repository |
| Server proprio | copia `dist` in una cartella servita in HTTPS (nginx, Apache...) | serve un certificato |

Per una prova veloce senza pubblicare, si può esporre il server di sviluppo con un tunnel HTTPS (per esempio Cloudflare Tunnel o `npx localtunnel --port 5173`): il link è temporaneo e il PC deve restare acceso, quindi non è adatto all'uso quotidiano.

### Perché funziona ovunque

La build è completamente statica e usa `base: './'` con `HashRouter`:

- l'app funziona anche in una sottocartella del sito;
- non servono regole di rewrite lato server per le rotte;
- non c'è backend: i progressi restano nel browser del dispositivo.

Il file `public/_headers` imposta le cache corrette (`sw.js` e `index.html` sempre rivalidati, asset con hash in cache a lungo) su Netlify e Cloudflare Pages.

## Progressi e dati locali

Lo stato è salvato nel browser con la chiave `parolas:state:v1` (le versioni precedenti usavano `lingua:state:v1`: al primo avvio i dati vengono migrati automaticamente):

- corso attivo;
- lezioni e schede di grammatica completate, con miglior risultato e numero di tentativi;
- coda di ripasso;
- preferenze di voce, tema, palette e configurazione dell'assistente AI.

I dati restano sul dispositivo e non vengono sincronizzati. Da **Impostazioni → Dati e progressi** puoi azzerare un singolo corso o tutti i dati. Cancellare i dati del sito dal browser equivale a perdere i progressi.

### Backup e ripristino

Sempre da **Impostazioni → Dati e progressi**:

- **Scarica backup** crea un file `parolas-backup-AAAA-MM-GG.json` con corsi, lezioni, grammatica, coda di ripasso e impostazioni (tema, palette, voce e assistente). La chiave API non viene inclusa.
- **Importa backup** legge il file, chiede conferma e sostituisce i dati presenti. La chiave API già configurata sul dispositivo resta.

Il backup non è automatico: va scaricato ogni tanto e conservato dove preferisci (cloud personale, computer, chiavetta). Può essere reimportato in qualunque momento, anche su un altro telefono o browser, per riprendere da dove si era rimasti.

## Assistente AI (opzionale)

Disattivato per impostazione predefinita. Per attivarlo:

1. Vai in **Impostazioni → Assistente AI**.
2. Attiva l'interruttore.
3. Inserisci URL base, modello e chiave API di un provider compatibile con l'API OpenAI (`POST {baseUrl}/chat/completions`).
4. Salva la configurazione.

Dopo la configurazione puoi usare la pagina **Assistente** dalla navigazione principale, oppure il pannello in fondo a ogni lezione e scheda di grammatica.

Valori predefiniti: `https://api.openai.com/v1` e `gpt-4o-mini`.

Note importanti:

- La chiamata parte **direttamente dal browser** verso il provider: il provider deve consentire le richieste CORS.
- La chiave API è salvata in chiaro nel `localStorage` di quel browser. Non usarla su un dispositivo condiviso e non pubblicare mai una configurazione con chiave inclusa.
- Vengono inviati al provider il contesto della lezione e i messaggi della conversazione. Non vengono inviati i progressi.
- Se l'assistente non è configurato, restano disponibili le FAQ offline.
- Le risposte dell'AI possono contenere errori: vanno lette con spirito critico.

## Struttura del progetto

```text
src/
  components/     Componenti UI (esercizi, sessione, assistente, layout...)
  content/
    courses/      Contenuti dei quattro corsi
    glossary.ts   Definizioni dizionariali per il vocabolario spagnolo
    helpers.ts    Funzioni per definire esercizi, lezioni e argomenti
    index.ts      Registro dei corsi, ricerche, indice esercizi e vocabolario
    types.ts      Tipi dei contenuti
  lib/            Valutazione esercizi, vocabolario, tema, backup, progressi, storage, voce
  pages/          Home, corso, lezione, grammatica, vocabolario, teoria, ripasso, assistente, impostazioni
  state/          Stato globale e riduttore
  styles.css      Tema, palette, layout e componenti
scripts/
  generate-icons.mjs
public/
  icons/          Icone PWA
```

### Aggiungere contenuti

- Nuova lezione o argomento: usa `defineLesson` / `defineTopic` nel file del corso e aggiungilo all'unità corrispondente. Il corso di spagnolo è diviso in `src/content/courses/spanish/unit1.ts`…`unit8.ts`.
- Nuova unità: aggiungi `intro`, `keyPoints` e, se vuoi la teoria estesa, `theory` (sezioni con paragrafi, elenchi, tabelle ed esempi).
- Nuovo corso: crea il modulo in `src/content/courses/`, aggiungilo a `courses` in `src/content/index.ts` e fornisci icona/colore se necessario.
- Gli ID degli esercizi sono generati automaticamente come `<id-lezione>-e1`, `<id-lezione>-e2`, ... e sono usati anche dalla coda di ripasso: non cambiarli dopo aver pubblicato i contenuti, altrimenti i ripassi salvati non vengono più trovati.
- Le risposte scritte devono includere gli accenti corretti: il confronto distingue «esta» da «está». Le opzioni a scelta multipla vengono mescolate automaticamente.

## Note su ascolto e voci

L'ascolto usa le voci installate nel sistema operativo e nel browser. La disponibilità e la qualità cambiano tra Windows, macOS, Android e iOS. In **Impostazioni → Voce** puoi scegliere la voce per ogni lingua e regolare la velocità. Se non senti nulla, verifica che il dispositivo abbia una voce installata per quella lingua e che l'audio non sia disattivato.

## Limiti attuali

- Inglese e spagnolo coprono A1 → A2; francese e tedesco si fermano al primo livello A1.
- Nessun account, sincronizzazione o backup cloud.
- Nessuna suite di test automatica: la verifica avviene con `npm run build` e test manuali delle sessioni.
