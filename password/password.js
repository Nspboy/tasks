// function togglePassword() {
//     let p = document.getElementById("pass");
//     p.type = p.type === "password" ? "text" : "password";
// }
let show = false;
function toggle(){
     show = !show;
     document.getElementById("hide").innerText = show ? "Hide" : "Show";
      }

