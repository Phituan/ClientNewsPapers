document.addEventListener('DOMContentLoaded', function () {
    var url = new URL(window.location.href);
    var id = url.searchParams.get("id");
    if (id == null || id.length == 0) {
        return;
    }
    getNews(id);
});
function getNews(id) {
    var game_content = document.getElementById("detail");
    var getNewsPaper = "https://beta-dot-assignmentcrawler.appspot.com/_api/article?id="+ id;
    if (localStorage.getItem) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            var obj = JSON.parse(xhttp.responseText);

            if (this.readyState == 4 && this.status == 200) {
                var obj = JSON.parse(xhttp.responseText);
                    var image;
                    if (obj.data.thumbnail == 0) {
                        image = "https://q5v8e3s3.stackpathcdn.com/wp-content/uploads/2019/04/news-default-image-300x225.jpg";
                    }else image = obj.data.thumbnail[0];
                    console.log(image);
                    var news_item = '<div class="single-blog-post featured-post single-post">';
                    news_item += '<div class="post-thumb">';
                    news_item += '<img class="thumbnail"  src="' + obj.data.thumbnail[0] + '">';
                    news_item += '</div>';
                    news_item += '<div class="post-data">';
                    news_item += '<a href="" class="post-title"><b style="font-size:25px">' + obj.data.title + '</b></a>';
                    news_item += '<div class="post-meta">';
                    news_item += '<p href="" class="post-author">By<a href="#">' + obj.data.author + '</a></p>';
                    news_item += '<p>' + obj.data.content + '</p>';
                    news_item += '<p class="post-date"><span>' + obj.data.createdAtMLS +' </span></p>';
                    news_item += '</div>';
                    news_item += '</div>';
                    news_item += '</div>';
                    news_item += '</div>';
                    game_content.innerHTML += news_item;

            }
        };
        xhttp.open("GET", getNewsPaper, true);
        xhttp.send();
    }

}
