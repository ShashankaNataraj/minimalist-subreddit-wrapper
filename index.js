'use strict';
const got = require('got');

class RedditWrapper {

    constructor(subredditName){
        this.subredditName = subredditName;
        this.postsOnCurrentPage = {};
        this.firstReadPostId = '';
        this.lastReadPostId = '';
    }

    getsubredditPosts(additionalParams){
        let req;
        additionalParams = additionalParams || '';
        req = got(`https://www.reddit.com/r/${this.subredditName}/.json${additionalParams}`);// Just use the JSON api that every subreddit responds to
        req.then(response =>{
            this.postsOnCurrentPage = JSON.parse(response.body);
            let children = this.postsOnCurrentPage.data.children;
            if (children.length > 0) {
                this.firstReadPostId = children[0].data.id; // Keep track of the first read post id to enable paging
                this.lastReadPostId = children[children.length - 1].data.id; // Keep track of the last read post id to enable paging
            }
        });
        return req;
    }

    get posts(){
        return this.postsOnCurrentPage;
    }

    pageNext(postId){
        return this.getsubredditPosts(`?after=${postId}`);
    }

    pagePrevious(postId){
        return this.getsubredditPosts(`?before=${postId}`);
    }

    page(isAfter, lastReadPostId, firstReadPostId){
        this.lastReadPostId = lastReadPostId;
        this.firstReadPostId = firstReadPostId;
        if (isAfter) {
            return this.getsubredditPosts(`?after=${this.lastReadPostId}`);
        } else {
            return this.getsubredditPosts(`?before=${this.firstReadPostId}`);
        }
    }
}

module.exports = RedditWrapper;