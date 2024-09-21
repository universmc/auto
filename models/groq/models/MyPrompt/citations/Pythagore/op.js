const citations = [
    {
        grec: "Πάντα ἀριθμός ἐστιν",
        francais: "Toute chose est nombre"
    },
    {
        grec: "Η αλήθεια είναι εδώ",
        francais: "La vérité est ici"
    },
    {
        grec: "Η επιστήμη είναι δύναμη",
        francais: "La connaissance est pouvoir"
    }
];

const sujets = ["Πάντα", "Η αλήθεια", "Η επιστήμη"];
const verbes = ["ἐστιν", "είναι", "είναι"];
const complements = ["ἀριθμός", "εδώ", "δύναμη"];
const contexte = "Cours lang:Greq";

citations.forEach((citation, index) => {
  const Citation = `${citation.grec} - ${citation.francais} ${sujets[index]} ${verbes[index]} ${complements[index]}. ${contexte}`;
  console.log(Citation);
});