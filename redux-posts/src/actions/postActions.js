export const GET_POST = 'GET POSTS'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILURE = 'GET_POST_FAILURE'

export const getPost = () => ({ type: GET_POST })
export const getPostSuccess = post => ({
  type: GET_POST_SUCCESS,
  payload: post,
})
export const getPostFailure = () => ({ type: GET_POST_FAILURE })

export function fetchPost(id) {
  return async dispatch => {
    dispatch(getPost())

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      const data = await response.json()
      if(JSON.stringify(data)==='{}'){
        dispatch(getPostFailure())
      }
      else{
        dispatch(getPostSuccess(data))
      }
    }
  }
