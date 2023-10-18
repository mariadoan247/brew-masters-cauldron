import { faker } from "@faker-js/faker";

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  "Artificer",
  "Barbarian",
  "Bard",
  "Blood Hunter",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Mystic (UA)",
  "Paladin",
  "Ranger",
  "Ranger (Revised)",
  "Rogue",
  "Sorcerer",
  "Warlock",
  "Wizard",
  "Fighter (Gunslinger)",
];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    title: PRODUCT_NAME[index + 1],
  };
});

export default products;
