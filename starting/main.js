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
        console.log(newArray);
        }

    static generateField(height, width){
        let field = []
        let items = [hat, hole, fieldCharacter]
        for (let i = 0; i < height; i++){
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
    
        let row = randomIndex(height);
        let col = randomIndex(width);
    
        while ((field[row][col] !== pathCharacter)){
            field[row][col] = hat;
            break;
        }
        let oCount = 0;
        while (oCount < (Math.floor(width*height*0.2))){
            let oRow = randomIndex(height);
            let oCol = randomIndex(width);
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

    playGame(gameField){
        this.print(currentGame)
        let row = 0;
        let col = 0;
        let found = 0;
    
        while (found < 1){
            let move = prompt('Which Way? ');
            switch(move){
                case 'd':
                    if (col + 1 === currentGame[0].length){
                        console.log('Invalid Movement: You Lost');
                        found++;
                    }
                    else if (currentGame[row][col + 1] === hat){
                        console.log('You found your Hat: You Won!')
                        found++
                    }
                    else if (currentGame[row][col + 1] === hole){
                        console.log('You fell in a Hole: You Lost');
                        found++
                    }
                    else{
                        currentGame[row][col + 1] = pathCharacter;             
                        col++}                
                    this.print(currentGame);
                    break;
                    
                case 's':
                    if (row + 1 === currentGame.length){
                        console.log('Invalid Movement: You Lost');
                        found++;
                    }
                    else if (currentGame[row + 1][col] === hat){
                        console.log('You found your Hat: You Won!')
                        found++
                    }
                    else if (currentGame[row + 1][col] === hole){
                        console.log('You fell in a Hole: You Lost');
                        found++
                    }
                    else{
                        currentGame[row + 1][col] = '*';
                        row++
                    }                
                    this.print(currentGame);
                    break;
    
                case 'a':
                    if (col - 1 < 0){
                        console.log('Invalid Movement: You Lost');
                        found++;
                    }
                    else if (currentGame[row][col - 1] === hat){
                        console.log('You found your Hat: You Won!')
                        found++
                    }
                    else if (currentGame[row][col - 1] === hole){
                        console.log('You fell in a Hole: You Lost');
                        found++
                    }
                    else{
                        currentGame[row][col - 1] = pathCharacter;             
                        col--
                    }                
                    this.print(currentGame);
                    break;
    
                case 'w':
                    if (row - 1 < 0){
                        console.log('Invalid Movement: You Lost');
                        found++;
                    }
                    else if (currentGame[row - 1][col] === hat){
                        console.log('You found your Hat: You Won!')
                        found++
                    }
                    else if (currentGame[row - 1][col] === hole){
                        console.log('You fell in a Hole: You Lost');
                        found++
                    }
                    else{
                        currentGame[row + 1][col] = '*';
                        row++                
                    }
                    this.print(currentGame);
                    break;
            }
            
        }
    }
}

const NewGame = new Field(Field.generateField(5,20))
const currentGame = NewGame.field;

NewGame.playGame(currentGame)