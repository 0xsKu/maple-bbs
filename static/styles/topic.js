$(document).ready(function(){
  $('.like-reply').click(function() {
    var _$this = $(this);
    var replyId = _$this.attr('data-id');
    var like_url = "/user/like/" + replyId;
    var data = JSON.stringify({
    });
    if(_$this.hasClass('like-active')){
      $.ajax ({
        type : "DELETE",
        url : like_url,
        data:data,
        contentType: 'application/json;charset=UTF-8',
        success: function(result) {
          if (result.judge === true)
          {
            _$this.attr("title","赞");
            _$this.removeClass("like-active");
            _$this.addClass("like-no-active");
          } else
          {
            window.location.href = result.url;
          }
        }});
    }else {
      $.ajax ({
        type : "POST",
        url : like_url,
        data:data,
        contentType: 'application/json;charset=UTF-8',
        success: function(result) {
          if (result.judge === true)
          {
            _$this.attr("title","取消赞");
            _$this.removeClass("like-no-active");
            _$this.addClass("like-active");
          } else
          {
            window.location.href = result.url;
          }
        }});
    }});
  $('.reply-author').click(function() {
    var _$this = $(this);
    var author = _$this.attr('data-id');
    $('#content').focus();
    $('#content').val('@' + author + ' ');
  });
});
function DoVote(voteData) {
  $(document).ready(function(){
    $('#topic-up-vote').click(function() {
      var data = JSON.stringify({
      });
      $.ajax ({
        type : "POST",
        url : voteData.vote_up,
        data:data,
        contentType: 'application/json;charset=UTF-8',
        success: function(result) {
          if (result.judge)
          {
            $('.votes').html(result.html);
          } else
          {
            window.location.href = result.url;
          }
        }});
    });
    $('#topic-down-vote').click(function() {
      var data = JSON.stringify({
      });
      $.ajax ({
        type : "POST",
        url : voteData.vote_down,
        data:data,
        contentType: 'application/json;charset=UTF-8',
        success: function(result) {
          if (result.judge)
          {
            $('.votes').html(result.html);
          } else
          {
            window.location.href = result.url;
          }
        }});
    });
  });
}
