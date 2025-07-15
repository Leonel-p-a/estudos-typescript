let animes = ['One Piece', 'Dragon Ball'];
// let animes: string[] = ['One Piece', 'Dragon Ball'];
let numbers = [1, 3, 6, 9];
export function toUpperCaseStrings(arr) {
    return arr.map(element => element.toUpperCase());
}
console.log(toUpperCaseStrings(animes));
