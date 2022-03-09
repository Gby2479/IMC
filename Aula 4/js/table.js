document.querySelector("#registrar").onclick=dados;

let n=0;
function dados(){
    let nome=document.querySelector("#name").value;

    let peso=document.querySelector("#peso").value;
    peso=peso.replace(",",".");
    peso=parseFloat(peso);

    let altura=document.querySelector("#altura").value;
    altura=altura.replace(",",".");
    altura=parseFloat(altura);

    let imc=peso/(altura*altura);
    imc=imc.toFixed(1);

    let tbody=document.querySelector("#registro");

    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");

    td1.append(n=n+1);
    td2.append(nome);
    td3.append(peso);
    td4.append(altura);
    td5.append(imc);

    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)

    tbody.append(tr)


}
     