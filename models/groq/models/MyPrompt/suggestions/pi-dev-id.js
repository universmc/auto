const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

// Liste de citations prédéfinies
const suggestions = [
  {
    suggestion: "L'assistant aide l'utilisateur à définir une idée de projet",
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
        role: "user",
        content: "Rédige-moi une dissertation ou un court exposé sur ta compréhension ou interprétation de cette citation'[Intégration continue (CI) et livraison continue (CD) avec GitHub Actions pour automatiser les tests et le déploiement]'. Fais preuve d'originalité et de profondeur dans ton analyse en explorant différents aspects de la citation et en liant ces éléments à des concepts plus larges."
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
