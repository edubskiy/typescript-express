import 'reflect-metadata'

class Plane {
  color: string = 'red'

  @markFunction
  fly(): void {
    console.log('vrrrr');
  }
}

function markFunction(target: Plane, key: string) {
  Reflect.defineMetadata('secret', 123, target, key)
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

console.log('The secret is');
console.log(secret);



// const plane = {
//   color: 'red'
// }

// Reflect.defineMetadata('note', 'hi there', plane, 'color')

// const note = Reflect.getMetadata('note', plane, 'color')

// console.log("Note:");
// console.log(note);

// Reflect.defineMetadata('note', 'hi there', plane)

// console.log('plane note');
// console.log(Reflect.getMetadata('note', plane));
