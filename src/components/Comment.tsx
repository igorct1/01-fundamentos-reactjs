import { useState } from 'react';

import { Avatar } from './Avatar';
import { Trash, ThumbsUp } from 'phosphor-react';

import styles from './Comment.module.css';

interface CommentProps {
	content: string;
	deleteComment: (commentToDelete: string) => void;
}

export function Comment({ content, deleteComment }: CommentProps) {
	const [likeCount, setLikeCount] = useState(0);

	function handleDeleteComment() {
		deleteComment(content);
	}

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
						<button
							onClick={handleDeleteComment}
							title="Deletar comentário"
						>
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer>
					<button onClick={() => setLikeCount((prev) => prev + 1)}>
						<ThumbsUp size={20} />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
