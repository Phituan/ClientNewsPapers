getNews();

function getNews() {
    var game_content = document.getElementById("news");
    var getNewsPaper = "https://beta-dot-assignmentcrawler.appspot.com/_api/article?ct=xe";
    if (localStorage.getItem) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            var obj = JSON.parse(xhttp.responseText);

            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(xhttp.responseText);
                for (var i = 0; i < obj.data.length; i++) {
                    var image;
                    if (obj.data[i].thumbnail == 0) {
                        image = "https://q5v8e3s3.stackpathcdn.com/wp-content/uploads/2019/04/news-default-image-300x225.jpg";
                    }else image = obj.data[i].thumbnail[0];
                    var news_item = '<div class="single-blog-post featured-post mb-30">';
                    news_item += '<div class="post-thumb">';
                    news_item += '<img class="thumbnail"  src="' + obj.data[i].thumbnail[0] + '">';
                    news_item += '</div>';
                    news_item += '<div class="post-data">';
                    news_item += '</div>';
                    news_item += '<a href="single-post.html?id='+obj.data[i].link+'" class="post-title"><h6>' + obj.data[i].title + '</h6></a>';
                    news_item += '<div class="post-meta">';
                    news_item += '<p class="post-author"> ' + obj.data[i].author + ' </p>';
                    news_item += '<p class="post-excerp">' + obj.data[i].description + '</p>';
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
