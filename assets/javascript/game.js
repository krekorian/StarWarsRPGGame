$(document).ready(function () {
    var picked_player;

    $('.all-players-square').on('click', function () {
        console.log(this);
        // picked_player = ($(this).attr("value"));
        //$(".player-square"[reference = "diamond"]).show();
        //$("#" + picked_player).show();
        //$("#d").find('.player-square').show();
        //var xxx = '<img src="assets/images/' + picked_player + '.jpg" class="player-square2" ' + 'value="' + picked_player + '"' + ' id="' + picked_player + '"/>';
        //this.removeClass("all-players-square");

        // console.log(selectedImg);
        // $("div#insert-player").html(this);
        //$("div#insert-player2").html(this).removeClass("all-players-square").addClass();
        //console.log(xxx);
        //console.log('<img src="assets/images/' + picked_player + '.jpg" class="all-players-square"  id="' + picked_player + '"/>');
    });
    $('.player-square2').on('click', function () {
        //($(this).hide());

        picked_player = ($(this).attr("value"));
        //$(".player-square"[reference = "diamond"]).show();
        //$("#" + picked_player).show();
        //$("#d").find('.player-square').show();
        var zzz = '<img src="assets/images/' + picked_player + '.jpg" class="player-square2"  id="' + picked_player + '"/>';
        $("div#insert-player2").html(zzz).show();
        console.log(zzz);
    });

});