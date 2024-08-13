CHAT_URL = "/chat/"

const getChats = async (callback, errorCB) => {
    try {
        let response = await fetch(CHAT_URL);
        let myJSON = await response.json();
        callback(myJSON);
        // throw new Error("Test")
    }
    catch (error) {
        errorCB(error)
    }
}

const getChat = async (callback, errorCB, chatId) => {
    try {
        let response = await fetch(`${CHAT_URL}${chatId}`);
        let myJSON = await response.json();
        callback(myJSON);
    }
    catch (error) {
        errorCB(error)
    }
}

const deleteChat = async (callback, errorCB, chatId) => {
    try {
        let response = await fetch(`${CHAT_URL}${chatId}`, {
            method: "DELETE"
        });
        let myJSON = await response.json();
        callback(myJSON);
    }
    catch (error) {
        errorCB(error)
    }
}

const addChat = async (callback, errorCB, name, message) => {
    try {
        console.log(
            JSON.stringify( { name, message } )
        )
        let response = await fetch(`${CHAT_URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( { name, message } )
        });
        let myJSON = await response.json();
        callback(myJSON);
    }
    catch (error) {
        errorCB(error)
    }
}