const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
// « Soit A un succès dans la vie. Alors A = x + y + z, où x = travailler, y = s’amuser, z = se taire. »
async function main(
) {
  const sujet = " Soit A un succès dans la vie.";
  const verbes = "où x = travailler, y = s’amuser, z = se taire.";
  const complement = "Alors A = x + y + z";
  const contexte = "selon Albert Einstein sur Sur les équations métaphysique et le calcul quantique";

  const equation = `${sujet}+${verbes}+${complement}+${contexte}`;

  groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `"${equation}"`
},
      {
        role: "assistant",
        content:
          "Rédige-moi une dissertation ou un court Magistal sur ta compréhension ou interprétation l'equation d'Albert Einstein « Soit A un succès dans la vie. Alors A = x + y + z, où x = travailler, y = s’amuser, z = se taire. »! "
}
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.5,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion) => {
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath =
      "data/Einstein_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log(
      "Documentation générée et enregistrée dans " + outputFilePath
    );
  });
}

async function phraseEinstein(sujet, verbe, complement, contexte) {
  const phrases = [
    `"Selon ${contexte}, ${sujet} ${verbe} ${complement}."`,
    `"${contexte} croyait fermement que ${sujet} ${verbe} ${complement}."`,
    `"En tant que scientifique, ${contexte} savait que ${sujet} était ${verbe} ${complement}."`,
    `"Pour ${contexte}, il était clair que ${sujet} était ${verbe} ${complement}."`
];

  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

main();
