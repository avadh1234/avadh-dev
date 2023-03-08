import CommentForm from "./CommentsForm"

export const Comments = ({ comments, slug }) => {
    return (
        <div>
            <h2>Join the discussion</h2>
             <CommentForm slug={slug} />
            {/*<CommentList>
                {comments.length > 0 &&
                    comments
                        .filter(comment => !comment.pId)
                        .map(comment => {
                            let child
                            if (comment.id) {
                                child = comments.find(c => comment.id === c.pId)
                            }
                            return (
                                <Comment
                                    key={comment.id}
                                    child={child}
                                    comment={comment}
                                    slug={slug}
                                />
                            )
                        })}
                    </CommentList> */}
                </div>
            )
        }

