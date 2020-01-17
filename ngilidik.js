function generate(text){
    result = text.replace(/a/g, "i")
    result = result.replace(/u/g, "i")
    result = result.replace(/e/g, "i")
    result = result.replace(/o/g, "i")

    result = result.replace(/A/g, "I")
    result = result.replace(/U/g, "I")
    result = result.replace(/E/g, "I")
    result = result.replace(/O/g, "I")

    return result;
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        trigger : "click",
        delay: { "hide": 100 }
    })
  });

$("#copy-btn").click(function(){
    var result = $('#result-block').html();
    navigator.clipboard.writeText(result).then(function() {
        setTimeout(function() {
            $('#copy-btn').tooltip('hide')
        }, 2000);
      }, function() {
        /* clipboard write failed */
      });
});

$('#generate').click(function(){
    var source = $('#source').val();
    var result = generate(source);
    $('#result-block').html(result);
    $('#result-input').val(result);
    $('.result').removeClass('d-none')
});

$('#audio').click(function(){
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();

    msg.voice = voices[8]; // Indonesia
    msg.lang = "id";
    msg.text = $('#result-block').html();
    msg.rate = 0.8; // 0.1 to 10
    speechSynthesis.speak(msg);
})