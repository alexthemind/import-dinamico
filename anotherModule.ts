
export class anotherModule {

    public constructor(data:any) {
        console.log(data,'<<<<');
    }
    
    public render(str:string) {
        console.log(str,'<-----');
    }

    public suma(val1:number,val2:number) {
        return val1 + val2;
    }

}