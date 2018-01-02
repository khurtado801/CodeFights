function checkPalindrome(inputString) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    for (let i = 0; i < str.length; i++) {
        let first = str[i].toLowerCase();
        let last = str[str.length - 1 - i].toLowerCase();
        if (first !== last) {
            return false;
        }
    }
    return true;
}