var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var email = "/range/low";
        console.log(email);
        var re = /\//g;
        var result = email.replace(re, '.');
        console.log(result);
        console.log('Hello World');
        var strjson = "                   \n            {\n                \"name\": \"yyy\",\n                \"addr\": \"xxxx\",\n                \"value\": \"23b857a0-1ab5-9658-8167-73e6236238fe\"                \n            }            \n        ";
        var json = JSON.parse(strjson);
        console.log(JSON.stringify(json));
        return 0;
    };
    return Startup;
}());
Startup.main();
