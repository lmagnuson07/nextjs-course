import classes from './comment-list.module.scss';
type Comment = {
  id: string;
  email: string;
  name: string;
  comment: string;
  eventId: string;
};
export default function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <ul className={classes.comments}>
      {comments.map((comment: Comment) => (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <div>
            By <address>{comment.name}</address>
            email: {comment.email}
            eventId: {comment.eventId}
          </div>
        </li>
      ))}
    </ul>
  );
}
