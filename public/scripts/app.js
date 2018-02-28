
 const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


function createTweetElement(tweets) {
  let tweetContent = tweets.content.text;
  let tweetHandle = tweets.user.handle;
  let tweetUser = tweets.user.name;
  let tweetAvatar = tweets.user.avatars.regular;
  let tweetCreatedAt = tweets.created_at;

  return `
  <article>
  <header>
    <img class="icon" src="${tweetAvatar}" />
    <h2>${tweetUser}</h2>
    <p class="user_handle">${tweetHandle}</p>
  </header>
    <p class="tweet">${tweetContent}</p>
  <footer class="footer">
    <div>
      <p class="date">${tweetCreatedAt}</p>
    </div>
    <div>
      <img class="bt_icons" src="/images/tweetretweet.png">
      <img class="bt_icons" src="/images/tweetlike.png">
      <img class="bt_icons" src="/images/tweetflag.png">
    </div>
  </footer>
  </article>`

}


function renderTweets(tweets) {
  tweets.forEach(function(tweet) {
      let newTweet = createTweetElement(tweet);
      $(".tweets").prepend(newTweet);
  });
}

$(document).ready(function() {
  renderTweets(data)
});






















