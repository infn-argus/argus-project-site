const translations = {
  it: {
    skip: 'Vai al contenuto',
    navVision: 'Visione', navPlatform: 'Piattaforma', navAi: 'AI responsabile', navScenarios: 'Scenari', navControl: 'Sala controllo', navAccess: 'Accedi', navContact: 'Scopri ARGUS', orgHome: 'Home ARGUS',
    heroEyebrow: 'PROGETTO ARGUS · INFN CSN5', heroTitle1: 'La conoscenza', heroTitle2: 'dietro ogni macchina.', heroLead: 'Dalle infrastrutture scientifiche ai servizi complessi: ARGUS collega ciò che esiste, ciò che accade e ciò che sappiamo. Per trasformare informazioni disperse in decisioni migliori.', heroPrimary: 'Esplora Knowledge Hub', heroSecondary: 'Il progetto ARGUS', heroFootnote: 'AI · KNOWLEDGE GRAPH · OPERAZIONI', scroll: 'SCORRI PER ESPLORARE',
    vizMachine: 'TOPOLOGIA DELLA MACCHINA', vizContext: 'CONTESTO OPERATIVO', cardAssetLabel: 'ASSET', cardAssetType: 'Sistema di potenza · Linac', cardTicketLabel: 'TICKET', cardTicketTitle: 'Intervento dopo il riavvio', cardTicketType: 'Collegato a RF Modulator M-2', cardTicketStatus: 'APERTO', cardDocLabel: 'DOCUMENTO', cardDocTitle: 'Procedura di verifica RF', cardDocType: 'Revisione approvata', visualCaption: 'Un quadro operativo connesso',
    proofIntro: 'UNA BASE DI CONOSCENZA OPERATIVA PER', proofProjects: 'PROGETTI',
    sectionVision: 'LA VISIONE', visionTitle: 'La complessità non dovrebbe significare frammentazione.', visionLead: "In un'infrastruttura complessa, una risposta è raramente in un solo posto.", visionSub: 'È nei componenti, nei documenti, negli interventi e nelle persone che li conoscono.', visionBody1: 'ARGUS nasce per dare continuità a questa conoscenza: rende navigabili le relazioni tra sistemi, eventi e documentazione, così che un problema possa essere compreso nel suo contesto.', visionBody2: 'Il progetto unisce una base di conoscenza strutturata, ricerca semantica e strumenti di AI per supportare analisi, operazioni e trasferimento del sapere.', visionLink: 'Scopri la piattaforma', pill1: 'Contesto verificabile', pill2: 'Conoscenza connessa', pill3: 'Decisioni informate',
    sectionPlatform: 'LA PIATTAFORMA', platformLead: 'Il livello operativo di ARGUS: un unico spazio per organizzare asset, documentazione, ticket e conoscenza di progetto.', assetTitle: 'Asset, in relazione.', assetDesc: "Dall'inventario alla topologia funzionale: componenti, posizioni, installazioni e dipendenze diventano una rete navigabile.", docsTitle: 'Documenti affidabili.', docsDesc: 'Procedure, specifiche e report con revisioni, approvazione e collegamenti agli oggetti a cui si applicano.', ticketsTitle: 'Ticket con contesto.', ticketsDesc: 'Incidenti, richieste e attività restano collegati agli asset coinvolti e alla conoscenza che aiuta a risolverli.', workspacesTitle: 'Workspace su misura.', workspacesDesc: 'Domini e team diversi convivono nella stessa piattaforma, con tipi, flussi e permessi adatti al proprio lavoro.',
    sectionConnections: 'IL VALORE DELLE RELAZIONI', connectionTitle: 'Non solo dati.<br /><em>Connessioni utili.</em>', connectionLead: 'Seleziona un elemento e guarda come il contesto prende forma. Il Knowledge Graph collega il patrimonio tecnico al lavoro quotidiano.', graphTitle: 'KNOWLEDGE GRAPH / VISTA ESEMPLIFICATIVA', graphExplore: 'ESPLORA', graphImpact: 'IMPATTO', graphCause: 'CAUSA', graphAssetType: 'ASSET', graphTicketType: 'TICKET', graphTicketName: 'Guasto dopo riavvio', graphDocType: 'DOCUMENTO', graphDocName: 'Procedura RF', graphPositionType: 'POSIZIONE', graphQuestionType: 'DOMANDA', graphQuestionName: 'Cosa è collegato?', insightEyebrow: 'CONTESTO SELEZIONATO', insightAsset: 'Un asset non è una scheda isolata. È collegato a incidenti, procedure e alla posizione che occupa nel sistema.', insightConnected: 'COLLEGAMENTI', insightHint: 'Seleziona un nodo nel diagramma',
    sectionAi: 'AI RESPONSABILE', aiTitle: "Un'AI che aiuta a capire. E sa quando fermarsi.", aiLead: 'Ask ARGUS ricerca nella conoscenza del workspace, combina parole e significato, e restituisce risposte con riferimenti ai record consultabili.', aiRuleTitle: "L'AI propone. Le persone decidono.", aiRuleBody: 'Suggerimenti, classificazioni e modifiche sono verificabili e passano attraverso permessi e revisione umana.', aiLink: 'Parliamo di ARGUS', aiOnline: 'CONTESTO ATTIVO', aiQuestion: 'Quali documenti e interventi sono collegati al modulatore M-2?', aiEvidenceTitle: 'Procedura di verifica RF', aiEvidenceSub: 'Documento approvato · fonte consultabile', aiEvidenceTicket: 'Intervento dopo il riavvio', aiEvidenceTicketSub: 'Ticket collegato · stato aperto', aiFooter: 'Risposte ancorate alle fonti del workspace',
    controlEyebrow: 'ARGUS IN SALA CONTROLLO', controlTitle: "Un'anomalia. Tutto il contesto. Una decisione informata.", controlLead: "Segui un caso illustrativo ispirato ai casi d'uso ARGUS: dai segnali EPICS alla conoscenza tecnica, fino alla scelta dell'operatore.", controlConcept: 'SCENARIO ILLUSTRATIVO', controlStep1: 'Segnalazione', controlStep2: 'Dati EPICS', controlStep3: 'Log IOC', controlStep4: 'Topologia', controlStep5: 'Verifica', controlStep6: 'Decisione', controlPause: 'Pausa', controlPlay: 'Riprendi', controlNext: 'Passo successivo', controlEvidence: 'EVIDENZE COLLEGATE', controlIllustrative: 'DATI DI ESEMPIO', controlOperator: 'OPERATORE', controlQuestion: '«Il magnete QUATB102 non va al setpoint.»', controlGraph: 'KNOWLEDGE GRAPH', controlApproved: 'TEST AUTORIZZATO', controlPing: 'Ping dimostrativo: 3 inviati, 0 ricevuti.', controlLocation: 'CONTESTO OPERATIVO', controlSpare: 'Rack 11 · ricambio NPort disponibile', controlDisclaimer: 'Animazione concettuale basata su uno scenario illustrativo. Valori, risultati e posizioni sono di esempio; nessun test viene eseguito dal sito. Le verifiche attive e gli interventi richiedono autorizzazione e giudizio umano.', controlEpik8s: 'Scopri EPIK8s',
    naturalLabel: 'UNO SGUARDO AL FUTURO', naturalTitle: 'Nuove interfacce naturali stanno arrivando nelle nostre infrastrutture.', naturalIntro: 'Il prossimo passo è un dialogo più naturale con sistemi complessi: porre domande, esplorare il contesto e mantenere le persone al centro delle decisioni. Questo breve video presenta la direzione che stiamo immaginando per ARGUS.', naturalWatch: 'Guarda il video · 32 secondi', naturalVideoLabel: 'CONCEPT VIDEO / ARGUS', naturalVideoTitle: 'Future Natural User Interfaces',
    sectionScenarios: 'DOVE CREA VALORE', scenariosTitle: 'Nato per la ricerca.<br />Pronto per sistemi complessi.', scenariosLead: 'ARGUS Knowledge Hub può descrivere domini diversi con workspace e schemi dedicati. Due ambienti dimostrativi mostrano come cambia il contesto, non il principio.', scenarioDemo: 'DEMO', itTitle: 'Servizi IT', itBody: 'Infrastruttura, applicazioni, dispositivi, richieste e interventi: il servizio si vede insieme ai componenti che lo sostengono.', itTag1: 'Inventario', itTag2: 'Servizi', accTitle: 'Infrastruttura acceleratore', accBody: 'Un linac sintetico collega impianti, edifici, sicurezza, IT, documenti e problemi in un quadro operativo coerente.', accTag1: 'Acceleratore', accTag2: 'Edifici', accTag3: 'Sicurezza', scenarioNote: 'Le demo utilizzano dati sintetici per illustrare i flussi della piattaforma.',
    sectionWorkflow: 'DAL DATO ALLA DECISIONE', workflowTitle: 'Una conoscenza che resta in movimento.', workflowLead: 'Dal campo alla revisione, fino alla ricerca e all’analisi: ogni passaggio aggiunge contesto e mantiene una traccia.', step1Title: 'Raccogli', step1Body: 'Importa dati, registra asset e cattura osservazioni dal lavoro quotidiano.', step2Title: 'Collega', step2Body: 'Rendi esplicite relazioni fra oggetti, documenti, ticket e persone.', step3Title: 'Verifica', step3Body: 'Revisioni, provenienza e permessi mantengono il dato affidabile.', step4Title: 'Comprendi', step4Body: 'Ricerca, Knowledge Graph e AI portano il contesto dove serve.',
    sectionAccess: 'PROVA ARGUS', accessTitle: 'Dal browser.<br />Sul campo.', accessLead: 'Due modi per entrare nell’ecosistema ARGUS. Scansiona il codice con il telefono o apri il collegamento.', webBadge: 'WEB APP', webAccessBody: 'Asset, ticket, documenti, Knowledge Graph e Ask ARGUS nel browser.', openWeb: 'Apri la web app', webAccessFoot: 'L’accesso richiede un account abilitato.', androidTitle: 'L’app per il lavoro sul campo.', androidAccessBody: 'Consulta asset e attività sul posto. La distribuzione Android è riservata ai tester autorizzati.', openAndroid: 'Apri ARGUS Field su Google Play', androidAccessFoot: 'Per essere incluso nel test, scrivi a', accessNote: 'Prima di installare l’app da Google Play, chiedi di essere incluso fra i tester autorizzati.',
    sectionContact: 'IL PROSSIMO PASSO', contactTitle: 'Mettiamo in connessione la conoscenza.', contactLead: 'Scopri il progetto ARGUS e come Knowledge Hub può rendere più leggibili sistemi, interventi e documentazione.', contactButton: 'Contatta il progetto', sourceButton: 'Esplora il repository', footerTag: 'Knowledge in motion.', footerInstitution: 'Progetto ARGUS · INFN Commissione Scientifica Nazionale 5', backTop: 'TORNA SU ↑',
    insightTicket: 'Il ticket conserva il problema nel suo contesto: l’asset coinvolto, lo stato dell’intervento e le fonti utili per la risoluzione.', insightDocument: 'La procedura revisionata è collegata ai sistemi a cui si applica, così resta ritrovabile quando serve.', insightPosition: 'La posizione nel linac collega la funzione tecnica al componente installato e al suo contesto operativo.'
  },
  en: {
    skip: 'Skip to content',
    navVision: 'Vision', navPlatform: 'Platform', navAi: 'Responsible AI', navScenarios: 'Use cases', navControl: 'Control room', navAccess: 'Get access', navContact: 'Discover ARGUS', orgHome: 'ARGUS home',
    heroEyebrow: 'ARGUS PROJECT · INFN CSN5', heroTitle1: 'The knowledge', heroTitle2: 'behind every machine.', heroLead: 'From scientific infrastructure to complex services, ARGUS connects what exists, what happens and what we know. Turning scattered information into better decisions.', heroPrimary: 'Explore Knowledge Hub', heroSecondary: 'The ARGUS project', heroFootnote: 'AI · KNOWLEDGE GRAPH · OPERATIONS', scroll: 'SCROLL TO EXPLORE',
    vizMachine: 'MACHINE TOPOLOGY', vizContext: 'OPERATIONAL CONTEXT', cardAssetLabel: 'ASSET', cardAssetType: 'Power system · Linac', cardTicketLabel: 'TICKET', cardTicketTitle: 'Intervention after restart', cardTicketType: 'Linked to RF Modulator M-2', cardTicketStatus: 'OPEN', cardDocLabel: 'DOCUMENT', cardDocTitle: 'RF verification procedure', cardDocType: 'Approved revision', visualCaption: 'One connected operational picture',
    proofIntro: 'AN OPERATIONAL KNOWLEDGE BASE FOR', proofProjects: 'PROJECTS',
    sectionVision: 'THE VISION', visionTitle: 'Complexity should not mean fragmentation.', visionLead: 'In a complex facility, an answer rarely lives in one place.', visionSub: 'It lives in components, documents, interventions and the people who understand them.', visionBody1: 'ARGUS gives this knowledge continuity. It makes relationships among systems, events and documentation navigable, so a problem can be understood in context.', visionBody2: 'The project brings together a structured knowledge base, semantic search and AI tools to support analysis, operations and knowledge transfer.', visionLink: 'Discover the platform', pill1: 'Verifiable context', pill2: 'Connected knowledge', pill3: 'Informed decisions',
    sectionPlatform: 'THE PLATFORM', platformLead: 'The operational layer of ARGUS: one place to organize assets, documentation, tickets and project knowledge.', assetTitle: 'Assets, connected.', assetDesc: 'From inventory to functional topology: components, positions, installations and dependencies become a navigable network.', docsTitle: 'Trusted documents.', docsDesc: 'Procedures, specifications and reports with revisions, approval and links to the objects they describe.', ticketsTitle: 'Tickets with context.', ticketsDesc: 'Incidents, requests and activities remain linked to affected assets and the knowledge that helps resolve them.', workspacesTitle: 'Tailored workspaces.', workspacesDesc: 'Different domains and teams share one platform, with types, workflows and permissions suited to their work.',
    sectionConnections: 'THE VALUE OF RELATIONSHIPS', connectionTitle: 'More than data.<br /><em>Useful connections.</em>', connectionLead: 'Select an element and see its context take shape. The Knowledge Graph connects technical assets to daily work.', graphTitle: 'KNOWLEDGE GRAPH / ILLUSTRATIVE VIEW', graphExplore: 'EXPLORE', graphImpact: 'IMPACT', graphCause: 'CAUSE', graphAssetType: 'ASSET', graphTicketType: 'TICKET', graphTicketName: 'Fault after restart', graphDocType: 'DOCUMENT', graphDocName: 'RF procedure', graphPositionType: 'POSITION', graphQuestionType: 'QUESTION', graphQuestionName: 'What is connected?', insightEyebrow: 'SELECTED CONTEXT', insightAsset: 'An asset is more than an isolated record. It connects to incidents, procedures and the position it occupies in the system.', insightConnected: 'CONNECTIONS', insightHint: 'Select a node in the diagram',
    sectionAi: 'RESPONSIBLE AI', aiTitle: 'AI that helps you understand. And knows when to stop.', aiLead: 'Ask ARGUS searches workspace knowledge, combines keywords with meaning, and returns answers linked to records the user can access.', aiRuleTitle: 'AI proposes. People decide.', aiRuleBody: 'Suggestions, classifications and changes can be checked and pass through permissions and human review.', aiLink: "Let's talk about ARGUS", aiOnline: 'CONTEXT ACTIVE', aiQuestion: 'Which documents and interventions are linked to modulator M-2?', aiEvidenceTitle: 'RF verification procedure', aiEvidenceSub: 'Approved document · accessible source', aiEvidenceTicket: 'Intervention after restart', aiEvidenceTicketSub: 'Linked ticket · open', aiFooter: 'Answers grounded in workspace sources',
    controlEyebrow: 'ARGUS IN THE CONTROL ROOM', controlTitle: 'One anomaly. The full context. An informed decision.', controlLead: 'Follow an illustrative case inspired by ARGUS use cases: from EPICS signals to technical knowledge and the operator’s decision.', controlConcept: 'ILLUSTRATIVE SCENARIO', controlStep1: 'Report', controlStep2: 'EPICS data', controlStep3: 'IOC log', controlStep4: 'Topology', controlStep5: 'Check', controlStep6: 'Decision', controlPause: 'Pause', controlPlay: 'Resume', controlNext: 'Next step', controlEvidence: 'LINKED EVIDENCE', controlIllustrative: 'EXAMPLE DATA', controlOperator: 'OPERATOR', controlQuestion: '“Magnet QUATB102 is not reaching its setpoint.”', controlGraph: 'KNOWLEDGE GRAPH', controlApproved: 'AUTHORIZED TEST', controlPing: 'Illustrative ping: 3 sent, 0 received.', controlLocation: 'OPERATIONAL CONTEXT', controlSpare: 'Rack 11 · NPort spare available', controlDisclaimer: 'Concept animation based on an illustrative scenario. Values, results and locations are examples; this site performs no tests. Active checks and interventions require authorization and human judgment.', controlEpik8s: 'Explore EPIK8s',
    naturalLabel: 'A GLIMPSE OF WHAT IS NEXT', naturalTitle: 'New Natural Interfaces are coming in our facilities.', naturalIntro: 'The next step is a more natural dialogue with complex systems: asking questions, exploring context and keeping people at the centre of decisions. This short video offers a glimpse of the direction we envision for ARGUS.', naturalWatch: 'Watch the video · 32 seconds', naturalVideoLabel: 'CONCEPT VIDEO / ARGUS', naturalVideoTitle: 'Future Natural User Interfaces',
    sectionScenarios: 'WHERE IT CREATES VALUE', scenariosTitle: 'Built for research.<br />Ready for complex systems.', scenariosLead: 'ARGUS Knowledge Hub can describe different domains through dedicated workspaces and schemas. Two demo environments show how the context changes while the principle stays the same.', scenarioDemo: 'DEMO', itTitle: 'IT services', itBody: 'Infrastructure, applications, devices, requests and interventions: see the service together with the components that support it.', itTag1: 'Inventory', itTag2: 'Services', accTitle: 'Accelerator infrastructure', accBody: 'A synthetic linac connects plant systems, buildings, safety, IT, documents and issues into one coherent operational picture.', accTag1: 'Accelerator', accTag2: 'Buildings', accTag3: 'Safety', scenarioNote: 'The demos use synthetic data to illustrate platform workflows.',
    sectionWorkflow: 'FROM DATA TO DECISIONS', workflowTitle: 'Knowledge that keeps moving.', workflowLead: 'From the field to review, search and analysis: every step adds context and preserves a trace.', step1Title: 'Collect', step1Body: 'Import data, register assets and capture observations from daily work.', step2Title: 'Connect', step2Body: 'Make relationships among objects, documents, tickets and people explicit.', step3Title: 'Verify', step3Body: 'Revisions, provenance and permissions keep information trustworthy.', step4Title: 'Understand', step4Body: 'Search, the Knowledge Graph and AI bring context where it is needed.',
    sectionAccess: 'TRY ARGUS', accessTitle: 'In your browser.<br />In the field.', accessLead: 'Two ways into the ARGUS ecosystem. Scan a code with your phone or open the link.', webBadge: 'WEB APP', webAccessBody: 'Assets, tickets, documents, the Knowledge Graph and Ask ARGUS in your browser.', openWeb: 'Open the web app', webAccessFoot: 'Access requires an enabled account.', androidTitle: 'The app for field work.', androidAccessBody: 'Look up assets and activities on site. Android distribution is limited to approved testers.', openAndroid: 'Open ARGUS Field on Google Play', androidAccessFoot: 'To join the test, email', accessNote: 'Before installing from Google Play, ask to be included among approved testers.',
    sectionContact: 'THE NEXT STEP', contactTitle: "Let's connect the knowledge.", contactLead: 'Discover the ARGUS project and how Knowledge Hub can make systems, interventions and documentation easier to understand.', contactButton: 'Contact the project', sourceButton: 'Explore the repository', footerTag: 'Knowledge in motion.', footerInstitution: 'ARGUS project · INFN National Scientific Commission 5', backTop: 'BACK TO TOP ↑',
    insightTicket: 'The ticket preserves the problem in context: the affected asset, intervention status and sources that can help resolve it.', insightDocument: 'The revised procedure is linked to the systems it applies to, so it is available when needed.', insightPosition: 'A position in the linac links a technical function to the installed unit and its operational context.'
  }
};

const richKeys = new Set(['connectionTitle', 'scenariosTitle', 'accessTitle']);
let currentLanguage = 'it';
function setLanguage(lang) {
  currentLanguage = lang === 'en' ? 'en' : 'it';
  const dict = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (!(key in dict)) return;
    if (richKeys.has(key)) node.innerHTML = dict[key];
    else node.textContent = dict[key];
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelector('.menu-toggle').setAttribute('aria-label', currentLanguage === 'it' ? 'Apri menu' : 'Open menu');
  document.querySelectorAll('[data-site-link]').forEach((link) => { link.href = `https://infn-argus.github.io/argus-knowledge-hub/${currentLanguage}/`; });
  document.querySelectorAll('[data-root-link]').forEach((link) => { link.href = `https://infn-argus.github.io/?lang=${currentLanguage}`; });
  document.querySelectorAll('[data-epics-link]').forEach((link) => { link.href = `https://infn-epics.github.io/?lang=${currentLanguage}`; });
  document.querySelectorAll('[data-epik8s-link]').forEach((link) => { link.href = `https://infn-epics.github.io/epik8s/?lang=${currentLanguage}`; });
  renderControlStory();
  document.title = currentLanguage === 'it' ? 'ARGUS — La conoscenza in movimento' : 'ARGUS — Knowledge in motion';
  document.querySelector('meta[name="description"]').content = currentLanguage === 'it'
    ? 'ARGUS unisce AI, knowledge graph e conoscenza operativa per gestire asset, documenti, ticket e progetti complessi.'
    : 'ARGUS combines AI, a knowledge graph and operational knowledge to manage assets, documents, tickets and complex projects.';
  document.querySelector('[data-request-test]').href = currentLanguage === 'it'
    ? 'mailto:andrea.michelotti@infn.it?subject=Accesso%20al%20test%20ARGUS%20Field&body=Buongiorno%2C%20vorrei%20essere%20incluso%20nel%20test%20Android%20di%20ARGUS%20Field.'
    : 'mailto:andrea.michelotti@infn.it?subject=ARGUS%20Field%20Android%20test%20access&body=Hello%2C%20I%20would%20like%20to%20join%20the%20ARGUS%20Field%20Android%20test.';
  try { localStorage.setItem('argus-site-language', currentLanguage); } catch (_) {}
  const url = new URL(location.href);
  url.searchParams.set('lang', currentLanguage);
  history.replaceState(null, '', url.pathname + url.search + url.hash);
  const activeNode = document.querySelector('.graph-node.active');
  if (activeNode) showGraphInsight(activeNode.dataset.graph);
}

const graphInfo = {
  asset: { title: 'RF Modulator M-2', copy: 'insightAsset', count: '03', icon: '◇' },
  ticket: { title: { it: 'Guasto dopo riavvio', en: 'Fault after restart' }, copy: 'insightTicket', count: '02', icon: '⌁' },
  document: { title: { it: 'Procedura RF', en: 'RF procedure' }, copy: 'insightDocument', count: '02', icon: '▤' },
  position: { title: 'Linac / Sector 02', copy: 'insightPosition', count: '03', icon: '⌖' }
};
function showGraphInsight(key) {
  const item = graphInfo[key]; if (!item) return;
  document.querySelectorAll('.graph-node[data-graph]').forEach((node) => node.classList.toggle('active', node.dataset.graph === key));
  document.getElementById('insight-title').textContent = typeof item.title === 'string' ? item.title : item.title[currentLanguage];
  document.getElementById('insight-copy').textContent = translations[currentLanguage][item.copy];
  document.getElementById('insight-count').textContent = item.count;
  document.querySelector('.insight-icon').textContent = item.icon;
}

document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
document.querySelectorAll('.graph-node[data-graph]').forEach((button) => button.addEventListener('click', () => showGraphInsight(button.dataset.graph)));
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  mobileNav.hidden = !open;
});
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { mobileNav.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); }));
document.getElementById('year').textContent = new Date().getFullYear();
let savedLanguage; try { savedLanguage = localStorage.getItem('argus-site-language'); } catch (_) {}
const browserLanguage = navigator.language && navigator.language.toLowerCase().startsWith('it') ? 'it' : 'en';
const urlLanguage = new URL(location.href).searchParams.get('lang');


const controlStory = {
  it: [
    { title: 'Il magnete non risponde.', copy: 'In sala controllo, un operatore segnala che QUATB102 non raggiunge il valore richiesto.', insight: 'La domanda avvia la ricerca del contesto, non un intervento automatico.' },
    { title: 'Il setpoint e la lettura divergono.', copy: 'Nei dati di esempio EPICS, SET è 145,0 A mentre READ resta a 0,0 A.', insight: 'ARGUS mette in evidenza lo scarto e collega i segnali all’asset.' },
    { title: 'Un log aggiunge un indizio.', copy: 'Il log IOC segnala un timeout seriale su ttyS1 alle 10:15:02.', insight: 'Il sintomo viene correlato ai record tecnici senza saltare a una causa certa.' },
    { title: 'La topologia restringe il campo.', copy: 'Nel Knowledge Graph, QUATB102 è collegato tramite un convertitore Moxa NPort 5150.', insight: 'La connessione suggerisce di verificare convertitore, alimentazione, rete e cablaggio.' },
    { title: 'Prima del test, il consenso.', copy: 'L’operatore autorizza una verifica attiva. Nel risultato illustrativo il dispositivo non risponde al ping.', insight: 'Un ping non conclusivo non prova da solo un guasto: serve la verifica sul campo.' },
    { title: 'L’operatore decide.', copy: 'ARGUS presenta posizione e ricambio disponibili nell’esempio. Il team valuta l’intervento e registra ciò che apprende.', insight: 'La decisione e l’azione restano alle persone; la conoscenza prodotta rimane consultabile.' }
  ],
  en: [
    { title: 'The magnet does not respond.', copy: 'In the control room, an operator reports that QUATB102 does not reach the requested value.', insight: 'The question starts a search for context, not an automatic intervention.' },
    { title: 'Setpoint and readback diverge.', copy: 'In the illustrative EPICS data, SET is 145.0 A while READ remains at 0.0 A.', insight: 'ARGUS highlights the mismatch and connects the signals to the asset.' },
    { title: 'A log adds a clue.', copy: 'The IOC log reports a serial timeout on ttyS1 at 10:15:02.', insight: 'The symptom is correlated with technical records without claiming a definitive cause.' },
    { title: 'Topology narrows the search.', copy: 'In the Knowledge Graph, QUATB102 is connected through a Moxa NPort 5150 converter.', insight: 'The connection suggests checking the converter, power, network and cabling.' },
    { title: 'Permission comes before the test.', copy: 'The operator authorizes an active check. In the illustrative result, the device does not answer a ping.', insight: 'An inconclusive ping alone does not prove a fault; on-site verification is still needed.' },
    { title: 'The operator decides.', copy: 'ARGUS presents a location and available spare in this example. The team evaluates the intervention and records what it learns.', insight: 'People retain control of the decision and action; the resulting knowledge remains accessible.' }
  ]
};
let controlStep = 0;
let controlPlaying = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let controlVisible = false;
let controlTimer;
function renderControlStory() {
  const stage = controlStory[currentLanguage][controlStep];
  if (!stage) return;
  const labels = Array.from(document.querySelectorAll('.control-step strong')).map((n) => n.textContent);
  document.getElementById('control-phase').textContent = `${String(controlStep + 1).padStart(2, '0')} / ${labels[controlStep].toUpperCase()}`;
  document.getElementById('control-story-title').textContent = stage.title;
  document.getElementById('control-story-copy').textContent = stage.copy;
  document.getElementById('control-story-insight').textContent = stage.insight;
  document.getElementById('control-counter').textContent = `${String(controlStep + 1).padStart(2, '0')} / 06`;
  document.getElementById('control-progress-fill').style.width = `${((controlStep + 1) / 6) * 100}%`;
  document.querySelectorAll('.control-step').forEach((button, index) => {
    const active = index === controlStep;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('.signal-card').forEach((card, index) => {
    card.classList.toggle('revealed', index <= controlStep);
    card.classList.toggle('current', index === controlStep);
  });
  document.getElementById('control-play-label').textContent = translations[currentLanguage][controlPlaying ? 'controlPause' : 'controlPlay'];
  document.getElementById('control-play-icon').textContent = controlPlaying ? 'Ⅱ' : '▶';
  document.getElementById('control-play').setAttribute('aria-label', translations[currentLanguage][controlPlaying ? 'controlPause' : 'controlPlay']);
}
function controlAdvance() { controlStep = (controlStep + 1) % 6; renderControlStory(); }
function controlSchedule() {
  clearInterval(controlTimer);
  if (controlPlaying && controlVisible) controlTimer = setInterval(controlAdvance, 4200);
}
document.querySelectorAll('.control-step').forEach((button) => button.addEventListener('click', () => {
  controlStep = Number(button.dataset.storyStep);
  controlPlaying = false;
  renderControlStory();
  controlSchedule();
}));
document.getElementById('control-next').addEventListener('click', () => { controlAdvance(); controlPlaying = false; renderControlStory(); controlSchedule(); });
document.getElementById('control-play').addEventListener('click', () => { controlPlaying = !controlPlaying; renderControlStory(); controlSchedule(); });
new IntersectionObserver(([entry]) => { controlVisible = entry.isIntersecting; controlSchedule(); }, { threshold: 0.2 }).observe(document.querySelector('.control-room'));
setLanguage(urlLanguage || savedLanguage || browserLanguage);
showGraphInsight('asset');
renderControlStory();
