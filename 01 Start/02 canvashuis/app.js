class App
{
    runApplication()
    {
        console.log("hello world");
        let canvas = document.getElementById("canvasId");
        
        
        g.beginPath();
        g.fillstyle = "blue"
        g.moveto(20,20);
        g.lineTo(300,300);
        g.closePath();
        g.stroke();
        g.gc.strokeStyle

        console.log(canvas);


    }
}

let app = new App();
app.runApplication();