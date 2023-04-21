function anagram(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) { 
      return; 
    }
  
    const sortedWordFirst = firstWord.split("").sort().join("");
    const sortedWordSecond = secondWord.split("").sort().join("");

    return sortedWordFirst.toLowerCase() === sortedWordSecond.toLowerCase();
}


const result = anagram("anagram", "amarang");
alert(result);
