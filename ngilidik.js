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

$("#copy-btn").click(function(){
    var result = $('#result-block').html();
    navigator.clipboard.writeText(result).then(function() {
        console.log('copied')
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