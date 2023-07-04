import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}

interface Content {
	type: string;
	content: string;
}

interface PostProps {
	author: Author;
	publishedAt: Date;
	content: Content[];
}

export function Post({ author, content, publishedAt }: PostProps) {
	const publishedDateFormatted = format(
		publishedAt,
		"d 'de' LLLL 'às' HH:mm'h'",
		{
			locale: ptBR,
		},
	);
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time
					dateTime={publishedAt.toISOString()}
					title={publishedDateFormatted}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>
			<div className={styles.content}>
				{content.map((item) => {
					if (item.type === 'paragraph') {
						return <p>{item.content}</p>;
					} else if (item.type === 'link') {
						return <a href="#">{item.content}</a>;
					}
				})}
			</div>
			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe um comentário" />

				<div className={styles.buttonDiv}>
					<button type="submit">Publicar</button>
				</div>
			</form>
			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
