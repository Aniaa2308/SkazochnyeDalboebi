var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)ava\s*\=\s*([^;]*).*$)|^.*$/, "$1");

if(cookieValue != ""){
    let auth = document.getElementById('auth');
    auth.innerHTML=`
       <img src='${cookieValue}'>
    `
}