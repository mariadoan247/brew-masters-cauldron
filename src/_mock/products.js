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
    // price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    // priceSale:
    //   setIndex % 3
    //     ? null
    //     : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    // colors:
    //   (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
    //   (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
    //   (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
    //   (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
    //   (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
    //   (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
    //   PRODUCT_COLOR,
    // status: sample(["sale", "new", "", ""]),
  };
});

// const posts = [...Array(45)].map((_, index) => ({
//   id: faker.datatype.uuid(),
//   cover: `/assets/images/covers/cover_${index + 1}.jpg`,
//   title: POST_RACES[index + 1],
// }));

export default products;
