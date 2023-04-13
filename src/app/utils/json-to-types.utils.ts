
/* Função que irá providenciar tipagem para qqr classe que extendê-la */
export function GenericClass<Props>(): new () => Props{
  return class {} as any;
}

function concatIfExistsPath(path: string, suffix: string): string {
  return path ? `${path}.${suffix}` : suffix;
}

export function transformObjectToPath<T extends object | string>(
  suffix: string,
  objectToTransformOrEndOfPath: T,
  path: string = ''
): T {
  return typeof objectToTransformOrEndOfPath === 'object'
   ? Object.entries(objectToTransformOrEndOfPath).reduce(
    (objectToTransform, [key, value]) => {
      objectToTransform[key] = transformObjectToPath(
        key,
        value,
        concatIfExistsPath(path, suffix)
      );
      return objectToTransform;
    },
    {} as T)
   : (concatIfExistsPath(path, suffix) as T)

}


