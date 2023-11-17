const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MonsterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    alignment: {
        type: String,
        required: true
    },
    ac: {
        type: Number,
        required: true
    },
    hp: {
        type: String,
        required: true
    },
    speed: {
        type: String,
        required: true
    },
    str: {
        type: Number,
        required: true
    },
    dex: {
        type: Number,
        required: true
    },
    con: {
        type: Number,
        required: true
    },
    int: {
        type: Number,
        required: true
    },
    wis: {
        type: Number,
        required: true
    },
    cha: {
        type: Number,
        required: true
    },
    save: {
        type: String,
        required: true
    },
    skill: {
        type: String,
        required: true
    },
    resist: {
        type: String,
        required: true
    },
    vulnerable: {
        type: String,
        required: true
    },
    immune: {
        type: String,
        required: true
    },
    conditionImmune: {
        type: String,
        required: true
    },
    senses: {
        type: String,
        required: true
    },
    passive: {
        type: Number,
        required: true
    },
    languages: {
        type: String,
        required: true
    },
    cr: {
        type: String,
        required: true
    },
    trait: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    spells: {
        type: String,
        required: true
    },
    slots: {
        type: String,
        required: true
    },
    environment: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Monster', MonsterSchema);

/*
LIST OF MONSTERS:
0. Aarakocra
1. Abjurer
2. Aboleth
3. Abominable Yeti
4. Abyssal Wretch
5. Acererak
6. Acolyte
7. Adult Black Dragon
8. Adult Blue Dracolich
9. Adult Blue Dragon
10. Adult Brass Dragon
11. Adult Bronze Dragon
12. Adult Copper Dragon
13. Adult Gold Dragon
14. Adult Green Dragon
15. Adult Kruthik
16. Adult Oblex
17. Adult Red Dragon
18. Adult Silver Dragon
19. Adult White Dragon
20. Aerisi Kalinoth
21. Air Elemental
22. Air Elemental Myrmidon
23. Albino Dwarf Spirit Warrior
24. Albino Dwarf Warrior
25. Aldani (Lobsterfolk)
26. Alhoon
27. Alkilith
28. Allip
29. Allosaurus
30. Almiraj
31. Ambush Drake
32. Amnizu
33. Ancient Black Dragon
34. Ancient Blue Dragon
35. Ancient Brass Dragon
36. Ancient Bronze Dragon
37. Ancient Copper Dragon
38. Ancient Gold Dragon
39. Ancient Green Dragon
40. Ancient Red Dragon
41. Ancient Silver Dragon
42. Ancient White Dragon
43. Androsphinx
44. Animated Armor
45. Animated Table
46. Ankheg
47. Ankylosaurus
48. Ankylosaurus Zombie
49. Annis Hag
50. Ape
51. Apprentice Wizard
52. Arcanaloth
53. Archdruid
54. Archer
55. Archmage
56. Armanite
57. Artus Cimber
58. Assassin
59. Assassin Vine
60. Astral Dreadnought
61. Atropal
62. Augrek Brighthelm
63. Aurochs
64. Autumn Eladrin
65. Avatar of Death
66. Awakened Shrub
67. Awakened Tree
68. Awakened Zurkhwood
69. Axe Beak
70. Azbara Jos
71. Azer
72. Baba Lysaga
73. Baba Lysaga's Creeping Hut
74. Babau
75. Baboon
76. Badger
77. Bael
78. Balhannoth
79. Balor
80. Banderhobb
81. Bandit
82. Bandit Captain
83. Banshee
84. Baphomet
85. Barbed Devil
86. Bard
87. Barghest
88. Barlgura
89. Barovian Witch
90. Basilisk
91. Bastian Thermandar
92. Bat
93. Bearded Devil
94. Behir
95. Beholder
96. Beholder Zombie
97. Belaphoss
98. Beldora
99. Berbalang
100. Berserker
101. Bheur Hag
102. Black Abishai
103. Black Bear
104. Black Dragon Wyrmling
105. Black Earth Guard
106. Black Earth Priest
107. Black Guard Drake
108. Black Pudding
109. Blackguard
110. Blagothkus
111. Blink Dog
112. Blood Hawk
113. Blue Abishai
114. Blue Dragon Wyrmling
115. Blue Guard Drake
116. Blue Slaad
117. Boar
118. Bodak
119. Boggle
120. Bone Devil
121. Bone Devil Polearm
122. Bone Naga (Guardian)
123. Bone Naga (Spirit)
124. Boneclaw
125. Brass Dragon Wyrmling
126. Bridesmaid of Zuggtmoy
127. Brontosaurus
128. Bronze Dragon Wyrmling
129. Bronze Scout
130. Broom of Animated Attack
131. Brown Bear
132. Bryn Lightfingers
133. Bugbear
134. Bugbear Chief
135. Bulette
136. Bulezau
137. Bullywug
138. Burrowshark
139. Cadaver Collector
140. Cambion
141. Camel
142. Canoloth
143. Captain Othelstan
144. Carrion Crawler
145. Cat
146. Catoblepas
147. Cave Bear
148. Cave Fisher
149. Centaur
150. Centaur Mummy
151. Chain Devil
152. Chamberlain of Zuggtmoy
153. Champion
154. Chasme
155. Chimera
156. Chitine
157. Choker
158. Choldrith
159. Chuul
160. Chuul Spore Servant
161. Chwinga
162. Clay Golem
163. Cloaker
164. Cloud Giant
165. Cloud Giant Smiling One
166. Cockatrice
167. Commoner
168. Conjurer
169. Constrictor Snake
170. Copper Dragon Wyrmling
171. Corpse Flower
172. Couatl
173. Cow
174. Crab
175. Crag Cat
176. Cranium Rat
177. Crawling Claw
178. Crocodile
179. Crushing Wave Priest
180. Crushing Wave Reaver
181. Cult Fanatic
182. Cultist
183. Cyclops
184. Dao
185. Darathra Shendrel
186. Dark Tide Knight
187. Darkling
188. Darkling Elder
189. Darkmantle
190. Darz Helgar
191. Death Dog
192. Death Kiss
193. Death Knight
194. Death Slaad
195. Death Tyrant
196. Deathlock
197. Deathlock Mastermind
198. Deathlock Wight
199. Decapus
200. Deep Gnome (Svirfneblin)
201. Deep Rothé
202. Deep Scion
203. Deer
204. Deinonychus
205. Demilich
206. Demogorgon
207. Derro
208. Derro Savant
209. Deva
210. Devourer
211. Dhergoloth
212. Dimetrodon
213. Dire Troll
214. Dire Wolf
215. Displacer Beast
216. Diviner
217. Djinni
218. Dolphin
219. Doppelganger
220. Draegloth
221. Draft Horse
222. Dragon Turtle
223. Dragonbait
224. Dragonclaw
225. Dragonfang
226. Dragonsoul
227. Dragonwing
228. Dralmorrer Borngray
229. Drannin Splithelm
230. Dread Warrior
231. Dretch
232. Drider
233. Drider Spellcaster
234. Droki
235. Drow
236. Drow Arachnomancer
237. Drow Elite Warrior
238. Drow Favored Consort
239. Drow House Captain
240. Drow Inquisitor
241. Drow Mage
242. Drow Matron Mother
243. Drow Priestess of Lolth
244. Drow Shadowblade
245. Drow Spore Servant
246. Druid
247. Dryad
248. Duergar
249. Duergar Darkhaft
250. Duergar Despot
251. Duergar Hammerer
252. Duergar Kavalrachni
253. Duergar Keeper of the Flame
254. Duergar Mind Master
255. Duergar Screamer
256. Duergar Soulblade
257. Duergar Spore Servant
258. Duergar Spy
259. Duergar Stone Guard
260. Duergar Warlord
261. Duergar Xarron
262. Duodrone
263. Dust Mephit
264. Duvessa Shane
265. Dybbuk
266. Eagle
267. Earth Elemental
268. Earth Elemental Myrmidon
269. Eblis
270. Efreeti
271. Eidolon
272. Elder Brain
273. Elder Oblex
274. Elder Tempest
275. Elephant
276. Elizar Dryflagon
277. Elk
278. Empyrean
279. Enchanter
280. Erinyes
281. Eternal Flame Guardian
282. Eternal Flame Priest
283. Ettercap
284. Ettin
285. Evil Mage
286. Evoker
287. Ezmerelda d'Avenir
288. Faerie Dragon (Blue)
289. Faerie Dragon (Green)
290. Faerie Dragon (Indigo)
291. Faerie Dragon (Orange)
292. Faerie Dragon (Red)
293. Faerie Dragon (Violet)
294. Faerie Dragon (Yellow)
295. Fathomer
296. Feathergale Knight
297. Fire Elemental
298. Fire Elemental Myrmidon
299. Fire Giant
300. Fire Giant Dreadnought
301. Fire Snake
302. Firenewt Warlock of Imix
303. Firenewt Warrior
304. Flail Snail
305. Flameskull
306. Flamewrath
307. Flesh Golem
308. Flind
309. Flumph
310. Flying Monkey
311. Flying Snake
312. Flying Sword
313. Fomorian
314. Fraz-Urb'luu
315. Frog
316. Froghemoth
317. Frost Giant
318. Frost Giant Everlasting One
319. Frost Salamander
320. Frulam Mondath
321. Galeb Duhr
322. Gar Shatterkeel
323. Gargoyle
324. Gas Spore
325. Gauth
326. Gazer
327. Gelatinous Cube
328. Geonid
329. Geryon
330. Ghald
331. Ghast
332. Ghelryn Foehammer
333. Ghost
334. Ghoul
335. Giant Ape
336. Giant Badger
337. Giant Bat
338. Giant Boar
339. Giant Centipede
340. Giant Constrictor Snake
341. Giant Crab
342. Giant Crayfish
343. Giant Crocodile
344. Giant Eagle
345. Giant Elk
346. Giant Fire Beetle
347. Giant Fly
348. Giant Four-Armed Gargoyle
349. Giant Frog
350. Giant Goat
351. Giant Hyena
352. Giant Ice Toad
353. Giant Lightning Eel
354. Giant Lizard
355. Giant Octopus
356. Giant Owl
357. Giant Poisonous Snake
358. Giant Rat
359. Giant Rat (Diseased)
360. Giant Scorpion
361. Giant Sea Horse
362. Giant Shark
363. Giant Skeleton
364. Giant Snapping Turtle
365. Giant Spider
366. Giant Strider
367. Giant Subterranean Lizard
368. Giant Toad
369. Giant Vulture
370. Giant Wasp
371. Giant Weasel
372. Giant Wolf Spider
373. Gibbering Mouther
374. Giff
375. Girallon
376. Girallon Zombie
377. Githyanki Gish
378. Githyanki Kith'rak
379. Githyanki Knight
380. Githyanki Supreme Commander
381. Githyanki Warrior
382. Githzerai Anarch
383. Githzerai Enlightened
384. Githzerai Monk
385. Githzerai Zerth
386. Glabrezu
387. Gladiator
388. Gloom Weaver
389. Gnoll
390. Gnoll Fang of Yeenoghu
391. Gnoll Flesh Gnawer
392. Gnoll Hunter
393. Gnoll Pack Lord
394. Gnoll Witherling
395. Goat
396. Goblin
397. Goblin Boss
398. Gold Dragon Wyrmling
399. Gorgon
400. Goristro
401. Gray Ooze
402. Gray Ooze (Psychic)
403. Gray Render
404. Gray Slaad
405. Graz'zt
406. Greater Zombie
407. Green Abishai
408. Green Dragon Wyrmling
409. Green Guard Drake
410. Green Hag
411. Green Slaad
412. Grell
413. Grick
414. Grick Alpha
415. Griffon
416. Grimlock
417. Grisha
418. Grung
419. Grung Elite Warrior
420. Grung Wildling
421. Guard
422. Guard Drake
423. Guardian Naga
424. Guardian Portrait
425. Gynosphinx
426. Hadrosaurus
427. Half-Ogre (Ogrillon)
428. Half-Red Dragon Veteran
429. Harpy
430. Hawk
431. Hell Hound
432. Hellenrae
433. Hellfire Engine
434. Helmed Horror
435. Hezrou
436. Hill Giant
437. Hippogriff
438. Hobgoblin
439. Hobgoblin Captain
440. Hobgoblin Devastator
441. Hobgoblin Iron Shadow
442. Hobgoblin Warlord
443. Hommet Shaw
444. Homunculus
445. Hook Horror
446. Hook Horror Spore Servant
447. Horned Devil
448. Hound of Ill Omen
449. Howler
450. Howling Hatred Initiate
451. Howling Hatred Priest
452. Hulking Crab
453. Hunter Shark
454. Hurricane
455. Hutijin
456. Hydra
457. Hydroloth
458. Hyena
459. Ice Devil
460. Ice Devil Spear
461. Ice Mephit
462. Ice Toad
463. Illithilich
464. Illusionist
465. Illydia Maethellyn
466. Imix
467. Imp
468. Intellect Devourer
469. Invisible Stalker
470. Iron Cobra
471. Iron Golem
472. Ixitxachitl
473. Ixitxachitl Cleric
474. Iymrith (Giant Form)
475. Iymrith the Dragon
476. Izek Strazni
477. Jackal
478. Jackalwere
479. Jaculi
480. Jamna Gleamsilver
481. Jarhild Stoneforge
482. Juiblex
483. Kalka-Kylla
484. Kamadan
485. Kasimir Velikov
486. Kelpie
487. Kenku
488. Ki-rin
489. Killer Whale
490. Knight
491. Kobold
492. Kobold Dragonshield
493. Kobold Inventor
494. Kobold Scale Sorcerer
495. Korred
496. Kraken
497. Kraken Priest
498. Kruthik Hive Lord
499. Kuo-Toa
500. Kuo-Toa Archpriest
501. Kuo-Toa Monitor
502. Kuo-Toa Whip
503. Lamia
504. Langdedrosa Cyanwrath
505. Larethar Gulgrin
506. Lemure
507. Leucrotta
508. Leviathan
509. Liara Portyr
510. Lich
511. Lifferlas
512. Lion
513. Lizard
514. Lizard King/Queen
515. Lizardfolk
516. Lizardfolk Shaman
517. Madam Eva
518. Maegera the Dawn Titan
519. Mage
520. Magma Mephit
521. Magmin
522. Malformed Kraken
523. Mammoth
524. Manes
525. Manticore
526. Mantrap
527. Marid
528. Marilith
529. Marine Decapus
530. Markham Southwell
531. Marlos Urnrayle
532. Martial Arts Adept
533. Marut
534. Master Thief
535. Mastiff
536. Maurezhi
537. Maw Demon
538. Meazel
539. Medusa
540. Meenlock
541. Merfolk
542. Merregon
543. Merrenoloth
544. Merrow
545. Mezzoloth
546. Mimic
547. Mind Flayer
548. Mind Flayer Arcanist
549. Mind Flayer Psion
550. Mindwitness
551. Minotaur
552. Minotaur Skeleton
553. Miraj Vizann
554. Miros Xelbrin
555. Moloch
556. Molydeus
557. Mongrelfolk
558. Monodrone
559. Morkoth
560. Mormesk the Wraith
561. Mouth of Grolantor
562. Mud Mephit
563. Mule
564. Mummy
565. Mummy Lord
566. Mwaxanaré
567. Myconid Adult
568. Myconid Sovereign
569. Myconid Sprout
570. Nabassu
571. Naergoth Bladelord
572. Nagpa
573. Nalfeshnee
574. Narrak
575. Narth Tezrin
576. Narzugon
577. Naxene Drathkala
578. Necromancer
579. Needle Blight
580. Neogi
581. Neogi Hatchling
582. Neogi Master
583. Neothelid
584. Nereid
585. Neronvain
586. Nezznar the Black Spider
587. Night Hag
588. Nightmare
589. Nightwalker
590. Nilbog
591. Nimir
592. Noble
593. Nothic
594. Nupperibo
595. Nycaloth
596. Oaken Bolter
597. Oblex Spawn
598. Ochre Jelly
599. Octopus
600. Ogre
601. Ogre Battering Ram
602. Ogre Bolt Launcher
603. Ogre Chain Brute
604. Ogre Howdah
605. Ogre Zombie
606. Ogremoch
607. Oinoloth
608. Olhydra
609. One-Eyed Shiver
610. Oni
611. Ooze Master
612. Orc
613. Orc Blade of Ilneval
614. Orc Claw of Luthic
615. Orc Eye of Gruumsh
616. Orc Hand of Yurtrus
617. Orc Nurtured One of Yurtrus
618. Orc Red Fang of Shargaas
619. Orc War Chief
620. Orcus
621. Oreioth
622. Oren Yogilvy
623. Orlekto
624. Orog
625. Orthon
626. Othovir
627. Otyugh
628. Owl
629. Owlbear
630. Ox
631. Panther
632. Pegasus
633. Pentadrone
634. Peryton
635. Phantom Warrior
636. Pharblex Spattergoo
637. Phase Spider
638. Phoenix
639. Pidlwick II
640. Piercer
641. Pit Fiend
642. Pixie
643. Planetar
644. Plesiosaurus
645. Poisonous Snake
646. Polar Bear
647. Poltergeist
648. Pony
649. Priest
650. Pseudodragon
651. Pterafolk
652. Pteranodon
653. Purple Worm
654. Purple Wormling
655. Quadrone
656. Quaggoth
657. Quaggoth Spore Servant
658. Quaggoth Thonot
659. Quasit
660. Quetzalcoatlus
661. Quickling
662. Quipper
663. Rahadin
664. Rakshasa
665. Ras Nsi
666. Rat
667. Rath Modar
668. Raven
669. Razerblast
670. Red Abishai
671. Red Dragon Wyrmling
672. Red Guard Drake
673. Red Slaad
674. Redbrand Ruffian
675. Redcap
676. Reef Shark
677. Remorhaz
678. Retriever
679. Revenant
680. Rezmir
681. Rhinoceros
682. Rictavio
683. Riding Horse
684. Roc
685. Roper
686. Rot Troll
687. Rothé
688. Rug of Smothering
689. Rust Monster
690. Rutterkin
691. Saber-Toothed Tiger
692. Sacred Statue
693. Sacred Stone Monk
694. Sahuagin
695. Sahuagin Baron
696. Sahuagin Priestess
697. Salamander
698. Satyr
699. Scarecrow
700. Scorpion
701. Scout
702. Sea Hag
703. Sea Horse
704. Sea Lion
705. Sea Spawn
706. Severin
707. Shadow
708. Shadow Dancer
709. Shadow Demon
710. Shadow Mastiff
711. Shaldoor
712. Shalvus Martholio
713. Shambling Mound
714. Sharwyn Hucrele
715. Shield Guardian
716. Shoalar Quanderil
717. Shoosuva
718. Shrieker
719. Sibriex
720. Sildar Hallwinter
721. Silver Dragon Wyrmling
722. Sir Baric Nylef
723. Sir Braford
724. Sirac of Suzail
725. Siren
726. Skeleton
727. Skulk
728. Skull Lord
729. Skyweaver
730. Slaad Tadpole
731. Slithering Tracker
732. Smoke Mephit
733. Solar
734. Soul Monger
735. Spawn of Kyuss
736. Spectator
737. Specter
738. Spider
739. Spined Devil
740. Spirit Naga
741. Spirit Troll
742. Spring Eladrin
743. Sprite
744. Spy
745. Star Spawn Grue
746. Star Spawn Hulk
747. Star Spawn Larva Mage
748. Star Spawn Mangler
749. Star Spawn Seer
750. Steam Mephit
751. Steeder Female
752. Steeder Male
753. Steel Predator
754. Stegosaurus
755. Stench Kow
756. Stirge
757. Stone Cursed
758. Stone Defender
759. Stone Giant
760. Stone Giant Dreamwalker
761. Stone Golem
762. Stone Juggernaut
763. Stonemelder
764. Storm Giant
765. Storm Giant Quintessent
766. Strahd von Zarovich
767. Strahd Zombie
768. Strahd's Animated Armor
769. Su-Monster
770. Succubus/Incubus
771. Summer Eladrin
772. Swarm of Bats
773. Swarm of Beetles
774. Swarm of Centipedes
775. Swarm of Cranium Rats
776. Swarm of Insects
777. Swarm of Poisonous Snakes
778. Swarm of Quippers
779. Swarm of Rats
780. Swarm of Ravens
781. Swarm of Rot Grubs
782. Swarm of Spiders
783. Swarm of Wasps
784. Swashbuckler
785. Sword Wraith Commander
786. Sword Wraith Warrior
787. Tabaxi Hunter
788. Tabaxi Minstrel
789. Talis the White
790. Tanarukk
791. Tarrasque
792. Tarul Var
793. Tecuziztecatl
794. Thayan Apprentice
795. Thayan Warrior
796. The Abbot
797. The Angry
798. The Hungry
799. The Lonely
800. The Lost
801. The Pudding King
802. The Wretched
803. Thorn Slinger
804. Thorny
805. Thri-kreen
806. Thri-kreen (Psionic)
807. Thug
808. Thurl Merosska
809. Tiamat
810. Tiger
811. Tiny Servant
812. Titivilus
813. Tlincalli
814. Topi
815. Tortle
816. Tortle Druid
817. Transmuter
818. Trapper
819. Treant
820. Tree Blight
821. Tressym
822. Tri-Flower Frond
823. Tribal Warrior
824. Triceratops
825. Tridrone
826. Troglodyte
827. Troglodyte Champion of Laogzed
828. Troll
829. Twig Blight
830. Tyrannosaurus Rex
831. Tyrannosaurus Zombie
832. Ulitharid
833. Ultroloth
834. Umber Hulk
835. Unicorn
836. Urgala Meltimer
837. Uthgardt Shaman
838. Vaasha
839. Vampire
840. Vampire Spawn
841. Vampire Spellcaster
842. Vampire Warrior
843. Vampiric Ixitxachitl
844. Vampiric Ixitxachitl Cleric
845. Vampiric Mist
846. Vanifer
847. Vargouille
848. Vegepygmy
849. Vegepygmy Chief
850. Velociraptor
851. Venom Troll
852. Veteran
853. Vine Blight
854. Violet Fungus
855. Vladimir Horngaard
856. Volothamp “Volo” Geddarm
857. Vrock
858. Vulture
859. War Priest
860. Warhorse
861. Warhorse Skeleton
862. Warlock of the Archfey
863. Warlock of the Fiend
864. Warlock of the Great Old One
865. Warlord
866. Wastrilith
867. Water Elemental
868. Water Elemental Myrmidon
869. Water Weird
870. Weasel
871. Werebear
872. Wereboar
873. Wererat
874. Wereraven
875. Weretiger
876. Werewolf
877. White Abishai
878. White Dragon Wyrmling
879. White Guard Drake
880. White Maw
881. Wiggan Nettlebee
882. Wight
883. Will-o'-Wisp
884. Windharrow
885. Winged Kobold
886. Winter Eladrin
887. Winter Wolf
888. Wolf
889. Wood Woad
890. Worg
891. Wraith
892. Wyvern
893. Xandala
894. Xorn
895. Xvart
896. Xvart Speaker
897. Xvart Warlock of Raxivort
898. Yagnoloth
899. Yakfolk Priest
900. Yakfolk Warrior
901. Yan-C-Bin
902. Yeenoghu
903. Yellow Musk Creeper
904. Yellow Musk Zombie
905. Yestabrod
906. Yeth Hound
907. Yeti
908. Yochlol
909. Young Black Dragon
910. Young Blue Dragon
911. Young Brass Dragon
912. Young Bronze Dragon
913. Young Copper Dragon
914. Young Gold Dragon
915. Young Green Dragon
916. Young Kruthik
917. Young Red Dragon
918. Young Red Shadow Dragon
919. Young Remorhaz
920. Young Silver Dragon
921. Young White Dragon
922. Yuan-ti Abomination
923. Yuan-ti Anathema
924. Yuan-ti Broodguard
925. Yuan-ti Malison Type 1
926. Yuan-ti Malison Type 2
927. Yuan-ti Malison Type 3
928. Yuan-ti Malison Type 4
929. Yuan-ti Malison Type 5
930. Yuan-ti Mind Whisperer
931. Yuan-ti Nightmare Speaker
932. Yuan-ti Pit Master
933. Yuan-ti Pureblood
934. Yusdrayl
935. Zaratan
936. Zariel
937. Zi Liang
938. Zindar
939. Zombie
940. Zorbo
941. Zuggtmoy
*/