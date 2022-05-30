class Postt{
    constructor(post) {
    }
}

const Post = (post)=>{
    console.log(post)
    post['PostData']['author']['name'] = "hihihi"
    return post
}

export default Post
