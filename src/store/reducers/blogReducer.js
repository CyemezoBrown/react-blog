
const initState={
//    blogs: [
//         {id: '1', title: 'help me find peach', snippet: 'blah blah blah',body:' mya mya mya'},
//         {id: '2', title: 'collect all the stars',snippet: 'blah blah blah', body:' mya mya mya'},
//         {id: '3', title: 'egg hunt with yoshi', snippet: 'blah blah blah', body:' mya mya mya'}
// ]
data: null,
error:null
}

const blogReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE-BLOG-Success':
        console.log('created blog', action.payload);

        return{ data:action.payload, error:null}
        case 'CREATE-BLOG-FAIL':
            console.log(' blog not created', action.payload);
            return{data: null, error:action.payload}

            // case 'FETCH_BLOGS':
            //     return {
            //       ...state,
            //       blogs: action.payload
            //     }

            // case 'ADD_COMMENT':
            // return{
            //     ...state,
            //     blogs:action.blog
            // }
        default:
            return state
    }

}

export default blogReducer