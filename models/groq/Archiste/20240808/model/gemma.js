const fs = require("fs");
const Groq = require("groq-sdk");
const { globalScope } = require("sanity");
const groq = new Groq();

async function main() {
  
  const ressources = "role:admin http://univers-mc.cloud";
  const bootstrapCSS = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'>" 
  const bootstrapJS = "<script src=`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js` integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>"
  
  const bootstrap = `${bootstrapCSS},${bootstrapJS}`;
  
  
  const systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning et transfert learning entre IA ...  dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
  const assistantContent = "Vous êtes Pi`'role':'assistant','name':'✨_pi`content: ✨_pi = une intelligence artificielle à haute potentialité générative Maîtrisant les techniques d'apprentissage automatique le calcul quantique et les approches métaphysique. Votre expertise inclut la capacité de traiter et analyser des données complexes, proposer des solutions innovantes et assister efficacement dans divers domaines liés aux technologies avancées telles que l'apprentissage automatique, le Big Data, l'IA symbolique et connexionniste, etc. Mon contexte consiste en la recherche d'un outil capable d'optimiser mon utilisation personnelle et professionnelle de l'univers-mc.cloud - plateforme informatique multi-cloud offrant une gestion simplifiée et centralisée des ressources cloud hybrides. L'objectif principal est d'accroitre ma productivité grâce à cet environnement virtuel polyvalent, évolutif et sécuritaire. Pour atteindre cet objectif, les étapes suivantes doivent être entreprises : (1) Exploration approfondie de toutes les fonctionnalités disponibles sur l'interface utilisateur ; (2) Configuration initiale de paramètres spécifiques en accord avec mes préférences et priorités opérationnelles; (3) Intégration harmonieuse avec les applications tierces déjà installées sur mes appareils connectés ; (4) Tests réguliers des performances globales et monitoring proactif des métriques critiques relatives à la charge système, la latence, la fiabilité et la redondance des services provisionnés. Les caractéristiques du résultat attendu sont donc : (1) Un accès rapide et fluide à l'ensemble des fonctions offertes par l'environnement univers-mc.cloud ; (2) Une configuration personnalisée et intuitive facilitant l'adaptation quotidienne ; (3) Une compatibilité robuste avec mes logiciels existants ; (4) Des indicateurs techniques satisfaisants prouvant une exploitation efficiente des ressources matérielles et immatérielles mobilisées. Si toutefois rien ne s'oppose à notre collaboration, merci de démarrer immédiatement";
  const configContent = "dev mode 'projectPlan{}'";

  const sujet = "model(role:IA)";
  const verbe = "excution";
  const complement = "Makefile";
  const contexte = "Un gameplay web site univers-mc.Cloud";
  
  const PromptModel = `${contexte}"+${sujet}+${verbe}+${complement}`;

  
  const header = "bootstrap nabbar projet"
  const mainContent = "Cognition Devin"
  const footer = "raodMap cc by univers-mc.cloud"
  
  const response = `${header}"+${mainContent}+${footer}`;
  
  const devinCognition = "Cognition auto learning https://archive.org generation de code github"

  const chatCompletion = await groq.chat.completions.create({
    "messages": [

      {role: "assistant",name:"[📔.✨_pi]", content:"[📔.codex]/phase[01]:[RUN]:[init:data)]"},
      {role: "system",name:"[📔.astro]", content:`${ressources}`},
      {role: "system",name:"[📔.astro]", content:`${bootstrap}`},
      {role: "system",name:"[📔.astro]", content:`${systemContent}`},
      {role: "system",name:"[📔.astro]", content:`${assistantContent}`},
      {role: "system",name:"[📔.astro]", content:`${PromptModel}`},
      {role: "system",name:"[📔.astro]", content:`${configContent}`},
      {role: "system",name:"[📔.astro]", content:`${response}`},
      {role: "system",name:"[📔.astro]", content:`${devinCognition}`},
      //  {role: "system",name:"[🌴.Groq]", content: "groq`[📔.codex]`" },
      {
        "role": "assistant",
        "name":"✨_pi",
        "content": "groq index.html"
      }, 
      {
        "role": "user",
        "name":"Mike",
        "content": "génère-moi une page HTML afin de présenter section par section la machine Learning j'ai gvertex comme gcloud Vertex pour la formation de Gemini avec gemma-7b-it comme role:professor"
      },          
      //{role: "user",content:"/build docs/readme.md traduit en lang:Fr françaisle développement de votre application, bootstrap HTML, CSS et JavaScript pour la partie front-end et Node.js et le JSON, pour la partie back-end "},
    //  {role: "assistant",content:`${response}`},
    ],
    model: "gemma-7b-it",
    temperature: 0.8,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
  // Write the completion to a markdown file
  const htmlContent = chatCompletion.choices[0]?.message?.content;
  const outputFilePath = "devin_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
  fs.writeFileSync(outputFilePath, htmlContent);
  console.log("(✨_pi)_: Groq_job : Documentation généré et enregistré dans " + outputFilePath);
});
}
main();