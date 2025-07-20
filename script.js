//your JS code here. If required.
const submitBtn = document.getElementById('btn');
submitBtn.addEventListener('click', (e) => {
	e.preventDefault();

	let name = document.getElementById('name').value.trim();
	let age = document.getElementById('age').value.trim();
	if(name === '' || age === ''){
		alert('Please enter valid details');
		return;
	}
	const ageNum = parseInt(age);
	const promise1 = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(age >= 18){
					resolve(`Welcome, ${name}. You can vote.`);
				}else{
					reject(`Oh sorry ${name}. You aren't old enough.`);
				}
			}, 4000)
		})
	}

	promise1()
	.then(msg => alert(msg))
	.catch(e => alert(e))
	.finally(() => {
		document.getElementById('name').value = "";
		document.getElementById('age').value = "";
	})
})