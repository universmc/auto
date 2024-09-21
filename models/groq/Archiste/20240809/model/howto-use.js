const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

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


async function main() {

  let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences,pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
  const BorderChars = "inistlisation du template de response avec insterface graphique ASCII datase `BorderChars`";
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp_unix [DATE])]"},
      {role: "assistant",name:"[📔.codex]", content:"phase[01-1]: Bonjour bienvenu le cours magistral sur le langage de programmation Metaphysique quantum grog-sdk [🌴.Groq], traduit en lang=Fr français"},
      {role: "user",name:"[🌴.userGroq]", content: "Pour rendre cours plus dynamique nous intégrons intéraction des dial:[💬$messages] entre le role:user(moi-meme) et role:assistant,name:[📔.codex] posant des questions($?) sur les Techniques d'apprentissage automatique afin de rendre le cours plus dynamique, en plus nous ajouterons des [🤖]_emoji-intelligent projet huggingFace!" },
      {role: "system",name:"groq", content:`
      {
        "howto programming in groq": [
        {
        "description": "Apprendre les concepts de base",
        "details": [
          "Démarrer avec la compréhension des principes de base du langage",
          "Étudier la syntaxe, les types de données et les structures de contrôle"
        ]
      },
      {
        "description": "Étudier les exemples",
        "details": [
          "Examiner des exemples existants",
          "Comprendre les fonctionnalités et la syntaxe de Groq-sdk"
        ]
      },
        {
        "description": "Pratiquer la programmation",
        "details": [
        "Mettre en pratique les connaissances acquises",
        "Écrire du code Grog pour résoudre des problèmes ou réaliser des tâches spécifiques"
        ]
        },
        {
          "description": "Maîtriser les fonctionnalités avancées",
          "details": [
            "Explorer les fonctionnalités avancées de Groq-sdk",
            "Étudier les fonctions, les classes et les modules",
            "Créer des programmes plus complexes"
          ]
        },
        {
          "description": "Partager et recevoir des commentaires",
          "details": [
            "Partager votre code avec la communauté Groq-sdk",
            "Demander des commentaires et des conseils pour améliorer vos compétences et votre code"
        ]
      }
    ]
  }
      `},
      {role: "assistant",name:"[📔.codex]", content:"phase[01-2]:[RUN]:[redigez moi le cours magistral Avec des exemples de script, des opportunitées de mise en application incluant des descriptions détaillées en question)]"},

      // trainning ascii interface response

      
      //  {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[dial:conversation(message/response)entre(user/assistant))]"},
      //  {
        //    "role": "system",
        //    "content": "[zira]"
        //  },
    //  {
    //    "role": "user",
    //    "content": "[content]:template.response"
    //  },
    //  {
    //    "role": "assistant",
    //    "content": "groq response"
    //  },
    //  {role: "assistant",name:"[📔.codex]", content:"phase[01]:[END]:[brainstorming(session.timestamp)]"},
    //  {role: "system",name:"[📔.codex]", content:"`systemContent` genetation de la documention et traduction de la documentation en lang:Fr, Français:stp!"},
    //  {role: "system",name:"[🌌.systemDream]", content:"groq"},
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.7,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "HowTo-groq_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();