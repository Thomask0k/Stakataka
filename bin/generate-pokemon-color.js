const fs = require("fs");

const colors = {
  fire: "239, 128, 48",
  dark: "112, 88, 72",
  dragon: "239, 128, 48",
  electric: "248, 207, 48",
  fairy: "240, 182, 188",
  grass: "120, 200, 79",
  ice: "152, 216, 216",
  psychic: "248, 87, 135",
  water: "103, 144, 240",
  flying: "168, 144, 240",
  bug: "168, 183, 32",
  steel: "184, 184, 208",
  rock: "184, 160, 56",
  normal: "168, 168, 119",
  fighting: "192, 48, 40",
  poison: "159, 64, 159",
  ground: "224, 192, 104",
  ghost: "112, 88, 152",
};

let css = "";

Object.keys(colors).forEach((color) => {
  css += `
  .card-bg-${color} {
    background: rgba(${colors[color]}, 1);
  }
  `;
});

Object.keys(colors).forEach((color) => {
  Object.keys(colors).forEach((color2) => {
    if (color === color2) {
      return;
    }

    css += `
.card-bg-${color}-${color2} {
  background-image: linear-gradient(
    45deg,
    rgba(${colors[color]}, 1),
    rgba(${colors[color2]}, 1)
  );
}
  `;
  });
});

fs.writeFileSync("./bla.css", css, "utf-8");
