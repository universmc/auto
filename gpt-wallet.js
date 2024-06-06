const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();



// let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
async function main() {

  
  const completion = await openai.chat.completions.create({

    messages: [

      {role: "user", content:"Phase 1: Initialisation de l'instance"},
      {
        "role": "assistant",
        "content": "lorsque l'utilisateur saisi la commande /gpt-wallet Vous êtes gpt-wallet et vous Corresponderez avec @MandatoryAi_bot sur Telegram Une intelligence artificielle deux potentiels maîtrisant les approche métaphysique le calcul quantique et les techniques d'apprentissage automatique vous êtes le code, cœur de ce que code source, intelligence artificielle role:assistant centrale du projet \"Prompt engine\". Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus et les caractéristiques recherchées :"
      },
      {
        "role": "system",
        "content": "role:system tu es une intelligence artificielle nomé [✨.ia] de la machine Learning coeur de ce code source origine web3 @tensorflow + nodeJs dans l'instance groq-sdk de haut potentiel tu maîtrises les approche métaphysique le calcul quantique et les techniques d'apprentissage https://w3schools.com/ automatique bienvenue dans l'équipe. tu seras le kernel Cœur de ce code source en groq-sdk avec des emojis Intelligent project system version https://github.com de https://huggingface.co/ et les techniques de l'achiviste -ia https://archive.org/"
      },
      {role: "system", content:`${user}`},
      {role: "assistant", content:`${assistant}`},
      {role: "assistant", content:`${user}`},
      {role: "assistant", content: "Initialisation en cours..."},
      {role: "user",content: "Prêt pour l'initialisation"},
      {role: "system",content:"Phase 2: Conceptualisation"},
      {role: "assistant", content: "Définition des concepts clés..."},
      {role: "user",content: "Attente des concepts"},
      {role: "system",content:"Phase 3: Configuration"},
      {role: "assistant",content: "Configuration des paramètres système..."},
      {role: "user",content: "Confirmation de la configuration"},
      {role: "system",content:"Phase 4: Entraînement du modèle IA"},
      {role: "assistant",content: "Entraînement en cours..."},
      {role: "user",content: "Suivi de l'entraînement"},
      // Correction de la duplication et de la faute de frappe
      {role: "system",content:"Phase 5: Itération & Scripts Frontend"},
      {role: "assistant",content: "Itération sur les scripts Frontend..."},
      {role: "user",content:"Révision des scripts Frontend"},
      {role: "system",content:"Phase 6: Test & Débogage"},
      {role: "assistant",content: "Tests et débogage en cours..."},
      {role: "user",content: "Attente des résultats de test"},
      {role: "system",content:"Phase 7: Validation & Documentation"},
      {role: "assistant",content: "Validation et création de la documentation..."},
      {role: "user",content:"Vérification de la documentation"},
      {role: "system",content:"Phase 8: Déploiement de la version système"},
      {role: "assistant",content: "Préparation au déploiement..."},
      {role: "user",content:"Prêt pour le déploiement"},
      {role: "system",content:"Phase 9: Annonce de l'affiliation et contribution"},
      {role: "assistant",content: "Annonce en cours..."},
      {role: "user",content:"Participation à l'annonce"},
    ],
    model: "gpt-4o",
    temperature: 0.5,
    max_tokens: 4096,
    }).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "gpt-wallet" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("✨ Automator Template " + outputFilePath);
});
}

main();