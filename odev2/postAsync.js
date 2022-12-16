const posts = [
    { id: 1, header: "post 1", desc: "desc 1" },
    { id: 2, header: "post 2", desc: "desc 2" },
    { id: 3, header: "post 3", desc: "desc 3" },
]

const getPosts = () => {
    return new Promise((resolve, reject) => {
        console.log("Getting posts...")
        if (posts) {
            resolve(posts)
        } else {
            reject("There is no post.")
        }
        return
    })
}

const listPosts = () => {
    posts.map(posts => {
        console.log(`Header is ${posts.header} and description is ${posts.desc}`)
    })
}

const addPosts = (newPost) => {
    return new Promise((resolve, reject) => {
        console.log("New posts are adding...")

        if (posts) {
            posts.push(newPost)
            resolve("Post added")
        } else {
            reject("No post added.")
        }
    })
}

const processPosts = async () => {
    try {
        const addedPosts = await addPosts({ id: 4, header: "post 4", desc: "desc 4" })
        console.log(addedPosts)
        const receivedPosts = await getPosts();
        console.log(receivedPosts)
    } catch (error) {
        console.log(error);
    }
}

processPosts();