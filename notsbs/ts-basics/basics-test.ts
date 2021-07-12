import { Ranker, useState } from './basics';

const [toggle, setToggle] = useState<boolean>(false);
console.log(toggle());
setToggle(true);
console.log(toggle());

let [darkMode, setDarkMode] = useState<string | null>(null);
console.log(darkMode());
setDarkMode('dark mode enabled');
console.log(darkMode());

interface Pokemon {
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
    { name: 'Bulbasour', hp: 20 },
    { name: 'Megaasour', hp: 5 },
];

const ranks = Ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
