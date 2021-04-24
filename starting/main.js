const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field{
    constructor(array){
        this.field = array;
    }

    print(fieldArray){
        let newArray = [];
        fieldArray.forEach(subArray => {    
            newArray.push(subArray.join(''))
        })
        newArray = newArray.join("\n")
        return newArray;
        }

    static generateField(width,height){
        let field = []
        let items = [hat, hole, fieldCharacter]
        for (let i = 0; i < width; i++){
            let row = [];
            let j = 0;
            
            while (j < width){
                row.push(fieldCharacter);
                j++
            }
            field.push(row);
        }
    
        field[0][0] = pathCharacter;
        const randomIndex = (num) => {return Math.floor(Math.random()*num)};
    
        let row = randomIndex(width);
        let col = randomIndex(height);
    
        while ((field[row][col] !== pathCharacter)){
            field[row][col] = hat;
            break;
        }
        let oCount = 0;
        while (oCount < (Math.floor(width*height*0.2))){
            let oRow = randomIndex(width);
            let oCol = randomIndex(height);
            if (field[oRow][oCol]===pathCharacter | field[oRow][oCol]===hat){
                continue;
            }
            else{
                field[oRow][oCol] = hole;
                oCount++;
            }
            
        }
        return field;
    }
}

const NewGame = new Field(Field.generateField(5,5))

// const currentGame = NewGame.print(NewGame.field)

const currentGame = NewGame.field;


function print(fieldArray){

            let newArray = [];
            fieldArray.forEach(subArray => {    
                newArray.push(subArray.join(''))
            })
            newArray = newArray.join("\n")
            
            let iterations = newArray.length - (fieldArray.length - 1);

            for (let i = 0; i < iterations; i++){
                let move = prompt('Which way?');
                
                switch(move){
                    case 'd':
                        newArray.splice((i+1), 0, pathCharacter);
                        console.log(i+1)
                        console.log(newArray);
                        break;                
                }
                            
            }
        }
    
console.log(print(currentGame))

