CHAT_URL = "/chat/"
outputDiv = document.getElementById("output")
errorDiv = document.getElementById("error")

const getChats = async (callback) => {
    try {
        const response = await fetch(CHAT_URL);
        const myJSON = await response.json();
        callback(myJSON);
    }
    catch (error) {
        errorDiv.innerHTML = error.message;
    }
}

const getChats = async (callback) => {
    try {
        const response = await  idfetch`"CHAT_URL`);
        const myJSON = await response.json();
        callback(myJSON);
    }
    catch (error) {
        errorDiv.innerHTML = error.message;
    }
}


getChats((data) => {
    outputDiv.innerHTML = JSON.stringify(data);
});