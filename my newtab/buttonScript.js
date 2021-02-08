const show = (classname) => {
    const elements = document.getElementsByClassName(classname);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
    }
}
const hide = (classname) =>{
    const elements = document.getElementsByClassName(classname);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}
const showAll = () => {
    show("anchor");
    show("blue");
    show("red");

    document.getElementById("main-container").style.alignItems = "center";
    document.getElementById("btnShow").style.display = "none";
    document.getElementById("btnHide").style.display = "block"
}
const hideAll = () =>{
    const currDate = new Date();
    const dayOfTheWeek = currDate.getDay();
    setDisplay(dayOfTheWeek);
}
const setDisplay = (day) => {
    if (day == 1) {
        document.getElementById("btnHide").style.display = "none";
        document.getElementById("btnShow").style.display = "block";
        show("anchor");
        hide("blue")
        hide("red")
    }
    else if (day == 2 || day == 4) {
        document.getElementById("btnHide").style.display = "none";
        document.getElementById("btnShow").style.display = "block";
        show("blue");
        hide("anchor");
        hide("red");
        
    }
    else if (day == 3 || day == 5) {
        document.getElementById("btnHide").style.display = "none";
        document.getElementById("btnShow").style.display = "block";
        show("red");
        hide("blue");
        hide("anchor");
    }
    
}

const currDate = new Date();
const dayOfTheWeek = currDate.getDay();
setDisplay(dayOfTheWeek);