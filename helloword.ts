class Startup {
    public static main(): number {
        let email = "/range/low"

        console.log(email)
        let re: RegExp = /\//g;
        let result = email.replace(re, '.');

        console.log(result)
        console.log('Hello World');
        let strjson = `                   
            {
                "name": "yyy",
                "addr": "xxxx",
                "value": "23b857a0-1ab5-9658-8167-73e6236238fe"                
            }            
        `;
        let json = JSON.parse(strjson);    
        
        console.log(JSON.stringify(json));

        
        return 0;
    }
}

Startup.main();