function attachEvents() {
    let url = 'https://phonebook-nakov.firebaseio.com/phonebook';

    $('#btnLoad').click(() => {
        $.ajax({
            type: 'GET',
            url: url + '.json',
            success: loadPhonebookEntries
        });
    });

    function loadPhonebookEntries(data) {
        let ul = $('#phonebook');
        ul.empty();
        for (let key in data) {
            let li = $('<li>').attr('id', key).text(`${data[key].person}: ${data[key].phone}`);
            let btn = $('<button>').text('Delete');
            btn.click(() => deleteContact(key));
            li.append(btn);
            ul.append(li);
        }
    }
    
    function deleteContact(key) {
        $.ajax({
            type: 'DELETE',
            url: url + `/${key}` + '.json',
            success: function() {
                $(`#${key}`).remove();
            }
        })
    }

    $('#btnCreate').click(function () {
        let personName = $('#person').val();
        let phoneNum = $('#phone').val();

        if (personName && phoneNum) {
            let entry = {'person': personName, 'phone': phoneNum}
            $.ajax({
                type: 'POST',
                url: url + '.json',
                data: JSON.stringify(entry),
                success: function () {
                    $('#person').val('');
                    $('#phone').val('');
                }
            })
        }
    });
}
