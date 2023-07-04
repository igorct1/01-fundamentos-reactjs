import { FormEvent, useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

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
	const [comments, setComments] = useState(['Post muito massa, hein?']);
	const [newCommentText, setNewCommentText] = useState('');

	function handleNewComment(event: FormEvent) {
		event.preventDefault();
		setComments((prevComments) => [...prevComments, newCommentText]);
		setNewCommentText('');
	}

	function deleteComment(commentToDelete: string) {
		const newComments = comments.filter(
			(comment) => comment !== commentToDelete,
		);

		setComments(newComments);
	}

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
						return <p key={item.content}>{item.content}</p>;
					} else if (item.type === 'link') {
						return (
							<a key={item.content} href="#">
								{item.content}
							</a>
						);
					}
				})}
			</div>
			<form className={styles.commentForm} onSubmit={handleNewComment}>
				<strong>Deixe seu feedback</strong>
				<textarea
					placeholder="Deixe um comentário"
					value={newCommentText}
					onChange={({ target }) => setNewCommentText(target.value)}
				/>

				<div className={styles.buttonDiv}>
					<button type="submit">Publicar</button>
				</div>
			</form>
			<div className={styles.commentList}>
				{comments.map((comment) => (
					<Comment
						key={comment}
						content={comment}
						deleteComment={deleteComment}
					/>
				))}
			</div>
		</article>
	);
}
