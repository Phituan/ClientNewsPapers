getNews();

function getNews() {
    var game_content = document.getElementById("latestpost");
    var getNewsPaper = "https://beta-dot-assignmentcrawler.appspot.com/_api/article?ct=more";
    if (localStorage.getItem) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            var obj = JSON.parse(xhttp.responseText);

            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(xhttp.responseText);
                for (var i = 0; i < 8; i++) {
                    var image;
                    if (obj.data[i].thumbnail == 0) {
                        image = "https://q5v8e3s3.stackpathcdn.com/wp-content/uploads/2019/04/news-default-image-300x225.jpg";
                    }else image = obj.data[i].thumbnail[0];
                    console.log(image);
                    var news_item = '<div class="single-blog-post small-featured-post d-flex">';
                    news_item += '<div class="post-thumb">';
                    news_item += '<img class="thumbnail"  src="' + obj.data[i].thumbnail[0] + '">';
                    news_item += '</div>';
                    news_item += '<div class="post-data">';
                    news_item += '<div class="post-meta">';
                    news_item += '<a href="" class="post-title"><h6>' + obj.data[i].title + '</h6></a>';
                    news_item += '<p class="post-date"><span>' + obj.data[i].createdAtMLS +' </span></p>';
                    news_item += '</div>';
                    news_item += '</div>';
                    news_item += '</div>';
                    game_content.innerHTML += news_item;
                }

            }
        };
        xhttp.open("GET", getNewsPaper, true);
        xhttp.send();
    }

}
