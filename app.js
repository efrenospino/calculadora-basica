var borrar = false;

function deletecarac() {
    var caja2 = document.f1.txtcaja2.value;
    if (caja2 == "" || caja2 == "0" || caja2.length == 1 && blocdel != true) {
        document.f1.txtcaja2.value = "0";
    } else if (blocdel != true) {
        var res = caja2.substring(0, caja2.length - 1);
        document.f1.txtcaja2.value = res;
    }
}

function escribir(n) {
    var caja2 = document.f1.txtcaja2.value;
    if (borrar) {
        //alert("se borro");
        document.f1.txtcaja2.value = "";
        borrar = false;
        document.f1.txtcaja2.value = n;
    } else if (caja2 == "0" && n != ".") {
        cajao = caja2.replace("0", "")
        document.f1.txtcaja2.value = cajao + n;
    } else {
        document.f1.txtcaja2.value = caja2 + n;
    }
}

function raiz() {
    var caja1 = document.f1.txtcaja1.value;
    var caja2 = document.f1.txtcaja2.value;
    document.f1.txtcaja1.value = "Math.sqrt(" + caja2 + caja1 + ")";
    document.f1.txtcaja2.value = "";
}

function arit(o) {
    var caja1 = document.f1.txtcaja1.value;
    var caja2 = document.f1.txtcaja2.value;
    var unum = caja1.substring(caja1.length - 1);
    calcular()
    if (unum == "+" || unum == "-" || unum == "*" || unum == "/") {
        unum = unum.replace(unum, o);
        var res = caja1.substring(0, caja1.length - 1);
        document.f1.txtcaja1.value = res + unum;
    }
    if (caja1 == "" && caja2 != "") {
        document.f1.txtcaja1.value = caja2 + o;
    } else {
        document.f1.txtcaja1.value = caja1 + caja2 + o;
    }
    borrar = true;
}

function calcular() {
    var caja1 = document.f1.txtcaja1.value;
    var caja2 = document.f1.txtcaja2.value;
    document.f1.txtcaja2.value = eval(caja1 + caja2);
    document.f1.txtcaja1.value = "";
    borrar = true;
    blocdel = true;
}

function masmenos() {
    var caja2 = document.f1.txtcaja2.value;
    if (caja2 > 0) {
        document.f1.txtcaja2.value = "(-" + caja2 + ")";
    } else {
        cajaplus = caja2.replace(/[-|(|)]/g, "");
        document.f1.txtcaja2.value = cajaplus;
    }
}

function potencia(num) {

    debugger
    var numBase = document.getElementsByName("txtcaja2")[0].value;
    //$("#txtcaja2").val();

    //porNombre=document.getElementsByName("nombre")[0].value; 
    var num2 = Math.pow(numBase, num);
    var letras = numBase + "²";
    //$("#txtcaja2").val(num2);
    document.getElementsByName("txtcaja2")[0].value = num2;
    document.getElementsByName("txtcaja1")[0].value = letras;

    // Math.pow($("#txtcaja2").val(), num)
}

function factorial() {
    debugger
    var numBase = document.getElementsByName("txtcaja2")[0].value;
    var num2 = 1;
    var letras = "1";
    for (var i = 1; i <= numBase; i++) {
        num2 = num2 * i;
        letras = letras + " x " + i;
    }
    document.getElementsByName("txtcaja2")[0].value = num2;
    document.getElementsByName("txtcaja1")[0].value = letras;
    //txtcaja1
}