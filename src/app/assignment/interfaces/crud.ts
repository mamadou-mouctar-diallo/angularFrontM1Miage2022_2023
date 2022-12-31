export interface Crud {
  add(obj: any): any,
  getAll(): any,
  getOne(obj: any): any,
  update(obj: any): any,
  delete(obj: any): any
}
