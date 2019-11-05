$(function(){
  function buildHTML(message) {
    var addImage = (message.image.url !== null) ? `<img src="${message.image.url}">` : ''

    var html = `
      <div class = "message">
        <div class = "upper-message">
          <div class = "upper-message__user-name">
            ${message.user_name}
          </div>
          <div class = "upper-message__date">
            ${message.date}
          </div>
        </div>
        <div class = "lower-message">
          <p class = "lower-message__body">
            ${message.body}
          </p> 
          <img class = "lower-message__image">
            ${addImage}
          </img>
        </div>
      </div>`
      
    return html;
  }
  $('#message_body').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $(".form__submit").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
})