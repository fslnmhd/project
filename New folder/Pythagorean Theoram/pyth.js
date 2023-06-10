function care() {
    
    let fn= parseFloat(document.getElementById("leg1").value);
    let sn= parseFloat(document.getElementById("leg2").value);
    document.getElementById("result").value=Math.sqrt(fn*fn+sn*sn);
  
}