require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT || 3000

const githubData = {
    
        "login": "khardikk",
        "id": 64458111,
        "node_id": "MDQ6VXNlcjY0NDU4MTEx",
        "avatar_url": "https://avatars.githubusercontent.com/u/64458111?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/khardikk",
        "html_url": "https://github.com/khardikk",
        "followers_url": "https://api.github.com/users/khardikk/followers",
        "following_url": "https://api.github.com/users/khardikk/following{/other_user}",
        "gists_url": "https://api.github.com/users/khardikk/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/khardikk/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/khardikk/subscriptions",
        "organizations_url": "https://api.github.com/users/khardikk/orgs",
        "repos_url": "https://api.github.com/users/khardikk/repos",
        "events_url": "https://api.github.com/users/khardikk/events{/privacy}",
        "received_events_url": "https://api.github.com/users/khardikk/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Hardikk Kamboj",
        "company": null,
        "blog": "https://hardikkkamboj.netlify.app/",
        "location": "bengaluru",
        "email": null,
        "hireable": true,
        "bio": "🐢>>🐇\r\nSoftware Engineer | Community Enthu",
        "twitter_username": "HdKamboj",
        "public_repos": 104,
        "public_gists": 0,
        "followers": 47,
        "following": 38,
        "created_at": "2020-04-28T05:59:18Z",
        "updated_at": "2023-12-01T13:09:43Z"
      
}

const jokes = [
  {
    "id": 1,
    "title": "Why did the scarecrow win an award?",
    "content": "Because he was outstanding in his field!"
  },
  {
    "id": 2,
    "title": "What's orange and sounds like a parrot?",
    "content": "A carrot!"
  },
  {
    "id": 3,
    "title": "How does a penguin build its house?",
    "content": "Igloos it together!"
  },
  {
    "id": 4,
    "title": "Why don't scientists trust atoms?",
    "content": "Because they make up everything!"
  },
  {
    "id": 5,
    "title": "What do you call a fish with no eyes?",
    "content": "Fsh!"
  },
  {
    "id": 6,
    "title": "Why don't skeletons fight each other?",
    "content": "They don't have the guts!"
  },
  {
    "id": 7,
    "title": "How does a snowman get around?",
    "content": "By riding an 'icicle!"
  },
  {
    "id": 8,
    "title": "What do you call fake spaghetti?",
    "content": "An impasta!"
  },
  {
    "id": 9,
    "title": "Why did the bicycle fall over?",
    "content": "Because it was two-tired!"
  },
  {
    "id": 10,
    "title": "What did one hat say to the other?",
    "content": "Stay here, I'm going on ahead!"
  }
]


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send("hdkamboj")
})

app.get('/login', (req,res)=>{
    res.send('<h1> Please login at above link </h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2> TUT hell se niklo </h2>')
})

app.get('/github', (req,res)=>{
    res.json(githubData);
})

app.get('/api/jokes', (req,res)=>{
    res.json(jokes);
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})