const OpenAI = require("openai");
const fs = require("fs");
const path = require("path");

const openai = new OpenAI();

async function main(
) {
  const prompts = ["image graphic_(art)", "in majestic sunset over the mountains"];
  const outputDirectory = "data/";
  const imageExtension = ".png"; // Changez cette extension en fonction de vos besoins
for (const prompt of prompts) {
    for (let i = 0; i < 10; i++) {
      const image = await openai.images.generate({ prompt: prompt });

      const imageFilename = `${i}_${prompt.replace(/\s/g, "-")}${imageExtension}`;
      const outputFilePath = path.join(outputDirectory, imageFilename);

      const imageDataAsBuffer = Buffer.from(image.data);
      fs.writeFileSync(outputFilePath, imageDataAsBuffer, { encoding: 'binary' });

      console.log(`Image saved at ${outputFilePath}`);
    }
  }
}

main();
