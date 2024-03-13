function recur(cents,index,cur) {

	if (cents<cur || cents-cur<0) {
		return {cents,index,cur}
	}
	cents=cents-cur;
	return recur(cents,index+1,cur)
}
const makeChange = (c) => {
  // your name here
	let cur={q: 25,d: 10,n: 5,p: 1};
	for (let coins in cur) {
		let data=(recur(c,0,cur[coins])); 
		c=data.cents;
		cur[coins]=data.index;
	}
	return cur;
};
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
