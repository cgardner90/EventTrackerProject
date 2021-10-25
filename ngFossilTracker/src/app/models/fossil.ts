export class Fossil {

id:number;
name:string;
species:string;
description:string;
age: number;
country: string;
discoveredBy: string;
discoveredIn: string;
imgUrl:string;
constructor(
  id:number=0,
  name:string = "default",
  species: string="default",
  description:string="default",
  age: number=0,
  country:string="default",
  discoveredBy:string="default",
  discoveredIn: string="default",
  imgUrl: string=""
){
  this.id=id;
  this.name=name;
  this.species=species;
  this.description=description;
  this.age=age;
  this.country=country;
  this.discoveredBy=discoveredBy;
  this.discoveredIn=discoveredIn;
  this.imgUrl=imgUrl;
}



}
