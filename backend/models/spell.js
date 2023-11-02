const { SpatialTrackingRounded } = require('@mui/icons-material');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let SpellSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    ritual: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    range: {
        type: String,
        required: true
    },
    components: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    classes: {
        type: String,
        required: true
    },
    text: {
        type: [
            {
                description: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true
    },
    roll: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Spell', SpellSchema);

/*
LIST OF SPELLS:
0. Abi-Dalzim’s Horrid Wilting
1. Absorb Elements
2. Acid Splash
3. Aganazzar’s Scorcher
4. Aid
5. Alarm
6. Alarm (Ritual Only)
7. Alter Self
8. Animal Friendship
9. Animal Friendship*
10. Animal Messenger
11. Animal Messenger (Ritual Only)
12. Animal Shapes
13. Animate Dead
14. Animate Dead*
15. Animate Objects
16. Animate Objects*
17. Antilife Shell
18. Antilife Shell*
19. Antimagic Field
20. Antipathy/Sympathy
21. Arcane Eye
22. Arcane Eye*
23. Arcane Gate
24. Arcane Lock
25. Armor of Agathys
26. Armor of Agathys*
27. Arms of Hadar
28. Astral Projection
29. Augury
30. Augury*
31. Augury (Ritual Only)
32. Aura of Life
33. Aura of Purity
34. Aura of Vitality
35. Aura of Vitality*
36. Awaken
37. Bane
38. Bane*
39. Banishing Arrow
40. Banishing Smite
41. Banishment
42. Banishment*
43. Barkskin
44. Barkskin*
45. Beacon of Hope
46. Beacon of Hope*
47. Beast Bond
48. Beast Sense
49. Beast Sense (Ritual Only)
50. Beguiling Arrow
51. Bestow Curse
52. Bestow Curse*
53. Bigby's Hand
54. Blade Barrier
55. Blade Ward
56. Bless
57. Bless*
58. Blight
59. Blight*
60. Blinding Smite
61. Blindness/Deafness
62. Blindness/Deafness*
63. Blink
64. Blink*
65. Blur
66. Blur*
67. Bones of the Earth
68. Booming Blade
69. Branding Smite
70. Breath of Winter
71. Burning Hands
72. Burning Hands*
73. Bursting Arrow
74. Call Lightning
75. Call Lightning*
76. Calm Emotions
77. Calm Emotions*
78. Catapult
79. Catnap
80. Cause Fear
81. Ceremony
82. Ceremony (Ritual Only)
83. Chain Lightning
84. Chaos Bolt
85. Charm Monster
86. Charm Person
87. Charm Person*
88. Chill Touch
89. Chromatic Orb
90. Circle of Death
91. Circle of Power
92. Circle of Power*
93. Clairvoyance
94. Clench of the North Wind
95. Clone
96. Cloud of Daggers
97. Cloudkill
98. Cloudkill*
99. Color Spray
100. Command
101. Command*
102. Commander's Strike
103. Commune
104. Commune*
105. Commune (Ritual Only)
106. Commune with Nature
107. Commune with Nature*
108. Commune with Nature (Ritual Only)
109. Compelled Duel
110. Compelled Duel*
111. Comprehend Languages
112. Comprehend Languages (Ritual Only)
113. Compulsion
114. Cone of Cold
115. Cone of Cold*
116. Confusion
117. Confusion*
118. Conjure Animals
119. Conjure Barrage
120. Conjure Celestial
121. Conjure Elemental
122. Conjure Elemental*
123. Conjure Fey
124. Conjure Minor Elementals
125. Conjure Volley
126. Conjure Woodland Beings
127. Contact Other Plane
128. Contact Other Plane (Ritual Only)
129. Contagion
130. Contagion*
131. Contingency
132. Continual Flame
133. Control Flames
134. Control Water
135. Control Water*
136. Control Weather
137. Control Winds
138. Cordon of Arrows
139. Counterspell
140. Counterspell*
141. Create Bonfire
142. Create Food and Water
143. Create Food and Water*
144. Create Homunculus
145. Create or Destroy Water
146. Create Undead
147. Creation
148. Creation*
149. Crown of Madness
150. Crown of Madness*
151. Crown of Stars
152. Crusader's Mantle
153. Crusader's Mantle*
154. Cure Wounds
155. Cure Wounds*
156. Dancing Lights
157. Danse Macabre
158. Darkness
159. Darkness*
160. Darkvision
161. Dawn
162. Daylight
163. Daylight*
164. Death Ward
165. Death Ward*
166. Delayed Blast Fireball
167. Demiplane
168. Destructive Wave
169. Destructive Wave*
170. Detect Evil and Good
171. Detect Magic
172. Detect Magic*
173. Detect Magic (Ritual Only)
174. Detect Poison and Disease
175. Detect Poison and Disease (Ritual Only)
176. Detect Thoughts
177. Dimension Door
178. Dimension Door*
179. Disarming Attack
180. Disguise Self
181. Disguise Self*
182. Disintegrate
183. Dispel Evil and Good
184. Dispel Magic
185. Dispel Magic*
186. Dissonant Whispers
187. Distracting Strike
188. Divination
189. Divination*
190. Divination (Ritual Only)
191. Divine Favor
192. Divine Favor*
193. Divine Word
194. Dominate Beast
195. Dominate Beast*
196. Dominate Monster
197. Dominate Person
198. Dominate Person*
199. Dragon’s Breath
200. Drawmij's Instant Summon
201. Drawmij's Instant Summon (Ritual Only)
202. Dream
203. Dream*
204. Druid Grove
205. Druidcraft
206. Dust Devil
207. Earth Tremor
208. Earthbind
209. Earthquake
210. Eldritch Blast
211. Elemental Attunement
212. Elemental Bane
213. Elemental Weapon
214. Elemental Weapon*
215. Enemies Abound
216. Enervation
217. Enfeebling Arrow
218. Enhance Ability
219. Enlarge/Reduce
220. Ensnaring Strike
221. Ensnaring Strike*
222. Entangle
223. Enthrall
224. Erupting Earth
225. Eternal Mountain Defense
226. Etherealness
227. Evard's Black Tentacles
228. Evasive Footwork
229. Expeditious Retreat
230. Eyebite
231. Fabricate
232. Fabricate*
233. Faerie Fire
234. Faerie Fire*
235. False Life
236. False Life*
237. Fangs of the Fire Snake
238. Far Step
239. Fear
240. Fear*
241. Feather Fall
242. Feeblemind
243. Feign Death
244. Feign Death (Ritual Only)
245. Feinting Attack
246. Find Familiar
247. Find Familiar (Ritual Only)
248. Find Greater Steed
249. Find Steed
250. Find the Path
251. Find Traps
252. Finger of Death
253. Fire Bolt
254. Fire Shield
255. Fire Storm
256. Fireball
257. Fireball*
258. Fist of Four Thunders
259. Fist of Unbroken Air
260. Flame Arrows
261. Flame Blade
262. Flame Strike
263. Flame Strike*
264. Flames of the Phoenix
265. Flaming Sphere
266. Flaming Sphere*
267. Flesh to Stone
268. Fly
269. Fog Cloud
270. Fog Cloud*
271. Forbiddance
272. Forbiddance (Ritual Only)
273. Forcecage
274. Foresight
275. Freedom of Movement
276. Freedom of Movement*
277. Friends
278. Frostbite
279. Gaseous Form
280. Gaseous Form*
281. Gate
282. Geas
283. Geas*
284. Gentle Repose
285. Gentle Repose*
286. Gentle Repose (Ritual Only)
287. Giant Insect
288. Glibness
289. Globe of Invulnerability
290. Glyph of Warding
291. Goading Attack
292. Gong of the Summit
293. Goodberry
294. Grasping Arrow
295. Grasping Vine
296. Grasping Vine*
297. Grease
298. Greater Invisibility
299. Greater Invisibility*
300. Greater Restoration
301. Greenflame Blade
302. Guardian of Faith
303. Guardian of Faith*
304. Guardian of Nature
305. Guards and Wards
306. Guidance
307. Guiding Bolt
308. Gust
309. Gust of Wind
310. Gust of Wind*
311. Hail of Thorns
312. Hallow
313. Hallucinatory Terrain
314. Hallucinatory Terrain*
315. Harm
316. Haste
317. Haste*
318. Heal
319. Healing Spirit
320. Healing Word
321. Heat Metal
322. Heat Metal*
323. Hellish Rebuke
324. Hellish Rebuke*
325. Heroes' Feast
326. Heroism
327. Hex
328. Hold Monster
329. Hold Monster*
330. Hold Person
331. Hold Person*
332. Holy Aura
333. Holy Weapon
334. Hunger of Hadar
335. Hunter's Mark
336. Hunter's Mark*
337. Hypnotic Pattern
338. Hypnotic Pattern*
339. Ice Knife
340. Ice Storm
341. Ice Storm*
342. Identify
343. Identify*
344. Identify (Ritual Only)
345. Illusory Dragon
346. Illusory Script
347. Illusory Script (Ritual Only)
348. Immolation
349. Imprisonment
350. Incendiary Cloud
351. Infernal Calling
352. Infestation
353. Inflict Wounds
354. Inflict Wounds*
355. Insect Plague
356. Insect Plague*
357. Investiture of Flame
358. Investiture of Ice
359. Investiture of Stone
360. Investiture of Wind
361. Invisibility
362. Invisibility*
363. Invulnerability
364. Jump
365. Knock
366. Legend Lore
367. Legend Lore*
368. Leomund's Secret Chest
369. Leomund's Secret Chest*
370. Leomund's Tiny Hut
371. Leomund's Tiny Hut (Ritual Only)
372. Lesser Restoration
373. Lesser Restoration*
374. Levitate
375. Life Transference
376. Light
377. Lightning Arrow
378. Lightning Bolt
379. Lightning Bolt*
380. Lightning Lure
381. Locate Animals or Plants
382. Locate Animals or Plants (Ritual Only)
383. Locate Creature
384. Locate Creature*
385. Locate Object
386. Longstrider
387. Lunging Attack
388. Maddening Darkness
389. Maelstrom
390. Mage Armor
391. Mage Hand
392. Magic Circle
393. Magic Circle*
394. Magic Jar
395. Magic Missile
396. Magic Missile*
397. Magic Mouth
398. Magic Mouth (Ritual Only)
399. Magic Stone
400. Magic Weapon
401. Magic Weapon*
402. Major Image
403. Maneuvering Attack
404. Mass Cure Wounds
405. Mass Cure Wounds*
406. Mass Heal
407. Mass Healing Word
408. Mass Polymorph
409. Mass Suggestion
410. Maximilian’s Earthen Grasp
411. Maze
412. Meld into Stone
413. Meld into Stone*
414. Meld into Stone (Ritual Only)
415. Melf's Acid Arrow
416. Melf's Acid Arrow*
417. Melf’s Minute Meteors
418. Menacing Attack
419. Mending
420. Mental Prison
421. Message
422. Meteor Swarm
423. Mighty Fortress
424. Mind Blank
425. Mind Spike
426. Minor Illusion
427. Mirage Arcane
428. Mirror Image
429. Mirror Image*
430. Mislead
431. Mist Stance
432. Misty Step
433. Misty Step*
434. Modify Memory
435. Modify Memory*
436. Mold Earth
437. Moonbeam
438. Moonbeam*
439. Mordenkainen's Faithful Hound
440. Mordenkainen's Magnificent Mansion
441. Mordenkainen's Private Sanctum
442. Mordenkainen's Sword
443. Move Earth
444. Negative Energy Flood
445. Nondetection
446. Nondetection*
447. Nystul's Magic Aura
448. Nystul's Magic Aura*
449. Otiluke's Freezing Sphere
450. Otiluke's Resilient Sphere
451. Otiluke's Resilient Sphere*
452. Otto's Irresistible Dance
453. Parry
454. Pass Without Trace
455. Pass Without Trace*
456. Passwall
457. Passwall*
458. Phantasmal Force
459. Phantasmal Killer
460. Phantom Steed
461. Phantom Steed (Ritual Only)
462. Piercing Arrow
463. Planar Ally
464. Planar Binding
465. Planar Binding*
466. Plane Shift
467. Plant Growth
468. Plant Growth*
469. Poison Spray
470. Polymorph
471. Polymorph*
472. Power Word Heal
473. Power Word Kill
474. Power Word Pain
475. Power Word Stun
476. Prayer of Healing
477. Precision Attack
478. Prestidigitation
479. Primal Savagery
480. Primordial Ward
481. Prismatic Spray
482. Prismatic Wall
483. Produce Flame
484. Programmed Illusion
485. Project Image
486. Protection from Energy
487. Protection from Energy*
488. Protection from Evil and Good
489. Protection from Evil and Good*
490. Protection from Poison
491. Psychic Scream
492. Purify Food and Drink
493. Purify Food and Drink (Ritual Only)
494. Pushing Attack
495. Pyrotechnics
496. Raise Dead
497. Raise Dead*
498. Rally
499. Rary's Telepathic Bond
500. Rary's Telepathic Bond (Ritual Only)
501. Ray of Enfeeblement
502. Ray of Enfeeblement*
503. Ray of Frost
504. Ray of Sickness
505. Ray of Sickness*
506. Regenerate
507. Reincarnate
508. Remove Curse
509. Resistance
510. Resurrection
511. Reverse Gravity
512. Revivify
513. Revivify*
514. Ride the Wind
515. Riposte
516. River of Hungry Flame
517. Rope Trick
518. Rush of the Gale Spirits
519. Sacred Flame
520. Sanctuary
521. Sanctuary*
522. Scatter
523. Scorching Ray
524. Scorching Ray*
525. Scrying
526. Scrying*
527. Searing Smite
528. Searing Smite*
529. See Invisibility
530. Seeking Arrow
531. Seeming
532. Sending
533. Sequester
534. Shadow Arrow
535. Shadow Blade
536. Shadow of Moil
537. Shape of the Flowing River
538. Shape Water
539. Shapechange
540. Shatter
541. Shatter*
542. Shield
543. Shield of Faith
544. Shield of Faith*
545. Shillelagh
546. Shocking Grasp
547. Sickening Radiance
548. Silence
549. Silence*
550. Silence (Ritual Only)
551. Silent Image
552. Simulacrum
553. Skill Empowerment
554. Skywrite
555. Skywrite (Ritual Only)
556. Sleep
557. Sleep*
558. Sleet Storm
559. Sleet Storm*
560. Slow
561. Slow*
562. Snare
563. Snilloc’s Snowball Swarm
564. Soul Cage
565. Spare the Dying
566. Spare the Dying (Grave Domain)
567. Speak with Animals
568. Speak with Animals*
569. Speak with Animals (Ritual Only)
570. Speak with Dead
571. Speak with Dead*
572. Speak with Plants
573. Spider Climb
574. Spider Climb*
575. Spike Growth
576. Spike Growth*
577. Spirit Guardians
578. Spirit Guardians*
579. Spiritual Weapon
580. Spiritual Weapon*
581. Staggering Smite
582. Steel Wind Strike
583. Stinking Cloud
584. Stinking Cloud*
585. Stone Shape
586. Stone Shape*
587. Stoneskin
588. Stoneskin*
589. Storm of Vengeance
590. Storm Sphere
591. Suggestion
592. Suggestion*
593. Summon Greater Demon
594. Summon Lesser Demons
595. Sunbeam
596. Sunburst
597. Sweeping Attack
598. Sweeping Cinder Strike
599. Swift Quiver
600. Sword Burst
601. Symbol
602. Synaptic Static
603. Tasha's Hideous Laughter
604. Telekinesis
605. Telepathy
606. Teleport
607. Teleportation Circle
608. Teleportation Circle*
609. Temple of the Gods
610. Tenser's Floating Disk
611. Tenser's Floating Disk (Ritual Only)
612. Tenser’s Transformation
613. Thaumaturgy
614. Thorn Whip
615. Thunder Step
616. Thunderclap
617. Thunderous Smite
618. Thunderwave
619. Thunderwave*
620. Tidal Wave
621. Time Stop
622. Tiny Servant
623. Toll the Dead
624. Tongues
625. Transmute Rock
626. Transport via Plants
627. Tree Stride
628. Tree Stride*
629. Trip Attack
630. True Polymorph
631. True Resurrection
632. True Seeing
633. True Strike
634. Tsunami
635. Unseen Servant
636. Unseen Servant (Ritual Only)
637. Vampiric Touch
638. Vampiric Touch*
639. Vicious Mockery
640. Vitriolic Sphere
641. Wall of Fire
642. Wall of Fire*
643. Wall of Force
644. Wall of Force*
645. Wall of Ice
646. Wall of Light
647. Wall of Sand
648. Wall of Stone
649. Wall of Stone*
650. Wall of Thorns
651. Wall of Water
652. Warding Bond
653. Warding Bond*
654. Warding Wind
655. Water Breathing
656. Water Breathing*
657. Water Breathing (Ritual Only)
658. Water Walk
659. Water Walk*
660. Water Walk (Ritual Only)
661. Water Whip
662. Watery Sphere
663. Wave of Rolling Earth
664. Web
665. Web*
666. Weird
667. Whirlwind
668. Wind Walk
669. Wind Wall
670. Wind Wall*
671. Wish
672. Witch Bolt
673. Word of Radiance
674. Word of Recall
675. Wrath of Nature
676. Wrathful Smite
677. Zephyr Strike
678. Zone of Truth
679. Zone of Truth*
680. Invocation: Agonizing Blast
681. Invocation: Armor of Shadows
682. Invocation: Ascendant Step
683. Invocation: Aspect of the Moon
684. Invocation: Beast Speech
685. Invocation: Beguiling Influence
686. Invocation: Bewitching Whispers
687. Invocation: Book of Ancient Secrets
688. Invocation: Chains of Carceri
689. Invocation: Cloak of Flies
690. Invocation: Devil's Sight
691. Invocation: Dreadful Word
692. Invocation: Eldritch Sight
693. Invocation: Eldritch Smite
694. Invocation: Eldritch Spear
695. Invocation: Eyes of the Rune Keeper
696. Invocation: Fiendish Vigor
697. Invocation: Gaze of Two Minds
698. Invocation: Ghostly Gaze
699. Invocation: Gift of the Depths
700. Invocation: Gift of the Ever-Living Ones
701. Invocation: Grasp of Hadar
702. Invocation: Improved Pact Weapon
703. Invocation: Lance of Lethargy
704. Invocation: Lifedrinker
705. Invocation: Maddening Hex
706. Invocation: Mask of Many Faces
707. Invocation: Master of Myriad Forms
708. Invocation: Minions of Chaos
709. Invocation: Mire the Mind
710. Invocation: Misty Visions
711. Invocation: One With Shadows
712. Invocation: Otherworldly Leap
713. Invocation: Relentless Hex
714. Invocation: Repelling Blast
715. Invocation: Sculptor of Flesh
716. Invocation: Shroud of Shadow
717. Invocation: Sign of Ill Omen
718. Invocation: Thief of Five Fates
719. Invocation: Thirsting Blade
720. Invocation: Tomb of Levistus
721. Invocation: Trickster's Escape
722. Invocation: Visions of Distant Realms
723. Invocation: Voice of the Chain Master
724. Invocation: Whispers of the Grave
725. Invocation: Witch Sight
*/