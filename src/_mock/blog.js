import { faker } from '@faker-js/faker';

const POST_RACES = [
  'Whiteboard Templates By Industry Leaders',
  "Aarakocra",
  "Aasimar (Fallen)",
  "Aasimar (Protector)",
  "Aasimar (Scourge)",
  "Bugbear (Race)",
  'Dragonborn',
  'Dwarf (Duergar)',
  'Dwarf (Hill)',
  'Dwarf (Mountain)',
  'Elf (Drow)',
  'Elf (Eladrin)', 
  'Elf (High)',
  'Elf (Wood)',
  'Firbolg (Race)',
  'Genasi (Air)',
  'Genasi (Earth)',
  'Genasi (Fire)',
  'Genasi (Water)',
  'Gnome (Deep)',
  'Gnome (Forest)',
  'Gnome (Rock)',
  'Goblin (Race)',
  'Goliath',
  'Half-Elf',
  'Half-Elf (Aquatic Elf Descent)',
  'Half-Elf (Drow Descent)',
  'Half-Elf (Moon Elf or Sun Elf Descent)',
  'Half-Elf (Wood Elf Descent)',
  'Half-Orc',
  'Halfling (Ghostwise)',
  'Halfling (Lightfoot)',
  'Halfling (Stout)',
  'Hobgoblin (Race)',
  'Human',
  'Human (Variant)',
  'Kenku (Race)',
  'Kobold (Race)',
  'Lizardfolk (Race)',
  'Orc (Race)',
  'Shifter (Razorclaw)',
  'Shifter (Wildhunt)',
  'Tabaxi',
  'Tiefling (Infernal)',
  'Triton',
  'Yuan-ti Pureblood (Race)'
];

const posts = [...Array(45)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_RACES[index + 1],
}));

export default posts;
