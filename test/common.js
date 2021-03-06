// array-callback-return
[1, 2, 3].map((i) => {
    const j = i / 10;
    return j * 2;
});
[1, 2, 3].filter(i => i > 2);

// default-case
function defaultCase() {
    switch (true) {
        case 'a' > 'b':
            return true;
        default:
            return false;
    }
}
defaultCase();

// dot-notation, comma-dangle
const dotNotationObj = {
    prop: 'prop',
    'complex-prop': 'complex prop',
};
dotNotationObj['prop'];
dotNotationObj['complex-prop'];

// arrow-body-style
[1, 2, 3].map(i => ({ index: i }));

// no-plusplus
let iterator = 0;
iterator++;
iterator--;
defaultCase(iterator);

// no-param-reassign, no-unused-vars
function params(paramA, paramB) {
    paramA.prop = true;
}
params();

// brace-style
if (iterator > 100) { return; }
if (iterator > 90) {
    iterator++;
} else if (iterator > 80) {
    iterator--;
}
