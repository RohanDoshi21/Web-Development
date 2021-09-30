let name = prompt("what is your name?", "Guest");
    alert("Welcome " + name);
console.log('hello world');
function hide(){
   let btn = document.getElementById('btn');
   let para = document.getElementById('para');
   let alertt = document.getElementById('alertt');
   //alertt.addEventListener('mouseover', function run(){
   //     alert('mouseover')
   //});
  // let sub = document.getElementById('submit')

   if(para.style.display != 'none')
   para.style.display = 'none';
   else
   para.style.display = 'block'
}
//function Submit(){
  // let Submit = document.getElementById('Submit');
   
 //  confirm("Do you want to submit for sure?");


//}
function clicked() {
   return confirm('Do you really want to Submit?');
}

function dsipayTime(){
   time = new Date();
   document.getElementById('Time').innerHTML = time;
}

setInterval(dsipayTime, 1000);
