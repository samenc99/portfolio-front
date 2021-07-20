export type Project = {
  name : string,
  imgUrl : string,
  description : string,
  individualDescription? : string[],
  repository : string,
  individualRepository? : string,
  site : string,
  individualSite ?: string,
  importance : number,
  back : boolean,
  front : boolean,
  descriptionAll : string[]
}