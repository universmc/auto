const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// Liste de citations prédéfinies
const suggestions = [
  {
    suggestion: "L'assistant peut insuffler un peu de magie dans le projet de l'utilisateur en lui proposant des idées créatives, originales et hors du commun, qui rendront son projet unique et mémorable. Il pourra l'encourager à penser en dehors des limites conventionnelles, à faire preuve d'imagination et de créativité, et à oser innover et explorer de nouveaux territoires",
    author: "Pi 3,14"
},
  // Ajoutez plus de citations ici...
];

async function main(
) {
  // Sélectionnez aléatoirement une suggestion de la liste des suggestions prédéfinies
const { suggestion, author } = suggestions[Math.floor(Math.random() * suggestions.length)];

  groq.chat.completions.create({
    messages: [
        {
            role: "system",
            content: `"initialisation du systemeDream groq Service client il intelligence 'pi'`
    },
      {
        role: "user",
        content: `"${suggestion}" - ${author}`
},
{
  role: "assistant",
  content: "L'assistant peut suivre l'avancement du projet et aider l'utilisateur à surmonter les obstacles et les défis qui se présentent, en lui donnant des conseils, en partageant des ressources utiles ou en l'encourageant à persévérer "
},
      {
        role: "user",
        content: "Rédige-moi une dissertation ou un court exposé sur ta compréhension ou interprétation de cette citation'[Intégration continue (CI) et livraison continue (CD) avec GitHub Actions pour automatiser les tests et le déploiement]'. Fais preuve d'originalité et de profondeur dans ton analyse en explorant différents aspects de la citation et en liant ces éléments à des concepts plus larges. La documentation devrait être optimisé pour le former markdown .md"
}
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.2,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false,
  })
    .then((chatCompletion) => {
      const mdContent = chatCompletion.choices[0]?.message?.content;
      const outputFilePath =
        "output/ln-sit_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
      fs.writeFileSync(outputFilePath, mdContent);
      console.log("Documentation générée et enregistrée dans " + outputFilePath);
    })
    .catch((error) => {
      console.error("Une erreur s'est produite:", error);
    });
}

main();
