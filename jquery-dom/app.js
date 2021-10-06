console.log("Let's get ready to party with jQuery!");

$('img').addClass("image-center");

$('article').children().last().remove();

$('#title').hover(
    function() {
        $(this).css('font-size', Math.floor(Math.random() * 101))
    }
)

$('ol').append('<li>I AM EXTRA!!!</li>');

$('ol').replaceWith('<p>I actually do NOT like lists. I never want to see one again.');

$('input').on('input', function(){
    $('.container').css('background-color', '#' + $(this).val())
})

$('img').on("click", function(){
    $(this).remove();
})