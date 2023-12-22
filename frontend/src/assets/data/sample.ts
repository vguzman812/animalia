interface Fact {
  _id: number;
  animal: string;
  source: string;
  text: string;
  media: string;
  wiki: string;
}

const sampleFacts: Fact[] = [
  {
    _id: 1,
    animal: 'acorn woodpecker',
    source:
      'https://reddit.com/r/Awwducational/comments/x0949s/acorn_woodpeckers_are_so_good_at_snugly_fitting/',
    text: "Acorn woodpeckers are so good at snugly fitting acorns into holes they make in trees that they often have trouble pulling them out. In fact, whenever the woodpecker finds a loose acorn in a hole, it will put the acorn into a tighter fitting hole. It's all about keeping critters from stealing them.",
    media: 'https://i.redd.it/07251ihzajk91.jpg',
    wiki: '/wiki/Acorn_woodpecker',
  },
  {
    _id: 2,
    animal: 'african jacana',
    source: 'https://a-z-animals.com/animals/african-jacana/',
    text: 'African jacanas have enormous feet with elongated toes that allow them walk on floating vegetation',
    media: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/187224211/480',
    wiki: '/wiki/African_jacana',
  },
  {
    _id: 3,
    animal: 'african penguin',
    source: 'https://a-z-animals.com/animals/african-penguin/',
    text: 'African Penguins are also known as “jackass penguins”. When looking for a mate, they bray like a donkey. When they’re trying to figure out where their mate is, they haw. And, when they’re defending themselves, they yell at would-be attackers. A defensive penguin will also bend down low, point its sharp beak at the would-be attacker, and feign fierce pecking.',
    media:
      'https://www.newsflare.com/video/326296/penguin-makes-a-honking-mating-call-that-sounds-just-like-a-donkey',
    wiki: '/wiki/African_penguin',
  },
  {
    _id: 4,
    animal: 'african red-eyed bulbuls',
    source:
      'https://reddit.com/r/Awwducational/comments/xw9y53/pairs_and_small_groups_of_african_redeyed_bulbuls/',
    text: 'Pairs and small groups of African Red-eyed Bulbuls forage in riverine thickets in the Karoo and in arid thorny woodland and scrub, eating a variety of fruit and invertebrates. The species has a typical bubbly musical bulbul song, slower than that of the similar-sounding Common Bulbul.',
    media: 'https://media.ebird.org/catalog?taxonCode=blfbul1&mediaType=audio',
    wiki: '/wiki/African_red-eyed_bulbul',
  },
  {
    _id: 5,
    animal: 'african wild dog',
    source:
      'https://reddit.com/r/Awwducational/comments/xda300/african_wild_dogs_hunt_by_approaching_prey/',
    text: 'African Wild Dogs hunt by approaching prey silently, then chasing it at up to 66 km/h for 10-60 minutes. On average, the chase covers around 2 km. They have a hunting success rate of 60-90%, making them more consistently successful than Lions or Hyenas. (Photo Credit: Mark Nicholson - Instagram)',
    media: 'https://i.redd.it/y0dycewwnon91.jpg',
    wiki: '/wiki/African_wild_dog',
  },
  {
    _id: 6,
    animal: 'american coot',
    source: 'https://owlcation.com/stem/The-American-Coot-Interesting-Facts-and-Information',
    text: 'Taking flight from the water is rather difficult for the coot. To get airborne, the coot must “run” across the water for several yards while beating their wings. It looks like quite a lot of work.',
    media:
      'https://www.youtube.com/watch?v=xYNVBDUeLyA&ab_channel=bjornpdx\nhttps://www.youtube.com/watch?v=DqslQsn6vUs&ab_channel=DFWUrbanWildlife',
    wiki: '/wiki/American_coot',
  },
  {
    _id: 7,
    animal: 'american eskimo dog',
    source: 'https://a-z-animals.com/animals/american-eskimo-dog/',
    text: 'Despite its name, this breed is not associated with the Inuit at all. Instead, it was bred from the German Spitz in the 19th century by immigrants who settled in the Midwest. Although originally developed as a farm dog, this breed became a popular performer at circuses and roadshows. After the United States entered World War I, the name was changed to the American Eskimo as a result of high anti-German sentiment running through the country.',
    media:
      'data:image/jpeg;base64,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',
    wiki: '/wiki/American_Eskimo_Dog',
  },
  {
    _id: 8,
    animal: 'american goldfinch',
    source:
      'https://reddit.com/r/Awwducational/comments/yyiqxj/the_american_goldfinch_is_a_granivore_and_adapted/',
    text: 'The American goldfinch is a granivore and adapted for the consumption of seedheads, with a conical beak to remove the seeds and agile feet to grip the stems of seedheads while feeding. It is a social bird and will gather in large flocks while feeding and migrating.',
    media: 'https://v.redd.it/0abvrebwbp0a1',
    wiki: '/wiki/American_goldfinch',
  },
  {
    _id: 9,
    animal: 'american oystercatcher',
    source:
      'https://reddit.com/r/Awwducational/comments/ygkk2u/american_oystercatcher_courtship_in_spring_is/',
    text: "American Oystercatcher courtship in spring is boisterous, with courting birds pacing quickly over the sand in unison, giving a piping call that increases in tempo, and pivoting in arcing patterns around the beach. One pair often attracts neighboring pairs to begin this display in a 'Piping Ceremony’.a",
    media: 'https://www.youtube.com/watch?v=y7fdYEjZc0c&ab_channel=RayHennessy',
    wiki: '/wiki/American_oystercatcher',
  },
  {
    _id: 10,
    animal: 'american robin',
    source: 'https://a-z-animals.com/animals/american-robin/',
    text: 'Females build the nests with no help from her partner. She gathers twigs, grass, feathers, and paper to form the outside structure of the nest. She lines the nest with mud to hold it together. The inside is cushioned with soft materials including grass and other plant matter. The nest is often off the ground, anywhere from 5 - 15 feet high.',
    media:
      'https://www.birdsandblooms.com/wp-content/uploads/2021/01/BNBbyc17_laureen-prendergast.jpg?fit=680,510',
    wiki: '/wiki/American_robin',
  },
  {
    _id: 11,
    animal: 'american toad',
    source: 'https://en.wikipedia.org/wiki/American_toad',
    text: 'The American toads have very noticeable calls. They make long trilling sounds, lasting between 4 to 20 seconds each. The males use these sounds to attract the female toads for breeding. During the mating season, these calls become louder, constant, and more frantic. When these calls are made, the throats of the male toads puff out like balloons. However, this is not the only way that the American toads communicate. Some of them also use body postures, chemical cues, and touch to communicate.',
    media: 'https://www.youtube.com/watch?v=Z0Ksdwgtk_0&ab_channel=MartyCalabrese',
    wiki: '/wiki/American_toad',
  },
  {
    _id: 12,
    animal: 'amethystine python (scrub python)',
    source: 'https://a-z-animals.com/animals/amethystine-python/',
    text: 'These snakes are named from the way their scales reflect light. Their milky-iridescent scales have a purplish hue in the light, reminiscent of the gemstone from which they get their name.',
    media: 'https://a-z-animals.com/media/2022/06/scrub-python-on-branch-picture-id1216959855.jpg',
    wiki: '/wiki/Amethystine_python',
  },
  {
    _id: 13,
    animal: 'amur leopard',
    source: 'https://kids.nationalgeographic.com/animals/mammals/facts/amur-leopard',
    text: 'The Amur leopard is the rarest leopard in the world. Since a 647,400-acre national park dubbed Land of the Leopard National Park was created in 2012 along the Russian and Chinese borders, the Amur leopard population has jumped to about 80 individuals in 2018, up from only about 30 in the early 2000s.',
    media:
      'https://i.natgeofe.com/k/3550b018-dc62-4650-829f-ee0e2a95fc6d/amur-leopard-snow.jpg?w=636&h=477',
    wiki: '/wiki/Amur_leopard',
  },
  {
    _id: 14,
    animal: 'anaconda',
    source: 'https://en.wikipedia.org/wiki/Green_anaconda',
    text: 'Anacondas live in swamps, marshes, and slow-moving streams, mainly in the tropical rainforests of the Amazon and Orinoco basins. They are cumbersome on land, but stealthy and sleek in the water. Their eyes and nasal openings are on top of their heads, allowing them to lie in wait for prey while remaining nearly completely submerged.',
    media:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Anaconda_al_acecho.JPG/2560px-Anaconda_al_acecho.JPG',
    wiki: '/wiki/Anaconda',
  },
  {
    _id: 15,
    animal: 'anchovies',
    source: 'https://en.wikipedia.org/wiki/Peruvian_anchoveta',
    text: 'Anchovies, like most clupeoids (herrings, sardines and anchovies), are filter-feeders that open their mouths as they swim. As water passes through the mouth and out the gills, food particles are sieved by gill rakers and transferred into the esophagus.',
    media: 'https://www.youtube.com/watch?v=x0dL_Q2poC4&ab_channel=WallStreetJournal',
    wiki: '/wiki/Anchovy',
  },
  {
    _id: 16,
    animal: 'andalusian',
    source: 'https://www.animalfactsencyclopedia.com/Andalusian-horse.html',
    text: 'One of the most unique characteristics of the Andalusian horse is a full, flowing mane and tail. The forelock sweeps over the face, and the tail is often long enough to touch the ground. Hair may be straight and sleek, but waves and curls are most common. There is little, if any, excessive hair or "feathering" on the legs, and the coat on the body is short and fine with a deep sheen.',
    media: 'https://www.animalfactsencyclopedia.com/images/Andalusian-beauty.jpg',
    wiki: '/wiki/Blue_Andalusian',
  },
  {
    _id: 17,
    animal: 'andean mountain cat',
    source:
      'https://reddit.com/r/Awwducational/comments/xmylle/the_andean_mountain_cat_is_known_to_live_at_high/',
    text: 'The Andean mountain cat is known to live at high elevations: 1,800 m (5,900 ft) in the southern Andes to over 4,000 m (13,000 ft) in Chile, Bolivia and central Peru. It has ashy-gray fur, a grey head and somewhat rounded ears. The cat is listed as endangered; less than 1500 are thought to exist.',
    media: 'https://i.redd.it/0uhg2n8n9up91.jpg',
    wiki: '/wiki/Andean_mountain_cat',
  },
  {
    _id: 18,
    animal: 'angled sunbeam',
    source:
      'https://reddit.com/r/Awwducational/comments/xhvo45/the_angled_sunbeam_is_a_species_of_butterfly/',
    text: 'The angled sunbeam is a species of butterfly whose caterpillar has the ability to ward off predators by quickly extending pompom-like sensory receptors through its two periscopes and whirling them about. This angled sunbeam caterpillar, native to Japan, was gently stroked with a soft piece of grass.',
    media: 'https://v.redd.it/6ni9qjycdpo91',
    wiki: '/wiki/Curetis_acuta',
  },
  {
    _id: 19,
    animal: 'anglerfish',
    source: '/r/AskReddit/comments/gbh7zz/what_are_some_really_amazing_animal_facts/fp5p5bq/',
    text: 'male anglerfish are much smaller than the females and when the female is ready to mate she excretes a pheromone which makes the male hungry. He will then try to eat her, but he then gets stuck to her, and dissolves until the only thing that remains are his testicles.',
    media: 'https://www.youtube.com/watch?v=XhsyZnVx2rQ&ab_channel=NatGeoWILD',
    wiki: '/wiki/Anglerfish',
  },
  {
    _id: 20,
    animal: 'angora goat',
    source: 'https://a-z-animals.com/animals/angora-goat/',
    text: 'The Angora goat is a Turkish domesticated goat breed that grows the lustrous fibre known as mohair. Each adult Angora goat produces about 12 inches of mohair annually while kids have about 8 inches.',
    media: 'https://a-z-animals.com/media/2021/06/Angora-Goat-with-kid.jpg',
    wiki: '/wiki/Angora_goat',
  },
  {
    _id: 21,
    animal: 'ankole',
    source: 'https://seaworld.org/animals/facts/mammals/ankole/',
    text: 'Ankole have strong herding and protection instincts. Adults bed down in a circle facing out with calves in the center.',
    media:
      'https://thumbs.dreamstime.com/b/ankole-watusi-modern-american-breed-domestic-cattle-derives-group-sanga-breeds-central-africa-characterized-189175331.jpg',
    wiki: '/wiki/Ankole-Watusi',
  },
  {
    _id: 22,
    animal: "anna's hummingbird",
    source: 'https://a-z-animals.com/animals/annas-hummingbird/',
    text: 'In courtship displays, males hover in midair, giving buzzy song, then fly up to 130 feet. He then dives steeply toward the female, making a loud chirping sound at the bottom of the dive. The noise is caused by his tail feathers.',
    media: 'https://www.youtube.com/watch?v=K_2JFK-tnnE&ab_channel=NewScientist',
    wiki: '/wiki/Anna%27s_hummingbird',
  },
  {
    _id: 23,
    animal: 'ant',
    source: '/r/AskReddit/comments/9a4ku4/whats_your_1_obscure_animal_fact/e4t0z40/',
    text: 'Ants breed and domesticate aphids around their colonies, so they can drink their milky secretions. Aphids are ant cows. So ladybugs, then, would be like ant chupacabras.',
    media: 'https://www.youtube.com/watch?v=NJmCKaX0AGg&ab_channel=EarthTitan',
    wiki: '/wiki/Ant',
  },
  {
    _id: 24,
    animal: 'anteater',
    source: 'https://www.animalfactsencyclopedia.com/Anteater-facts.html',
    text: 'A giant anteaters tongue is well over two feet long - or 1.5 to 2 times the length of its head',
    media:
      'https://upload.wikimedia.org/wikipedia/commons/8/81/Giant_Anteater_showing_off_tongue.jpg',
    wiki: '/wiki/Anteater',
  },
  {
    _id: 25,
    animal: 'antelope jackrabbit',
    source:
      'https://reddit.com/r/Awwducational/comments/xdhqcd/antelope_jackrabbits_are_known_for_their/',
    text: 'Antelope jackrabbits are known for their exceptionally long ears. Native to parts of Arizona and Mexico, they occupy plant communities that contain a mixture of shrubs and grasses.',
    media: 'https://i.redd.it/kqp55bbiron91.png',
    wiki: '/wiki/Antelope_jackrabbit',
  },
  {
    _id: 26,
    animal: 'arctic hare',
    source:
      'https://reddit.com/r/Awwducational/comments/yypgal/a_herd_of_hares_to_survive_the_perils_brought_on/',
    text: 'A Herd of Hares: To survive the perils brought on by the long Polar Night, Arctic Hares gather in massive herds for mutual protection.',
    media: 'https://v.redd.it/4gwvt3u4uq0a1',
    wiki: '/wiki/Arctic_hare',
  },
  {
    _id: 27,
    animal: 'armadillo girdled lizard',
    source:
      'https://reddit.com/r/Awwducational/comments/y7g0mp/the_armadillo_girdled_lizard_gets_its_common_name/',
    text: "The armadillo girdled lizard gets its common name from its unique defensive behavior; it will grab its tail in its mouth and curl up into a ball, protected by thick scales and spikes along its back and tail. Its genus name 'Ouroborus' comes from the mythical serpent that eats its own tail.",
    media: 'https://i.redd.it/2vys3ab66mu91.jpg',
    wiki: '/wiki/Armadillo_girdled_lizard',
  },
  {
    _id: 28,
    animal: 'australian owlet-nightjar',
    source:
      'https://reddit.com/r/Awwducational/comments/x4ewz4/the_australian_owletnightjar_native_to_australia/',
    text: 'The Australian owlet-nightjar, native to Australia and New Guinea, is a nocturnal bird that roosts in tree hollows during the day. It is colloquially known as the moth owl. The owlet-nightjar feeds at night by diving from perches and snatching insects from the air in the manner of a flycatcher.',
    media: 'https://v.redd.it/f79ksow8xil91',
    wiki: '/wiki/Australian_owlet-nightjar',
  },
  {
    _id: 29,
    animal: 'baltimore oriole',
    source:
      'https://reddit.com/r/Awwducational/comments/xluga2/baltimore_orioles_forage_in_trees_and_shrubs_also/',
    text: 'Baltimore orioles forage in trees and shrubs, also making short flights to catch insects. They acrobatically clamber, hover and hang among foliage as they comb high branches. They mainly eat insects, berries and nectar, and are often seen sipping at hummingbird feeders.',
    media: 'https://v.redd.it/9jep7aahblp91',
    wiki: '/wiki/Baltimore_oriole',
  },
  {
    _id: 30,
    animal: 'barn owl',
    source:
      'https://reddit.com/r/Awwducational/comments/xb3gfi/barn_owls_are_incredibly_efficient_hunters_a/',
    text: 'Barn owls are incredibly efficient hunters, a family of owls can eat upwards of 4,000 mice each year [OC]',
    media: 'https://i.redd.it/gf38oiuia4n91.jpg',
    wiki: '/wiki/Barn_owl',
  },
  {
    _id: 31,
    animal: 'barnacle goose',
    source:
      'https://reddit.com/r/Awwducational/comments/wxhrm3/barnacle_geese_nest_high_in_arctic_cliffs_to/',
    text: "Barnacle geese nest high in Arctic cliffs to avoid predators. Newly hatched day-old geese are flightless. They must plummet to feed on grass, as parents can't feed them. Being lightweight and fluffy help cushion their bouncy fall. 90% survives the tumble, but half taken by foxes and birds of prey.",
    media: 'https://v.redd.it/oj83089frvj91',
    wiki: '/wiki/Barnacle_goose',
  },
  {
    _id: 32,
    animal: 'bat hawk',
    source:
      'https://reddit.com/r/Awwducational/comments/yrrfnc/bat_hawks_are_the_dark_featherclad_vampire/',
    text: 'Bat hawks are the dark, feather-clad vampire hunters of the birds of prey. They begin their hunt for bats, their main prey, at dusk as the bats emerge from their roost; catching them at high speeds mid-flight and swallowing them whole.',
    media: 'https://i.redd.it/jxfxqqli98z91.png',
    wiki: '/wiki/Bat_hawk',
  },
  {
    _id: 33,
    animal: 'bear cuscus',
    source:
      'https://reddit.com/r/Awwducational/comments/yxou5v/the_bear_cuscus_is_named_for_its_thick_bearlike/',
    text: "The bear cuscus is named for its thick, bear-like fur. However, it's actually an arboreal marsupial, native to the islands of Indonesia. It appears to be a very lethargic animal, due to its low-nutrient diet of leaves, buds, and flowers - moving slowly through the canopy and resting often.",
    media: 'https://i.redd.it/arcroli0pj0a1.png',
    wiki: '/wiki/Bear_cuscus',
  },
  {
    _id: 34,
    animal: 'bearded vulture',
    source:
      'https://reddit.com/r/Awwducational/comments/yzfj6l/bearded_vulture_aka_lammergeierossifrage_chicks/',
    text: 'Bearded Vulture aka Lammergeier/Ossifrage chicks take 100-130 days to leave their nest and require parental care for 2yrs, forcing their parents to nest on alternating years on a regular basis.',
    media: 'https://v.redd.it/kv6fkswumx0a1',
    wiki: '/wiki/Bearded_vulture',
  },
  {
    _id: 35,
    animal: 'black currawong',
    source:
      'https://reddit.com/r/Awwducational/comments/yd1w3t/the_black_currawong_strepera_fuliginosa_also/',
    text: 'The black currawong (Strepera fuliginosa), also known locally as the black jay, is a large passerine bird endemic to Tasmania. One of three currawong species in the genus Strepera, it is closely related to the butcherbirds and Australian magpie within the family Artamidae.',
    media: 'https://v.redd.it/0nuk5yrmnxv91',
    wiki: '/wiki/Black_currawong',
  },
  {
    _id: 36,
    animal: 'black-footed cat',
    source:
      'https://reddit.com/r/Awwducational/comments/x1bn37/this_is_an_african_black_footed_cat_despite_its/',
    text: 'This is an African black footed cat. Despite its adorable looks, it’s a killing machine. It’s hunting success rate is 60%, compare that to a lion’s 25%',
    media: 'https://i.redd.it/okypz76ynsk91.jpg',
    wiki: '/wiki/Black-footed_cat',
  },
  {
    _id: 37,
    animal: 'blue button jellyfish',
    source:
      'https://reddit.com/r/Awwducational/comments/xb6njm/the_blue_button_jellyfish_gets_its_name_from_its/',
    text: "The blue button jellyfish gets its name from its blue coat button-shaped body and jellyfish-like tentacles, but it's not a jellyfish at all. It's a marine organism composed of colonies of hydrozoan polyps and is more closely related to the Portuguese man o' war. Its sting can cause mild irritation.",
    media: 'https://v.redd.it/4pd11v7hz4n91',
    wiki: '/wiki/Porpita_porpita',
  },
  {
    _id: 38,
    animal: 'blue jay',
    source:
      'https://reddit.com/r/Awwducational/comments/xpdux0/blue_jays_are_omnivorous_but_the_audubon_society/',
    text: 'Blue jays are omnivorous, but the Audubon Society estimates that 75% of their diet is vegetable matter. They have strong black bills which they use for cracking nuts, usually while holding them with their feet, and for eating corn, grains and seeds.',
    media: 'https://i.redd.it/ff5yiw3ixdq91.jpg',
    wiki: '/wiki/Blue_jay',
  },
  {
    _id: 39,
    animal: 'bluestriped fangblenny',
    source:
      'https://reddit.com/r/Awwducational/comments/yya9k5/the_bluestriped_fangblenny_changes_colors_to/',
    text: 'The Bluestriped fangblenny changes colors to match other fishes. Pretending to be a cleaner wrasse, it will swim up to larger fish, but instead of eating dead scales and parasites, the fangblenny uses its morphine-like venom to eat healthy tissue undetected.',
    media: 'https://v.redd.it/ck0civlgao0a1',
    wiki: '/wiki/Bluestriped_fangblenny',
  },
  {
    _id: 40,
    animal: 'bohemian waxwing',
    source:
      'https://reddit.com/r/Awwducational/comments/y3rh5q/bohemian_waxwings_can_eat_huge_numbers_of_berries/',
    text: 'Bohemian Waxwings can eat huge numbers of berries, each bird sometimes consuming several hundred a day, more than double its own weight. One individual was recorded as eating between 600 and 1,000 cotoneaster berries in six hours, and defecating every four minutes.',
    media: 'https://v.redd.it/d5x96pb6crt91',
    wiki: '/wiki/Bohemian_waxwing',
  },
  {
    _id: 41,
    animal: 'brazilian porcupine',
    source:
      'https://reddit.com/r/Awwducational/comments/xra0k8/the_brazilian_porcupine_has_a_prehensile_tail_to/',
    text: 'The Brazilian porcupine has a prehensile tail to help it climb trees and a rather plump nose to help it find food in its native South American habitats. Females give birth to a single porcupette in the spring. At the Cincinnati Zoo, a porcupette named Rico is seen here munching on corn on the cob.',
    media: 'https://v.redd.it/57zqukexatq91',
    wiki: '/wiki/Brazilian_porcupine',
  },
  {
    _id: 42,
    animal: "Bruno's casque-headed frog",
    source:
      'https://reddit.com/r/Awwducational/comments/wxc7bf/despite_its_derpy_appearance_brunos_casqueheaded/',
    text: "Despite its derpy appearance, Bruno's casque-headed frog (Nyctimantis brunoi) is no joke. Endemic to Brazil, their venom - 25 times more potent than native pit vipers - is delivered via headbutt using tiny bony spines on their skull.",
    media: 'https://i.redd.it/9h7puk8cjuj91.png',
    wiki: '/wiki/Bruno%27s_casque-headed_frog',
  },
  {
    _id: 43,
    animal: 'bumblebee',
    source:
      'https://reddit.com/r/Awwducational/comments/xitwzx/closed_bottle_gentian_flowers_never_open_only/',
    text: 'Closed bottle gentian flowers never open. Only large bumblebees can force the petals apart. This is a mutualistic relationship because the bees benefit by having exclusive access to a bountiful nectar supply, and the plants benefit by attracting "loyal" pollinators.',
    media: 'https://v.redd.it/4jg66ebyswo91',
    wiki: '/wiki/Bumblebee',
  },
  {
    _id: 44,
    animal: 'caecilian',
    source:
      'https://reddit.com/r/Awwducational/comments/xqgrc1/caecilians_are_wormlike_burrowing_amphibians_with/',
    text: 'Caecilians are wormlike, burrowing amphibians with smooth, moist skin which appears narrowly segmented. Their eyes are small and covered with skin, visual perception being limited to determining between light and dark. This yellow-striped caecilian was found by a gardener in Thailand and released.',
    media: 'https://i.redd.it/tzfhu7eggmq91.jpg',
    wiki: '/wiki/Caecilian',
  },
  {
    _id: 45,
    animal: 'california scrub jay',
    source:
      'https://reddit.com/r/Awwducational/comments/yqiy78/california_scrub_jays_like_many_other_corvids/',
    text: 'California scrub jays, like many other corvids, exploit ephemeral surpluses by storing food in scattered caches within their territories. They rely on highly accurate and complex memories to recover the hidden caches, often after long periods of time.',
    media: 'https://i.redd.it/7oegmohufxy91.jpg',
    wiki: '/wiki/California_scrub_jay',
  },
  {
    _id: 46,
    animal: 'cape genet',
    source:
      'https://reddit.com/r/Awwducational/comments/x627bt/the_cape_genet_is_native_to_south_africa_and_it/',
    text: 'The Cape genet is native to South Africa, and it is recognized by its irregular brown spots, black dorsal crest, and black and white banded tail. Like other genet species, the Cape genet is nocturnal and arboreal and mostly inhabits the riparian zones of forests. This genet is undergoing training.',
    media: 'https://v.redd.it/o3lrotlblxl91',
    wiki: '/wiki/Cape_genet',
  },
  {
    _id: 47,
    animal: 'cape sparrow',
    source:
      'https://reddit.com/r/Awwducational/comments/y74ii7/the_cape_sparrow_mostly_eats_seeds_foraging_in/',
    text: 'The Cape sparrow mostly eats seeds, foraging in trees and on the ground. The larger seeds of cereals, wild grasses, and other small plants are preferred, with wheat and khakiweed (Alternanthera caracasana) being favourites.',
    media: 'https://i.redd.it/6lsdw6cdvju91.jpg',
    wiki: '/wiki/Cape_sparrow',
  },
  {
    _id: 48,
    animal: 'cape sugarbird',
    source:
      'https://reddit.com/r/Awwducational/comments/y0bjf5/the_cape_sugarbird_is_a_specialist_nectar_feeder/',
    text: 'The Cape sugarbird is a specialist nectar feeder when it comes to feeding off Proteaceae. Its long, sharp beak is used to reach the nectar of a variety of species of protea with its long brush-tipped tongue.',
    media: 'https://i.redd.it/hy6qawf0kys91.jpg',
    wiki: '/wiki/Cape_sugarbird',
  },
  {
    _id: 49,
    animal: 'cardinal',
    source:
      'https://reddit.com/r/Awwducational/comments/xr62tx/northern_cardinals_are_preyed_upon_by_a_wide/',
    text: 'Northern cardinals are preyed upon by a wide variety of predators native to North America, including falcons, all Accipiter hawks, shrikes, bald eagles, golden eagles and several owls, including long-eared owls, and eastern screech owls.',
    media: 'https://i.redd.it/vcaisnymfsq91.jpg',
    wiki: '/wiki/Cardinal_(bird)',
  },
  {
    _id: 50,
    animal: 'caribou',
    source:
      'https://reddit.com/r/Awwducational/comments/xpgigo/caribou_have_hollow_hairs_that_not_only_serve_as/',
    text: 'Caribou have hollow hairs that not only serve as crucial insulation during the winter time but also provide buoyancy while swimming. Caribou are excellent swimmers, and they will often swim during their migrations or when exploring new feeding areas. These caribou are crossing a lake in Alaska.',
    media: 'https://v.redd.it/rausl5z4ieq91',
    wiki: '/wiki/Reindeer',
  },
  {
    _id: 51,
    animal: 'chameleon',
    source:
      'https://reddit.com/r/Awwducational/comments/xs2n8a/a_chameleons_eyes_are_mounted_on_small_turrets/',
    text: "A chameleon's eyes are mounted on small turrets that move independently so one eye can see in front and the other behind, hence a chameleon can constantly scan its environment panaromically for prey and predators. This panther chameleon is looking forward to having its picture taken, or so it seems.",
    media: 'https://i.redd.it/fdiu8xie90r91.jpg',
    wiki: '/wiki/Chameleon',
  },
  {
    _id: 52,
    animal: 'chinese giant salamander',
    source:
      'https://reddit.com/r/Awwducational/comments/ytzy23/the_chinese_giant_salamander_is_the_worlds/',
    text: 'The Chinese giant salamander is the world\'s largest amphibian. Its average length is 1.2 metres (almost 4 feet); the largest measuring 1.8 metres (5.9 feet) in length. It produces sounds that sound like a baby crying, landing it the (inaccurate) nickname of "baby fish".',
    media: 'https://i.redd.it/ecy5cbm44rz91.png',
    wiki: '/wiki/Chinese_giant_salamander',
  },
  {
    _id: 53,
    animal: 'chinese water deer',
    source:
      'https://reddit.com/r/Awwducational/comments/xsiq2s/the_chinese_water_deer_do_not_grow_antlers_but/',
    text: 'The Chinese Water Deer do not grow antlers but instead grows tusks. They are also known as “vampire deer." Source: https://en.m.wikipedia.org/wiki/Water_deer',
    media: 'https://i.redd.it/5m5t9fipm3r91.jpg',
    wiki: '/wiki/Water_deer',
  },
  {
    _id: 54,
    animal: 'chinstrap penguin',
    source:
      'https://reddit.com/r/Awwducational/comments/x5nkia/chinstrap_penguins_inhabit_a_variety_of_islands/',
    text: 'Chinstrap penguins inhabit a variety of islands and shores in the Southern Pacific and the Antarctic Oceans. They spend their winters hitchhiking on icebergs in warmer waters. Their name comes from the narrow black band below the beak which makes them appear as if they are wearing a black helmet.',
    media: 'https://i.redd.it/uwi3mmzoiul91.jpg',
    wiki: '/wiki/Chinstrap_penguin',
  },
  {
    _id: 55,
    animal: 'chital',
    source:
      'https://reddit.com/r/Awwducational/comments/wwhicc/the_chital_is_a_species_of_deer_found_in_india/',
    text: 'The chital is a species of deer found in India and, like all cervids, it is unable to see red and orange, making this species particularly vulnerable to Bengal tigers. What appears orange to us is seen as green by chitals. This gives tigers a huge advantage when stalking prey.',
    media: 'https://v.redd.it/7rj6ayfydnj91',
    wiki: '/wiki/Chital',
  },
  {
    _id: 56,
    animal: 'choupique',
    source:
      'https://reddit.com/r/Awwducational/comments/wz0tyc/the_choupique_pronounced_shoepick_is_a_freshwater/',
    text: 'The choupique (pronounced shoe-pick) is a freshwater fish native to the eastern half of North America. Properly known as the bowfin, it is the sole surviving species of an ancient lineage of ray-finned bony fish that started 250 million years ago. When the young hatch, they are guarded by their dad.',
    media: 'https://v.redd.it/q8ejf6l4u8k91',
    wiki: '/wiki/Bowfin',
  },
  {
    _id: 57,
    animal: 'cockatoo waspfish',
    source:
      'https://reddit.com/r/Awwducational/comments/wvk6sw/cockatoo_waspfish_are_autumnallycolored_fish_that/',
    text: 'Cockatoo waspfish are autumnally-colored fish that mimic dead leaves and seaweed wafting along the seafloor with the current. This behavior enables them to stealthily ambush prey as they drift. Their raised dorsal fin along with being a member of the scorpionfish family gives the fish their name.',
    media: 'https://v.redd.it/akh17urpifj91',
    wiki: '/wiki/Ablabys_taenianotus',
  },
  {
    _id: 58,
    animal: 'cockchafer beetle',
    source:
      'https://reddit.com/r/Awwducational/comments/w82klw/the_cockchafer_beetle_lives_57_weeks_in_may_april/',
    text: 'The cockchafer beetle lives 5-7 weeks in May & April. It can also be referred to as a may bug, a billy witch, a spang beetle, and Melolontha hippocastani. Cockchafer can be understood to mean “large plant gnawing beetle” and they are known for their long “eyelashes”',
    media: 'https://i.redd.it/mto7xwyflsd91.jpg',
    wiki: '/wiki/Cockchafer',
  },
  {
    _id: 59,
    animal: 'crested wood partridge',
    source:
      'https://reddit.com/r/Awwducational/comments/wy6ic9/crested_wood_partridges_are_rotund_shorttailed/',
    text: 'Crested wood partridges are rotund short-tailed members of the pheasant family native to Southeast Asia. Males sport tall red crests while females have pea green plumage with chestnut brown wing coverts. These partridges live in a rainforest biome at the Eden Project in Cornwall.',
    media: 'https://v.redd.it/owm5vfcek1k91',
    wiki: '/wiki/Crested_partridge',
  },
  {
    _id: 60,
    animal: 'crocodile skink',
    source:
      'https://reddit.com/r/Awwducational/comments/xpzfo5/unlike_most_reptiles_crocodile_skinks_care_from/',
    text: 'Unlike most reptiles, Crocodile Skinks care from their young long after hatching. This mother is nuzzling her 4 month old baby.',
    media: 'https://v.redd.it/v2dc2jsz9iq91',
    wiki: '/wiki/Red-eyed_crocodile_skink',
  },
  {
    _id: 61,
    animal: 'david attenborough snail',
    source:
      'https://reddit.com/r/Awwducational/comments/xl9u8l/the_david_attenborough_snail_native_to_australia/',
    text: 'The David Attenborough snail, native to Australia, is a colorful species of airbreathing semi-slug. Semi-slugs are characterized as gastropods that straddle the distinction between snails and slugs. They have shells, usually covered over by the mantle, that are too small for them to retract into.',
    media: 'https://i.redd.it/92txgx2qcgp91.jpg',
    wiki: '/wiki/Attenborougharion_rubicundus',
  },
  {
    _id: 62,
    animal: 'decorator crab',
    source:
      'https://reddit.com/r/Awwducational/comments/xccemf/decorator_crabs_use_sedentary_creatures_to/',
    text: 'Decorator crabs use sedentary creatures to camouflage themselves from predators, or with poisonous creatures to ward off predators! different species will use different creatures to decorate themselves. source: (https://en.wikipedia.org/wiki/Decorator_crab)',
    media: 'https://i.redd.it/oqr1oxzbffn91.jpg',
    wiki: '/wiki/Decorator_crab',
  },
  {
    _id: 63,
    animal: 'desert cardinal',
    source:
      'https://reddit.com/r/Awwducational/comments/x12x3n/the_pyrrhuloxia_pronounced_peeruhloxeea_also/',
    text: 'The pyrrhuloxia (pronounced "peer-uh-LOX-ee-a"), also called the desert cardinal, is a song bird native to the southwestern US and northern Mexico. Although it bears a strong resemblance to the northern cardinal, the pyrrhuloxia is its own distinct species, however, they both share the same genus.',
    media: 'https://i.redd.it/1qq30hxyhqk91.jpg',
    wiki: '/wiki/Pyrrhuloxia',
  },
  {
    _id: 64,
    animal: 'desert rain frog',
    source:
      'https://reddit.com/r/Awwducational/comments/wg4j1s/desert_rain_frogs_live_in_clusters_also_called/',
    text: 'Desert rain frogs live in clusters (also called armies), are near threatened species as of 2016, and love burrowing!',
    media: 'https://v.redd.it/pymgpvbfwpf91',
    wiki: '/wiki/Desert_rain_frog',
  },
  {
    _id: 65,
    animal: 'downy woodpecker',
    source:
      'https://reddit.com/r/Awwducational/comments/yk39d1/youll_find_downy_woodpeckers_in_open_woodlands/',
    text: 'You’ll find Downy Woodpeckers in open woodlands, particularly among deciduous trees, and brushy or weedy edges. They’re also at home in orchards, city parks, backyards and vacant lots.',
    media: 'https://i.redd.it/nozs9nvv1jx91.jpg',
    wiki: '/wiki/Downy_woodpecker',
  },
  {
    _id: 66,
    animal: 'dusky dolphin',
    source:
      'https://reddit.com/r/Awwducational/comments/xso65y/arguably_the_most_active_of_all_dolphins_dusky/',
    text: 'Arguably the most active of all dolphins, dusky dolphins are known for their energetic, skillful leaping and tumbling acrobatics. They see each other better in the air to help synchronize cooperative movements for herding prey. Here, a pod one thousand strong off the Kaikōura coast of New Zealand',
    media: 'https://v.redd.it/ujakyfax15r91',
    wiki: '/wiki/Dusky_dolphin',
  },
  {
    _id: 67,
    animal: 'earwig',
    source:
      'https://reddit.com/r/Awwducational/comments/ytbmzj/earwigs_are_devoted_mothers_they_stay_with_their/',
    text: 'Earwigs are devoted mothers. They stay with their clutch and clean the eggs until they hatch and defend them from predators. After hatching, she will regurgitate food for them.',
    media: 'https://i.redd.it/bktxnyajqjz91.jpg',
    wiki: '/wiki/Earwig',
  },
  {
    _id: 68,
    animal: 'elegant crested tinamou',
    source:
      'https://reddit.com/r/Awwducational/comments/wb6lum/the_elegant_crested_tinamou_native_to_chile_and/',
    text: 'The elegant crested tinamou, native to Chile and Argentina, is a partridge-like bird which lays highly glossy eggs. Chicks hatch out of their eggs using their egg teeth and legs to cut and pry them open. These tinamou eggs were incubated by an aviculturalist specializing in conservation breeding.',
    media: 'https://v.redd.it/527dmj3erie91',
    wiki: '/wiki/Elegant_crested_tinamou',
  },
  {
    _id: 69,
    animal: 'emu',
    source:
      'https://reddit.com/r/Awwducational/comments/xj7wmj/male_emus_raise_their_chicks_mating_pairs_often/',
    text: 'Male emus raise their chicks. mating pairs often stay together for up to five months, after which females lay large, emerald-green eggs in expansive ground nests. The males incubate the eggs for about seven weeks without drinking, feeding, defecating, or leaving the nest.',
    media: 'https://i.redd.it/n3558qdlf0p91.jpg',
    wiki: '/wiki/Emu',
  },
  {
    _id: 70,
    animal: 'european fallow deer',
    source:
      'https://reddit.com/r/Awwducational/comments/wuyt0i/european_fallow_deer_are_historically_native_to/',
    text: 'European fallow deer are historically native to parts of southern Europe and Asia Minor, but they have now been introduced throughout much of Europe as well as other continents. There are four main color variants: common, menil, melanistic, and leucistic. This melanistic stag was filmed in Poland.',
    media: 'https://v.redd.it/cp1gelnbnaj91',
    wiki: '/wiki/European_fallow_deer',
  },
  {
    _id: 71,
    animal: 'european hamster',
    source:
      'https://reddit.com/r/Awwducational/comments/xo0qk2/the_european_hamster_cricetus_cricetus_also_known/',
    text: 'The European hamster (Cricetus cricetus), also known as the Eurasian hamster, or common hamster, is the only species of hamster in the genus Cricetus. It is native to grassland and similar habitats in a large part of Eurasia, extending from Belgium to the Altai mountains and Yenisey River in Russia.',
    media: 'https://i.redd.it/ylbjfev0x2q91.jpg',
    wiki: '/wiki/European_hamster',
  },
  {
    _id: 72,
    animal: 'european robin',
    source:
      'https://reddit.com/r/Awwducational/comments/ys96q3/male_european_robins_are_noted_for_their_highly/',
    text: 'Male European Robins are noted for their highly aggressive territorial behaviour. They will fiercely attack other males and competitors that stray into their territories and have been observed attacking other small birds without apparent provocation.',
    media: 'https://i.redd.it/xws3ilqlgbz91.jpg',
    wiki: '/wiki/European_robin',
  },
  {
    _id: 73,
    animal: 'forest dormouse',
    source:
      'https://reddit.com/r/Awwducational/comments/wrxcjk/the_forest_dormouse_is_a_primarily_arboreal/',
    text: 'The forest dormouse is a primarily arboreal species of rodent in the family Gliridae found in eastern Europe, the Balkans and parts of western Central Asia. The dormouse, derived from French "dormeuse" meaning sleepyhead, is so-named for its long, dormant hibernation period of six months or longer.',
    media: 'https://v.redd.it/6vh6lne8tji91',
    wiki: '/wiki/Forest_dormouse',
  },
  {
    _id: 74,
    animal: 'four-eyed frog',
    source:
      'https://reddit.com/r/Awwducational/comments/ypk4jh/some_frog_species_such_as_the_foureyed_frog_top/',
    text: "Some frog species such as the four-eyed frog (top) have evolved poisonous glands that serve as 'eyespots' on their rears. Raising their rears, and sometimes inflating them like the Cuyaba dwarf frog (bottom), they trick predators into thinking they're the heads of larger animals.",
    media: 'https://i.redd.it/9e8r5rhudry91.png',
    wiki: '/wiki/Colombian_four-eyed_frog',
  },
  {
    _id: 75,
    animal: 'fringe-lipped bat',
    source:
      'https://reddit.com/r/Awwducational/comments/yqlzhc/fringelipped_bats_trachops_cirrhosus_are_very/',
    text: 'Fringe-lipped bats (Trachops cirrhosus) are very smart and hunt frogs by listening to the chunking sounds male frogs make. They are also easily trained to respond to novel stimuli, such as a ringtone or rock music, and can remember the sounds for years.',
    media: 'https://i.redd.it/wwglde9p0yy91.png',
    wiki: '/wiki/Fringe-lipped_bat',
  },
  {
    _id: 76,
    animal: 'genet',
    source:
      'https://reddit.com/r/Awwducational/comments/yqon35/a_genet_is_a_small_viverrid_of_the_genus_genetta/',
    text: 'A genet is a small viverrid of the genus Genetta, which consists of 17 species of small African carnivorans. The common genet is the only genet present in Europe and occurs in the Iberian Peninsula, Italy and France. They are opportunistic omnivores that also feed on plants and fruit.',
    media: 'https://v.redd.it/4u8otwoihyy91',
    wiki: '/wiki/Genet_(animal)',
  },
  {
    _id: 77,
    animal: 'geoduck',
    source:
      'https://reddit.com/r/Awwducational/comments/wvmi00/the_geoduck_pronounced_gooey_duck_is_a_very_large/',
    text: 'The geoduck (pronounced gooey duck) is a very large saltwater clam native to coastal waters along the northeastern Pacific Ocean. It is known as a broadcast spawner - both males and females release billions of spermatozoa and eggs respectively into the sea to reproduce. This specimen was released.',
    media: 'https://i.redd.it/jart9qji7gj91.png',
    wiki: '/wiki/Geoduck',
  },
  {
    _id: 78,
    animal: "geoffroy's cat",
    source:
      'https://reddit.com/r/Awwducational/comments/xommt1/geoffroys_cat_about_the_size_of_a_typical/',
    text: "Geoffroy's cat, about the size of a typical domestic cat, inhabits the pampas and savannas of South America. It is distinguished by its numerous black spots and dark bands on its fur except when it is a morph. This rescued melanistic Geoffroy's cat resides at a feline sanctuary in Florida.",
    media: 'https://i.redd.it/6atue9a108q91.jpg',
    wiki: '/wiki/Geoffroy%27s_cat',
  },
  {
    _id: 79,
    animal: 'geometer moth',
    source:
      'https://reddit.com/r/Awwducational/comments/wieki2/the_larvae_of_geometer_moths_go_by_the_common/',
    text: 'The larvae of geometer moths go by the common name "inchworm" because of how these caterpillars move forward in a looping fashion as though they are "measuring the Earth", hence their family name, Geometridae. There are over 23,000 species of geometer moths, 1400 in North America alone.',
    media: 'https://v.redd.it/82dwbsrg8ag91',
    wiki: '/wiki/Geometer_moth',
  },
  {
    _id: 80,
    animal: 'giant otter shrew',
    source:
      'https://reddit.com/r/Awwducational/comments/x1u8nl/neither_otter_nor_shrew_the_poorlynamed_giant/',
    text: 'Neither otter nor shrew, the poorly-named giant otter shrew (Potamogale velox) is in fact more closely related to elephants. Nearly blind, these semiaquatic African carnivores swim like crocodiles with side-to-side motions of their powerful tails, sniffing out prey like crabs, fish, and frogs.',
    media: 'https://i.redd.it/kj6gkkuirek91.jpg',
    wiki: '/wiki/Giant_otter_shrew',
  },
  {
    _id: 81,
    animal: 'giant vinegaroon',
    source:
      'https://reddit.com/r/Awwducational/comments/xfqx3e/despite_their_looks_giant_vinegaroons_are/',
    text: 'Despite their looks, Giant Vinegaroons are harmless to humans, and can make great pets. But, when attacked, they can accurately fire an offensive vinegar-smelling liquid out of their rear that contains acetic acid.',
    media: 'https://i.redd.it/reg0tnnuz7o91.jpg',
    wiki: '/wiki/Mastigoproctus_giganteus',
  },
  {
    _id: 82,
    animal: 'giant wood moth',
    source:
      'https://reddit.com/r/Awwducational/comments/xiedp9/the_giant_wood_moth_is_one_of_the_largest_moth/',
    text: 'The giant wood moth is one of the largest moth species in the world. According to the Australian Museum, adult females are about twice as large as males, can weigh up to 30 grams, and have a wingspan of up to 25 centimeters. They live in the forests of Australia and New Zealand',
    media: 'https://i.redd.it/h6xin34txto91.jpg',
    wiki: '/wiki/Endoxyla_cinereus',
  },
  {
    _id: 83,
    animal: 'goat',
    source:
      'https://reddit.com/r/Awwducational/comments/wlvtkb/fun_fact_you_can_rent_goats_to_clear_brush_off/',
    text: "Fun Fact, you can rent goats to clear brush off your property. They eat everything, including poison ivy, and it's much more eco friendly than weed killer.",
    media: 'https://i.redd.it/f0wu3tqn34h91.jpg',
    wiki: '/wiki/Goat',
  },
  {
    _id: 84,
    animal: 'golden lion tamarin',
    source:
      'https://reddit.com/r/Awwducational/comments/y98w4x/golden_lion_tamarins_are_unique_among_primates_in/',
    text: 'Golden lion tamarins are unique among primates in that they will usually give birth to twins, with over three-quarters of wild-born golden tamarins being twins. Their tight-knit family groups allow them to care for them. The babies are born fully furred with open eyes.',
    media: 'https://i.redd.it/nnp7h6h8s0v91.jpg',
    wiki: '/wiki/Golden_lion_tamarin',
  },
  {
    _id: 85,
    animal: 'great bustard',
    source:
      'https://reddit.com/r/Awwducational/comments/yfz0q6/the_great_bustard_is_the_heaviest_bird_in_the/',
    text: 'The great bustard is the heaviest bird in the world capable of flight. It can weigh up to 21 kg (46 lb) - about the weight of a 5 year old child. Males will grow colorful breeding plumage each year, including moustachial feathers on each side of the beak that can be 20 cm long in old males.',
    media: 'https://i.redd.it/k5ooikby8nw91.png',
    wiki: '/wiki/Great_bustard',
  },
  {
    _id: 86,
    animal: 'great eared nightjar',
    source:
      'https://reddit.com/r/Awwducational/comments/xivmg1/the_great_eared_nightjar_is_a_species_of_nightjar/',
    text: 'The great eared nightjar is a species of nightjar in the family Caprimulgidae. It is found in southwest India and in parts of Southeast Asia. This very large nightjar has long barred wings, a barred tail and long ear-tufts which are often recumbent',
    media: 'https://i.redd.it/5bvwzqrc6xo91.jpg',
    wiki: '/wiki/Great_eared_nightjar',
  },
  {
    _id: 87,
    animal: 'great tit',
    source:
      'https://reddit.com/r/Awwducational/comments/wsbeo1/great_tits_are_primarily_insectivorous_in_the/',
    text: 'Great tits are primarily insectivorous in the summer, feeding on insects and spiders which they capture by foliage gleaning. Their larger invertebrate prey include cockroaches, grasshoppers and crickets, lacewings, earwigs, bugs (Hemiptera), ants, flies (Diptera), caddis flies, beetles, scorpions...',
    media: 'https://v.redd.it/wkj320m2mni91',
    wiki: '/wiki/Great_tit',
  },
  {
    _id: 88,
    animal: 'greater glider',
    source:
      'https://reddit.com/r/Awwducational/comments/xi4isq/greater_gliders_are_velvetyfurred_marsupials_w/',
    text: 'Greater Gliders are velvety-furred marsupials w/ distinctive large fluffy ears, the largest in the ringtail possum fam,can glide up to 100m at a time.W/ a highly specialized diet feeding almost exclusively on eucalypt leaves & using 2-18 tree hollows for shelter. Listed as endangered species in 2022',
    media:
      'https://www.australiangeographic.com.au/wp-content/uploads/2020/05/Greater-glider-900x567.jpg',
    wiki: '/wiki/Greater_glider',
  },
  {
    _id: 89,
    animal: 'greater honeyguide',
    source:
      'https://reddit.com/r/Awwducational/comments/y4xjcz/the_greater_honeyguide_indicator_indicator_is_a/',
    text: "The greater honeyguide (Indicator indicator) is a bird that guides both people and honey badgers to bee hives. It approaches, makes distinct calls, and flutters in the direction of the beehive. It will do so until it's followed and the hive is cracked open so it can eat the beeswax.",
    media: 'https://i.redd.it/wab7a1yf21u91.png',
    wiki: '/wiki/Greater_honeyguide',
  },
  {
    _id: 90,
    animal: 'greater one-horned rhino',
    source:
      'https://reddit.com/r/Awwducational/comments/vv1beq/greater_onehorned_rhinos_are_found_only_in_nepal/',
    text: 'Greater one-horned rhinos are found only in Nepal and northeast India, and their population has recently rebounded to a total of around 3,700 members in a recent survey. This rhino is calmly walking through Sauraha, a village located near Chitwan National Park in Nepal.',
    media: 'https://v.redd.it/12gz75rnija91',
    wiki: '/wiki/Indian_rhinoceros',
  },
  {
    _id: 91,
    animal: 'hairy long-nosed armadillo',
    source:
      'https://reddit.com/r/Awwducational/comments/xc0f90/the_hairy_longnosed_armadillo_native_to_peru_has/',
    text: 'The hairy long-nosed armadillo, native to Peru, has a distinctive coat of long brown fur which grows through tiny pores in its armor. It can weigh up to 5 kg (10.4 lb) and grow to 58 cm (23 in) long, including the tail. It is estimated that there are only 12 known individuals in its wild population.',
    media: 'https://i.redd.it/613q6fzf5cn91.png',
    wiki: '/wiki/Hairy_long-nosed_armadillo',
  },
  {
    _id: 92,
    animal: 'handfish',
    source:
      'https://reddit.com/r/Awwducational/comments/xd2d1i/the_handfish_is_a_type_of_anglerfish_that_prefers/',
    text: 'The handfish is a type of anglerfish that prefers to use its fins as "hands" to move around on the sea floor rather than swimming, though it will certainly use its tail to make a quick getaway, if necessary. It is found in the coastal waters of southern and eastern Australia, including Tasmania.',
    media: 'https://v.redd.it/ibon7hk6bln91',
    wiki: '/wiki/Handfish',
  },
  {
    _id: 93,
    animal: 'helmeted guineafowl',
    source:
      'https://reddit.com/r/Awwducational/comments/wpr9sv/helmeted_guineafowl_is_a_gregarious_species/',
    text: 'Helmeted Guineafowl is a gregarious species, forming flocks outside the breeding season typically of about 25 birds that also roost communally. They are particularly well-suited to consuming massive quantities of ticks, which might otherwise spread Lyme disease.',
    media: 'https://i.redd.it/uy4l6ajt32i91.jpg',
    wiki: '/wiki/Helmeted_guineafowl',
  },
  {
    _id: 94,
    animal: 'hermit crab',
    source:
      'https://reddit.com/r/Awwducational/comments/wliauc/hermit_crabs_will_eventually_outgrow_their_shells/',
    text: 'Hermit crabs will eventually outgrow their shells. At such times, they\'d line up according to size to swap shells. Shells too big or too small are rejected. This chain reaction is called "vacancy chain." Vacancy chain is a way for these crustaceans to survive while sharing limited resources.',
    media: 'https://v.redd.it/r6hita3nf0h91',
    wiki: '/wiki/Hermit_crab',
  },
  {
    _id: 95,
    animal: 'horned frog',
    source:
      'https://reddit.com/r/Awwducational/comments/z0fb8d/horned_frogs_are_large_squat_and_aggressive_they/',
    text: "Horned frogs are large, squat, and aggressive. They remain motionless and wait for prey to wander by; attempting to eat anything that will fit into their mouths, as well as things that don't. They are also called PacMan frogs due to their round shape, large mouth, and habit of swallowing prey whole.",
    media: 'https://i.redd.it/y2ad3ciqp71a1.png',
    wiki: '/wiki/Horned_frog',
  },
  {
    _id: 96,
    animal: 'hover fly',
    source:
      'https://reddit.com/r/Awwducational/comments/xidppp/hoverflies_are_important_pollinators_of/',
    text: 'Hoverflies are important pollinators of wildflowers in many ecosystems and are responsible for the pollination of numerous species of flowering plants that produce food for wildlife. Their larvae feed on aphids and other plant pests. This hoverfly is feeding on the nectar of garlic flowers.',
    media: 'https://v.redd.it/dm4tu9q0tto91',
    wiki: '/wiki/Hover_fly',
  },
  {
    _id: 97,
    animal: 'hutia',
    source:
      'https://reddit.com/r/Awwducational/comments/wx9xa4/hutias_are_fairly_large_rodents_that_inhabit_the/',
    text: 'Hutias are fairly large rodents that inhabit the islands of the Caribbean, and they resemble nutrias (coypus) to some degree. Depending on the species, they can weigh from 2 to 8.5 kg (4.4 - 18.7 lbs). This is first time video footage of hutias in Cuba as they feed around coastal limestone caves.',
    media: 'https://v.redd.it/pjw14i5c0uj91',
    wiki: '/wiki/Hutia',
  },
  {
    _id: 98,
    animal: 'iberian lynx',
    source:
      'https://reddit.com/r/Awwducational/comments/xlxo8k/the_wild_iberian_lynx_population_has_increased/',
    text: 'The wild Iberian lynx population has increased tenfold in the last two decades, from 94 individuals in 2002 to 1,111 lynxes in 2021, a true success story owing to conservation efforts and public awareness. Listed as "endangered", the lynx lives in fragmented wilderness areas in Spain and Portugal.',
    media: 'https://v.redd.it/az1exxzd0mp91',
    wiki: '/wiki/Iberian_lynx',
  },
  {
    _id: 99,
    animal: 'iberian ribbed newt',
    source:
      'https://reddit.com/r/Awwducational/comments/xmpl2y/the_iberian_ribbed_newt_or_gallipato_native_to/',
    text: 'The Iberian ribbed newt or gallipato, native to the Iberian Peninsula and Morocco, is the largest European newt species. It is known for its sharp ribs which can puncture through its sides. This defense mechanism, which can sting a predator, causes little harm to the newt.',
    media: 'https://v.redd.it/dennh8edbsp91',
    wiki: '/wiki/Iberian_ribbed_newt',
  },
  {
    _id: 100,
    animal: 'indigo bunting',
    source:
      'https://reddit.com/r/Awwducational/comments/xt70ey/songbirds_like_this_indigo_bunting_use_the_stars/',
    text: 'Songbirds like this indigo bunting use the stars to navigate while migrating. Studies show that the birds especially rely on the North Star, Ursa Major, and Cassiopeia',
    media: 'https://i.redd.it/srw14phik9r91.jpg',
    wiki: '/wiki/Indigo_bunting',
  },
  {
    _id: 101,
    animal: 'isopod',
    source:
      'https://reddit.com/r/Awwducational/comments/xpktgs/isopods_first_appeared_in_the_fossil_record_300/',
    text: 'Isopods first appeared in the fossil record 300 million years ago, and today there are more than 10,000 species, both terrestrial and aquatic. All have rigid, segmented exoskeletons and two pairs of antennae. While this isopod is resting on the ocean floor, a deep-sea skate appears to befriend it.',
    media: 'https://v.redd.it/7xcpj05qbfq91',
    wiki: '/wiki/Isopoda',
  },
  {
    _id: 102,
    animal: 'jacana',
    source:
      'https://reddit.com/r/Awwducational/comments/xl27cg/jacana_males_are_responsible_for_raising_the/',
    text: "Jacana males are responsible for raising the chicks, and they will quickly collect the chicks under their wings at the slightest indication of danger. When it's safe, the chicks are let out again. This bronze-winged jacana dad gestures to his chicks that the coast is clear and it's safe to feed.",
    media: 'https://v.redd.it/abq4afgj1fp91',
    wiki: '/wiki/Jacanidae',
  },
  {
    _id: 103,
    animal: 'japanese honey bee',
    source:
      'https://reddit.com/r/Awwducational/comments/yblczu/japanese_honey_bees_apis_cerana_japonica_have_a/',
    text: 'Japanese honey bees (Apis cerana japonica) have a unique defense against raiding “murder hornets”. They mob the intruder and vibrate so intensely that they boil the hornet alive.',
    media: 'https://i.imgur.com/rdr8jDz.jpeg',
    wiki: '/wiki/Apis_cerana_japonica',
  },
  {
    _id: 104,
    animal: 'jaragua dwarf gecko',
    source:
      'https://reddit.com/r/Awwducational/comments/ygd9z0/haragua_lizard_worlds_smallest_known_reptile/',
    text: "The Jaragua lizard is the WORLD'S SMALLEST Known Reptile",
    media: 'https://v.redd.it/ckmsacv07pw91',
    wiki: '/wiki/Sphaerodactylus_ariasae',
  },
  {
    _id: 105,
    animal: 'java sparrow',
    source:
      'https://reddit.com/r/Awwducational/comments/xvc5h3/the_java_sparrow_is_about_15_to_17_cm_59_to_67_in/',
    text: 'The Java sparrow is about 15 to 17 cm (5.9 to 6.7 in) in length from the beak to its tip of tail feathers. Although only about the size of a house sparrow, it may be the largest species in the estrildid family.',
    media: 'https://v.redd.it/2vol5zumtrr91',
    wiki: '/wiki/Java_sparrow',
  },
  {
    _id: 106,
    animal: 'jumping spider',
    source:
      'https://reddit.com/r/Awwducational/comments/y25cce/jumping_spiders_familysalticidae_can_take_down/',
    text: 'Jumping spiders (Family:Salticidae) can take down prey many times their size. These spiders have elaborate courtship dances where the male eventually passes the female a packet of reproductive material with a quick tap. Longer contact could be dangerous! The peacock spider is particularly showy.',
    media: 'https://imgur.com/gallery/TeZjKzI',
    wiki: '/wiki/Jumping_spider',
  },
  {
    _id: 107,
    animal: 'kermode bear',
    source:
      'https://reddit.com/r/Awwducational/comments/x1j1bk/a_kermode_or_spirit_bear_mom_named_strawberry_and/',
    text: 'A Kermode or spirit bear mom named Strawberry and her first cub were filmed in the Great Bear Rainforest in Canada. These bears are subspecies of the American black bear that lives in British Columbia. Most Kermode bears are black, however, there are between 100 to 500 white morphs.',
    media: 'https://v.redd.it/j8z6xxggpuk91',
    wiki: '/wiki/Kermode_bear',
  },
  {
    _id: 108,
    animal: 'kodkod',
    source:
      'https://reddit.com/r/Awwducational/comments/wizs9u/kodkods_are_the_smallest_wild_felid_in_the/',
    text: 'Kodkods are the smallest wild felid in the Americas and have the smallest distribution of any cat in the Americas. They occur only in Central and Southern Chile, with marginal populations in adjoining areas of Argentina.',
    media: 'https://i.redd.it/2ki37n2g6fg91.jpg',
    wiki: '/wiki/Kodkod',
  },
  {
    _id: 109,
    animal: 'leatherback sea turtle',
    source:
      'https://reddit.com/r/Awwducational/comments/y6l5in/leatherback_sea_turtles_can_grow_to_the_size_of_a/',
    text: 'Leatherback sea turtles can grow to the size of a small car - with a length of 1.8m (almost 6 feet) and 500kg (over 1000 pounds) but have been recorded at 3m (almost ten feet) and nearly a ton (over 2000 pounds). They are the largest turtle and heaviest non-crocodilian reptiles.',
    media: 'https://i.redd.it/f52ukq1jafu91.png',
    wiki: '/wiki/Leatherback_sea_turtle',
  },
  {
    _id: 110,
    animal: 'lichen katydid',
    source:
      'https://reddit.com/r/Awwducational/comments/wsppep/lichen_katydids_native_to_central_and_south/',
    text: "Lichen katydids, native to Central and South America, are masters of camouflage. They exhibit exceptional mimicry that blends in well with their natural habitats. These katydids can be found in tropical rain forest canopies where Usnea lichen (aka old man's beard) tends to be abundant.",
    media: 'https://v.redd.it/02vlqtqokqi91',
    wiki: '/wiki/Markia_hystrix',
  },
  {
    _id: 111,
    animal: 'little skate',
    source:
      'https://reddit.com/r/Awwducational/comments/xjhmfh/the_little_skate_leucoraja_erinacea_is_found/',
    text: 'The little skate (Leucoraja erinacea) is found along the Atlantic Ocean from Nova Scotia to North Carolina where it mainly lives in sandy or gravelly areas feeding on crustaceans and amphipods. Females produce a total of 10-35 eggs annually. Here is a baby skate hatching out of its egg case.',
    media: 'https://v.redd.it/gbqmkdbvb2p91',
    wiki: '/wiki/Little_skate',
  },
  {
    _id: 112,
    animal: 'long-eared jerboa',
    source:
      'https://reddit.com/r/Awwducational/comments/wf11p8/the_longeared_jerboa_has_ears_that_are_twothirds/',
    text: 'The long-eared jerboa has ears that are two-thirds as long as its body.',
    media: 'https://i.redd.it/iahr9bkqlgf91.jpg',
    wiki: '/wiki/Long-eared_jerboa',
  },
  {
    _id: 113,
    animal: 'lowland streaked tenrec',
    source:
      'https://reddit.com/r/Awwducational/comments/xpmzt3/the_lowland_streaked_tenrec_is_the_only_mammal/',
    text: 'The lowland streaked tenrec is the only mammal known to communicate using stridulation. It vibrates specialized spines against each other to produce a high frequency sound, a communication method more commonly seen in insects such as crickets.',
    media: 'https://v.redd.it/cnzwzqwgqfq91',
    wiki: '/wiki/Lowland_streaked_tenrec',
  },
  {
    _id: 114,
    animal: 'malayan crested argus',
    source:
      'https://reddit.com/r/Awwducational/comments/xb5a4w/the_tail_feathers_of_the_male_malayan_crested/',
    text: 'The tail feathers of the male Malayan crested argus are considered to be the longest and widest of any bird. The tail covert can measure up to 1.73 m (5.7 ft), giving the bird a total length of up to 2.4 m (7.8 ft). The crested argus is a peafowl-like species of bird in the pheasant family.',
    media: 'https://i.redd.it/cv8olaawm4n91.jpg',
    wiki: '/wiki/Malayan_crested_argus',
  },
  {
    _id: 115,
    animal: 'maleo',
    source:
      'https://reddit.com/r/Awwducational/comments/yvvray/maleo_birds_live_on_volcanic_islands_and_use/',
    text: 'Maleo birds live on volcanic islands and use geothermal heat to incubate their eggs. They find a spot at an ideal temperature (around 33°C or 91°F), bury their eggs in a sandy hole, then leave and never return. The hatchlings dig their way out - born totally independent with the ability to fly.',
    media: 'https://i.redd.it/ilr8dpkkg50a1.png',
    wiki: '/wiki/Maleo',
  },
  {
    _id: 116,
    animal: 'marten',
    source:
      'https://reddit.com/r/Awwducational/comments/xg1ny5/a_marten_is_a_weasellike_mammal_in_the_genus/',
    text: 'A marten is a weasel-like mammal in the genus Martes within the subfamily Guloninae, in the family Mustelidae. They have bushy tails and large paws with partially retractile claws. The fur varies from yellowish to dark brown, depending on the species',
    media: 'https://i.redd.it/67imdpla3ao91.jpg',
    wiki: '/wiki/Marten',
  },
  {
    _id: 117,
    animal: 'mata mata',
    source:
      'https://reddit.com/r/Awwducational/comments/w7lo11/mata_mata_are_south_american_freshwater_turtles/',
    text: 'Mata mata are South American freshwater turtles that have a specialized skin structure on top of their heads resembling a fallen leaf. This purportedly aids them in catching prey. Recently, a new species of mata mata (Chelus orinocensis) was discovered in the Orinoco River of the Amazon Basin.',
    media: 'https://i.redd.it/x32vsdyowod91.png',
    wiki: '/wiki/Mata_mata',
  },
  {
    _id: 118,
    animal: 'mossy leaf-tailed gecko',
    source:
      'https://reddit.com/r/Awwducational/comments/xol60p/the_mossy_leaftailed_geckos_camouflage_enables_it/',
    text: "The mossy leaf-tailed gecko's camouflage enables it to hide extremely well as it rests and awaits prey. The gecko's tail is dorso-ventrally compressed to fit flat on a branch, and its dermal flaps of skin make its outline virtually invisible. The gecko is able to alter its skin colors to blend in.",
    media: 'https://i.redd.it/zcnpu210t7q91.png',
    wiki: '/wiki/Uroplatus_sikorae',
  },
  {
    _id: 119,
    animal: 'nautilus',
    source:
      'https://reddit.com/r/Awwducational/comments/yaxidp/a_living_relic_of_the_ancient_past_nautiluses/',
    text: 'A living relic of the ancient past, Nautiluses have been around for over 480 million years. They are the only living cephalopod with a shell and have the most limbs as well - with over 90 sticky tentacles that they use to grab prey as they shred it with their beaklike mouths.',
    media: 'https://i.redd.it/p0tlopoligv91.png',
    wiki: '/wiki/Nautilus',
  },
  {
    _id: 120,
    animal: 'northern flicker',
    source:
      'https://reddit.com/r/Awwducational/comments/y7zx62/although_it_can_climb_up_the_trunks_of_trees_and/',
    text: 'Although it can climb up the trunks of trees and hammer on wood like other woodpeckers, the Northern Flicker prefers to find food on the ground. Ants are its main food, and the flicker digs in the dirt to find them. It uses its long barbed tongue to lap up the ants.',
    media: 'https://i.redd.it/d9xpgcufxqu91.jpg',
    wiki: '/wiki/Northern_flicker',
  },
  {
    _id: 121,
    animal: 'nuthatch',
    source:
      'https://reddit.com/r/Awwducational/comments/xrz2fk/all_nuthatches_are_distinctive_when_seeking_food/',
    text: 'All nuthatches are distinctive when seeking food because they are able to descend tree trunks head-first and can hang upside-down beneath twigs and branches.',
    media: 'https://v.redd.it/1dfetie8fzq91',
    wiki: '/wiki/Nuthatch',
  },
  {
    _id: 122,
    animal: 'oilbird',
    source:
      'https://reddit.com/r/Awwducational/comments/xocj4o/the_oilbird_is_unique_among_birds_since_it_is_the/',
    text: 'The Oilbird is unique among birds since it is the only nocturnal fruit-eating(oil palm) bird that navigates via echolocation. Its eyes, w/c have the max capability for light gathering of any terrestrial vertebrate,have 1M rod cells/mm2 in its retina, are another adaptation for its nighttime foraging',
    media: 'https://i.pinimg.com/originals/c0/4a/1d/c04a1da12577882fbb41cfdf9ea0a8a0.jpg',
    wiki: '/wiki/Oilbird',
  },
  {
    _id: 123,
    animal: 'olinguito',
    source:
      'https://reddit.com/r/Awwducational/comments/x3af6t/the_olinguito_bassaricyon_neblina_made_global/',
    text: 'The olinguito (Bassaricyon neblina) made global headlines when scientists announced its discovery in 2013, a notable event as this was the first carnivore described in the Western Hemisphere since the 1970s. It is native to the forests of Colombia and Ecuador. This is a photo of a baby olinguito.',
    media: 'https://i.redd.it/369zsw3zl9l91.jpg',
    wiki: '/wiki/Olinguito',
  },
  {
    _id: 124,
    animal: 'olive ridley sea turtle',
    source:
      'https://reddit.com/r/Awwducational/comments/y4yukk/baby_olive_ridley_sea_turtle_makes_a_break_for_it/',
    text: 'Baby Olive Ridley sea turtle makes a break for it. They are the smallest of the sea turtles and are endangered due to disappearance of their nesting sites.',
    media: 'https://v.redd.it/xykc0q4lb1u91',
    wiki: '/wiki/Olive_ridley_sea_turtle',
  },
  {
    _id: 125,
    animal: 'painted bunting',
    source:
      'https://reddit.com/r/Awwducational/comments/ymrfhm/painted_buntings_are_shy_secretive_and_often/',
    text: 'Painted buntings are shy, secretive and often difficult to observe with the human eye, though can be fairly approachable where habituated to bird feeders. Males sing in spring from exposed perches to advertise their territories.',
    media: 'https://i.redd.it/2ksrhdb7c4y91.jpg',
    wiki: '/wiki/Painted_bunting',
  },
  {
    _id: 126,
    animal: "pallas's cat",
    source:
      'https://reddit.com/r/Awwducational/comments/xn87ak/a_family_of_pallass_cat_in_the_wild_the_female/',
    text: "A family of Pallas's cat\" In the wild, the female gives birth to a litter of two to six kittens between the end of April and late May. The newborn kittens' fur is fuzzy, and their eyes are closed until the age of about two weeks",
    media: 'https://gfycat.com/altruisticanotherdassie',
    wiki: '/wiki/Pallas%27s_cat',
  },
  {
    _id: 127,
    animal: 'pied butterfly bat',
    source:
      'https://reddit.com/r/Awwducational/comments/xkv128/the_pied_butterfly_bat_glauconycteris_superba/',
    text: 'The pied butterfly bat (Glauconycteris superba), also known as badger bat, is a rare species of vesper bat It is found in the Democratic Republic of the Congo, Ivory Coast, Ghana, Equatorial Guinea and South Sudan. They are sadly threatened by habitat loss.',
    media: 'https://i.redd.it/xhvoicyk8dp91.jpg',
    wiki: '/wiki/Pied_butterfly_bat',
  },
  {
    _id: 128,
    animal: 'pigeon',
    source:
      'https://reddit.com/r/Awwducational/comments/xcg0i1/pigeons_are_one_of_just_3_types_of_birds_that/',
    text: 'Pigeons are one of just 3 types of birds that produce crop milk, a secretion made from food that the parent birds eat. Crop milk is produced and stored in a pouch in their throats, then regurgitated into the chicks throat. Both male and female pigeons are involved in feeding their newborn chicks.',
    media: 'https://i.redd.it/6s1qy24n6gn91.jpg',
    wiki: '/wiki/Columbidae',
  },
  {
    _id: 129,
    animal: 'pink-eared duck',
    source:
      'https://reddit.com/r/Awwducational/comments/xjb1ga/pinkeared_ducks_native_to_australia_are/',
    text: 'Pink-eared ducks, native to Australia, are spatulate-billed waterfowl closely related to shelducks. Their bills are well designed for straining mollusks, crustaceans, insects, algae and plankton. Nesting is stimulated by the drying and filling of pools that promote the growth of their food sources.',
    media: 'https://v.redd.it/u7szq5ih21p91',
    wiki: '/wiki/Pink-eared_duck',
  },
  {
    _id: 130,
    animal: "przewalski's horse",
    source:
      'https://reddit.com/r/Awwducational/comments/x01dyi/przewalskis_horses_pronounced_pshehvahlskees_are/',
    text: "Przewalski's horses (pronounced p'sheh-VAHL-skee's), are endangered horses originally native to the steppes of Central Asia. They became extinct in the wild, but they have been reintroduced to their native ranges as well as introduced to eastern Europe. This foal was born at the Whipsnade Zoo.",
    media: 'https://i.redd.it/ibhkjeednhk91.png',
    wiki: '/wiki/Przewalski%27s_horse',
  },
  {
    _id: 131,
    animal: 'punganur dwarf cattle',
    source:
      'https://reddit.com/r/Awwducational/comments/xx31fz/punganur_dwarf_cattle_which_from_the_chitoor/',
    text: "Punganur dwarf cattle which from the Chitoor District,Andhra Pradesh in southern India is among the world's smallest humped cattle breeds.This breed's milk has a high fat content. While cow milk normally has a fat content of 3 to 3.5 per cent, the Punganur breed's milk contains 8 percent.",
    media: 'https://v.redd.it/47258s2c96s91',
    wiki: '/wiki/Punganur_cattle',
  },
  {
    _id: 132,
    animal: 'purple-gold jumping spider',
    source:
      'https://reddit.com/r/Awwducational/comments/xnknfn/the_male_of_the_purplegold_jumping_spider_irura/',
    text: 'The male of the purple-gold jumping spider (Irura bidenticulata) is recognized by its striking, shiny magenta-gold patterned body. It was discovered in 2011 in southeast Asia. The purple-gold jumping spider typically measures 5–6 mm. It is not considered harmful to humans.',
    media: 'https://i.redd.it/p2q5faifmzp91.png',
    wiki: '/wiki/Irura_bidenticulata',
  },
  {
    _id: 133,
    animal: 'pygmy armadillo',
    source:
      'https://reddit.com/r/Awwducational/comments/wvy7d8/pichis_also_known_as_dwarf_armadillos_or_pygmy/',
    text: 'Pichis, also known as dwarf armadillos or pygmy armadillos, are native to Argentina, and they are the only armadillos known to hibernate. Pichis are relatively small armadillos, measuring around 27 cm (11 in) and the tail about 11 cm (4.3 in) long. A motorcyclist stops to rescue this stranded pichi.',
    media: 'https://v.redd.it/yvl4vvd5oij91',
    wiki: '/wiki/Pichi',
  },
  {
    _id: 134,
    animal: 'pygmy nightjar',
    source:
      'https://reddit.com/r/Awwducational/comments/vx5wuj/rather_than_building_a_nest_the_female_pygmy/',
    text: 'Rather than building a nest, the female pygmy nightjar lays a single egg on bare ground',
    media: 'https://v.redd.it/41jl07zyh3b91',
    wiki: '/wiki/Pygmy_nightjar',
  },
  {
    _id: 135,
    animal: 'pygmy seahorse',
    source:
      'https://reddit.com/r/Awwducational/comments/xf194s/pygmy_seahorses_hippocampus_bargibanti_are_only_2/',
    text: "Pygmy seahorses (Hippocampus bargibanti) are only 2 cm long and they're remarkably good at camouflaging themselves amongst the gorgonian coral they inhabit.",
    media: 'https://i.redd.it/up36qs10v1o91.png',
    wiki: '/wiki/Pygmy_seahorse',
  },
  {
    _id: 136,
    animal: 'red-tailed comet',
    source:
      'https://reddit.com/r/Awwducational/comments/xr305q/the_redtailed_comet_sappho_sparganurus_is_a/',
    text: 'The red-tailed comet (Sappho sparganurus) is a hummingbird native to Bolivia, Argentina, Chile and Peru. The male has an iridescent, golden-reddish forked tail, longer than the length of its body. This red-tailed comet stops by the home of someone watering their flowers with a hose and takes a bath.',
    media: 'https://v.redd.it/3qo44i2vlrq91',
    wiki: '/wiki/Red-tailed_comet',
  },
  {
    _id: 137,
    animal: 'resplendent quetzal',
    source:
      'https://reddit.com/r/Awwducational/comments/ylgg5j/the_resplendent_quetzal_is_a_sacred_symbol_in/',
    text: 'The resplendent quetzal is a sacred symbol in Mesoamerica and Guatemala\'s national bird, pictured on the country\'s flag. They favor eating fruit in the avocado family, eating them whole before regurgitating the pits. Essentially making them the avocado "gardeners" of their forest habitats.',
    media: 'https://i.redd.it/lro4zsz3rux91.png',
    wiki: '/wiki/Resplendent_quetzal',
  },
  {
    _id: 138,
    animal: 'ring-tailed vontsira',
    source:
      'https://reddit.com/r/Awwducational/comments/x45ehh/the_ringtailed_vontsira_native_to_the_forests_of/',
    text: "The ring-tailed vontsira, native to the forests of Madagascar, has a bushy tail covered with black and red rings which is rather close in appearance to that of the red panda. It is locally known as the ring-tailed mongoose. The vontsira's classification among carnivores is still a matter of debate.",
    media: 'https://v.redd.it/xao32o7zygl91',
    wiki: '/wiki/Ring-tailed_vontsira',
  },
  {
    _id: 139,
    animal: 'royal spoonbill',
    source:
      'https://reddit.com/r/Awwducational/comments/xcclk6/royal_spoonbills_native_to_oceania_inhabit/',
    text: 'Royal spoonbills, native to Oceania, inhabit wetlands feeding on crustaceans, fish and small insects as they sweep their bills from side to side. When they are breeding, long white plumes grow from the back of the head and colored patches appear on the face. Clutch sizes are usually 2 to 3 eggs.',
    media: 'https://i.redd.it/ireomljeffn91.png',
    wiki: '/wiki/Royal_spoonbill',
  },
  {
    _id: 140,
    animal: 'ruby-crowned kinglet',
    source:
      'https://reddit.com/r/Awwducational/comments/y79o7l/rubycrowned_kinglets_are_tiny_frenetic_bird_that/',
    text: 'Ruby-crowned kinglets are tiny frenetic bird that constantly flit around but they only spend 10 calories per day',
    media: 'https://i.imgur.com/yIdsedU.jpg',
    wiki: '/wiki/Ruby-crowned_kinglet',
  },
  {
    _id: 141,
    animal: 'sand bubbler crab',
    source:
      'https://reddit.com/r/Awwducational/comments/x0m38z/sand_bubbler_crabs_live_on_sandy_beaches_in_the/',
    text: "Sand bubbler crabs live on sandy beaches in the tropical Indo-Pacific. They feed on tiny marine creatures by filtering sand through their mouthparts. They leave behind small balls of sand in geometric patterns on the beach. They are often called nature's sand artists. Ze Frank narrates this video.",
    media: 'https://v.redd.it/6aujay9eymk91',
    wiki: '/wiki/Sand_bubbler_crab',
  },
  {
    _id: 142,
    animal: 'sandgrouse',
    source:
      'https://reddit.com/r/Awwducational/comments/xk3du3/newborn_sandgrouse_chicks_are_covered_with_thick/',
    text: 'Newborn sandgrouse chicks are covered with thick, highly-camouflaged down that matches their surroundings and leave the nest soon after hatching. Since they are precocial, the parents do not provide them with any food, however, the chicks learn, with parental guidance, what is and is not edible.',
    media: 'https://i.redd.it/4dqzdijbd7p91.png',
    wiki: '/wiki/Sandgrouse',
  },
  {
    _id: 143,
    animal: 'sea butterfly',
    source:
      'https://reddit.com/r/Awwducational/comments/yki0rh/sea_butterflies_are_small_rarely_larger_than_1_cm/',
    text: "Sea butterflies are small (rarely larger than 1 cm) swimming sea snails. They have lobes that act as tiny wing-like arms, which let them maneuver through the water as well as calcified transparent shells of varying shapes. Sea angels are swimming sea snails that don't have a shell.",
    media: 'https://i.redd.it/9qdwqcmpcnx91.png',
    wiki: '/wiki/Sea_butterfly',
  },
  {
    _id: 144,
    animal: 'sea squirt',
    source:
      'https://reddit.com/r/Awwducational/comments/vmsptm/sea_squirts_one_of_the_few_invertebrate_chordates/',
    text: 'Sea squirts! One of the few invertebrate chordates. When they’re young, they have a backbone (notochord) and a brain, but they lose them at maturity',
    media: 'https://i.redd.it/20px9lffde891.jpg',
    wiki: '/wiki/Ascidiacea',
  },
  {
    _id: 145,
    animal: 'seneca white deer',
    source:
      'https://reddit.com/r/Awwducational/comments/xop07o/seneca_white_deer_as_they_are_locally_called_live/',
    text: 'Seneca white deer, as they are locally called, live in 43 square km preserve, a former army depot, in Seneca County, NY. They are leucistic white-tailed deer, and their population consists of 700 members, approximately 300 of which are white, making it the largest herd of white deer in the world.',
    media: 'https://v.redd.it/ratr94xjh8q91',
    wiki: '/wiki/Seneca_white_deer',
  },
  {
    _id: 146,
    animal: 'shiny cowbird',
    source:
      'https://reddit.com/r/Awwducational/comments/xj4qse/the_shiny_cowbird_is_a_yearround_resident_across/',
    text: 'The shiny cowbird is a year-round resident across most of South America, where it lives in open areas such as open forests and cultivated land. Within the last century, the range of the species has shifted northward, and birds have been recorded in the West Indies and southern Florida.',
    media: 'https://i.redd.it/42pbfc6xmzo91.jpg',
    wiki: '/wiki/Shiny_cowbird',
  },
  {
    _id: 147,
    animal: 'short-beaked echidna',
    source:
      'https://reddit.com/r/Awwducational/comments/xstbmr/the_shortbeaked_echidna_has_the_largest/',
    text: 'The short-beaked echidna has the largest prefrontal cortex relative to body size of any mammal, taking up 50% of cortex volume in comparison to 29% for humans. Based on studies, scientists have concluded its learning ability is similar to that of a cat or a rat. This echidna is searching for ants.',
    media: 'https://v.redd.it/am71f296n6r91',
    wiki: '/wiki/Short-beaked_echidna',
  },
  {
    _id: 148,
    animal: 'short-eared owl',
    source:
      'https://reddit.com/r/Awwducational/comments/xsfzr7/shorteared_owls_are_one_of_the_most_widely/',
    text: 'Short-eared owls are one of the most widely distributed species of owl in the world. They are found on every continent except Australia and Antarctica and primarily eat small mammals like mice and voles (OC)',
    media: 'https://i.redd.it/1hph7nbnz2r91.jpg',
    wiki: '/wiki/Short-eared_owl',
  },
  {
    _id: 149,
    animal: 'silky anteater',
    source:
      'https://reddit.com/r/Awwducational/comments/x8hx1x/silky_anteaters_are_the_smallest_known_anteaters/',
    text: 'Silky anteaters are the smallest known anteaters, and they also go by the name pygmy anteaters. Found in Mexico, Central America and South America, they defend themselves by standing on their hind legs holding their claws up ready to strike at any assailant. This wild anteater is searching for ants.',
    media: 'https://v.redd.it/w44j1k5mcim91',
    wiki: '/wiki/Silky_anteater',
  },
  {
    _id: 150,
    animal: 'silvery marmoset',
    source:
      'https://reddit.com/r/Awwducational/comments/xoticy/the_silvery_marmoset_is_a_new_world_monkey_that/',
    text: 'The silvery marmoset is a New World monkey that lives in the eastern Amazon Rainforest in Brazil. The fur of the silvery marmoset is colored whitish silver-grey except for a dark tail. its naked flesh-colored ears stand out from the fur as well.',
    media: 'https://i.redd.it/mm9xqc3ta9q91.jpg',
    wiki: '/wiki/Silvery_marmoset',
  },
  {
    _id: 151,
    animal: "skilton's skink",
    source:
      'https://reddit.com/r/Awwducational/comments/whomab/skiltons_skink_a_subspecies_of_the_western_skink/',
    text: "Skilton's skink, a subspecies of the western skink, is native to the US west of the Rocky Mountains as well as to southern British Columbia, Canada. These skinks possess bright blue tails as juveniles, but the color fades to gray into adulthood. Skinks will often regrow a tail if it breaks off.",
    media: 'https://v.redd.it/jrguec97j3g91',
    wiki: '/wiki/Western_skink',
  },
  {
    _id: 152,
    animal: 'sloth bear',
    source:
      'https://reddit.com/r/Awwducational/comments/y6didn/sloth_bears_carry_their_young_on_their_back_for/',
    text: 'Sloth Bears carry their young on their back for the first 7 to 9 months of their lives, and are the only bear species which regularly transports their cubs on their backs. (Photo Credit: Chetan Aand - Instagram)',
    media: 'https://i.redd.it/gffp2yf9sdu91.jpg',
    wiki: '/wiki/Sloth_bear',
  },
  {
    _id: 153,
    animal: 'smallspine spookfish',
    source:
      'https://reddit.com/r/Awwducational/comments/yo2m8q/very_little_is_known_about_the_smallspine/',
    text: 'Very little is known about the smallspine spookfish (Harriotta haeckeli). It stands out as a surprisingly cute creature among its companions in the deep ocean, found as deep as 2,600 metres (over 8,500 feet). It rarely grows larger than 70 cm and has a venomous spine for defense.',
    media: 'https://i.redd.it/h4e9ebzurfy91.gif',
    wiki: '/wiki/Smallspine_spookfish',
  },
  {
    _id: 154,
    animal: 'snake',
    source:
      'https://reddit.com/r/Awwducational/comments/ylnldg/snakes_do_not_have_the_right_kind_of_teeth_to/',
    text: 'Snakes do not have the right kind of teeth to chew their food so they must eat their food whole. The jaws of snakes are not fused to the skull, so the lower jaw can separate from the upper jaw. This allows their mouths to open wider than their own bodies in order to swallow their prey whole.',
    media: 'https://v.redd.it/8rybi85isux91',
    wiki: '/wiki/Snake',
  },
  {
    _id: 155,
    animal: 'south american tapir',
    source:
      'https://reddit.com/r/Awwducational/comments/wkjwyr/the_south_american_tapir_is_the_largest_native/',
    text: 'The South American tapir is the largest native terrestrial mammal in the Amazon (reportedly up to 320kg/710lb), and it is one of four recognized tapir species in the world. It is also called the Brazilian, Amazonian, maned and lowland tapir. This baby tapir was born at a safari park in Israel.',
    media: 'https://v.redd.it/udi2hv0x8sg91',
    wiki: '/wiki/South_American_tapir',
  },
  {
    _id: 156,
    animal: 'southern three-banded armadillo',
    source:
      'https://reddit.com/r/Awwducational/comments/yd96as/southern_threebanded_armadillos_are_the_only/',
    text: 'Southern three-banded armadillos are the only species of armadillo that can curl up into a ball',
    media: 'https://i.redd.it/oquo8a6obzv91.jpg',
    wiki: '/wiki/Southern_three-banded_armadillo',
  },
  {
    _id: 157,
    animal: 'strawberry squid',
    source:
      'https://reddit.com/r/Awwducational/comments/x6jdas/the_strawberry_squid_gets_its_name_from_its/',
    text: 'The strawberry squid gets its name from its sparkling red body dotted by tiny bioluminescent photophores. It spends daytime hiding from predators in the dark ocean depths and comes closer to the surface at night, feeling safer under cover of darkness, to feed on fish, crustaceans and smaller squid.',
    media: 'https://i.redd.it/qyqowz2a72m91.jpg',
    wiki: '/wiki/Histioteuthis_heteropsis',
  },
  {
    _id: 158,
    animal: 'tawny frogmouth',
    source:
      'https://reddit.com/r/Awwducational/comments/ye7poz/tawny_frogmouths_are_masters_of_camouflage_using/',
    text: 'Tawny frogmouths are masters of camouflage, using their plumage to stay hidden in trees during the day. They will also emulate broken tree branches by sticking their necks out, closing their eyes, and remaining perfectly still. They may look like grumpy owls but are actually related to nightjars.',
    media: 'https://i.redd.it/9z6e67wh19w91.png',
    wiki: '/wiki/Tawny_frogmouth',
  },
  {
    _id: 159,
    animal: 'three-toed sloth',
    source:
      'https://reddit.com/r/Awwducational/comments/y1kss1/the_threetoed_sloth_will_expend_valuable_energy/',
    text: 'The three-toed sloth will expend valuable energy and put itself in immense danger once a week to poop. It will crawl down from its tree, often dig a hole, and then defecate inside. While on the ground, it is extremely vulnerable to predation.',
    media: 'https://i.redd.it/16ul0729u8t91.jpg',
    wiki: '/wiki/Three-toed_sloth',
  },
  {
    _id: 160,
    animal: 'townsend’s warbler',
    source:
      'https://reddit.com/r/Awwducational/comments/z0vuja/townsends_warbler_forage_actively_in_the_higher/',
    text: 'Townsend’s warbler forage actively in the higher branches, often gleaning insects from foliage and sometimes hovering or catching insects in flight. They mainly eat insects and spiders and seeds.',
    media: 'https://i.redd.it/g3gke4bbrb1a1.jpg',
    wiki: '/wiki/Townsend%27s_warbler',
  },
  {
    _id: 161,
    animal: 'tufted titmouse',
    source:
      'https://reddit.com/r/Awwducational/comments/xuk0zw/the_tufted_titmouse_gathers_food_from_the_ground/',
    text: 'The tufted titmouse gathers food from the ground and from tree branches, frequently consuming a variety of berries, nuts, seeds, small fruits, insects, and other invertebrates.',
    media: 'https://i.redd.it/kw2kz83kilr91.jpg',
    wiki: '/wiki/Tufted_titmouse',
  },
  {
    _id: 162,
    animal: 'two-toed sloth',
    source:
      'https://reddit.com/r/Awwducational/comments/y7d47y/twotoed_sloths_unlike_most_mammals_have_hair_that/',
    text: 'Two-toed sloths, unlike most mammals, have hair that grows from their belly to their back, which allows rain to run off of them while they hang in trees.',
    media: 'https://i.redd.it/6ktik2v5mlu91.jpg',
    wiki: '/wiki/Two-toed_sloth',
  },
  {
    _id: 163,
    animal: "wallace's flying frog",
    source:
      'https://reddit.com/r/Awwducational/comments/ywt2jz/wallaces_flying_frog_also_known_as_the_gliding/',
    text: "Wallace's flying frog, also known as the gliding frog, has adapted membranes between its long toes. It uses these membranes, by splaying out its toes, to glide from tree to tree or to the ground - sometimes covering distances of 50 feet (over 15 metres) or more.",
    media: 'https://i.redd.it/pirvvz3buc0a1.png',
    wiki: '/wiki/Wallace%27s_flying_frog',
  },
  {
    _id: 164,
    animal: 'water anole',
    source:
      'https://reddit.com/r/Awwducational/comments/xy1dmq/the_water_anole_is_unique_in_that_it_is_able_to/',
    text: 'The water anole is unique in that it is able to stay underwater for long periods of time - a behavior that is described as “scuba diving.” Experiments have confirmed that this species has the ability to remain underwater for up to 16 minutes',
    media: 'https://v.redd.it/zcfhhzvnees91',
    wiki: '/wiki/Anolis_aquaticus',
  },
  {
    _id: 165,
    animal: 'western jackdaw',
    source:
      'https://reddit.com/r/Awwducational/comments/ya0apb/the_western_jackdaw_tends_to_feed_on_small/',
    text: 'The western jackdaw tends to feed on small invertebrates up to 18 millimetres (0.71 in) in length that are found above ground, including various species of beetle (particularly cockchafers of the genus Melolontha, and weevil larvae and pupae. Diptera, and Lepidoptera species, snails and spiders.',
    media: 'https://v.redd.it/gbm6svb487v91',
    wiki: '/wiki/Western_jackdaw',
  },
  {
    _id: 166,
    animal: 'woylies',
    source:
      'https://reddit.com/r/Awwducational/comments/xet6oh/woylies_or_brushtailed_bettongs_are_small/',
    text: 'Woylies or brush-tailed bettongs are small, critically endangered, bipedal marsupials native to the shrubland of Australia. They mainly eat the fruiting bodies of underground fungi - not a problem for woylies as they are prodigious diggers. This woylie, appropriately named Truffles, is 7 months old.',
    media: 'https://v.redd.it/klsgo8t610o91',
    wiki: '/wiki/Woylie',
  },
  {
    _id: 167,
    animal: 'xoloitzcuintle',
    source:
      'https://reddit.com/r/Awwducational/comments/wwwk4a/the_xoloitzcuintle_pronounced_showlowitzqueently/',
    text: 'The Xoloitzcuintle (pronounced "show-low-itz-QUEENT-ly") is one of several breeds of hairless dog originating from Mexico. Called Xolo for short, the breed is characterized by its sleek body, almond-shaped eyes, large bat-like ears and long neck.',
    media: 'https://i.redd.it/1xv480coiqj91.png',
    wiki: '/wiki/Xoloitzcuintle',
  },
];

export default sampleFacts;
