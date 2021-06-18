
  function execiseDog(dogName, dogBreed){
  
    for(i = 0; i < rotine.lengt; i++){
      console.log([i])
    }
  }
  
  let routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleasheDog
    ]
  
  function wakeDog(dogName, dogBreed){
    return console.log(`Wake ${dogName} the ${dogBreed}`);
  }
  
  function leashDog(dogName, dogBreed){
    return console.log(`Leash ${dogName} the ${dogBreed}`);
  }
  
  function walkToPark(dogName, dogBreed){
    return console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  }
  
  function throwFrisbee(dogName, dogBreed){
    return console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  }
  
  function walkHome(dogName, dogBreed){
    return console.log(`Walk home with ${dogName} the ${dogBreed}`);
  }
  
  function unleasheDog(dogName, dogBreed){
    return console.log(`Unleashe ${dogName} the ${dogBreed}`);
  }
  