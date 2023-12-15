class App
{
    runApplication()
    {
        this.appNaam = ("hello world!");

        let canvas = document.getElementById("canvasId")
        console.log(canvas)

        let g = canvas.getContext("2d");
        g.fillstyle="red";
        g.fillrect(0,0,canvas.clientWidth,canvas.height);
        g.fillrect(0,0,10,10);
        g.fillstyle = "red";

    }
}

let app = new App();
app.runApplication();
