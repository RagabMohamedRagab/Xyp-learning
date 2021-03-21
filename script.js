/********Start ******** */
let menu=document.getElementById('menu'),
  list=document.querySelector('.list');
  menu.onclick=function(){
      if(list.style.right=='-200px'){
          list.style.right='0px';
      }else{
          list.style.right='-200px';
      }
  }