#

## 转载自： [czhyuwj博客园](https://www.cnblogs.com/czhyuwj/p/5855646.html)

当你打开一个页面，浏览器会

* 调用 document.open() 打开文档
* document.write(...) 将下载到的网页内容写入文档
* 所有内容写完了，就调用 document.close()
* 触发 dom ready 事件（DOMContentReady)
  
  所以你如果在第3步之前 document.write(1) 那么你就直接追加内容到当前位置，如果你在第3步之后 document.write()，那么由于 document 已经 close 了，所以必须重新 document.open() 来打开文档，这一打开，内容就被清空了。

不信你可以这样验证一下 ：

打开 http://baidu.com 等页面加载完
在控制台运行 document.write(1)，会看到页面清空，只有一个 1
再次运行 document.write(1)，会发现页面没有清空，1 变成了 11，因为追加了一个1
运行 document.close()，这是文档就关闭了。
再次运行 document.write(1)，你会发现文档又清空了，变成了 1。
或  案例实践下

 ```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Title</title>

</head>
<body>
<p>
    原先内容
</p>
<script>
    document.addEventListener("readystatechange", function (event) {
        if (document.readyState === "complete") {
            document.write("complete");
            document.close();
            document.write("complete");
        }
    }, false);
</script>
</body>
</html>
```