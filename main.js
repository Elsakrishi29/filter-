const products=[Blusher=550,Eyeliner=100,Highlighter=1000,Eyeshadow=400,Concealer=780];
let num=products.filter(function(value){
    return value>500;
});
document.write(num);