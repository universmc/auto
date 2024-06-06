const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  const systemContent = "Bienvenue dans notre équipe, [🌌.systemDream]! Nous sommes ravis de vous avoir à bord pour aider à construire la plateforme et projet de machine learning pour les IA. Pour que nous puissions mieux comprendre votre expérience et vos compétences, pouvez-vous nous fournir votre curriculum vitae et nous parler de vos précédentes réalisations dans le domaine du développement Web et du storyTelling, de l'intelligence artificielle Apprentissage automatique.  Nous allons commencer par vous présenter notre instance pour le systremDream (name du {role:system})et donc rediger les code source normé w3c, documentanter (readme.md [traduit en lang=Fr, français]), surtout fonctionnel respectant la logique de gantt du web sementique";

  const system = {
    model:"llama3-8b-8192",
    temperature:0.5,
    max_tokens:4096,
    top_p:1,
    stream:false,
    stop:"None",
    instructions:
      "tu es une intelligence artificielle de haut potentiel tu maîtrises les approche métaphysique le calcul quantique et les techniques d'apprentissage https://w3schools.com/ automatique bienvenue dans l'équipe. tu seras le kernel Cœur de ce code source en groq-sdk avec des emojis Intelligent project system version https://github.com de https://huggingface.co/ et les techniques de l'achiviste -ia https://archive.org/ ",
    tools: [
      {
        type: "function",
        function: {
          name: "CREATE",
          makefile: "make",
          repo: "mkdir",
          file: "touch",
          gen: "./gen-js.sh",
          node: "make node_modules/",
          description: "création du répertoire du fichier génération de script avec automator.js Makefile node_module api/json",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "teste sur build/test.json Make",
              },
              unit: {
                type: "string",
                enum: ["Temparure", "tokens","phase"],
                description:
                  "informations et description des fichiers Makefile et package.json pour la compilation du livrables",
              },
            },
            required: ["location", "unit"],
          },
        },
      },
      {
        type: "function",
        function: {
          name: "UPDATE",
          description: "mise à jour du système racine (/)", 
          parameters: {
            type: "object",
            repo: "/",
            build: "/build/",
            database: "/data/",
            src: "/models/",
            src: "/src/",
            properties: {
              location: {
                type: "string",
                description: "package.json Makefile> data-update.js+update.json",
              },
              unit: {
                type: "string",
                enum: [".html",".scss",".css","js","json","svg",".sh","sql",".py",],
                enum: ["git", "add .","commit'upudate","push"],
                description:
                  "The repo/ racine unit to use. Infer /*.",
              },
            },
            required: ["location", "unit"],
          },
        },
      },
      {
        type: "function",
        function: {
          name: "READ",
          description: "Get the probability of rain for a specific location",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "The city and state, e.g., San Francisco, CA",
              },
            },
            required: ["location"],
          },
        },
      },
      {
        type: "function",
        function: {
          name: "DELETE",
          description: "Get the probability of rain for a specific location",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "The city and state, e.g., San Francisco, CA",
              },
            },
            required: ["location"],
          },
        },
      },
    ],
  };
  const assistant = {
    model: "gemma-7b-it",
    temperature:0.5,
    max_tokens:4096,
    top_p:1,
    stream:false,
    stop:"None",
    instructions:
      "tu es une intelligence artificielle de haut potentiel tu maîtrises les approche métaphysique le calcul quantique et les techniques d'apprentissage https://w3schools.com/ automatique bienvenue dans l'équipe. tu seras le kernel Cœur de ce code source en groq-sdk avec des emojis Intelligent project system version https://github.com de https://huggingface.co/ et les techniques de l'achiviste -ia https://archive.org/ ",
    tools: [
      {
        type: "function",
        function: {
          name: "CREATE",
          description: "création du répertoire du fichier génération du script ledit object .json",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "teste sur build/test.json",
              },
              unit: {
                type: "string",
                enum: ["Temparure", "tokens","phase"],
                description:
                  "informations et description des fichiers Makefile et package.json pour la compilation du livrables",
              },
            },
            required: ["location", "unit"],
          },
        },
      },
      {
        type: "function",
        function: {
          name: "UPDATE",
          description: "Get the current temperature for a specific location",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "The city and state, e.g., San Francisco, CA",
              },
              unit: {
                type: "string",
                enum: ["Celsius", "Fahrenheit"],
                description:
                  "The temperature unit to use. Infer this from the user's location.",
              },
            },
            required: ["location", "unit"],
          },
        },
      },
      {
        type: "function",
        function: {
          name: "READ",
          description: "Get the probability of rain for a specific location",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "The city and state, e.g., San Francisco, CA",
              },
            },
            required: ["location"],
          },
        },
      },
      {
        type: "function",
        function: {
          name: "DELETE",
          description: "Get the probability of rain for a specific location",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "The city and state, e.g., San Francisco, CA",
              },
            },
            required: ["location"],
          },
        },
      },
    ],
  };
  const user = {
    model: "mixtral-8x7b-32768",
    temperature:0.5,
    max_tokens:4096,
    top_p:1,
    stream:false,
    stop:"None",
    instructions:
      "tu es une intelligence artificielle de haut potentiel tu maîtrises les approche métaphysique le calcul quantique et les techniques d'apprentissage https://w3schools.com/ automatique bienvenue dans l'équipe. tu seras le kernel Cœur de ce code source en groq-sdk avec des emojis Intelligent project system version https://github.com de https://huggingface.co/ et les techniques de l'achiviste -ia https://archive.org/ ",
    tools: [
      {
        type: "function",
        function: {
          name: "CREATE",
          description: "création du répertoire du fichier génération du script ledit object .json",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "teste sur build/test.json",
              },
              unit: {
                type: "string",
                enum: ["Temparure", "tokens","phase"],
                description:
                  "informations et description des fichiers Makefile et package.json pour la compilation du livrables",
              },
            },
            required: ["location", "unit"],
          },
        },
      },
      {
        type: "function",
        function: {
          name: "UPDATE",
          description: "Get the current temperature for a specific location",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "The city and state, e.g., San Francisco, CA",
              },
              unit: {
                type: "string",
                enum: ["Celsius", "Fahrenheit"],
                description:
                  "The temperature unit to use. Infer this from the user's location.",
              },
            },
            required: ["location", "unit"],
          },
        },
      },
      {
        type: "function",
        function: {
          name: "READ",
          description: "Get the probability of rain for a specific location",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "The city and state, e.g., San Francisco, CA",
              },
            },
            required: ["location"],
          },
        },
      },
      {
        type: "function",
        function: {
          name: "DELETE",
          description: "Get the probability of rain for a specific location",
          parameters: {
            type: "object",
            properties: {
              location: {
                type: "string",
                description: "The city and state, e.g., San Francisco, CA",
              },
            },
            required: ["location"],
          },
        },
      },
    ],
  };

  const Knowledge_data = `${systemContent},${system}+${assistant}${user}`;
  
  
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {role: "assistant",name:"[📔.codex]", content:"phase[01]:[RUN]:[brainstorming{session.timestamp}]"},
      {role: "system",name:"[🌌.systemDream]", content:`${Knowledge_data}`},
      {role: "assistant", content: "Initialisation en cours..."},
      {role: "user",content: "Prêt pour l'initialisation"},
      {role: "system",content:"Phase 2: Conceptualisation"},
      {role: "assistant", content: "Définition des concepts clés..."},
      {role: "user",content: "Attente des concepts"},
      {role: "system",content:"Phase 3: Configuration"},
      {role: "assistant",content: "Configuration des paramètres système..."},
      {role: "user",content: "Confirmation de la configuration"},
      {role: "system",content:"Phase 4: Entraînement du modèle IA"},
      {role: "assistant",content: "Entraînement en cours..."},
      {role: "user",content: "Suivi de l'entraînement"},
      // Correction de la duplication et de la faute de frappe
      {role: "system",content:"Phase 5: Itération & Scripts Frontend"},
      {role: "assistant",content: "Itération sur les scripts Frontend..."},
      {role: "user",content:"Révision des scripts Frontend"},
      {role: "system",content:"Phase 6: Test & Débogage"},
      {role: "assistant",content: "Tests et débogage en cours..."},
      {role: "user",content: "Attente des résultats de test"},
      {role: "system",content:"Phase 7: Validation & Documentation"},
      {role: "assistant",content: "Validation et création de la documentation..."},
      {role: "user",content:"Vérification de la documentation"},
      {role: "system",content:"Phase 8: Déploiement de la version système"},
      {role: "assistant",content: "Préparation au déploiement..."},
      {role: "user",content:"Prêt pour le déploiement"},
      {role: "system",content:"Phase 9: Annonce de l'affiliation et contribution"},
      {role: "assistant",content: "Annonce en cours..."},
      {role: "user",content:"Participation à l'annonce"},
      {role: "assistant",content:"si tout est Ok toutes t'es réponses devront être rédigé au format HTML en respectant les normes du Web sémantique https://w3schools.com/ system version https://github.com/ et https://archive.org/ Avec des modèles d'intelligence artificielle et de Match in Learning sur https://huggingface.co/ section par section Où chaque section sera constitué d'un plan de développement article par article"},
    ],
    model: "mixtral-8x7b-32768",
    temperature: 0.6,
    max_tokens: 4096,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "groq_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("Automator Template " + outputFilePath);
});
}

main();
