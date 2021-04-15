const _ = {
    clamp(number, lower, upper){
        const lowerClampedValue = Math.max(number, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },

    inRange(number, start, end){
        if (!end){
            end = start
            start = 0;
            };
        if (start > end){
            [start, end] = [end, start];
        }
        if (number >= start && number < end){
            return true;
        }
        else {
            return false;
        }
    },

    words(string){
        return string.split(' ');
    },

    pad(string, length){
        if (string.length > length){
            return string;
        }
        const lenString = string.length;
        const lenPad = (length - lenString)/2;
        const leftPad = lenString + Math.floor(lenPad);        
        let paddedString = string.padStart(leftPad).padEnd(length);

        
        return paddedString;
    },

    has(object, key){
        if (object[key]){
            return true;
        }
        else{
            return false;    
        }        
    },

    invert(object){
        let keyValues = Object.entries(object);
        keyValues.forEach((key) => {
        object[key[1]] = key[0];
        delete object[key[0]];})

        return object;
    },
    
    findKey(object, predicate){
       
        for (key in object){
            let objectValue = object[key];
            if (predicate(objectValue)){
              return key      
            }
            return undefined;          
        }        
    },

    drop(array, itemsToDrop){
        if (!itemsToDrop){
            array.splice(0,1);
            return array;
        }
        array.splice(0,itemsToDrop);
        return array;
    },

    dropWhile(array, predicate){
        let count = 0;
        for (element of array){
            let index = array.indexOf(element)
            if (!predicate(element, index, array)){
                array.splice(0,index);
                return array
            }
        } 
    },

    chunk(array, chunkSize){
        let chunkedArray = [];
        if(!chunkSize){
            chunkSize = 1;
        }
        const chunks = Math.ceil(array.length/chunkSize);
        for (i=0; i<chunks;i++){
          chunkedArray.push(array.splice(0,chunkSize))
        }
        return chunkedArray;
    }
};


// Do not write or modify code below this line.
module.exports = _;
