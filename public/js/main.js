var socket = io.connect(window.location.hostname);

socket.on('votes', function (data) {
    var votes = data.votes,
        total = votes[0] + votes[1],
        height1 = ((votes[0] / total) * 100),
        height2 = ((votes[1] / total) * 100);
        
    $('#result1 .bar').css('height', height1 + '%');
    $('#result1 .count').css('bottom', height1 + '%').html(votes[0]);
    $('#result2 .bar').css('height', height2 + '%');
    $('#result2 .count').css('bottom', height2 + '%').html(votes[1]);
});

$('#vote1').click(function() {
    socket.emit('vote1', { 'data' : 'yo1' });
});

$('#vote2').click(function() {
    socket.emit('vote2', { 'data' : 'yo2' });
});