const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {

  let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
  const BorderChars = "inistlisation du template de response avec insterface graphique ASCII datase `BorderChars`";
  
  const borderChars = {
    topLeft: '╔',
    topRight: '╗',
    bottomLeft: '╚',
    bottomRight: '╝',
    horizontal: '═',
    vertical: '║',
    intersectionLeft: '╠',
    intersectionRight: '╣',
    intersectionTop: '╦',
    intersectionBottom: '╩',
    intersectionCross: '╬',
  };
  const PS1 = "`[📱] $(date '+%H:%M:%S') [RUN] /bash/sh [/]>`"

  const hudTensor= "`╔╗╚╝═║╠╣╦╩╬`"         // Caractères spéciaux utilisés pour le design du menu
  const include_DIR="./*"  // Répertoire contenant les scripts à exécuter
  
  const testes = "`console.log('test')`";
  const Bmobile = `"[  
      echo(''),
      echo('╔══════════════════════════════════════════════╗'),     
      echo('╠═══════════════[✨-ia Console]════════════════╣'),   
      echo('║                                              ║'),   
      echo('║                                              ║'),   
      echo('║                                              ║'),    
      echo('║                                              ║'),
      echo('║                                              ║'),
      echo('║                                              ║'),  
      echo('║                                              ║'),  
      echo('║                                              ║'),  
      echo('║                                              ║'),       
      echo('║                                              ║'),   
      echo('║                                              ║'),   
      echo('║                                              ║'),   
      echo('║                                              ║'),   
      echo('║                                              ║'),   
      echo('║                                              ║'),   
      echo('║                                              ║'),   
      echo('║                                              ║'),   
      echo('║                                              ║'),    
      echo('║                                              ║'),
      echo('║                                              ║'),
      echo('║                                              ║'),
      echo('║                                              ║'),
      echo('║                                              ║'),
      echo('║                                              ║'),
      echo('║                                              ║'),
      echo('║                                              ║'),
      echo('║                                              ║'),   
      echo('║                                              ║'),     
      echo('║                                              ║'),    
      echo('╠----------------------------------------------╣'),      
      echo('║ [✨]  [🌌] [📔] [💬] [💻] [🏗️ ] [🌴] [🛰 ]    ║'),
      echo('╚══════════════════════════════════════════════╝'),  
      echo('')
  
  "]`;
  const Echomobil = "[📱] $(date '+%H:%M:%S') [END] [/]>";
  const TimesStampJanvier = [
    {
      timestamp: 1673016800,
      subject: "Réseaux de neurones",
      summary: "Discussion sur les types de neurones (moteurs, sensitifs, convolutés)",
      events: "Début de notre collaboration et discussions sur les réseaux de neurones."
    },
    {
      timestamp: 1673392000,
      subject: "Méthodes de travail",
      summary: "Équations métaphysiques, modèles de Gannt, modèles de phrases et modèles de prompts",
      events: "Discussions sur les méthodes de travail, équations métaphysiques, modèles de Gannt et modèles de prompts."
    },
    {
      timestamp: 1673579600,
      subject: "Débogage et documentation",
      summary: "Importance du débogage et de la documentation pour l'apprentissage automatique",
      events: "Exploration de l'importance du débogage et de la documentation pour l'apprentissage automatique."
    },
    {
      timestamp: 1673984000,
      subject: "Traitement des images",
      summary: "Travail sur l'emBeDding et des images de dimension X11 (UX)",
      events: "Travail sur le traitement des images, l'emBeDding et les images de dimension X11 (UX)."
    },
    {
      timestamp: 1674460800,
      subject: "Apprentissage de la connaissance",
      summary: "Mise en œuvre de techniques pour améliorer la compréhension de l'apprentissage automatique",
      events: "Recherche de méthodes pour améliorer la compréhension de l'apprentissage automatique."
    }
  ];
      
      for (let entry of TimesStampJanvier) {
        const date = new Date(entry.timestamp * 1000);
        entry.date = date.toLocaleString('fr-FR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        delete entry.timestamp;
      }
  
  for (let entry of TimesStampJanvier) {
    const date = new Date(entry.timestamp * 1000);
    entry.date = date.toLocaleString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    delete entry.timestamp;
  };
    
    for (let entry of TimesStampJanvier) {
      const date = new Date(entry.timestamp * 1000);
      entry.date = date.toLocaleString('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      delete entry.timestamp;
    }
    
    console.log(TimesStampJanvier);


  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp)]"},
      {role: "assistant",name:"[📔.codex]", content:`${PS1}+{response}${messages}`},
      {role: "system",name:"[🌌.systemDream]", content:"initilisation de `umc-ssh [Ω.univers-mc]`http://dev.univers-mc.cloud"},
      {role: "assistant",name:"[💬.cloudQuantum]", content:"init groq -dev {php -S localhost:5144}"},
      {role: "system",name:"[Ω.univers-mc]", content: "init1_`[🌌.systemDream]` git -m commit https://github.com/universmc/systemDream" },
      {role: "system",name:"", content:systemContent},
      //
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[dial:conversation(message/response)entre(user/assistant))]"},
  {role: "assistant",name:"[📔.codex]", content:"phase[01]:[END]:[brainstorming(session.timestamp)]"},
  {role: "system",name:"[📔.codex]", content:"`systemContent` genetation de la documention et traduction de la documentation en lang:Fr, Français:stp!"},
  {role: "system",name:"[🌌.systemDream]", content:"groq"},
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "data/mdMessages_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();
console.log("mobile")