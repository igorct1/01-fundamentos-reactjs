import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { Header } from './components/Header';

import './global.css';
import styles from './app.module.css';

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/igorct1.png',
			name: 'Igor Tozetti',
			role: 'Web Developer',
		},
		content: [
			{
				type: 'paragraph',
				content: 'Fala galeraaaa! ✋',
			},
			{
				type: 'paragraph',
				content:
					'Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return',
			},
			{
				type: 'link',
				content: 'jane.design/doctorcare',
			},
		],
		publishedAt: new Date('2023-07-04 16:25'),
	},
];

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => (
						<Post
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					))}
				</main>
			</div>
		</div>
	);
}
