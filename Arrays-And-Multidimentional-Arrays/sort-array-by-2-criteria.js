function sortArray(array) {
    array.sort().sort((l1, l2) => l1.length > l2.length).forEach(e => console.log(e));
}

sortArray(['alpha',
    'beta',
    'gamma'
]);

sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);

sortArray(['test',
    'Deny',
    'omen',
    'Default'
])
