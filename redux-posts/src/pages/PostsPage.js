
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postsActions'
import { Post } from '../components/Post'
import { Grid, Typography } from '@material-ui/core'

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () => {
    console.log("hasErrors "+hasErrors);
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return posts.map((post) => <Post key={post.id} post={post} />)
  }

  return (
    <section>
      <Grid container justify='center' direction='column' alignContent="center" spacing={2}>
        <Grid item>

        </Grid>
        <Grid item>
          <Typography variant='h2'>Posts</Typography>
        </Grid>
      </Grid>
      {renderPosts()}
    </section>
  )
}

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(PostsPage)