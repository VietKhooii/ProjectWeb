var userArray = [];
var productArray = [];
function createAdmin(){
	var bien="abc123";
	if(localStorage.getItem('user')==null){		
		// alert("co vao day k!!!!!!!!!!!");
		var user = {username: 'admin1', password: 'admin', fullName: 'Nguyen Van A ', email: '123@gmail.com', phone: '0566490523'};
		var user1 = {username: 'admin2', password: 'abc', fullName: 'Nguyen Van b ', email: 'khoi@gmail.com', phone: '0566490523'};
		var user3={username:'admin3' , password: 'abc', fullName: 'Nguyen Van b ', email: 'hi@gmail.com', phone: '0566490523'}
		userArray.push(user);
		userArray.push(user1);
		userArray.push(user3);
		localStorage.setItem('user',JSON.stringify(userArray));
	}
}
//----------------------show user----------------------------------
function showUserList(){
// alert("co vao day k");
	if(localStorage.getItem('user')===null){
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	var tr='';
	for(var i=0; i<userArray.length;i++){
		
		tr+='<tr><td><div class="user"><td>'+i+'</td><br><b>-Tên : <b><td>'+userArray[i].fullName+'</td><br>-Tên đăng nhập : <td>'+userArray[i].username+'</td><br>-Email : <td>'+userArray[i].email+'</td><br>-Password : <td>'+userArray[i].password+'</td><br>-SĐT : <td>'+userArray[i].phone+'</td><br><td><button class="deleteButton" onClick="deleteuser(\''+userArray[i].username+'\')">&times;</button></td></div></td></tr>';
	}
	document.getElementById('user').innerHTML=tr;
}

//su dung: push them phan tu vao cuoi mang, pop: xoa phan tu cuoi mang, unshit: them phan tu vao dau mang, shit: xoa phtu nam dau mang-----
//----------------------delete user-------------------------------
function deleteuser(usernamedelete){
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(userArray[i].username == usernamedelete){
			if(confirm('Bạn có muốn xóa tài khoản này?')){
				userArray.splice(i, 1);
			}
		}
	}
	localStorage.setItem('user',JSON.stringify(userArray));
	showUserList();
}



function createnewuser()
{
	var userArray = JSON.parse(localStorage.getItem('user'));
	var resultGender;
	if (document.getElementById('Male').checked == true) resultGender = document.getElementById('Male').value;
	if (document.getElementById('Female').checked == true) resultGender = document.getElementById('Female').value;
	if (document.getElementById('Private').checked == true) resultGender = document.getElementById('Private').value;
	var user1 = {username: document.getElementById('username').value, password: document.getElementById('password').value, fullName: document.getElementById('fullName').value, email: document.getElementById('email').value, phone: document.getElementById('phoneNumber').value , confirmPassword: document.getElementById('confirmPassword').value};
	if (user1.fullName.length == 0 || user1.username.length == 0 || user1.email.length == 0 || user1.phone.length == 0 || user1.password.length == 0 || user1.confirmPassword.length == 0 || (document.getElementById('Male').checked == false && document.getElementById('Female').checked == false && document.getElementById('Private').checked == false )){
		alert("Please complete your personal information!")
		return false;
	}
	for(var i=0;i<userArray.length;i++){
		if(user1.username == userArray[i].username){
			alert("User name existed!");
			return false;
		}
		if(user1.phone == userArray[i].phone){
			alert("Phone existed!");
			return false;
		}
		if(user1.email == userArray[i].email){
			alert("email existed!");
			return false;
		}
	}
	if(user1.email.indexOf('@gmail.com') <= -1){
		alert("email incorrect!");
		return false;
	}
	if (user1.password.length < 8){
		alert("Password must be more than 7 characters!");
		return false;
	}
	if (user1.password != user1.confirmPassword){
	    alert("Make sure password and password confirmation are the same!");
		return false;
    }
	console.log(user1);
	console.log("Type user 1:");
	console.log(typeof(user1));
	userArray.push(user1);
	
	localStorage.setItem('user',JSON.stringify(userArray));
    window.location="file:///C:/Users/VieetKhooii/OneDrive/Ta%CC%80i%20li%C3%AA%CC%A3u/htmlVSC/ProjectWebDesign/trangchu.html";
	showUserList();
}

function login()
{
	var username=document.getElementById("userName").value;
	var password=document.getElementById("passWord").value;
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(i=0;i<userArray.length;i++)
		if(userArray[i].username==username && userArray[i].password==password){
			if (userArray[i].username=="admin1"||userArray[i].username=="admin2"||userArray[i].username=="admin3"){
				window.location="file:///C:/Users/VieetKhooii/OneDrive/Ta%CC%80i%20li%C3%AA%CC%A3u/htmlVSC/ProjectWebDesign/Admin.html";
			}
			else {
				window.location="file:///C:/Users/VieetKhooii/OneDrive/Ta%CC%80i%20li%C3%AA%CC%A3u/htmlVSC/ProjectWebDesign/UserPage.html";
				
			}
		}	
}


function createProduct(){
	if(localStorage.getItem('product')===null){
		var productArray = [
			{Gender: 'nam', type: 'ao', name: "Áo len nam", price: 378000, img:"Jv2/Images/nam/áo len nam.jpg"},
			{Gender: 'nam', type: 'ao', name: "Áo sơ mi nam", price: 292500, img:"images/nam/áo sơ mi nam.jgp"},
            {Gender: 'nam', type: 'ao', name: "Áo sweater nam", price: 405000, img:"images/nam/áo sweater nam.jgp"},
            {Gender: 'nam', type: 'ao', name: "Áo polo", price: 236000, img:"images/nam/áo polo.jgp"},
            {Gender: 'nam', type: 'ao', name: "Áo thun nam trapped", price: 300000, img:"images/nam/áo thun nam trapped.jpg"},
            {Gender: 'nam', type: 'ao', name: "Áo polo M1AT", price: 236000, img:"image/nam/áo polo M1AT.jpg"},
            {Gender: 'nam', type: 'ao', name: "Áo thun", price: 96000, img:"images/nam/áo thun U1AT.jpg"},
            {Gender: 'nam', type: 'ao', name: "Áo polo nam", price: 312500, img:"images/nam/áo polo nam.jpg"},
            {Gender: 'nam', type: 'quan', name: "Quần shorts jean nam", price: 310500   , img:"images/nam/Quần shorts jean nam 11203.jpg"},
            {Gender: 'nam', type: 'quan', name: "Quần shorts khakhi nam", price: 265500, img:"shorts khakhi nam.jpg"},
            {Gender: 'nam', type: 'quan', name: "Quần short thun nam", price: 310500, img:"images/nam/short thun nam.jpg"},
            {Gender: 'nam', type: 'quan', name: "Quần short jean nam", price: 310500, img:"images/nam/short jean nam wild.jpg"},
            {Gender: 'nam', type: 'quan', name: "Quần short M2ST", price: 147000, img:"images/nam/short M2ST.jpg"},
            {Gender: 'nam', type: 'quan', name: "Quần short jean M2SJ", price: 219000, img:"images/nam/short jean M2SJ.jpg"},
            {Gender: 'nam', type: 'quan', name: "Quần jean nam", price: 382000, img:"images/nam/jean nam.jpg"},
            {Gender: 'nam', type: 'quan', name: "Quần tây", price: 378000, img:"images/nam/tây.jpg"},
            {Gender: 'nam', type: 'aokhoac', name: "Áo khoác nam", price: 380000, img:"images/nam/áo khoác nam.jpg"},
            {Gender: 'nam', type: 'aokhoac', name: "Áo khoác CHECKRED", price: 380000, img:"images/nam/áo khoác checkred.jpg"},
            {Gender: 'nam', type: 'aokhoac', name: "Áo khoác M1AK", price: 464000, img:"images/nam/áo khoác M1AK.jpg"},
            {Gender: 'nam', type: 'aokhoac', name: "Áo khoác M2AK", price: 496000, img:"images/nam/áo khoác M2AK.jpg"},
            {Gender: 'nam', type: 'aokhoac', name: "Áo khoác AKB1", price: 275000, img:"images/nam/áo khoác AKB1.jpg"},
            {Gender: 'nam', type: 'aokhoac', name: "Áo khoác OSHT", price: 238000, img:"images/nam/áo khoác OSHT.jpg"},
            {Gender: 'nam', type: 'non', name: "Nón Unisex", price: 148000, img:"images/nam/nón UNISEX 01.jpg"},
            {Gender: 'nam', type: 'non', name: "Nón lưỡi trai", price: 148000, img:"images/nam/nón lưỡi trai.jpg"},
            {Gender: 'nam', type: 'non', name: "Nón bucket", price: 148000, img:"images/nam/nón bucket.jpg"},
            {Gender: 'nam', type: 'non', name: "Nón lưỡi trai A2NL", price: 148000, img:"images/nam/nón lưỡi trai A2NL"},  
            {Gender: 'nu', type: 'ao', name: "Áo sơ mi nữ", price: 247500, img:"images/nữ/áo sơ mi nữ.jpg"},
			{Gender: 'nu', type: 'ao', name: "Áo thun W2AT", price: 184500, img:"images/nữ/Áo thun W2AT.jpg"},
            {Gender: 'nu', type: 'ao', name: "Áo thun OSHT", price: 211500, img:"images/nữ/Áo thun OSHT.jpg"},
            {Gender: 'nu', type: 'ao', name: "Áo thun OSBA", price: 200000, img:"images/nữ/Áo thun OSBA.jpg"},
            {Gender: 'nu', type: 'ao', name: "áo sơ mi UP23", price: 255000, img:"images/nữ/áo sơ mi UP23.jpg"},
            {Gender: 'nu', type: 'ao', name: "Áo sơ mi W2SM", price: 238500, img:"images/nữ/Áo sơ mi W2SM.jpg"},
            {Gender: 'nu', type: 'ao', name: "Áo sơ mi OSTR", price: 225500, img:"images/nữ/Áo sơ mi OSTR.jpg"},
            {Gender: 'nu', type: 'ao', name: "Áo sơ mi W3UT", price: 211500, img:"images/nữ/Áo sơ mi W3UT"},
            {Gender: 'nu', type: 'quan', name: "Quàn jean W2QJ", price: 405000, img:"images/nữ/Quàn jean W2QJ.jpg"},
            {Gender: 'nu', type: 'quan', name: "Quần jean W2TR", price: 396000, img:"images/nữ/Quần jean W2TR.jpg"},
            {Gender: 'nu', type: 'quan', name: "Quần jean W2QJ", price: 405000, img:"images/nữ/Quần jean W2QJ"},
            {Gender: 'nu', type: 'quan', name: "Quần jean SFTR", price: 292500, img:"images/nữ/Quần jean SFTR.jpg"},
            {Gender: 'nu', type: 'quan', name: "Quần short jean WASH", price: 297000, img:"images/nữ/Quần short jean WASH.jpg"},
            {Gender: 'nu', type: 'quan', name: "Quần short W2SK", price: 207000, img:"images/nữ/Quần short W2SK.jpg"},
            {Gender: 'nu', type: 'quan', name: "Quần short W2SJ", price: 202500, img:"images/nữ/Quần short W2SJ.jpg"},
            {Gender: 'nu', type: 'quan', name: "Quần short SFTR", price: 180000, img:"images/nữ/Quần short SFTR"},
            {Gender: 'nu', type: 'vay', name: "Chân váy W2CN", price: 193500, img:"images/nữ/Chân váy W2CN.jpg"},
            {Gender: 'nu', type: 'vay', name: "Chân váy W2CR", price: 120000, img:"images/nữ/Chân váy W2CR.jpg"},
            {Gender: 'nu', type: 'vay', name: "Chân váy SFXL", price: 144000, img:"images/nữ/Chân váy SFXL.jpg"},
            {Gender: 'nu', type: 'vay', name: "Chân váy W2CH", price: 189000, img:"images/nữ/Chân váy W2CH.jpg"},
			{Gender: 'embe', type: 'ao', name: "Áo thun em bé nam", price: 169000, img:"images/embe/Áo thun em bé nam.jpg"},
			{Gender: 'embe', type: 'ao', name: "Áo polo cho bé trai", price: 139500, img:"images/embe/Áo polo cho bé trai.jpg"},
            {Gender: 'embe', type: 'ao', name: "Áo thun cho bé trai", price: 199000, img:"images/embe/Áo thun cho bé trai"},
            {Gender: 'embe', type: 'ao', name: "Áo thun W2TR", price: 235000, img:"images/embe/Áo thun W2TR.jpg"},
            {Gender: 'embe', type: 'ao', name: "Áo thun dài cho bé gái", price: 150000, img:"images/embe/Áo thun dài cho bé gái.jpg"},
            {Gender: 'embe', type: 'ao', name: "Áo thun croptop", price: 129000, img:"images/embe/Áo thun croptop.jpg"},
            {Gender: 'embe', type: 'ao', name: "Áo cotton cho bé gái", price: 130000, img:"images/embe/Áo cotton cho bé gái.jpg"},
            {Gender: 'embe', type: 'quan', name: "Quần kaki dài cho bé trai", price: 124000, img:"images/embe/Quần kaki dài cho bé trai.jpg"},
            {Gender: 'embe', type: 'quan', name: "Quần da cá cho bé trai", price: 219000, img:"images/embe/Quần da cá.jpg"},
            {Gender: 'embe', type: 'quan', name: "Quần jean cho  bé trai", price: 219000, img:"images/embe/Quần jean cho  bé trai.jpg"},
            {Gender: 'embe', type: 'quan', name: "Quần kaki trơn", price: 89000, img:"images/embe/Quần kaki trơn.jpg"},
            {Gender: 'embe', type: 'quan', name: "Quần jean dài cho bé trai", price: 179000, img:"images/embe/Quần jean dài cho bé trai.jpg"},
            {Gender: 'embe', type: 'quan', name: "Quần legging cho bé gái", price: 79000, img:"images/embe/Quần legging cho bé gái"},
            {Gender: 'embe', type: 'quan', name: "Quần short jean cho bé gái", price: 169000, img:"images/embe/Quần short jean cho bé gái.jpg"},
            {Gender: 'embe', type: 'quan', name: "Quần short jean lửng cho bé gái", price: 179000, img:"images/embe/Quần short jean lửng cho bé gái.jpg"},
            {Gender: 'embe', type: 'dam', name: "Đầm tay phồng", price: 219000, img:"images/embe/Đầm tay phồng.jpg"},
            {Gender: 'embe', type: 'dam', name: "Đầm em bé", price: 210000, img:"images/embe/Đầm em bé.jpg"},
            {Gender: 'embe', type: 'aokhoac', name: "Áo khoác nỉ cho bé trai", price: 210000, img:"images/embe/Áo khoác nỉ cho bé trai.jpg"},
            {Gender: 'embe', type: 'dam', name: "Đầm cho bé gái", price: 229000, img:"images/embe/Đầm cho bé gái.jpg"},
            {Gender: 'embe', type: 'aokhoac', name: "Áo khoác nón cho bé ", price: 000, img:"images/embe/Áo khoác nón cho bé.jpg"},
            {Gender: 'embe', type: 'dam', name: "Đầm dây 2TR", price: 169000, img:"images/embe/Đầm dây 2TR.jpg"},
            {Gender: 'embe', type: 'aokhoac', name: "Áo khoác kaki cho bé", price: 89000, img:"images/embe/Áo khoác kaki cho bé.jpg"},
		];
		localStorage.setItem('product',JSON.stringify(productArray));
	}
}

function showProductList(){
		if(localStorage.getItem('product')===null){
			return false;
		}
		var productArray = JSON.parse(localStorage.getItem('product'));
		var tr='';
		for(var i=0; i<productArray.length;i++){
			
			tr+='<tr><td><div class="product"><td>'+i+'</td><br><b>-Gender : <b><td>'+productArray[i].Gender+'</td><br>-Type : <td>'+productArray[i].type+'</td><br>-Name : <td>'+productArray[i].name+'</td><br>-Price : <td>'+productArray[i].price+'</td><br>-Img : <td>'+productArray[i].img+'</td><br><td><button class="deleteButton" onClick="deleteuser(\''+productArray[i].name+'\')">&times;</button></td></div></td></tr>';
		}
		document.getElementById('product').innerHTML=tr;
	}
// ----json là một dạng truyền nhận trên môi trường internet đến server----------------
//Convert to JSON
//- eval(): là hàm trong javascript được dùng để chuyển đổi một biến string sang dạng JSON
//- JSON.parse(): Cú pháp JSON.parse(text [, reviver])
//Là hàm trong javascript được dùng để chuyển đổi chuổi JSON sang đối tượng

// var jsontext = '{"Ho": "Hoang", "Ten": "Thanh", "Phone": ["0913690366", "016821034**"]}'
// var contact = JSON.parse(jsontext);
// document.write(contact.Ten  + ", " + contact.Ho+ '</ br>');

//output: Thanh, Hoang

//JSON.stringify(): Cú pháp JSON.stringify(value [, replacer] [, space])
//Là hàm trong javascript được dùng để chuyển đổi một object và một array thành json

// var contact = new Object();
// contact.firstname = "Jesper";
// contact.surname = "Aaberg";
// contact.phone = ["555-0100", "555-0120"];

// var memberfilter = new Array();
// memberfilter[0] = "surname";
// memberfilter[1] = "phone";
// var jsonText = JSON.stringify(contact, memberfilter, "\t");
// document.write(jsonText);
// Output:  
// { "surname": "Aaberg", "phone": [ "555-0100", "555-0120" ] }
