function ArgumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log("Shout out spree")
}
ArgumentsAreHandy();
ArgumentsAreHandy();
ArgumentsAreHandy();



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