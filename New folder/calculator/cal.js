function sum() {

   // alert("Button Test");
    let fn= parseFloat(document.getElementById("txtfirstnumber").value);
    let sn= parseFloat(document.getElementById("txtsecondnumber").value);
    document.getElementById("txtresult").value=fn+sn;
}
function sub() {

    // alert("Button Test");
     let fn= parseFloat(document.getElementById("txtfirstnumber").value);
     let sn= parseFloat(document.getElementById("txtsecondnumber").value);
     document.getElementById("txtresult").value=fn-sn;
 }
 function mal() {

    // alert("Button Test");
     let fn= parseFloat(document.getElementById("txtfirstnumber").value);
     let sn= parseFloat(document.getElementById("txtsecondnumber").value);
     document.getElementById("txtresult").value=fn*sn;
 }
 function dev() {

    // alert("Button Test");
     let fn= parseFloat(document.getElementById("txtfirstnumber").value);
     let sn= parseFloat(document.getElementById("txtsecondnumber").value);
     document.getElementById("txtresult").value=fn/sn;
 }