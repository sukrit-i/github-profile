export const fetch_data = async (
    username
) => {
	const data = await fetch('https://api.github.com/users/' + username);
	return data.json();
};

// async function fetch_data() {
//     const data = await fetch("https://api.github.com/users/BRAVO68WEB")
//     return data.json()
// }
