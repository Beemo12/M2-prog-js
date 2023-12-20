class App {
    runApplication() {
        console.log("hello world!");

        let canvas = document.getElementById("canvasId");
        console.log(canvas);

        let g = canvas.getContext("2d");

        this.drawHouse(g);
    }

    drawHouse(g) {

        g.beginPath();
        g.fillStyle = "green";
        g.moveTo(300, 100);
        g.lineTo(300, 100);
        g.lineTo(700, 200);
        g.lineTo(600, 400);
        g.lineTo(200, 300);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(700, 200);
        g.lineTo(700, 200);
        g.lineTo(800, 300);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "blue";
        g.moveTo(800, 300);
        g.lineTo(800, 300);
        g.lineTo(800, 500);
        g.lineTo(600, 600);
        g.lineTo(600, 400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "yellow";
        g.moveTo(600, 400);
        g.lineTo(600, 400);
        g.lineTo(600, 600);
        g.lineTo(200, 500);
        g.lineTo(200, 300);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.fillStyle = "purple";
        g.moveTo(500, 400);
        g.lineTo(500, 500);
        g.lineTo(300, 450);
        g.lineTo(300, 355);
        g.closePath();
        g.stroke();
        g.fill();
    }
}

let app = new App();
app.runApplication();