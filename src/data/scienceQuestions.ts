import type { Question, Difficulty } from '../types';

let idCounter = 4000;

function getId(): string {
  return `s${idCounter++}`;
}

type QDef = {
  q: string;
  opts: string[];
  correct: number;
  exp?: string;
};

const easy: QDef[] = [
  { q: 'What do plants need to make their food?', opts: ['Sunlight', 'Darkness', 'Wind', 'Snow'], correct: 0, exp: 'Plants use sunlight to make food through photosynthesis.' },
  { q: 'What part of the plant is underground?', opts: ['Leaf', 'Stem', 'Root', 'Flower'], correct: 2 },
  { q: 'What is water made of?', opts: ['Hydrogen and Oxygen', 'Salt and Sugar', 'Sand and Stone', 'Air and Fire'], correct: 0 },
  { q: 'Which sense do you use to smell?', opts: ['Eyes', 'Nose', 'Ears', 'Mouth'], correct: 1 },
  { q: 'What is the boiling point of water?', opts: ['50°C', '100°C', '150°C', '200°C'], correct: 1 },
  { q: 'What do we breathe out?', opts: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'], correct: 1 },
  { q: 'What covers most of the Earth?', opts: ['Land', 'Water', 'Ice', 'Sand'], correct: 1, exp: 'About 71% of Earth is covered by water.' },
  { q: 'What is the freezing point of water?', opts: ['-10°C', '0°C', '10°C', '100°C'], correct: 1 },
  { q: 'Which animal lays eggs?', opts: ['Dog', 'Cat', 'Chicken', 'Cow'], correct: 2 },
  { q: 'What gives energy to all life on Earth?', opts: ['Moon', 'Sun', 'Stars', 'Wind'], correct: 1 },
  { q: 'What is the name of the force that pulls things to the ground?', opts: ['Magnetism', 'Gravity', 'Friction', 'Buoyancy'], correct: 1 },
  { q: 'What part of the plant is usually green?', opts: ['Root', 'Leaf', 'Flower', 'Seed'], correct: 1 },
  { q: 'What is the hardest substance in the human body?', opts: ['Bone', 'Tooth enamel', 'Hair', 'Nail'], correct: 1 },
  { q: 'What causes rain?', opts: ['Wind', 'Clouds', 'Earthquakes', 'Volcanoes'], correct: 1, exp: 'Water in clouds condenses and falls as rain.' },
  { q: 'Which animal goes through metamorphosis?', opts: ['Dog', 'Butterfly', 'Fish', 'Bird'], correct: 1 },
  { q: 'What is the largest organ in the human body?', opts: ['Liver', 'Skin', 'Heart', 'Brain'], correct: 1, exp: 'The skin is the largest organ, covering about 2 square meters.' },
  { q: 'What do we use our ears for?', opts: ['Smelling', 'Hearing', 'Seeing', 'Tasting'], correct: 1 },
  { q: 'Which planet is closest to the Sun?', opts: ['Venus', 'Mercury', 'Earth', 'Mars'], correct: 1 },
  { q: 'What makes ice float on water?', opts: ['Weight', 'Density', 'Temperature', 'Color'], correct: 1, exp: 'Ice is less dense than water, so it floats.' },
  { q: 'What do caterpillars turn into?', opts: ['Bees', 'Butterflies', 'Birds', 'Dragonflies'], correct: 1 },
  { q: 'What is the study of stars called?', opts: ['Geography', 'Astronomy', 'Biology', 'Chemistry'], correct: 1 },
  { q: 'What part of the body pumps blood?', opts: ['Brain', 'Lungs', 'Heart', 'Stomach'], correct: 2 },
  { q: 'Which sense helps you taste food?', opts: ['Ears', 'Tongue', 'Eyes', 'Nose'], correct: 1 },
  { q: 'What do we call animals that only eat plants?', opts: ['Carnivores', 'Herbivores', 'Omnivores', 'Insectivores'], correct: 1 },
  { q: 'What is the chemical symbol for oxygen?', opts: ['Ox', 'O', 'Om', 'Oy'], correct: 1 },
  { q: 'What uses electricity to produce light?', opts: ['Candle', 'Light bulb', 'Fire', 'Sun'], correct: 1 },
  { q: 'What are the tiny building blocks of life called?', opts: ['Rocks', 'Cells', 'Drops', 'Particles'], correct: 1 },
  { q: 'Which bird can fly backward?', opts: ['Eagle', 'Hummingbird', 'Sparrow', 'Crow'], correct: 1 },
  { q: 'What melts when heated?', opts: ['Stone', 'Ice', 'Wood', 'Metal'], correct: 1 },
  { q: 'What color is chlorophyll?', opts: ['Red', 'Blue', 'Green', 'Yellow'], correct: 2 },
  { q: 'What does a thermometer measure?', opts: ['Weight', 'Temperature', 'Speed', 'Length'], correct: 1 },
  { q: 'Which organ helps you breathe?', opts: ['Heart', 'Lungs', 'Liver', 'Kidneys'], correct: 1 },
  { q: 'How many legs does a spider have?', opts: ['6', '8', '10', '12'], correct: 1 },
  { q: 'What is the main gas in the air we breathe?', opts: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'], correct: 1, exp: 'About 78% of air is nitrogen.' },
  { q: 'Which animal has no bones?', opts: ['Fish', 'Jellyfish', 'Bird', 'Snake'], correct: 1 },
  { q: 'What do you call a baby frog?', opts: ['Tadpole', 'Cub', 'Puppy', 'Chick'], correct: 0 },
  { q: 'Which planet has a ring around it?', opts: ['Mars', 'Venus', 'Saturn', 'Neptune'], correct: 2 },
  { q: 'What is the name of our galaxy?', opts: ['Andromeda', 'Milky Way', 'Solar System', 'Orion'], correct: 1 },
  { q: 'What happens to water when it freezes?', opts: ['It expands', 'It shrinks', 'It disappears', 'It turns pink'], correct: 0 },
  { q: 'Which part of the body has the most bones?', opts: ['Legs', 'Arms', 'Hands and Feet', 'Skull'], correct: 2, exp: 'More than half of your bones are in your hands and feet.' },
];

const medium: QDef[] = [
  { q: 'What is photosynthesis?', opts: ['Making food using sunlight', 'Sleeping in winter', 'Drinking water', 'Growing taller'], correct: 0 },
  { q: 'How many chambers does the human heart have?', opts: ['2', '3', '4', '5'], correct: 2 },
  { q: 'What is the chemical symbol for oxygen?', opts: ['O', 'O2', 'Oz', 'Ox'], correct: 0 },
  { q: 'What causes the tides in the ocean?', opts: ['Wind', 'Moon\'s gravity', 'Earthquakes', 'Underwater volcanoes'], correct: 1 },
  { q: 'Which gas do plants release during photosynthesis?', opts: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'], correct: 1 },
  { q: 'What is the largest bone in the human body?', opts: ['Tibia', 'Femur', 'Humerus', 'Pelvis'], correct: 1 },
  { q: 'What is the boiling point of water in Fahrenheit?', opts: ['100°F', '180°F', '212°F', '250°F'], correct: 2 },
  { q: 'Which planet is known as the "Morning Star"?', opts: ['Mars', 'Venus', 'Jupiter', 'Saturn'], correct: 1 },
  { q: 'What is the powerhouse of the cell?', opts: ['Nucleus', 'Mitochondria', 'Ribosome', 'Membrane'], correct: 1, exp: 'Mitochondria produce energy for the cell.' },
  { q: 'How long does it take for the moon to orbit Earth?', opts: ['7 days', '27.3 days', '30 days', '365 days'], correct: 1 },
  { q: 'What is the chemical formula for salt?', opts: ['H2O', 'CO2', 'NaCl', 'HCl'], correct: 2, exp: 'NaCl is sodium chloride, common table salt.' },
  { q: 'Which blood cells fight infections?', opts: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'], correct: 1 },
  { q: 'What type of rock is formed from lava?', opts: ['Sedimentary', 'Metamorphic', 'Igneous', 'Fossil'], correct: 2 },
  { q: 'What is the scientific name for the "voice box"?', opts: ['Trachea', 'Larynx', 'Pharynx', 'Bronchi'], correct: 1 },
  { q: 'Which vitamin does the skin produce from sunlight?', opts: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'], correct: 3 },
  { q: 'What is the distance from Earth to the Sun called?', opts: ['Light-year', 'Astronomical Unit', 'Parsec', 'Kilometer'], correct: 1, exp: '1 AU ≈ 150 million kilometers.' },
  { q: 'What is the largest planet in our solar system?', opts: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'], correct: 1 },
  { q: 'What causes a rainbow?', opts: ['Rain and clouds', 'Sunlight and rain', 'Snow and wind', 'Thunder and lightning'], correct: 1, exp: 'Sunlight refracts through raindrops to create rainbows.' },
  { q: 'How many bones are in the human spine?', opts: ['24', '33', '45', '50'], correct: 1 },
  { q: 'Which element is the most abundant in the Earth\'s crust?', opts: ['Silicon', 'Aluminum', 'Oxygen', 'Iron'], correct: 2, exp: 'Oxygen makes up about 46% of the Earth\'s crust.' },
  { q: 'What is a group of wolves called?', opts: ['Flock', 'Herd', 'Pack', 'Swarm'], correct: 2 },
  { q: 'What is the smallest planet in our solar system?', opts: ['Mercury', 'Mars', 'Pluto', 'Venus'], correct: 0 },
  { q: 'What part of the blood helps it clot?', opts: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'], correct: 2 },
  { q: 'Which animal can regrow its tail?', opts: ['Dog', 'Cat', 'Lizard', 'Bird'], correct: 2 },
  { q: 'What is the study of fossils called?', opts: ['Geology', 'Paleontology', 'Archaeology', 'Biology'], correct: 1 },
  { q: 'How many teeth does an adult shark have?', opts: ['About 50', 'About 300', 'About 500', 'About 1000'], correct: 1 },
  { q: 'What is the speed of light?', opts: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '3,000 km/s'], correct: 0 },
  { q: 'Which planet spins on its side?', opts: ['Neptune', 'Uranus', 'Saturn', 'Jupiter'], correct: 1, exp: 'Uranus rotates on its side with an axial tilt of 98 degrees.' },
  { q: 'What is a baby whale called?', opts: ['Pup', 'Calf', 'Foal', 'Cub'], correct: 1 },
  { q: 'How many taste buds does the human tongue have?', opts: ['About 1,000', 'About 5,000', 'About 10,000', 'About 50,000'], correct: 2 },
];

const hard: QDef[] = [
  { q: 'What is the atomic number of Carbon?', opts: ['4', '6', '8', '12'], correct: 1 },
  { q: 'What is the largest organ inside the human body?', opts: ['Heart', 'Liver', 'Lungs', 'Brain'], correct: 1, exp: 'The liver is the largest internal organ.' },
  { q: 'What is half-life in radioactive decay?', opts: ['Total life of atom', 'Time to decay half the atoms', 'Time to fully decay', 'Half the energy released'], correct: 1 },
  { q: 'Which gas is responsible for the greenhouse effect?', opts: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'], correct: 2 },
  { q: 'What is the pH of hydrochloric acid?', opts: ['1', '7', '14', '5'], correct: 0 },
  { q: 'How many pairs of chromosomes do humans have?', opts: ['21', '22', '23', '24'], correct: 2 },
  { q: 'What is the SI unit of force?', opts: ['Joule', 'Newton', 'Watt', 'Pascal'], correct: 1 },
  { q: 'What is the process of converting liquid to vapor called?', opts: ['Condensation', 'Evaporation', 'Sublimation', 'Precipitation'], correct: 1 },
  { q: 'Which element has the highest melting point?', opts: ['Tungsten', 'Iron', 'Carbon', 'Titanium'], correct: 0, exp: 'Tungsten has the highest melting point of any metal at 3422°C.' },
  { q: 'What is the average distance from Earth to the Moon?', opts: ['238,855 miles', '400,000 miles', '100,000 miles', '500,000 miles'], correct: 0 },
  { q: 'How many neurons are in the human brain?', opts: ['~10 billion', '~86 billion', '~500 billion', '~1 trillion'], correct: 1 },
  { q: 'What is the second law of thermodynamics about?', opts: ['Energy conservation', 'Entropy increase', 'Absolute zero', 'Heat transfer'], correct: 1, exp: 'The second law states that entropy in an isolated system always increases.' },
  { q: 'Which vitamin is produced in the skin when exposed to sunlight?', opts: ['Vitamin A', 'Vitamin D', 'Vitamin K', 'Vitamin E'], correct: 1 },
  { q: 'What is the name of the brightest star in the night sky?', opts: ['Polaris', 'Sirius', 'Vega', 'Betelgeuse'], correct: 1, exp: 'Sirius (the Dog Star) is the brightest star in the night sky.' },
  { q: 'What is the most common element in the universe?', opts: ['Helium', 'Hydrogen', 'Oxygen', 'Carbon'], correct: 1, exp: 'Hydrogen makes up about 75% of the universe\'s mass.' },
  { q: 'What is the unit of electrical resistance?', opts: ['Volt', 'Ampere', 'Ohm', 'Watt'], correct: 2 },
  { q: 'What is the difference between speed and velocity?', opts: ['Same thing', 'Velocity includes direction', 'Speed includes direction', 'No difference'], correct: 1 },
  { q: 'How long is a light-year in kilometers?', opts: ['~9.5 trillion km', '~9.5 billion km', '~9.5 million km', '~9.5 quadrillion km'], correct: 0 },
  { q: 'What is the name of the largest galaxy in the Local Group?', opts: ['Milky Way', 'Andromeda', 'Triangulum', 'Magellanic Cloud'], correct: 1 },
  { q: 'Which blood type is the universal donor?', opts: ['A+', 'B+', 'O-', 'AB+'], correct: 2, exp: 'O-negative blood can be given to anyone in emergencies.' },
  { q: 'What is a quark?', opts: ['A type of star', 'A subatomic particle', 'A cosmic ray', 'A type of bond'], correct: 1, exp: 'Quarks are elementary particles that combine to form protons and neutrons.' },
  { q: 'What is the molar mass of water?', opts: ['18 g/mol', '24 g/mol', '36 g/mol', '10 g/mol'], correct: 0 },
  { q: 'What is the name of the first man-made satellite?', opts: ['Apollo', 'Sputnik 1', 'Explorer 1', 'Voyager'], correct: 1 },
  { q: 'What is the chemical symbol for potassium?', opts: ['Po', 'K', 'Pt', 'P'], correct: 1, exp: 'K comes from the Latin "kalium".' },
  { q: 'What is the smallest bone in the human body?', opts: ['Stapes', 'Incus', 'Malleus', 'Cochlea'], correct: 0, exp: 'The stapes (stirrup bone) in the ear is only 2.5-3 mm long.' },
];

function buildQuestion(d: QDef, difficulty: Difficulty, minAge: number): Question {
  return {
    id: getId(),
    category: 'science',
    difficulty,
    minAge,
    question: d.q,
    options: d.opts,
    correctAnswer: d.correct,
    explanation: d.exp,
  };
}

const map: Record<Difficulty, QDef[]> = { easy, medium, hard };

export function generateScienceQuestions(difficulty: Difficulty, count: number): Question[] {
  const pool = map[difficulty];
  const minAge = difficulty === 'easy' ? 5 : difficulty === 'medium' ? 8 : 10;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count).map(d => buildQuestion(d, difficulty, minAge));
}
