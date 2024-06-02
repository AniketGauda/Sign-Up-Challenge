let ef = document.getElementById("email");
let pf = document.getElementById("password");

let gs = document.getElementById("gs");

ef.onchange = ()=>{
    let ecr = document.getElementById("ecr");
    if(ef.value.length>3 && ef.value.includes('@') && ef.value.includes('.')){
       
        console.log("email cheack passed");
        ecr.style.display = "none";
    }
    else{
        console.log("email check failed");
        ecr.style.display = "block";
    }


    if( (ef.value.length>3 && ef.value.includes('@') && ef.value.includes('.')) && (pf.value.length>8) ){
        console.log("Green signal");
        gs.style.display="block";
    }


}

pf.onchange = ()=>{
    let pcr = document.getElementById("pcr");
    if(pf.value.length>8){
        console.log("password check passed");
        pcr.style.display="none";
    }
    else{
        console.log("password check failed");
        pcr.style.display="block";
    }


    if( (ef.value.length>3 && ef.value.includes('@') && ef.value.includes('.')) && (pf.value.length>8) ){
        console.log("Green signal");
        gs.style.display="block";
    }
}

let btn = document.getElementById("btn");
btn.onclick = (e)=>{
    e.preventDefault();
    if( (ef.value.length>3 && ef.value.includes('@') && ef.value.includes('.')) && (pf.value.length>8) ){
        console.log("conformation window will open");
        document.getElementById("form").style.display="none";
        document.getElementById("mc").style.display="block";
    }
}

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.onclick = ()=>{
    alert("Successfull SignUp!");
}

btn2.onclick = ()=>{
    document.getElementById("form").style.display="block";
    document.getElementById("mc").style.display="none";

    // ef.value.length = "";
    // pf.value.length = "";

    window.location.reload();
}