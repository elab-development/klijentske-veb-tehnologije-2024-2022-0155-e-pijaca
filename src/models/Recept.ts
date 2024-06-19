export class Recept  {
    id: number;
    instructions: string;
    title:string;
    image: string;

    constructor(id:number,instructions:string,title:string, image: string){
        this.id=id;
        this.instructions=instructions;
        this.title=title;
        this.image=image;
    }
 
}
