// Returns a random DNA base
var _ = require('\lodash');

const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());

//new comment added
  }
  return newStrand;
};

const pAequorFactory = (number, dnaArray) => {
  return {
    specimenNum: number,
    dna: dnaArray,

    mutate(){
      console.log(this.dna)
      const randomIndex = Math.floor(Math.random()*this.dna.length); //Select a random index to find a base      
      const randomBase = dnaArray[randomIndex]; //Get the random base using randomIndex      
      let dnaBases = ['A', 'T', 'C', 'G']; //Declare dnaBases to change the original base of dnaArray
      
      dnaBases.splice(dnaBases.indexOf(randomBase),1); //Deleting the original base from the array of bases
      // console.log(dnaBases, randomIndex, randomBase);      
      this.dna[randomIndex] = _.sample(dnaBases); //Assigning the random selected base to another one

      return this.dna;
    },

    compareDNA(pAequor){
      let countEqualBases = 0;
      this.dna.forEach((currentBase, i) => {
        if (currentBase === pAequor.dna[i]){
          countEqualBases++;
        }})
      console.log(countEqualBases, this.dna.length)
      const percEqualBases = ((countEqualBases/this.dna.length)*100).toFixed(2);
      return `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percEqualBases}% DNA in common`
    },

    willLikelySurvive(){ //function that determines which organism may survive
      let baseCCount = 0;
      let baseGCount = 0;
      this.dna.forEach(base => {
        switch(base){
          case 'C':
            baseCCount++;
            break;
          case 'G':
            baseGCount++;
            break;}
      })
      let percCBase = ((baseCCount/this.dna.length)*100).toFixed(2);
      let percGBase = ((baseGCount/this.dna.length)*100).toFixed(2);

      if (percGBase >= 60 || percCBase >= 60){
        return true;
      }
      console.log(percCBase, percGBase)
      return false;
    }   

    }
}

/*let newStrand1 = mockUpStrand()
let newStrand2 = mockUpStrand()
const testStrand1 = pAequorFactory(1, newStrand1)
const testStrand2 = pAequorFactory(10, newStrand2)

console.log(testStrand2.willLikelySurvive())*/

function survivalSpecimens(){ //find at least 30 potential survival specimens
  let promisingSpecimens = [];
  let i = 0;
  while (promisingSpecimens.length < 30){
    let testStrand = pAequorFactory(i, mockUpStrand())
    
    if (testStrand.willLikelySurvive()){
      promisingSpecimens.push(testStrand.dna)
    }
  }
  return promisingSpecimens;
}

console.log(survivalSpecimens())
