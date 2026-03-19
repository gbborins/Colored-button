var sum1 = (sm1,sb1) => {
    switch(sm1){
        case 0:case 4:case -4:
            modelStyle(a,yel,yellow0,plus,minus,'Yellow','-1px -1px 0px rgb(50, 50, 0) inset','10%');
            count[0] = 0;
            break;
        case 1:case -3:
            modelStyle(a,yel,yellow0,plus,minus,'Red','-1px -1px 0px rgb(50, 0, 0) inset','20%');
            break;
        case 2:case -2:
            modelStyle(a,yel,yellow0,plus,minus,'Blue','-1px -1px 0px rgb(0, 0, 50) inset','40%');
            break;
        case 3:case -1:
            modelStyle(a,yel,yellow0,plus,minus,'Green','-1px -1px 0px rgb(0, 50, 0) inset','80%');
            break;
    };
    switch(sb1){
        case 0:case 4:case -4:
            modelStyle(a,yel,yellow0,plus,minus,'Orange','-1px -1px 0px rgb(50, 50, 0) inset','10%');
            count[0] = 0;
            break;
        case 1:case -3:
            modelStyle(a,yel,yellow0,plus,minus,'Brown','-1px -1px 0px rgb(50, 0, 0) inset','20%');
            break;
        case 2:case -2:
            modelStyle(a,yel,yellow0,plus,minus,'Purple','-1px -1px 0px rgb(0, 50, 0) inset','40%');
            break;
        case 3:case -1:
            modelStyle(a,yel,yellow0,plus,minus,'Salmon','-1px -1px 0px rgb(0, 0, 50) inset','80%');
            break;
    };
};
var sum2 = (sm2,sb2) =>{
    switch(sm2){
        case 0:case 4:case -4:
            modelStyle(b,rad,red0,plus2,minus2,'Red','-1px -1px 0px rgb(50, 0, 0) inset','20%','8%','12%');
            count[1] = 0;
            break;
        case 1: case -3:
            modelStyle(b,rad,red0,plus2,minus2,'Blue','-1px -1px 0px rgb(0, 0, 50) inset','40%');
            break;
        case 2: case -2:
            modelStyle(b,rad,red0,plus2,minus2,'Green','-1px -1px 0px rgb(0, 50, 0) inset','80%');
            break;
        case 3: case -1:
            modelStyle(b,rad,red0,plus2,minus2,'Yellow','-1px -1px 0px rgb(50, 50, 0) inset','10%');
            break;
    };
    switch(sb2){
        case 0:case 4:case -4:
            modelStyle(b,rad,red0,plus2,minus2,'Brown','-1px -1px 0px rgb(50, 0, 0) inset','20%','8%','12%');
            count[1] = 0;
            break;
        case 1: case -3:
            modelStyle(b,rad,red0,plus2,minus2,'Purple','-1px -1px 0px rgb(0, 0, 50) inset','40%');
            break;
        case 2: case -2:
            modelStyle(b,rad,red0,plus2,minus2,'Salmon','-1px -1px 0px rgb(0, 50, 0) inset','80%');
            break;
        case 3: case -1:
            modelStyle(b,rad,red0,plus2,minus2,'Orange','-1px -1px 0px rgb(50, 50, 0) inset','10%');
            break;
    };
};
var sum3 = (sm3,sb3) =>{
    switch(sm3){
        case 0: case 4: case -4:
            modelStyle(c,blu,blue0,plus3,minus3,'Blue','-1px -1px 0px rgb(0, 0, 50) inset','40%','17%','24%');
            count[2] = 0;
            break;
        case 1: case -3:
            modelStyle(c,blu,blue0,plus3,minus3,'Green','-1px -1px 0px rgb(0, 50, 0) inset','80%');
            break;
        case 2: case -2:
            modelStyle(c,blu,blue0,plus3,minus3,'Yellow','-1px -1px 0px rgb(50, 50, 0) inset','10%');
            break;
        case 3: case -1:
            modelStyle(c,blu,blue0,plus3,minus3,'Red','-1px -1px 0px rgb(50, 0, 0) inset','20%');
            break;
    };
    switch(sb3){
        case 0: case 4: case -4:
            modelStyle(c,blu,blue0,plus3,minus3,'Purple','-1px -1px 0px rgb(0, 0, 50) inset','40%','17%','24%');
            count[2] = 0;
            break;
        case 1: case -3:
            modelStyle(c,blu,blue0,plus3,minus3,'Salmon','-1px -1px 0px rgb(0, 50, 0) inset','80%');
            break;
        case 2: case -2:
            modelStyle(c,blu,blue0,plus3,minus3,'Orange','-1px -1px 0px rgb(50, 50, 0) inset','10%');
            break;
        case 3: case -1:
            modelStyle(c,blu,blue0,plus3,minus3,'Brown','-1px -1px 0px rgb(50, 0, 0) inset','20%');
            break;
    };
};
var sum4 = (sm4,sb4) =>{
    switch(sm4){
        case 0: case 4: case -4:
            modelStyle(d,gre,green0,plus4,minus4,'Green','-1px -1px 0px rgb(0, 50, 0) inset','80%','26%','36%');
            count[3] = 0;
            break;
        case 1: case -3:
            modelStyle(d,gre,green0,plus4,minus4,'Yellow','-1px -1px 0px rgb(50, 50, 0) inset','10%');
            break;
        case 2: case -2:
            modelStyle(d,gre,green0,plus4,minus4,'Red','-1px -1px 0px rgb(50, 0, 0) inset','20%');
            break;
        case 3: case -1:
            modelStyle(d,gre,green0,plus4,minus4,'Blue','-1px -1px 0px rgb(0, 0, 50) inset','40%');
            break;
    };
    switch(sb4){
        case 0: case 4: case -4:
            modelStyle(d,gre,green0,plus4,minus4,'Salmon','-1px -1px 0px rgb(0, 50, 0) inset','80%','26%','36%');
            count[3] = 0;
            break;
        case 1: case -3:
            modelStyle(d,gre,green0,plus4,minus4,'Orange','-1px -1px 0px rgb(50, 50, 0) inset','10%');
            break;
        case 2: case -2:
            modelStyle(d,gre,green0,plus4,minus4,'Brown','-1px -1px 0px rgb(50, 0, 0) inset','20%');
            break;
        case 3: case -1:
            modelStyle(d,gre,green0,plus4,minus4,'Purple','-1px -1px 0px rgb(0, 0, 50) inset','40%');
            break;
    };
};
const work = () =>{
    image = 0;
    document.body.style.background = 'black';
    hps.style.color = 'white';
    imgs.setAttribute('src','https://i.pinimg.com/originals/cc/65/09/cc6509211d4eea95619a31b1c290c417.jpg');
    const atr = [a,b,c,d,yel,rad,blu,gre,yellow0,red0,blue0,green0,plus,plus2,plus3,plus4,minus,minus2,minus3,minus4,hps,resulted];
    for( let i in atr){                    
        atr[i].style.transition = "2s";};
    sum1(count[0],'');
    sum2(count[1],'');
    sum3(count[2],'');
    sum4(count[3],'');
    resulted.style.color = "white";
};
plus.addEventListener('click',function(){
    count[0]++;
    color[0]++;
    if(image === 1){
        sum1('',count[0]);
    } else{
        sum1(count[0],'');
    };
    yellow0.innerHTML = color[0];
});
plus2.addEventListener('click',function(){
    count[1]++;
    color[1]++;
    if(image==1){
        sum2('',count[1]);
    } else{
        sum2(count[1],'');
    };
    red0.innerHTML = color[1];
});
plus3.addEventListener('click',function(){
    count[2]++;
    color[2]++;
    if(image === 1){
        sum3('',count[2]);
    } else{
        sum3(count[2],'');
    };
    blue0.innerHTML = color[2];
});
plus4.addEventListener('click',function(){
    count[3]++;
    color[3]++;
    if(image === 1){
        sum4('',count[3]);
    } else{
        sum4(count[3],'');
    };
    green0.innerHTML = color[3];
});
minus.addEventListener('click',function(){
    count[0]--;
    color[0]--;
    if(image === 1){
        sum1('',count[0]);
    } else{
        sum1(count[0],'');
    };
    yellow0.innerHTML = color[0];
});
minus2.addEventListener('click',function(){
    count[1]--;
    color[1]--;
    if(image==1){
        sum2('',count[1]);
    } else{
        sum2(count[1],'');
    };
    red0.innerHTML = color[1];
});
minus3.addEventListener('click',function(){
    count[2]--;
    color[2]--;
    if(image === 1){
        sum3('',count[2]);
    } else{
        sum3(count[2],'');
    };
    blue0.innerHTML = color[2];
});
minus4.addEventListener('click',function(){
    count[3]--;
    color[3]--;
    if(image === 1){
        sum4('',count[3]);
    } else{
        sum4(count[3],'');
    };
    green0.innerHTML = color[3];
});
imgs.addEventListener("click",function() {
    image++;
    if(image === 1){
        sum1('',count[0]);
        sum2('',count[1]);
        sum3('',count[2]);
        sum4('',count[3]);
        document.body.style.background = 'white';
        hps.style.color = 'black';
        imgs.setAttribute('src','https://i.pinimg.com/originals/c9/c1/cf/c9c1cf41920598394f613f1fc38a08ff.jpg');0
        resulted.style.color = "black";
    } else{
        work();}
    });
document.addEventListener("DOMContentLoaded", function() { work();});