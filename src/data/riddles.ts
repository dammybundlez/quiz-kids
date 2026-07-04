import type { Question } from '../types';

const riddles: Question[] = [
  {
    id: 'r1', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has a face and two hands but no arms or legs?',
    options: ['A clock', 'A doll', 'A robot', 'A picture'], correctAnswer: 0,
    explanation: 'A clock has a face (the clock face) and two hands (the hour and minute hands)!'
  },
  {
    id: 'r2', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What gets wetter the more it dries?',
    options: ['A towel', 'A sponge', 'The sun', 'A shirt'], correctAnswer: 0,
    explanation: 'A towel gets wet while drying things off!'
  },
  {
    id: 'r3', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has a neck but no head?',
    options: ['A bottle', 'A shirt', 'A giraffe', 'A guitar'], correctAnswer: 0,
    explanation: 'A bottle has a neck but no head!'
  },
  {
    id: 'r4', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What can travel around the world while staying in a corner?',
    options: ['A stamp', 'A plane', 'A person', 'A ball'], correctAnswer: 0,
    explanation: 'A stamp stays in the corner of an envelope but travels the world!'
  },
  {
    id: 'r5', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has many keys but cannot open a single lock?',
    options: ['A piano', 'A keychain', 'A computer', 'A map'], correctAnswer: 0,
    explanation: 'A piano has many keys but they play music, not open locks!'
  },
  {
    id: 'r6', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What can you break even if you never pick it up or touch it?',
    options: ['A promise', 'A glass', 'A toy', 'A balloon'], correctAnswer: 0,
    explanation: 'You break a promise when you don\'t do what you said you would!'
  },
  {
    id: 'r7', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What goes up but never comes down?',
    options: ['Your age', 'A balloon', 'A bird', 'Smoke'], correctAnswer: 0,
    explanation: 'Your age always goes up and never comes back down!'
  },
  {
    id: 'r8', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What is full of holes but still holds water?',
    options: ['A sponge', 'A net', 'A bucket', 'A sieve'], correctAnswer: 0,
    explanation: 'A sponge is full of tiny holes and holds water!'
  },
  {
    id: 'r9', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has hands but cannot clap?',
    options: ['A clock', 'A baby', 'A statue', 'A tree'], correctAnswer: 0,
    explanation: 'A clock has hands that tell time but cannot clap!'
  },
  {
    id: 'r10', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has one eye but cannot see?',
    options: ['A needle', 'A pirate', 'A storm', 'A camera'], correctAnswer: 0,
    explanation: 'A needle has an eye (the hole for thread) but cannot see!'
  },
  {
    id: 'r11', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What can you keep after giving to someone?',
    options: ['Your word', 'A gift', 'A secret', 'Money'], correctAnswer: 0,
    explanation: 'You can keep your word after giving it to someone!'
  },
  {
    id: 'r12', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What begins with T, ends with T, and has T in it?',
    options: ['A teapot', 'A tent', 'A table', 'A treat'], correctAnswer: 0,
    explanation: 'A teapot starts with T, ends with T, and has tea (T) in it!'
  },
  {
    id: 'r13', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What building has the most stories?',
    options: ['A library', 'A skyscraper', 'A school', 'A museum'], correctAnswer: 0,
    explanation: 'A library has the most stories (books with stories in them)!'
  },
  {
    id: 'r14', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has a head and a tail but no body?',
    options: ['A coin', 'A dog', 'A snake', 'A pencil'], correctAnswer: 0,
    explanation: 'A coin has a head side and a tail side!'
  },
  {
    id: 'r15', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What can fill a room but takes up no space?',
    options: ['Light', 'Furniture', 'Air', 'Sound'], correctAnswer: 0,
    explanation: 'Light fills a room and takes up no space!'
  },
  {
    id: 'r16', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What runs all around a backyard yet never moves?',
    options: ['A fence', 'A dog', 'A path', 'A tree'], correctAnswer: 0,
    explanation: 'A fence runs around the backyard but stays in place!'
  },
  {
    id: 'r17', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has words but never speaks?',
    options: ['A book', 'A person', 'A radio', 'A TV'], correctAnswer: 0,
    explanation: 'A book has words on pages but does not speak!'
  },
  {
    id: 'r18', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What gets sharper the more you use it?',
    options: ['Your brain', 'A knife', 'A pencil', 'A saw'], correctAnswer: 0,
    explanation: 'Your brain gets sharper the more you use it!'
  },
  {
    id: 'r19', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What goes through cities and fields but never moves?',
    options: ['A road', 'A train', 'A river', 'A person'], correctAnswer: 0,
    explanation: 'A road goes through places but stays in one spot!'
  },
  {
    id: 'r20', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has four wheels and flies?',
    options: ['A garbage truck', 'A bird', 'A plane', 'A car'], correctAnswer: 0,
    explanation: 'A garbage truck has four wheels and flies (the insect flies around it)!'
  },
  {
    id: 'r21', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'I am not alive, but I grow; I do not have lungs, but I need air. What am I?',
    options: ['Fire', 'A plant', 'A balloon', 'A cloud'], correctAnswer: 0,
    explanation: 'Fire grows and needs oxygen (air) to burn!'
  },
  {
    id: 'r22', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'The more you take, the more you leave behind. What am I?',
    options: ['Footsteps', 'Money', 'Time', 'Food'], correctAnswer: 0,
    explanation: 'The more footsteps you take, the more you leave behind!'
  },
  {
    id: 'r23', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What can you catch but not throw?',
    options: ['A cold', 'A ball', 'A fish', 'A bus'], correctAnswer: 0,
    explanation: 'You can catch a cold but you cannot throw it!'
  },
  {
    id: 'r24', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What has cities but no houses, forests but no trees, and rivers but no water?',
    options: ['A map', 'A globe', 'A book', 'A painting'], correctAnswer: 0,
    explanation: 'A map shows cities, forests, and rivers without the actual things!'
  },
  {
    id: 'r25', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What invention lets you look right through a wall?',
    options: ['A window', 'A telescope', 'X-ray', 'A mirror'], correctAnswer: 0,
    explanation: 'A window lets you see through a wall!'
  },
  {
    id: 'r26', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What is always in front of you but can not be seen?',
    options: ['The future', 'Your nose', 'Air', 'A shadow'], correctAnswer: 0,
    explanation: 'The future is always ahead of us but we cannot see it!'
  },
  {
    id: 'r27', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What can you hold in your left hand but not in your right?',
    options: ['Your right elbow', 'A book', 'A pen', 'A ball'], correctAnswer: 0,
    explanation: 'You can hold your right elbow with your left hand!'
  },
  {
    id: 'r28', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What gets bigger when more is taken away?',
    options: ['A hole', 'A balloon', 'A pile', 'A box'], correctAnswer: 0,
    explanation: 'A hole gets bigger the more you take away from it!'
  },
  {
    id: 'r29', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What has a ring but no finger?',
    options: ['A phone', 'A bell', 'A keychain', 'A drum'], correctAnswer: 0,
    explanation: 'A phone has a ring (it rings) but no finger!'
  },
  {
    id: 'r30', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What can run but never walks, has a mouth but never talks?',
    options: ['A river', 'A dog', 'A person', 'A car'], correctAnswer: 0,
    explanation: 'A river runs and has a mouth (where it meets the sea) but does not talk!'
  },
  {
    id: 'r31', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'The person who makes it sells it. The person who buys it never uses it. The person who uses it never knows they are using it. What is it?',
    options: ['A coffin', 'A gift', 'A tool', 'A ticket'], correctAnswer: 0,
    explanation: 'A coffin is made by someone, bought by someone who won\'t use it, and used by someone who doesn\'t know!'
  },
  {
    id: 'r32', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What can go through glass without breaking it?',
    options: ['Light', 'Sound', 'Water', 'Air'], correctAnswer: 0,
    explanation: 'Light can pass through glass without breaking it!'
  },
  {
    id: 'r33', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What has branches but no fruit, trunk but no body, and leaves but no flowers?',
    options: ['A bank', 'A tree', 'A company', 'A library'], correctAnswer: 0,
    explanation: 'A bank has branches, a trunk (main office), and leaves (leave of absence)!'
  },
  {
    id: 'r34', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What goes up and down but does not move?',
    options: ['A staircase', 'An elevator', 'A seesaw', 'Temperature'], correctAnswer: 0,
    explanation: 'A staircase goes up and down but stays in one place!'
  },
  {
    id: 'r35', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What can be cracked, made, told, and played?',
    options: ['A joke', 'An egg', 'A code', 'A game'], correctAnswer: 0,
    explanation: 'You can crack a joke, make a joke, tell a joke, and play a joke!'
  },
  {
    id: 'r36', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What begins with an "e" and ends with an "e" but only contains one letter?',
    options: ['An envelope', 'An eagle', 'An eye', 'An egg'], correctAnswer: 0,
    explanation: 'An envelope begins with E, ends with E, and contains a letter!'
  },
  {
    id: 'r37', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What stays in a corner but can travel the world?',
    options: ['A stamp', 'A spider', 'A plant', 'A chair'], correctAnswer: 0,
    explanation: 'A stamp sits in the corner of an envelope and travels the world!'
  },
  {
    id: 'r38', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What has many teeth but cannot bite?',
    options: ['A comb', 'A saw', 'A zipper', 'A shark'], correctAnswer: 0,
    explanation: 'A comb has many teeth but cannot bite!'
  },
  {
    id: 'r39', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What kind of band never plays music?',
    options: ['A rubber band', 'A marching band', 'A wedding band', 'A jazz band'], correctAnswer: 0,
    explanation: 'A rubber band stretches things but does not play music!'
  },
  {
    id: 'r40', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What can you break with just one word?',
    options: ['Silence', 'A glass', 'A record', 'A promise'], correctAnswer: 0,
    explanation: 'You can break silence with just one word!'
  },
  {
    id: 'r41', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?',
    options: ['An echo', 'A ghost', 'A whisper', 'A song'], correctAnswer: 0,
    explanation: 'An echo speaks (repeats sound) and hears, but has no body!'
  },
  {
    id: 'r42', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'You see me once in June, twice in November, and not at all in May. What am I?',
    options: ['The letter E', 'A star', 'The moon', 'A holiday'], correctAnswer: 0,
    explanation: 'The letter E appears once in "June", twice in "November", and not at all in "May"!'
  },
  {
    id: 'r43', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What is seen in the middle of March and April that cannot be seen at the beginning or end of either month?',
    options: ['The letter R', 'Spring', 'Rain', 'A flower'], correctAnswer: 0,
    explanation: 'The letter R is in the middle of "March" and "April"!'
  },
  {
    id: 'r44', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'I follow you all the time and copy your every move, but you cannot touch me or catch me. What am I?',
    options: ['Your shadow', 'Your reflection', 'Your breath', 'Your echo'], correctAnswer: 0,
    explanation: 'Your shadow follows you everywhere and copies your moves!'
  },
  {
    id: 'r45', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What five-letter word becomes shorter when you add two letters to it?',
    options: ['Short', 'Shore', 'Shirt', 'Sharp'], correctAnswer: 0,
    explanation: '"Short" becomes "shorter" (which means more short) when you add "er"!'
  },
  {
    id: 'r46', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What belongs to you but other people use it more than you?',
    options: ['Your name', 'Your phone', 'Your car', 'Your house'], correctAnswer: 0,
    explanation: 'Your name belongs to you, but others use it more when they call you!'
  },
  {
    id: 'r47', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'I am taken from a mine and shut up in a wooden case, from which I am never released. What am I?',
    options: ['Pencil lead', 'A diamond', 'Gold', 'Coal'], correctAnswer: 0,
    explanation: 'Pencil lead (graphite) is mined and then enclosed in wood!'
  },
  {
    id: 'r48', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire word signifies a great woman?',
    options: ['Heroine', 'Female', 'Woman', 'Queen'], correctAnswer: 0,
    explanation: 'He (male), her (female), hero (great), heroine (great woman)!'
  },
  {
    id: 'r49', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What is so fragile that saying its name breaks it?',
    options: ['Silence', 'A secret', 'A promise', 'A spell'], correctAnswer: 0,
    explanation: 'Silence breaks when you speak its name!'
  },
  {
    id: 'r50', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What can fill a room but takes up no space?',
    options: ['Light', 'Furniture', 'Air', 'Sound'], correctAnswer: 0,
    explanation: 'Light fills rooms and takes up no physical space!'
  },
  {
    id: 'r51', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What is at the end of a rainbow?',
    options: ['The letter W', 'Gold', 'A pot', 'A leprechaun'], correctAnswer: 0,
    explanation: 'The word "rainbow" ends with the letter W!'
  },
  {
    id: 'r52', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What disappears as soon as you say its name?',
    options: ['Silence', 'A secret', 'A shadow', 'Darkness'], correctAnswer: 0,
    explanation: 'Silence disappears when you speak!'
  },
  {
    id: 'r53', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'David\'s parents have three sons: Snap, Crackle, and what\'s the name of the third son?',
    options: ['David', 'Pop', 'Crunch', 'Fizz'], correctAnswer: 0,
    explanation: 'The third son is David himself!'
  },
  {
    id: 'r54', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What comes once in a minute, twice in a moment, but never in a thousand years?',
    options: ['The letter M', 'A second', 'A blink', 'A chance'], correctAnswer: 0,
    explanation: 'The letter M appears once in "minute", twice in "moment"!'
  },
  {
    id: 'r55', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What has 13 hearts but no other organs?',
    options: ['A deck of cards', 'An octopus', 'A Valentine', 'A hospital'], correctAnswer: 0,
    explanation: 'A standard deck of cards has 13 heart cards!'
  },
  {
    id: 'r56', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'If you have me, you want to share me; if you share me, you haven\'t got me. What am I?',
    options: ['A secret', 'Money', 'Food', 'A toy'], correctAnswer: 0,
    explanation: 'A secret is something you want to share, but once shared it\'s no longer a secret!'
  },
  {
    id: 'r57', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What has a bottom at the top?',
    options: ['Your legs', 'A bottle', 'A mountain', 'A chair'], correctAnswer: 0,
    explanation: 'Your legs have bottoms (feet) at the top of them!'
  },
  {
    id: 'r58', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What starts with a P, ends with an E, and has thousands of letters?',
    options: ['The post office', 'A pencil', 'A poem', 'A pizza'], correctAnswer: 0,
    explanation: 'The post office starts with P, ends with E, and handles thousands of letters!'
  },
  {
    id: 'r59', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What is always coming but never arrives?',
    options: ['Tomorrow', 'Today', 'The bus', 'The future'], correctAnswer: 0,
    explanation: 'Tomorrow is always coming but never actually arrives - when it comes, it\'s today!'
  },
  {
    id: 'r60', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What word is pronounced the same if you take away four of its five letters?',
    options: ['Queue', 'Quiet', 'Quite', 'Quick'], correctAnswer: 0,
    explanation: '"Queue" sounds the same if you remove four letters (leaving Q)!'
  },
  {
    id: 'r61', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has legs but does not walk?',
    options: ['A table', 'A chair', 'A dog', 'A bird'], correctAnswer: 0,
    explanation: 'A table has legs but stays in place!'
  },
  {
    id: 'r62', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What is as light as a feather but even the strongest person cannot hold it for long?',
    options: ['Their breath', 'A feather', 'A balloon', 'Thoughts'], correctAnswer: 0,
    explanation: 'Nobody can hold their breath for very long!'
  },
  {
    id: 'r63', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What can go up a chimney down but not down a chimney up?',
    options: ['An umbrella', 'A balloon', 'Smoke', 'A bird'], correctAnswer: 0,
    explanation: 'An umbrella can go up a chimney (when closed) but not down (when open)!'
  },
  {
    id: 'r64', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has an eye but cannot see?',
    options: ['A storm', 'A hurricane', 'A potato', 'A needle'], correctAnswer: 3,
    explanation: 'A needle has an eye (the hole) but cannot see!'
  },
  {
    id: 'r65', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What comes down but never goes up?',
    options: ['Rain', 'A ball', 'An elevator', 'A bird'], correctAnswer: 0,
    explanation: 'Rain falls down and never goes back up!'
  },
  {
    id: 'r66', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What is brown, sticky, and lives in a tree?',
    options: ['A beehive', 'A squirrel', 'A nut', 'Mud'], correctAnswer: 0,
    explanation: 'A beehive (hive) is brown, sticky with honey, and hangs in a tree!'
  },
  {
    id: 'r67', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has a thumb and four fingers but is not alive?',
    options: ['A glove', 'A hand', 'A mitten', 'A puppet'], correctAnswer: 0,
    explanation: 'A glove has a thumb and four fingers!'
  },
  {
    id: 'r68', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What can you hear but not touch or see?',
    options: ['Your voice', 'The wind', 'A dream', 'A thought'], correctAnswer: 0,
    explanation: 'Your voice can be heard but not touched or seen!'
  },
  {
    id: 'r69', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has a bed but never sleeps?',
    options: ['A river', 'A garden', 'A person', 'A cat'], correctAnswer: 0,
    explanation: 'A river has a riverbed but never sleeps!'
  },
  {
    id: 'r70', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has to be broken before you can use it?',
    options: ['An egg', 'A toy', 'A box', 'A pencil'], correctAnswer: 0,
    explanation: 'You have to break an egg to cook with it!'
  },
  {
    id: 'r71', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What is black when you buy it, red when you use it, and gray when you throw it away?',
    options: ['Charcoal', 'A crayon', 'A battery', 'A tire'], correctAnswer: 0,
    explanation: 'Charcoal is black, red (hot) when burning, and gray ash when done!'
  },
  {
    id: 'r72', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What cannot talk but will reply when spoken to?',
    options: ['An echo', 'A dog', 'A mirror', 'A phone'], correctAnswer: 0,
    explanation: 'An echo replies by repeating what you say!'
  },
  {
    id: 'r73', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What can you serve but not eat?',
    options: ['A tennis ball', 'Dinner', 'A cake', 'A drink'], correctAnswer: 0,
    explanation: 'You serve a tennis ball but don\'t eat it!'
  },
  {
    id: 'r74', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What starts with E, ends with E, and has one letter in it?',
    options: ['An envelope', 'An eye', 'An ear', 'An egg'], correctAnswer: 0,
    explanation: 'An envelope (E at both ends, contains a letter inside)!'
  },
  {
    id: 'r75', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What becomes wetter the more it dries?',
    options: ['A towel', 'A sponge', 'A mop', 'A cloth'], correctAnswer: 0,
    explanation: 'A towel gets wet as it dries things off!'
  },
  {
    id: 'r76', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What has a head, a tail, is brown, and has no legs?',
    options: ['A penny', 'A snake', 'A worm', 'A coin'], correctAnswer: 0,
    explanation: 'A penny has a head (front), tail (back), is brown, and has no legs!'
  },
  {
    id: 'r77', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What type of cheese is made backward?',
    options: ['Edam', 'Swiss', 'Cheddar', 'Gouda'], correctAnswer: 0,
    explanation: '"Edam" is "made" spelled backward!'
  },
  {
    id: 'r78', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What can you break even if you never touch it?',
    options: ['A promise', 'A glass', 'A record', 'A heart'], correctAnswer: 0,
    explanation: 'You can break a promise without touching anything!'
  },
  {
    id: 'r79', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What kind of tree can you carry in your hand?',
    options: ['A palm tree', 'A family tree', 'A branch', 'A leaf'], correctAnswer: 0,
    explanation: 'A palm tree (the palm of your hand)!'
  },
  {
    id: 'r80', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What is the easiest way to double your money?',
    options: ['Fold it in half', 'Invest it', 'Save it', 'Earn more'], correctAnswer: 0,
    explanation: 'Fold your money in half to "double" it!'
  },
  {
    id: 'r81', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What month of the year has 28 days?',
    options: ['All of them', 'February', 'January', 'June'], correctAnswer: 0,
    explanation: 'All months have at least 28 days!'
  },
  {
    id: 'r82', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What is 3/7 chicken, 2/3 cat, and 2/4 goat?',
    options: ['Chicago', 'Chicken', 'Catgoat', 'Animal'], correctAnswer: 0,
    explanation: '3/7 of CHICKEN = CHI, 2/3 of CAT = CA, 2/4 of GOAT = GO = CHICAGO!'
  },
  {
    id: 'r83', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What is full of holes but still holds water?',
    options: ['A sponge', 'A net', 'A sieve', 'A strainer'], correctAnswer: 0,
    explanation: 'A sponge is full of tiny holes and holds water!'
  },
  {
    id: 'r84', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What room do ghosts avoid?',
    options: ['The living room', 'The kitchen', 'The bedroom', 'The bathroom'], correctAnswer: 0,
    explanation: 'Ghosts avoid the living room because they are dead!'
  },
  {
    id: 'r85', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What is more useful when it is broken?',
    options: ['An egg', 'A pencil', 'A toy', 'A glass'], correctAnswer: 0,
    explanation: 'An egg is more useful (you can eat it) after it\'s broken!'
  },
  {
    id: 'r86', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What can you keep after giving it to someone?',
    options: ['Your word', 'A secret', 'A gift', 'Money'], correctAnswer: 0,
    explanation: 'You can keep your word after giving it to someone!'
  },
  {
    id: 'r87', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What does man love more than life, fear more than death or mortal strife; what the poor have, the rich require, and what contented men desire?',
    options: ['Nothing', 'Money', 'Love', 'Health'], correctAnswer: 0,
    explanation: '"Nothing" - man loves nothing more than life, fears nothing more than death, the poor have nothing, the rich require nothing, contented men desire nothing!'
  },
  {
    id: 'r88', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What is it that no one wants, but no one wants to lose?',
    options: ['A lawsuit', 'A cold', 'A turn', 'A job'], correctAnswer: 0,
    explanation: 'Nobody wants a lawsuit, but nobody wants to lose one either!'
  },
  {
    id: 'r89', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What occurs once in a minute, twice in a moment, but never in an hour?',
    options: ['The letter M', 'A thought', 'A blink', 'A heartbeat'], correctAnswer: 0,
    explanation: 'The letter M appears once in "minute", twice in "moment"!'
  },
  {
    id: 'r90', category: 'riddle', difficulty: 'hard', minAge: 10,
    question: 'What question can you never answer yes to?',
    options: ['Are you asleep?', 'Do you exist?', 'Is the sky blue?', 'Are you alive?'], correctAnswer: 0,
    explanation: 'If you\'re asleep you can\'t answer, and if you\'re awake the answer is no!'
  },
  {
    id: 'r91', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What starts with W and ends with T?',
    options: ['A waffle iron', 'A waterfall', 'A wallet', 'A window'], correctAnswer: 0,
    explanation: 'A waffle iron starts with W and ends with T (iron sounds like "iron" but it\'s a waffle iron)!'
  },
  {
    id: 'r92', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What do you call a bear with no teeth?',
    options: ['A gummy bear', 'A toothless bear', 'A teddy bear', 'A polar bear'], correctAnswer: 0,
    explanation: 'A gummy bear!'
  },
  {
    id: 'r93', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What has ears but cannot hear?',
    options: ['Corn', 'A rabbit', 'A dog', 'A cat'], correctAnswer: 0,
    explanation: 'Corn has ears (the part you eat) but cannot hear!'
  },
  {
    id: 'r94', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What do you call a sleeping bull?',
    options: ['A bulldozer', 'A bullnap', 'A snoring bull', 'A bull rest'], correctAnswer: 0,
    explanation: 'A bulldozer (bull dozer = bull dozer/sleeper)!'
  },
  {
    id: 'r95', category: 'riddle', difficulty: 'medium', minAge: 7,
    question: 'What building has the most stories?',
    options: ['A library', 'A skyscraper', 'A museum', 'A theater'], correctAnswer: 0,
    explanation: 'A library has the most stories (books)!'
  },
  {
    id: 'r96', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has a round shape but always points north?',
    options: ['A compass', 'A clock', 'A magnet', 'A sun'], correctAnswer: 0,
    explanation: 'A compass is round and its needle always points north!'
  },
  {
    id: 'r97', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What gets sharper the more you use it?',
    options: ['A pencil', 'A knife', 'A saw', 'Scissors'], correctAnswer: 0,
    explanation: 'A pencil gets sharper (the tip gets pointy) the more you use it!'
  },
  {
    id: 'r98', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What has a spine but no bones?',
    options: ['A book', 'A person', 'A snake', 'A dinosaur'], correctAnswer: 0,
    explanation: 'A book has a spine but no bones!'
  },
  {
    id: 'r99', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What goes up when rain comes down?',
    options: ['An umbrella', 'A puddle', 'A flower', 'A roof'], correctAnswer: 0,
    explanation: 'An umbrella goes up when rain comes down!'
  },
  {
    id: 'r100', category: 'riddle', difficulty: 'easy', minAge: 5,
    question: 'What is easy to get into but hard to get out of?',
    options: ['Trouble', 'Bed', 'A car', 'A house'], correctAnswer: 0,
    explanation: 'It\'s easy to get into trouble but hard to get out of it!'
  },
];

export default riddles;
