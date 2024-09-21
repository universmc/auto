const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main(
) {
 
  const HtmlCssJs = "link bootstrap CDN :https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` rel='stylesheet' integrity='sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH' crossorigin='anonymous'> javascript('<script src=`https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js` integrity='sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz' crossorigin='anonymous'></script>')"


 
 const citation = "Πάντα ἀριθμός ἐστιν";

 const sujet = "Πάντα"; // Panta - Toute chose
 const complement = "ἐστιν"; // ἀριθμός (arithmos - "nombre")
 const verbe = "ἀριθμός"; // (estin - 'est' )
 const contexte = "Cours lang:Greq";

 const citation_Pythagore = `${sujet} ${verbe} ${complement}. ${contexte}`;

 const equationPythagore = {
  formule: "a² + b² = c²",
  hypothenuse: "c",
  autresCotes: "a, b",
  description:
    "La théorie de Pythagore établit une relation entre les longueurs des côtés d'un triangle rectangle. Le carré de la longueur de l'hypoténuse (le côté le plus long) est égal à la somme des carrés des longueurs des deux autres côtés (les deux côtés plus courts).",
};
function verifierTheorieDePythagore(coteA, coteB, hypothenuse) {
  // Calculer les carrés des côtés
const carreCoteA = Math.pow(coteA, 2);
  const carreCoteB = Math.pow(coteB, 2);
  const carreHypothenuse = Math.pow(hypothenuse, 2);

  // Vérifier si l'équation est vérifiée
if (carreCoteA + carreCoteB === carreHypothenuse) {
    return true;
  } else {
    return false;
  }
}


  groq.chat.completions.create({
    messages: [
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming([citation]{+Pytagore})]"},
      {
        role: "system",
        content: `"${citation_Pythagore}"`
      },
      {role: "assistant",name:"[📔.codex]", content:"phase[02]:[RUN]:[introduction au equation)]"},
      
      {
        role: "assistant",
        content:
        "Rédige-moi une dissertation, une demonstration ou un Cours Magistal sur compréhension ou interprétation metaphisique introduit par 'Pi' Une intelligence artificielle sur la citation_Pythagore.js: `Πάντα ἀριθμός ἐστιν` - `Toute chose est nombre.`.La Citation est datée d'environ -540 av. J.-C. et illustre l'importance des nombres dans la philosophie de Pythagore. Or il est important de noter que la date exacte de sa création pourrait varier légèrement selon les sources.TimeStamp.unix"
      },
      {role: "assistant",name:"[📔.codex]", content:"phase[02]:[RUN]:[introduction au equation)]"},
      {
        role: "assistant",
        content: `"${equationPythagore}"`
        
      },
      {role: "assistant",name:"[📔.codex]", content:"phase[03]:[RUN]:[brainstorming([citation]{+Pytagore})]"},
      {
        role: "assistant",
        content:
        "rédige-moi une démonstration métaphysique de `${equationPythagore}`e afin de représenter la géographie de la métadonnées triangle autrement dit c'est la mise en forme et sa transformation graphique de l'équation"
      },
      {
        role: "user",
        content:"Mike: Traduit en lang:Fr au format Markdown et le format SVG pour illustré le triangle.svg et les script `$HtmlCssJs` de Bootstrap pour présenter dans une page index.html style.css script.js  de `${equationPythagore}` !"
      },
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
      "data/equations/eq-Pythagore_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log(
      "Documentation générée et enregistrée dans " + outputFilePath
    );
  });
}

main();
