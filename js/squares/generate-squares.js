let videoArray = [
["https://youtu.be/jgZkrA8E5do","TOULIVER x BINZ - \"BIGCITYBOI\" (Official Music Video)","07.05.2020"],
["https://youtu.be/U3U27DwB1-M","The Karman Line - Hợp tác VNA x SSG | Documentary","01.13.2022"],
["https://youtu.be/8HQ8ksO684s","SPACESPEAKERS - A VEIL OF MIST (Official MV)","10.31.2022"],
["https://youtu.be/d44UTUSTYKU","SOOBIN X SLIMV - THE PLAYAH (Special Performance / Official Music Video)","05.14.2021"],
["https://youtu.be/1eOJyjXhGmw","LUẬT RỪNG - OFFICIAL MV - BINZ x RHYMASTIC x 16 TYPH x GONZO x TINLE","08.04.2022"],
["https://youtu.be/Rrr-5-4wcEs","BINZ x TOULIVER - DON'T BREAK MY HEART (OFFICIAL MV)","03.14.2022"],
["https://youtu.be/D164TFHeOcI","Rhymastic - Nến Và Hoa (Official Audio)","08.18.2018"],
["https://youtu.be/uQHHzgROvjw","SPACESPEAKERS - NHANH LÊN NHÉ! (OFFICIAL MUSIC VIDEO)","07.11.2022"],
["https://youtu.be/zRdHnseM0PE","SOOBIN & BINZ (DOUBLE B) - BlackJack ft. GOKU (Official Music Video)","11.30.2020"],
["https://youtu.be/fLsbkrT0LYY","16 Typh - MILLION DOLLAR BOY (Official MV)","08.15.2022"],
["https://youtu.be/cX-Oqdt7gmc","TOULIVER X BINZ - GENE [ OFFICIAL MV ]","05.12.2019"],
["https://youtu.be/5vBp9OPkIrE","LẠC - Rhymastic (Lyrics Video)","10.22.2021"],
["https://youtu.be/xdn7sPuE-Sc","KOSMIK LIVE CONCERT RECAP","12.06.2022"],
["https://youtu.be/sG9JhIRuTkA","SOOBIN - THÁNG NĂM (Official Music Video)","12.15.2020"],
["https://youtu.be/xdLr7BG2GLg","SOOBIN, Binz - BlackJack | KOSMIK Live Concert","12.09.2022"],
["https://youtu.be/SNES5Y-tYxM","BINZ - OK (Official Music Video)","01.01.2020"],
["https://youtu.be/0kabl4_soAE","TRAPNALOG - Analog Session #5","02.14.2021"],
["https://youtu.be/N4a9Db9_ijc","SPACESPEAKERS - FREAKY SQUAD (OFFICIAL MUSIC VIDEO)","11.30.2021"],
["https://youtu.be/QFHvfQDgRFA","SOOBIN - TRÒ CHƠI (Official Music Video)","11.21.2020"],
["https://youtu.be/vFf9jphDBYU","BINZ - DON’T BREAK MY HEART (TINLE REMIX)","04.25.2022"],
["https://youtu.be/XdBsAXOxYfo","TOULIVER X BINZ - THEY SAID [ OFFICIAL MV ]","12.02.2017"],
["https://youtu.be/gBqEHAg_yto","Touliver - Kính Vạn Hoa (Feat. Tiên Tiên) [Official MV]","01.04.2022"],
["https://youtu.be/uwlGzAprCrw","SPACESPEAKERS - EVERYDAY [ OFFICIAL MV ]","05.08.2018"],
["https://youtu.be/AiKmVpT_I3o","SOOBIN - CAO GÓT | OFFICIAL MUSIC VIDEO","11.14.2022"],
["https://youtu.be/aEHSS6Q94S4","SOOBIN X BINZ - BEAUTIFUL MONSTER | Official MV","11.03.2022"],
];

for (let i = 0; i < videoArray.length; i++) {
    var videoLink = videoArray[i][0];
    var videoTitle = videoArray[i][1];
    var dateStr = videoArray[i][2];

    var squareId = "square" + i;
    var imgSrc = `image/${squareId}/maxresdefault.jpg`;

    // Create square div
    var square = document.createElement("Div");
    square.id = squareId;
    square.className += squareId + " post type-post status-publish format-standard has-post-thumbnail hentry category-all category-new-music";

    // Create post info div
    var postInfo = document.createElement("Div");
    postInfo.className += "post-info";

    var postInfoImageDiv = createPostInfoImageDiv(videoLink, imgSrc);

    // Create post content div
    var postContent = createPostContent(videoLink, videoTitle);

    // Create date div
    var date = createDate(dateStr);

    postInfo.appendChild(postInfoImageDiv);
    postInfo.appendChild(postContent)
    postInfo.appendChild(date);

    square.appendChild(postInfo);
    document.getElementById("lay1").appendChild(square);
}

function createPostInfoImageDiv(videoLink, imgSrc){

    // Create post info image div
    var postInfoImageDiv = document.createElement("Div");
    postInfoImageDiv.className += "post_image hid";

    // Create image wrap div
    var imgWrap = document.createElement("Div");
    imgWrap.className += "imgwrap";

    // Create anchor link
    var anchorLink = document.createElement("a");
    anchorLink.setAttribute('href', videoLink);

    // Create image
    var img = document.createElement("img");
    img.setAttribute('width', '300');
    img.setAttribute('height', '300');
    img.src = imgSrc;
    img.className += "attachment-medium size-medium wp-post-image";
    img.setAttribute('decoding', 'async');
    img.setAttribute('loading', 'lazy');
    img.setAttribute('sizes', '(max-width: 300px) 100vw, 300px');

    anchorLink.appendChild(img);
    imgWrap.appendChild(anchorLink);
    postInfoImageDiv.appendChild(imgWrap);

    return postInfoImageDiv;
}

function createPostContent(videoLink, videoTitle) {

    // Create post content
    var postContent = document.createElement("Div");
    postContent.className += "post-content hid";

    // Create post content h2
    var h2 = document.createElement("h2");
    h2.className += "postitle";

    // Create anchor link
    var a = document.createElement("a");
    a.setAttribute('href', videoLink);
    a.setAttribute('title', videoTitle);
    a.appendChild(document.createTextNode(videoTitle));

    h2.appendChild(a);
    postContent.appendChild(h2);

    return postContent;
}

function createDate(dateStr) {

    // Create date
    var date = document.createElement("Div");

    // Create date content
    var dateContent = document.createElement("h2");
    dateContent.className += "post-date hid";

    var dateStrArr = dateStr.split(".");

    for (const str of dateStrArr){
        var span = document.createElement("span");
        span.appendChild(document.createTextNode(str));
        dateContent.appendChild(span);
        dateContent.appendChild(document.createTextNode('.'));
    }

    dateContent.removeChild(dateContent.lastChild);
    date.appendChild(dateContent);

    return date;
}