import store from "./reduxStore"
import {increment, decrement} from "./reduxStore/counter"
import {addTask, removeTask} from "./reduxStore/tasks"
import {addPost, addUpVote, removePost, updatePost, addComment, removeComment, removeUserComments, addDownVote} from "./reduxStore/posts"

// STORE
store.subscribe(() => console.log(store.getState()))

console.log(store.getState())

// store.dispatch(increment(10))
// store.dispatch(decrement(1))
// store.dispatch(decrement(100))
// store.dispatch(addTask(1, "çağla"))
// store.dispatch(addTask(2, "gamze"))
// store.dispatch(removeTask(2))
// store.dispatch(addTask(3, "ayça"))


store.dispatch(addPost(7, "new post"))
store.dispatch(addPost(8, "newnew post"))
store.dispatch(addPost(9, "newx3 post"))
store.dispatch(addUpVote(7))
store.dispatch(addUpVote(7))
store.dispatch(addDownVote(7))
store.dispatch(updatePost(9, "updated post"))
store.dispatch(removePost(8))
store.dispatch(addComment(7, 1, "first comment"))
store.dispatch(addComment(7, 1, "second comment"))
store.dispatch(addComment(7, 1, "third comment"))
store.dispatch(addComment(7, 2, "second user first comment"))
store.dispatch(addComment(7, 2, "second user second comment"))
store.dispatch(addComment(9, 1, "first user first comment"))
store.dispatch(addComment(9, 2, "second user first comment"))
store.dispatch(removeComment(7,0))
store.dispatch(removeUserComments(1))


console.log("***FIRST POST VOTES: ", store.getState().posts[0].votes)
console.log("***FIRST POST COMMENTS: ", store.getState().posts[0].comments)
console.log("***SECOND POST COMMENTS: ", store.getState().posts[1].comments)