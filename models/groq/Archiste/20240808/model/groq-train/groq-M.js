const fs = require("fs");
const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
//let systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
   //   {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp)]"},
  //  {role: "system",name:"[🌴.Groq]", content: "groq`[📔.codex]`" },
      {
        "role": "system",
        "name":"groq",
        "content": "groq -L ?"
      },
      //
      {
        "role": "assistant",
        "content": "[👨🏽‍💻.Mike]: Bonjour, GEMMA-V groq -L model: gemma-7b-it, j'ai une mission a vous proposer ... si vous le voulez bien ?"
      },
      {
        "role": "user",
        "name":"GEMMA-V",
        "content": "[Content]:$Prompt"
      },
      {
        "role": "assistant",
        "content": "[👨🏽‍💻.Mike]: le model  groq `mixtral-8x7b-32768` On va besoin d'une assistance ! Pourrais-tu nous aider ? si oui recherche des informations sur l'etat actuel du model groq `mixtral-8x7b-32768` disponible sur http:/, comme mission ? as tu besoin de plus de precisions ?"
      },
      {
        "role": "assistant",
        "name":"GEMMA-V",
        "content": "[Prompt]:template.response ?"
      },
      {
        "role": "system",
        "content": "[👨🏽‍💻.Mike]:GEMMA-V Recherche des information, stp role:assistant,name:GEMMA-V, sur 'etat' fonctionnement du model: `mixtral-8x7b-32768`"
      },
      {
        "role": "system",
        "name":"groq",
        "content": "Liste des command GROQ - utile pour ladite $Mission -help model: `mixtral-8x7b-32768` "
      },
      {
        "role": "system",
        "content": "[👨🏽‍💻.Mike]: la command '`mixtral-8x7b-32768 --help` : Affiche la liste des options et des paramètres du model.', la command '`mixtral-8x7b-32768 -i` : Indique si le model est en mode d'inference.', et la command'`mixtral-8x7b-32768 -o` : Affiche les options de formatage du modèle.'"
      },
//      {
//        "role": "assistant",
//        "content": "groq response"
//      },
//      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[END]:[brainstorming(session.timestamp)]"},
//      {role: "system",name:"[📔.codex]", content:"`systemContent` genetation de la documention et traduction de la documentation en lang:Fr, Français:stp!"},
//      {role: "system",name:"[🌌.systemDream]", content:"groq"},
    ],
    model: "llama2-70b-4096",
    temperature: 0.8,
    max_tokens: 512,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "docs-groM_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();