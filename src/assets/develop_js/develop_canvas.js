export default{
    draw(elem,a=1){
        // let b = document.documentElement.clientWidth
        if(document.documentElement.clientWidth<800){a = 0.6;}
        let canvas = elem
        let ctx = canvas.getContext('2d')
        canvas.width = 400*a
        canvas.height = 400*a 

        // 验证能不能用
        // ctx.fillStyle='#fff'        
        // ctx.fillRect(10,10,100,100)
         // let track = getelem('https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/develop_轨道.png')
        // setTimeout(()=>{
        //     ctx.drawImage(track,10,10)
        // },1000)

        // 先封装几个函数方便后面使用
        // function paint(image,x,y,width=false,height=false){ctx.save();image.onload=()=>{width===false?image.onload=ctx.drawImage(image,x,y):image.onload=ctx.drawImage(image,x,y,width,height)}}
        function getelem(src){let name = new Image();name.src=src;return name}
        // function line(startX,startY,endX,endY){ctx.beginPath();ctx.moveTo(startX,startY);ctx.lineTo(endX,endY),ctx.stroke()}
        // function random(x = 10){return Math.floor(Math.random()*x)}
       
        
        //下面初始化logo数据 
        let track = getelem('https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/develop_轨道.png')
        let homyit = getelem('https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/develop_logo.png')
        let ali = getelem('https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/develop_阿里.png')
        let didi = getelem('https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/develop_滴滴.png')
        let jingdong = getelem('https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/develop_京东.png')
        let tengxun = getelem('https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/develop_腾讯.png')
        let xiaomi = getelem('https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/develop_小米.png')
        let zijie = getelem('https://img-1306126172.cos.ap-nanjing.myqcloud.com/img/develop_字节.png')
        let tengxun_x=-22*a//-150
        let tengxun_y=-22*a//-175
        let zijie_x=-37.5*a//30 2.25
        let zijie_y=-37.5*a//-170 4.08
        let jingdong_x=-30*a//100 4.33
        let jingdong_y=-30*a//-20 0.33
        let xiaomi_x=-30*a//-170  4.67
        let xiaomi_y=-30*a//-15   0.5
        let ali_x = -29*a//-50    0.7
        let ali_y = -29*a//60     2.97
        let didi_x = -25*a//60    2.83
        let didi_y = -25*a//115   4.67
        let round = 0
        
        // 绘制函数
        function paint(){  
            ctx.save()
            ctx.clearRect(-200*a,-200*a,canvas.width,canvas.height)
            // 绘制轨道和homyit
            ctx.drawImage(track,-175*a,-175*a,350*a,350*a)
            ctx.drawImage(homyit,-30*a,-30*a,60*a,60*a)
            // 边界判断和动画
            if(tengxun_x<-150*a){
                ctx.drawImage(tengxun,tengxun_x,tengxun_y+Math.sin(round)*5,55*a,55*a)
                ctx.drawImage(zijie,zijie_x,zijie_y+Math.sin(round)*2,75*a,75*a);
                ctx.drawImage(jingdong,jingdong_x,jingdong_y+Math.sin(round)*3,60*a,60*a);
                ctx.drawImage(xiaomi,xiaomi_x,xiaomi_y+Math.sin(round)*3,60*a,60*a)
                ctx.drawImage(ali,ali_x,ali_y+Math.sin(round)*10,58*a,58*a)
                ctx.drawImage(didi,didi_x,didi_y+Math.sin(round)*6,50*a,50*a)
                round += 0.05
                if (round>6.28){round=0}
            }else{
                ctx.drawImage(tengxun,tengxun_x,tengxun_y,55*a,55*a);tengxun_x-=4.27*a;tengxun_y-=5.2*a
                ctx.drawImage(zijie,zijie_x,zijie_y,75*a,75*a);zijie_x+=2.25*a,zijie_y-=4.08*a;
                ctx.drawImage(jingdong,jingdong_x,jingdong_y,60*a,60*a);jingdong_x+=4.43*a;jingdong_y+=0.33*a;
                ctx.drawImage(xiaomi,xiaomi_x,xiaomi_y,60*a,60*a);xiaomi_x-=4.67*a;xiaomi_y+=0.5*a
                ctx.drawImage(ali,ali_x,ali_y,58*a,58*a);ali_x-=0.7*a;ali_y+=2.97*a
                ctx.drawImage(didi,didi_x,didi_y,50*a,50*a),didi_x+=2.83*a;didi_y+=4.67*a
            }
            ctx.restore()
            window.requestAnimationFrame(paint)
        }
        ctx.translate(200*a,200*a)
        paint()

        
    },
    back(elem){
        elem.style.width=window.screen.width+'px'
        elem.style.height=window.screen.height+'px'
        if(document.body.clientWidth<800){elem.style.width='1000px';}
    }
}