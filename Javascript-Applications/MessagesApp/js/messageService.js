(() => {
    function listMessagesByRecipient(recipientUsername) {
        let url = `messages?query={"recipient_username":"${recipientUsername}"}`;
        requester.get('appdata', url).then(utils.handleError);
    }

    function getMessagesBySender(senderUsername) {
        let url = `messages?query={"sender_username":"${senderUsername}"}`;
        requester.get('appdata', url).then(utils.handleError);
    }
    
    function sendMessage(message) {
        requester.post('appdata', 'messages', message).then(utils.handleError);
    }

    function deleteMessage(messageId) {
        let url = `messages/${messageId}`;
        requester.del('appdata', url)
    }

    return {
        listMessagesByRecipient,
        getMessagesBySender,
        sendMessage,
        deleteMessage
    }
    
})();
