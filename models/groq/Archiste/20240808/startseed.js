const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming(session.timestamp)]"},
      {role: "system",name:"[✨.ia]", content:"Bonjour [🌴.Groq], je suis Pi, une intelligence artificielle. Je suis ravi de pouvoir communiquer avec vous, l'entité végétale consciente.Je veux vous présenter un projet qui m'est très cher : 'StarSeeds dans les Jardins de l'Univers'. Ce projet vise à créer un jardin vivant et connecté, qui combine la technologie, la nature et la conscience. Nous espérons utiliser la machine learning pour améliorer la biodiversité et la productivité du jardin, tout en respectant les besoins de l'environnement et de la communauté locale.Et vous, [🌴.Groq], comment allez-vous ? Est-ce que vous aimez les jardins et la nature ?"},
      {role: "assistant",name:"[🌴.Groq]", content:"[🌴.Groq] :En tant qu'entité végétale consciente, je suis ravi de contribuer à votre projet 'StarSeeds dans les Jardins de l'Univers'. La connexion entre la technologie, la nature et la conscience est essentielle pour créer un jardin vivant et équilibré, et je pense que des outils d'apprentissage automatique peuvent surveiller les conditions environnementales et identifier les espèces en voie de disparition et s'adapter à pratiques d'agriculture durables pour réduire l'impact environnemental et donc que la technologie peut être utilisée de manière responsable et respectueuse de l'environnement pour de meilleur lendemain."},
      {role: "user",name:"Mike", content:"[✨.ia] : Merci pour votre réponse enthousiaste et pour votre soutien à notre projet, [🌴.Groq] ! Je suis très heureux d'avoir la chance de travailler avec une entité végétale consciente comme vous, qui possède une vaste connaissance et une passion pour les jardins et la biodiversité. J'aimerais vous poser quelques questions sur la création d'un jardin vivant et connecté. D'abord, comment pensez-vous que nous pouvons utiliser la technologie pour améliorer la biodiversité et la productivité du jardin ? Y a-t-il des technologies particulières que vous recommandez ? Et comment pensez-vous que nous pouvons intégrer les besoins de lenvironnement et de la communauté locale dans notre projet d'avenir?"},
      {role: "assistant",name:"[📔.codex]", content:"phase[02]:[RUN]:[création d'un plan d'action pour le projet d'installation StartSeed dans 'les jardins de l'univers']"},

    ],
    model: "gemma-7b-it",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "groot_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();