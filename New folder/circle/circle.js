function result() {
    const pi=3.14;
    let fn= parseFloat(document.getElementById("Radious").value);
    document.getElementById("perimeter").value=2*pi*fn;
    document.getElementById("txtresult").value=pi*fn*fn;
}