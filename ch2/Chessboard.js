/*Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the 
grid there is either a space or a "#" character.
The characters should form a chessboard.*/

let size = 8, nextLetter = " ", string = '';

//Create string of length (size^2 + size) chars depicting chessboard pattern
for (let n = 1; n <= (size * size); n++){
    string += nextLetter;

    //If string becomes 'size' chars long, move to next row
    //Else, alternate between " " & '#' base on current value of nextLetter
    if (n % size == 0){
        string += '\n';

        //Perform another alternation of the vale of nextLetter if size is odd number
        //to ensure that the new row starts with the letter opposite to the one in current row
        //This is not required when size's vale is an even number
        if (size % 2 == 1){
            nextLetter = (nextLetter ==' ')? '#': ' ';
        }
        }
        else {
            nextLetter = (nextLetter == ' ')? '#': ' ';
        }
}

console.log(string);