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
      let countEqualBases = 0; //Declaring the equal bases counter
      this.dna.forEach((currentBase, i) => { //Iterate through original dna array
        if (currentBase === pAequor.dna[i]){ //Compare index by index the original and testing sample bases
          countEqualBases++; //If the bases are equal add +1 to the counter
        }})
      console.log(countEqualBases, this.dna.length)
      const percEqualBases = ((countEqualBases/this.dna.length)*100).toFixed(2); //Calculate the % of matching bases
      return `specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${percEqualBases}% DNA in common`
    },

    willLikelySurvive(){ //function that determines which organism may survive
      let baseCCount = 0; //Declare base C counter
      let baseGCount = 0; //Declare base G counter
      this.dna.forEach(base => { //Iterate through each base in dna array in order to determine which are C and which are G
        switch(base){
          case 'C':
            baseCCount++; //If C, then add +1 to base C counter
            break;
          case 'G':
            baseGCount++; //If G, then add +1 to base G counter
            break;}
      })
      let percCBase = ((baseCCount/this.dna.length)*100).toFixed(2); //Calculate % of base C 
      let percGBase = ((baseGCount/this.dna.length)*100).toFixed(2); //Calculate % of base G

      if (percGBase >= 60 || percCBase >= 60){ //If % of any of the bases is greater or equal to 60% return True, else False
        return true;
      }
      console.log(percCBase, percGBase)
      return false;
    }}
}
function survivalSpecimens(){ //find at least 30 potential survival specimens
  let promisingSpecimens = []; //Declare the array that stores potentially promising specimens
  let i = 0;
  while (promisingSpecimens.length < 30){
    let testStrand = pAequorFactory(i, mockUpStrand()) //Call the factory function with a random Strand
    
    if (testStrand.willLikelySurvive()){
      promisingSpecimens.push(testStrand.dna)
    }
  }
  return promisingSpecimens;
}

//this line is to test if correctly sincronize to github
