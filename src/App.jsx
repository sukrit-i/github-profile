import { useState } from 'react';
import { useEffect } from 'react';
import { fetch_data } from './libs/api';

let username = "raka334"

function App() {
	const [name, setName] = useState('');
	const [desp, setDesp] = useState('');
	const [profileUrl, setProfileUrl] = useState('');
	const [followers, setfollowers] = useState('');
	const [following, setfollowing] = useState('');
	const [repos, setrepos] = useState('');
	const [github, setgithub] = useState('');

	useEffect(() => {
		fetch_data(
      username
    ).then(data => {
			setName(data.name);
			setDesp(data.bio);
			setProfileUrl(data.html_url);
			setfollowers(data.followers);
			setfollowing(data.following);
			setrepos(data.public_repos);
			setgithub(
				new Date(data.created_at).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric',
				}),
			);
		});
	}, []);

	return (
		<div className="app">
			<div className="profile-img">
				<img src={`https://github.com/${username}.png`} alt="image not found" />
			</div>
			<div>{name}</div>
			<div>{desp}</div>
			<div>
				<a href={profileUrl}>
					<button>Checkout my profile</button>
				</a>
			</div>
			<div>
        <div>
			  	Followers - {followers}
        </div>
        <div>
		  		Following - {following}
        </div>
        <div>
          Repos - {repos}
        </div>
        <div>
  				At Github Since - {github}
        </div>
			</div>
		</div>
	);
}

export default App;
