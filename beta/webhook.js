const url = "https://discord.com/api/webhooks/979324370319179796/KioOWQaAFXkv5PUSvIB0wc2bRoiSZ0QQ7ppsN4OrXesiNwfXeZXNODG6521XVPsW2-Mj";
const msg = "Access - PC Composition Creator Beta v4";
const message = { username: "Access Chacker", content: msg };

var script = document.createElement('script');
script.src='https://ipinfo.io?callback=callback'
document.head.appendChild(script)

function callback(data) {
  if(data.ip==="106.154.133.188"){
    //
  }else{
    postData(url, message)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

    function postData(url = ``, data = {}) {
      return fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-type": "application/json",
        },
            body: JSON.stringify(data),
      }).then((response) => response.text());
    }
  }
}