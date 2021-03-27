var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)ava2\s*\=\s*([^;]*).*$)|^.*$/, "$1");

if(cookieValue != ""){
    let auth = document.getElementById('auth');
    auth.innerHTML=`
       <img src='${cookieValue}'>
    `
}