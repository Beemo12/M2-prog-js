class App
{
    runApplication()
    {
        this.greeting= "starting up";
        this.appNaam = "Demo App";
        this.versienummer = 1.0
        this.versiedatum = "21-11-2023";
        this.autheur = "Yassine";
        this.copyright = "Geen BV";
        this.distributeur = "geen soft";
        this.darkmode = true
        this.boolean = false
        this.string = "string"
        this.number = 1


    }
}

let app = new App();
app.runApplication();

console.log (app.greeting);
console.log("hello world!");
console.log("appnaam: " + app.appNaam)
console.log("versie: " + app.versienummer)
console.log("versiedatum: " + app.versiedatum)
console.log("autheur: " + app.autheur)
console.log("copyright: " + app.copyirght)
console.log("distributeur: " + app.distributeur)
console.log("darkmode: " + app.darkmode)
console.log("boolean: " + app.aboolean)
console.log("string: " + app.string)
console.log("number: " + app.number)