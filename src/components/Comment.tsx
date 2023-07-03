import styles from './Comment.module.css';
import { Trash, ThumbsUp } from 'phosphor-react';
export function Comment() {
	return (
		<div className={styles.comment}>
			<img src="https://github.com/igorct1.png" />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Igor Tozetti</strong>
							<time dateTime="" title="11 de Maio às 08:13h">
								Cerca de 1h atrás
							</time>
						</div>
						<button title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>
					<p>Muito bom Devon, Parabéns</p>
				</div>
				<footer>
					<button>
						<ThumbsUp size={20} />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
