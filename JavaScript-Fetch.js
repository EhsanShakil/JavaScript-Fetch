
const getData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
	console.log(response)

	const data = await response.json()
	console.log(data)

}
getData()

const postData = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			firstName: 'Ahsan',
			lastName: 'Shakeel'
		}),
		headers: {
			"Content-type": "application/json; charset=UTF-8"
		}
	})
	console.log(response)

	const data = await response.json()
	console.log(data)

}
postData()

const fetchData = async () => {
	try {
	const users =  await fetch('https://jsonplaceholder.typicode.com/users')
	const userData = await users.json()
	console.log(userData)

	const posts =  await fetch('https://jsonplaceholder.typicode.com/posts')
	const postData = await posts.json()
	console.log(postData)

	const result = await userData.map((obj) => ({
        id: obj.id,
        username: obj.username,
        post: postData.filter(item => obj.id === item.userId)
    }));
    console.log(result);
    }
    catch(error) {
    	throw new Error('API Not Found', error)
    }
}
fetchData()