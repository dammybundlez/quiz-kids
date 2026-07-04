import type { Question, Difficulty } from '../types';

let idCounter = 3000;

function getId(): string {
  return `g${idCounter++}`;
}

type QDef = {
  q: string;
  opts: string[];
  correct: number;
  exp?: string;
};

const easy: QDef[] = [
  { q: 'What is the color of the sky on a clear day?', opts: ['Blue', 'Red', 'Green', 'Yellow'], correct: 0 },
  { q: 'How many days are in a week?', opts: ['5', '6', '7', '8'], correct: 2 },
  { q: 'What is the largest ocean in the world?', opts: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correct: 3, exp: 'The Pacific Ocean is the largest and deepest ocean on Earth.' },
  { q: 'Which animal is known as the "King of the Jungle"?', opts: ['Tiger', 'Lion', 'Elephant', 'Giraffe'], correct: 1 },
  { q: 'What is the name of the planet we live on?', opts: ['Mars', 'Venus', 'Earth', 'Jupiter'], correct: 2 },
  { q: 'How many legs does a dog have?', opts: ['2', '4', '6', '8'], correct: 1 },
  { q: 'Which fruit is known as the "King of Fruits"?', opts: ['Apple', 'Banana', 'Mango', 'Orange'], correct: 2 },
  { q: 'What is the opposite of day?', opts: ['Night', 'Morning', 'Evening', 'Noon'], correct: 0 },
  { q: 'How many fingers do you have on one hand?', opts: ['3', '4', '5', '6'], correct: 2 },
  { q: 'What color are bananas when they are ripe?', opts: ['Green', 'Yellow', 'Red', 'Blue'], correct: 1 },
  { q: 'Which month comes after June?', opts: ['May', 'July', 'August', 'September'], correct: 1 },
  { q: 'What is the name of the toy cowboy in Toy Story?', opts: ['Buzz', 'Woody', 'Rex', 'Jessie'], correct: 1 },
  { q: 'What do bees make?', opts: ['Milk', 'Honey', 'Butter', 'Cheese'], correct: 1 },
  { q: 'Which animal has a long trunk?', opts: ['Dog', 'Cat', 'Elephant', 'Rabbit'], correct: 2 },
  { q: 'What shape is a ball?', opts: ['Square', 'Circle', 'Triangle', 'Star'], correct: 1 },
  { q: 'How many colors are in a rainbow?', opts: ['5', '6', '7', '8'], correct: 2 },
  { q: 'Which season comes after winter?', opts: ['Spring', 'Summer', 'Fall', 'Monsoon'], correct: 0 },
  { q: 'What do you use to cut paper?', opts: ['Pen', 'Scissors', 'Glue', 'Ruler'], correct: 1 },
  { q: 'What is the name of Mickey Mouse\'s dog?', opts: ['Goofy', 'Pluto', 'Donald', 'Daisy'], correct: 1 },
  { q: 'How many eyes do most humans have?', opts: ['1', '2', '3', '4'], correct: 1 },
  { q: 'Which vehicle flies in the sky?', opts: ['Car', 'Boat', 'Airplane', 'Train'], correct: 2 },
  { q: 'What do plants need to grow?', opts: ['Water', 'Sand', 'Stones', 'Glass'], correct: 0 },
  { q: 'What is the first day of the week?', opts: ['Monday', 'Sunday', 'Tuesday', 'Wednesday'], correct: 1 },
  { q: 'Which animal says "Moo"?', opts: ['Sheep', 'Cow', 'Pig', 'Horse'], correct: 1 },
  { q: 'What do you wear on your feet?', opts: ['Hat', 'Gloves', 'Shoes', 'Scarf'], correct: 2 },
  { q: 'Which is the smallest bird?', opts: ['Eagle', 'Hummingbird', 'Sparrow', 'Robin'], correct: 1 },
  { q: 'What is the name of the red Power Ranger?', opts: ['Jason', 'Tommy', 'Zack', 'Billy'], correct: 0 },
  { q: 'What do you call a baby cat?', opts: ['Puppy', 'Kitten', 'Cub', 'Foal'], correct: 1 },
  { q: 'How many months are in a year?', opts: ['10', '11', '12', '13'], correct: 2 },
  { q: 'Which instrument has black and white keys?', opts: ['Guitar', 'Drum', 'Piano', 'Violin'], correct: 2 },
  { q: 'What is the name of the yellow bird in Angry Birds?', opts: ['Red', 'Chuck', 'Bomb', 'Matilda'], correct: 1 },
  { q: 'What do you drink that comes from a cow?', opts: ['Water', 'Milk', 'Juice', 'Tea'], correct: 1 },
  { q: 'Which ocean is the smallest?', opts: ['Pacific', 'Atlantic', 'Indian', 'Arctic'], correct: 3 },
  { q: 'What is the name of the fairy in Peter Pan?', opts: ['Cinderella', 'Tinker Bell', 'Aurora', 'Belle'], correct: 1 },
  { q: 'How many sides does a triangle have?', opts: ['2', '3', '4', '5'], correct: 1 },
  { q: 'Which animal can change its color?', opts: ['Lizard', 'Chameleon', 'Snake', 'Turtle'], correct: 1 },
  { q: 'What do you use to brush your teeth?', opts: ['Comb', 'Toothbrush', 'Towel', 'Soap'], correct: 1 },
  { q: 'Which holiday do you get presents?', opts: ['Easter', 'Christmas', 'Halloween', 'Thanksgiving'], correct: 1 },
  { q: 'What is the name of the clownfish in Finding Nemo?', opts: ['Dory', 'Nemo', 'Marlin', 'Bruce'], correct: 1 },
  { q: 'How many wheels does a bicycle have?', opts: ['1', '2', '3', '4'], correct: 1 },
  { q: 'Which country is famous for the Great Wall?', opts: ['India', 'China', 'Japan', 'Egypt'], correct: 1 },
  { q: 'What do you call the king of a chess game?', opts: ['Pawn', 'King', 'Queen', 'Rook'], correct: 1 },
  { q: 'Which planet is known as the Red Planet?', opts: ['Venus', 'Mars', 'Jupiter', 'Saturn'], correct: 1 },
  { q: 'What is the capital of France?', opts: ['London', 'Berlin', 'Paris', 'Madrid'], correct: 2 },
  { q: 'Which animal is the fastest on land?', opts: ['Horse', 'Lion', 'Cheetah', 'Deer'], correct: 2 },
  { q: 'What do you call a group of fish?', opts: ['Flock', 'Herd', 'School', 'Pack'], correct: 2 },
  { q: 'Which fruit is round and red?', opts: ['Apple', 'Banana', 'Orange', 'Grapes'], correct: 0 },
  { q: 'What do you use to tell time?', opts: ['Clock', 'Book', 'Phone', 'Map'], correct: 0 },
  { q: 'Which animal lives in a hive?', opts: ['Ant', 'Bee', 'Spider', 'Butterfly'], correct: 1 },
  { q: 'What is the name of the snowman in Frozen?', opts: ['Olaf', 'Sven', 'Kristoff', 'Hans'], correct: 0 },
  { q: 'How many continents are there?', opts: ['5', '6', '7', '8'], correct: 2 },
  { q: 'Which sport uses a bat and ball?', opts: ['Soccer', 'Tennis', 'Baseball', 'Swimming'], correct: 2 },
  { q: 'What color is a polar bear\'s skin?', opts: ['White', 'Black', 'Pink', 'Gray'], correct: 1, exp: 'Polar bears have black skin under their white fur to absorb heat!' },
  { q: 'What do you call a house made of ice?', opts: ['Tent', 'Igloo', 'Cabin', 'Hut'], correct: 1 },
  { q: 'Which month has 28 or 29 days?', opts: ['January', 'February', 'March', 'April'], correct: 1 },
  { q: 'What is the name of the rabbit in Winnie the Pooh?', opts: ['Eeyore', 'Piglet', 'Rabbit', 'Tigger'], correct: 2 },
  { q: 'Which instrument do you blow into?', opts: ['Flute', 'Guitar', 'Drums', 'Piano'], correct: 0 },
  { q: 'What do you wear on your head?', opts: ['Shoes', 'Socks', 'Hat', 'Gloves'], correct: 2 },
  { q: 'Which animal says "Roar"?', opts: ['Lion', 'Cat', 'Dog', 'Bird'], correct: 0 },
  { q: 'What is the biggest animal on Earth?', opts: ['Elephant', 'Blue whale', 'Giraffe', 'Hippopotamus'], correct: 1 },
];

const medium: QDef[] = [
  { q: 'What is the capital of Japan?', opts: ['Seoul', 'Tokyo', 'Beijing', 'Bangkok'], correct: 1 },
  { q: 'How many bones does an adult human have?', opts: ['106', '206', '306', '406'], correct: 1 },
  { q: 'Which country has the largest population?', opts: ['USA', 'India', 'China', 'Indonesia'], correct: 1, exp: 'India recently surpassed China as the most populous country.' },
  { q: 'What is the tallest mountain in the world?', opts: ['K2', 'Mount Everest', 'Kilimanjaro', 'Denali'], correct: 1 },
  { q: 'Which animal is the largest mammal?', opts: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'], correct: 1 },
  { q: 'What is the longest river in the world?', opts: ['Amazon', 'Nile', 'Mississippi', 'Yangtze'], correct: 1 },
  { q: 'How many planets are in our solar system?', opts: ['7', '8', '9', '10'], correct: 1 },
  { q: 'Which country is known as the "Land of the Rising Sun"?', opts: ['China', 'Korea', 'Japan', 'Thailand'], correct: 2 },
  { q: 'What is the largest continent?', opts: ['Africa', 'Asia', 'Europe', 'North America'], correct: 1 },
  { q: 'Which ocean is between Africa and Australia?', opts: ['Atlantic', 'Pacific', 'Indian', 'Arctic'], correct: 2 },
  { q: 'What is the smallest country in the world?', opts: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'], correct: 2 },
  { q: 'How many teeth does an adult human have?', opts: ['28', '30', '32', '34'], correct: 2 },
  { q: 'Which country invented paper?', opts: ['India', 'China', 'Egypt', 'Greece'], correct: 1 },
  { q: 'What is the blood color of humans?', opts: ['Blue', 'Green', 'Red', 'Purple'], correct: 2 },
  { q: 'Which is the largest desert in the world?', opts: ['Sahara', 'Gobi', 'Antarctic', 'Arabian'], correct: 2, exp: 'The Antarctic Desert is the largest desert by area!' },
  { q: 'How many seconds are in a minute?', opts: ['30', '55', '60', '100'], correct: 2 },
  { q: 'What is the name of the smallest bone in the human body?', opts: ['Femur', 'Stapes', 'Patella', 'Radius'], correct: 1, exp: 'The stapes (stirrup bone) in the ear is the smallest bone.' },
  { q: 'Which country has the most natural lakes?', opts: ['USA', 'Russia', 'Canada', 'Finland'], correct: 2 },
  { q: 'What is the most spoken language in the world?', opts: ['English', 'Mandarin Chinese', 'Spanish', 'Hindi'], correct: 1 },
  { q: 'How many time zones are there in the world?', opts: ['12', '24', '36', '48'], correct: 1 },
  { q: 'Which planet is the hottest?', opts: ['Mercury', 'Venus', 'Mars', 'Jupiter'], correct: 1, exp: 'Venus is hotter than Mercury due to its thick atmosphere.' },
  { q: 'What is the largest organ in the human body?', opts: ['Liver', 'Brain', 'Skin', 'Heart'], correct: 2 },
  { q: 'Which country has the most UNESCO World Heritage sites?', opts: ['Italy', 'China', 'Spain', 'France'], correct: 0 },
  { q: 'What is the speed of light approximately?', opts: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '100,000 km/s'], correct: 0 },
  { q: 'Which animal can go the longest without water?', opts: ['Camel', 'Giraffe', 'Kangaroo', 'Lion'], correct: 0 },
  { q: 'What is the currency of Japan?', opts: ['Yuan', 'Won', 'Yen', 'Ringgit'], correct: 2 },
  { q: 'How many bones are in the human hand?', opts: ['17', '27', '37', '47'], correct: 1 },
  { q: 'Which country is the largest by area?', opts: ['USA', 'China', 'Russia', 'Canada'], correct: 2 },
  { q: 'What is the name of the longest bone in the human body?', opts: ['Tibia', 'Femur', 'Humerus', 'Spine'], correct: 1 },
  { q: 'Which planet has the most moons?', opts: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'], correct: 1 },
  { q: 'What is the hardest natural substance?', opts: ['Gold', 'Iron', 'Diamond', 'Platinum'], correct: 2 },
  { q: 'How many liters of water does the human body need daily?', opts: ['1-2', '2-3', '3-4', '4-5'], correct: 1 },
  { q: 'Which country is known as the "Land Down Under"?', opts: ['New Zealand', 'Australia', 'South Africa', 'Argentina'], correct: 1 },
  { q: 'What is the largest island in the world?', opts: ['Madagascar', 'Greenland', 'Borneo', 'Sumatra'], correct: 1 },
  { q: 'How many chromosomes do humans have?', opts: ['23', '46', '48', '92'], correct: 1 },
  { q: 'Which gas do plants absorb from the atmosphere?', opts: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], correct: 2 },
  { q: 'What is the name of the largest volcano on Earth?', opts: ['Vesuvius', 'Mauna Loa', 'Krakatoa', 'Etna'], correct: 1 },
];

const hard: QDef[] = [
  { q: 'What is the chemical symbol for gold?', opts: ['Go', 'Gd', 'Au', 'Ag'], correct: 2, exp: 'Au comes from the Latin word "aurum".' },
  { q: 'Which country has the highest number of time zones?', opts: ['USA', 'Russia', 'France', 'China'], correct: 2, exp: 'France has 12/13 time zones due to its overseas territories.' },
  { q: 'What is the smallest unit of matter?', opts: ['Atom', 'Molecule', 'Electron', 'Cell'], correct: 0 },
  { q: 'Which river flows through the Amazon rainforest?', opts: ['Nile', 'Amazon', 'Orinoco', 'Parana'], correct: 1 },
  { q: 'How many elements are in the periodic table?', opts: ['98', '108', '118', '128'], correct: 2 },
  { q: 'Which country has the oldest flag in the world?', opts: ['China', 'Denmark', 'Sweden', 'Japan'], correct: 1, exp: 'Denmark\'s flag has been in use since 1219.' },
  { q: 'What is the speed of sound at sea level?', opts: ['343 m/s', '543 m/s', '743 m/s', '943 m/s'], correct: 0 },
  { q: 'Which planet has the shortest day?', opts: ['Mercury', 'Venus', 'Jupiter', 'Saturn'], correct: 2, exp: 'Jupiter has the shortest day at about 10 hours.' },
  { q: 'What is the largest waterfall in the world by volume?', opts: ['Niagara Falls', 'Victoria Falls', 'Angel Falls', 'Iguazu Falls'], correct: 3, exp: 'Iguazu Falls has the largest volume of water flow.' },
  { q: 'How many countries are in Africa?', opts: ['44', '49', '54', '59'], correct: 2 },
  { q: 'What is the deepest point in the ocean?', opts: ['Mariana Trench', 'Tonga Trench', 'Philippine Trench', 'Java Trench'], correct: 0 },
  { q: 'Which element is the most abundant in the universe?', opts: ['Oxygen', 'Carbon', 'Hydrogen', 'Helium'], correct: 2 },
  { q: 'What is the chemical formula for water?', opts: ['CO2', 'H2O', 'NaCl', 'CH4'], correct: 1 },
  { q: 'Which country has the highest literacy rate?', opts: ['Finland', 'North Korea', 'Norway', 'Iceland'], correct: 1, exp: 'North Korea claims 100% literacy rate.' },
  { q: 'How long does it take for the Earth to orbit the Sun?', opts: ['365 days', '365.25 days', '366 days', '360 days'], correct: 1 },
  { q: 'Which metal is the best conductor of electricity?', opts: ['Copper', 'Silver', 'Gold', 'Aluminum'], correct: 1, exp: 'Silver is the most conductive metal.' },
  { q: 'What is the longest mountain range in the world?', opts: ['Himalayas', 'Andes', 'Rockies', 'Alps'], correct: 1 },
  { q: 'How many languages are spoken in the world?', opts: ['~3,000', '~5,000', '~7,000', '~9,000'], correct: 2 },
  { q: 'Which blood type is the rarest?', opts: ['A', 'B', 'AB', 'O'], correct: 2, exp: 'AB-negative is the rarest blood type.' },
  { q: 'What is the largest lake in the world?', opts: ['Lake Superior', 'Caspian Sea', 'Lake Victoria', 'Lake Baikal'], correct: 1 },
  { q: 'Which country owns the most islands?', opts: ['Indonesia', 'Sweden', 'Philippines', 'Japan'], correct: 1, exp: 'Sweden has over 267,000 islands.' },
  { q: 'What is the pH of pure water?', opts: ['5', '7', '9', '11'], correct: 1 },
  { q: 'Which bird is the largest in the world?', opts: ['Eagle', 'Ostrich', 'Albatross', 'Condor'], correct: 1 },
  { q: 'How many hearts does an octopus have?', opts: ['1', '2', '3', '4'], correct: 2 },
  { q: 'What is the oldest known city in the world?', opts: ['Athens', 'Rome', 'Jericho', 'Damascus'], correct: 2, exp: 'Jericho is considered the oldest continuously inhabited city.' },
  { q: 'Which element is used in pencils?', opts: ['Lead', 'Graphite', 'Carbon', 'Charcoal'], correct: 1 },
  { q: 'What is the total area of the Earth?', opts: ['510 million km²', '610 million km²', '410 million km²', '710 million km²'], correct: 0 },
  { q: 'Which country has the longest coastline?', opts: ['Australia', 'Canada', 'Russia', 'Indonesia'], correct: 1 },
  { q: 'How many muscles are in the human body?', opts: ['~400', '~600', '~800', '~1,000'], correct: 1 },
  { q: 'What is the most common element in the Earth\'s crust?', opts: ['Silicon', 'Aluminum', 'Oxygen', 'Iron'], correct: 2 },
];

function buildQuestion(d: QDef, difficulty: Difficulty, minAge: number): Question {
  return {
    id: getId(),
    category: 'general',
    difficulty,
    minAge,
    question: d.q,
    options: d.opts,
    correctAnswer: d.correct,
    explanation: d.exp,
  };
}

const map: Record<Difficulty, QDef[]> = { easy, medium, hard };

export function generateGeneralQuestions(difficulty: Difficulty, count: number): Question[] {
  const pool = map[difficulty];
  const minAge = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 8 : 10;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(d => buildQuestion(d, difficulty, minAge));
}
