import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import { Header } from './components/Header';

import './global.css';
import styles from './app.module.css';

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post />
					<Post />
				</main>
			</div>
		</div>
	);
}
