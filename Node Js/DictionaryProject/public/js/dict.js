$(document).ready(() => {
    $('#btnsearch').on('click', (e) => {
        var $this = $(e.target)
        var word = $('#word').val();
        $($this).wait($this);
        $.get(`/word?word=${word}`, (res) => {
            $($this).removewait($this);
            console.log(res);
            if (res.length > 0) {
                $('#result').empty();
                for (var i in res) {
                    var item = res[i];
                    $('#result').append(`<li>${(Number(i) + 1)}&nbsp(${item.wordtype}) ${item.definition}</li>`)
                };
                $('#result').show();
                $('#noword').hide();
            }
            else{
                $('#result').hide();
                $('#noword').show();
            }
        })
    });
});

$.fn.wait = ($this) => {
    $this.append(`&nbsp<i class="fa fa-refresh fa-spin"></i>`)
}
$.fn.removewait = ($this) => {

    $this.find('.fa.fa-refresh.fa-spin').remove();
    var val = $this.text();
    $this.text(val.trim());
}