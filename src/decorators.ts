@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError('Oops boat was sunk...')
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean
  ): void {
    throw new Error('smth is wrong');
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(target, key, index);
}

function testDecorator(target: any, key: string) {
  console.log(target, key);
}

function logError(error: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(error);
      }
    };
  };
}


new Boat().pilot("fast", false)
