var posts=["2026/03/01/部署成功过啦/","2026/01/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };