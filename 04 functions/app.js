function GlobalFunction()
{
    console.log("ik ben global")
    console.log("dus je mag mij overal aanroepen")
}

class App
{
    runApplication()
    {
        console.log(("hello world!"));
        GlobalFunction();
    }
}

let app = new App();
app.runApplication();
GlobalFunction();
GlobalFunction();
GlobalFunction();