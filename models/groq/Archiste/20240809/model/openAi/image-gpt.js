const OpenAI = require("openai");
const fs = require("fs");
const path = require("path");

const openai = new OpenAI();

async function main(
) {
  const prompts = ["A cute baby sea otter", "A majestic sunset over the mountains"];
  const outputDirectory = "data/";

  for (const prompt of prompts) {
    for (let i = 0; i < 10; i++) {
      const image = await openai.images.generate({ prompt: prompt });

      const imageExtension = path.extname(image.data);
      const imageFilename = `${i}_${prompt.replace(/\s/g, "-")}${imageExtension}`;
      const outputFilePath = path.join(outputDirectory, imageFilename);

      fs.writeFileSync(outputFilePath, image.data);
      console.log(`Image saved at ${outputFilePath}`);
    }
  }
}

main();
