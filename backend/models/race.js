const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    ability: {
        type: String,
        required: true
    },
    speed: {
        type: Number,
        required: true
    },
    ability: {
        type: String,
        required: true
    },
    spellAbility: {
        type: String,
        required: true
    },
    proficiency: {
        type: String,
        required: true
    },
    trait: {
        type: [
            {
                name: {
                    type: String,
                    required: true
                },
                text: [
                    {
                        description: {
                            type: String,
                            required: true
                        }
                    }
                ]
            }
        ],
        required: true
    }
});

module.exports = mongoose.model('Race', RaceSchema);

/*
LIST OF RACES:
0. Aarakocra
1. Aasimar (DMG)
2. Air Genasi
3. Bugbear
4. Dark Elf
5. Deep Gnome
6. Dragonborn (Black)
7. Dragonborn (Blue)
8. Dragonborn (Brass)
9. Dragonborn (Bronze)
10. Dragonborn (Copper)
11. Dragonborn (Gold)
12. Dragonborn (Green)
13. Dragonborn (Red)
14. Dragonborn (Silver)
15. Dragonborn (White)
16. Duergar
17. Earth Genasi
18. Eladrin
19. Eladrin (DMG)
20. Fallen Aasimar
21. Firbolg
22. Fire Genasi
23. Forest Gnome
24. Ghostwise Halfling
25. Githyanki
26. Githzerai
27. Goblin
28. Goliath
29. Half-Elf
30. Half-Orc
31. High Elf
32. Hill Dwarf
33. Hobgoblin
34. Human
35. Human Variant
36. Kenku
37. Kobold
38. Lightfoot Halfling
39. Lizardfolk
40. Mountain Dwarf
41. Orc
42. Protector Aasimar
43. Rock Gnome
44. Scourge Aasimar
45. Sea Elf
46. Shadar-kai
47. Stout Halfling
48. Tabaxi
49. Tiefling
50. Tiefling (Feral)
51. Tiefling of Asmodeus
52. Tiefling of Baalzebul
53. Tiefling of Dispater
54. Tiefling of Fierna
55. Tiefling of Glasya
56. Tiefling of Levistus
57. Tiefling of Mammon
58. Tiefling of Mephistopheles
59. Tiefling of Zariel
60. Tortle
61. Triton
62. Water Genasi
63. Wood Elf
64. Yuan-Ti Pureblood
*/