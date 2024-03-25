// function reverseWordsSentence(str) {
// 	let result = '';
// 	let currWord = '';
// 	for (let i in str) {
// 		let letter = str[i];
// 		if (letter !== ' ') {
// 			// letter order
// 			currWord += letter;
// 		}
// 		if (letter === ' ' || i == str.length - 1) {
// 			// word order
//       result = currWord + ' ' + result;
// 			currWord = '';
// 		}
// 	}
// 	console.log(result);
// 	return result;
// }

// const testStr_01 = 'Hello New World';

// reverseSentence('Hello New World');

// function reverseSentence_01(str) {
// 	return str.split(' ').reverse().join(' ');
// }

// console.log(reverseSentence_01(testStr_01));
