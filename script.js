function shortcut(str1, str2) {
    // Check if either string is empty, return an empty string if true
    if (str1 === "" || str2 === "") {
        return "";
    }
    // Return the first character of each string combined
    return str1[0] + str2[0];
}
