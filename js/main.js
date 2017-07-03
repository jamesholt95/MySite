  var anim;
    var elem = document.getElementById('bodymovin')
    var animData = {
        container: elem,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        rendererSettings: {
            progressiveLoad:false
        },
        path: 'data.json'
    };
    anim = bodymovin.loadAnimation(animData);

setTimeout(function() {
    $('#bodymovin').fadeOut('fast');
    $('#bmcontainer').fadeOut('fast');
}, 2000); 
