const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

// const myField = new Field([
//     ['*', '░', 'O'],
//     ['░', 'O', '░'],
//     ['░', '^', '░'],
//   ]);

//   let array = [
//     ['*', '░', 'O'],
//     ['░', 'O', '░'],
//     ['░', '^', '░'],
//   ]
function print(fieldArray){
            let newArray = [];
            fieldArray.forEach(subArray => {    
                newArray.push(subArray.join(''))
            })
            newArray = newArray.join("\n")
            return newArray;
            }



 
// const name = prompt('What is your name?');

// console.log(name)

const width = 5;
const height = 5;
let field = []
let items = [hat, hole, fieldCharacter]
for (let i = 0; i < width; i++){
    let row = [];
    let j = 0;
    
    while (j < width){
        let randomIndex = Math.floor(Math.random()*(width-1));
        let randomElement = items[randomIndex];

        if (j===0 & i===0){
            row.push(pathCharacter);
            j++;
        }

        if(row.includes(hat)){
            items.splice(0,1);
            // row.push(randomElement);
            j++;
        }
        else{
            row.push(randomElement);
            j++;
        }
        
    }
    field.push(row);
}

console.log(print(field))
