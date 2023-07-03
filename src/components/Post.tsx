import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<img
						className={styles.avatar}
						src="https://github.com/igorct1.png"
					/>
					<div className={styles.authorInfo}>
						<strong>Igor Tozetti</strong>
						<span>Web Developer</span>
					</div>
				</div>
				<time dateTime="" title="11 de Maio às 08:13h">
					Publicado há 1h
				</time>
			</header>
			<div className={styles.content}>
				<p>Fala galeraa!</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Optio ipsum reiciendis qui, deserunt atque totam.
				</p>
				<a href="">jane.design/doctorcare</a>
				<ul>
					<a href="">#novoprojeto</a>
					<a href="">#nlw</a>
					<a href="">#rocketseat</a>
				</ul>
			</div>
		</article>
	);
}
