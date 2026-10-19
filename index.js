function displayPosts(posts) {
	const postList = document.getElementById('post-list');

	posts.forEach((post) => {
		const listItem = document.createElement('li');
		const heading = document.createElement('h1');
		const paragraph = document.createElement('p');

		heading.textContent = post.title;
		paragraph.textContent = post.body;

		listItem.append(heading, paragraph);
		postList.appendChild(listItem);
	});
}

async function fetchPosts() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		if (!response.ok) {
			throw new Error(`Posts request failed: ${response.status} ${response.statusText}`);
		}

		const posts = await response.json();

		displayPosts(posts);
	} catch (error) {
		console.error('Unable to fetch posts:', error);
	}
}

fetchPosts();
