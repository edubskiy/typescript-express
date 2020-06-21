import { Methods } from './methods';
import 'reflect-metadata'
import { router } from '../routes/routes'

function routeBinder(method: string) {
  return function(path: string) {
    return (target: any, key: string, desc: PropertyDescriptor) => {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', 'get', target, key)
    }
  }  
}



export const get = routeBinder(Methods.get)
export const put = routeBinder(Methods.put)
export const post = routeBinder(Methods.post)
export const del = routeBinder(Methods.del)
export const patch = routeBinder(Methods.patch)