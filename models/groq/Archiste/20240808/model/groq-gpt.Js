const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const OpenAI = require("openai");

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
            role: "system",
            content: "Génère Une documentation détail forme cours Magrial pour les commandes et l'affinage de prompt optimisé par une intelligence artificielle [🌴.Groq] sur chatGPT"
      },
      {
        role: "assistant",
        content: "phase1 initialisation de la conversation avec chatGPT"
      },
      {
        role: "assistant",
        content: "phase1 de Conception du Model GPT codex dans le role assistance dans le chatbot de chatgpt user Mickael system name PI role:system"
      }
    ],
    temperature: 0.5,
    max_tokens: 4096,
  });

  const mdContent = completion.choices[0]?.message?.content;
  const outputFilePath = "dial-gpt3-" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
  fs.writeFileSync(outputFilePath, mdContent);
  console.log("Documentation du constructeur générée et enregistrée dans " + outputFilePath);
}

main();
