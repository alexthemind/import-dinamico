/**
 * 
 * @param url 
 * @param data 
 */
async function callImportDinamicaly(url:string,data:any={}) {
    
    try 
    {
        let obj = await import(url);
        let name = url.split('/').pop()?.split('.').pop() || 'any';

        let clss = new obj[name](data);

        return clss;
    }
    catch(err)
    {
        console.error(err);
    }

}

/**
 * en caso de que se deba pasar datos por el constructor
 */
let data:any = {
    name: 'Rafael A Flores M.',
    age: 37
};
let obj = callImportDinamicaly('./anotherModule',data);
    obj.then(rs => {
        rs.render('Hola mundo!') // <----- mensaje de texto

        let suma = rs.suma(11,44); // <---- suma de valores
        
        console.log(suma,'<<<<');
    });