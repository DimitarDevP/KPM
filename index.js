const generatePost = post => {
    const container = document.createElement("div")
    container.setAttribute("class", "post")
    const title = document.createElement("h1")
    title.innerText = post.title
    const body = document.createElement("p")
    body.innerText = post.body
    container.appendChild(title)
    container.appendChild(body)

    return container
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        const posts = document.getElementById("posts")
        posts.innerHTML = ""
        for (const post of data) posts.appendChild(generatePost(post))
    })