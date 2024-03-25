const letterOrder = (word, letter) => word + letter;
const letterOrderReverse = (word, letter) => letter + word;

const wordOrder = (sentence, word) => sentence + ' ' + word;
const wordOrderReverse = (sentence, word) => word + ' ' + sentence;

function reverseSentence(str, letterOrder, wordOrder) {
	let result = '';
	let currWord = '';
	for (let i in str) {
		let letter = str[i];
		if (letter !== ' ') {
			currWord = letterOrder(currWord, letter);
		}
		if (letter === ' ' || i == str.length - 1) {
			result = wordOrder(result, currWord);
			currWord = '';
		}
	}
	console.log(result);
	return result;
}

reverseSentence('Hello New World', letterOrderReverse, wordOrder);
