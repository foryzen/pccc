var url = "https://discord.com/api/webhooks/979335207448625192/I0wc7DaCxfpBoG4Gr9x6LsckEth2kfqmhHRRn5X8_6qIWLUCsvwLx7EiWi30fUbMuG92";

function a(){

    var msg = document.getElementById("text-box").value
    var name = document.getElementById("input-box").value
    
    if(name==""){
        var name = "Feedback"
    }

    if(msg==""){
        alert("メッセージを入力してください")
    }else{
        var message = { username: name, content: msg }

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
        document.write("フィードバックが送信されました")
    }
}