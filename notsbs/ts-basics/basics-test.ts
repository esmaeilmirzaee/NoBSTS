import { useState } from './basics';

const [toggle, setToggle] = useState<boolean>(false);
console.log(toggle());
setToggle(true);
console.log(toggle());
