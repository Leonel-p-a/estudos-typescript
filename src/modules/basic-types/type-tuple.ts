let movieArray: (number | string | boolean)[] = [1, 'Guerra Civil', true];
let movieTuple: [number, string, boolean] = [2, 'Divertidamente', false];

let movieTupleOptionalPosition: [number, string, boolean?, string?] = [
    3, 'Lilo e Stitch', true
];

const [id, title, avalable] = movieTuple;

const [idMT, titleMT, availableMT] = movieTupleOptionalPosition;

console.log(id, title.toLowerCase());
console.log(idMT, title.length, availableMT);