# minimalist-subreddit-wrapper
Minimalistic api wrapper for:

1. Getting a list of posts on a subreddit
2. Paging through the list of posts

####Usage
######Get posts on a subreddit
```
let minimalistSubredditWrapper = require("minimalist-subreddit-wrapper")
let r = new redditWrapper('<Sub reddit name>');
r.getsubredditPosts().then(response =>{
     console.log(response.body);
});
```
######Get next page
```
r.pageNext().then(response =>{
 console.log(response.body);
});
 ```
######Get previous page
```
r.pagePrevious().then(response=>{
    console.log(response.body);
})
```
######Get a page when you know the start and end post ids
```
r.page(true, 'ab92o2p', 'u5u6i4p').then(response=>{
    console.log(response.body);
});
```