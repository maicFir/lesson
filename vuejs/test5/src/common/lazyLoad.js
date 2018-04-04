
export function VueLazyImg(node,imgSele){

  
    var imgDom = node;
    console.log(imgDom)
    var imgSele = imgSele || 'img[src$="error.jpg"]';
    var dataCache = {};
    setTimeout(function(){
        var nodes = $(node).find("img");
        var imgsArr = Array.from(nodes);
        imgsArr.map((img)=>{
            var src = img.getAttribute("data-src");//获取页面的data-src
            console.log("=="+src)
            var nimg;
            if(!src){
                return;
            }
            if(!dataCache[src]){
                nimg = new Image();
                img.src = src;
                dataCache[src] = true;
                nimg = null;
            }else{
                nimg.src = src;
            }
            img.removeAttribute("data-src")
        })
    },500)
}

export default {
    VueLazyImg
}