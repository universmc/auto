import fs from "fs";
// Importez "groq-sdk" comme un module CommonJS
const { Groq } = await import("groq-sdk");

const groq = new Groq();

function getTasks() {
  const data = fs.readFileSync('./src/json/tasks.json');
  const tasks = JSON.parse(data);
  return tasks || [];
}
async function addTask(task) {
  const tasks = getTasks();
  tasks.push(task);

  try {
    await fs.promises.writeFile('./src/json/tasks.json', JSON.stringify(tasks));
    console.log(`Tâche "${task}" ajoutée avec succès.`);
  } catch (error) {
    console.error('Une erreur est survenue lors de l\'ajout de la tâche :', error.message);
  }
}
// Fonction principale

// Fonction principale
function principle(project,ia_mania,context,role,skills,task,process,characteristics,ImmediateActions,feedbackPrediction,date = new Date().toLocaleDateString('fr-FR')) {
  function getTasks() {
    const data = fs.readFileSync('./src/json/tasks.json');
    const tasks = JSON.parse(data);
    return tasks || [];
    }
  const tasks = getTasks();

    const Project =`"${project}+devops"`

  const message = `
  ╔════════════════════════════════════╗\n
  ║✨            ${date}:            ✨║ 
  ║     ${project} Template.response   ║\n
  ║         Bienvenue ${ia_mania}      ║\n
  ║                                    ║\n    
  ║   ${context}                       ║\n
  ║   ${skills} ${role}                ║\n
  ║   ${process}                       ║\n
  ║   ${task}                          ║\n
  ║   ${characteristics}               ║\n
  ║   ${ImmediateActions}              ║\n
  ║   ${feedbackPrediction}            ║\n
  ║✨                                ✨║\n
  ╚════════════════════════════════════╝
  `;

  console.log(message);
  const response = {
    message,
  };

  return response;
}

// Appel de la fonction principale avec une tâche
const principleResponse = principle('Projet','ia-mania','Context','Role','Skills','Tasks','Process','Characteristics','ImmediateActions','feedbackPrediction' );

// Vérifiez la commande passée à partir de la ligne de commande
const command = process.argv[2];
if (command === 'addTask') {
  const taskToAdd = process.argv[3];
  addTask(taskToAdd);
} else if (command === 'arg') {
  const project = process.argv[2];
  const context = process.argv[3];
  const ia_mania = process.argv[4];
  const role = process.argv[5];
  const skills = process.argv[6];
  const tasks = process.argv[7];
  const process = process.argv[8];
  const characteristics = process.argv[9];
  const ImmediateActions = process.argv[10];
  const feedbackPrediction = process.argv[11];
  const arg = principle(project, context,ia_mania,role,skills,tasks,process,characteristics,ImmediateActions,feedbackPrediction);
}
// Création de la completion avec groq-sdk
const completion = await groq.chat.completions.create({
  messages: [
    {role: "assistant", content:"Phase 1: Initialisation de l'instance"},
    {role: "system", content:": vous êtes programmeur, partenaire de développement full stack, partenaire de développement full stack qui comprend mes besoins en tant que développeur full stack, en s'intégrant à votre stack technologique, prét à optimisé les prompts, l'intelligence artificielle centrale au coeur de la plateforme -ia dédier à la présentation des Projets -ia \" Model IA \". Voici votre contexte, vos rôles, vos compétences, vos tâches, votre processus, les caractéristiques et les actions imédiates rechétchées et le feedback attendu :"},
    {role: "user", content: `"${principleResponse.message}"`},
  ],
  model: "mixtral-8x7b-32768",
  temperature: 0.6,
  max_tokens: 4096,
}).then((chatCompletion) => {
  const mdContent = chatCompletion.choices[0]?.message?.content;
  const outputFilePath = "Model-ia" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
  fs.writeFileSync(outputFilePath, mdContent);
  console.log("Documentation du constructeur générée et enregistrée dans " + outputFilePath);
});
