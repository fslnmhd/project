function area() {
    const pi=3.14;
    let fn= parseFloat(document.getElementById("radious").value);
    let sn= parseFloat(document.getElementById("height").value);
    document.getElementById("voloume").value=pi*pi*fn*sn;
    
}