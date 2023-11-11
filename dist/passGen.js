const inp=document.getElementById('inp')
const button = document.getElementById('btn')
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const num = ['1','2','3','4','5','6','7','8','9','0'];
const sym = ['!','@','#','$','%','^','&','*','(',')','=','/','?'];

button.addEventListener('click', ()=>{
    inp.value=password();
})

function password(){
    const check1=document.getElementById('check1');
    const check2=document.getElementById('check2');
    const check3=document.getElementById('check3');
    const check4=document.getElementById('check4');
    const len=document.getElementById('length').value;
    var p = "";
    var arr=[];
    if(check1.checked) arr.push(...upperCase);
    if(check2.checked) arr.push(...lowerCase)
    if(check3.checked) arr.push(...num);
    if(check4.checked) arr.push(...sym);
    for(let i=0; i<len; i++){
        const j = Math.floor(Math.random()*arr.length);
        p+=arr[j];
    }
    return p;
}

const inputEle = document.getElementById('inp');
document.getElementById('copy').addEventListener('click', ()=>{
    inputEle.select();
    document.execCommand('copy')
    getSelection().removeAllRanges()
}) 
