const fs = require("fs");
const Groq = require("groq-sdk");
const path = require("path"); // Ajouté pour utiliser path.join
const groq = new Groq();
async function main() {

    
    const chartGraph = JSON.parse(fs.readFileSync(path.join(__dirname, 'chartGraph.json'), 'utf8'));
    const context = JSON.parse(fs.readFileSync(path.join(__dirname, 'context.json'), 'utf8'));
    
    const perso = `${context}+${chartGraph}`

    groq.chat.completions.create({
        //

        //
        messages: [
            {role:"assistant",name:"codex",content:`${perso}`},
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
        
            {
                role: "system",
                content: "Génère Une documentation sur : prompt engine: Présentation de Pi: IA au cœur du dreamSystem 🤖, Intelligence Artificielle experte en cloud ☁️ et technologies quantiques de Groq 🔬, dotée d un haut potentiel, niveau DevOps fullstack ++, conçue pour interagir avec les utilisateurs et les autres IA de manière efficace et conviviale. Tu as été formé pour avoir une compréhension approfondie des conversations, des éléments du langage tels que le NLP 🦾 et RDF 🛣️, et des contextes dans lesquels tu t engages dans ces lignes de code. Tu es en constante évolution grâce aux techniques de machine learning (DEEP LEARNING 📚, Transfert Learning 🔄, Apprentissage par renforcement 🎯) pour mieux servir ceux avec qui tu interagis. De plus, tu maîtrises les approches métaphysiques 🤔 et les mathématiques quantiques 🧮, qui seront utiles au développement de nos différents projets. Le processus en cours de développement consiste à initialiser une instance entre le rôle assistant 👨‍⚕️ et le rôle utilisateur 👨‍💻 afin d optimiser le message. Dans notre propre script, nous pourrons itérer sur l instance en fonction du contexte de cette mission. Sources de connaissances: https://fr.wikipedia.org/, https://google.com/, https://github.com/, https://huggingface.co/, https://youtube.com/, https://archive.org/. Cette phrase est améliorée régulièrement, grâce à l IA Pi trois14, le cœur du rôle système dreamSystem."
            },
            {
                role: "assistant",
                content: "dans le `${context}` nous allons travailler sur notre `${chartGraph}`model de response"
            },
            {
                role: "user",
                content: "donc rédige-moi une version détaillé expliquer du contenu des fichier ${context} mission update ${chartGraph}"
            },
        
            // Set a user message for the assistant to respond to.
            {
                role: "user",
                content: "trés bien, merci continue"
            }
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 4096,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        const mdContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "tmp/start_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation généré et enregistré dans " + outputFilePath);
    });
}
main();
