var areadata = [
  {
    "areaname": "南京市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120103531.jpg"
  },
  {
    "areaname": "无锡市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120126265.jpg"
  },
  {
    "areaname": "徐州市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120140578.jpg"
  },
  {
    "areaname": "常州市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120150758.jpg"
  },
  {
    "areaname": "苏州市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120203133.jpg"
  },
  {
    "areaname": "南通市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120216201.jpg"
  },
  {
    "areaname": "连云港市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120227775.jpg"
  },
  {
    "areaname": "淮安市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120237463.jpg"
  },
  {
    "areaname": "盐城市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120249142.jpg"
  },
  {
    "areaname": "扬州市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120304767.jpg"
  },
  {
    "areaname": "镇江市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120316803.jpg"
  },
  {
    "areaname": "泰州市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120329456.jpg"
  },
  {
    "areaname": "宿迁市",
    "picurl": "https://www.yixue99.com/uploadfile/2021/0713/20210713120346447.jpg"
  }
]

var areaname;
var picurl;
//console.log(areadata)


$(function(){
	
				
							$('.selectnav .select').siblings("#province-box").slideDown();
								
	$('.selectnav .select').on("click",function(){
		
		if($(this).siblings("#province-box").css("display")=="none"){
		   $(this).siblings("#province-box").slideDown();
		}else{
		   $(this).siblings("#province-box").slideUp();
		}    
		
	})
	
	console.log(returnCitySN["cip"]+','+returnCitySN["cname"]);
     $.ajax({
           url:"http://restapi.amap.com/v5/ip?parameters&key=f68b7b9ce649d3594fd070a9b8017471&ip="+returnCitySN["cip"]+"&type=4",
           success:function (e) {
               console.log(e.city+e.province+e.district);
               
   						
               for(var i = 0;i<$('.area dd').length;i++){
               	console.log($('.area dd').eq(i).html());
   							if($('.area dd').eq(i).attr('value') == e.city){
   								$(".selectnav .select").text(areadata[i].areaname);
   								
   							$('.selectnav .select').siblings("#province-box").hide();
   								picurl = areadata[i].picurl;
   								$(".ewmpic .pic img").attr("src",picurl)
   								
   								break; 
   							}
   						}
           }
   
       });
    
    
	$(".area dd").click(function(){
		areaname =$(this).text();
		console.log(areaname)
		$(".area").slideUp();
		$(".selectnav .select").text(areaname);
		for(var i = 0;i<areadata.length;i++){
			
			if(areadata[i].areaname == areaname){
				picurl = areadata[i].picurl;
				console.log(picurl)
				$(".ewmpic .pic img").attr("src",picurl)
				
				break;
			}
		}
		
	})
	
	
})

