'use strict'
let uname=document.getElementById('name');
let upass=document.getElementById('pass');
let submit=document.getElementById('submit');
let form=document.getElementById('login').getBoundingClientRect().right;

let result=true;
submit.addEventListener('mouseover',function(e){

   
    if(uname.value.length <=0 || upass.value.length <=0){

        uname.classList.add('rong_input');
        upass.classList.add('rong_input');
   
        if(result ==true){

            // submit.classList.add('move');
            submit.style.position='relative';
            submit.style.transform='translateX(50%)';
            result=false;
        }
        else if(result==false){
            // submit.classList.add('movee');

            submit.style.position='relative';
            submit.style.transform='translateX(-50%)';
            result=true;
        }

    }else{
        submit.style.position='relative';
        submit.style.transform='translateX(0%)';

        uname.classList.remove('rong_input');
        upass.classList.remove('rong_input');
       
        uname.classList.add('right_input');
        upass.classList.add('right_input');

    }
    console.log(result);
})
