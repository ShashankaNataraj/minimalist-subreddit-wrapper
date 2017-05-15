'use strict';
const redditWrapper = require('../index.js');
const expect = require('chai').expect;
let r = new redditWrapper('TwoSentenceHorror');

describe('Sub reddit wrapper', function() {
    describe('#getsubredditPosts()', function() {
        it('should return posts on the subreddit page', function() {

        });
    });
});
// r.getsubredditPosts().then(response =>{
//     r.pageNext().then(response =>{
//         console.log(response.body);
//     });
// });