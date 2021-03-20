const url = "https://my-json-server.typicode.com/Aniaa2308/SkazochnyeDalboebi/animals/"

$('#poisk').click(()=>{
    let query = $('#vv').val();
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url + query)
    
        xhr.onload = () => {
            if(xhr.status > 300){
                console.log(xhr.status);
            }
            let res = JSON.parse(xhr.response);
                $('#result').html(`
                    <h1>${res.name}</h1>
                    <div>${res.description}</div>
                    <img src="${res.avatar_url}" width="200px">
                `);
         
        }
    
        xhr.onerror = (err) => {
            console.log(err);
        }
    
        xhr.send();
    }
);