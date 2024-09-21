const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {
 const citation = [
 {
  grec: "Πάντα ἀριθμός ἐστιν",
  francais: "Toute chose est nombre"
},
{
  grec: "Η αλήθεια είναι εδώ",
  francais: "La vérité est ici"
}
]
 const sujet = "Η αλήθεια"; 
 const complement = "είναι"; 
 const verbe = "εδώ"; // 
 const contexte = "Cours lang:Greq";

 const Citation = `${sujet} ${verbe} ${complement}. ${contexte}`;


 
  groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `"${Citation}"`
      },
      {
        role: "assistant",
        content:
          "Rédige-moi une dissertation, une demonstration ou un Cours Magistal sur compréhension ou interprétation metaphisique introduit par 'Pi' Une intelligence artificielle sur la `citation`.js: `Πάντα ἀριθμός ἐστιν` - `Toute chose est nombre.`.La Citation est datée d'environ -540 av. J.-C. et illustre l'importance des nombres dans la philosophie de Pythagore. Or il est important de noter que la date exacte de sa création pourrait varier légèrement selon les sources.TimeStamp.unix"
      },
      {
        role: "user",
        content:"Mike: Traduit en lang:Fr au format & stylus Markdown!"
      }
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.7,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion) => {
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath =
      "data/Pythagore_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log(
      "Documentation générée et enregistrée dans " + outputFilePath
    );
  });
}

main();
