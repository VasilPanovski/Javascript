function search() {
    let input = $('#searchText')
    let matches = $(`ul#towns li:contains(${input.val()})`).css('font-weight', 'bold');
    let matchesCount = matches.toArray().map(li => li.textContent).length;
    $('#result').text(`${matchesCount} was found`);

    input.val('');
}
