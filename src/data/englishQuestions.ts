import type { Question, Difficulty } from '../types';

let idCounter = 2000;

function getId(): string {
  return `e${idCounter++}`;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuestion(
  question: string,
  options: string[],
  correctIndex: number,
  difficulty: Difficulty,
  minAge: number,
  explanation?: string
): Question {
  return {
    id: getId(),
    category: 'english',
    difficulty,
    minAge,
    question,
    options,
    correctAnswer: correctIndex,
    explanation,
  };
}

const easySpelling = [
  { word: 'cat', wrong: ['kat', 'cet', 'kut'] },
  { word: 'dog', wrong: ['dawg', 'doj', 'dogg'] },
  { word: 'sun', wrong: ['son', 'sunn', 'san'] },
  { word: 'red', wrong: ['rad', 'reid', 'wred'] },
  { word: 'big', wrong: ['beg', 'bigg', 'bige'] },
  { word: 'fun', wrong: ['fan', 'funn', 'fon'] },
  { word: 'run', wrong: ['ran', 'runn', 'ron'] },
  { word: 'bed', wrong: ['bad', 'badd', 'bede'] },
  { word: 'yes', wrong: ['yess', 'yas', 'yis'] },
  { word: 'hot', wrong: ['hhot', 'hut', 'hat'] },
];

const mediumSpelling = [
  { word: 'happy', wrong: ['hapy', 'heppy', 'happi'] },
  { word: 'house', wrong: ['howse', 'hous', 'houze'] },
  { word: 'bright', wrong: ['brite', 'brigt', 'bryte'] },
  { word: 'friend', wrong: ['freind', 'frend', 'fryend'] },
  { word: 'water', wrong: ['watter', 'wotor', 'watur'] },
  { word: 'music', wrong: ['muzic', 'musik', 'mewsic'] },
  { word: 'river', wrong: ['rivver', 'rivar', 'rivir'] },
  { word: 'apple', wrong: ['aple', 'appel', 'appul'] },
  { word: 'flower', wrong: ['flour', 'flowar', 'flawer'] },
  { word: 'table', wrong: ['tabble', 'tabel', 'tayble'] },
];

const hardSpelling = [
  { word: 'beautiful', wrong: ['beautful', 'beautifull', 'butiful'] },
  { word: 'necessary', wrong: ['neccessary', 'necesary', 'nessessary'] },
  { word: 'embarrass', wrong: ['embarass', 'embarras', 'embaras'] },
  { word: 'separate', wrong: ['seperate', 'sepirate', 'seperete'] },
  { word: 'appearance', wrong: ['apparance', 'apearance', 'aperance'] },
  { word: 'knowledge', wrong: ['knowlege', 'knolege', 'noledge'] },
  { word: 'restaurant', wrong: ['restarant', 'resteraunt', 'restaraunt'] },
  { word: 'accommodate', wrong: ['accomodate', 'acommodate', 'acomadate'] },
  { word: 'occasionally', wrong: ['ocasionally', 'occassionally', 'occasionaly'] },
  { word: 'guarantee', wrong: ['guaranty', 'garantee', 'gurantee'] },
];

const easyFillBlank = [
  { sentence: 'The ___ is shining in the sky.', answer: 'sun', options: ['sun', 'moon', 'star', 'bird'] },
  { sentence: 'I ___ a happy child.', answer: 'am', options: ['am', 'is', 'are', 'be'] },
  { sentence: 'A ___ can fly.', answer: 'bird', options: ['bird', 'fish', 'dog', 'cat'] },
  { sentence: 'The color of grass is ___.', answer: 'green', options: ['green', 'blue', 'red', 'yellow'] },
  { sentence: 'We use a ___ to write.', answer: 'pen', options: ['pen', 'cup', 'ball', 'hat'] },
];

const mediumFillBlank = [
  { sentence: 'She ___ to school every day.', answer: 'goes', options: ['goes', 'go', 'going', 'went'] },
  { sentence: 'They ___ playing in the park.', answer: 'are', options: ['are', 'is', 'am', 'be'] },
  { sentence: 'The opposite of hot is ___.', answer: 'cold', options: ['cold', 'cool', 'warm', 'wet'] },
  { sentence: 'A baby cat is called a ___.', answer: 'kitten', options: ['kitten', 'puppy', 'cub', 'foal'] },
  { sentence: 'We have five ___.', answer: 'senses', options: ['senses', 'fingers', 'toes', 'eyes'] },
];

const hardFillBlank = [
  { sentence: 'The ___ of the story was very surprising.', answer: 'ending', options: ['ending', 'beginning', 'middle', 'title'] },
  { sentence: 'A person who writes books is called an ___.', answer: 'author', options: ['author', 'artist', 'actor', 'audience'] },
  { sentence: 'The ___ of the Earth is about 24 hours.', answer: 'rotation', options: ['rotation', 'revolution', 'orbit', 'gravity'] },
  { sentence: 'Water ___ at 100 degrees Celsius.', answer: 'boils', options: ['boils', 'freezes', 'melts', 'evaporates'] },
  { sentence: 'An animal that eats both plants and meat is called an ___.', answer: 'omnivore', options: ['omnivore', 'herbivore', 'carnivore', 'insectivore'] },
];

const synonymPairs: [string, string, string[]][] = [
  ['big', 'large', ['small', 'tiny', 'little']],
  ['happy', 'glad', ['sad', 'angry', 'upset']],
  ['fast', 'quick', ['slow', 'lazy', 'late']],
  ['smart', 'clever', ['dull', 'silly', 'foolish']],
  ['pretty', 'beautiful', ['ugly', 'plain', 'ordinary']],
  ['easy', 'simple', ['hard', 'difficult', 'complex']],
  ['old', 'ancient', ['new', 'young', 'fresh']],
  ['rich', 'wealthy', ['poor', 'broke', 'needy']],
  ['brave', 'courageous', ['cowardly', 'scared', 'fearful']],
  ['quiet', 'silent', ['loud', 'noisy', 'chatty']],
];

const antonymPairs: [string, string, string[]][] = [
  ['hot', 'cold', ['warm', 'cool', 'mild']],
  ['light', 'dark', ['bright', 'shiny', 'glowing']],
  ['begin', 'end', ['start', 'commence', 'open']],
  ['high', 'low', ['tall', 'elevated', 'soaring']],
  ['full', 'empty', ['packed', 'stuffed', 'loaded']],
  ['clean', 'dirty', ['neat', 'tidy', 'fresh']],
  ['strong', 'weak', ['powerful', 'mighty', 'tough']],
  ['buy', 'sell', ['purchase', 'acquire', 'get']],
  ['laugh', 'cry', ['smile', 'giggle', 'chuckle']],
  ['love', 'hate', ['like', 'adore', 'cherish']],
];

function generateSpellingQuestion(difficulty: Difficulty, minAge: number): Question {
  let list: { word: string; wrong: string[] }[];
  if (difficulty === 'easy') list = easySpelling;
  else if (difficulty === 'medium') list = mediumSpelling;
  else list = hardSpelling;

  const item = list[Math.floor(Math.random() * list.length)];
  const wrong = item.wrong[Math.floor(Math.random() * item.wrong.length)];
  const options = shuffleArray([item.word, wrong, ...item.wrong.filter(w => w !== wrong).slice(0, 2)]);
  const correctIndex = options.indexOf(item.word);
  return buildQuestion(
    `Which word is spelled correctly?`,
    options,
    correctIndex,
    difficulty,
    minAge,
    `The correct spelling is "${item.word}".`
  );
}

function generateFillBlankQuestion(difficulty: Difficulty, minAge: number): Question {
  let list: { sentence: string; answer: string; options: string[] }[];
  if (difficulty === 'easy') list = easyFillBlank;
  else if (difficulty === 'medium') list = mediumFillBlank;
  else list = hardFillBlank;

  const item = list[Math.floor(Math.random() * list.length)];
  const shuffled = shuffleArray([...item.options]);
  const correctIndex = shuffled.indexOf(item.answer);
  return buildQuestion(item.sentence, shuffled, correctIndex, difficulty, minAge);
}

function generateSynonymQuestion(difficulty: Difficulty, minAge: number): Question {
  const pair = synonymPairs[Math.floor(Math.random() * synonymPairs.length)];
  const [word, synonym, distractors] = pair;
  const wrongs = distractors.slice(0, 3);
  const options = shuffleArray([synonym, ...wrongs]);
  const correctIndex = options.indexOf(synonym);
  return buildQuestion(
    `What is a synonym of "${word}"?`,
    options,
    correctIndex,
    difficulty,
    minAge,
    `"${synonym}" means the same as "${word}".`
  );
}

function generateAntonymQuestion(difficulty: Difficulty, minAge: number): Question {
  const pair = antonymPairs[Math.floor(Math.random() * antonymPairs.length)];
  const [word, antonym, distractors] = pair;
  const wrongs = distractors.slice(0, 3);
  const options = shuffleArray([antonym, ...wrongs]);
  const correctIndex = options.indexOf(antonym);
  return buildQuestion(
    `What is the opposite of "${word}"?`,
    options,
    correctIndex,
    difficulty,
    minAge,
    `"${antonym}" is the opposite of "${word}".`
  );
}

const genMap: Record<Difficulty, ((minAge: number) => Question)[]> = {
  easy: [
    () => generateSpellingQuestion('easy', 5),
    () => generateFillBlankQuestion('easy', 5),
  ],
  medium: [
    () => generateSpellingQuestion('medium', 8),
    () => generateFillBlankQuestion('medium', 8),
    () => generateSynonymQuestion('medium', 8),
    () => generateAntonymQuestion('medium', 8),
  ],
  hard: [
    () => generateSpellingQuestion('hard', 10),
    () => generateFillBlankQuestion('hard', 10),
    () => generateSynonymQuestion('hard', 10),
    () => generateAntonymQuestion('hard', 10),
  ],
};

export function generateEnglishQuestions(difficulty: Difficulty, count: number, age?: number): Question[] {
  const gens = genMap[difficulty];
  const minAge = age ?? (difficulty === 'easy' ? 5 : difficulty === 'medium' ? 8 : 10);
  const questions: Question[] = [];
  for (let i = 0; i < count; i++) {
    const gen = gens[i % gens.length];
    questions.push(gen(minAge));
  }
  return questions;
}
