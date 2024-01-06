// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // zbior samoglosek
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
  
  // zamiana na male litery by nie miec problemow
  str = str.toLowerCase();
  
  // uruchomienie licznika
  let vowelCount = 0;

  // iteracja przez kazdy znak w ciagu znakww
  for (let char of str) {
    // sprawdzanko, czy dany znak jest samogloska
    if (vowelSet.has(char)) {
      // tak>zwiekszenie licznika
      vowelCount++;
    }
  }

  // wynik
  return vowelCount;
}
