function clk(){
    let a = document.getElementById("udb1").value;

    let b = new Date(a);
    let c = b.getTime();

    let d = new Date();
    let e = d.getTime();

    diff = e - c;

    let Total_days = diff / (1000 * 60 * 60 * 24);
        document.getElementById("udb2").innerHTML = Math.floor(Total_days);

    let age = (Total_days / 365);
    document.getElementById("udb3").innerHTML = Math.floor(age);
}