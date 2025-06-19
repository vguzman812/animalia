import type {Fact} from "../types/index.js"

const sampleFacts: Fact[] = [
  {
    animal: 'aardvark',
    source: 'https://factanimal.com/aardvark/',
    text: 'Aardvark babies look a little like Dobby from Harry Potter. They have droopy ears, with hairless and wrinkled skin. So cute!',
    media: 'https://www.youtube.com/watch?v=_kOkfFJGBr4&ab_channel=NatGeoWILD',
    wiki: 'https://en.wikipedia.org/wiki/Aardvark',
  },
  {
    animal: 'aardvark',
    source: 'https://factanimal.com/aardvark/',
    text: 'The name aardvark comes from an early Afrikaans word "erdvark", and means "earth pig" . This name refers to its burrowing habits. They are also known as "ant bears", and "cape anteaters".',
    media:
      'https://www.conservationphotography.co.za/img-get2/I0000qs_8wyHfpJI/fit=1000x750/DSC2784.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Aardvark',
  },
  {
    animal: 'aardvark',
    source: 'https://factanimal.com/aardvark/',
    text: 'Aardvarks have four toes on their front feet and five on their back feet. Each toe has a large nail, and they look somewhere between a claw and a hoof, which help them dig.',
    media: 'https://i.pinimg.com/originals/b7/29/a1/b729a1f97758109f8af0a244b7827528.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Aardvark',
  },
  {
    animal: 'aardvark',
    source: 'https://www.animalfactsencyclopedia.com/Aardvark-facts.html',
    text: 'Aardvarks teeth are lined with fine upright tubes and have no roots or enamel.',
    media:
      'https://scontent-mia3-2.xx.fbcdn.net/v/t1.6435-9/187029567_1197653080680640_7484808335263465083_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2c4854&_nc_ohc=SEGwPltp20YAX8OEXRi&_nc_ht=scontent-mia3-2.xx&oh=00_AfAYoyBF3ePs9mVAO7_EYlL8wa6cuGcdHZB8GwTVhtLL-A&oe=6443C77E',
    wiki: 'https://en.wikipedia.org/wiki/Aardvark',
  },
  {
    animal: 'aardvark',
    source:
      'https://reddit.com/r/Awwducational/comments/wgrgi7/the_aardvark_is_a_primarily_nocturnal_animal/',
    text: 'The aardvark is a primarily nocturnal animal native to Africa. It uses its sharp claws and powerful legs to dig out ants and termites as well as create burrows in which to live and raise young.',
    media: 'https://v.redd.it/go0plx8gbvf91',
    wiki: 'https://en.wikipedia.org/wiki/Aardvark',
  },
  {
    animal: 'aardvark',
    source: 'https://factanimal.com/aardvark/',
    text: 'They can burrow at an alarming rate!. Since these are digging animals, they tend to avoid rocky outcrops. When digging burrows, they’ve been known to be able to dig 60cm (2ft) in just fifteen seconds. They dig these burrows for shelter and to hide their young.',
    media: 'https://www.youtube.com/watch?v=pIaawmwyFvQ&ab_channel=SanDiegoZooKids',
    wiki: 'https://en.wikipedia.org/wiki/Aardvark',
  },
  {
    animal: 'aardvark',
    source: 'https://factanimal.com/aardvark/',
    text: 'They’re a fan of cucumbers. Aside from termites and other insects, aardvarks have been known to partake in a specific member of the gourd family, Cucumis humifructus. In fact, this gourd, named the "aardvark cucumber" seems to only be eaten by aardvarks. This cucumber is the only plant matter eaten by aardvarks, and, it fruits underground.',
    media:
      'http://www.waterberg-bioquest.co.za/images/Flowers/FLO-CUCURBITACEAE-Cucumis-humifructus-Vaalwater-area-Jan-2011.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Aardvark',
  },
  {
    animal: 'aardwolf',
    source: 'https://factanimal.com/aardwolf/',
    text: '50% of their dung includes sand. They have a wide spoon-like tongue, which means they swallow a lot of sand when eating termites, and subsequently this can be seen in their poop!',
    media:
      'https://i2.wp.com/sciencewows.ie/wp-content/uploads/2014/06/Aardwolf3.jpg?resize=640%2C350',
    wiki: 'https://en.wikipedia.org/wiki/Aardwolf',
  },
  {
    animal: 'aardwolf',
    source: 'https://factanimal.com/aardwolf/',
    text: 'Aardwolves are more closely related to felines. Despite somewhat resembling a dog-come-fox, the Aardwolf is actually more closely related to cats.',
    media:
      'https://www.youtube.com/watch?v=dLZDfKn0FmM&ab_channel=TheCincinnatiZoo%26BotanicalGarden',
    wiki: 'https://en.wikipedia.org/wiki/Aardwolf',
  },
  {
    animal: 'aardwolf',
    source:
      'https://reddit.com/r/Awwducational/comments/y4fui0/the_aardwolf_alphabetically_the_second_creature/',
    text: 'The aardwolf (alphabetically the second creature) are a monogamous species of hyena that mostly eats termites with their long sticky tongue. They will raise their cubs for up to a year as a pair, with the male watching the child for up to 6 hours a night while their mother finds food',
    media: 'https://imgur.com/E5msnC2.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Aardwolf',
  },
  {
    animal: 'aardwolf',
    source: 'https://factanimal.com/aardwolf/',
    text: 'They are not related to the aardvarks, or wolves!. Despite the name and similar diet of termites, they are not related to aardvarks or indeed wolves – and are actually a member of the hyena family.',
    media: 'https://www.youtube.com/watch?v=a4J6NsM2Cco&ab_channel=NationalGeographic',
    wiki: 'https://en.wikipedia.org/wiki/Aardwolf',
  },
  {
    animal: 'aardwolf',
    source: 'https://factanimal.com/aardwolf/',
    text: 'They can make themselves appear 70% bigger!. When threatened or cornered, the Aardwolf raises its body high off the ground, its mane and tail bristling so that its silhouette makes it appear up to 70% bigger.',
    media: 'https://pm1.narvii.com/6858/e05c10ba8f9b5123dba305aa0ec211f18f4abed0v2_hq.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Aardwolf',
  },
  {
    animal: 'abyssinian',
    source: 'https://a-z-animals.com/animals/abyssinian/',
    text: 'One of the oldest breeds of cat in the world! The earliest example of an Abyssinian is a taxidermal exhibit that was purchased between 1834 and 1836 by a museum supplier. It was labeled “Patrie, domestica India,” and is still on exhibit at the Leiden Zoological Museum in the Netherlands.',
    media: 'https://www.youtube.com/watch?v=7jZ9CGARwEs&ab_channel=FrankinThailand',
    wiki: 'https://en.wikipedia.org/wiki/Abyssinian_cat',
  },
  {
    animal: 'acorn woodpecker',
    source:
      'https://reddit.com/r/Awwducational/comments/x0949s/acorn_woodpeckers_are_so_good_at_snugly_fitting/',
    text: "Acorn woodpeckers are so good at snugly fitting acorns into holes they make in trees that they often have trouble pulling them out. In fact, whenever the woodpecker finds a loose acorn in a hole, it will put the acorn into a tighter fitting hole. It's all about keeping critters from stealing them.",
    media: 'https://i.redd.it/07251ihzajk91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Acorn_woodpecker',
  },
  {
    animal: 'addax antelope',
    source: 'https://seaworld.org/animals/facts/mammals/addax-antelope/',
    text: 'Addax are one of the most endangered mammals in the world. Current estimates show there to be less than 500 individuals left in the wild.',
    media: 'https://animalcorner.org/wp-content/uploads/2015/02/addax1-1.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Addax',
  },
  {
    animal: 'addax antelope',
    source: 'https://a-z-animals.com/animals/addax/',
    text: 'Both males and females have horns, and each horn has from one and a half to three twists.',
    media:
      'https://www.iucn.org/sites/default/files/2022-02/addax_nasomaculatus_c_p._chardonnet.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Addax',
  },
  {
    animal: 'addax antelope',
    source: 'https://a-z-animals.com/animals/addax/',
    text: 'Some historians believe that the addax was at least partly domesticated by the ancient Egyptians.',
    media: 'https://www.reddit.com/r/Cowofgold_Essays/comments/r2ycu5/antelope_in_ancient_egypt/',
    wiki: 'https://en.wikipedia.org/wiki/Addax',
  },
  {
    animal: 'addax antelope',
    source: 'https://seaworld.org/animals/facts/mammals/addax-antelope/',
    text: "These desert antelopes' coat color changes from dark grayish-brown in winter to white in the summer, an efficient method of maintaining body temperatures.",
    media:
      'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/38724450_1873112862781782_3590263742270537728_n.png?stp=dst-png_s1080x2048&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=-7qvRgAvbFoAX9i_aa3&_nc_ht=scontent-mia3-1.xx&oh=00_AfAbyec3-ukzbyiUbCm_F0NuQeJJWN9ePg_a-ZCsvlVU6Q&oe=6438615E',
    wiki: 'https://en.wikipedia.org/wiki/Addax',
  },
  {
    animal: 'addax antelope',
    source: 'https://a-z-animals.com/animals/addax/',
    text: 'Unlike other antelopes, the addax has squarish teeth like a cow. Addax also don’t have the facial glands that are found on other antelope, but they do have scent glands in their feet.',
    media:
      'https://64.media.tumblr.com/e0f35fffa9e9412448235db8e9f519df/tumblr_osr2rttBlP1uvq9elo3_1280.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Addax',
  },
  {
    animal: 'addra gazelle',
    source: 'https://seaworld.org/animals/facts/mammals/addra-gazelle/',
    text: 'Addra are considered the largest type of gazelle, with incredibly long legs, which provide extra surface area on their body to dissipate heat, one of the many ways they stay cool in their hot desert environment.',
    media: 'https://www.youtube.com/watch?v=4mYcKHys9yE&ab_channel=DroptineStudios',
    wiki: 'https://en.wikipedia.org/wiki/Dama_gazelle',
  },
  {
    animal: 'addra gazelle',
    source: 'https://seaworld.org/animals/facts/mammals/addra-gazelle/',
    text: 'After just a few days following birth, addra young are strong enough to follow the herd, and after a week, they are able to run as fast as the adults.',
    media: 'https://www.youtube.com/watch?v=KFkgEf7RE44&ab_channel=Smithsonian%27sNationalZoo',
    wiki: 'https://en.wikipedia.org/wiki/Dama_gazelle',
  },
  {
    animal: 'addra gazelle',
    source: 'https://seaworld.org/animals/facts/mammals/addra-gazelle/',
    text: 'Always on the alert, addra use a behavior called "pronking" to warn herd members of danger. "Pronking" involves the animal hopping up and down with all four of their legs stiff, so that their limbs all leave and touch the ground at the same time.',
    media: 'https://www.youtube.com/watch?v=dwkbo46ltGU&ab_channel=Smithsonian%27sNationalZoo',
    wiki: 'https://en.wikipedia.org/wiki/Dama_gazelle',
  },
  {
    animal: 'addra gazelle',
    source: 'https://seaworld.org/animals/facts/mammals/addra-gazelle/',
    text: 'The shade of red covering its body varies with this species across its range, growing darker from east to west. This is one of the main differences among the three subspecies.',
    media:
      'https://mungaiandthegoaconstrictor.files.wordpress.com/2013/09/dama-gazelle-1.jpg?w=640',
    wiki: 'https://en.wikipedia.org/wiki/Dama_gazelle',
  },
  {
    animal: 'affenpinscher',
    source: 'https://a-z-animals.com/animals/affenpinscher/',
    text: 'First bred in 17th century Germany! In Germany, they were used to hunt down rats and mice in stables. They could easily get into small spaces to capture these rodents. Eventually, they were brought into people’s homes to serve the same purpose.',
    media:
      'https://s36700.pcdn.co/wp-content/uploads/2017/01/Affenpinscher-1-courtesy-Doyle-Girouard-Rhoda-Cassidy-photographer-edited-e1579212536113.jpg.optimal.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Affenpinscher',
  },
  {
    animal: 'affenpinscher',
    source: 'https://a-z-animals.com/animals/affenpinscher/',
    text: 'Their name comes from the German word “affen” which means monkey or ape, and fully translates to “monkey dog”.',
    media:
      'https://cdn.britannica.com/45/177445-050-FC2474AA/affenpinscher-toy-breed-dog-monkey-terrier-resemblance.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Affenpinscher',
  },
  {
    animal: 'african bullfrog',
    source: 'https://a-z-animals.com/animals/african-bullfrog/',
    text: 'Interestingly, the frog is also called the pixie frog. This, of course, has nothing to do with the animal’s size. “Pixie” comes from its scientific name of Pyxicephalus adspersus. The name has nothing to do with “pixie” as in fairies but means “round box head,” from the Greek. This describes the shape of the frog’s large head.',
    media: 'https://www.amphipedia.com/wp-content/uploads/2022/02/African-Bullfrog-Lifespan.jpg',
    wiki: 'https://en.wikipedia.org/wiki/African_bullfrog',
  },
  {
    animal: 'african bullfrog',
    source: 'https://a-z-animals.com/animals/african-bullfrog/',
    text: 'The African bullfrog is noted for having a huge skull and robust skeleton, and though they do not have teeth, their bottom jaw has three structures called odontodes. These are toothlike growths that are very much like teeth but differ from teeth in that they grow superficially on the top of the skin. Odontodes are adaptations used to grab and hang on to prey. The African bullfrog is one of only three species of frog that have “teeth.”',
    media:
      'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/93526463_1898040507003140_6840808619538120704_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=iM6o_lenHhoAX_GhmCP&_nc_ht=scontent-mia3-1.xx&oh=00_AfBGnmxN9Btt2votFXrgt2EvMe3G-K9OnK7QqYBsSszp6A&oe=64389118',
    wiki: 'https://en.wikipedia.org/wiki/African_bullfrog',
  },
  {
    animal: 'african bullfrog',
    source: 'https://a-z-animals.com/animals/african-bullfrog/',
    text: 'The African bullfrog is one of the biggest frogs on earth, reaching almost 10 inches in length and over 4 pounds in weight. Only the Goliath frog is bigger. It lives mostly in the central part of sub-Saharan Africa. It is a voracious eater and will swallow anything it can tackle.',
    media:
      'https://www.google.com/search?q=african+bullfrog+size&tbm=isch&sxsrf=AJOqlzXntUqbHIdsRuh78x-PlS7wCjFZoA:1678839590811&source=lnms&sa=X&ved=2ahUKEwiFwcfr1Nz9AhXqlmoFHegoAlYQ_AUoAXoECAoQAw&biw=1440&bih=701&dpr=2#imgrc=WRda4XmlepwBzM',
    wiki: 'https://en.wikipedia.org/wiki/African_bullfrog',
  },
  {
    animal: 'african bullfrog',
    source: 'https://a-z-animals.com/animals/african-bullfrog/',
    text: 'The African bullfrog is sexually mature when it’s about 1 and a half to 2 years old, though they live to 45 years. During the breeding season, the younger males gather in one small area of the pool while the bigger males go to the center and try to chase each other off. They will sometimes fight to the death to do this. They make a sound that resembles a loud “whoop!” to attract females. The females enter the water and attempt to mate with the dominant male. A female African bullfrog releases up to 4000 eggs in the breeding pool. Then, she leaves to let the father guard them.',
    media: 'https://www.youtube.com/watch?v=FHB43pPO0sU&ab_channel=BBC',
    wiki: 'https://en.wikipedia.org/wiki/African_bullfrog',
  },
  {
    animal: 'african bullfrog',
    source: 'https://a-z-animals.com/animals/african-bullfrog/',
    text: 'There is no gestation period for the African bullfrog. Once she is clasped by the male she has selected, the female lays eggs on the surface of the water, and the male fertilizes them. The tadpoles hatch about two days later. The young of bullfrogs are called larvae, tadpoles or polliwogs.',
    media: 'https://www.youtube.com/watch?v=5jyVYpQBCDs&ab_channel=globalzoo',
    wiki: 'https://en.wikipedia.org/wiki/African_bullfrog',
  },
  {
    animal: 'african bush elephant',
    source: 'https://a-z-animals.com/animals/african-bush-elephant/',
    text: 'African Bush Elephants replace their teeth six times during their lives but when the African Bush Elephant is between 40 to 60 years old, it no longer has teeth and will likely die of starvation, which is sadly a common cause of death of Elephants in the African wilderness.',
    media: 'https://www.elephantsanctuary.co.za/images/african_elephant_101/Elephant-teeth.jpg',
    wiki: 'https://en.wikipedia.org/wiki/African_bush_elephant',
  },
  {
    animal: 'african bush elephant',
    source: 'https://a-z-animals.com/animals/african-bush-elephant/',
    text: 'African Bush Elephants tend to live relatively long lives, with their average life span lasting between 60 and 70 years, on average. Female African Bush Elephants reach sexual maturity (are able to reproduce) after 10 or 11 years but are thought to be most fertile between the ages of 25 and 45. Male African Bush Elephants, however, often don’t reach sexual maturity until they are nearly 20 years old.',
    media: 'https://www.youtube.com/watch?v=KpN-P1OVzl4&ab_channel=NatGeoWILD',
    wiki: 'https://en.wikipedia.org/wiki/African_bush_elephant',
  },
  {
    animal: 'african bush elephant',
    source: 'https://a-z-animals.com/animals/african-bush-elephant/',
    text: 'After mating and a gestation period of up to 2 years, the female African Bush Elephant gives birth to a single calf (twins have been known but are extremely rare). The African Bush Elephant calf is nursed for 2 years but will remain under the guidance and protection of the herd until it is old enough to support itself (around 6 years old). It is at this point that the tusks of the African Bush Elephant calf start to grow.',
    media: 'https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5.png?w=636&h=437',
    wiki: 'https://en.wikipedia.org/wiki/African_bush_elephant',
  },
  {
    animal: 'african bush elephant',
    source: 'https://a-z-animals.com/animals/african-bush-elephant/',
    text: 'In the early 19th century, the story of the African Bush Elephant was very different with their being up to 5 million individuals thought to have been roaming the African continent. However, due to the increased demand for ivory, Africa’s Bush Elephant population is thought to have fallen as much as 85% in some areas.',
    media: 'https://www.youtube.com/watch?v=UM-jorpYS9g&ab_channel=DrewDoggettPhotography',
    wiki: '',
  },
  {
    animal: 'african bush elephant',
    source: 'https://a-z-animals.com/animals/african-bush-elephant/',
    text: 'The African Bush Elephant is the largest known land mammal on Earth, with male African Bush Elephants reaching up to 3.5 meters in height and the females being slightly smaller at around 3 meters tall. The body of the African Bush Elephants can also grow to between 6 and 7 meters long.',
    media: 'https://www.youtube.com/watch?v=LLrcbTkDR58&ab_channel=Newsflare',
    wiki: 'https://en.wikipedia.org/wiki/African_bush_elephant',
  },
  {
    animal: 'african cape buffalo',
    source: 'https://seaworld.org/animals/facts/mammals/african-cape-buffalo/',
    text: 'Cape buffalos are extremely social and live in large, mixed herds of up to 2000 members! Both sexes have a separate hierarchy, with males dominant over females. Members of the same subgroup will stay in direct contact with each other and will often sleep with their heads resting on one another.',
    media: 'https://www.youtube.com/watch?v=qLqLpczbOnQ&ab_channel=SmithsonianChannel',
    wiki: 'https://en.wikipedia.org/wiki/African_buffalo',
  },
  {
    animal: 'african cape buffalo',
    source: 'https://seaworld.org/animals/facts/mammals/african-cape-buffalo/',
    text: 'The African buffalo, which is often confused with the Asian water buffalo, shares many of the same characteristics but is considered a separate species.',
    media: 'https://i.ytimg.com/vi/OLeD--9I5fE/maxresdefault.jpg',
    wiki: 'https://en.wikipedia.org/wiki/African_buffalo',
  },
  {
    animal: 'african cape buffalo',
    source: 'https://seaworld.org/animals/facts/mammals/african-cape-buffalo/',
    text: 'The horns of the cape buffalo are an excellent indication of age and gender. The females and young males do not have the hard shielding that protects the base of the skull in large adult males.',
    media:
      'https://africanwildlifereport.com/wp-content/uploads/2021/03/cape-buffalo-male-female-900.jpg',
    wiki: 'https://en.wikipedia.org/wiki/African_buffalo',
  },
  {
    animal: 'african civet',
    source: 'https://a-z-animals.com/animals/african-civet/',
    text: 'African Civets are most commonly found in tropical forests and jungles and areas where there is plenty of dense vegetation to provide both cover and animals that the African Civets feeds on. The paws of the African Civet each have five digits with non-retractable claws to enable the Civet to move about in the trees more easily.',
    media: 'https://www.youtube.com/watch?v=q6IGgQvxUio&ab_channel=LionMountainTV',
    wiki: 'https://en.wikipedia.org/wiki/African_civet',
  },
  {
    animal: 'african civet',
    source: 'https://a-z-animals.com/animals/african-civet/',
    text: 'Each African Civet secretes up to 4g of musk every week, which is normally collected from African Civets in the wild. However, the capturing and keeping of African Civets for their musk is not unknown and is said to be an incredibly cruel industry. Today, few perfumes still contain actual musk from the glands of an African Civet as many scents today are easily reproduced artificially.',
    media: 'https://www.youtube.com/watch?v=27LtQi2HHeE&ab_channel=NationalGeographic',
    wiki: 'https://en.wikipedia.org/wiki/African_civet',
  },
  {
    animal: 'african civet',
    source: 'https://a-z-animals.com/animals/african-civet/',
    text: 'One of the African Civet’s most distinctive features are the black and white markings on their fur and grey face, which along with the black band around their eyes, gives these animals a Raccoon-like appearance. The similarity is only heightened by the fact that the African Civet’s hind legs are quite a bit longer than the front legs,e',
    media: 'https://www.animalspot.net/wp-content/uploads/2016/04/African-Civet.jpg',
    wiki: 'https://en.wikipedia.org/wiki/African_civet',
  },
  {
    animal: 'african civet',
    source: 'https://a-z-animals.com/animals/african-civet/',
    text: 'The musk secreted by the glands close to the African Civet’s reproductive organs has been collected by Humans for hundreds of years. In its concentrated form, the smell is said to be quite offensive to people, but much more pleasant once diluted. It was this scent that became one of the ingredients in some of the most expensive perfumes in the world',
    media: 'https://www.youtube.com/watch?v=27LtQi2HHeE&ab_channel=NationalGeographic',
    wiki: 'https://en.wikipedia.org/wiki/African_civet',
  },
  {
    animal: 'african fish eagle',
    source: 'https://a-z-animals.com/animals/african-fish-eagle/',
    text: 'Adults have a distinct appearance with brown bodies, white heads, and black wings. Its breast and tail are also snow white, with a featherless yellow face and dark brown eyes. This species is considered large and features sexual dimorphism. The females are more prominent, weighing between 7.1 and 7.9 pounds, with a wingspan of 7.9 feet. The males weigh 4.4 to 5.5 pounds, with a 6.6-foot wingspan. Their calls are distinctive; they throw their heads back and exclaim, “weeah kyow kow kow.”',
    media:
      'https://upload.wikimedia.org/wikipedia/commons/0/00/African_fish_eagle%2C_Haliaeetus_vocifer%2C_at_Chobe_National_Park%2C_Botswana_%2833516612831%29.jpg',
    wiki: 'https://en.wikipedia.org/wiki/African_fish_eagle',
  },
  {
    animal: 'african fish eagle',
    source: 'https://a-z-animals.com/animals/african-fish-eagle/',
    text: 'Eagle pairs build and maintain their nests using twigs and other pieces of wood, which they construct on tall trees. The nests can grow large, reaching six feet across and almost four feet deep. Nest building is a gradual process and typically takes several breeding seasons to get that large.',
    media:
      'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/51588879_2217141235011563_7945432310663348224_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=jZJYdN_dcW4AX_UKMzb&_nc_ht=scontent-mia3-1.xx&oh=00_AfC6Ggb01P1e0N8O5buM7blcgxGgGI7prblSeTc0Viglww&oe=64387F85',
    wiki: 'https://en.wikipedia.org/wiki/African_fish_eagle',
  },
  {
    animal: 'african fish eagle',
    source: 'https://a-z-animals.com/animals/african-fish-eagle/',
    text: 'Nicknamed “the voice of Africa,” African fish eagles have loud distinctive calls that reverberate over the freshwater lakes of sub-Saharan Africa. This large eagle inhabits areas near significant bodies of water with plenty of food. Its reach is far and wide throughout the continent; it is the national bird for three countries: Zambia, Zimbabwe, and South Sudan.',
    media: 'https://www.youtube.com/watch?v=jSPSLD-vGvI&ab_channel=GregMorgan',
    wiki: 'https://en.wikipedia.org/wiki/African_fish_eagle',
  },
  {
    animal: 'african fish eagle',
    source: 'https://a-z-animals.com/animals/african-fish-eagle/',
    text: 'These sedentary birds live in pairs and wait for their prey perched atop trees, then swoop down and swiftly grab their catch before returning to their branch. They also participate in kleptoparasitism, the practice of stealing food from other bird species; they often steal food from goliath herons.',
    media: 'https://www.youtube.com/watch?v=gYYFDV0xD8c&ab_channel=LatestSightings',
    wiki: 'https://en.wikipedia.org/wiki/African_fish_eagle',
  },
  {
    animal: 'african forest elephant',
    source: 'https://a-z-animals.com/animals/african-forest-elephant/',
    text: 'African Forest Elephants are slightly smaller than African Bush Elephants, but they’re still one of the largest animals on land today. Although the two species are very similar, the African Forest Elephant has rounder ears, straighter tusks, and more toenails than the African Bush Elephant.',
    media:
      'https://images.squarespace-cdn.com/content/v1/631c36b177fc59006394ea8d/2e653de6-d99d-4d78-8be1-550ad0154b5d/African+Savannah+Elephant.png',
    wiki: 'https://en.wikipedia.org/wiki/African_forest_elephant',
  },
  {
    animal: 'african grey parrot',
    source: 'https://a-z-animals.com/animals/african-grey-parrot/',
    text: 'African gray parrots mostly forage on the ground, and flocks of birds do this with care and foresight. First, they’ll gather in a tree, and they’ll descend to the ground in waves to find food. This keeps all the birds from being on the ground, and thus subject to terrestrial predators, at the same time. If they do eat in a tree, the parrot climbs, not flies, from branch to branch.',
    media: 'https://www.youtube.com/watch?v=uFWv5dZc-W0&ab_channel=ChrisAmos',
    wiki: 'https://en.wikipedia.org/wiki/Grey_parrot',
  },
  {
    animal: 'african grey parrot',
    source: 'https://a-z-animals.com/animals/african-grey-parrot/',
    text: 'Pet grey parrots have their favorite music. When their favorite song comes on, they dance and sing along to it.',
    media: 'https://www.youtube.com/watch?v=ZiCDh6g4qb0&ab_channel=TheRadja1973',
    wiki: 'https://en.wikipedia.org/wiki/Grey_parrot',
  },
  {
    animal: 'african grey parrot',
    source: 'https://a-z-animals.com/animals/african-grey-parrot/',
    text: 'Scientists believe that the African grey parrot is not just one of nature’s most intelligent birds, but one of nature’s most intelligent animals. They have insight, can perform complex tasks, understand musical theory to some extent and solve complex problems. A famous grey talking parrot named Alex could categorize, ask for, identify and refuse dozens of objects. He not only mimicked human speech but clearly understood it. He died in 2007 at age only 31, of an apparent heart attack.',
    media: 'https://www.youtube.com/watch?v=ldYkFdu5FJk&ab_channel=Professional_Talker',
    wiki: 'https://en.wikipedia.org/wiki/Grey_parrot',
  },
  {
    animal: 'african grey parrot',
    source: 'https://a-z-animals.com/animals/african-grey-parrot/',
    text: 'Though each parrot family has its tree to nest in, they congregate in huge flocks to roost in trees. Unlike other parrots, their flocks do not contain other species of parrots.',
    media: 'https://www.youtube.com/watch?v=US-RL-U2_n8&ab_channel=ElephantListenProj',
    wiki: 'https://en.wikipedia.org/wiki/Grey_parrot',
  },
  {
    animal: 'african grey parrot',
    source: 'https://a-z-animals.com/animals/african-grey-parrot/',
    text: "When a grey parrot named Yosuke got lost, it was reunited with its owner after giving the owner's name and address.",
    media: 'https://www.nbcnews.com/id/wbna24753683',
    wiki: 'https://en.wikipedia.org/wiki/Grey_parrot',
  },
  {
    animal: 'african hedgehog',
    source: 'https://seaworld.org/animals/facts/mammals/african-hedgehog/',
    text: 'A hedgehog has a large muscle running along its stomach which pulls its body into a tight, spiky little ball for defense.',
    media: 'https://t1.ea.ltmcdn.com/en/posts/9/8/1/what_to_feed_an_african_hedgehog_189_600.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Four-toed_hedgehog',
  },
  {
    animal: 'african hedgehog',
    source: 'https://seaworld.org/animals/facts/mammals/african-hedgehog/',
    text: 'Hedgehog quills are not barbed or poisonous. However, hedgehogs will apply a foamy saliva to their quills. This is called self-anointing. This may serve many purposes: an irritant to predators, a natural insect repellent since they are unable to clean their skin well, or an attractant to potential mates.',
    media: 'https://www.youtube.com/watch?v=a8_1GkZlKd4&ab_channel=Soniqathehedgehog',
    wiki: 'https://en.wikipedia.org/wiki/Four-toed_hedgehog',
  },
  {
    animal: 'african hedgehog',
    source: 'https://seaworld.org/animals/facts/mammals/african-hedgehog/',
    text: 'Baby hedgehogs are called hoglets, and they are born with their quills just below their skin to prevent injury to the mother. Within an hour or two of being born, the baby hedgehogs spines actually break through the skin, and within a day or so they are hardened and quite sharp. Baby hedgehogs stay with their mothers for about five weeks before heading out on their own.',
    media: 'https://www.youtube.com/watch?v=sAL9i9R47d0&ab_channel=Maciek',
    wiki: 'https://en.wikipedia.org/wiki/Four-toed_hedgehog',
  },
  {
    animal: 'african hedgehog',
    source: 'https://www.animalfactsencyclopedia.com/African-pygmy-hedgehog.html',
    text: 'Hedgehogs are solitary animals and only socialize during mating season. Then they will pair off for what is often a very noisy courtship. A hedgehog male need the females full cooperation to avoid being pierced during mating.It sometimes takes several hours of circling eachother during which they will be quite vocal, snuffling, chuckling and squeaking. If another male comes along, sparring may occur, and this is even louder. Damage is rare, but males will head butt, jaw and even wrestle like cats. The mating itself is careful with the female staying very still and the male climbing cautiously aboard.',
    media: 'https://youtu.be/81X0Wsm4lT8?t=280',
    wiki: 'https://en.wikipedia.org/wiki/Four-toed_hedgehog',
  },
  {
    animal: 'african jacana',
    source: 'https://a-z-animals.com/animals/african-jacana/',
    text: 'African jacanas have enormous feet with elongated toes that allow them walk on floating vegetation',
    media: 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/187224211/480',
    wiki: 'https://en.wikipedia.org/wiki/African_jacana',
  },
  {
    animal: 'african jacana',
    source: 'https://a-z-animals.com/animals/african-jacana/',
    text: 'Unlike other bird species, the African jacana males build the nests, incubate the eggs, and raise the young. He often scoops them up under his wings, and you see several long pairs of legs dangling, giving him the appearance of a strange creature with many appendages. Males teach their chicks to dive underwater and escape predators from a young age.',
    media:
      'https://i.dailymail.co.uk/i/pix/2015/12/30/16/2FAFD75300000578-0-image-a-48_1451492826130.jpg',
    wiki: 'https://en.wikipedia.org/wiki/African_jacana',
  },
  {
    animal: 'african jacana',
    source: 'https://ebird.org/species/afrjac1',
    text: 'While they can fly, they are weak and can only fly for short distances. They fly low over the water, with legs and toes dangling behind awkwardly, and calls with a honking repeated “kyaaan” and wheezy hurried “skreeeeeet’--most often in flight.',
    media: 'https://ebird.org/species/afrjac1#Modal-playlist',
    wiki: 'https://en.wikipedia.org/wiki/African_jacana',
  },
  {
    animal: 'african lion',
    source: 'https://www.animalfactsencyclopedia.com/African-lion-facts.html',
    text: 'African lions sleep - or doze, rather- about 20 hours a day',
    media:
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/0A48/production/_111823620_4d559f06-a955-4137-abe2-854b22c11eb5.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Lion',
  },
  {
    animal: 'african lion',
    source: 'https://www.animalfactsencyclopedia.com/African-lion-facts.html',
    text: "Big cats roar thanks to a specially designed larynx (a part of the throat). The African lion has the longest larynx of the big cats - and the loudest roar. A lion's roar can be heard up to 5 miles away.",
    media: 'https://www.youtube.com/watch?v=zgxUh6RYo7Y&ab_channel=WorkingWithWildlife',
    wiki: 'https://en.wikipedia.org/wiki/Lion',
  },
  {
    animal: 'african lion',
    source: 'https://seaworld.org/animals/facts/mammals/african-lion/',
    text: 'Lions are the only truly social cat species, and usually every female in a pride of 5 to 37 individuals is closely related.',
    media: 'https://www.youtube.com/watch?v=Syjbg9tt9uQ&ab_channel=RoyalMalewane',
    wiki: 'https://en.wikipedia.org/wiki/Lion',
  },
  {
    animal: 'african lion',
    source: 'https://seaworld.org/animals/facts/mammals/african-lion/',
    text: 'While lions are inactive up to 20 hours a day, in the darkest, coolest hours of early morning the "queens of beasts" hunt as a team to catch a communal meal.',
    media: 'https://www.youtube.com/watch?v=K7SR0_rhMSo&ab_channel=NatGeoWILD',
    wiki: 'https://en.wikipedia.org/wiki/Lion',
  },
  {
    animal: 'african penguin',
    source: 'https://a-z-animals.com/animals/african-penguin/',
    text: 'African Penguins are also known as “jackass penguins”. When looking for a mate, they bray like a donkey. When they’re trying to figure out where their mate is, they haw. And, when they’re defending themselves, they yell at would-be attackers. A defensive penguin will also bend down low, point its sharp beak at the would-be attacker, and feign fierce pecking.',
    media:
      'https://www.newsflare.com/video/326296/penguin-makes-a-honking-mating-call-that-sounds-just-like-a-donkey',
    wiki: 'https://en.wikipedia.org/wiki/African_penguin',
  },
  {
    animal: 'african penguin',
    source: 'https://a-z-animals.com/animals/african-penguin/',
    text: 'One of the African Penguin’s most distinctive features is that they have pink glands above their eyes which help them to cope with the temperate climates. The hotter the African Penguin gets, the more blood is sent to these glands so it may be cooled by the surrounding air, which in turn, makes these glands more pink.',
    media:
      'https://www.biologicaldiversity.org/assets/img/species/birds/AfricanPenguin_BobFleming.jpg',
    wiki: 'https://en.wikipedia.org/wiki/African_penguin',
  },
  {
    animal: 'african penguin',
    source: 'https://a-z-animals.com/animals/african-penguin/',
    text: 'The African Penguin is a fairly distinctive species of penguin with clean black and white markings and a sharply pointed black beak. The African Penguin also has black feet and a number of dot-like markings flecked across its white chest which are said to be as unique to the individual Penguin as a Human finger print is, along with a narrow black band.',
    media:
      'https://owendeutsch.com/wp-content/uploads/2022/02/African-Penguin-2RSC-DeNoiseAI-denoise.jpg',
    wiki: 'https://en.wikipedia.org/wiki/African_penguin',
  },
  {
    animal: 'african red-eyed bulbuls',
    source:
      'https://reddit.com/r/Awwducational/comments/xw9y53/pairs_and_small_groups_of_african_redeyed_bulbuls/',
    text: 'Pairs and small groups of African Red-eyed Bulbuls forage in riverine thickets in the Karoo and in arid thorny woodland and scrub, eating a variety of fruit and invertebrates. The species has a typical bubbly musical bulbul song, slower than that of the similar-sounding Common Bulbul.',
    media: 'https://media.ebird.org/catalog?taxonCode=blfbul1&mediaType=audio',
    wiki: 'https://en.wikipedia.org/wiki/African_red-eyed_bulbul',
  },
  {
    animal: 'african wild dog',
    source:
      'https://reddit.com/r/Awwducational/comments/xda300/african_wild_dogs_hunt_by_approaching_prey/',
    text: 'African Wild Dogs hunt by approaching prey silently, then chasing it at up to 66 km/h for 10-60 minutes. On average, the chase covers around 2 km. They have a hunting success rate of 60-90%, making them more consistently successful than Lions or Hyenas.',
    media: 'https://i.redd.it/y0dycewwnon91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/African_wild_dog',
  },
  {
    animal: 'african wild dog',
    source: 'https://www.animalfactsencyclopedia.com/African-wild-dog-facts.html',
    text: 'Wild dogs are known by many different names including painted dog, painted wolf, cape hunting dog, African hunting dog, singing dog and ornate wolf.',
    media:
      'https://www.conservationfrontlines.org/wp-content/uploads/2020/10/DSC_3268-new-from-Stephen.jpg',
    wiki: 'https://en.wikipedia.org/wiki/African_wild_dog',
  },
  {
    animal: 'african wild dog',
    source: 'https://www.animalfactsencyclopedia.com/African-wild-dog-facts.html',
    text: "Wild dogs don't use a kill bite when hunting, the pack will actually begin to eat their prey alive, but is often actually a quicker ending",
    media: 'https://www.youtube.com/watch?v=k44W7WgztUc&ab_channel=WildEarth',
    wiki: 'https://en.wikipedia.org/wiki/African_wild_dog',
  },
  {
    animal: 'agama lizard',
    source: 'https://a-z-animals.com/animals/agama-lizard/',
    text: 'Males initiate courtship by bobbing their heads up and down. This has given it the alternative name of koggelmander, or “little mocking man,” in the South African Afrikaans language. Agama is also a local West African word that means “lizard”',
    media: 'https://www.youtube.com/watch?v=g3dVsNRQB8Q&ab_channel=3MinutesNature',
    wiki: 'https://en.wikipedia.org/wiki/Agama_(lizard)',
  },
  {
    animal: 'agouti',
    source:
      'https://reddit.com/r/Awwducational/comments/xm7dql/agoutis_are_rodents_found_in_forested_areas_in/',
    text: 'Agoutis are rodents found in forested areas in Central and South America. When eating, agoutis sit on their hind legs and hold food between their fore paws. They may gather in groups of 100 to eat.',
    media: 'https://v.redd.it/0ztqgppnxnp91',
    wiki: 'https://en.wikipedia.org/wiki/Agouti',
  },
  {
    animal: 'agouti',
    source:
      'https://reddit.com/r/Awwducational/comments/xm7dql/agoutis_are_rodents_found_in_forested_areas_in/',
    text: 'They are regarded as one of the few species (along with macaws) that can open Brazil nuts without tools, mainly thanks to their strength and exceptionally sharp teeth.',
    media: 'https://www.youtube.com/watch?v=TjZ0MC63kdw&ab_channel=TerraMater',
    wiki: 'https://en.wikipedia.org/wiki/Agouti',
  },
  {
    animal: 'ainu',
    source: 'https://a-z-animals.com/animals/ainu/',
    text: 'In 1954 measures were taken by the Hokkaido Ken Hozonkai to protect the breed that had been on the brink of extinction. They do this through shows and tests that involve interacting with live bears and determine how well the dogs behave. Most Ainu dogs stand between 18 to 22 inches in height, and they can weigh anywhere from 45 to 70 pounds.',
    media: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Hokkaidou_inu.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Hokkaido_(dog)',
  },
  {
    animal: 'akita',
    source: 'https://a-z-animals.com/animals/akita/',
    text: 'Hachiko became the most famous Akita of all time after waiting nine years by a train station for the return of its dead owner in the 1920s. Besides being immortalized by a statue, its story was also adapted into the film “Hachi: A Dog’s Tale” starring Richard Gere.',
    media: 'https://www.youtube.com/watch?v=_J-RbUNoBpA&ab_channel=JapaneseHistory',
    wiki: 'https://en.wikipedia.org/wiki/Akita_(dog)',
  },
  {
    animal: 'alaskan pollock',
    source: 'https://a-z-animals.com/animals/alaskan-pollock/',
    text: 'The waters this fish lives in are marine and brackish, with a depth range of up to 1,280m. It lives at the benthopelagic level, being on or near the sea bottom, mid-water and near-surface depths, and is non-migratory, although it moves vertically in search of food. It is usually caught between 50-300m.',
    media: 'https://www.alaskasealife.org//uploads/animals/images/walleye_pollock_1_.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Alaska_pollock',
  },
  {
    animal: 'alaskan pollock',
    source: 'https://a-z-animals.com/animals/alaskan-pollock/',
    text: 'This fish species is the world’s second most important total catch after Peruvian anchoveta (a type of anchovy) and U.S. landings are the largest of any single fish species there. It’s the most commonly eaten wild-caught whitefish in the world and the third most commonly eaten fish in the United States.',
    media: 'https://www.alaskasealife.org//uploads/animals/images/walleye_pollock_1_.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Alaska_pollock',
  },
  {
    animal: 'albacore tuna',
    source: 'https://a-z-animals.com/animals/albacore-tuna/',
    text: 'Despite accounting for about 30% of the canned tuna market, the albacore is one of the smallest tuna species, only slightly larger than the skipjack.',
    media:
      'https://www.shogunsportfishing.com/uploads/1/0/3/9/103938520/published/albacore-tuna3.jpg?1496589063',
    wiki: 'https://en.wikipedia.org/wiki/Albacore',
  },
  {
    animal: 'albacore tuna',
    source: 'https://a-z-animals.com/animals/albacore-tuna/',
    text: 'The scientific name of the albacore is Thunnus alalunga. This appears to be the combination of two words: ala, meaning wing, and lunga, meaning long. This is in reference to it’s long, distinctive pectoral fin.',
    media: 'https://a-z-animals.com/media/2021/01/Tuna-Albacore-swimming.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Albacore',
  },
  {
    animal: 'albatross',
    source: 'https://a-z-animals.com/animals/albatross/',
    text: 'Except for the breeding season, the albatross bird is in near constant motion. A typical individual can travel thousands of miles every year.',
    media: 'https://www.youtube.com/watch?v=tHCQYIX6Mf4&ab_channel=BBCEarth',
    wiki: 'https://en.wikipedia.org/wiki/Albatross',
  },
  {
    animal: 'albatross',
    source: 'https://a-z-animals.com/animals/albatross/',
    text: 'Judged by the size of the wings, the great albatross (and the wandering albatross species in particular) is the largest living group of bird in the world, stretching 11 feet from tip to tip. It also weighs up to 22 pounds or about the same size as a swan. Even the smaller species have a wingspan of about 6.5 feet.',
    media:
      'https://www.google.com/search?q=albatross+wingspan&sxsrf=AJOqlzV7xSCB4nvqRd457rMy7Vfkn8Fufg:1679585577106&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiHjMHtr_L9AhV6fDABHZlRBoEQ0pQJegQIBxAC&biw=1440&bih=701&dpr=2#imgrc=r3pD7RnAzRE5RM',
    wiki: 'https://en.wikipedia.org/wiki/Albatross',
  },
  {
    animal: 'albatross',
    source: 'https://a-z-animals.com/animals/albatross/',
    text: 'The word albatross comes to us from an Arabic word al-qadus or al-gaṭṭas that means literally “the diver.” The Portuguese then adapted it into the word alcatraz (as in the modern American prison). This was later absorbed into English as albatross',
    media: 'https://www.youtube.com/watch?v=tHCQYIX6Mf4&ab_channel=BBCEarth',
    wiki: 'https://en.wikipedia.org/wiki/Albatross',
  },
  {
    animal: 'aldabra giant tortoise',
    source: 'https://a-z-animals.com/animals/aldabra-giant-tortoise/',
    text: 'The Aldabra Giant Tortoise is a giant species of Tortoise native to the Aldabra Islands in the Indian ocean. The Aldabra giant tortoise is one of the largest species of Tortoise on the planet and is also one of the world’s longest living animals, with one Aldabra Giant Tortoise individual reaching the grand old age of 255 years old. They are the only extant Indian Ocean tortoise species.',
    media: 'https://www.youtube.com/watch?v=Ek4vxVPpb1Y&ab_channel=WildlifeConservationSociety',
    wiki: 'https://en.wikipedia.org/wiki/Aldabra_giant_tortoise',
  },
  {
    animal: 'aldabra giant tortoise',
    source: 'https://a-z-animals.com/animals/aldabra-giant-tortoise/',
    text: 'The male Aldabra Giant Tortoise grows to an average size of 1.1 meters long, with females being slightly smaller at a length of 0.9 meters. The males, although not really that much bigger, are also known to weigh nearly 100kg more than their female counterparts. The Aldabra Giant Tortoise has an incredibly long neck which it uses to tear leaves from the branches higher up trees.',
    media: 'https://www.youtube.com/watch?v=s9owa3BiXhQ&ab_channel=ReptileGardens',
    wiki: 'https://en.wikipedia.org/wiki/Aldabra_giant_tortoise',
  },
  {
    animal: 'alligator',
    source: 'https://factanimal.com/alligator/',
    text: 'Alligators can perform a ‘death roll’. By gripping their prey in their jaws and spinning wildly until bite-sized chunks are torn off. This allows them to consume the meat in more… manageable portions.',
    media: 'https://www.youtube.com/watch?v=gAY2SXpUCwU&ab_channel=VildWild',
    wiki: 'https://en.wikipedia.org/wiki/Alligator',
  },
  {
    animal: 'alligator',
    source: 'https://factanimal.com/alligator/',
    text: 'Like birds, they build nests. Pregnant females will build a nest of vegetation to protect and hide their eggs. Nests can vary in size, ranging from seven to 10 feet across. Each clutch can contain 35 to 50 eggs, but clutches of close to 90 eggs have also been found.',
    media: 'https://www.wired.com/images_blogs/wiredscience/2009/10/alligatornest.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Alligator',
  },
  {
    animal: 'alligator',
    source: 'https://factanimal.com/alligator/',
    text: 'They communicate through a range of different sounds and vocalizations. Alligators hiss when they are threatened to intimidate their opponents. They can also roar loudly by expelling air out of their lungs. These roars are so loud, they can be heard from as far as 150 meters away.',
    media: 'https://www.youtube.com/watch?v=f_cBi2vT3Qw&ab_channel=LeesaBrown',
    wiki: 'https://en.wikipedia.org/wiki/Alligator',
  },
  {
    animal: 'alligator gar',
    source: 'https://a-z-animals.com/animals/alligator-gar/',
    text: 'Measuring up to 10 feet and 350 pounds, it is the largest of all the gar species and one of the biggest freshwater fishes anywhere in North America. The world record for a catch was set at 327 pounds in 2011. This record fish was found at Mississippi’s Lake Chotard.',
    media:
      'https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/4/4f/44ffc876-0039-11ec-9e80-23a16394e661/611d27ca187e6.image.jpg?resize=1200%2C900',
    wiki: 'https://en.wikipedia.org/wiki/Alligator_gar',
  },
  {
    animal: 'alligator gar',
    source: 'https://a-z-animals.com/animals/alligator-gar/',
    text: 'The name “gar” is based on an Anglo-Saxon term that means spike or lance. Some Native Americans used to make arrowheads and axes from the scales and head of the alligator gar.',
    media: 'https://www.missouriwhitetails.com/attachments/alligator-gar-scales-9-jpg.70381/',
    wiki: 'https://en.wikipedia.org/wiki/Alligator_gar',
  },
  {
    animal: 'alpaca',
    source: 'https://a-z-animals.com/animals/alpaca/',
    text: 'The two breeds have different types of fur. The huacaya breed, which comprises about 90 percent of the world’s alpacas, has thick, fluffy fleece adapted for life at cool, high altitudes. The suri breed has silkier fur that grows into long dreadlock-type curls. Experts believe their silkier, less dense wool is the product of life at a lower, more temperate mountain environment.',
    media: 'https://tinyurl.com/2p8wf3mp',
    wiki: 'https://en.wikipedia.org/wiki/Alpaca',
  },
  {
    animal: 'alpaca',
    source: 'https://a-z-animals.com/animals/alpaca/',
    text: 'These animals hum when they are happy, bored, curious, worried, or distressed. A mother and baby may hum together when bonding. A mother may cluck, henlike, when worried about her baby, also known as a cria. A male might cluck in welcome to others. When it feels threatened, this animal snorts. It may also make a gurgling sound to warn others. When mishandled or physically threatened, it can voice an ear-splitting scream. Males screech to intimidate other males when fighting for dominance.',
    media: 'https://www.youtube.com/watch?v=d62x_OMFZGM&ab_channel=ASmallholdingInWales',
    wiki: 'https://en.wikipedia.org/wiki/Alpaca',
  },
  {
    animal: 'alpine ibex',
    source: 'https://factanimal.com/alpine-ibex/',
    text: 'Male Ibex do occasionally come to blows. Males can have horns weighing 15kg and can stand well over 1.5m tall. Males who are evenly matched will engage in brutal head-butting events to establish dominance, the echo of which can be heard throughout the mountains.',
    media: 'https://www.youtube.com/watch?v=SI307EWVtNc&ab_channel=BBCEarth',
    wiki: 'https://en.wikipedia.org/wiki/Alpine_ibex',
  },
  {
    animal: 'alpine ibex',
    source: 'https://factanimal.com/alpine-ibex/',
    text: 'Their horns can grow up to 55 inches (140cms). Alpine Ibex have backward-curving horns with ridges. Female horns are generally smaller, while males are longer and curvier. Their horns grow throughout their lives, and are used for fighting and protection.',
    media: 'https://animalcorner.org/wp-content/uploads/2015/02/alpine-ibex-1.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Alpine_ibex',
  },
  {
    animal: 'amazon river dolphin (pink dolphin)',
    source: 'https://a-z-animals.com/animals/pink-dolphin/',
    text: 'Female river dolphins are more attracted to males that are a brighter shade of pink. To impress the females, male river dolphins smack the water with bunches of grasses or branches in their mouths. Sometimes, they hold up a turtle to capture the attention of a female.',
    media: 'https://tinyurl.com/ukcz3jwz',
    wiki: 'https://en.wikipedia.org/wiki/Amazon_river_dolphin',
  },
  {
    animal: 'amazon river dolphin (pink dolphin)',
    source: 'https://a-z-animals.com/animals/pink-dolphin/',
    text: 'Unlike ocean dwelling dolphins, pink dolphins have a hump instead of a dorsal fin. Amazon river dolphins will frequently swim upside down. Its believed the humps on their back rub across the river’s floor and helps them locate prey.',
    media:
      'https://images.fineartamerica.com/images-medium-large-5/2-amazon-river-dolphin-greg-ochocki.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Amazon_river_dolphin',
  },
  {
    animal: 'american bison',
    source:
      'https://www.doi.gov/blog/15-facts-about-our-national-mammal-american-bison#:~:text=Bison%20are%20the%20largest%20mammal,National%20Wildlife%20Refuge%20in%20Colorado.',
    text: 'Called wallowing, bison roll in the dirt to deter biting flies and help shed fur. Male bison also wallow during mating season to leave behind their scent and display their strength.',
    media: 'https://www.youtube.com/watch?v=Oi3xf3ZLntQ&ab_channel=TexasWild',
    wiki: 'https://en.wikipedia.org/wiki/American_bison',
  },
  {
    animal: 'american bison',
    source:
      'https://www.doi.gov/blog/15-facts-about-our-national-mammal-american-bison#:~:text=Bison%20are%20the%20largest%20mammal,National%20Wildlife%20Refuge%20in%20Colorado.',
    text: 'While bison have poor eyesight, they have excellent senses of smell and hearing. Cows and calves communicate using pig-like grunts, and during mating season, bulls can be heard bellowing across long distances.',
    media: 'https://www.facebook.com/watch/?v=202820604205151',
    wiki: 'https://en.wikipedia.org/wiki/American_bison',
  },
  {
    animal: 'american bison',
    source:
      'https://www.doi.gov/blog/15-facts-about-our-national-mammal-american-bison#:~:text=Bison%20are%20the%20largest%20mammal,National%20Wildlife%20Refuge%20in%20Colorado.',
    text: 'Yellowstone National Park is the only place in the U.S. where bison have continuously lived since prehistoric times. In 2021, Yellowstone’s bison population was estimated at 5,450—making it the largest bison population on public lands.',
    media:
      'https://www.doi.gov/sites/doi.gov/files/styles/wysiwyg_wide/public/yellowstone-national-park-wildlife-national-park-service-yueru-hao.jpg?itok=_cBVNBVW',
    wiki: 'https://en.wikipedia.org/wiki/American_bison',
  },
  {
    animal: 'american coot',
    source: 'https://owlcation.com/stem/The-American-Coot-Interesting-Facts-and-Information',
    text: 'Taking flight from the water is rather difficult for the coot. To get airborne, the coot must “run” across the water for several yards while beating their wings. It looks like quite a lot of work.',
    media:
      'https://www.youtube.com/watch?v=xYNVBDUeLyA&ab_channel=bjornpdx\nhttps://www.youtube.com/watch?v=DqslQsn6vUs&ab_channel=DFWUrbanWildlife',
    wiki: 'https://en.wikipedia.org/wiki/American_coot',
  },
  {
    animal: 'american coot',
    source:
      'https://reddit.com/r/Awwducational/comments/xkelwe/the_american_coot_has_specialized_lobed_feet/',
    text: 'The American coot has specialized lobed feet which enable it to walk on top of pond lily pads, swim and dive excellently and walk on dry land with good speed. The palmate design helps the coot swim, dive, walk and run because the toe lobes fold back when the bird lifts its feet while traveling.',
    media: 'https://i.redd.it/cf29bu16l9p91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/American_coot',
  },
  {
    animal: 'american eel',
    source: 'https://a-z-animals.com/animals/american-eel/',
    text: 'The American Eel goes through five distinct phases of life once it has hatched from an egg. Each phase has a different name and appearance. These phases are as follows: Leptocephali, Glass Eel, Elver, Yellow Eel, and finally the Silver Eel.',
    media:
      'https://www.gannett-cdn.com/authoring/2018/06/08/NPRJ/ghows-PJ-6e25485f-9a92-3108-e053-0100007fd8e5-337accab.jpeg',
    wiki: 'https://en.wikipedia.org/wiki/American_eel',
  },
  {
    animal: 'american eskimo dog',
    source: 'https://a-z-animals.com/animals/american-eskimo-dog/',
    text: 'Despite its name, this breed is not associated with the Inuit at all. Instead, it was bred from the German Spitz in the 19th century by immigrants who settled in the Midwest. Although originally developed as a farm dog, this breed became a popular performer at circuses and roadshows. After the United States entered World War I, the name was changed to the American Eskimo as a result of high anti-German sentiment running through the country.',
    media:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/American_Eskimo_Dog_1.jpg/1920px-American_Eskimo_Dog_1.jpg',
    wiki: 'https://en.wikipedia.org/wiki/American_Eskimo_Dog',
  },
  {
    animal: 'american goldfinch',
    source:
      'https://reddit.com/r/Awwducational/comments/yyiqxj/the_american_goldfinch_is_a_granivore_and_adapted/',
    text: 'The American goldfinch is a granivore and adapted for the consumption of seedheads, with a conical beak to remove the seeds and agile feet to grip the stems of seedheads while feeding. It is a social bird and will gather in large flocks while feeding and migrating.',
    media: 'https://v.redd.it/0abvrebwbp0a1',
    wiki: 'https://en.wikipedia.org/wiki/American_goldfinch',
  },
  {
    animal: 'american kestrel',
    source: 'https://wildlifeinformer.com/facts-about-american-kestrels/',
    text: 'Kestrel chicks eat twice as much food in a day as an adult bird! This means these tiny nestlings are eating 2 to 3 mice or voles a day,',
    media: 'https://www.robertefuller.com/wp-content/uploads/Feeding-3-chicks-crop.jpg',
    wiki: 'https://en.wikipedia.org/wiki/American_kestrel',
  },
  {
    animal: 'american kestrel',
    source:
      'https://reddit.com/r/Awwducational/comments/yaw2m2/north_americas_littlest_falcon_the_american/',
    text: "North America’s littlest falcon, the American Kestrel, can keep their eyes focused on their prey, insects and other small prey in open territory, even if they're perched on a branch or wire in the breeze, thanks to this ability to stabilize its head.",
    media: 'https://v.redd.it/bd84g467pev91',
    wiki: 'https://en.wikipedia.org/wiki/American_kestrel',
  },
  {
    animal: 'american mink',
    source:
      'https://reddit.com/r/Awwducational/comments/w9gfof/the_american_mink_is_one_of_two_extant_species_of/',
    text: 'The American mink is one of two extant species of mink, the other being the European mink. The American mink is native to North America, and its color can vary from brown to black. Mink litters vary from one to eight babies, known as “kits.”',
    media: 'https://v.redd.it/qeqyqz87e4e91',
    wiki: 'https://en.wikipedia.org/wiki/American_mink',
  },
  {
    animal: 'american mink',
    source: 'https://en.wikipedia.org/wiki/American_mink',
    text: 'This species is typically associated with water, and is found near streams, rivers, lakes, swamps and marshes, and also along coastlines. However, they also inhabit drier areas that are not close to water and sometimes even urban areas, depending on the abundance of food. European Minks, on the other hand, are rarely found more than 100 meters from fresh water.',
    media: 'https://animalia.bio/american-mink',
    wiki: 'https://en.wikipedia.org/wiki/American_mink',
  },
  {
    animal: 'american oystercatcher',
    source:
      'https://reddit.com/r/Awwducational/comments/ygkk2u/american_oystercatcher_courtship_in_spring_is/',
    text: "American Oystercatcher courtship in spring is boisterous, with courting birds pacing quickly over the sand in unison, giving a piping call that increases in tempo, and pivoting in arcing patterns around the beach. One pair often attracts neighboring pairs to begin this display in a 'Piping Ceremony’.a",
    media: 'https://www.youtube.com/watch?v=y7fdYEjZc0c&ab_channel=RayHennessy',
    wiki: 'https://en.wikipedia.org/wiki/American_oystercatcher',
  },
  {
    animal: 'american pygmy goat',
    source: 'https://a-z-animals.com/animals/american-pygmy-goat/',
    text: 'Most are about one to two feet in height and also don’t get much more than a couple of feet long. Though they may be small, they can jump up to 5 feet high.',
    media: 'https://www.youtube.com/watch?v=tTO4jJzZkY4&ab_channel=CNN',
    wiki: 'https://en.wikipedia.org/wiki/American_Pygmy',
  },
  {
    animal: 'american pygmy goat',
    source: 'https://a-z-animals.com/animals/american-pygmy-goat/',
    text: 'The American Pygmy Goat, also known as the African Pygmy, started out from breeding African Dwarf goats in French Cameroon.',
    media: 'https://i.ytimg.com/vi/c5NWHz1Nx4Q/maxresdefault.jpg',
    wiki: 'https://en.wikipedia.org/wiki/American_Pygmy',
  },
  {
    animal: 'american robin',
    source: 'https://a-z-animals.com/animals/american-robin/',
    text: 'Females build the nests with no help from her partner. She gathers twigs, grass, feathers, and paper to form the outside structure of the nest. She lines the nest with mud to hold it together. The inside is cushioned with soft materials including grass and other plant matter. The nest is often off the ground, anywhere from 5 - 15 feet high.',
    media:
      'https://www.birdsandblooms.com/wp-content/uploads/2021/01/BNBbyc17_laureen-prendergast.jpg?fit=680,510',
    wiki: 'https://en.wikipedia.org/wiki/American_robin',
  },
  {
    animal: 'american toad',
    source: 'https://en.wikipedia.org/wiki/American_toad',
    text: 'The American toads have very noticeable calls. They make long trilling sounds, lasting between 4 to 20 seconds each. The males use these sounds to attract the female toads for breeding. During the mating season, these calls become louder, constant, and more frantic. When these calls are made, the throats of the male toads puff out like balloons. However, this is not the only way that the American toads communicate. Some of them also use body postures, chemical cues, and touch to communicate.',
    media: 'https://www.youtube.com/watch?v=Z0Ksdwgtk_0&ab_channel=MartyCalabrese',
    wiki: 'https://en.wikipedia.org/wiki/American_toad',
  },
  {
    animal: 'amethystine python (scrub python)',
    source: 'https://a-z-animals.com/animals/amethystine-python/',
    text: 'These snakes are named from the way their scales reflect light. Their milky-iridescent scales have a purplish hue in the light, reminiscent of the gemstone from which they get their name.',
    media: 'https://a-z-animals.com/media/2022/06/scrub-python-on-branch-picture-id1216959855.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Amethystine_python',
  },
  {
    animal: 'amur leopard',
    source: 'https://kids.nationalgeographic.com/animals/mammals/facts/amur-leopard',
    text: 'The Amur leopard is the rarest leopard in the world. Since a 647,400-acre national park dubbed Land of the Leopard National Park was created in 2012 along the Russian and Chinese borders, the Amur leopard population has jumped to about 80 individuals in 2018, up from only about 30 in the early 2000s.',
    media:
      'https://i.natgeofe.com/k/3550b018-dc62-4650-829f-ee0e2a95fc6d/amur-leopard-snow.jpg?w=636&h=477',
    wiki: 'https://en.wikipedia.org/wiki/Amur_leopard',
  },
  {
    animal: 'anaconda',
    source: 'https://en.wikipedia.org/wiki/Green_anaconda',
    text: 'Anacondas live in swamps, marshes, and slow-moving streams, mainly in the tropical rainforests of the Amazon and Orinoco basins. They are cumbersome on land, but stealthy and sleek in the water. Their eyes and nasal openings are on top of their heads, allowing them to lie in wait for prey while remaining nearly completely submerged.',
    media:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Anaconda_al_acecho.JPG/2560px-Anaconda_al_acecho.JPG',
    wiki: 'https://en.wikipedia.org/wiki/Anaconda',
  },
  {
    animal: 'anaconda',
    source: 'https://en.wikipedia.org/wiki/Green_anaconda',
    text: 'Particularly large anacondas may consume large prey such as tapirs deer, peccaries, capybaras, jaguars and caimans. but such large meals are not regularly consumed. They typically prey on animals ranging from 14-50% of their weight. Large anacondas can go weeks to months without food after eating a large meal, because of their low metabolism.',
    media:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Anakonda_verschlingt_Wasserschwein.jpg/2560px-Anakonda_verschlingt_Wasserschwein.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Anaconda',
  },
  {
    animal: 'anaconda',
    source: 'https://a-z-animals.com/animals/anaconda/',
    text: 'The giant emerald anaconda is the heaviest and one of the longest snake species in the world. They average 15 feet in length and range from 70 to 170 lbs. Though this species is notorious for sizing exaggeration, the largest verified specimen in captivity was kept in Pittsburgh Zoo and PPG aquarium. By the time of her death in 1960, she grew to 6.27m(20ft 7 in) and weighed over 91kg(200lbs).',
    media: 'https://qph.cf2.quoracdn.net/main-qimg-d616e5badcfa5a7e27afffe57a9117bc-lq',
    wiki: 'https://en.wikipedia.org/wiki/Anaconda',
  },
  {
    animal: 'anaconda',
    source: 'https://en.wikipedia.org/wiki/Green_anaconda',
    text: 'This species is solitary until the mating season, which occurs during the rainy season, and can last for several months. During this time, odd clusters referred to as "breeding balls” are formed, in which up to 12 males wrap around the same female and attempt to copulate. The groups can stay in this position for two to four weeks. This ball acts as a slow-motion wrestling match between the males, each one fighting for the opportunity to mate with the female. Courtship and mating occur almost exclusively in water.',
    media: 'https://www.youtube.com/watch?v=PQvDfarQZbg&ab_channel=NationalGeographic',
    wiki: 'https://en.wikipedia.org/wiki/Anaconda',
  },
  {
    animal: 'anaconda',
    source: 'https://en.wikipedia.org/wiki/Green_anaconda',
    text: 'When no male anacondas are available to provide offspring, facultative parthenogenesis is possible. In August 2014, West Midlands Safari Park announced that a female green anaconda, which was being kept with another female anaconda, through parthenogenesis had given birth to three young.',
    media:
      'https://wgbh.brightspotcdn.com/dims4/default/d4c36e5/2147483647/strip/true/crop/5487x3658+0+0/resize/963x642!/format/jpg/quality/70/?url=https%3A%2F%2Fwgbh-brightspot.s3.amazonaws.com%2F28%2Ff4%2Faf2860384c8fbfac6c635e96f1a2%2Fsnake-3-a.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Anaconda',
  },
  {
    animal: 'anchovies',
    source: 'https://en.wikipedia.org/wiki/Peruvian_anchoveta',
    text: 'Anchovies, like most clupeoids (herrings, sardines and anchovies), are filter-feeders that open their mouths as they swim. As water passes through the mouth and out the gills, food particles are sieved by gill rakers and transferred into the esophagus.',
    media: 'https://www.youtube.com/watch?v=x0dL_Q2poC4&ab_channel=WallStreetJournal',
    wiki: 'https://en.wikipedia.org/wiki/Anchovy',
  },
  {
    animal: 'anchovies',
    source: 'https://en.wikipedia.org/wiki/Peruvian_anchoveta',
    text: "Peruvian anchovies, account for nearly 70% of anchovy catch. It has yielded greater catches than any other single fish species in the world, with annual harvests varying between 3.14 and 8.32 million tonnes throughout the 2010s. Almost all of the production is used for the fishmeal industry. The Peruvian anchoveta may be the world's most abundant fish species.",
    media:
      'https://d32ogoqmya1dw8.cloudfront.net/images/eslabs/fisheries/peru_anchovy_catch.v3.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Anchovy',
  },
  {
    animal: 'anchovies',
    source: 'https://en.wikipedia.org/wiki/Peruvian_anchoveta',
    text: 'The anchovy is a significant food source for almost every predatory fish in its environment, including the California halibut, rock fish, yellowtail, shark, chinook, and coho salmon. It is also extremely important to marine mammals and birds; for example, breeding success of California brown pelicans and elegant terns is strongly connected to anchovy abundance.',
    media: 'https://www.youtube.com/watch?v=x0dL_Q2poC4&ab_channel=WallStreetJournal',
    wiki: 'https://en.wikipedia.org/wiki/Anchovy',
  },
  {
    animal: 'andalusian',
    source: 'https://www.animalfactsencyclopedia.com/Andalusian-horse.html',
    text: 'One of the most unique characteristics of the Andalusian horse is a full, flowing mane and tail. The forelock sweeps over the face, and the tail is often long enough to touch the ground. Hair may be straight and sleek, but waves and curls are most common. There is little, if any, excessive hair or "feathering" on the legs, and the coat on the body is short and fine with a deep sheen.',
    media: 'https://www.animalfactsencyclopedia.com/images/Andalusian-beauty.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Blue_Andalusian',
  },
  {
    animal: 'andalusian',
    source: 'https://www.animalfactsencyclopedia.com/Andalusian-horse.html',
    text: 'The Andalusian has highly flexible joints of the hocks, knees and fetlocks. This allows for the ability to perform complex dressage movements involving leaps, kicks, and controlled steps resembling a dance.',
    media: 'https://www.youtube.com/watch?v=XzU8rIOV_-4&ab_channel=alfredogonzalez',
    wiki: 'https://en.wikipedia.org/wiki/Blue_Andalusian',
  },
  {
    animal: 'andalusian',
    source: 'https://www.animalfactsencyclopedia.com/Andalusian-horse.html',
    text: 'The Andalusian played a major role in the history of Spain, first as a cavalry horse that was brave and agile in battle, and then as a symbol of the refinement of Spain. They are known in Spain as the Pura Raza Espanola (PRE) or "Pure Spanish Horse”.',
    media: 'https://www.animalfactsencyclopedia.com/images/Andalusian-portrait.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Blue_Andalusian',
  },
  {
    animal: 'andean mountain cat',
    source:
      'https://reddit.com/r/Awwducational/comments/xmylle/the_andean_mountain_cat_is_known_to_live_at_high/',
    text: 'The Andean mountain cat is known to live at high elevations: 1,800 m (5,900 ft) in the southern Andes to over 4,000 m (13,000 ft) in Chile, Bolivia and central Peru. It has ashy-gray fur, a grey head and somewhat rounded ears. The cat is listed as endangered; less than 1500 are thought to exist.',
    media: 'https://i.redd.it/0uhg2n8n9up91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Andean_mountain_cat',
  },
  {
    animal: 'angelshark',
    source: 'https://en.wikipedia.org/wiki/Angelshark',
    text: 'Members of the family Squatinidae have a unique camouflage method, which relates to how they obtain their food, involving lying still on the sea floor, making rapid lunges at passing prey, and using negative pressure to capture prey by sucking it into their mouths.',
    media: 'https://www.youtube.com/watch?v=ivI6e-nZiaM',
    wiki: 'https://en.wikipedia.org/wiki/Angelshark',
  },
  {
    animal: 'angelshark',
    source: 'https://en.wikipedia.org/wiki/Angelshark',
    text: 'They are known to bury themselves in sandy or muddy environments during the day, where they remain camouflaged for weeks until a desirable prey crosses paths with them. At night, they take a more active approach and cruise on the bottom of the floor. Squatina preys on fish, crustaceans, and cephalopods.',
    media: 'https://www.youtube.com/watch?v=ivI6e-nZiaM',
    wiki: 'https://en.wikipedia.org/wiki/Angelshark',
  },
  {
    animal: 'angled sunbeam',
    source:
      'https://reddit.com/r/Awwducational/comments/xhvo45/the_angled_sunbeam_is_a_species_of_butterfly/',
    text: 'The angled sunbeam is a species of butterfly whose caterpillar has the ability to ward off predators by quickly extending pompom-like sensory receptors through its two periscopes and whirling them about. This angled sunbeam caterpillar, native to Japan, was gently stroked with a soft piece of grass.',
    media: 'https://v.redd.it/6ni9qjycdpo91',
    wiki: 'https://en.wikipedia.org/wiki/Curetis_acuta',
  },
  {
    animal: 'anglerfish',
    source: '/r/AskReddit/comments/gbh7zz/what_are_some_really_amazing_animal_facts/fp5p5bq/',
    text: 'male anglerfish are much smaller than the females and when the female is ready to mate she excretes a pheromone which makes the male hungry. He will then try to eat her, but he then gets stuck to her, and dissolves until the only thing that remains are his testicles.',
    media: 'https://www.youtube.com/watch?v=XhsyZnVx2rQ&ab_channel=NatGeoWILD',
    wiki: 'https://en.wikipedia.org/wiki/Anglerfish',
  },
  {
    animal: 'anglerfish',
    source: 'https://en.wikipedia.org/wiki/Anglerfish',
    text: 'So named for their characteristic mode of predation, the anglerfish has a modified luminescent fin ray (the esca or illicium) which acts as a lure for other fish. The luminescence comes from symbiotic bacteria, which are thought to be acquired from seawater.',
    media:
      'https://www.montereybayaquarium.org/globalassets/mba/images/animals/fishes/deep-sea-anglerfish.jpg?format=webp&quality=60',
    wiki: 'https://en.wikipedia.org/wiki/Anglerfish',
  },
  {
    animal: 'anglerfish',
    source: 'https://www.montereybayaquarium.org/animals/animals-a-to-z/deep-sea-anglerfish',
    text: 'There are over 200 species of deep-sea anglerfish. From the recognizable toothy jaws of the black seadevil to the bottom-dwelling sea toads, deep-sea anglerfish come in all sorts of shapes and sizes. Pelagic forms are most often laterally compressed, whereas the benthic forms are often extremely dorsoventrally compressed (depressed), often with large upward-pointing mouths.',
    media: 'https://youtu.be/zHZIBqyvRx8',
    wiki: 'https://en.wikipedia.org/wiki/Anglerfish',
  },
  {
    animal: 'angora goat',
    source: 'https://a-z-animals.com/animals/angora-goat/',
    text: 'The Angora goat is a Turkish domesticated goat breed that grows the lustrous fibre known as mohair. Each adult Angora goat produces about 12 inches of mohair annually while kids have about 8 inches.',
    media: 'https://a-z-animals.com/media/2021/06/Angora-Goat-with-kid.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Angora_goat',
  },
  {
    animal: 'angora goat',
    source: 'https://a-z-animals.com/animals/angora-goat/',
    text: 'While many goats have hair, the Angora goat alone grows mohair. This is not goat hair as seen on other breeds, but the down or undercoat which, in this breed only, grows much longer than the outer hair coat. Each Angora goat is shaved twice yearly to collect the fiber. They produce about 10 lbs of hair annually.',
    media:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Colored_Angora_Goat.jpg/440px-Colored_Angora_Goat.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Angora_goat',
  },
  {
    animal: 'ankole',
    source: 'https://seaworld.org/animals/facts/mammals/ankole/',
    text: 'Ankole have strong herding and protection instincts. Adults bed down in a circle facing out with calves in the center.',
    media:
      'https://thumbs.dreamstime.com/b/ankole-watusi-modern-american-breed-domestic-cattle-derives-group-sanga-breeds-central-africa-characterized-189175331.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Ankole-Watusi',
  },
  {
    animal: 'ankole',
    source: 'https://seaworld.org/animals/facts/mammals/ankole/',
    text: 'Ankole were first introduced to the United States in the 1960s from a small seed stock in European zoos. Exportation of ankole from Africa was banned in the 1930s. Today, less than 700 purebred ankoles are registered in the U.S.',
    media: 'https://labaafrica.com/wp-content/uploads/2022/11/Ankole-Cows.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Ankole-Watusi',
  },
  {
    animal: 'ankole',
    source: 'https://seaworld.org/animals/facts/mammals/ankole/',
    text: "In Uganda, the Nkole tribe's Sanga variety of these cattle is known as ankole. In Rwanda and Burundi, the Tutsi tribe's Sanga variety is called the watusi. The Rwanda common strain of watusi is called inkuku. The giant-horned strain, owned by the Tutsi kings and chiefs, is called the inyambo, though some current tribal reports claim that this type is now extinct.",
    media: 'https://live.staticflickr.com/4376/36771186531_fc0004abcf_b.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Ankole-Watusi',
  },
  {
    animal: 'ankole',
    source: 'https://seaworld.org/animals/facts/mammals/ankole/',
    text: 'Some African tribes mix the milk and blood of the Ankole to produce a high protein drink. In addition, Ankole-Watusi meat has very little fat and lower cholesterol than other commercial beef.',
    media:
      'https://www.bwindiugandagorillatrekking.com/wp-content/uploads/2020/02/Ankole-Catlle.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Ankole-Watusi',
  },
  {
    animal: "anna's hummingbird",
    source: 'https://a-z-animals.com/animals/annas-hummingbird/',
    text: 'Anna’s Hummingbird is one of three species that are permanent residents of Canada and the United States. They are considered the fastest and some of the largest of all Hummingbirds. Anna’s Hummingbird eggs are roughly the size of a jellybean.',
    media:
      'https://allthatsinteresting.com/wordpress/wp-content/uploads/2014/09/Nesting-Annas-Hummingbird-Tiny.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Anna%27s_hummingbird',
  },
  {
    animal: "anna's hummingbird",
    source: 'https://a-z-animals.com/animals/annas-hummingbird/',
    text: 'In courtship displays, males hover in midair, giving buzzy song, then fly up to 130 feet. He then dives steeply toward the female, making a loud chirping sound at the bottom of the dive. The noise is caused by his tail feathers.',
    media: 'https://www.youtube.com/watch?v=mbJvxH2dyGU&ab_channel=PBS',
    wiki: 'https://en.wikipedia.org/wiki/Anna%27s_hummingbird',
  },
  {
    animal: "anna's hummingbird",
    source:
      'https://reddit.com/r/Awwducational/comments/x58rgb/the_throat_and_face_feathers_of_the_male_annas/',
    text: "The throat and face feathers of the male Anna's hummingbird have dazzling iridescent properties. This iridescent throat patch is called a gorget. Depending on the viewing angle, the plumage will either flash with brilliant or mundane hues. Oddly, female Anna’s have a tiny red gorget—females of most species have none.",
    media: 'https://www.youtube.com/watch?v=jL8yxW52Axc&ab_channel=HummingbirdSpot',
    wiki: 'https://en.wikipedia.org/wiki/Anna%27s_hummingbird',
  },
  {
    animal: "anna's hummingbird",
    source: 'https://a-z-animals.com/animals/annas-hummingbird/',
    text: 'Though no larger than a ping-pong ball and no heavier than a nickel, Anna’s Hummingbirds make a strong impression. For its size, Anna’s Hummingbird performs the fastest aerial diving compared to any other known bird.',
    media: 'https://www.youtube.com/watch?v=K_2JFK-tnnE&ab_channel=NewScientist',
    wiki: 'https://en.wikipedia.org/wiki/Anna%27s_hummingbird',
  },
  {
    animal: 'ant',
    source: '/r/AskReddit/comments/9a4ku4/whats_your_1_obscure_animal_fact/e4t0z40/',
    text: 'Ants breed and domesticate aphids around their colonies, so they can drink their milky secretions. Aphids are ant cows. So ladybugs, then, would be like ant chupacabras.',
    media: 'https://www.youtube.com/watch?v=NJmCKaX0AGg&ab_channel=EarthTitan',
    wiki: 'https://en.wikipedia.org/wiki/Ant',
  },
  {
    animal: 'ant',
    source: '/r/AskReddit/comments/9a4ku4/whats_your_1_obscure_animal_fact/e4t0z40/',
    text: 'Ants learned to farm 50 million years ago, way before humans did. Their crop of choice? Fungus. Meet the leaf-cutter ant. These ants carve out pieces of leaves and carry them back home where they feed the leaves to a fungus which they cultivate in their nests. The fungus is the only food source for the leaf-cutter ant. If the fungus fails to thrive, the colony can bid farewell to life, and without their cultivators, the fungus also cannot survive.',
    media: 'https://cdn.arstechnica.net/wp-content/uploads/2016/01/Atta3a-XL-640x444.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Ant',
  },
  {
    animal: 'ant',
    source: 'https://a-z-animals.com/animals/ant/',
    text: 'Ants come in all shapes and sizes! Honeypot ants are a family (Formicidae) that use their own bodies as storage. The abdomen of ‘repletes’ — or a type of honeypot ant that’s adapted specially to store food — swells and collects nourishment. As the abdomen of repletes grows, they begin to resemble “honey pots.”',
    media:
      'https://images.squarespace-cdn.com/content/v1/5563c849e4b09841c644c3bc/1433389181349-MMVA3DTHYXXYQJC7HB96/Jung_Berk_HoneyAnts_03.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Ant',
  },
  {
    animal: 'ant',
    source: 'https://a-z-animals.com/animals/ant/',
    text: 'The bullet ant( Paraponera clavata) is known for its incredible sting which has been described as “the world’s most painful.” Pain from their sting is almost instantaneous and feels like a bullet that moves in waves for 12 hours or more. The Sateré-Mawé people of Brazil use intentional bullet ant stings as part of their initiation rites to become warriors. 80 of the ants are woven into gloves which must be worn for 5 to 10 minutes 20 times over the course of several months or years.',
    media:
      'https://res.cloudinary.com/jerrick/image/upload/f_jpg,fl_progressive,q_auto,w_1024/63d8e78a88200c001c08cccb.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Ant',
  },
  {
    animal: 'ant',
    source: 'https://a-z-animals.com/animals/ant/',
    text: 'The Bullet ant is one of the largest ants in the world, growing up to 3cm (1.5in) in length. They get their name from their bite, which is likened to getting shot with a bullet.',
    media: 'https://www.youtube.com/watch?v=-Jht-IddpBM&ab_channel=BBCEarthKids',
    wiki: 'https://en.wikipedia.org/wiki/Ant',
  },
  {
    animal: 'anteater',
    source: 'https://www.animalfactsencyclopedia.com/Anteater-facts.html',
    text: 'A giant anteaters tongue is well over two feet long - or 1.5 to 2 times the length of its head',
    media:
      'https://upload.wikimedia.org/wikipedia/commons/8/81/Giant_Anteater_showing_off_tongue.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Anteater',
  },
  {
    animal: 'anteater',
    source: 'https://www.animalfactsencyclopedia.com/Anteater-facts.html',
    text: 'Anteater babies ride on their mothers backs for about a year.',
    media: 'https://nationalzoo.si.edu/sites/default/files/animals/giantanteater-003_0.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Anteater',
  },
  {
    animal: 'anteater',
    source: 'https://www.animalfactsencyclopedia.com/Anteater-facts.html',
    text: 'Anteaters have no teeth',
    media:
      'https://slothconservation.org/wp-content/uploads/2020/02/portrait-of-giant-anteater-porto-jofre-panoramic-images.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Anteater',
  },
  {
    animal: 'anteater',
    source: 'https://www.animalfactsencyclopedia.com/Anteater-facts.html',
    text: 'Anteaters walk on their balled-up fists to keep their claws sharp for digging',
    media: 'https://mongabay-images.s3.amazonaws.com/1200/animals/animals_209042.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Anteater',
  },
  {
    animal: 'anteater',
    source: 'https://www.animalfactsencyclopedia.com/Anteater-facts.html',
    text: 'The silky, or pygmy anteater weighs only about one pound, while the giant anteater can be 120 pounds and 7 feet long.',
    media: 'https://www.youtube.com/watch?v=DGBv_r4SW38&ab_channel=JamesWolfe',
    wiki: 'https://en.wikipedia.org/wiki/Anteater',
  },
  {
    animal: 'antelope jackrabbit',
    source:
      'https://reddit.com/r/Awwducational/comments/xdhqcd/antelope_jackrabbits_are_known_for_their/',
    text: 'Antelope jackrabbits are known for their exceptionally long ears. Native to parts of Arizona and Mexico, they occupy plant communities that contain a mixture of shrubs and grasses.',
    media: 'https://i.redd.it/kqp55bbiron91.png',
    wiki: 'https://en.wikipedia.org/wiki/Antelope_jackrabbit',
  },
  {
    animal: 'arabian cobra',
    source: 'https://a-z-animals.com/animals/arabian-cobra/',
    text: 'The Arabian cobra had the distinction of being the 12,000th species added to National Geographic’s photo ark project in November 2021. The photo ark aims to photograph many of the world’s animals, especially those in need of protection.',
    media:
      'https://blog.nationalgeographic.org/wp-content/uploads/2021/11/3-Arabian-cobra_credit-Joel-Sartore-National-Geographic-Photo-Ark_2775025_NEWSROOM.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Arabian_cobra',
  },
  {
    animal: 'arabian cobra',
    source: 'https://a-z-animals.com/animals/arabian-cobra/',
    text: 'The Arabian cobra is the only true cobra species that can be found in the Arabian Peninsula.',
    media: 'https://a-z-animals.com/media/2022/05/Arabian-Cobra-header.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Arabian_cobra',
  },
  {
    animal: 'arapaima',
    source: 'https://a-z-animals.com/animals/arapaima/',
    text: 'Arapaima fish use the “gulp” method to feed, which means they suck prey in close to the surface of the water using their large mouths.',
    media: 'https://www.youtube.com/shorts/i9zJca2Umfk',
    wiki: 'https://en.wikipedia.org/wiki/Arapaima',
  },
  {
    animal: 'arapaima',
    source: 'https://a-z-animals.com/animals/arapaima/',
    text: 'The name of the genus Arapaima comes from the tupí-guaraní word for this freshwater fish. They are also known as “pirarucu” in Brazil, which roughly translated means “red fish.” In Peru, they are called “paiche”.',
    media: 'https://www.livetropicalfish.net/wp-content/uploads/2018/10/Arapaima.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Arapaima',
  },
  {
    animal: 'arapaima',
    source: 'https://a-z-animals.com/animals/arapaima/',
    text: 'arapaima lay up to 50,000 eggs in nests about 28 inches (70 centimeters) long and 10 inches (25 centimeters) deep hollowed out in the sand by their fins. It is also thought that mouth incubation takes place. The male protects the fry by drawing them into his flat, long mouth and moving them to another location if predators get too close.',
    media: 'https://www.youtube.com/watch?v=QZhPCuVrDsM&ab_channel=%C3%96merDurmaz',
    wiki: 'https://en.wikipedia.org/wiki/Arapaima',
  },
  {
    animal: 'arapaima',
    source: 'https://a-z-animals.com/animals/arapaima/',
    text: 'The arapaima is possibly the largest freshwater fish in the world, reaching up to 440 pounds (200 kilograms) and 10 feet (3 meters) in length. However, sizes of 200 pounds (90.7 kilograms) and 7 to 8 feet (2.2 to 2.4 meters) in length are more common.',
    media:
      'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2014_33/616866/140813-arapaima.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Arapaima',
  },
  {
    animal: 'archerfish',
    source: 'https://en.wikipedia.org/wiki/Archerfish',
    text: 'shooting a stream that, shaped by its mouth parts, travels faster at the rear than at the front. This speed differential causes the stream to become a blob directly before impact as the slower leading water is overtaken by the faster trailing water, and it is varied by the fish to account for differences in range. It also makes this one of the few animals that both make and use tools, as they both utilise the water and shape it to make it more useful to them',
    media: 'https://www.youtube.com/watch?v=4T1SQtavaUM&ab_channel=TheNewYorkTimes',
    wiki: 'https://en.wikipedia.org/wiki/Archerfish',
  },
  {
    animal: 'archerfish',
    source: 'https://en.wikipedia.org/wiki/Archerfish',
    text: 'Archerfish are remarkably accurate in their shooting; an adult fish almost always hits the target on the first shot. They are persistent and will make multiple shots if the first one fails. Although it is presumed that all archerfish species do this, it has only been confirmed from three of the nine species.',
    media: 'https://www.youtube.com/watch?v=jEojXgR_kP0&ab_channel=LoveNature',
    wiki: 'https://en.wikipedia.org/wiki/Archerfish',
  },
  {
    animal: 'archerfish',
    source: 'https://en.wikipedia.org/wiki/Archerfish',
    text: 'Archerfish actually “shoot” their prey with a stream of water and can shoot up to 10 feet (3m) above the water’s surface. This is not an instinct; rather, they learn from other fish when they are young and develop their accuracy over time.',
    media: 'https://www.youtube.com/watch?v=gN81dtxilhE&ab_channel=DeepLook',
    wiki: 'https://en.wikipedia.org/wiki/Archerfish',
  },
  {
    animal: 'arctic char',
    source: 'https://a-z-animals.com/animals/arctic-char/',
    text: 'The English name is thought to derive from Old Irish ceara/cera meaning "[blood] red", referring to its pink-red underside. This would also connect with its Welsh name torgoch, "red belly".',
    media: 'https://i.redd.it/f7zxjvpdss7z.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_char',
  },
  {
    animal: 'arctic char',
    source: 'https://a-z-animals.com/animals/arctic-char/',
    text: 'Arctic char is the northern-most fish; no other fish lives anywhere further north!',
    media: 'https://a-z-animals.com/media/2022/08/shutterstock_1085564960-2048x1356.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_char',
  },
  {
    animal: 'arctic fox',
    source: 'https://seaworld.org/animals/facts/mammals/arctic-fox/',
    text: 'Arctic foxes are monogamous, usually mating for life. The father helps care for the young.',
    media: 'https://www.youtube.com/watch?v=4mEbpxQj1H0&ab_channel=tmfilmpro',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_fox',
  },
  {
    animal: 'arctic fox',
    source: 'https://factanimal.com/arctic-fox/',
    text: 'Arctic foxes change with the seasons. Although the white morph is the only one to dramatically change colour over the year, all Arctic foxes shed and regrow their coats to adapt to seasonal temperatures.',
    media: 'https://www.youtube.com/watch?v=C7mxTEskjQg&ab_channel=NationalGeographic',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_fox',
  },
  {
    animal: 'arctic fox',
    source: 'https://factanimal.com/arctic-fox/',
    text: 'Arctic foxes have the best insulation in the business. Sporting the most insulating fur of any mammal and the only furry foot pads in the family Canidae, Arctic foxes are well equipped to face the bitter cold of the Arctic winter.',
    media:
      'https://external-preview.redd.it/t90krNJmW7pcK9nNekDhHGoSWQYcB6YuBw53hTuKIsk.jpg?auto=webp&v=enabled&s=aedffe020cdbb87979f8a4cf255858105ee49fed',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_fox',
  },
  {
    animal: 'arctic fox',
    source:
      'https://reddit.com/r/Awwducational/comments/wzircl/as_winter_changes_to_spring_arctic_foxes_lose/',
    text: 'As winter changes to spring, Arctic foxes lose their white winter coats and take advantage of warmer weather to give birth and care for their young. At ten days old, six baby Arctic fox cubs have opened their eyes. As the female nurses her cubs, the male goes out searching for food to nourish her.',
    media: 'https://v.redd.it/1o2eho0vtck91',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_fox',
  },
  {
    animal: 'arctic fox',
    source: 'https://factanimal.com/arctic-fox/',
    text: 'They have an astounding sense of smell. Arctic foxes have incredibly keen noses; they are capable of smelling a polar bear kill from as far as 40 kilometres away, and can sniff out a frozen lemming beneath 70 centimetres of snow.',
    media: 'https://www.youtube.com/watch?v=9UaX4RBIThI&ab_channel=NatureonPBS',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_fox',
  },
  {
    animal: 'arctic fox',
    source: 'https://factanimal.com/arctic-fox/',
    text: 'They have huge litters known as ‘kits’ . Arctic foxes produce the largest litter of any mammal in the order Carnivora- up to 25 kits in one go!',
    media: 'https://www.youtube.com/watch?v=X6G1RB3ELPg&ab_channel=BBCEarth',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_fox',
  },
  {
    animal: 'arctic fox',
    source: 'https://factanimal.com/arctic-fox/',
    text: 'They snow dive for lemmings! . When they have sniffed out a lemming burrowing under the snow, they will jump in the air and nose dive into the snow to catch their prey.',
    media: 'https://www.youtube.com/watch?v=iy03uD4iRGE&ab_channel=GokulRajagopal',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_fox',
  },
  {
    animal: 'arctic fox',
    source:
      'https://reddit.com/r/Awwducational/comments/xhecza/when_the_seasons_change_the_arctic_foxs_coat/',
    text: "When the seasons change, the Arctic fox's coat turns as well, adopting a brown or gray appearance that provides cover among the summer tundra's rocks and plants. These colorings help foxes to effectively hunt rodents, birds, and even fish.",
    media: 'https://i.redd.it/ki9pbvb5tlo91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_fox',
  },
  {
    animal: 'arctic hare',
    source:
      'https://reddit.com/r/Awwducational/comments/yypgal/a_herd_of_hares_to_survive_the_perils_brought_on/',
    text: 'A Herd of Hares: To survive the perils brought on by the long Polar Night, Arctic Hares gather in massive herds for mutual protection.',
    media: 'https://v.redd.it/4gwvt3u4uq0a1',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_hare',
  },
  {
    animal: 'arctic hare',
    source: 'https://a-z-animals.com/animals/arctic-hare/',
    text: 'In addition to plants, arctic hares have been observed eating fish and the stomach contents of dead animals such as reindeer. Since the arctic tundra can be an extremely harsh environment, this dietary adaptation benefits the hare by promoting survival through opportunistic eating.',
    media: 'https://www.youtube.com/watch?v=nsEcr4HXTOc&ab_channel=NationalGeographic',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_hare',
  },
  {
    animal: 'arctic hare',
    source: 'https://a-z-animals.com/animals/arctic-hare/',
    text: 'Arctic hares, along with other members of the hare family, are often confused with rabbits, but the two groups, while related, are different. Hares typically have longer ears and longer hind feet than rabbits. The tail of a hare is longer as well. In the case of the arctic hare, its ears are actually shorter than other types of hares, which helps it to conserve heat in the cold climate in which it lives.',
    media: 'https://www.sciencenews.org/wp-content/uploads/2022/01/012022_AR_arctic-hare_feat.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_hare',
  },
  {
    animal: 'arctic hare',
    source: 'https://a-z-animals.com/animals/arctic-hare/',
    text: 'The arctic hare is the largest of all North American hares. It is also capable of hopping on its rear legs the way a kangaroo does, moving at speeds of as much as 30 miles per hour (48.3 km/h) as it hops. When running with all four feet on the ground they can reach 40 miles per hour (64.4 km/h).',
    media: 'https://youtu.be/r2Ou58p_D7k?t=329',
    wiki: 'https://en.wikipedia.org/wiki/Arctic_hare',
  },
  {
    animal: 'arizona blonde tarantula',
    source: 'https://a-z-animals.com/animals/arizona-blonde-tarantula/',
    text: 'The common name "Blonde Tarantula" refers to its carapace, which is densely covered in pale hairs, and constrasts strongly with the all-dark legs and abdomen.',
    media: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Aphonopelma_chalcodes.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Aphonopelma_chalcodes',
  },
  {
    animal: 'arizona blonde tarantula',
    source: 'https://a-z-animals.com/animals/arizona-blonde-tarantula/',
    text: 'While spiders typically produce silk for webs from their abdomens, tarantulas produce the silk from glands in their feet. Arizona blonde tarantulas burrow holes in the ground and cover the entrance with a web of this silk',
    media: 'https://wildaboututah.org/images/pitts.2004.05.18zc_51804b_DSCN4563.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Aphonopelma_chalcodes',
  },
  {
    animal: 'arizona blonde tarantula',
    source: 'https://a-z-animals.com/animals/arizona-blonde-tarantula/',
    text: "Male tarantulas mature when they are 10 to 12 years of age, at which time they leave their burrows in search of females. Upon finding the burrow of a mature female, she's usually at least 10 years old, the male will announce himself by stroking the silk at the top of the burrow and tapping particular sequences that the female responds to.",
    media: 'https://www.youtube.com/watch?v=1p0i3fYBuG4&ab_channel=NatGeoWILD',
    wiki: 'https://en.wikipedia.org/wiki/Aphonopelma_chalcodes',
  },
  {
    animal: 'armadillo',
    source:
      'https://reddit.com/r/Awwducational/comments/wny7js/the_southern_threebanded_armadillo_and_the/',
    text: 'The southern three-banded armadillo is the only species of armadillo capable of rolling into a complete ball to defend themselves. When not threatened, they will scamper around in search of prey.',
    media: 'https://v.redd.it/ndzkmbyn3mh91',
    wiki: 'https://en.wikipedia.org/wiki/Armadillo',
  },
  {
    animal: 'armadillo',
    source:
      'https://reddit.com/r/Awwducational/comments/xfml5a/there_are_approximately_20_extant_species_of/',
    text: 'There are approximately 20 extant species of armadillo, and all of them originated in South America. Two species, the northern naked-tailed armadillo and nine-banded armadillo, are found in Central America, the latter of which has also reached the US.',
    media: 'https://v.redd.it/sccfk0n3w6o91',
    wiki: 'https://en.wikipedia.org/wiki/Armadillo',
  },
  {
    animal: 'armadillo',
    source: 'https://factanimal.com/armadillo/',
    text: 'They are the only other species besides humans that can contract and transmit leprosy. Leprosy—also known as Hansen’s disease—is a bacterial condition caused by Mycobacterium leprae. It is transmitted between humans via droplets that are released from the nose and mouth and can lead to skin rashes, ulcers, and hair loss.',
    media: 'https://www.smithsonianmag.com/smart-news/how-armadillos-can-spread-leprosy-180954440/',
    wiki: 'https://en.wikipedia.org/wiki/Armadillo',
  },
  {
    animal: 'armadillo girdled lizard',
    source:
      'https://reddit.com/r/Awwducational/comments/y7g0mp/the_armadillo_girdled_lizard_gets_its_common_name/',
    text: "The armadillo girdled lizard gets its common name from its unique defensive behavior; it will grab its tail in its mouth and curl up into a ball, protected by thick scales and spikes along its back and tail. Its genus name 'Ouroborus' comes from the mythical serpent that eats its own tail.",
    media: 'https://i.redd.it/2vys3ab66mu91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Armadillo_girdled_lizard',
  },
  {
    animal: 'armyworm',
    source: 'https://a-z-animals.com/animals/armyworm/',
    text: 'They are so named because they "march" in armies of worms from one crop to another in search of food',
    media: 'https://www.youtube.com/shorts/gI59JSVca6E',
    wiki: 'https://en.wikipedia.org/wiki/Spodoptera',
  },
  {
    animal: 'asian carp',
    source: 'https://a-z-animals.com/animals/asian-carp/',
    text: 'Asian carp can consume 40% of their body weight in food a day! They are considered an invasive species in the United States and compete with native fish for resources making them a threat to the ecosystem.',
    media:
      'https://www.google.com/search?q=asian+carp&tbm=isch&chips=q:asian+carp,g_1:great+lakes:7nTsKhsNRxI%3D&hl=en&sa=X&ved=2ahUKEwin9r3Au_L9AhUJcjABHSv3ABgQ4lYoAnoECAEQMA&biw=1425&bih=701#imgrc=ho1abmrxt30AbM',
    wiki: 'https://en.wikipedia.org/wiki/Asian_carp',
  },
  {
    animal: 'asian elephant',
    source:
      'https://reddit.com/r/Awwducational/comments/yueyh9/asian_elephants_will_gestate_young_for_18_to_22/',
    text: 'Asian Elephants will gestate young for 18 to 22 months. Meaning they have one of the longest pregnancy of any land animal, only rivaled by African Elephants. They typically only have one calf, but for a female at the Rosamond Gifford Zoo in New York, she was carrying double the cuteness!',
    media: 'https://i.redd.it/busqcikydsz91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Asian_elephant',
  },
  {
    animal: 'asian giant hornet',
    source: 'https://factanimal.com/asian-giant-hornet/',
    text: 'The honeybees in Asia have developed a fantastic defence mechanism against giant hornets. Asian honeybees can form a defensive ‘bee ball’ that heats the hornet to death.',
    media: 'https://www.youtube.com/watch?v=GbMLzSMJ12U&ab_channel=NationalGeographic',
    wiki: 'https://en.wikipedia.org/wiki/Asian_giant_hornet',
  },
  {
    animal: 'asian giant hornet',
    source: 'https://factanimal.com/asian-giant-hornet/',
    text: 'Murder hornets can decimate a colony of bees. These Northern giant hornets are sometimes called murder hornets and for good reason. Later in the season, as the colony grows larger, hornets abandon most of their other insect prey sources and focus primarily on honeybees.',
    media: 'https://youtu.be/-gAVlh-7WZM?t=148',
    wiki: 'https://en.wikipedia.org/wiki/Asian_giant_hornet',
  },
  {
    animal: 'asian giant hornet',
    source: 'https://factanimal.com/asian-giant-hornet/',
    text: 'They are a delicacy in Japan. In some mountain villages their larvae is hunted down, fried and then eaten as a delicacy. Adult wasps can also be cooked on skewers (including the stinger!) and eaten when crunchy.',
    media:
      'https://www.youtube.com/watch?v=mtP-xbmiSX4&ab_channel=%E3%83%90%E3%82%B0%E3%82%BA%E3%82%AF%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0%E6%98%86%E8%99%AB%E9%A3%9F%26%E8%99%AB%E6%96%99%E7%90%86',
    wiki: 'https://en.wikipedia.org/wiki/Asian_giant_hornet',
  },
  {
    animal: 'asian giant hornet',
    source: 'https://factanimal.com/asian-giant-hornet/',
    text: 'They’re the largest wasp species in the world. The average Asian giant hornet worker can grow up to nearly 2 inches in length, with a wingspan of around 3 inches. Its stinger is 6mm in length alone (around a quarter of an inch).',
    media:
      'https://d.newsweek.com/en/full/1870579/asian-giant-hornet-size.jpg?w=1600&h=1600&q=88&f=988353adc1fa34fa61640e95423fc797',
    wiki: 'https://en.wikipedia.org/wiki/Asian_giant_hornet',
  },
  {
    animal: 'asian longhorn beetle',
    source: 'https://a-z-animals.com/animals/asian-longhorn-beetle/',
    text: 'Adult Asian longhorn beetles are easily identifiable due to their striking features. They have shiny, hard exoskeletons that are black in color, with 20 white spots on their wings. However, their most distinctive feature is their antennae, which are 1.5 to 2 times the size of their bodies. And upon closer inspection, you can see that the antennae are covered in black and white bands.',
    media:
      'https://ohioline.osu.edu/sites/ohioline/files/imce/Entomology/ENT_75_ALB_Adult_PC_Joe_Boggs.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Asian_long-horned_beetle',
  },
  {
    animal: 'asian longhorn beetle',
    source: 'https://a-z-animals.com/animals/asian-longhorn-beetle/',
    text: 'Their entire life cycle from larvae to beetle usually takes around 2 years in Asia. However, it may take longer in areas where they are an invasive species, like the UK and USA',
    media: 'https://www.ndinvasives.org/images/copy_of_lifecycle_MichaelBohne.jpg/image_preview',
    wiki: 'https://en.wikipedia.org/wiki/Asian_long-horned_beetle',
  },
  {
    animal: 'asian vine snake',
    source: 'https://a-z-animals.com/animals/asian-vine-snake/',
    text: 'One of the most interesting facts about this snake’s fangs is they’re located in the back of its mouth. Each fang is grooved so when the venom drips from its venom glands, it runs down the groove of its fangs.',
    media:
      'https://ultimateexotics.co.za/wp-content/uploads/2017/03/e0dde00cedac4db95539cb8596e2fd5e.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Ahaetulla_prasina',
  },
  {
    animal: 'asian vine snake',
    source: 'https://a-z-animals.com/animals/asian-vine-snake/',
    text: 'The Asian vine snake has bright green scales. Some of these snakes have a yellow stripe on their back while others have a pattern of blue lines running through their scales.',
    media: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Davidraju_Vine_snake.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Ahaetulla_prasina',
  },
  {
    animal: 'asp',
    source: 'https://a-z-animals.com/animals/asp/',
    text: 'The asp’s scientific name comes from the ancient Greek word “aspis,” which means viper. In ancient Rome and Egypt, the asp was a symbol of royalty. Queen Cleopatra reportedly committed suicide by letting herself be bitten by an asp. Modern historians say it was more likely that she took an overdose of sleeping potions, but the legend persists.',
    media: 'https://a-z-animals.com/media/2022/02/Asp-lying-on-a-rock-1024x535.jpg',
    wiki: 'wiki/Vipera_aspis',
  },
  {
    animal: 'atlantic porkfish',
    source: 'https://seaworld.org/animals/facts/bony-fish/atlantic-porkfish/',
    text: 'The Atlantic porkfish is the only Caribbean grunt with two black vertical bars and yellow stripes.',
    media: 'https://www.facebook.com/watch/?v=240242730233194',
    wiki: 'https://en.wikipedia.org/wiki/Anisotremus_virginicus',
  },
  {
    animal: 'atlantic spadefish',
    source: 'https://seaworld.org/animals/facts/bony-fish/atlantic-spadefish/',
    text: 'In an attempt to camouflage themselves, darkly colored juvenile spadefish will often drift, leaf-like, in estuarine and coastal marine waters.',
    media: 'https://www.youtube.com/watch?v=nUZ7YmYk5NU&ab_channel=DeepMarineScenes',
    wiki: 'https://en.wikipedia.org/wiki/Atlantic_spadefish',
  },
  {
    animal: 'atlantic wolffish',
    source: 'https://factanimal.com/atlantic-wolffish/',
    text: 'Atlantic wolffish eggs are very large. Most fish eggs are tiny. At 5.5 to 6 millimetres (about 0.2 inches), Atlantic wolffish eggs are among the largest of the fishes.',
    media: 'https://i.ytimg.com/vi/8EEU4leH51M/maxresdefault.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Atlantic_wolffish',
  },
  {
    animal: 'atlantic wolffish',
    source: 'https://factanimal.com/atlantic-wolffish/',
    text: 'Atlantic wolffish get their name from their impressive teeth. They have a set of cone-shaped, fanglike teeth on both their top and bottom jaws. These protruding teeth give them appearance of a wolf or other fearsome predator.',
    media:
      'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/136786230_933044083902098_5364226991963552916_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jHm_Uy_2LQkAX-5Jj0D&_nc_ht=scontent-mia3-1.xx&oh=00_AfCi24JNpON6quJEi6sU0EgkYueGDQeJvw4cgUCzXqGy2g&oe=64440279',
    wiki: 'https://en.wikipedia.org/wiki/Atlantic_wolffish',
  },
  {
    animal: 'atlantic wolffish',
    source: 'https://factanimal.com/atlantic-wolffish/',
    text: 'Atlantic wolffish live in very cold waters. Water temperatures can drop dramatically during the winter, but this does not impede Atlantic wolffish. They have natural antifreeze proteins that help them sruvive. They are found in waters as cold as 0° Celsius (32° Fahrenheit) and may be able to withstand temperatures that are even lower.',
    media: 'https://www.youtube.com/watch?v=NWaj9TfcqwI&ab_channel=AnimalFactFiles',
    wiki: 'https://en.wikipedia.org/wiki/Atlantic_wolffish',
  },
  {
    animal: 'atlantic wolffish',
    source: 'https://factanimal.com/atlantic-wolffish/',
    text: 'Hard ocean floors are their home. Unlike other fish who swim up and down in the water column, these fish prefer to make their homes on the rocky floor of the ocean. This provides them with ample access to the prey that make up their diet.',
    media: 'https://www.youtube.com/watch?v=NWaj9TfcqwI&ab_channel=AnimalFactFiles',
    wiki: 'https://en.wikipedia.org/wiki/Atlantic_wolffish',
  },
  {
    animal: 'atlas beetle',
    source: 'https://a-z-animals.com/animals/atlas-beetle/',
    text: 'Although they can fly when they open their elytra, this beetle cannot lift itself from the ground due to its heavy weight. To fly, they often have to launch themselves from trees since they cannot lift their body from the ground.',
    media: 'https://www.youtube.com/watch?v=tIHaVrMzo4o&ab_channel=InsecthausTV',
    wiki: 'https://en.wikipedia.org/wiki/Atlas_beetle',
  },
  {
    animal: 'atlas beetle',
    source: 'https://a-z-animals.com/animals/atlas-beetle/',
    text: 'This beetle is one of the strongest creatures on the planet. Their robust bodies and thick horns make it possible for them to lift objects that are up to 4 g in weight which means they can lift 850 times their body weight.',
    media: 'https://www.youtube.com/watch?v=-JAVZNnHLWo&ab_channel=HoneyBunnyGo',
    wiki: 'https://en.wikipedia.org/wiki/Atlas_beetle',
  },
  {
    animal: 'atlas beetle',
    source: 'https://a-z-animals.com/animals/atlas-beetle/',
    text: 'The Atlas beetle (Chalcosoma atlas) is a species of beetle native to Southeast Asia. They’re known for their remarkable size and the prominent horns of the males. There are two horns on the head that curve outward to form a U shape. They also have a third equally long but lower-placed horn that curves upward.',
    media: 'https://www.youtube.com/watch?v=gsXC7kAd8xc&ab_channel=SmithsonianEducation',
    wiki: 'https://en.wikipedia.org/wiki/Atlas_beetle',
  },
  {
    animal: 'atlas moth',
    source: 'https://factanimal.com/atlas-moth/',
    text: 'Atlas moths even mimic snakes. The adult moth has a dappled and enormous wing area that is said to resemble a snake.',
    media:
      'https://assets3.thrillist.com/v1/image/3029777/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70',
    wiki: 'https://en.wikipedia.org/wiki/Attacus_atlas',
  },
  {
    animal: 'atlas moth',
    source: 'https://factanimal.com/atlas-moth/',
    text: 'The larvae have butt canons. When threatened, the caterpillars of this moth have a very irritating defence.',
    media: 'https://www.youtube.com/shorts/0FJeNWesTGQ',
    wiki: 'https://en.wikipedia.org/wiki/Attacus_atlas',
  },
  {
    animal: 'atlas moth',
    source: 'https://factanimal.com/atlas-moth/',
    text: 'They also look like poo. The bizarre-looking caterpillar of the atlas moth is thought to mimic bird faeces as a way of avoiding predation. It produces a waxy white secretion that does make it look a lot like something even less appetising than a caterpillar.',
    media:
      'http://2.bp.blogspot.com/-rB6MoBgh_nk/UFSfGirR7hI/AAAAAAAAINQ/b6QQYs0t0_w/s1600/1_-Atlas-moth-2d-pupa4-brid.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Attacus_atlas',
  },
  {
    animal: 'atlas moth',
    source: 'https://factanimal.com/atlas-moth/',
    text: 'They are the third largest moth in the world. Their wingspan can measure up to 24 cm (9.4 in) and only the white witch (Thysania agrippina) and Attacus caesar moth have surpassed it.',
    media: 'https://www.youtube.com/watch?v=4tlvYJNZKVE&ab_channel=NatGeoWILD',
    wiki: 'https://en.wikipedia.org/wiki/Attacus_atlas',
  },
  {
    animal: 'atretochoana (penis snake)',
    source: 'https://factanimal.com/atretochoana/',
    text: 'The penis snake is not actually a snake, or a penis.. Thanks to the visual similarity to a human penis, this animal has earned many nicknames. They include penis snake, manaconda and floppy snake.',
    media:
      'https://imgs.mongabay.com/wp-content/uploads/sites/20/2012/08/21174318/atretochoana-eiselti-2.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Atretochoana',
  },
  {
    animal: 'atretochoana (penis snake)',
    source: 'https://factanimal.com/atretochoana/',
    text: 'The penis snake lacks additional features common in other life forms similar to it.. The eyesight of the penis snake is believed to be poor. However, it is capable of finding food, mates and shelter by a sensitive sense of smell.',
    media: 'https://factanimal.com/wp-content/uploads/2019/04/penis-snake.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Atretochoana',
  },
  {
    animal: 'atretochoana (penis snake)',
    source: 'https://factanimal.com/atretochoana/',
    text: 'These snakes are not believed to be burrowers as most caecilians are.. Penis snake relatives, such as the lung less salamander and other lung less tetrapods, are aquatic. As a result, it is the opinion of the scientific community that these creatures are also aquatic.',
    media: 'https://earthlingnature.files.wordpress.com/2012/08/atretochoana_eiselti.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Atretochoana',
  },
  {
    animal: 'australian owlet-nightjar',
    source:
      'https://reddit.com/r/Awwducational/comments/x4ewz4/the_australian_owletnightjar_native_to_australia/',
    text: 'The Australian owlet-nightjar, native to Australia and New Guinea, is a nocturnal bird that roosts in tree hollows during the day. It is colloquially known as the moth owl. The owlet-nightjar feeds at night by diving from perches and snatching insects from the air in the manner of a flycatcher.',
    media: 'https://v.redd.it/f79ksow8xil91',
    wiki: 'https://en.wikipedia.org/wiki/Australian_owlet-nightjar',
  },
  {
    animal: 'babirusa',
    source:
      'https://reddit.com/r/Awwducational/comments/yzbx1h/the_babirusa_is_an_islanddwelling_wild_pig_the/',
    text: "The babirusa is an island-dwelling wild pig. The males have upper canines that continuously grow as they age; these tusks can become over 40 cm (17 inches) long. If the tusks aren't worn down or broken, they eventually curve back to grow into the babirusas head, piercing its skull.",
    media: 'https://i.redd.it/8cxhdfabby0a1.png',
    wiki: 'https://en.wikipedia.org/wiki/Babirusa',
  },
  {
    animal: 'baltimore oriole',
    source:
      'https://reddit.com/r/Awwducational/comments/xluga2/baltimore_orioles_forage_in_trees_and_shrubs_also/',
    text: 'Baltimore orioles forage in trees and shrubs, also making short flights to catch insects. They acrobatically clamber, hover and hang among foliage as they comb high branches. They mainly eat insects, berries and nectar, and are often seen sipping at hummingbird feeders.',
    media: 'https://v.redd.it/9jep7aahblp91',
    wiki: 'https://en.wikipedia.org/wiki/Baltimore_oriole',
  },
  {
    animal: 'barn owl',
    source:
      'https://reddit.com/r/Awwducational/comments/xb3gfi/barn_owls_are_incredibly_efficient_hunters_a/',
    text: 'Barn owls are incredibly efficient hunters, a family of owls can eat upwards of 4,000 mice each year [OC]',
    media: 'https://i.redd.it/gf38oiuia4n91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Barn_owl',
  },
  {
    animal: 'barnacle goose',
    source:
      'https://reddit.com/r/Awwducational/comments/wxhrm3/barnacle_geese_nest_high_in_arctic_cliffs_to/',
    text: "Barnacle geese nest high in Arctic cliffs to avoid predators. Newly hatched day-old geese are flightless. They must plummet to feed on grass, as parents can't feed them. Being lightweight and fluffy help cushion their bouncy fall. 90% survives the tumble, but half taken by foxes and birds of prey.",
    media: 'https://v.redd.it/oj83089frvj91',
    wiki: 'https://en.wikipedia.org/wiki/Barnacle_goose',
  },
  {
    animal: 'bat',
    source:
      'https://reddit.com/r/Awwducational/comments/y91e9m/bats_are_lunarphobic_in_order_to_avoid_predation/',
    text: 'Bats are lunarphobic! In order to avoid predation they forage less under bright moonlight.',
    media: 'https://imgur.com/mJOugOx',
    wiki: 'https://en.wikipedia.org/wiki/Bat',
  },
  {
    animal: 'bat',
    source:
      'https://reddit.com/r/Awwducational/comments/yd7e9k/bats_are_too_small_and_their_hearts_are_too/',
    text: 'Bats are too small and their hearts are too powerful for blood to pool in their heads while hanging upside down.',
    media: 'https://i.imgur.com/fvGMPrc.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Bat',
  },
  {
    animal: 'bat',
    source:
      'https://reddit.com/r/Awwducational/comments/y10p0t/b_ats_use_their_voices_to_echolocate_but_they/',
    text: 'Bats use their voices to echolocate, but they also use them to croon. The more biologists look at bat courtship behaviors, the more they are finding accomplished singers.',
    media: 'https://i.imgur.com/vbCiave.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Bat',
  },
  {
    animal: 'bat',
    source:
      'https://reddit.com/r/Awwducational/comments/yfq540/many_bat_species_have_a_nose_leaf_these/',
    text: 'Many bat species have a nose leaf. These structures help to focus echolocation calls.',
    media: 'https://i.imgur.com/6BIKsZh',
    wiki: 'https://en.wikipedia.org/wiki/Bat',
  },
  {
    animal: 'bat',
    source:
      'https://reddit.com/r/Awwducational/comments/yvbx93/the_tropical_pitcher_plant_nepenthes_hemsleyana/',
    text: 'The tropical pitcher plant (Nepenthes hemsleyana) attracts bats by reflecting their echolocation cries. It serves as a shelter for bats - they crawl inside in the morning, sleep there during the day, and leave at night. In return for shelter, the bats poop into the plant, providing it with nitrogen.',
    media: 'https://i.redd.it/k4absacar00a1.png',
    wiki: 'https://en.wikipedia.org/wiki/Bat',
  },
  {
    animal: 'bat',
    source:
      'https://reddit.com/r/Awwducational/comments/yrpjl4/there_are_more_than_530_species_of_flowering/',
    text: 'There are more than 530 species of flowering plants that rely on bats as either their major or exclusive pollinators.',
    media: 'https://i.imgur.com/T0J3uoC.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Bat',
  },
  {
    animal: 'bat hawk',
    source:
      'https://reddit.com/r/Awwducational/comments/yrrfnc/bat_hawks_are_the_dark_featherclad_vampire/',
    text: 'Bat hawks are the dark, feather-clad vampire hunters of the birds of prey. They begin their hunt for bats, their main prey, at dusk as the bats emerge from their roost; catching them at high speeds mid-flight and swallowing them whole.',
    media: 'https://i.redd.it/jxfxqqli98z91.png',
    wiki: 'https://en.wikipedia.org/wiki/Bat_hawk',
  },
  {
    animal: 'bat-eared fox',
    source:
      'https://reddit.com/r/Awwducational/comments/xgyad2/the_bateared_foxs_large_ears_which_can_measure/',
    text: "The bat-eared fox's large ears, which can measure over five inches (12.7 cm) long, help them hear insects, such as termites and dung beetles, moving underground. The fox can even hear insects chewing their food, i.e. beetles munching on dung balls, at short distances below ground.",
    media: 'https://v.redd.it/zoucjxa7lho91',
    wiki: 'https://en.wikipedia.org/wiki/Bat-eared_fox',
  },
  {
    animal: 'bear cuscus',
    source:
      'https://reddit.com/r/Awwducational/comments/yxou5v/the_bear_cuscus_is_named_for_its_thick_bearlike/',
    text: "The bear cuscus is named for its thick, bear-like fur. However, it's actually an arboreal marsupial, native to the islands of Indonesia. It appears to be a very lethargic animal, due to its low-nutrient diet of leaves, buds, and flowers - moving slowly through the canopy and resting often.",
    media: 'https://i.redd.it/arcroli0pj0a1.png',
    wiki: 'https://en.wikipedia.org/wiki/Bear_cuscus',
  },
  {
    animal: 'bearded vulture',
    source:
      'https://reddit.com/r/Awwducational/comments/yzfj6l/bearded_vulture_aka_lammergeierossifrage_chicks/',
    text: 'Bearded Vulture aka Lammergeier/Ossifrage chicks take 100-130 days to leave their nest and require parental care for 2yrs, forcing their parents to nest on alternating years on a regular basis.',
    media: 'https://v.redd.it/kv6fkswumx0a1',
    wiki: 'https://en.wikipedia.org/wiki/Bearded_vulture',
  },
  {
    animal: 'bengal tiger',
    source: 'https://seaworld.org/animals/facts/mammals/bengal-tiger/',
    text: 'It is estimated that there are less than 3,000 Bengal tigers left in the wild.',
    media: 'youtube.com/watch?v=pB_5PvU6tNI&ab_channel=3MinutesNature',
    wiki: 'https://en.wikipedia.org/wiki/Bengal_tiger',
  },
  {
    animal: 'black currawong',
    source:
      'https://reddit.com/r/Awwducational/comments/yd1w3t/the_black_currawong_strepera_fuliginosa_also/',
    text: 'The black currawong (Strepera fuliginosa), also known locally as the black jay, is a large passerine bird endemic to Tasmania. One of three currawong species in the genus Strepera, it is closely related to the butcherbirds and Australian magpie within the family Artamidae.',
    media: 'https://v.redd.it/0nuk5yrmnxv91',
    wiki: 'https://en.wikipedia.org/wiki/Black_currawong',
  },
  {
    animal: 'black-capped chickadee',
    source:
      'https://reddit.com/r/Awwducational/comments/yuwmff/in_parts_of_the_blackcapped_chickadees_range_with/',
    text: "In parts of the black-capped chickadee's range with very cold winters, such as Minnesota, survival rates are affected by access to supplemental food. Chickadees with access to bird feeders are twice as likely to survive the winter than those without access to this supplemental food.",
    media: 'https://i.redd.it/mid35iehkwz91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Black-capped_chickadee',
  },
  {
    animal: 'black-footed cat',
    source:
      'https://reddit.com/r/Awwducational/comments/x1bn37/this_is_an_african_black_footed_cat_despite_its/',
    text: 'This is an African black footed cat. Despite its adorable looks, it’s a killing machine. It’s hunting success rate is 60%, compare that to a lion’s 25%',
    media: 'https://i.redd.it/okypz76ynsk91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Black-footed_cat',
  },
  {
    animal: 'blue button jellyfish',
    source:
      'https://reddit.com/r/Awwducational/comments/xb6njm/the_blue_button_jellyfish_gets_its_name_from_its/',
    text: "The blue button jellyfish gets its name from its blue coat button-shaped body and jellyfish-like tentacles, but it's not a jellyfish at all. It's a marine organism composed of colonies of hydrozoan polyps and is more closely related to the Portuguese man o' war. Its sting can cause mild irritation.",
    media: 'https://v.redd.it/4pd11v7hz4n91',
    wiki: 'https://en.wikipedia.org/wiki/Porpita_porpita',
  },
  {
    animal: 'blue jay',
    source:
      'https://reddit.com/r/Awwducational/comments/xpdux0/blue_jays_are_omnivorous_but_the_audubon_society/',
    text: 'Blue jays are omnivorous, but the Audubon Society estimates that 75% of their diet is vegetable matter. They have strong black bills which they use for cracking nuts, usually while holding them with their feet, and for eating corn, grains and seeds.',
    media: 'https://i.redd.it/ff5yiw3ixdq91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Blue_jay',
  },
  {
    animal: 'bluestriped fangblenny',
    source:
      'https://reddit.com/r/Awwducational/comments/yya9k5/the_bluestriped_fangblenny_changes_colors_to/',
    text: 'The Bluestriped fangblenny changes colors to match other fishes. Pretending to be a cleaner wrasse, it will swim up to larger fish, but instead of eating dead scales and parasites, the fangblenny uses its morphine-like venom to eat healthy tissue undetected.',
    media: 'https://v.redd.it/ck0civlgao0a1',
    wiki: 'https://en.wikipedia.org/wiki/Bluestriped_fangblenny',
  },
  {
    animal: 'bobcat',
    source:
      'https://reddit.com/r/Awwducational/comments/x9gyqh/the_bobcat_is_a_close_relative_of_the_somewhat/',
    text: 'The bobcat is a close relative of the somewhat larger Canada lynx, and it is sometimes also called the red lynx. Its range extends from southern Canada to Mexico. This mother bobcat and her kitten were playing on the roof of an Arizona home until the mother took notice of something watching them.',
    media: 'https://v.redd.it/n4t4rkkg9qm91',
    wiki: 'https://en.wikipedia.org/wiki/Bobcat',
  },
  {
    animal: 'bohemian waxwing',
    source:
      'https://reddit.com/r/Awwducational/comments/y3rh5q/bohemian_waxwings_can_eat_huge_numbers_of_berries/',
    text: 'Bohemian Waxwings can eat huge numbers of berries, each bird sometimes consuming several hundred a day, more than double its own weight. One individual was recorded as eating between 600 and 1,000 cotoneaster berries in six hours, and defecating every four minutes.',
    media: 'https://v.redd.it/d5x96pb6crt91',
    wiki: 'https://en.wikipedia.org/wiki/Bohemian_waxwing',
  },
  {
    animal: 'bongo',
    source:
      'https://reddit.com/r/Awwducational/comments/x6hwb7/this_is_a_bongo_a_large_forest_antelope_native_to/',
    text: 'This is a bongo, a large forest antelope native to western and central Africa. They experience sexual dimorphism where females, such as this one, have the chestnut colored hide and males have dark brown hides',
    media: 'https://i.redd.it/vhcy9s7hy1m91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Bongo_(antelope)',
  },
  {
    animal: 'bottlenose dolphin',
    source:
      'https://reddit.com/r/Awwducational/comments/z12s72/bottlenose_dolphins_learn_language_the_same_way/',
    text: 'Bottlenose dolphins learn language the same way humans do: they begin by babbling. Gradually, they learn the rules of their language and by 20 months, their communication patterns conform to the same language laws as adult human speech.',
    media: 'https://i.redd.it/xiio6s8vdd1a1.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Bottlenose_dolphin',
  },
  {
    animal: 'brazilian porcupine',
    source:
      'https://reddit.com/r/Awwducational/comments/xra0k8/the_brazilian_porcupine_has_a_prehensile_tail_to/',
    text: 'The Brazilian porcupine has a prehensile tail to help it climb trees and a rather plump nose to help it find food in its native South American habitats. Females give birth to a single porcupette in the spring. At the Cincinnati Zoo, a porcupette named Rico is seen here munching on corn on the cob.',
    media: 'https://v.redd.it/57zqukexatq91',
    wiki: 'https://en.wikipedia.org/wiki/Brazilian_porcupine',
  },
  {
    animal: 'brown bear',
    source:
      'https://reddit.com/r/Awwducational/comments/xnpxmt/native_brown_bears_had_once_roamed_about/',
    text: "Native brown bears had once roamed about Switzerland until the early 1900's and then disappeared. They have since been re-introduced to nearby forests in northern Italy. Several brown bears have made their way to the Parc Naziunal Svizzer. This brown bear mom in Bärenpark Bern is ready to head home.",
    media: 'https://v.redd.it/fl8ysovxs0q91',
    wiki: 'https://en.wikipedia.org/wiki/Brown_bear',
  },
  {
    animal: "Bruno's casque-headed frog",
    source:
      'https://reddit.com/r/Awwducational/comments/wxc7bf/despite_its_derpy_appearance_brunos_casqueheaded/',
    text: "Despite its derpy appearance, Bruno's casque-headed frog (Nyctimantis brunoi) is no joke. Endemic to Brazil, their venom - 25 times more potent than native pit vipers - is delivered via headbutt using tiny bony spines on their skull.",
    media: 'https://i.redd.it/9h7puk8cjuj91.png',
    wiki: 'https://en.wikipedia.org/wiki/Bruno%27s_casque-headed_frog',
  },
  {
    animal: 'bumblebee',
    source:
      'https://reddit.com/r/Awwducational/comments/xitwzx/closed_bottle_gentian_flowers_never_open_only/',
    text: 'Closed bottle gentian flowers never open. Only large bumblebees can force the petals apart. This is a mutualistic relationship because the bees benefit by having exclusive access to a bountiful nectar supply, and the plants benefit by attracting "loyal" pollinators.',
    media: 'https://v.redd.it/4jg66ebyswo91',
    wiki: 'https://en.wikipedia.org/wiki/Bumblebee',
  },
  {
    animal: 'caecilian',
    source:
      'https://reddit.com/r/Awwducational/comments/xqgrc1/caecilians_are_wormlike_burrowing_amphibians_with/',
    text: 'Caecilians are wormlike, burrowing amphibians with smooth, moist skin which appears narrowly segmented. Their eyes are small and covered with skin, visual perception being limited to determining between light and dark. This yellow-striped caecilian was found by a gardener in Thailand and released.',
    media: 'https://i.redd.it/tzfhu7eggmq91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Caecilian',
  },
  {
    animal: 'california scrub jay',
    source:
      'https://reddit.com/r/Awwducational/comments/yqiy78/california_scrub_jays_like_many_other_corvids/',
    text: 'California scrub jays, like many other corvids, exploit ephemeral surpluses by storing food in scattered caches within their territories. They rely on highly accurate and complex memories to recover the hidden caches, often after long periods of time.',
    media: 'https://i.redd.it/7oegmohufxy91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/California_scrub_jay',
  },
  {
    animal: 'cape genet',
    source:
      'https://reddit.com/r/Awwducational/comments/x627bt/the_cape_genet_is_native_to_south_africa_and_it/',
    text: 'The Cape genet is native to South Africa, and it is recognized by its irregular brown spots, black dorsal crest, and black and white banded tail. Like other genet species, the Cape genet is nocturnal and arboreal and mostly inhabits the riparian zones of forests. This genet is undergoing training.',
    media: 'https://v.redd.it/o3lrotlblxl91',
    wiki: 'https://en.wikipedia.org/wiki/Cape_genet',
  },
  {
    animal: 'cape sparrow',
    source:
      'https://reddit.com/r/Awwducational/comments/y74ii7/the_cape_sparrow_mostly_eats_seeds_foraging_in/',
    text: 'The Cape sparrow mostly eats seeds, foraging in trees and on the ground. The larger seeds of cereals, wild grasses, and other small plants are preferred, with wheat and khakiweed (Alternanthera caracasana) being favourites.',
    media: 'https://i.redd.it/6lsdw6cdvju91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Cape_sparrow',
  },
  {
    animal: 'cape sugarbird',
    source:
      'https://reddit.com/r/Awwducational/comments/y0bjf5/the_cape_sugarbird_is_a_specialist_nectar_feeder/',
    text: 'The Cape sugarbird is a specialist nectar feeder when it comes to feeding off Proteaceae. Its long, sharp beak is used to reach the nectar of a variety of species of protea with its long brush-tipped tongue.',
    media: 'https://i.redd.it/hy6qawf0kys91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Cape_sugarbird',
  },
  {
    animal: 'caracal',
    source: 'https://factanimal.com/caracal/',
    text: 'Caracals will cover a large kill with soil. Although capable of carrying caught prey into trees to cache it, caracals most often scrape dirt over larger kills and return to feed on it later.',
    media: 'https://www.youtube.com/watch?v=vGZCXN8mZts&ab_channel=3MinutesNature',
    wiki: 'https://en.wikipedia.org/wiki/Caracal',
  },
  {
    animal: 'caracal',
    source:
      'https://reddit.com/r/Awwducational/comments/yk89wb/not_my_picture_the_caracal_is_an_africanasian/',
    text: 'the caracal is an african/Asian feline and can jump up to three meters high.',
    media: 'https://i.redd.it/wuwiwxe4llx91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Caracal',
  },
  {
    animal: 'cardinal',
    source:
      'https://reddit.com/r/Awwducational/comments/xr62tx/northern_cardinals_are_preyed_upon_by_a_wide/',
    text: 'Northern cardinals are preyed upon by a wide variety of predators native to North America, including falcons, all Accipiter hawks, shrikes, bald eagles, golden eagles and several owls, including long-eared owls, and eastern screech owls.',
    media: 'https://i.redd.it/vcaisnymfsq91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Cardinal_(bird)',
  },
  {
    animal: 'cardinal',
    source:
      'https://reddit.com/r/Awwducational/comments/yez4mm/the_male_cardinal_fiercely_defends_its_breeding/',
    text: 'The male cardinal fiercely defends its breeding territory from other males. When a male sees its reflection in glass surfaces, it frequently will spend hours fighting the imaginary intruder.',
    media: 'https://i.redd.it/eldxxn4n3ew91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Cardinal_(bird)',
  },
  {
    animal: 'caribou',
    source:
      'https://reddit.com/r/Awwducational/comments/xpgigo/caribou_have_hollow_hairs_that_not_only_serve_as/',
    text: 'Caribou have hollow hairs that not only serve as crucial insulation during the winter time but also provide buoyancy while swimming. Caribou are excellent swimmers, and they will often swim during their migrations or when exploring new feeding areas. These caribou are crossing a lake in Alaska.',
    media: 'https://v.redd.it/rausl5z4ieq91',
    wiki: 'https://en.wikipedia.org/wiki/Reindeer',
  },
  {
    animal: 'cat',
    source:
      'https://reddit.com/r/Awwducational/comments/wk3ssl/male_cats_can_lactate_however_this_is_incredibly/',
    text: "male cats can lactate however this is incredibly rare... this is my adult baby boy Hercules who didn't get the memo and thinks he's a mother to his little sis",
    media: 'https://i.redd.it/7rpryrm50pg91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Cat',
  },
  {
    animal: 'chameleon',
    source:
      'https://reddit.com/r/Awwducational/comments/xs2n8a/a_chameleons_eyes_are_mounted_on_small_turrets/',
    text: "A chameleon's eyes are mounted on small turrets that move independently so one eye can see in front and the other behind, hence a chameleon can constantly scan its environment panaromically for prey and predators. This panther chameleon is looking forward to having its picture taken, or so it seems.",
    media: 'https://i.redd.it/fdiu8xie90r91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Chameleon',
  },
  {
    animal: 'chamois',
    source:
      'https://reddit.com/r/Awwducational/comments/wcm35x/the_chamois_is_a_species_of_goatantelope_that/',
    text: 'The chamois is a species of goat-antelope that inhabits moderately high mountainous areas of Europe, Turkey and the Caucasus. They are quite adapted to thriving in rugged and rocky terrain. Chamois can run as fast as 50 km/h (31 mph) on flat uneven ground, and even faster while going downhill.',
    media: 'https://v.redd.it/xpxu1icdxve91',
    wiki: 'https://en.wikipedia.org/wiki/Chamois',
  },
  {
    animal: 'chinese giant salamander',
    source:
      'https://reddit.com/r/Awwducational/comments/ytzy23/the_chinese_giant_salamander_is_the_worlds/',
    text: 'The Chinese giant salamander is the world\'s largest amphibian. Its average length is 1.2 metres (almost 4 feet); the largest measuring 1.8 metres (5.9 feet) in length. It produces sounds that sound like a baby crying, landing it the (inaccurate) nickname of "baby fish".',
    media: 'https://i.redd.it/ecy5cbm44rz91.png',
    wiki: 'https://en.wikipedia.org/wiki/Chinese_giant_salamander',
  },
  {
    animal: 'chinese water deer',
    source:
      'https://reddit.com/r/Awwducational/comments/xsiq2s/the_chinese_water_deer_do_not_grow_antlers_but/',
    text: 'The Chinese Water Deer do not grow antlers but instead grows tusks. They are also known as “vampire deer." Source: https://en.m.wikipedia.org/wiki/Water_deer',
    media: 'https://i.redd.it/5m5t9fipm3r91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Water_deer',
  },
  {
    animal: 'chinstrap penguin',
    source:
      'https://reddit.com/r/Awwducational/comments/x5nkia/chinstrap_penguins_inhabit_a_variety_of_islands/',
    text: 'Chinstrap penguins inhabit a variety of islands and shores in the Southern Pacific and the Antarctic Oceans. They spend their winters hitchhiking on icebergs in warmer waters. Their name comes from the narrow black band below the beak which makes them appear as if they are wearing a black helmet.',
    media: 'https://i.redd.it/uwi3mmzoiul91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Chinstrap_penguin',
  },
  {
    animal: 'chital',
    source:
      'https://reddit.com/r/Awwducational/comments/wwhicc/the_chital_is_a_species_of_deer_found_in_india/',
    text: 'The chital is a species of deer found in India and, like all cervids, it is unable to see red and orange, making this species particularly vulnerable to Bengal tigers. What appears orange to us is seen as green by chitals. This gives tigers a huge advantage when stalking prey.',
    media: 'https://v.redd.it/7rj6ayfydnj91',
    wiki: 'https://en.wikipedia.org/wiki/Chital',
  },
  {
    animal: 'choupique',
    source:
      'https://reddit.com/r/Awwducational/comments/wz0tyc/the_choupique_pronounced_shoepick_is_a_freshwater/',
    text: 'The choupique (pronounced shoe-pick) is a freshwater fish native to the eastern half of North America. Properly known as the bowfin, it is the sole surviving species of an ancient lineage of ray-finned bony fish that started 250 million years ago. When the young hatch, they are guarded by their dad.',
    media: 'https://v.redd.it/q8ejf6l4u8k91',
    wiki: 'https://en.wikipedia.org/wiki/Bowfin',
  },
  {
    animal: 'cockatoo waspfish',
    source:
      'https://reddit.com/r/Awwducational/comments/wvk6sw/cockatoo_waspfish_are_autumnallycolored_fish_that/',
    text: 'Cockatoo waspfish are autumnally-colored fish that mimic dead leaves and seaweed wafting along the seafloor with the current. This behavior enables them to stealthily ambush prey as they drift. Their raised dorsal fin along with being a member of the scorpionfish family gives the fish their name.',
    media: 'https://v.redd.it/akh17urpifj91',
    wiki: 'https://en.wikipedia.org/wiki/Ablabys_taenianotus',
  },
  {
    animal: 'cockchafer beetle',
    source:
      'https://reddit.com/r/Awwducational/comments/w82klw/the_cockchafer_beetle_lives_57_weeks_in_may_april/',
    text: 'The cockchafer beetle lives 5-7 weeks in May & April. It can also be referred to as a may bug, a billy witch, a spang beetle, and Melolontha hippocastani. Cockchafer can be understood to mean “large plant gnawing beetle” and they are known for their long “eyelashes”',
    media: 'https://i.redd.it/mto7xwyflsd91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Cockchafer',
  },
  {
    animal: 'coelacanth',
    source:
      'https://reddit.com/r/Awwducational/comments/wy7bt3/the_coelacanth_pronounced_see_luh_kanth_is_a_fish/',
    text: 'The coelacanth (pronounced SEE · luh · kanth) is a fish long thought extinct by paleontologists based on fossil records until the discovery of a living specimen near South Africa over 80 years ago. Since then, a second species of coelacanth has been discovered near Indonesia.',
    media: 'https://v.redd.it/j33kbnblq1k91',
    wiki: 'https://en.wikipedia.org/wiki/Coelacanth',
  },
  {
    animal: 'common grackle',
    source:
      'https://reddit.com/r/Awwducational/comments/yd28gi/common_grackles_are_blackbirds_that_look_like/',
    text: "Common Grackles are blackbirds that look like they've been slightly stretched. They're taller and longer tailed than a typical blackbird, with a longer, more tapered bill and glossy-iridescent bodies.",
    media: 'https://i.redd.it/c19hwpwxqxv91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Common_grackle',
  },
  {
    animal: 'cotton-top tamarin',
    source: 'https://a-z-animals.com/animals/cotton-top-tamarin/',
    text: 'cotton-top tamarins form social family groups that include breeding parents, their adult offspring, and even unrelated adults who have migrated to the group. Since tamarin young are commonly born as twins and tend to be disproportionately heavy—they weigh in at about 15 to 20 percent of their mother’s body weight—these adult group members quite literally help tamarin parents shoulder the load.',
    media: 'https://www.youtube.com/watch?v=t_OnGV_43W8&ab_channel=BBCEarth',
    wiki: 'https://en.wikipedia.org/wiki/Cotton-top_tamarin',
  },
  {
    animal: 'coyote',
    source:
      'https://reddit.com/r/Awwducational/comments/x3mra0/coyotes_found_throughout_north_america_are_highly/',
    text: 'Coyotes, found throughout North America, are highly monogamous canines. Females give birth to 6 pups on average per litter, and the pups emerge from the den about a month after birth. Young males leave their parents around the age of 9 months, however, young females tend to remain with the parents.',
    media: 'https://v.redd.it/524yoia57cl91',
    wiki: 'https://en.wikipedia.org/wiki/Coyote',
  },
  {
    animal: 'crested wood partridge',
    source:
      'https://reddit.com/r/Awwducational/comments/wy6ic9/crested_wood_partridges_are_rotund_shorttailed/',
    text: 'Crested wood partridges are rotund short-tailed members of the pheasant family native to Southeast Asia. Males sport tall red crests while females have pea green plumage with chestnut brown wing coverts. These partridges live in a rainforest biome at the Eden Project in Cornwall.',
    media: 'https://v.redd.it/owm5vfcek1k91',
    wiki: 'https://en.wikipedia.org/wiki/Crested_partridge',
  },
  {
    animal: 'crocodile skink',
    source:
      'https://reddit.com/r/Awwducational/comments/xpzfo5/unlike_most_reptiles_crocodile_skinks_care_from/',
    text: 'Unlike most reptiles, Crocodile Skinks care from their young long after hatching. This mother is nuzzling her 4 month old baby.',
    media: 'https://v.redd.it/v2dc2jsz9iq91',
    wiki: 'https://en.wikipedia.org/wiki/Red-eyed_crocodile_skink',
  },
  {
    animal: 'david attenborough snail',
    source:
      'https://reddit.com/r/Awwducational/comments/xl9u8l/the_david_attenborough_snail_native_to_australia/',
    text: 'The David Attenborough snail, native to Australia, is a colorful species of airbreathing semi-slug. Semi-slugs are characterized as gastropods that straddle the distinction between snails and slugs. They have shells, usually covered over by the mantle, that are too small for them to retract into.',
    media: 'https://i.redd.it/92txgx2qcgp91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Attenborougharion_rubicundus',
  },
  {
    animal: 'decorator crab',
    source:
      'https://reddit.com/r/Awwducational/comments/xccemf/decorator_crabs_use_sedentary_creatures_to/',
    text: 'Decorator crabs use sedentary creatures to camouflage themselves from predators, or with poisonous creatures to ward off predators! different species will use different creatures to decorate themselves. source: (https://en.wikipedia.org/wiki/Decorator_crab)',
    media: 'https://i.redd.it/oqr1oxzbffn91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Decorator_crab',
  },
  {
    animal: 'desert cardinal',
    source:
      'https://reddit.com/r/Awwducational/comments/x12x3n/the_pyrrhuloxia_pronounced_peeruhloxeea_also/',
    text: 'The pyrrhuloxia (pronounced "peer-uh-LOX-ee-a"), also called the desert cardinal, is a song bird native to the southwestern US and northern Mexico. Although it bears a strong resemblance to the northern cardinal, the pyrrhuloxia is its own distinct species, however, they both share the same genus.',
    media: 'https://i.redd.it/1qq30hxyhqk91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Pyrrhuloxia',
  },
  {
    animal: 'desert rain frog',
    source:
      'https://reddit.com/r/Awwducational/comments/wg4j1s/desert_rain_frogs_live_in_clusters_also_called/',
    text: 'Desert rain frogs live in clusters (also called armies), are near threatened species as of 2016, and love burrowing!',
    media: 'https://v.redd.it/pymgpvbfwpf91',
    wiki: 'https://en.wikipedia.org/wiki/Desert_rain_frog',
  },
  {
    animal: 'desert rain frog',
    source:
      'https://reddit.com/r/Awwducational/comments/w6y5l3/the_desert_rain_frog_breviceps_macrops_produces_a/',
    text: "The Desert Rain Frog (Breviceps macrops) produces a high-pitched squeaking sound when threatened. The male's croaking is also distinctly high-pitched.",
    media: 'https://v.redd.it/dot5dx3oajd91',
    wiki: 'https://en.wikipedia.org/wiki/Desert_rain_frog',
  },
  {
    animal: 'dolphin',
    source:
      'https://reddit.com/r/Awwducational/comments/yegi72/dolphins_only_allow_half_of_their_brains_to_sleep/',
    text: "Dolphin's only allow half of their brains to sleep at a time, in order to stay alert and continue to breathe!",
    media: 'https://i.redd.it/7kl2lkyci9w91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Dolphin',
  },
  {
    animal: 'downy woodpecker',
    source:
      'https://reddit.com/r/Awwducational/comments/yk39d1/youll_find_downy_woodpeckers_in_open_woodlands/',
    text: 'You’ll find Downy Woodpeckers in open woodlands, particularly among deciduous trees, and brushy or weedy edges. They’re also at home in orchards, city parks, backyards and vacant lots.',
    media: 'https://i.redd.it/nozs9nvv1jx91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Downy_woodpecker',
  },
  {
    animal: 'duck',
    source:
      'https://reddit.com/r/Awwducational/comments/wnflz1/why_do_ducks_swim_in_a_row_this_phenomenon_is_so/',
    text: "Why Do Ducks Swim in a Row? This phenomenon is so commonplace, it's become an expression. But what's the science behind getting your ducks in a row? Researchers have found the answer– ducklings save energy by surfing their mom’s waves. These swimmers are only 1 day old.",
    media: 'https://v.redd.it/3ldfhnko6jh91',
    wiki: 'https://en.wikipedia.org/wiki/Duck',
  },
  {
    animal: 'dugong',
    source:
      'https://reddit.com/r/Awwducational/comments/xh2oyd/dugongs_are_known_to_have_symbiotic_relationships/',
    text: "Dugongs are known to have symbiotic relationships with remoras. Remoras will eat the parasites they find on the dugongs' skin. In return, the dugongs provide remoras with protection from larger predators. Dugongs also help seagrass meadows stay healthy by leaving the roots intact as they forage.",
    media: 'https://v.redd.it/ezsb582wjio91',
    wiki: 'https://en.wikipedia.org/wiki/Dugong',
  },
  {
    animal: 'dusky dolphin',
    source:
      'https://reddit.com/r/Awwducational/comments/xso65y/arguably_the_most_active_of_all_dolphins_dusky/',
    text: 'Arguably the most active of all dolphins, dusky dolphins are known for their energetic, skillful leaping and tumbling acrobatics. They see each other better in the air to help synchronize cooperative movements for herding prey. Here, a pod one thousand strong off the Kaikōura coast of New Zealand',
    media: 'https://v.redd.it/ujakyfax15r91',
    wiki: 'https://en.wikipedia.org/wiki/Dusky_dolphin',
  },
  {
    animal: 'earwig',
    source:
      'https://reddit.com/r/Awwducational/comments/ytbmzj/earwigs_are_devoted_mothers_they_stay_with_their/',
    text: 'Earwigs are devoted mothers. They stay with their clutch and clean the eggs until they hatch and defend them from predators. After hatching, she will regurgitate food for them.',
    media: 'https://i.redd.it/bktxnyajqjz91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Earwig',
  },
  {
    animal: 'elegant crested tinamou',
    source:
      'https://reddit.com/r/Awwducational/comments/wb6lum/the_elegant_crested_tinamou_native_to_chile_and/',
    text: 'The elegant crested tinamou, native to Chile and Argentina, is a partridge-like bird which lays highly glossy eggs. Chicks hatch out of their eggs using their egg teeth and legs to cut and pry them open. These tinamou eggs were incubated by an aviculturalist specializing in conservation breeding.',
    media: 'https://v.redd.it/527dmj3erie91',
    wiki: 'https://en.wikipedia.org/wiki/Elegant_crested_tinamou',
  },
  {
    animal: 'elephant',
    source:
      'https://reddit.com/r/Awwducational/comments/x7ooym/elephants_dont_drink_with_their_trunks_like_a/',
    text: "Elephants don't drink with their trunks like a straw but use them as tools. This is accomplished by filling the trunk with water (up to 5.5 liters) and then using it as a hose to pour water in the mouth. They draw in water at 3 liters per second, a speed 30 times faster (330mph) than a human sneeze.",
    media: 'https://v.redd.it/uo5oh0o3ibm91',
    wiki: 'https://en.wikipedia.org/wiki/Elephant',
  },
  {
    animal: 'elk',
    source:
      'https://reddit.com/r/Awwducational/comments/wuvynp/an_elks_antlers_can_grow_about_1_inch_per_day/',
    text: "An Elk's antlers can grow about 1 inch per day. This can lead a Bull Elk in his prime to have an antler spread of 4 feet, with each antler weighing 20 pounds. (Photo Credit: Devin Starling - Instagram)",
    media: 'https://i.redd.it/0tj44rmw4aj91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Elk',
  },
  {
    animal: 'emu',
    source:
      'https://reddit.com/r/Awwducational/comments/xj7wmj/male_emus_raise_their_chicks_mating_pairs_often/',
    text: 'Male emus raise their chicks. mating pairs often stay together for up to five months, after which females lay large, emerald-green eggs in expansive ground nests. The males incubate the eggs for about seven weeks without drinking, feeding, defecating, or leaving the nest.',
    media: 'https://i.redd.it/n3558qdlf0p91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Emu',
  },
  {
    animal: 'eurasian lynx',
    source:
      'https://reddit.com/r/Awwducational/comments/xe08rw/the_eurasian_lynx_inhabits_temperate_and_boreal/',
    text: 'The Eurasian lynx inhabits temperate and boreal forests throughout much of Europe and Asia. Adult females usually have two kittens per year; litters with more than three kittens are rare. This lynx family was filmed in the Bohemian Forest of central Europe.',
    media: 'https://v.redd.it/x6hsxqpgetn91',
    wiki: 'https://en.wikipedia.org/wiki/Eurasian_lynx',
  },
  {
    animal: 'european fallow deer',
    source:
      'https://reddit.com/r/Awwducational/comments/wuyt0i/european_fallow_deer_are_historically_native_to/',
    text: 'European fallow deer are historically native to parts of southern Europe and Asia Minor, but they have now been introduced throughout much of Europe as well as other continents. There are four main color variants: common, menil, melanistic, and leucistic. This melanistic stag was filmed in Poland.',
    media: 'https://v.redd.it/cp1gelnbnaj91',
    wiki: 'https://en.wikipedia.org/wiki/European_fallow_deer',
  },
  {
    animal: 'european hamster',
    source:
      'https://reddit.com/r/Awwducational/comments/xo0qk2/the_european_hamster_cricetus_cricetus_also_known/',
    text: 'The European hamster (Cricetus cricetus), also known as the Eurasian hamster, or common hamster, is the only species of hamster in the genus Cricetus. It is native to grassland and similar habitats in a large part of Eurasia, extending from Belgium to the Altai mountains and Yenisey River in Russia.',
    media: 'https://i.redd.it/ylbjfev0x2q91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/European_hamster',
  },
  {
    animal: 'european hamster',
    source:
      'https://reddit.com/r/Awwducational/comments/x0b55w/the_european_hamster_native_to_grassland_and/',
    text: 'The European hamster native to grassland and similar habitats in a large part of Eurasia, extending from Belgium to the Altai mountains. These hamsters are good simmers. When a hamster needs to swim it inflates its cheek pouches with air for increased buoyancy.',
    media: 'https://gfycat.com/wiltedinsignificantbordercollie',
    wiki: 'https://en.wikipedia.org/wiki/European_hamster',
  },
  {
    animal: 'european robin',
    source:
      'https://reddit.com/r/Awwducational/comments/ys96q3/male_european_robins_are_noted_for_their_highly/',
    text: 'Male European Robins are noted for their highly aggressive territorial behaviour. They will fiercely attack other males and competitors that stray into their territories and have been observed attacking other small birds without apparent provocation.',
    media: 'https://i.redd.it/xws3ilqlgbz91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/European_robin',
  },
  {
    animal: 'european wildcat',
    source:
      'https://reddit.com/r/Awwducational/comments/xg1ugz/the_european_wildcat_is_native_to_broadleaved_and/',
    text: 'The European wildcat is native to broad-leaved and mixed forests in continental Europe, Scotland, Turkey and the Caucasus. Adult females give birth to three to six kittens per year. This wildcat family lives in the Bayerische Wald.',
    media: 'https://v.redd.it/veyaljyh4ao91',
    wiki: 'https://en.wikipedia.org/wiki/European_wildcat',
  },
  {
    animal: 'forest dormouse',
    source:
      'https://reddit.com/r/Awwducational/comments/wrxcjk/the_forest_dormouse_is_a_primarily_arboreal/',
    text: 'The forest dormouse is a primarily arboreal species of rodent in the family Gliridae found in eastern Europe, the Balkans and parts of western Central Asia. The dormouse, derived from French "dormeuse" meaning sleepyhead, is so-named for its long, dormant hibernation period of six months or longer.',
    media: 'https://v.redd.it/6vh6lne8tji91',
    wiki: 'https://en.wikipedia.org/wiki/Forest_dormouse',
  },
  {
    animal: 'fossa',
    source:
      'https://reddit.com/r/Awwducational/comments/ycklq7/the_fossa_is_madagascars_top_predator_it_is_the/',
    text: "The fossa is Madagascar's top predator. It is the only animal that hunts the island's lemurs, able to move swiftly through the trees. Unlike most animals, it isn't active at a set time, making it cathemeral - it wakes and sleeps whenever it feels like it.",
    media: 'https://i.redd.it/8sgrkss4muv91.png',
    wiki: 'https://en.wikipedia.org/wiki/Fossa_(animal)',
  },
  {
    animal: 'four-eyed frog',
    source:
      'https://reddit.com/r/Awwducational/comments/ypk4jh/some_frog_species_such_as_the_foureyed_frog_top/',
    text: "Some frog species such as the four-eyed frog (top) have evolved poisonous glands that serve as 'eyespots' on their rears. Raising their rears, and sometimes inflating them like the Cuyaba dwarf frog (bottom), they trick predators into thinking they're the heads of larger animals.",
    media: 'https://i.redd.it/9e8r5rhudry91.png',
    wiki: 'https://en.wikipedia.org/wiki/Colombian_four-eyed_frog',
  },
  {
    animal: 'fringe-lipped bat',
    source:
      'https://reddit.com/r/Awwducational/comments/yqlzhc/fringelipped_bats_trachops_cirrhosus_are_very/',
    text: 'Fringe-lipped bats (Trachops cirrhosus) are very smart and hunt frogs by listening to the chunking sounds male frogs make. They are also easily trained to respond to novel stimuli, such as a ringtone or rock music, and can remember the sounds for years.',
    media: 'https://i.redd.it/wwglde9p0yy91.png',
    wiki: 'https://en.wikipedia.org/wiki/Fringe-lipped_bat',
  },
  {
    animal: 'galapagos tortoise',
    source:
      'https://reddit.com/r/Awwducational/comments/xlgpa2/the_galápagos_tortoise_is_one_of_the_longest/',
    text: 'The Galápagos tortoise is one of the longest living vertebrates, with one in captivity reaching 177 years old. Owing to their slow growth rate and late sexual maturity, they are particularly vulnerable to extinction without conservation efforts. This melanistic tortoise lives at a Florida sanctuary.',
    media: 'https://i.redd.it/h6sdv7j9qhp91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Gal%C3%A1pagos_tortoise',
  },
  {
    animal: 'galapagos tortoise',
    source:
      'https://reddit.com/r/Awwducational/comments/vs5jvz/when_two_galapagos_tortoises_fighting_physical/',
    text: 'When two Galapagos tortoises fighting, physical contact is rare, they extending their neck to intimidate their opponent. The tortoise have higher head position win the battle.',
    media: 'https://v.redd.it/rcjbewv8ts991',
    wiki: 'https://en.wikipedia.org/wiki/Gal%C3%A1pagos_tortoise',
  },
  {
    animal: 'genet',
    source:
      'https://reddit.com/r/Awwducational/comments/yqon35/a_genet_is_a_small_viverrid_of_the_genus_genetta/',
    text: 'A genet is a small viverrid of the genus Genetta, which consists of 17 species of small African carnivorans. The common genet is the only genet present in Europe and occurs in the Iberian Peninsula, Italy and France. They are opportunistic omnivores that also feed on plants and fruit.',
    media: 'https://v.redd.it/4u8otwoihyy91',
    wiki: 'https://en.wikipedia.org/wiki/Genet_(animal)',
  },
  {
    animal: 'geoduck',
    source:
      'https://reddit.com/r/Awwducational/comments/wvmi00/the_geoduck_pronounced_gooey_duck_is_a_very_large/',
    text: 'The geoduck (pronounced gooey duck) is a very large saltwater clam native to coastal waters along the northeastern Pacific Ocean. It is known as a broadcast spawner - both males and females release billions of spermatozoa and eggs respectively into the sea to reproduce. This specimen was released.',
    media: 'https://i.redd.it/jart9qji7gj91.png',
    wiki: 'https://en.wikipedia.org/wiki/Geoduck',
  },
  {
    animal: "geoffroy's cat",
    source:
      'https://reddit.com/r/Awwducational/comments/xommt1/geoffroys_cat_about_the_size_of_a_typical/',
    text: "Geoffroy's cat, about the size of a typical domestic cat, inhabits the pampas and savannas of South America. It is distinguished by its numerous black spots and dark bands on its fur except when it is a morph. This rescued melanistic Geoffroy's cat resides at a feline sanctuary in Florida.",
    media: 'https://i.redd.it/6atue9a108q91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Geoffroy%27s_cat',
  },
  {
    animal: 'geometer moth',
    source:
      'https://reddit.com/r/Awwducational/comments/wieki2/the_larvae_of_geometer_moths_go_by_the_common/',
    text: 'The larvae of geometer moths go by the common name "inchworm" because of how these caterpillars move forward in a looping fashion as though they are "measuring the Earth", hence their family name, Geometridae. There are over 23,000 species of geometer moths, 1400 in North America alone.',
    media: 'https://v.redd.it/82dwbsrg8ag91',
    wiki: 'https://en.wikipedia.org/wiki/Geometer_moth',
  },
  {
    animal: 'giant armadillo',
    source:
      'https://reddit.com/r/Awwducational/comments/vxz8ki/the_giant_armadillo_native_to_northern_south/',
    text: 'The giant armadillo, native to northern South America, is the largest extant species of armadillo. It is colloquially called tatu-canastra or ocarro. The largest wild specimen weighed in at 54 kg; a captive one tipped the scale at 80 kg. This one was encountered during a birding expedition in Peru.',
    media: 'https://v.redd.it/zqasc9ac3bb91',
    wiki: 'https://en.wikipedia.org/wiki/Giant_armadillo',
  },
  {
    animal: 'giant otter shrew',
    source:
      'https://reddit.com/r/Awwducational/comments/x1u8nl/neither_otter_nor_shrew_the_poorlynamed_giant/',
    text: 'Neither otter nor shrew, the poorly-named giant otter shrew (Potamogale velox) is in fact more closely related to elephants. Nearly blind, these semiaquatic African carnivores swim like crocodiles with side-to-side motions of their powerful tails, sniffing out prey like crabs, fish, and frogs.',
    media: 'https://i.redd.it/kj6gkkuirek91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Giant_otter_shrew',
  },
  {
    animal: 'giant panda',
    source:
      'https://reddit.com/r/Awwducational/comments/y7c49m/giant_pandas_are_the_only_bears_with_grasping/',
    text: 'Giant pandas are the only bears with grasping paws! Instead of opposable thumbs, an elongated wrist bone acts as a sixth finger to let them hold bamboo more easily.',
    media: 'https://v.redd.it/ldm5dnwvelu91',
    wiki: 'https://en.wikipedia.org/wiki/Giant_panda',
  },
  {
    animal: 'giant squid',
    source:
      'https://reddit.com/r/Awwducational/comments/xbnlo3/the_giant_squid_is_widespread_inhabiting_all_the/',
    text: "The giant squid is widespread, inhabiting all the world's oceans, with maximum usual sizes of around 12–13 m (39–43 ft) in length, though there are unattested reports of larger ones (i.e. 20 m/66ft). A giant squid was filmed in Toyama Bay which, after its noteworthy visit, swam back to the deep.",
    media: 'https://v.redd.it/inzy08yvd9n91',
    wiki: 'https://en.wikipedia.org/wiki/Giant_squid',
  },
  {
    animal: 'giant vinegaroon',
    source:
      'https://reddit.com/r/Awwducational/comments/xfqx3e/despite_their_looks_giant_vinegaroons_are/',
    text: 'Despite their looks, Giant Vinegaroons are harmless to humans, and can make great pets. But, when attacked, they can accurately fire an offensive vinegar-smelling liquid out of their rear that contains acetic acid.',
    media: 'https://i.redd.it/reg0tnnuz7o91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Mastigoproctus_giganteus',
  },
  {
    animal: 'giant wood moth',
    source:
      'https://reddit.com/r/Awwducational/comments/xiedp9/the_giant_wood_moth_is_one_of_the_largest_moth/',
    text: 'The giant wood moth is one of the largest moth species in the world. According to the Australian Museum, adult females are about twice as large as males, can weigh up to 30 grams, and have a wingspan of up to 25 centimeters. They live in the forests of Australia and New Zealand',
    media: 'https://i.redd.it/h6xin34txto91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Endoxyla_cinereus',
  },
  {
    animal: 'goat',
    source:
      'https://reddit.com/r/Awwducational/comments/wlvtkb/fun_fact_you_can_rent_goats_to_clear_brush_off/',
    text: "Fun Fact, you can rent goats to clear brush off your property. They eat everything, including poison ivy, and it's much more eco friendly than weed killer.",
    media: 'https://i.redd.it/f0wu3tqn34h91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Goat',
  },
  {
    animal: 'golden lion tamarin',
    source:
      'https://reddit.com/r/Awwducational/comments/y98w4x/golden_lion_tamarins_are_unique_among_primates_in/',
    text: 'Golden lion tamarins are unique among primates in that they will usually give birth to twins, with over three-quarters of wild-born golden tamarins being twins. Their tight-knit family groups allow them to care for them. The babies are born fully furred with open eyes.',
    media: 'https://i.redd.it/nnp7h6h8s0v91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Golden_lion_tamarin',
  },
  {
    animal: 'gray wolf',
    source:
      'https://reddit.com/r/Awwducational/comments/vz0f3j/gray_wolves_eating_blueberries_wolves_actually/',
    text: "Gray Wolves eating Blueberries; Wolves actually covet berries and other fruits, during their growing seasons berries can make up 80% of wolf packs' diet.",
    media: 'https://v.redd.it/j4dei7t3bkb91',
    wiki: 'https://en.wikipedia.org/wiki/Wolf',
  },
  {
    animal: 'great bustard',
    source:
      'https://reddit.com/r/Awwducational/comments/yfz0q6/the_great_bustard_is_the_heaviest_bird_in_the/',
    text: 'The great bustard is the heaviest bird in the world capable of flight. It can weigh up to 21 kg (46 lb) - about the weight of a 5 year old child. Males will grow colorful breeding plumage each year, including moustachial feathers on each side of the beak that can be 20 cm long in old males.',
    media: 'https://i.redd.it/k5ooikby8nw91.png',
    wiki: 'https://en.wikipedia.org/wiki/Great_bustard',
  },
  {
    animal: 'great eared nightjar',
    source:
      'https://reddit.com/r/Awwducational/comments/xivmg1/the_great_eared_nightjar_is_a_species_of_nightjar/',
    text: 'The great eared nightjar is a species of nightjar in the family Caprimulgidae. It is found in southwest India and in parts of Southeast Asia. This very large nightjar has long barred wings, a barred tail and long ear-tufts which are often recumbent',
    media: 'https://i.redd.it/5bvwzqrc6xo91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Great_eared_nightjar',
  },
  {
    animal: 'great tit',
    source:
      'https://reddit.com/r/Awwducational/comments/wsbeo1/great_tits_are_primarily_insectivorous_in_the/',
    text: 'Great tits are primarily insectivorous in the summer, feeding on insects and spiders which they capture by foliage gleaning. Their larger invertebrate prey include cockroaches, grasshoppers and crickets, lacewings, earwigs, bugs (Hemiptera), ants, flies (Diptera), caddis flies, beetles, scorpions...',
    media: 'https://v.redd.it/wkj320m2mni91',
    wiki: 'https://en.wikipedia.org/wiki/Great_tit',
  },
  {
    animal: 'greater glider',
    source:
      'https://reddit.com/r/Awwducational/comments/xi4isq/greater_gliders_are_velvetyfurred_marsupials_w/',
    text: 'Greater Gliders are velvety-furred marsupials w/ distinctive large fluffy ears, the largest in the ringtail possum fam,can glide up to 100m at a time.W/ a highly specialized diet feeding almost exclusively on eucalypt leaves & using 2-18 tree hollows for shelter. Listed as endangered species in 2022',
    media:
      'https://www.australiangeographic.com.au/wp-content/uploads/2020/05/Greater-glider-900x567.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Greater_glider',
  },
  {
    animal: 'greater honeyguide',
    source:
      'https://reddit.com/r/Awwducational/comments/y4xjcz/the_greater_honeyguide_indicator_indicator_is_a/',
    text: "The greater honeyguide (Indicator indicator) is a bird that guides both people and honey badgers to bee hives. It approaches, makes distinct calls, and flutters in the direction of the beehive. It will do so until it's followed and the hive is cracked open so it can eat the beeswax.",
    media: 'https://i.redd.it/wab7a1yf21u91.png',
    wiki: 'https://en.wikipedia.org/wiki/Greater_honeyguide',
  },
  {
    animal: 'greater one-horned rhino',
    source:
      'https://reddit.com/r/Awwducational/comments/vv1beq/greater_onehorned_rhinos_are_found_only_in_nepal/',
    text: 'Greater one-horned rhinos are found only in Nepal and northeast India, and their population has recently rebounded to a total of around 3,700 members in a recent survey. This rhino is calmly walking through Sauraha, a village located near Chitwan National Park in Nepal.',
    media: 'https://v.redd.it/12gz75rnija91',
    wiki: 'https://en.wikipedia.org/wiki/Indian_rhinoceros',
  },
  {
    animal: 'hairy long-nosed armadillo',
    source:
      'https://reddit.com/r/Awwducational/comments/xc0f90/the_hairy_longnosed_armadillo_native_to_peru_has/',
    text: 'The hairy long-nosed armadillo, native to Peru, has a distinctive coat of long brown fur which grows through tiny pores in its armor. It can weigh up to 5 kg (10.4 lb) and grow to 58 cm (23 in) long, including the tail. It is estimated that there are only 12 known individuals in its wild population.',
    media: 'https://i.redd.it/613q6fzf5cn91.png',
    wiki: 'https://en.wikipedia.org/wiki/Hairy_long-nosed_armadillo',
  },
  {
    animal: 'handfish',
    source:
      'https://reddit.com/r/Awwducational/comments/xd2d1i/the_handfish_is_a_type_of_anglerfish_that_prefers/',
    text: 'The handfish is a type of anglerfish that prefers to use its fins as "hands" to move around on the sea floor rather than swimming, though it will certainly use its tail to make a quick getaway, if necessary. It is found in the coastal waters of southern and eastern Australia, including Tasmania.',
    media: 'https://v.redd.it/ibon7hk6bln91',
    wiki: 'https://en.wikipedia.org/wiki/Handfish',
  },
  {
    animal: 'harbor seal',
    source:
      'https://reddit.com/r/Awwducational/comments/yiey04/the_most_widely_distributed_pinniped_the_harbor/',
    text: 'The most widely distributed pinniped, the harbor seal or common seal (Phoca vitulina) is found along temperate and arctic coastlines throughout the northern hemisphere. A thick layer of blubber helps these chonkers thrive in cold waters.',
    media: 'https://v.redd.it/8t1j2yr4r5x91',
    wiki: 'https://en.wikipedia.org/wiki/Harbor_seal',
  },
  {
    animal: 'hedgehog',
    source:
      'https://reddit.com/r/Awwducational/comments/xqmx7e/hedgehogs_have_gestational_periods_ranging_from/',
    text: 'Hedgehogs have gestational periods ranging from 35 to 58 days, depending on the species, and they typically have from 3 to 6 babies, called hoglets. This hedgehog mom walks slowly enough to make sure her 7 hoglets are able to keep up with her.',
    media: 'https://v.redd.it/13vh0a95pnq91',
    wiki: 'https://en.wikipedia.org/wiki/Hedgehog',
  },
  {
    animal: 'hedgehog',
    source:
      'https://reddit.com/r/Awwducational/comments/xa6bta/young_hedgehogs_have_to_learn_how_to_fully_ball/',
    text: 'Young hedgehogs have to learn how to fully "ball up" as they grow, it isn\'t an immediate process but an important step in their development.',
    media: 'https://imgur.com/G5TBiyF.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Hedgehog',
  },
  {
    animal: 'helmeted guineafowl',
    source:
      'https://reddit.com/r/Awwducational/comments/wpr9sv/helmeted_guineafowl_is_a_gregarious_species/',
    text: 'Helmeted Guineafowl is a gregarious species, forming flocks outside the breeding season typically of about 25 birds that also roost communally. They are particularly well-suited to consuming massive quantities of ticks, which might otherwise spread Lyme disease.',
    media: 'https://i.redd.it/uy4l6ajt32i91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Helmeted_guineafowl',
  },
  {
    animal: 'hermit crab',
    source:
      'https://reddit.com/r/Awwducational/comments/wliauc/hermit_crabs_will_eventually_outgrow_their_shells/',
    text: 'Hermit crabs will eventually outgrow their shells. At such times, they\'d line up according to size to swap shells. Shells too big or too small are rejected. This chain reaction is called "vacancy chain." Vacancy chain is a way for these crustaceans to survive while sharing limited resources.',
    media: 'https://v.redd.it/r6hita3nf0h91',
    wiki: 'https://en.wikipedia.org/wiki/Hermit_crab',
  },
  {
    animal: 'hippo',
    source:
      'https://reddit.com/r/Awwducational/comments/x6t9mo/hippos_have_selfsharpening_teeth_which_are_used/',
    text: 'Hippos have self-sharpening teeth which are used for both chewing and combat. On average, hippos have 36 teeth; their molars do the hard work of grinding down the 40kg of plant material they consume each day. This hippo is getting a thorough dental hygiene check and cleaning at a zoo in Osaka.',
    media: 'https://v.redd.it/siovzwkv84m91',
    wiki: 'https://en.wikipedia.org/wiki/Hippopotamus',
  },
  {
    animal: 'horned frog',
    source:
      'https://reddit.com/r/Awwducational/comments/z0fb8d/horned_frogs_are_large_squat_and_aggressive_they/',
    text: "Horned frogs are large, squat, and aggressive. They remain motionless and wait for prey to wander by; attempting to eat anything that will fit into their mouths, as well as things that don't. They are also called PacMan frogs due to their round shape, large mouth, and habit of swallowing prey whole.",
    media: 'https://i.redd.it/y2ad3ciqp71a1.png',
    wiki: 'https://en.wikipedia.org/wiki/Horned_frog',
  },
  {
    animal: 'hover fly',
    source:
      'https://reddit.com/r/Awwducational/comments/xidppp/hoverflies_are_important_pollinators_of/',
    text: 'Hoverflies are important pollinators of wildflowers in many ecosystems and are responsible for the pollination of numerous species of flowering plants that produce food for wildlife. Their larvae feed on aphids and other plant pests. This hoverfly is feeding on the nectar of garlic flowers.',
    media: 'https://v.redd.it/dm4tu9q0tto91',
    wiki: 'https://en.wikipedia.org/wiki/Hover_fly',
  },
  {
    animal: 'hutia',
    source:
      'https://reddit.com/r/Awwducational/comments/wx9xa4/hutias_are_fairly_large_rodents_that_inhabit_the/',
    text: 'Hutias are fairly large rodents that inhabit the islands of the Caribbean, and they resemble nutrias (coypus) to some degree. Depending on the species, they can weigh from 2 to 8.5 kg (4.4 - 18.7 lbs). This is first time video footage of hutias in Cuba as they feed around coastal limestone caves.',
    media: 'https://v.redd.it/pjw14i5c0uj91',
    wiki: 'https://en.wikipedia.org/wiki/Hutia',
  },
  {
    animal: 'iberian lynx',
    source:
      'https://reddit.com/r/Awwducational/comments/xlxo8k/the_wild_iberian_lynx_population_has_increased/',
    text: 'The wild Iberian lynx population has increased tenfold in the last two decades, from 94 individuals in 2002 to 1,111 lynxes in 2021, a true success story owing to conservation efforts and public awareness. Listed as "endangered", the lynx lives in fragmented wilderness areas in Spain and Portugal.',
    media: 'https://v.redd.it/az1exxzd0mp91',
    wiki: 'https://en.wikipedia.org/wiki/Iberian_lynx',
  },
  {
    animal: 'iberian ribbed newt',
    source:
      'https://reddit.com/r/Awwducational/comments/xmpl2y/the_iberian_ribbed_newt_or_gallipato_native_to/',
    text: 'The Iberian ribbed newt or gallipato, native to the Iberian Peninsula and Morocco, is the largest European newt species. It is known for its sharp ribs which can puncture through its sides. This defense mechanism, which can sting a predator, causes little harm to the newt.',
    media: 'https://v.redd.it/dennh8edbsp91',
    wiki: 'https://en.wikipedia.org/wiki/Iberian_ribbed_newt',
  },
  {
    animal: 'indian giant squirrel',
    source:
      'https://reddit.com/r/Awwducational/comments/y381a6/the_indian_giant_squirrel_can_grow_to_a_full/',
    text: 'The Indian Giant Squirrel can grow to a full length of over a metre',
    media: 'https://i.redd.it/au7y418enmt91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Indian_giant_squirrel',
  },
  {
    animal: 'indigo bunting',
    source:
      'https://reddit.com/r/Awwducational/comments/xt70ey/songbirds_like_this_indigo_bunting_use_the_stars/',
    text: 'Songbirds like this indigo bunting use the stars to navigate while migrating. Studies show that the birds especially rely on the North Star, Ursa Major, and Cassiopeia',
    media: 'https://i.redd.it/srw14phik9r91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Indigo_bunting',
  },
  {
    animal: 'isopod',
    source:
      'https://reddit.com/r/Awwducational/comments/xpktgs/isopods_first_appeared_in_the_fossil_record_300/',
    text: 'Isopods first appeared in the fossil record 300 million years ago, and today there are more than 10,000 species, both terrestrial and aquatic. All have rigid, segmented exoskeletons and two pairs of antennae. While this isopod is resting on the ocean floor, a deep-sea skate appears to befriend it.',
    media: 'https://v.redd.it/7xcpj05qbfq91',
    wiki: 'https://en.wikipedia.org/wiki/Isopoda',
  },
  {
    animal: 'jacana',
    source:
      'https://reddit.com/r/Awwducational/comments/xl27cg/jacana_males_are_responsible_for_raising_the/',
    text: "Jacana males are responsible for raising the chicks, and they will quickly collect the chicks under their wings at the slightest indication of danger. When it's safe, the chicks are let out again. This bronze-winged jacana dad gestures to his chicks that the coast is clear and it's safe to feed.",
    media: 'https://v.redd.it/abq4afgj1fp91',
    wiki: 'https://en.wikipedia.org/wiki/Jacanidae',
  },
  {
    animal: 'japanese honey bee',
    source:
      'https://reddit.com/r/Awwducational/comments/yblczu/japanese_honey_bees_apis_cerana_japonica_have_a/',
    text: 'Japanese honey bees (Apis cerana japonica) have a unique defense against raiding “murder hornets”. They mob the intruder and vibrate so intensely that they boil the hornet alive.',
    media: 'https://i.imgur.com/rdr8jDz.jpeg',
    wiki: 'https://en.wikipedia.org/wiki/Apis_cerana_japonica',
  },
  {
    animal: 'japanese macaque',
    source:
      'https://reddit.com/r/Awwducational/comments/y388ni/japanese_macaques_survive_the_cold_by_bathing_in/',
    text: 'Japanese macaques survive the cold by bathing in natural hot springs. Competition for space is tough, there is a strict dominance hierarchy with one family in charge. High-ranked macaques may drag underlings out of the spring into the cold. Coups occur often as well as competition within families.',
    media: 'https://i.redd.it/9gecr1gqomt91.png',
    wiki: 'https://en.wikipedia.org/wiki/Japanese_macaque',
  },
  {
    animal: 'jaragua dwarf gecko',
    source:
      'https://reddit.com/r/Awwducational/comments/ygd9z0/haragua_lizard_worlds_smallest_known_reptile/',
    text: "The Jaragua lizard is the WORLD'S SMALLEST Known Reptile",
    media: 'https://v.redd.it/ckmsacv07pw91',
    wiki: 'https://en.wikipedia.org/wiki/Sphaerodactylus_ariasae',
  },
  {
    animal: 'java sparrow',
    source:
      'https://reddit.com/r/Awwducational/comments/xvc5h3/the_java_sparrow_is_about_15_to_17_cm_59_to_67_in/',
    text: 'The Java sparrow is about 15 to 17 cm (5.9 to 6.7 in) in length from the beak to its tip of tail feathers. Although only about the size of a house sparrow, it may be the largest species in the estrildid family.',
    media: 'https://v.redd.it/2vol5zumtrr91',
    wiki: 'https://en.wikipedia.org/wiki/Java_sparrow',
  },
  {
    animal: 'jumping spider',
    source:
      'https://reddit.com/r/Awwducational/comments/y25cce/jumping_spiders_familysalticidae_can_take_down/',
    text: 'Jumping spiders (Family:Salticidae) can take down prey many times their size. These spiders have elaborate courtship dances where the male eventually passes the female a packet of reproductive material with a quick tap. Longer contact could be dangerous! The peacock spider is particularly showy.',
    media: 'https://imgur.com/gallery/TeZjKzI',
    wiki: 'https://en.wikipedia.org/wiki/Jumping_spider',
  },
  {
    animal: 'kermode bear',
    source:
      'https://reddit.com/r/Awwducational/comments/x1j1bk/a_kermode_or_spirit_bear_mom_named_strawberry_and/',
    text: 'A Kermode or spirit bear mom named Strawberry and her first cub were filmed in the Great Bear Rainforest in Canada. These bears are subspecies of the American black bear that lives in British Columbia. Most Kermode bears are black, however, there are between 100 to 500 white morphs.',
    media: 'https://v.redd.it/j8z6xxggpuk91',
    wiki: 'https://en.wikipedia.org/wiki/Kermode_bear',
  },
  {
    animal: 'koala',
    source:
      'https://reddit.com/r/Awwducational/comments/yagzld/koala_joeys_usually_stay_in_the_mothers_pouch_for/',
    text: "Koala joeys usually stay in the mother's pouch for about six months. After this, they will ride on their mother's back and remain there until they are almost one–year old, at which point they can live more independently.",
    media: 'https://v.redd.it/79ynizu66bv91',
    wiki: 'https://en.wikipedia.org/wiki/Koala',
  },
  {
    animal: 'kodkod',
    source:
      'https://reddit.com/r/Awwducational/comments/wizs9u/kodkods_are_the_smallest_wild_felid_in_the/',
    text: 'Kodkods are the smallest wild felid in the Americas and have the smallest distribution of any cat in the Americas. They occur only in Central and Southern Chile, with marginal populations in adjoining areas of Argentina.',
    media: 'https://i.redd.it/2ki37n2g6fg91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Kodkod',
  },
  {
    animal: 'komodo dragon',
    source: 'https://seaworld.org/animals/facts/reptiles/komodo-dragon/',
    text: 'Fat stored in their tail can provide dragons with metabolic water in times of drought, enabling them to go for 1 to 1½ months without eating or drinking.',
    media: 'https://www.youtube.com/watch?v=_ocXNNaluHk&ab_channel=3MinutesNature',
    wiki: 'https://en.wikipedia.org/wiki/Komodo_dragon',
  },
  {
    animal: 'leatherback sea turtle',
    source:
      'https://reddit.com/r/Awwducational/comments/y6l5in/leatherback_sea_turtles_can_grow_to_the_size_of_a/',
    text: 'Leatherback sea turtles can grow to the size of a small car - with a length of 1.8m (almost 6 feet) and 500kg (over 1000 pounds) but have been recorded at 3m (almost ten feet) and nearly a ton (over 2000 pounds). They are the largest turtle and heaviest non-crocodilian reptiles.',
    media: 'https://i.redd.it/f52ukq1jafu91.png',
    wiki: 'https://en.wikipedia.org/wiki/Leatherback_sea_turtle',
  },
  {
    animal: 'lichen katydid',
    source:
      'https://reddit.com/r/Awwducational/comments/wsppep/lichen_katydids_native_to_central_and_south/',
    text: "Lichen katydids, native to Central and South America, are masters of camouflage. They exhibit exceptional mimicry that blends in well with their natural habitats. These katydids can be found in tropical rain forest canopies where Usnea lichen (aka old man's beard) tends to be abundant.",
    media: 'https://v.redd.it/02vlqtqokqi91',
    wiki: 'https://en.wikipedia.org/wiki/Markia_hystrix',
  },
  {
    animal: 'lion',
    source:
      'https://reddit.com/r/Awwducational/comments/whr66y/like_cats_lions_have_sharp_spines_on_tongue/',
    text: 'Like cats, lions have sharp spines on tongue called papillae. Those spines have a hollow cavity at the tip, which can contain saliva. Lion can use papillae to spread saliva on fur, reducing body temperature by evaporation.',
    media: 'https://i.redd.it/pg39u4s254g91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Lion',
  },
  {
    animal: 'little skate',
    source:
      'https://reddit.com/r/Awwducational/comments/xjhmfh/the_little_skate_leucoraja_erinacea_is_found/',
    text: 'The little skate (Leucoraja erinacea) is found along the Atlantic Ocean from Nova Scotia to North Carolina where it mainly lives in sandy or gravelly areas feeding on crustaceans and amphipods. Females produce a total of 10-35 eggs annually. Here is a baby skate hatching out of its egg case.',
    media: 'https://v.redd.it/gbqmkdbvb2p91',
    wiki: 'https://en.wikipedia.org/wiki/Little_skate',
  },
  {
    animal: 'long-eared jerboa',
    source:
      'https://reddit.com/r/Awwducational/comments/wf11p8/the_longeared_jerboa_has_ears_that_are_twothirds/',
    text: 'The long-eared jerboa has ears that are two-thirds as long as its body.',
    media: 'https://i.redd.it/iahr9bkqlgf91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Long-eared_jerboa',
  },
  {
    animal: 'lowland streaked tenrec',
    source:
      'https://reddit.com/r/Awwducational/comments/xpmzt3/the_lowland_streaked_tenrec_is_the_only_mammal/',
    text: 'The lowland streaked tenrec is the only mammal known to communicate using stridulation. It vibrates specialized spines against each other to produce a high frequency sound, a communication method more commonly seen in insects such as crickets.',
    media: 'https://v.redd.it/cnzwzqwgqfq91',
    wiki: 'https://en.wikipedia.org/wiki/Lowland_streaked_tenrec',
  },
  {
    animal: 'malayan crested argus',
    source:
      'https://reddit.com/r/Awwducational/comments/xb5a4w/the_tail_feathers_of_the_male_malayan_crested/',
    text: 'The tail feathers of the male Malayan crested argus are considered to be the longest and widest of any bird. The tail covert can measure up to 1.73 m (5.7 ft), giving the bird a total length of up to 2.4 m (7.8 ft). The crested argus is a peafowl-like species of bird in the pheasant family.',
    media: 'https://i.redd.it/cv8olaawm4n91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Malayan_crested_argus',
  },
  {
    animal: 'maleo',
    source:
      'https://reddit.com/r/Awwducational/comments/yvvray/maleo_birds_live_on_volcanic_islands_and_use/',
    text: 'Maleo birds live on volcanic islands and use geothermal heat to incubate their eggs. They find a spot at an ideal temperature (around 33°C or 91°F), bury their eggs in a sandy hole, then leave and never return. The hatchlings dig their way out - born totally independent with the ability to fly.',
    media: 'https://i.redd.it/ilr8dpkkg50a1.png',
    wiki: 'https://en.wikipedia.org/wiki/Maleo',
  },
  {
    animal: 'maleo',
    source:
      'https://reddit.com/r/Awwducational/comments/xsyg42/maleos_are_communal_nesters_with_a_unique/',
    text: 'Maleos are communal nesters with a unique reproductive strategy. Native to the Sulawesi, maleos dig deep holes and lay their eggs inside, covering them with sand and plant material. Solar and geothermal heat incubate the eggs. When the single egg per nest hatches, the chick digs out and flies off.',
    media: 'https://v.redd.it/yzbpgt4or7r91',
    wiki: 'https://en.wikipedia.org/wiki/Maleo',
  },
  {
    animal: 'manatee',
    source:
      'https://reddit.com/r/Awwducational/comments/y6bi7w/manatees_often_explore_things_with_their_hairy/',
    text: 'Manatees often explore things with their hairy snoot. Like many animals, they have prehensile lips.',
    media: 'https://v.redd.it/fc65x26qcdu91',
    wiki: 'https://en.wikipedia.org/wiki/Manatee',
  },
  {
    animal: 'maned wolf',
    source:
      'https://reddit.com/r/Awwducational/comments/xam99h/the_maned_wolf_is_the_one_of_largest_canid_in/',
    text: 'The maned wolf is the one of largest canid in South America. This species is the only member of its genus. Although Technically, it is not a fox or a wolf. its long legs are likely an adaptation to the tall grasslands of its native habitat.',
    media: 'https://i.redd.it/8f515lozf0n91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Maned_wolf',
  },
  {
    animal: 'marten',
    source:
      'https://reddit.com/r/Awwducational/comments/xg1ny5/a_marten_is_a_weasellike_mammal_in_the_genus/',
    text: 'A marten is a weasel-like mammal in the genus Martes within the subfamily Guloninae, in the family Mustelidae. They have bushy tails and large paws with partially retractile claws. The fur varies from yellowish to dark brown, depending on the species',
    media: 'https://i.redd.it/67imdpla3ao91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Marten',
  },
  {
    animal: 'mata mata',
    source:
      'https://reddit.com/r/Awwducational/comments/w7lo11/mata_mata_are_south_american_freshwater_turtles/',
    text: 'Mata mata are South American freshwater turtles that have a specialized skin structure on top of their heads resembling a fallen leaf. This purportedly aids them in catching prey. Recently, a new species of mata mata (Chelus orinocensis) was discovered in the Orinoco River of the Amazon Basin.',
    media: 'https://i.redd.it/x32vsdyowod91.png',
    wiki: 'https://en.wikipedia.org/wiki/Mata_mata',
  },
  {
    animal: 'mexican alligator lizard',
    source:
      'https://reddit.com/r/Awwducational/comments/wj9vb5/the_mexican_alligator_lizard_is_native_to_the/',
    text: 'The Mexican alligator lizard is native to the Sierra Madre de Oaxaca highlands of Mexico, and its colors can range from bright emerald green to dark teal blue. The lizard favors a mainly arboreal lifestyle and is commonly found inhabiting bromeliads and pine-oak forests.',
    media: 'https://v.redd.it/g0loyz1yxhg91',
    wiki: 'https://en.wikipedia.org/wiki/Mexican_alligator_lizard',
  },
  {
    animal: 'moose',
    source:
      'https://reddit.com/r/Awwducational/comments/x2cdqj/after_an_8month_gestation_period_a_moose_cow_will/',
    text: 'After an 8-month gestation period, a moose cow will give birth to 1 or 2 calves in May or early June. Twins are common when cows are well-nourished. Newborns are reddish brown and weigh 25-35 pounds, and by fall they can weigh 300-400 pounds. These moose are cooling off in a backyard in Anchorage.',
    media: 'https://v.redd.it/ebaf1ug5k1l91',
    wiki: 'https://en.wikipedia.org/wiki/Moose',
  },
  {
    animal: 'moray eel',
    source:
      'https://reddit.com/r/Awwducational/comments/y44o3o/the_moray_eel_has_a_second_set_of_jaws_called_the/',
    text: "The moray eel has a second set of jaws - called the 'pharyngeal jaws' - located behind its skull. These jaws are able to shoot forward almost the entire length of the skull, to snatch up prey and deliver it to the eel's esophagus for swallowing.",
    media: 'https://i.redd.it/ksw0rsyx1ut91.png',
    wiki: 'https://en.wikipedia.org/wiki/Moray_eel',
  },
  {
    animal: 'mossy leaf-tailed gecko',
    source:
      'https://reddit.com/r/Awwducational/comments/xol60p/the_mossy_leaftailed_geckos_camouflage_enables_it/',
    text: "The mossy leaf-tailed gecko's camouflage enables it to hide extremely well as it rests and awaits prey. The gecko's tail is dorso-ventrally compressed to fit flat on a branch, and its dermal flaps of skin make its outline virtually invisible. The gecko is able to alter its skin colors to blend in.",
    media: 'https://i.redd.it/zcnpu210t7q91.png',
    wiki: 'https://en.wikipedia.org/wiki/Uroplatus_sikorae',
  },
  {
    animal: 'mountain lion',
    source:
      'https://reddit.com/r/Awwducational/comments/xf0mr1/mountain_lions_hunt_primarily_at_night_and_feed/',
    text: 'Mountain lions hunt primarily at night and feed on deer, rodents, birds and other wild animals. Occasionally, they will opportunistically feed on unprotected pets, sheep and goats. Reports of mountains lions approaching homes are not rare as human settlements continue encroaching upon their space.',
    media: 'https://v.redd.it/jjc520zio1o91',
    wiki: 'https://en.wikipedia.org/wiki/Cougar',
  },
  {
    animal: 'mourning dove',
    source:
      'https://reddit.com/r/Awwducational/comments/y169l9/mourning_doves_eat_almost_exclusively_seeds_which/',
    text: 'Mourning doves eat almost exclusively seeds, which make up more than 99% of their diet. Rarely, they will eat snails or insects. Mourning doves generally eat enough to fill their crops and then fly away to digest while resting',
    media: 'https://i.redd.it/dt6wtcm3t5t91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Mourning_dove',
  },
  {
    animal: 'nautilus',
    source:
      'https://reddit.com/r/Awwducational/comments/yaxidp/a_living_relic_of_the_ancient_past_nautiluses/',
    text: 'A living relic of the ancient past, Nautiluses have been around for over 480 million years. They are the only living cephalopod with a shell and have the most limbs as well - with over 90 sticky tentacles that they use to grab prey as they shred it with their beaklike mouths.',
    media: 'https://i.redd.it/p0tlopoligv91.png',
    wiki: 'https://en.wikipedia.org/wiki/Nautilus',
  },
  {
    animal: 'northern cardinal',
    source:
      'https://reddit.com/r/Awwducational/comments/yc91sc/the_northern_cardinal_is_a_midsized_songbird_with/',
    text: 'The northern cardinal is a mid-sized songbird with a body length of 21–23 cm (8.3–9.1 in). It has a distinctive crest on the head and a mask on the face which is black in the male and gray in the female. The male is a vibrant red, while the female is a reddish olive color.',
    media: 'https://i.redd.it/bhgv4de2rqv91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Northern_cardinal',
  },
  {
    animal: 'northern flicker',
    source:
      'https://reddit.com/r/Awwducational/comments/y7zx62/although_it_can_climb_up_the_trunks_of_trees_and/',
    text: 'Although it can climb up the trunks of trees and hammer on wood like other woodpeckers, the Northern Flicker prefers to find food on the ground. Ants are its main food, and the flicker digs in the dirt to find them. It uses its long barbed tongue to lap up the ants.',
    media: 'https://i.redd.it/d9xpgcufxqu91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Northern_flicker',
  },
  {
    animal: 'northern flicker',
    source:
      'https://reddit.com/r/Awwducational/comments/ydv3hi/like_most_woodpeckers_northern_flickers_drum_on/',
    text: 'Like most woodpeckers, Northern Flickers drum on objects as a form of communication and territory defense. In such cases, the object is to make as loud a noise as possible, and that’s why woodpeckers sometimes drum on metal objects.',
    media: 'https://i.redd.it/ri0zvopos4w91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Northern_flicker',
  },
  {
    animal: 'numbat',
    source:
      'https://reddit.com/r/Awwducational/comments/y3tnxw/the_numbat_is_a_small_marsupial_endemic_to/',
    text: 'The numbat is a small marsupial endemic to Australia. It almost exclusively eats termites, using its pointed nose to find them and long sticky tongue to extract them from narrow cavities and holes.',
    media: 'https://i.redd.it/wjkxjze4urt91.png',
    wiki: 'https://en.wikipedia.org/wiki/Numbat',
  },
  {
    animal: 'nuthatch',
    source:
      'https://reddit.com/r/Awwducational/comments/xrz2fk/all_nuthatches_are_distinctive_when_seeking_food/',
    text: 'All nuthatches are distinctive when seeking food because they are able to descend tree trunks head-first and can hang upside-down beneath twigs and branches.',
    media: 'https://v.redd.it/1dfetie8fzq91',
    wiki: 'https://en.wikipedia.org/wiki/Nuthatch',
  },
  {
    animal: 'oilbird',
    source:
      'https://reddit.com/r/Awwducational/comments/xocj4o/the_oilbird_is_unique_among_birds_since_it_is_the/',
    text: 'The Oilbird is unique among birds since it is the only nocturnal fruit-eating(oil palm) bird that navigates via echolocation. Its eyes, w/c have the max capability for light gathering of any terrestrial vertebrate,have 1M rod cells/mm2 in its retina, are another adaptation for its nighttime foraging',
    media: 'https://i.pinimg.com/originals/c0/4a/1d/c04a1da12577882fbb41cfdf9ea0a8a0.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Oilbird',
  },
  {
    animal: 'okapi',
    source:
      'https://reddit.com/r/Awwducational/comments/wt28yr/the_okapi_wasnt_taxonomically_described_until_the/',
    text: "The okapi wasn't taxonomically described until the early 1900's making this species one of the last large terrestrial mammals to be globally cherished. Although the striped markings are reminiscent of zebras, okapis are more closely related to giraffes. This okapi was filmed in the Ituri Forest.",
    media: 'https://v.redd.it/jgthlcf6vti91',
    wiki: 'https://en.wikipedia.org/wiki/Okapi',
  },
  {
    animal: 'olinguito',
    source:
      'https://reddit.com/r/Awwducational/comments/x3af6t/the_olinguito_bassaricyon_neblina_made_global/',
    text: 'The olinguito (Bassaricyon neblina) made global headlines when scientists announced its discovery in 2013, a notable event as this was the first carnivore described in the Western Hemisphere since the 1970s. It is native to the forests of Colombia and Ecuador. This is a photo of a baby olinguito.',
    media: 'https://i.redd.it/369zsw3zl9l91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Olinguito',
  },
  {
    animal: 'olive ridley sea turtle',
    source:
      'https://reddit.com/r/Awwducational/comments/y4yukk/baby_olive_ridley_sea_turtle_makes_a_break_for_it/',
    text: 'Baby Olive Ridley sea turtle makes a break for it. They are the smallest of the sea turtles and are endangered due to disappearance of their nesting sites.',
    media: 'https://v.redd.it/xykc0q4lb1u91',
    wiki: 'https://en.wikipedia.org/wiki/Olive_ridley_sea_turtle',
  },
  {
    animal: 'ostrich',
    source:
      'https://reddit.com/r/Awwducational/comments/we3dud/the_ostrich_of_which_there_are_two_living_species/',
    text: 'The ostrich, of which there are two living species (common ostrich and Somali ostrich), is the only extant bird species which has two toes on each foot. This adaptation allows ostriches, the largest and heaviest birds on the planet, to attain speeds of 40 mph over long distances.',
    media: 'https://i.redd.it/0uaq26wwk8f91.png',
    wiki: 'https://en.wikipedia.org/wiki/Ostrich',
  },
  {
    animal: 'painted bunting',
    source:
      'https://reddit.com/r/Awwducational/comments/ymrfhm/painted_buntings_are_shy_secretive_and_often/',
    text: 'Painted buntings are shy, secretive and often difficult to observe with the human eye, though can be fairly approachable where habituated to bird feeders. Males sing in spring from exposed perches to advertise their territories.',
    media: 'https://i.redd.it/2ksrhdb7c4y91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Painted_bunting',
  },
  {
    animal: "pallas's cat",
    source:
      'https://reddit.com/r/Awwducational/comments/xn87ak/a_family_of_pallass_cat_in_the_wild_the_female/',
    text: "A family of Pallas's cat\" In the wild, the female gives birth to a litter of two to six kittens between the end of April and late May. The newborn kittens' fur is fuzzy, and their eyes are closed until the age of about two weeks",
    media: 'https://gfycat.com/altruisticanotherdassie',
    wiki: 'https://en.wikipedia.org/wiki/Pallas%27s_cat',
  },
  {
    animal: "pallas's cat",
    source:
      'https://reddit.com/r/Awwducational/comments/wtkq7m/pallas_cat_females_generally_give_birth_to_a/',
    text: "Pallas cat females generally give birth to a litter of 2 to 6 kittens between the end of April and late May. The newborn kittens' fur is fuzzy, and their eyes are closed until the age of about 2 weeks. These 6 kittens were born at the Novosibirsk Zoo on 6/6/2022. They are 7 weeks old in this video.",
    media: 'https://v.redd.it/jgoyudhgeyi91',
    wiki: 'https://en.wikipedia.org/wiki/Pallas%27s_cat',
  },
  {
    animal: 'pied butterfly bat',
    source:
      'https://reddit.com/r/Awwducational/comments/xkv128/the_pied_butterfly_bat_glauconycteris_superba/',
    text: 'The pied butterfly bat (Glauconycteris superba), also known as badger bat, is a rare species of vesper bat It is found in the Democratic Republic of the Congo, Ivory Coast, Ghana, Equatorial Guinea and South Sudan. They are sadly threatened by habitat loss.',
    media: 'https://i.redd.it/xhvoicyk8dp91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Pied_butterfly_bat',
  },
  {
    animal: 'pigeon',
    source:
      'https://reddit.com/r/Awwducational/comments/xcg0i1/pigeons_are_one_of_just_3_types_of_birds_that/',
    text: 'Pigeons are one of just 3 types of birds that produce crop milk, a secretion made from food that the parent birds eat. Crop milk is produced and stored in a pouch in their throats, then regurgitated into the chicks throat. Both male and female pigeons are involved in feeding their newborn chicks.',
    media: 'https://i.redd.it/6s1qy24n6gn91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Columbidae',
  },
  {
    animal: 'pika',
    source:
      'https://reddit.com/r/Awwducational/comments/yj12d6/pika_ochotona_princeps_related_to_rabbits_not/',
    text: 'Pika (Ochotona princeps) - related to rabbits (not rodents) vocalize frequently whenever they see something out of the ordinary. It uses both call and song vocalizations. The call is used to warn other pikas of a predator or intruder, and it sounds a little like the bleat of a goat.',
    media: 'https://v.redd.it/aizuuplkbax91',
    wiki: 'https://en.wikipedia.org/wiki/Pika',
  },
  {
    animal: 'pink-eared duck',
    source:
      'https://reddit.com/r/Awwducational/comments/xjb1ga/pinkeared_ducks_native_to_australia_are/',
    text: 'Pink-eared ducks, native to Australia, are spatulate-billed waterfowl closely related to shelducks. Their bills are well designed for straining mollusks, crustaceans, insects, algae and plankton. Nesting is stimulated by the drying and filling of pools that promote the growth of their food sources.',
    media: 'https://v.redd.it/u7szq5ih21p91',
    wiki: 'https://en.wikipedia.org/wiki/Pink-eared_duck',
  },
  {
    animal: 'platypus',
    source:
      'https://reddit.com/r/Awwducational/comments/y2fkux/male_platypuses_have_spurs_on_their_hind_legs/',
    text: "Male platypuses have spurs on their hind legs connected to venom glands that produce venom during mating season (to complete with other males). While the venom isn't fatal to humans, it can cause excruciating pain and swelling that can last from days to months.",
    media: 'https://i.redd.it/7w0xxozxwft91.png',
    wiki: 'https://en.wikipedia.org/wiki/Platypus',
  },
  {
    animal: 'potoo',
    source:
      'https://reddit.com/r/Awwducational/comments/x90z6q/potoos_urutau_or_ghost_birds_are_nocturnal/',
    text: 'Potoos, urutau or ghost birds, are nocturnal insectivores. During the day they perch upright on tree stumps, camouflaged to look like part of the stump.',
    media: 'https://gfycat.com/naughtyshortalbino',
    wiki: 'https://en.wikipedia.org/wiki/Potoo',
  },
  {
    animal: "przewalski's horse",
    source:
      'https://reddit.com/r/Awwducational/comments/x01dyi/przewalskis_horses_pronounced_pshehvahlskees_are/',
    text: "Przewalski's horses (pronounced p'sheh-VAHL-skee's), are endangered horses originally native to the steppes of Central Asia. They became extinct in the wild, but they have been reintroduced to their native ranges as well as introduced to eastern Europe. This foal was born at the Whipsnade Zoo.",
    media: 'https://i.redd.it/ibhkjeednhk91.png',
    wiki: 'https://en.wikipedia.org/wiki/Przewalski%27s_horse',
  },
  {
    animal: 'punganur dwarf cattle',
    source:
      'https://reddit.com/r/Awwducational/comments/xx31fz/punganur_dwarf_cattle_which_from_the_chitoor/',
    text: "Punganur dwarf cattle which from the Chitoor District,Andhra Pradesh in southern India is among the world's smallest humped cattle breeds.This breed's milk has a high fat content. While cow milk normally has a fat content of 3 to 3.5 per cent, the Punganur breed's milk contains 8 percent.",
    media: 'https://v.redd.it/47258s2c96s91',
    wiki: 'https://en.wikipedia.org/wiki/Punganur_cattle',
  },
  {
    animal: 'purple-gold jumping spider',
    source:
      'https://reddit.com/r/Awwducational/comments/xnknfn/the_male_of_the_purplegold_jumping_spider_irura/',
    text: 'The male of the purple-gold jumping spider (Irura bidenticulata) is recognized by its striking, shiny magenta-gold patterned body. It was discovered in 2011 in southeast Asia. The purple-gold jumping spider typically measures 5–6 mm. It is not considered harmful to humans.',
    media: 'https://i.redd.it/p2q5faifmzp91.png',
    wiki: 'https://en.wikipedia.org/wiki/Irura_bidenticulata',
  },
  {
    animal: 'pygmy armadillo',
    source:
      'https://reddit.com/r/Awwducational/comments/wvy7d8/pichis_also_known_as_dwarf_armadillos_or_pygmy/',
    text: 'Pichis, also known as dwarf armadillos or pygmy armadillos, are native to Argentina, and they are the only armadillos known to hibernate. Pichis are relatively small armadillos, measuring around 27 cm (11 in) and the tail about 11 cm (4.3 in) long. A motorcyclist stops to rescue this stranded pichi.',
    media: 'https://v.redd.it/yvl4vvd5oij91',
    wiki: 'https://en.wikipedia.org/wiki/Pichi',
  },
  {
    animal: 'pygmy hippopotamus',
    source:
      'https://reddit.com/r/Awwducational/comments/z07fni/the_pygmy_hippopotamus_is_the_much_smaller/',
    text: "The Pygmy Hippopotamus is the much smaller forest-living cousin of the Common Hippo, but like their meatier counterpart they don't eat water plants and forage on land at night.",
    media: 'https://v.redd.it/tcwv55l0n41a1',
    wiki: 'https://en.wikipedia.org/wiki/Pygmy_hippopotamus',
  },
  {
    animal: 'pygmy nightjar',
    source:
      'https://reddit.com/r/Awwducational/comments/vx5wuj/rather_than_building_a_nest_the_female_pygmy/',
    text: 'Rather than building a nest, the female pygmy nightjar lays a single egg on bare ground',
    media: 'https://v.redd.it/41jl07zyh3b91',
    wiki: 'https://en.wikipedia.org/wiki/Pygmy_nightjar',
  },
  {
    animal: 'pygmy seahorse',
    source:
      'https://reddit.com/r/Awwducational/comments/xf194s/pygmy_seahorses_hippocampus_bargibanti_are_only_2/',
    text: "Pygmy seahorses (Hippocampus bargibanti) are only 2 cm long and they're remarkably good at camouflaging themselves amongst the gorgonian coral they inhabit.",
    media: 'https://i.redd.it/up36qs10v1o91.png',
    wiki: 'https://en.wikipedia.org/wiki/Pygmy_seahorse',
  },
  {
    animal: 'raccoon',
    source:
      'https://reddit.com/r/Awwducational/comments/xyr5qv/raccoons_learn_to_climb_at_about_2_months_old/',
    text: 'Raccoons learn to climb at about 2 months old. This baby decided to come down the tree on its own after watching mom drag its sibling down.',
    media: 'https://v.redd.it/1relz0cmnks91',
    wiki: 'https://en.wikipedia.org/wiki/Raccoon',
  },
  {
    animal: 'rat',
    source:
      'https://reddit.com/r/Awwducational/comments/y0copd/rats_teeth_never_stop_growing_their_entire_lives/',
    text: "Rats' teeth never stop growing their entire lives. So they need to keep them trimmed, either by chewing on things or grinding their teeth. Rats that fail keep their teeth trim may develop malocclusion. This can cause injury, make it hard for them to eat and could be life threatening.",
    media: 'https://v.redd.it/qwtde76juys91',
    wiki: 'https://en.wikipedia.org/wiki/Rat',
  },
  {
    animal: 'rat',
    source:
      'https://reddit.com/r/Awwducational/comments/xeukfl/unlike_some_pets_rats_can_safely_eat_chocolate/',
    text: 'Unlike some pets, rats can safely eat chocolate. Chocolate can reduce depression and anxiety in rats. Rats enjoy chocolate so much they can even become addicted to it. Even so, rats will forego eating chocolate to help a friend.',
    media: 'https://v.redd.it/x7czt2qq90o91',
    wiki: 'https://en.wikipedia.org/wiki/Rat',
  },
  {
    animal: 'red-eyed tree frog',
    source: 'https://a-z-animals.com/animals/red-eyed-tree-frog/',
    text: 'Despite their spectacular coloration, red-eyed tree frogs aren’t poisonous and can be kept as pets.',
    media: 'https://www.youtube.com/watch?v=R-FN3D9xERw&ab_channel=3MinutesNature',
    wiki: 'https://en.wikipedia.org/wiki/Agalychnis_callidryas',
  },
  {
    animal: 'red-tailed comet',
    source:
      'https://reddit.com/r/Awwducational/comments/xr305q/the_redtailed_comet_sappho_sparganurus_is_a/',
    text: 'The red-tailed comet (Sappho sparganurus) is a hummingbird native to Bolivia, Argentina, Chile and Peru. The male has an iridescent, golden-reddish forked tail, longer than the length of its body. This red-tailed comet stops by the home of someone watering their flowers with a hose and takes a bath.',
    media: 'https://v.redd.it/3qo44i2vlrq91',
    wiki: 'https://en.wikipedia.org/wiki/Red-tailed_comet',
  },
  {
    animal: 'reindeer',
    source:
      'https://reddit.com/r/Awwducational/comments/xfcxkj/reindeer_have_a_formidable_defense_strategy_when/',
    text: 'Reindeer have a formidable defense strategy when faced with a perceived threat. They will sometimes form "cyclones" as the herd begins walking together in a tight-knit circular fashion to deter any predator that may come near. This behavior is also practiced by reindeer kept in corrals.',
    media: 'https://v.redd.it/8k72wap0b4o91',
    wiki: 'https://en.wikipedia.org/wiki/Reindeer',
  },
  {
    animal: 'resplendent quetzal',
    source:
      'https://reddit.com/r/Awwducational/comments/ylgg5j/the_resplendent_quetzal_is_a_sacred_symbol_in/',
    text: 'The resplendent quetzal is a sacred symbol in Mesoamerica and Guatemala\'s national bird, pictured on the country\'s flag. They favor eating fruit in the avocado family, eating them whole before regurgitating the pits. Essentially making them the avocado "gardeners" of their forest habitats.',
    media: 'https://i.redd.it/lro4zsz3rux91.png',
    wiki: 'https://en.wikipedia.org/wiki/Resplendent_quetzal',
  },
  {
    animal: 'ribbon eel',
    source:
      'https://reddit.com/r/Awwducational/comments/xith1a/the_ribbon_eel_is_a_species_of_moray_eel_whose/',
    text: 'The ribbon eel is a species of moray eel whose coloration depends on developmental stage and gender. Juveniles are jet black with a yellow dorsal fin, adult females are yellow and blue, and adult males are blue to black in coloration. It can grow to 1.3 m (51 in) in length and live up to 20 years.',
    media: 'https://i.redd.it/3wpumnganwo91.gif',
    wiki: 'https://en.wikipedia.org/wiki/Ribbon_eel',
  },
  {
    animal: 'ring-tailed vontsira',
    source:
      'https://reddit.com/r/Awwducational/comments/x45ehh/the_ringtailed_vontsira_native_to_the_forests_of/',
    text: "The ring-tailed vontsira, native to the forests of Madagascar, has a bushy tail covered with black and red rings which is rather close in appearance to that of the red panda. It is locally known as the ring-tailed mongoose. The vontsira's classification among carnivores is still a matter of debate.",
    media: 'https://v.redd.it/xao32o7zygl91',
    wiki: 'https://en.wikipedia.org/wiki/Ring-tailed_vontsira',
  },
  {
    animal: 'rock hyrax',
    source:
      'https://reddit.com/r/Awwducational/comments/x4vroy/dassies_also_known_as_rock_hyraxes_are/',
    text: "Dassies, also known as rock hyraxes, are herbivorous mammals native to Africa and the Middle East. They are considered among the elephant's closest living relatives despite the size difference. Dassies bask in the sun on large rocks, particularly during mornings and late afternoons, to absorb heat.",
    media: 'https://v.redd.it/uoc4v3rtlnl91',
    wiki: 'https://en.wikipedia.org/wiki/Rock_hyrax',
  },
  {
    animal: 'royal spoonbill',
    source:
      'https://reddit.com/r/Awwducational/comments/xcclk6/royal_spoonbills_native_to_oceania_inhabit/',
    text: 'Royal spoonbills, native to Oceania, inhabit wetlands feeding on crustaceans, fish and small insects as they sweep their bills from side to side. When they are breeding, long white plumes grow from the back of the head and colored patches appear on the face. Clutch sizes are usually 2 to 3 eggs.',
    media: 'https://i.redd.it/ireomljeffn91.png',
    wiki: 'https://en.wikipedia.org/wiki/Royal_spoonbill',
  },
  {
    animal: 'ruby-crowned kinglet',
    source:
      'https://reddit.com/r/Awwducational/comments/y79o7l/rubycrowned_kinglets_are_tiny_frenetic_bird_that/',
    text: 'Ruby-crowned kinglets are tiny frenetic bird that constantly flit around but they only spend 10 calories per day',
    media: 'https://i.imgur.com/yIdsedU.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Ruby-crowned_kinglet',
  },
  {
    animal: 'sand bubbler crab',
    source:
      'https://reddit.com/r/Awwducational/comments/x0m38z/sand_bubbler_crabs_live_on_sandy_beaches_in_the/',
    text: "Sand bubbler crabs live on sandy beaches in the tropical Indo-Pacific. They feed on tiny marine creatures by filtering sand through their mouthparts. They leave behind small balls of sand in geometric patterns on the beach. They are often called nature's sand artists. Ze Frank narrates this video.",
    media: 'https://v.redd.it/6aujay9eymk91',
    wiki: 'https://en.wikipedia.org/wiki/Sand_bubbler_crab',
  },
  {
    animal: 'sandgrouse',
    source:
      'https://reddit.com/r/Awwducational/comments/xk3du3/newborn_sandgrouse_chicks_are_covered_with_thick/',
    text: 'Newborn sandgrouse chicks are covered with thick, highly-camouflaged down that matches their surroundings and leave the nest soon after hatching. Since they are precocial, the parents do not provide them with any food, however, the chicks learn, with parental guidance, what is and is not edible.',
    media: 'https://i.redd.it/4dqzdijbd7p91.png',
    wiki: 'https://en.wikipedia.org/wiki/Sandgrouse',
  },
  {
    animal: 'sandgrouse',
    source:
      'https://reddit.com/r/Awwducational/comments/xgjoeb/to_satisfy_the_thirst_of_newly_hatched_chicks/',
    text: 'To satisfy the thirst of newly hatched chicks, male sandgrouse collect and bring water back to the nest by carrying it soaked in their feathers. The chicks then "milk" their father\'s belly feathers to rehydrate. A male Burchell\'s sandgrouse is seen here collecting water from a puddle for his young.',
    media: 'https://i.redd.it/digyhnppgeo91.png',
    wiki: 'https://en.wikipedia.org/wiki/Sandgrouse',
  },
  {
    animal: 'sea butterfly',
    source:
      'https://reddit.com/r/Awwducational/comments/yki0rh/sea_butterflies_are_small_rarely_larger_than_1_cm/',
    text: "Sea butterflies are small (rarely larger than 1 cm) swimming sea snails. They have lobes that act as tiny wing-like arms, which let them maneuver through the water as well as calcified transparent shells of varying shapes. Sea angels are swimming sea snails that don't have a shell.",
    media: 'https://i.redd.it/9qdwqcmpcnx91.png',
    wiki: 'https://en.wikipedia.org/wiki/Sea_butterfly',
  },
  {
    animal: 'sea otter',
    source:
      'https://reddit.com/r/Awwducational/comments/vqb5gi/sea_otters_are_the_only_marine_mammal_to_use/',
    text: 'Sea otters are the only marine mammal to use stone tools. Even in captivity, they have shown this behavior',
    media: 'https://v.redd.it/h8hq6wtpoa991',
    wiki: 'https://en.wikipedia.org/wiki/Sea_otter',
  },
  {
    animal: 'sea squirt',
    source:
      'https://reddit.com/r/Awwducational/comments/vmsptm/sea_squirts_one_of_the_few_invertebrate_chordates/',
    text: 'Sea squirts! One of the few invertebrate chordates. When they’re young, they have a backbone (notochord) and a brain, but they lose them at maturity',
    media: 'https://i.redd.it/20px9lffde891.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Ascidiacea',
  },
  {
    animal: 'sea turtle',
    source:
      'https://reddit.com/r/Awwducational/comments/w583m4/sea_turtle_hatchlings_are_attracted_to_bright/',
    text: 'Sea turtle hatchlings are attracted to bright lights. Normally the ocean’s reflective surface is sufficiently bright enough, but hatchlings are often led astray by the light pollution from human structures.',
    media: 'https://v.redd.it/22zk5u4pa5d91',
    wiki: 'https://en.wikipedia.org/wiki/Sea_turtle',
  },
  {
    animal: 'seneca white deer',
    source:
      'https://reddit.com/r/Awwducational/comments/xop07o/seneca_white_deer_as_they_are_locally_called_live/',
    text: 'Seneca white deer, as they are locally called, live in 43 square km preserve, a former army depot, in Seneca County, NY. They are leucistic white-tailed deer, and their population consists of 700 members, approximately 300 of which are white, making it the largest herd of white deer in the world.',
    media: 'https://v.redd.it/ratr94xjh8q91',
    wiki: 'https://en.wikipedia.org/wiki/Seneca_white_deer',
  },
  {
    animal: 'serval',
    source:
      'https://reddit.com/r/Awwducational/comments/xsan5a/the_serval_has_the_longest_legs_and_largest_ears/',
    text: 'The serval has the longest legs and largest ears of any cat relative to its body size. Its rather elongated neck gives it the nickname "giraffe cat." Native to Africa, the serval\'s closest relatives are the African golden cat and the caracal, all of which can jump quite high to catch overhead prey.',
    media: 'https://i.redd.it/yspq0vaes1r91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Serval',
  },
  {
    animal: 'shiny cowbird',
    source:
      'https://reddit.com/r/Awwducational/comments/xj4qse/the_shiny_cowbird_is_a_yearround_resident_across/',
    text: 'The shiny cowbird is a year-round resident across most of South America, where it lives in open areas such as open forests and cultivated land. Within the last century, the range of the species has shifted northward, and birds have been recorded in the West Indies and southern Florida.',
    media: 'https://i.redd.it/42pbfc6xmzo91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Shiny_cowbird',
  },
  {
    animal: 'short-beaked echidna',
    source:
      'https://reddit.com/r/Awwducational/comments/xstbmr/the_shortbeaked_echidna_has_the_largest/',
    text: 'The short-beaked echidna has the largest prefrontal cortex relative to body size of any mammal, taking up 50% of cortex volume in comparison to 29% for humans. Based on studies, scientists have concluded its learning ability is similar to that of a cat or a rat. This echidna is searching for ants.',
    media: 'https://v.redd.it/am71f296n6r91',
    wiki: 'https://en.wikipedia.org/wiki/Short-beaked_echidna',
  },
  {
    animal: 'short-eared owl',
    source:
      'https://reddit.com/r/Awwducational/comments/xsfzr7/shorteared_owls_are_one_of_the_most_widely/',
    text: 'Short-eared owls are one of the most widely distributed species of owl in the world. They are found on every continent except Australia and Antarctica and primarily eat small mammals like mice and voles (OC)',
    media: 'https://i.redd.it/1hph7nbnz2r91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Short-eared_owl',
  },
  {
    animal: 'silky anteater',
    source:
      'https://reddit.com/r/Awwducational/comments/x8hx1x/silky_anteaters_are_the_smallest_known_anteaters/',
    text: 'Silky anteaters are the smallest known anteaters, and they also go by the name pygmy anteaters. Found in Mexico, Central America and South America, they defend themselves by standing on their hind legs holding their claws up ready to strike at any assailant. This wild anteater is searching for ants.',
    media: 'https://v.redd.it/w44j1k5mcim91',
    wiki: 'https://en.wikipedia.org/wiki/Silky_anteater',
  },
  {
    animal: 'silvery marmoset',
    source:
      'https://reddit.com/r/Awwducational/comments/xoticy/the_silvery_marmoset_is_a_new_world_monkey_that/',
    text: 'The silvery marmoset is a New World monkey that lives in the eastern Amazon Rainforest in Brazil. The fur of the silvery marmoset is colored whitish silver-grey except for a dark tail. its naked flesh-colored ears stand out from the fur as well.',
    media: 'https://i.redd.it/mm9xqc3ta9q91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Silvery_marmoset',
  },
  {
    animal: "skilton's skink",
    source:
      'https://reddit.com/r/Awwducational/comments/whomab/skiltons_skink_a_subspecies_of_the_western_skink/',
    text: "Skilton's skink, a subspecies of the western skink, is native to the US west of the Rocky Mountains as well as to southern British Columbia, Canada. These skinks possess bright blue tails as juveniles, but the color fades to gray into adulthood. Skinks will often regrow a tail if it breaks off.",
    media: 'https://v.redd.it/jrguec97j3g91',
    wiki: 'https://en.wikipedia.org/wiki/Western_skink',
  },
  {
    animal: 'sloth bear',
    source:
      'https://reddit.com/r/Awwducational/comments/y6didn/sloth_bears_carry_their_young_on_their_back_for/',
    text: 'Sloth Bears carry their young on their back for the first 7 to 9 months of their lives, and are the only bear species which regularly transports their cubs on their backs. (Photo Credit: Chetan Aand - Instagram)',
    media: 'https://i.redd.it/gffp2yf9sdu91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Sloth_bear',
  },
  {
    animal: 'slow loris',
    source:
      'https://reddit.com/r/Awwducational/comments/yth3x0/the_slow_loris_is_the_only_known_venomous_primate/',
    text: 'The slow loris is the only known venomous primate. When threatened, it lifts its arm over its head to lick glands close to its armpits which secret a noxious oil. The mix of saliva and oil produces a venomous solution, giving them a bite that can cause anaphylactic shock and death in humans.',
    media: 'https://i.redd.it/uml9is0ocmz91.png',
    wiki: 'https://en.wikipedia.org/wiki/Slow_loris',
  },
  {
    animal: 'smallspine spookfish',
    source:
      'https://reddit.com/r/Awwducational/comments/yo2m8q/very_little_is_known_about_the_smallspine/',
    text: 'Very little is known about the smallspine spookfish (Harriotta haeckeli). It stands out as a surprisingly cute creature among its companions in the deep ocean, found as deep as 2,600 metres (over 8,500 feet). It rarely grows larger than 70 cm and has a venomous spine for defense.',
    media: 'https://i.redd.it/h4e9ebzurfy91.gif',
    wiki: 'https://en.wikipedia.org/wiki/Smallspine_spookfish',
  },
  {
    animal: 'snake',
    source:
      'https://reddit.com/r/Awwducational/comments/ylnldg/snakes_do_not_have_the_right_kind_of_teeth_to/',
    text: 'Snakes do not have the right kind of teeth to chew their food so they must eat their food whole. The jaws of snakes are not fused to the skull, so the lower jaw can separate from the upper jaw. This allows their mouths to open wider than their own bodies in order to swallow their prey whole.',
    media: 'https://v.redd.it/8rybi85isux91',
    wiki: 'https://en.wikipedia.org/wiki/Snake',
  },
  {
    animal: 'snow leopard',
    source:
      'https://reddit.com/r/Awwducational/comments/wyfndr/snow_leopards_are_recognized_by_their_thick/',
    text: 'Snow leopards are recognized by their thick white-gray coat spotted with large black rosettes which blend in perfectly with Asia’s steep and rocky, high mountains, hence their nickname "ghosts of the mountains". This mother snow leopard gave birth to three cubs (2 boys, 1 girl) at the Basel Zoo.',
    media: 'https://v.redd.it/41thr5ssi3k91',
    wiki: 'https://en.wikipedia.org/wiki/Snow_leopard',
  },
  {
    animal: 'snowshoe hare',
    source:
      'https://reddit.com/r/Awwducational/comments/x8yj3j/the_snowshoe_hare_is_cocalled_because_of_the/',
    text: 'The snowshoe hare is so-called because of the large size of its hind feet which prevents it from sinking into the snow. Its feet also have a layer of fur on the soles to protect from frostbite. During the summer, these hares are rusty brown but as winter approaches, they take on a white pelage.',
    media: 'https://v.redd.it/o7c71xkzimm91',
    wiki: 'https://en.wikipedia.org/wiki/Snowshoe_hare',
  },
  {
    animal: 'south american tapir',
    source:
      'https://reddit.com/r/Awwducational/comments/wkjwyr/the_south_american_tapir_is_the_largest_native/',
    text: 'The South American tapir is the largest native terrestrial mammal in the Amazon (reportedly up to 320kg/710lb), and it is one of four recognized tapir species in the world. It is also called the Brazilian, Amazonian, maned and lowland tapir. This baby tapir was born at a safari park in Israel.',
    media: 'https://v.redd.it/udi2hv0x8sg91',
    wiki: 'https://en.wikipedia.org/wiki/South_American_tapir',
  },
  {
    animal: 'southern three-banded armadillo',
    source:
      'https://reddit.com/r/Awwducational/comments/yd96as/southern_threebanded_armadillos_are_the_only/',
    text: 'Southern three-banded armadillos are the only species of armadillo that can curl up into a ball',
    media: 'https://i.redd.it/oquo8a6obzv91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Southern_three-banded_armadillo',
  },
  {
    animal: 'stingray',
    source:
      'https://reddit.com/r/Awwducational/comments/wh0o3q/stingrays_date_back_on_the_fossil_record_to_the/',
    text: 'Stingrays date back on the fossil record to the Jurassic period, 150 million years ago.',
    media: 'https://i.redd.it/uxf9iyhcfxf91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Stingray',
  },
  {
    animal: 'strawberry squid',
    source:
      'https://reddit.com/r/Awwducational/comments/x6jdas/the_strawberry_squid_gets_its_name_from_its/',
    text: 'The strawberry squid gets its name from its sparkling red body dotted by tiny bioluminescent photophores. It spends daytime hiding from predators in the dark ocean depths and comes closer to the surface at night, feeling safer under cover of darkness, to feed on fish, crustaceans and smaller squid.',
    media: 'https://i.redd.it/qyqowz2a72m91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Histioteuthis_heteropsis',
  },
  {
    animal: 'sulcata tortoise',
    source:
      'https://reddit.com/r/Awwducational/comments/xhhd9b/the_sulcata_tortoise_centrochelys_sulcata_also/',
    text: 'The sulcata tortoise (Centrochelys sulcata), also called the African spurred tortoise, inhabits the southern edge of the Sahara desert in Africa. It is the third largest species in the world after the Galapagos tortoise and Aldabra giant tortoise. This is a young albino sulcata tortoise.',
    media: 'https://i.redd.it/6roq33d7imo91.png',
    wiki: 'https://en.wikipedia.org/wiki/African_spurred_tortoise',
  },
  {
    animal: 'tapir',
    source:
      'https://reddit.com/r/Awwducational/comments/ybrzof/baby_tapirs_are_born_covered_in_black_yellow_and/',
    text: 'Baby tapirs are born covered in black, yellow and white strips and spots, which serves as camouflage against predation during these vulnerable first few months. These stripes and spots slowly fade and are completely gone within five to six months.',
    media: 'https://v.redd.it/qf28nly47mv91',
    wiki: 'https://en.wikipedia.org/wiki/Tapir',
  },
  {
    animal: 'tardigrade',
    source:
      'https://reddit.com/r/Awwducational/comments/xb8478/these_are_tardigrades_they_are_microscopic/',
    text: 'These are Tardigrades, they are microscopic eight-legged animals that have been to outer space and would likely survive the apocalypse. They also look like little bears, hence the name; Water Bear.',
    media: 'https://i.redd.it/stosof9eg5n91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Tardigrade',
  },
  {
    animal: 'tarsier',
    source:
      'https://reddit.com/r/Awwducational/comments/y5qngp/tarsiers_are_some_of_the_smallest_species_of/',
    text: 'Tarsiers are some of the smallest species of primate and have the largest eyes in relation to their body size of any mammal. They are also the only fully carnivorous primate; insects make up most of their diet.',
    media: 'https://i.redd.it/o7r90gi078u91.png',
    wiki: 'https://en.wikipedia.org/wiki/Tarsier',
  },
  {
    animal: 'tawny frogmouth',
    source:
      'https://reddit.com/r/Awwducational/comments/ye7poz/tawny_frogmouths_are_masters_of_camouflage_using/',
    text: 'Tawny frogmouths are masters of camouflage, using their plumage to stay hidden in trees during the day. They will also emulate broken tree branches by sticking their necks out, closing their eyes, and remaining perfectly still. They may look like grumpy owls but are actually related to nightjars.',
    media: 'https://i.redd.it/9z6e67wh19w91.png',
    wiki: 'https://en.wikipedia.org/wiki/Tawny_frogmouth',
  },
  {
    animal: 'thorny devil',
    source:
      'https://reddit.com/r/Awwducational/comments/yn4jy6/thorny_devils_have_tiny_microchannels_between/',
    text: "Thorny devils have tiny micro-channels between their scales in which water collects, from rain or dew, and is then directed towards their mouths for drinking. They also have a 'false head' on their necks that they will present to predators, that can be bitten off and regrown.",
    media: 'https://i.redd.it/qx3rg5xgc8y91.png',
    wiki: 'https://en.wikipedia.org/wiki/Thorny_devil',
  },
  {
    animal: 'three-toed sloth',
    source:
      'https://reddit.com/r/Awwducational/comments/y1kss1/the_threetoed_sloth_will_expend_valuable_energy/',
    text: 'The three-toed sloth will expend valuable energy and put itself in immense danger once a week to poop. It will crawl down from its tree, often dig a hole, and then defecate inside. While on the ground, it is extremely vulnerable to predation.',
    media: 'https://i.redd.it/16ul0729u8t91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Three-toed_sloth',
  },
  {
    animal: 'townsend’s warbler',
    source:
      'https://reddit.com/r/Awwducational/comments/z0vuja/townsends_warbler_forage_actively_in_the_higher/',
    text: 'Townsend’s warbler forage actively in the higher branches, often gleaning insects from foliage and sometimes hovering or catching insects in flight. They mainly eat insects and spiders and seeds.',
    media: 'https://i.redd.it/g3gke4bbrb1a1.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Townsend%27s_warbler',
  },
  {
    animal: 'tree kangaroo',
    source:
      'https://reddit.com/r/Awwducational/comments/xrao5s/treekangaroos_are_marsupials_of_the_genus/',
    text: 'Tree-kangaroos are marsupials of the genus Dendrolagus, adapted for arboreal locomotion. They inhabit the tropical rainforests of New Guinea and far northeastern Queensland, along with some of the islands in the region. All tree-kangaroos are considered threatened due to hunting,habitat destruction.',
    media: 'https://v.redd.it/ov3okc6sftq91',
    wiki: 'https://en.wikipedia.org/wiki/Tree-kangaroo',
  },
  {
    animal: 'tufted titmouse',
    source:
      'https://reddit.com/r/Awwducational/comments/xuk0zw/the_tufted_titmouse_gathers_food_from_the_ground/',
    text: 'The tufted titmouse gathers food from the ground and from tree branches, frequently consuming a variety of berries, nuts, seeds, small fruits, insects, and other invertebrates.',
    media: 'https://i.redd.it/kw2kz83kilr91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Tufted_titmouse',
  },
  {
    animal: 'tufted titmouse',
    source:
      'https://reddit.com/r/Awwducational/comments/xxwluj/tufted_titmice_hoard_food_in_fall_and_winter_a/',
    text: 'Tufted Titmice hoard food in fall and winter, a behavior they share with many of their relatives, including the chickadees and tits. Titmice take advantage of a bird feeder’s bounty by storing many of the seeds they get. Usually, the storage sites are within 130 feet of the feeder.',
    media: 'https://v.redd.it/ri7g8wdccds91',
    wiki: 'https://en.wikipedia.org/wiki/Tufted_titmouse',
  },
  {
    animal: 'turtle',
    source:
      'https://reddit.com/r/Awwducational/comments/yhfr2z/some_turtles_can_swim_backwards_this_one_just_saw/',
    text: 'Some turtles can swim backwards. This one just saw a couple Manatees pass beneath it.',
    media: 'https://v.redd.it/y29pww9feyw91',
    wiki: 'https://en.wikipedia.org/wiki/Turtle',
  },
  {
    animal: 'two-toed sloth',
    source:
      'https://reddit.com/r/Awwducational/comments/y7d47y/twotoed_sloths_unlike_most_mammals_have_hair_that/',
    text: 'Two-toed sloths, unlike most mammals, have hair that grows from their belly to their back, which allows rain to run off of them while they hang in trees.',
    media: 'https://i.redd.it/6ktik2v5mlu91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Two-toed_sloth',
  },
  {
    animal: "wallace's flying frog",
    source:
      'https://reddit.com/r/Awwducational/comments/ywt2jz/wallaces_flying_frog_also_known_as_the_gliding/',
    text: "Wallace's flying frog, also known as the gliding frog, has adapted membranes between its long toes. It uses these membranes, by splaying out its toes, to glide from tree to tree or to the ground - sometimes covering distances of 50 feet (over 15 metres) or more.",
    media: 'https://i.redd.it/pirvvz3buc0a1.png',
    wiki: 'https://en.wikipedia.org/wiki/Wallace%27s_flying_frog',
  },
  {
    animal: 'water anole',
    source:
      'https://reddit.com/r/Awwducational/comments/xy1dmq/the_water_anole_is_unique_in_that_it_is_able_to/',
    text: 'The water anole is unique in that it is able to stay underwater for long periods of time - a behavior that is described as “scuba diving.” Experiments have confirmed that this species has the ability to remain underwater for up to 16 minutes',
    media: 'https://v.redd.it/zcfhhzvnees91',
    wiki: 'https://en.wikipedia.org/wiki/Anolis_aquaticus',
  },
  {
    animal: 'western jackdaw',
    source:
      'https://reddit.com/r/Awwducational/comments/ya0apb/the_western_jackdaw_tends_to_feed_on_small/',
    text: 'The western jackdaw tends to feed on small invertebrates up to 18 millimetres (0.71 in) in length that are found above ground, including various species of beetle (particularly cockchafers of the genus Melolontha, and weevil larvae and pupae. Diptera, and Lepidoptera species, snails and spiders.',
    media: 'https://v.redd.it/gbm6svb487v91',
    wiki: 'https://en.wikipedia.org/wiki/Western_jackdaw',
  },
  {
    animal: 'wolverine',
    source:
      'https://reddit.com/r/Awwducational/comments/xsd807/the_wolverine_a_relative_of_the_mink_and_weasel/',
    text: 'The wolverine, a relative of the mink and weasel, is the largest terrestrial member of the family Mustelidae. Its scientific name is Gulo gulo, meaning “glutton it’s also known as carcajou, or quickhatch.',
    media: 'https://i.redd.it/916ker72e2r91.jpg',
    wiki: 'https://en.wikipedia.org/wiki/Wolverine',
  },
  {
    animal: 'woylies',
    source:
      'https://reddit.com/r/Awwducational/comments/xet6oh/woylies_or_brushtailed_bettongs_are_small/',
    text: 'Woylies or brush-tailed bettongs are small, critically endangered, bipedal marsupials native to the shrubland of Australia. They mainly eat the fruiting bodies of underground fungi - not a problem for woylies as they are prodigious diggers. This woylie, appropriately named Truffles, is 7 months old.',
    media: 'https://v.redd.it/klsgo8t610o91',
    wiki: 'https://en.wikipedia.org/wiki/Woylie',
  },
  {
    animal: 'xoloitzcuintle',
    source:
      'https://reddit.com/r/Awwducational/comments/wwwk4a/the_xoloitzcuintle_pronounced_showlowitzqueently/',
    text: 'The Xoloitzcuintle (pronounced "show-low-itz-QUEENT-ly") is one of several breeds of hairless dog originating from Mexico. Called Xolo for short, the breed is characterized by its sleek body, almond-shaped eyes, large bat-like ears and long neck.',
    media: 'https://i.redd.it/1xv480coiqj91.png',
    wiki: 'https://en.wikipedia.org/wiki/Xoloitzcuintle',
  },
];

export default sampleFacts;
