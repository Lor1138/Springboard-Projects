

const createInstructor = (firstName, lastName) => ({ firstName, lastName});

let favoriteNumber = 42;
let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

let instructorSpeak = {
    firstName: 'Colt',
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }

}

const createAnimal = (breed, noise, sound)=>{
    return {
    breed,
    [noise](){
        return sound;
    }
  }
}