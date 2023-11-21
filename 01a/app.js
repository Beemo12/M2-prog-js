class App
{
    runApplication()
    {
        console.log(("hello world!"));
        let appNaam = "Demo App";
        let versienummer = 1.0
        let versiedatum = "21-11-2023";
        let autheur = "Yassine";
        let copyright = "Geen BV";
        let distributeur = "geen soft";
        let darkmode = true
        console.log(appNaam, versienummer, versiedatum, autheur, copyright, distributeur, darkmode,)

    }
}

let app = new App();
app.runApplication();