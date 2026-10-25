const translations = {
  it: {
    skip: 'Vai al contenuto',
    navVision: 'Visione', navPlatform: 'Piattaforma', navAi: 'AI responsabile', navScenarios: 'Scenari', navAccess: 'Accedi', navContact: 'Scopri ARGUS', orgHome: 'Home ARGUS',
    heroEyebrow: 'PROGETTO ARGUS · INFN CSN5', heroTitle1: 'La conoscenza', heroTitle2: 'dietro ogni macchina.', heroLead: 'Dalle infrastrutture scientifiche ai servizi complessi: ARGUS collega ciò che esiste, ciò che accade e ciò che sappiamo. Per trasformare informazioni disperse in decisioni migliori.', heroPrimary: 'Esplora Knowledge Hub', heroSecondary: 'Il progetto ARGUS', heroFootnote: 'AI · KNOWLEDGE GRAPH · OPERAZIONI', scroll: 'SCORRI PER ESPLORARE',
    vizMachine: 'TOPOLOGIA DELLA MACCHINA', vizContext: 'CONTESTO OPERATIVO', cardAssetLabel: 'ASSET', cardAssetType: 'Sistema di potenza · Linac', cardTicketLabel: 'TICKET', cardTicketTitle: 'Intervento dopo il riavvio', cardTicketType: 'Collegato a RF Modulator M-2', cardTicketStatus: 'APERTO', cardDocLabel: 'DOCUMENTO', cardDocTitle: 'Procedura di verifica RF', cardDocType: 'Revisione approvata', visualCaption: 'Un quadro operativo connesso',
    proofIntro: 'UNA BASE DI CONOSCENZA OPERATIVA PER', proofProjects: 'PROGETTI',
    sectionVision: 'LA VISIONE', visionTitle: 'La complessità non dovrebbe significare frammentazione.', visionLead: "In un'infrastruttura complessa, una risposta è raramente in un solo posto.", visionSub: 'È nei componenti, nei documenti, negli interventi e nelle persone che li conoscono.', visionBody1: 'ARGUS nasce per dare continuità a questa conoscenza: rende navigabili le relazioni tra sistemi, eventi e documentazione, così che un problema possa essere compreso nel suo contesto.', visionBody2: 'Il progetto unisce una base di conoscenza strutturata, ricerca semantica e strumenti di AI per supportare analisi, operazioni e trasferimento del sapere.', visionLink: 'Scopri la piattaforma', pill1: 'Contesto verificabile', pill2: 'Conoscenza connessa', pill3: 'Decisioni informate',
    sectionPlatform: 'LA PIATTAFORMA', platformLead: 'Il livello operativo di ARGUS: un unico spazio per organizzare asset, documentazione, ticket e conoscenza di progetto.', assetTitle: 'Asset, in relazione.', assetDesc: "Dall'inventario alla topologia funzionale: componenti, posizioni, installazioni e dipendenze diventano una rete navigabile.", docsTitle: 'Documenti affidabili.', docsDesc: 'Procedure, specifiche e report con revisioni, approvazione e collegamenti agli oggetti a cui si applicano.', ticketsTitle: 'Ticket con contesto.', ticketsDesc: 'Incidenti, richieste e attività restano collegati agli asset coinvolti e alla conoscenza che aiuta a risolverli.', workspacesTitle: 'Workspace su misura.', workspacesDesc: 'Domini e team diversi convivono nella stessa piattaforma, con tipi, flussi e permessi adatti al proprio lavoro.',
    sectionConnections: 'IL VALORE DELLE RELAZIONI', connectionTitle: 'Non solo dati.<br /><em>Connessioni utili.</em>', connectionLead: 'Seleziona un elemento e guarda come il contesto prende forma. Il Knowledge Graph collega il patrimonio tecnico al lavoro quotidiano.', graphTitle: 'KNOWLEDGE GRAPH / VISTA ESEMPLIFICATIVA', graphExplore: 'ESPLORA', graphImpact: 'IMPATTO', graphCause: 'CAUSA', graphAssetType: 'ASSET', graphTicketType: 'TICKET', graphTicketName: 'Guasto dopo riavvio', graphDocType: 'DOCUMENTO', graphDocName: 'Procedura RF', graphPositionType: 'POSIZIONE', graphQuestionType: 'DOMANDA', graphQuestionName: 'Cosa è collegato?', insightEyebrow: 'CONTESTO SELEZIONATO', insightAsset: 'Un asset non è una scheda isolata. È collegato a incidenti, procedure e alla posizione che occupa nel sistema.', insightConnected: 'COLLEGAMENTI', insightHint: 'Seleziona un nodo nel diagramma',
    sectionAi: 'AI RESPONSABILE', aiTitle: "Un'AI che aiuta a capire. E sa quando fermarsi.", aiLead: 'Ask ARGUS ricerca nella conoscenza del workspace, combina parole e significato, e restituisce risposte con riferimenti ai record consultabili.', aiRuleTitle: "L'AI propone. Le persone decidono.", aiRuleBody: 'Suggerimenti, classificazioni e modifiche sono verificabili e passano attraverso permessi e revisione umana.', aiLink: 'Parliamo di ARGUS', aiOnline: 'CONTESTO ATTIVO', aiQuestion: 'Quali documenti e interventi sono collegati al modulatore M-2?', aiEvidenceTitle: 'Procedura di verifica RF', aiEvidenceSub: 'Documento approvato · fonte consultabile', aiEvidenceTicket: 'Intervento dopo il riavvio', aiEvidenceTicketSub: 'Ticket collegato · stato aperto', aiFooter: 'Risposte ancorate alle fonti del workspace',
    sectionScenarios: 'DOVE CREA VALORE', scenariosTitle: 'Nato per la ricerca.<br />Pronto per sistemi complessi.', scenariosLead: 'ARGUS Knowledge Hub può descrivere domini diversi con workspace e schemi dedicati. Due ambienti dimostrativi mostrano come cambia il contesto, non il principio.', scenarioDemo: 'DEMO', itTitle: 'Servizi IT', itBody: 'Infrastruttura, applicazioni, dispositivi, richieste e interventi: il servizio si vede insieme ai componenti che lo sostengono.', itTag1: 'Inventario', itTag2: 'Servizi', accTitle: 'Infrastruttura acceleratore', accBody: 'Un linac sintetico collega impianti, edifici, sicurezza, IT, documenti e problemi in un quadro operativo coerente.', accTag1: 'Acceleratore', accTag2: 'Edifici', accTag3: 'Sicurezza', scenarioNote: 'Le demo utilizzano dati sintetici per illustrare i flussi della piattaforma.',
    sectionWorkflow: 'DAL DATO ALLA DECISIONE', workflowTitle: 'Una conoscenza che resta in movimento.', workflowLead: 'Dal campo alla revisione, fino alla ricerca e all’analisi: ogni passaggio aggiunge contesto e mantiene una traccia.', step1Title: 'Raccogli', step1Body: 'Importa dati, registra asset e cattura osservazioni dal lavoro quotidiano.', step2Title: 'Collega', step2Body: 'Rendi esplicite relazioni fra oggetti, documenti, ticket e persone.', step3Title: 'Verifica', step3Body: 'Revisioni, provenienza e permessi mantengono il dato affidabile.', step4Title: 'Comprendi', step4Body: 'Ricerca, Knowledge Graph e AI portano il contesto dove serve.',
    sectionAccess: 'PROVA ARGUS', accessTitle: 'Dal browser.<br />Sul campo.', accessLead: 'Due modi per entrare nell’ecosistema ARGUS. Scansiona il codice con il telefono o apri il collegamento.', webBadge: 'WEB APP', webAccessBody: 'Asset, ticket, documenti, Knowledge Graph e Ask ARGUS nel browser.', openWeb: 'Apri la web app', webAccessFoot: 'L’accesso richiede un account abilitato.', androidTitle: 'L’app per il lavoro sul campo.', androidAccessBody: 'Consulta asset e attività sul posto. La distribuzione Android è riservata ai tester autorizzati.', openAndroid: 'Apri ARGUS Field su Google Play', androidAccessFoot: 'Per essere incluso nel test, scrivi a', accessNote: 'Prima di installare l’app da Google Play, chiedi di essere incluso fra i tester autorizzati.',
    sectionContact: 'IL PROSSIMO PASSO', contactTitle: 'Mettiamo in connessione la conoscenza.', contactLead: 'Scopri il progetto ARGUS e come Knowledge Hub può rendere più leggibili sistemi, interventi e documentazione.', contactButton: 'Contatta il progetto', sourceButton: 'Esplora il repository', footerTag: 'Knowledge in motion.', footerInstitution: 'Progetto ARGUS · INFN Commissione Scientifica Nazionale 5', backTop: 'TORNA SU ↑',
    insightTicket: 'Il ticket conserva il problema nel suo contesto: l’asset coinvolto, lo stato dell’intervento e le fonti utili per la risoluzione.', insightDocument: 'La procedura revisionata è collegata ai sistemi a cui si applica, così resta ritrovabile quando serve.', insightPosition: 'La posizione nel linac collega la funzione tecnica al componente installato e al suo contesto operativo.'
  },
  en: {
    skip: 'Skip to content',
    navVision: 'Vision', navPlatform: 'Platform', navAi: 'Responsible AI', navScenarios: 'Use cases', navAccess: 'Get access', navContact: 'Discover ARGUS', orgHome: 'ARGUS home',
    heroEyebrow: 'ARGUS PROJECT · INFN CSN5', heroTitle1: 'The knowledge', heroTitle2: 'behind every machine.', heroLead: 'From scientific infrastructure to complex services, ARGUS connects what exists, what happens and what we know. Turning scattered information into better decisions.', heroPrimary: 'Explore Knowledge Hub', heroSecondary: 'The ARGUS project', heroFootnote: 'AI · KNOWLEDGE GRAPH · OPERATIONS', scroll: 'SCROLL TO EXPLORE',
    vizMachine: 'MACHINE TOPOLOGY', vizContext: 'OPERATIONAL CONTEXT', cardAssetLabel: 'ASSET', cardAssetType: 'Power system · Linac', cardTicketLabel: 'TICKET', cardTicketTitle: 'Intervention after restart', cardTicketType: 'Linked to RF Modulator M-2', cardTicketStatus: 'OPEN', cardDocLabel: 'DOCUMENT', cardDocTitle: 'RF verification procedure', cardDocType: 'Approved revision', visualCaption: 'One connected operational picture',
    proofIntro: 'AN OPERATIONAL KNOWLEDGE BASE FOR', proofProjects: 'PROJECTS',
    sectionVision: 'THE VISION', visionTitle: 'Complexity should not mean fragmentation.', visionLead: 'In a complex facility, an answer rarely lives in one place.', visionSub: 'It lives in components, documents, interventions and the people who understand them.', visionBody1: 'ARGUS gives this knowledge continuity. It makes relationships among systems, events and documentation navigable, so a problem can be understood in context.', visionBody2: 'The project brings together a structured knowledge base, semantic search and AI tools to support analysis, operations and knowledge transfer.', visionLink: 'Discover the platform', pill1: 'Verifiable context', pill2: 'Connected knowledge', pill3: 'Informed decisions',
    sectionPlatform: 'THE PLATFORM', platformLead: 'The operational layer of ARGUS: one place to organize assets, documentation, tickets and project knowledge.', assetTitle: 'Assets, connected.', assetDesc: 'From inventory to functional topology: components, positions, installations and dependencies become a navigable network.', docsTitle: 'Trusted documents.', docsDesc: 'Procedures, specifications and reports with revisions, approval and links to the objects they describe.', ticketsTitle: 'Tickets with context.', ticketsDesc: 'Incidents, requests and activities remain linked to affected assets and the knowledge that helps resolve them.', workspacesTitle: 'Tailored workspaces.', workspacesDesc: 'Different domains and teams share one platform, with types, workflows and permissions suited to their work.',
    sectionConnections: 'THE VALUE OF RELATIONSHIPS', connectionTitle: 'More than data.<br /><em>Useful connections.</em>', connectionLead: 'Select an element and see its context take shape. The Knowledge Graph connects technical assets to daily work.', graphTitle: 'KNOWLEDGE GRAPH / ILLUSTRATIVE VIEW', graphExplore: 'EXPLORE', graphImpact: 'IMPACT', graphCause: 'CAUSE', graphAssetType: 'ASSET', graphTicketType: 'TICKET', graphTicketName: 'Fault after restart', graphDocType: 'DOCUMENT', graphDocName: 'RF procedure', graphPositionType: 'POSITION', graphQuestionType: 'QUESTION', graphQuestionName: 'What is connected?', insightEyebrow: 'SELECTED CONTEXT', insightAsset: 'An asset is more than an isolated record. It connects to incidents, procedures and the position it occupies in the system.', insightConnected: 'CONNECTIONS', insightHint: 'Select a node in the diagram',
    sectionAi: 'RESPONSIBLE AI', aiTitle: 'AI that helps you understand. And knows when to stop.', aiLead: 'Ask ARGUS searches workspace knowledge, combines keywords with meaning, and returns answers linked to records the user can access.', aiRuleTitle: 'AI proposes. People decide.', aiRuleBody: 'Suggestions, classifications and changes can be checked and pass through permissions and human review.', aiLink: "Let's talk about ARGUS", aiOnline: 'CONTEXT ACTIVE', aiQuestion: 'Which documents and interventions are linked to modulator M-2?', aiEvidenceTitle: 'RF verification procedure', aiEvidenceSub: 'Approved document · accessible source', aiEvidenceTicket: 'Intervention after restart', aiEvidenceTicketSub: 'Linked ticket · open', aiFooter: 'Answers grounded in workspace sources',
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
setLanguage(urlLanguage || savedLanguage || browserLanguage);
showGraphInsight('asset');
