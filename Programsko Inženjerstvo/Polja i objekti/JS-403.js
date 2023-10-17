let zagrade = function (s) {
    // 1. Kreiraj stog
    let stog = [];

    // 2. Loopaj svaki element u stringu
    for (i = 0; i < s.length; i++) {
        let char = stog[stog.length - 1];

        // 3. Ako nades pocetak zagrade, pushaj ga u stack
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stog.push(s[i]);

            // 4. Popaj pocetak zagrade sa stoga ako postoji odgovarajuca zatvorena zagrada u stringu
        } else if (
            (char == '(' && s[i] == ')') ||
            (char == '{' && s[i] == '}') ||
            (char == '[' && s[i] == ']')
        ) {
            stog.pop();
        } else return false;
    }
    // Provjeri prazan stog
    return stog.length ? false : true;
};

console.log(zagrade('[()]()()')); // → true
console.log(zagrade('{[((()))]}')); // → true
console.log(zagrade('({)}')); // → false
console.log(zagrade('(){}{[({})]}')); // → true
