module.exports = {
    //基本路径
    publicPath : '',
    //不能使用history模式
    //输出文件目录
    outputDir : 'dist',
    //放置静态资源目录
    assetsDir : 'static',
    //指定生成的index.html路径
    indexPath : 'index.html',
    //检查
    lintOnSave : true,
    devServer : {
        proxy : {
            '/api' : {
                target : "http://localhost:8082",
                //是否反向代理
                changeOrigin : true,
                secure : false,
                pathRewrite : {
                    "^api" : "",
                }
            }
        }
    }
}