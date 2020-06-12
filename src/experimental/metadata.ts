import 'reflect-metadata'

@printMetadata
class Plane {
  color: string = 'red'

  @markFunction("this is my secret")
  fly(): void {
    console.log('vrrrr');
  }
}

function markFunction(secret: string) {
  return function(target: Plane, key: string) {
     Reflect.defineMetadata('secret', secret, target, key)
  }
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key)
    console.log("secret in loop");
    console.log(secret);
    
    
  }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

// console.log('The secret is');
// console.log(secret);



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
