var profiles = [
    { photo: "https://example.com/photo1.jpg", name: "John Doe", city: "New York" },
    { photo: "https://example.com/photo2.jpg", name: "Jane Smith", city: "Los Angeles" }
    // Add more profiles as needed
];


var women = [
  {name: "coolgal1", title: "Congresswoman", photo: "http://media.washtimes.com.s3.amazonaws.com/media/image/2015/10/13/AP_104281239272.jpg"},
  {name: "coolgal2", title: "Supreme Court Justice", photo: "http://i2.cdn.cnn.com/cnnnext/dam/assets/111102115632-justice-ruth-bader-ginsburg-story-top.jpg"},
  {name: "coolgal3", title: "U.S Senator", photo: "https://s-media-cache-ak0.pinimg.com/originals/db/d4/c5/dbd4c5a06b9f69755f53cce2ae9d7a05.jpg"},
  // ...existing code...
];

var men = [
  {name: "coolguy1", title: "Speaker of the House", photo: "http://static2.politico.com/dims4/default/273ab82/2147483647/resize/1160x%3E/quality/90/?url=http%3A%2F%2Fstatic.politico.com%2Fb8%2F1d%2F49ba6d4445a5a190717f236d0a10%2F151210-paul-ryan-1160-gty.jpg"},
  {name: "coolguy2", title: "Host, Meet the Press", photo: "http://a4.img.talkingpointsmemo.com/image/upload/c_fill,fl_keep_iptc,g_faces,h_365,w_652/drrgkjnfpvhqj3w3rrds.jpg"},
  {name: "coolguy3", title: "U.S Senator", photo: "http://greginhollywood.com/wordpress/wp-content/uploads/121107053753-martin-heinrich-story-top.jpg"},
  // ...existing code...
];

//for him / for her
//sport music fashion electronics home/furniture
//

document.addEventListener('DOMContentLoaded', () => {
    const mainSwipe = document.getElementById('main-swipe');
    const deeperSwipe = document.getElementById('deeper-swipe');

    function showMainSwipe() {
        mainSwipe.style.display = 'flex';
        deeperSwipe.style.display = 'none';
    }

    function showDeeperSwipe() {
        mainSwipe.style.display = 'none';
        deeperSwipe.style.display = 'flex';
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            showDeeperSwipe();  // Swipe left to deeper swipe
        } else if (event.key === 'ArrowRight') {
            showMainSwipe();  // Swipe right to main swipe
        }
    });
});
