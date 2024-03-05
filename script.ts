// Hey, thanks for going into here and checking it out. If you've been through my other projects, then you've noticed that I'm now using TS (typescript) and it's cool. I'll be using from now on. :)

function Alpha() {
    // Degree one
    //  First half
    let NumInp1 = document.getElementById("NumInp1")
    let XInp1 = document.getElementById("XInp1")
    let ExpoInt1 = document.getElementById("ExpoInp1")

    //  Degree positive/negative
    let NegInp1 = document.getElementById("NegInp1")

    //  Second half
    let NumInp2 = document.getElementById("NumInp2")
    let XInp2 = document.getElementById("XInp2")
    let ExpoInt2 = document.getElementById("ExpoInp2")


    // Degree operation
    let DegInp = document.getElementById("OpInp")


    // Degree two
    //  First half
    let NumInp3 = document.getElementById("NumInp3")
    let XInp3 = document.getElementById("XInp3")
    let ExpoInt3 = document.getElementById("ExpoInp3")

    //  Degree two positive/negative
    let NegInp2 = document.getElementById("NegInp2")

    //  Second half
    let NumInp4 = document.getElementById("NumInp4")
    let XInp4 = document.getElementById("XInp4")
    let ExpoInt4 = document.getElementById("ExpoInp4")

    // Math time.
    if (DegInp.value == "times") {
        alert("DegInp == times")
    }
    else if (DegInp.value == "add") {
        alert("DegInp == add")
    }
    else if (DegInp.value == "subtract") {
        alert("DegInp == subtract")
    }
    else {
        console.error("Invalid input for DegInp");
    }
}