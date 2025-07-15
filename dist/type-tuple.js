"use strict";
let movieArray = [1, 'Guerra Civil', true];
let movieTuple = [2, 'Divertidamente', false];
let movieTupleOptionalPosition = [
    3, 'Lilo e Stitch', true
];
const [id, title, avalable] = movieTuple;
const [idMT, titleMT, availableMT] = movieTupleOptionalPosition;
console.log(id, title.toLowerCase());
console.log(idMT, title.length, availableMT);
