import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPost } from '../actions/postActions'
import { fetchComments } from '../actions/commentsActions'

import { Post } from '../components/Post'
import { Comment } from '../components/Comment'
import { Grid, Typography } from '@material-ui/core'

const SinglePostPage = ({
  match,
  dispatch,
  post,
  comments,
  hasErrors,
  loading,
}) => {
  useEffect(() => {
    const { id } = match.params

    dispatch(fetchComments(id))
    dispatch(fetchPost(id))
  }, [dispatch, match])

  const renderPost = () => {
    console.log(hasErrors.post);
    if (loading.post) return <p>Loading post...</p>
    if (hasErrors.post) return <p>Unable to display post.</p>

    return  <div>
        <br />
        <Grid container>
          <Grid item xs={2}>

          </Grid>
          <Grid item>
          <Typography variant='h3'>Full Post Details</Typography>
          </Grid>
        </Grid>
        
      <Post post={post} view={false} />
    </div>
  }

  const renderComments = () => {
    if (loading.comments) return <p>Loading comments...</p>
    if (hasErrors.comments) return <p>Unable to display comments.</p>

    return comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))
  }

  return (
    <section>
      {renderPost()}
      <Grid container justify="center" alignContent="center">
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={8}>
        <Typography variant="h3">Comments</Typography>     
        </Grid>
        <Grid item xs={2}>
        </Grid>
      </Grid>
     
      {renderComments()}
    </section>
  )
}

const mapStateToProps = state => ({
  post: state.post.post,
  comments: state.comments.comments,
  loading: { post: state.post.loading, comments: state.comments.loading },
  hasErrors: { post: state.post.hasErrors, comments: state.comments.hasErrors },
})

export default connect(mapStateToProps)(SinglePostPage)
