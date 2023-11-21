class App
{
    runApplication()
    {
        this.greeting= "starting up";
        
        let appNaam = "Demo App";
        let versienummer = 1.0
        let versiedatum = "21-11-2023";
        let autheur = "Yassine";
        let copyright = "Geen BV";
        let distributeur = "geen soft";
        let darkmode = true

    }
}

let app = new App();
app.runApplication();

console.log (app.greeting);
console.log(("hello world!"));
console.log("appnaam: " + appNaam)
console.log("versie: " + versienummer)
console.log("versiedatum: " + versiedatum)
console.log("autheur: " + autheur)
console.log("copyright: " + copyirght)
console.log("distributeur: " + distributeur)
console.log("darkmode: " + darkmode)