function initializeTable() {
    $('#createLink').click(createCountry);

    function createCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        addToTable(country, capital);
    }

    addToTable('Bulgaria', 'Sofia');
    addToTable('Germany', 'Berlin');
    addToTable('Russia', 'Moscow');

    function addToTable(country, capital) {
        let newRow = `<tr>
                        <td>${country}</td>
                        <td>${capital}</td>
                        <td>
                            <span><a id="up" href="#">[Up]</a>&nbsp;</span>
                            <span><a id="down" href="#" onclick="moveDown()">[Down]</a>&nbsp;</span>
                            <span><a id="delete" href="#" onclick="delete()">[Delete]</a></span>
                        </td>
                       </tr>`;
        $('table#countriesTable').append(newRow);
        fixRows();
    }

    function moveUp() {
        $('#up').click(function () {
            console.log('hello')
        });
    }

    function fixRows() {
        // $('table#countriesTable tr:nth-child(3) > td:last-child > span:first-child').css('display', 'none');
        $('#countriesTable a').css('display', 'inline');

        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')")
            .css('display', 'none');

        $(tableRows[tableRows.length - 1]).find("a:contains('Down')")
            .css('display', 'none');

    }
}
