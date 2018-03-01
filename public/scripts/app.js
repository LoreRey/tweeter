
$(document).ready(function() {

function escape(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweets) {
  let tweetContent = tweets.content.text;
  let tweetHandle = tweets.user.handle;
  let tweetUser = tweets.user.name;
  let tweetAvatar = tweets.user.avatars.regular;
  let tweetCreatedAt = tweets.created_at;

  return `
  <article>
  <header>
    <img class="icon" src="${escape(tweetAvatar)}" />
    <h2>${escape(tweetUser)}</h2>
    <p class="user_handle">${escape(tweetHandle)}</p>
  </header>
    <p class="tweet">${escape(tweetContent)}</p>
  <footer class="footer">
    <div>
      <p class="date">${escape(tweetCreatedAt)}</p>
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
      console.log(newTweet)
  });
}


  $('#new-tweet').on('submit', function (event) {
  event.preventDefault();
  let tweetLength = $('#new-tweet textarea').val().length;
  if(tweetLength > 140) {
    alert('Tweet has exceeded max of 140 characters!');
  } else if (tweetLength === 0) {
    alert(`Sorry! You can't submit an empty tweet!`);
  } else {
  $.ajax({
  url: "/tweets",
  method: "POST",
  data: $('#new-tweet').serialize(),
  success: function(result) {
    $('#new-tweet textarea').val("");
    loadTweets();
    }
  });
  }
 });

function loadTweets() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: function (data) {
      $('.tweets').empty();
        renderTweets(data)
    }
  });
 }
 loadTweets()


 $('.compose').on('click', function() {
  let $newTweet = $('.new-tweet');
  $newTweet.slideToggle();
  $newTweet.find('textarea').select();
 });

 loadTweets();


});














