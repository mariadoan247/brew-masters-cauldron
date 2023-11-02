const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FeatSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    prerequisite: {
        type: String,
        required: true
    },
    text: {
        type: [String],
        required: true
    },
    modifier: {
        type: {
            category: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        },
        required: true
    }
});

module.exports = mongoose.model('Feat', FeatSchema);

/*
LIST OF FEATS:
0. Actor
1. Alert
2. Athlete (Dexterity)
3. Athlete (Strength)
4. Bountiful Luck
5. Charger
6. Crossbow Expert
7. Defensive Duelist
8. Dragon Fear (Charisma)
9. Dragon Fear (Constitution)
10. Dragon Fear (Strength)
11. Dragon Hide (Charisma)
12. Dragon Hide (Constitution)
13. Dragon Hide (Strength)
14. Drow High Magic
15. Dual Wielder
16. Dungeon Delver
17. Durable
18. Dwarven Fortitude
19. Elemental Adept (Acid)
20. Elemental Adept (Cold)
21. Elemental Adept (Fire)
22. Elemental Adept (Lightning)
23. Elemental Adept (Thunder)
24. Elven Accuracy (Charisma)
25. Elven Accuracy (Dexterity)
26. Elven Accuracy (Intelligence)
27. Elven Accuracy (Wisdom)
28. Fade Away (Dexterity)
29. Fade Away (Intelligence)
30. Fey Teleportation (Charisma)
31. Fey Teleportation (Intelligence)
32. Flames of Phlegethos (Charisma)
33. Flames of Phlegethos (Intelligence)
34. Grappler
35. Great Weapon Master
36. Healer
37. Heavily Armored
38. Heavy Armor Master
39. Infernal Constitution
40. Inspiring Leader
41. Keen Mind
42. Lightly Armored (Dexterity)
43. Lightly Armored (Strength)
44. Linguist
45. Lucky
46. Mage Slayer
47. Magic Initiate (Bard)
48. Magic Initiate (Cleric)
49. Magic Initiate (Druid)
50. Magic Initiate (Sorcerer)
51. Magic Initiate (Warlock)
52. Magic Initiate (Wizard)
53. Martial Adept
54. Medium Armor Master
55. Mobile
56. Moderately Armored (Dexterity)
57. Moderately Armored (Strength)
58. Mounted Combatant
59. Observant (Intelligence)
60. Observant (Wisdom)
61. Orcish Fury (Constitution)
62. Orcish Fury (Strength)
63. Polearm Master
64. Prodigy
65. Resilient (Charisma)
66. Resilient (Constitution)
67. Resilient (Dexterity)
68. Resilient (Intelligence)
69. Resilient (Strength)
70. Resilient (Wisdom)
71. Ritual Caster (Bard)
72. Ritual Caster (Cleric)
73. Ritual Caster (Druid)
74. Ritual Caster (Sorcerer)
75. Ritual Caster (Warlock)
76. Ritual Caster (Wizard)
77. Savage Attacker
78. Second Chance (Charisma)
79. Second Chance (Constitution)
80. Second Chance (Dexterity)
81. Sentinel
82. Sharpshooter
83. Shield Master
84. Skilled
85. Skulker
86. Spell Sniper
87. Squat Nimbleness (Dexterity)
88. Squat Nimbleness (Strength)
89. Svirfneblin Magic
90. Tavern Brawler
91. Tough
92. War Caster
93. Weapon Master (Desterity)
94. Weapon Master (Strength)
95. Wood Elf Magic
*/