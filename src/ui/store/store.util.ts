export const generateActionName = (moduleName:string) =>
(name: string) => `${moduleName}:${name}`;
