// anagram are words that have same characters (with same frequency)
// check .test.js file for examples to understand the meaning

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}
  
// Helper function
function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

module.exports = isAnagram;