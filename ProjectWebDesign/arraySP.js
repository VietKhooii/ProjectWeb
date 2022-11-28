// JavaScript Document
function gioiTinh(maGt, tenGt)
{
    this.maGt = maGt;
    this.tenGt = tenGt;
}

var gioiTinharr=[
				new gioiTinh("nu","NỮ"),
				new gioiTinh("nam", "NAM"),
				new gioiTinh("emBe", "TRẺ EM"),
				];


			function taomenuGioiTinh()
			{
				//var menuarray=new Array("ASUS", "HP", "LENOVO", "DELL", "lien ket","Lien ket cuoi trang","Lien ket ngoai", "Lien ket email", "abc");
				var s="";
				for(i=0;i<gioiTinharr.length;i++)
				{
					var a='<a href="trangSanPham.html?'+gioiTinharr[i].maGt+'&1"><div onClick="taoMenuTheLoai()"><b>'
					s=s+a+gioiTinharr[i].tenGt+'</b></div></a>'
					// s=s+'<div>'+theloaiarr[i].tentl+'</div>';
					
				}
				// alert(s);
				document.getElementById("noiDungGioiTinh").innerHTML=s;
			}


function theloai(matl,tentl)
{
    this.matl = matl;
    this.tentl = tentl;
}

var theloaiarr=[
				new theloai("nuAo","Áo"),
				new theloai("nuQuan","Quần"),
				new theloai("nuVay","Váy"),
				new theloai("nuChanVay","Chân váy"),
				new theloai("namAo","Áo"),
				new theloai("namQuan","Quần"),
				new theloai("namAoKhoac","Áo khoác"),
				new theloai("namNon","Nón"),
				new theloai("emBeAo","Áo"),
				new theloai("emBeQuan","Quần"),
				new theloai("emBeDam","Đầm"),
				new theloai("emBeAoKhoac","Áo khoác"),
				];


			function taoMenuTheLoai()
			{
				//var menuarray=new Array("ASUS", "HP", "LENOVO", "DELL", "lien ket","Lien ket cuoi trang","Lien ket ngoai", "Lien ket email", "abc");
				var s="";
				var url = window.location.href;
				console.log("url new : "+url);
				// console.log("url old : "+urlOld);
				var tl = url.split('?');
				console.log("tl: "+tl);
				// if (url != urlOld){
				s = s+'<div class="theloai">';
				for(i=0;i<theloaiarr.length;i++)
				{	
					if (tl[1].indexOf('nu') > -1){
						if (theloaiarr[i].matl.indexOf('nu') > -1){
							var a='<a href="trangSanPham.html?'+theloaiarr[i].matl+'&1"><div onclick="hienthisptheophanloai()">';
							s=s+a+theloaiarr[i].tentl+'</div></a>'
							// s=s+'<div>'+theloaiarr[i].tentl+'</div>';
						}
					}
					else if (tl[1].indexOf('nam') > -1){
						if (theloaiarr[i].matl.indexOf('nam') > -1){
							var a='<a href="trangSanPham.html?'+theloaiarr[i].matl+'&1"><div onclick="hienthisptheophanloai()">';
							s=s+a+theloaiarr[i].tentl+'</div></a>'
							// s=s+'<div>'+theloaiarr[i].tentl+'</div>';
						}
					}
					else if (tl[1].indexOf('emBe') > -1){
						if (theloaiarr[i].matl.indexOf('emBe') > -1){
							var a='<a href="trangSanPham.html?'+theloaiarr[i].matl+'&1"><div onclick="hienthisptheophanloai()">';
							s=s+a+theloaiarr[i].tentl+'</div></a>'
							// s=s+'<div>'+theloaiarr[i].tentl+'</div>';
						}
					}
					
				}
				s = s + '</div>';
				// }

				// alert(s);
				console.log(s);
				document.getElementById("menuTheLoai").innerHTML=s;
			}
			
			
			function layurl1()
			{
				
				var url = window.location.href;
				var params = url.split('?');
				//alert(params[0])
				//alert(params[1]);
				switch(params[1])
				{
					
					case '0':
							//alert("co vao day k");
							document.getElementById("noidungcontent").innerHTML="Day la noi dung trang chu";
							break;
					case '1':
							document.getElementById("noidungcontent").innerHTML="Day la noi dung trang Gioi Thieu";
							break;
					case '2':
							document.getElementById("noidungcontent").innerHTML="Day la noi dung trang Thong tin tuyen sinh";
							break;
					case '3': 
							document.getElementById("noidungcontent").innerHTML="Day la noi dung Thong tin dao tao";
							break;
	
					default:
							break;
				}
				
			}
			
function sanpham(matl,tensp,gia,hinh)
{
    this.matl=matl;
    this.tensp = tensp;
    this.gia = gia;
	this.hinh=hinh;
}

var sanphamarr=[
					new sanpham("namAo", "Áo len nam", 378000, "Jv2/Images/nam/áo len nam.jpg"),
					new sanpham("namAo", "Áo sơ mi nam", 292500, "images/nam/áo sơ mi nam.jgp"),
					new sanpham("namAo","Áo sweater nam", 405000, "images/nam/áo sweater nam.jgp"),
					new sanpham("namAo", "Áo polo", 236000, "images/nam/áo polo.jgp"),
					new sanpham("namAo", "Áo thun nam trapped", 300000, "images/nam/áo thun nam trapped.jpg"),
					new sanpham("namAo", "Áo polo M1AT", 236000, "image/nam/áo polo M1AT.jpg"),
					new sanpham("namAo", "Áo thun", 96000, "images/nam/áo thun U1AT.jpg"),
					new sanpham("namAo", "Áo polo nam", 312500, "images/nam/áo polo nam.jpg"),
					new sanpham("namQuan", "Quần shorts jean nam", 310500,"images/nam/Quần shorts jean nam 11203.jpg"),
					new sanpham("namQuan", "Quần short M2ST", 147000, "images/nam/short M2ST.jpg"),
					new sanpham("namQuan", "Quần short jean M2SJ", 219000, "images/nam/short jean M2SJ.jpg"),
					new sanpham("namQuan", "Quần jean nam", 382000, "images/nam/jean nam.jpg"),
					new sanpham("namQuan", "Quần tây", 378000, "images/nam/tây.jpg"),
					new sanpham("namAoKhoac", "Áo khoác nam", 380000, "images/nam/áo khoác nam.jpg"),
					new sanpham("namAoKhoac", "Áo khoác CHECKRED", 380000, "images/nam/áo khoác checkred.jpg"),
					new sanpham("namAoKhoac", "Áo khoác M1AK", 464000, "images/nam/áo khoác M1AK.jpg"),	
					new sanpham("namAoKhoac", "Áo khoác M2AK", 496000, "images/nam/áo khoác M2AK.jpg"),
					new sanpham("namAoKhoac", "Áo khoác AKB1", 275000, "images/nam/áo khoác AKB1.jpg"),
					new sanpham("namAoKhoac", "Áo khoác OSHT", 238000, "images/nam/áo khoác OSHT.jpg"),
					new sanpham("namNon", "Nón Unisex", 148000, "images/nam/nón UNISEX 01.jpg"),
					new sanpham("namNon", "Nón lưỡi trai", 148000, "images/nam/nón lưỡi trai.jpg"),
					new sanpham("namNon", "Nón bucket", 148000, "images/nam/nón bucket.jpg"),
					new sanpham("namNon", "Nón lưỡi trai A2NL", 148000, "images/nam/nón lưỡi trai A2NL"),
					new sanpham("nuAo", "Áo sơ mi nữ", 247500, "images/nữ/áo sơ mi nữ.jpg"),
					new sanpham("nuAo", "Áo thun W2AT", 184500, "images/nữ/Áo thun W2AT.jpg"),
					new sanpham("nuAo", "Áo thun OSHT", 211500, "images/nữ/Áo thun OSHT.jpg"),
					new sanpham("nuAo", "Áo thun OSBA", 200000, "images/nữ/Áo thun OSBA.jpg"),
					new sanpham("nuAo", "Áo sơ mi UP23", 255000, "images/nữ/áo sơ mi UP23.jpg"),
					new sanpham("nuAo", "Áo sơ mi W2SM", 238500, "images/nữ/Áo sơ mi W2SM.jpg"),
					new sanpham("nuAo", "Áo sơ mi OSTR", 225500, "images/nữ/Áo sơ mi OSTR.jpg"),
					new sanpham("nuAo", "Áo sơ mi W3UT", 211500, "images/nữ/Áo sơ mi W3UT"),
					new sanpham("nuQuan", "Quàn jean W2QJ", 405000, "images/nữ/Quàn jean W2QJ.jpg"),
					new sanpham("nuQuan", "Quần jean W2TR", 396000, "images/nữ/Quần jean W2TR.jpg"),
					new sanpham("nuQuan", "Quần jean W2QJ", 405000, "images/nữ/Quần jean W2QJ"),
					new sanpham("nuQuan", "Quần jean SFTR", 292500, "images/nữ/Quần jean SFTR.jpg"),
					new sanpham("nuQuan", "Quần short jean WASH", 297000, "images/nữ/Quần short jean WASH.jpg"),
					new sanpham("nuQuan", "Quần short W2SK", 207000, "images/nữ/Quần short W2SK.jpg"),
					new sanpham("nuQuan", "Quần short W2SJ", 202500, "images/nữ/Quần short W2SJ.jpg"),
					new sanpham("nuQuan", "Quần short SFTR", 180000, "images/nữ/Quần short SFTR"),
					new sanpham("nuChanVay", "Chân váy W2CN", 193500, "images/nữ/Chân váy W2CN.jpg"),
					new sanpham("nuChanVay",  "Chân váy W2CR", 120000, "images/nữ/Chân váy W2CR.jpg"),
					new sanpham("nuChanVay",  "Chân váy SFXL", 144000, "images/nữ/Chân váy SFXL.jpg"),
					new sanpham("nuChanVay",  "Chân váy W2CH", 189000, "images/nữ/Chân váy W2CH.jpg"),
					new sanpham("emBeAo",  "Áo thun em bé nam", 169000, "images/embe/Áo thun em bé nam.jpg"),
					new sanpham("emBeAo", "Áo polo cho bé trai", 139500, "images/embe/Áo polo cho bé trai.jpg"),
					new sanpham("emBeAo",  "Áo thun cho bé trai", 199000, "images/embe/Áo thun cho bé trai"),
					new sanpham("emBeAo", "Áo thun W2TR",  235000, "images/embe/Áo thun W2TR.jpg"),
					new sanpham("emBeAo", "Áo thun dài cho bé gái", 150000, "images/embe/Áo thun dài cho bé gái.jpg"),
					new sanpham("emBeAo", "Áo thun croptop", 129000, "images/embe/Áo thun croptop.jpg"),
					new sanpham("emBeAo", "Áo cotton cho bé gái", 130000, "images/embe/Áo cotton cho bé gái.jpg"),
					new sanpham("emBeAo", "Áo cotton cho bé gái", 130000, "images/embe/Áo cotton cho bé gái.jpg"),
					new sanpham("emBeQuan", "Quần da cá cho bé trai", 219000, "images/embe/Quần da cá.jpg"),
					new sanpham("emBeQuan", "Quần jean cho  bé trai", 219000, "images/embe/Quần jean cho  bé trai.jpg"),
					new sanpham("emBeQuan", "Quần kaki trơn",  89000, "images/embe/Quần kaki trơn.jpg"),
					new sanpham("emBeQuan", "Quần jean dài cho bé trai", 179000, "images/embe/Quần jean dài cho bé trai.jpg"),
					new sanpham("emBeQuan", "Quần legging cho bé gái", 79000, "images/embe/Quần legging cho bé gái"),
					new sanpham("emBeQuan", "Quần short jean cho bé gái", 169000, "images/embe/Quần short jean cho bé gái.jpg"),
					new sanpham("emBeQuan", "Quần short jean lửng cho bé gái", 179000, "images/embe/Quần short jean lửng cho bé gái.jpg"),
					new sanpham("emBeDam", "Đầm tay phồng", 219000, "images/embe/Đầm tay phồng.jpg"),
					new sanpham("emBeDam", "Đầm em bé", 210000, "images/embe/Đầm em bé.jpg"),
					new sanpham("emBeAoKhoac", "Áo khoác nỉ cho bé trai", 210000, "images/embe/Áo khoác nỉ cho bé trai.jpg"),
					new sanpham("emBeDam", "Đầm cho bé gái", 229000, "images/embe/Đầm cho bé gái.jpg"),
					new sanpham("emBeAoKhoac", "Áo khoác nón cho bé ", 180000, "images/embe/Áo khoác nón cho bé.jpg"),
					new sanpham("emBeDam", "Đầm dây 2TR", 169000, "images/embe/Đầm dây 2TR.jpg"),
					new sanpham("emBeAoKhoac", "Áo khoác kaki cho bé", 89000, "images/embe/Áo khoác kaki cho bé.jpg"),
				];


var tam=[];
var sosp1trang=8;
var vitri=0;
function hienthitrangmacdinh()
{
	document.getElementById("hienthi").innerHTML="";
}

function timkiemganvaomangtam(matl)
{
	var t=0;
	for(i=0;i<sanphamarr.length; i++)
	{	//alert(sanphamarr[i].matl);
		if(sanphamarr[i].matl==matl)
		{	
			tam[t]=sanphamarr[i];
			t++;
		}
	}
}
function hienthisptheophanloai()
{
	
	//var tam=[];
	var url = window.location.href;
	var tl = url.split('?');
	var tl2 = tl[1].split('&');
	console.log("tl2 : "+ tl2[0]);
	alert(tl2[0]);
	
	timkiemganvaomangtam(tl2[0]);
	var s="";
	var checkXuongHang=1;
	// var dem=1;
	for(i=0;i<tam.length;i++)
	{  
		console.log("Ten sp : "+tam[i].tensp)
		if (checkXuongHang %4 == 0){
			s=s+'<div class="sp">  <div class="themhang" style=" text-align: center;"> Thêm vào giỏ hàng </div> </div>';
			// chanle++;
		}
		else{
			s=s+'<div class="sp"> <div class="themhang" style=" text-align: center;"> Thêm vào giỏ hàng </div> </div>';
		}
		console.log("check : "+checkXuongHang);
		checkXuongHang++;
	    // if(dem==sosp1trang)
	  	// 	break;
	 	// dem++;
	}
	  //alert(dem);
	  //console.log(dem);
		document.getElementById("sanPham").innerHTML=s;
	//alert(s);
	
}

function hienthisotrang()
{
	var s="";
	var url = window.location.href;
	var tl = url.split('?');
	var tl1=tl[1];
	var tl2=tl1.split('&');
	//alert(tl2[1]);
	var sotrang=Math.ceil(tam.length/sosp1trang);
	//alert(sotrang);
	var s="";
	//var a='<a href="index_div.html?'+ tl1+'"><div class="sotrang">';
	//alert(a);
		for(i=1;i<=sotrang;i++)
			s=s+'<a href="index_div.html?'+ tl2[0]+'&'+i+'"><div class="sotrang">'+i+'</a></div>';	
	//alert(s);
	document.getElementById("hienthisotrang").innerHTML=s;
}
  
function hienthisanpham_theophanloaicophantrang()
{
	var s="";
	var url = window.location.href;
	var chanle=0;
	var tl = url.split('?'); //su dung ham cat de lay chuoi phia sau dau ?
	var tl1=tl[1];
	var tl2=tl1.split('&'); // su dung ham cat chuoi de lay phia sau dau &
	//alert(tl2[1]);
	console.log(tl2[1]);// xuat so trang trong man hinh console
	console.log(sosp1trang); // xuat so san phan tren mot trang tren an hinh console
	var sotranghientai=tl2[1];
	vitri=(sotranghientai-1)*sosp1trang;
	var t=0;
	//alert("nguyen thanh sang");
	for(i=0;i<sanphamarr.length; i++)
	{	//alert(sanphamarr[i].matl);
		if(sanphamarr[i].matl==tl2[0])
		{	
			tam[t]=sanphamarr[i];
			t++;
		}
	}
	
	//alert(vitri);
	console.log(vitri); //xuat vi tri tren man hinh console
	var dem=1;
	for(i=vitri;i<tam.length;i++)
	{	if(chanle%2==0)
		{	
			s=s+'<div class="content" style="float:left; heigth:225px"><div syle="width:100%; heigth:225px">'+ tam[i].hinh +'</div></div>';
			chanle++;
		}
		else
		{	s=s+'<div class="content" style="float:right;heigth:225px"><div syle="width:100%; heigth:225px">'+ tam[i].hinh+'</div></div>';
			chanle++;
		}
		if(dem==sosp1trang)	
			break;
		dem++;
	}
		document.getElementById("hienthi").innerHTML=s;
		hienthisotrang();
}
