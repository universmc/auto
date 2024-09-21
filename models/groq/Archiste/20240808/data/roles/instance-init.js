const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();


async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            {role: "system", name:"systemDream",content:"phase1:initialisation de l'instance db_items:money([🛢]:drum, [💸]:AmericanDream,[💵]:Dollar-bills,[💴]:Yen_bills,[💶]:Euro_bills,[💷]:Pound_bills, [💳:]cb, [💰]:Money,)"},
            {role: "assistant",name:"✨_pi", content: "init"},
            {role: "user",name:"[💰]umcTokens", content: ""},
            {role: "system", name:"systemDream",content:"phase2:Conceptualisation"},
            {role: "assistant",name:"✨_pi", content: "init"},
            {role: "user",name:"[💰]umcTokens", content: ""},
            {role: "system", name:"systemDream",content:"phase3:Configuration"},
            {role: "assistant",name:"✨_pi", content: "init"},
            {role: "user",name:"[💰]umcTokens", content: ""},
            {role: "system", name:"systemDream",content:"phase3: entraînement modèle IA"},
            {role: "assistant",name:"✨_pi", content: "init"},
            {role: "user",name:"[💰]umcTokens", content: ""},
            {role: "system", name:"[💰]systemDream",content:"phase5: Itération & Des scripts Frontend"},
            {role: "assistant",name:"✨_pi", content: "init"},
            {role: "user",name:"[💰]umcTokens", content: ""},
            {role: "system", name:"systemDream",content:"phase6: Itération & Des scripts Backend"},
            {role: "assistant",name:"✨_pi", content: "init"},
            {role: "user",name:"[💰]umcTokens", content: ""},
            {role: "system", name:"systemDream",content:"phase7: Test & Debugage"},
            {role: "assistant",name:"✨_pi", content: "init"},
            {role: "user",name:"[💰]umcTokens", content: ""},
            {role: "system", name:"systemDream",content:"phase8: Validation & Documentation"},
            {role: "assistant",name:"✨_pi", content: "init"},
            {role: "user",name:"[💰]umcTokens", content: ""},
            {role: "system", name:"systemDream",content:"phase9: Deployement system Version"},
            {role: "assistant",name:"✨_pi", content: "init"},
            {role: "user",name:"[💰]umcTokens", content: ""},
            {role: "system", name:"systemDream",content:"phase10: Annonce affiliation contribution"},
            {role: "assistant",name:"✨_pi", content: "init"},
            {role: "user",name:"[💰]umcTokens", content: "régidez une documentation détaillée de notre instance optimiser avec le modèle de Gantes c'est-à-dire des estimations de durée Avec une liste d'actions à réaliser étape par étape (step by step) pour chacune des choses, au format Markdows pour servir github.com/universmc/umc/docs/readme.md que tu auras traduit en lang:Fr, français"},
            {role: "system", name:"systemDream",content:"groq -L"},
        ],
        // The language model which will generate the completion.
        model: "mixtral-8x7b-32768",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.8,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 2024,
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
        const outputFilePath = "output/_💰umcTokens_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
        fs.writeFileSync(outputFilePath, mdContent);
        console.log("Documentation généré et enregistré dans " + outputFilePath);
    });
}
main();
