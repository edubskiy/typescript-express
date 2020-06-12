import 'reflect-metadata'

const plane = {
  color: 'red'
}

Reflect.defineMetadata('note', 'hi there', plane, 'color')

const note = Reflect.getMetadata('note', plane, 'color')

console.log("Note:");
console.log(note);



// Reflect.defineMetadata('note', 'hi there', plane)

// console.log('plane note');
// console.log(Reflect.getMetadata('note', plane));
