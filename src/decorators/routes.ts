import 'reflect-metadata'

export function get(path: string) {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    Reflect.defineMetadata('path', path, target, key)
  }
}
