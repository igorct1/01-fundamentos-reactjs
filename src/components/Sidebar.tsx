import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
			/>

			<div className={styles.profile}>
				<img src="https://github.com/igorct1.png" />
				<strong>Igor Tozetti</strong>
				<span>Web Developer</span>
			</div>

			<footer className={styles.footer}>
				<a href="#">
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
