import { Avatar } from './Avatar';
import { Trash, ThumbsUp } from 'phosphor-react';

import styles from './Comment.module.css';

export function Comment({ content }: any) {
	return (
		<div className={styles.comment}>
			<Avatar src="https://github.com/igorct1.png" hasBorder={false} />
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
					<p>{content}</p>
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
