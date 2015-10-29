////////////////////////////////////////////////////Autentification //////////////////////////////////////////////////
function Authentification(ps, psw, callback) {
	if(ps == "" || psw == "" || psw == undefined  || ps == undefined){ return "error : login, Password";}
	$.ajax({
		url: 'http://x.paracamplus.com/direct/check',
		type: 'POST',
		data: {
			login: ps,
			password: psw
		},
		dataType: 'xml',
		success: function (data) {
			var person;
			$(data).find('person').each(function () {
				person = new Person($(this).attr('personid'), $(this).attr('firstname'),$(this).attr('lastname'),$(this).attr('pseudo'),$(this).attr('email'));
			});
			callback(person, undefined);
		},
		error: function (e) {
			callback(undefined, 'error'+ e);
		}
	});
}

function Person(Id,Firstname,Lastname,Pseudo, Email){
	this.Id = Id;
	this.Firstname = Firstname;
	this.Lastname =Lastname;
	this.Pseudo = Pseudo;
	this.Email = Email;
}
///////////////////////////////////////////////////////////////////liste exos simplifié //////////////////////////////////////////////////////////////////////
function ExercicesListpetite(retour) {
	var exercicelist;
	$.ajax({
		url: 'http://e1.paracamplus.com/path/insta2?callback=backexolist',
		type: 'GET',
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
		contentType: 'application/json; charset=utf-8',
		jsonpCallback: 'backexolist',
		dataType: 'jsonp',
		success: function (data) {
			var exoarray = [
			];
			var noticearray = [
			];
			for (var i = 0; i < data.content[0].exercises.length; i++) {
				var exoi = {
					name: JSON.stringify(data.content[0].exercises[i].name),
					nickname: JSON.stringify(data.content[0].exercises[i].nickname),
					url: JSON.stringify(data.content[0].exercises[i].url),
					summary: JSON.stringify(data.content[0].exercises[i].summary),
					tag: JSON.stringify(data.content[0].exercises[i].tags)
				};
				exoarray.push(exoi);
			}
			var not = '';
			for (var i = 0; i < data.notice.length; i++) {
				not = not == '' ? JSON.stringify(data.notice[i])  : not + '------' + JSON.stringify(data.notice[i]);
			}
			exercicelist = {
				Notice: not,
				ExoTab: exoarray
			};
			retour(exercicelist, 'no error');
		},
		error: function (e) {
			retour('', 'error');
		}
	});
}

//////////////////////////////////////////////////////////////////////////////////////////la liste des exos//////////////////////////////////////////////////////

function ExercicesList(retour){
	var exercicelist;
	$.ajax({
		url : "http://e.paracamplus.com/path/all?callback=backexolist",
		type: 'GET',
		crossDomain: true,
		xhrFields:{
			withCredentials : true
		},
		contentType: "application/json; charset=utf-8",
		jsonpCallback: 'backexolist',
		dataType: 'jsonp',
		success: function(data) {


			var contentexo =[];

			for(var i=0;i<data.content.length;i++){
				var namecontent = data.content[i].title;
				var exotab =[];
				if(data.content[i].exercises != undefined){
					for(var j=0;j<data.content[i].exercises.length;j++){
						if(data.content[i].exercises[j].title != undefined ){

							var sousexotab =[];
							for(var k=0;k<data.content[i].exercises[j].exercises.length;k++){
								var exoi = new exercice(data.content[i].exercises[j].exercises[k].name, data.content[i].exercises[j].exercises[k].nickname, data.content[i].exercises[j].exercises[k].url.replace("/oneliner/",""), data.content[i].exercises[j].exercises[k].summary, data.content[i].exercises[j].exercises[k].tags);

								sousexotab.push(exoi);

							}

							var prologuee = data.content[i].exercises[j].prologue != undefined ? data.content[i].exercises[j].prologue :"";
							var exoid = new exercices(data.content[i].exercises[j].title, prologuee,sousexotab);
							exotab.push(exoid);

						}else{


							var exoi = new exercice(data.content[i].exercises[j].name, data.content[i].exercises[j].nickname, data.content[i].exercises[j].url.replace("/oneliner/",""), data.content[i].exercises[j].summary, data.content[i].exercises[j].tags);
							exotab.push(exoi);

						}


					}




					var prologuec = data.content[i].prologue != undefined ? data.content[i].prologue :"";
					var titreplusexo = new exercices(namecontent, prologuec,exotab);
					contentexo.push(titreplusexo);

				}



			}

			var notice ="";
			for(var i=0; i<data.notice.length;i++){
				notice = notice == "" ? data.notice[i] : notice + "    ----    " +data.notice[i];
			}


			var content = new contentandnotice(notice, contentexo);



			retour(content,undefined);


		},
		error: function(e) {

			retour(undefined,"error :" + e);

		}
	});




}

function exercice(a,b,c,d,e){
	this.name = a;
	this.nickname = b;
	this.url = c;
	this.summary = d;
	this.tag = e;
}

function exercices(a,b,c){
	this.title = a;
	this.prologue=b;
	this.exercices=c;
}

function contentandnotice(a,b){
	this.notice = a;
	this.content = b;

}






//////////////////////////////////////////////////////////////////////////////////////////exos////////////////////////////////////////////////////////////////
/**
 * Exercice URL
 * demande une URL en var
 */
 function exerciceId(idd, callback){
 	var synthesisDate, nameidentification, nicknameidentification, dateidentification, summaryidentification, tagidentification, firstnameidentification, lastnameidentification, emailidentification, questionnamecontent, questiontotalMarkcontent, questionbasenamecontent, commentcontent, initialcontent, stemcontent, stemcodecontent, stemusercontent, stemmachinecontent;


 	$.ajax({
 		url : "http://e0.paracamplus.com/exercisecontent/"+idd+"/stem",
 		type: 'GET',
 		dataType: 'xml',
 		crossDomain: true,
 		xhrFields:{
 			withCredentials : true
 		},
 		success: function(data) {
 			var jdata = $(data);


 			jdata.find('exerciseStem').each(function () {
 				synthesisDate = $(this).attr('synthesisDate');
 			});


 			jdata.find('identification').each(function () {
 				nameidentification = $(this).attr('name');
 				nicknameidentification = $(this).attr('nickname');
 				dateidentification = $(this).attr('date');
 			});


 			jdata.find('summary').each(function() {
 				summaryidentification = $(this).text();
 			});


 			jdata.find('tag').each(function() {
 				tagidentification = $(this).attr('name');
 			});


 			jdata.find('firstname').each(function() {
 				firstnameidentification = $(this).text();
 			});


 			jdata.find('lastname').each(function() {
 				lastnameidentification = $(this).text();
 			});


 			jdata.find('email').each(function() {
 				emailidentification = $(this).text();
 			});


 			jdata.find('question').each(function() {
 				questionnamecontent = $(this).attr('name');
 				questiontotalMarkcontent = $(this).attr('totalMark');
 			});


 			jdata.find('file').each(function() {
 				questionbasenamecontent = $(this).attr('basename');
 			});


 			jdata.find('comment').each(function() {
 				commentcontent = $(this).text();
 			});


 			jdata.find('initial').each(function() {
 				initialcontent = $(this).text();
 			});


 			jdata.find('p').each(function() {
 				stemcontent = $(this).text();
 			});


 			jdata.find('code').each(function() {
 				stemcodecontent = $(this).text();
 			});


 			jdata.find('user').each(function() {
 				stemusercontent = $(this).text();
 			});


 			jdata.find('machine').each(function() {
 				stemmachinecontent = $(this).text();
 			});


 			var exercisex = new ExerciceX(synthesisDate, nameidentification, nicknameidentification, dateidentification, summaryidentification, tagidentification, firstnameidentification, lastnameidentification, emailidentification, questionnamecontent,questiontotalMarkcontent, questionbasenamecontent, commentcontent, initialcontent, stemcontent, stemcodecontent, stemusercontent, stemmachinecontent);


 			callback(exercisex, undefined);

 		},
 		error: function(e) {
 			callback(undefined, 'error'+ e);
 		}


 	});
}




function ExerciceX(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q){
	this.synthesisDate = a;
	this.nameA = b;
	this.nickname = c;
	this.date = d;
	this.sommaire = e;
	this.tag = f;
	this.firstname = g;
	this.lastname = h;
	this.email = i;
	this.question = j;
	this.file = k;
	this.comment = l;
	this.initial = m;
	this.stem = n;
	this.codee = o;
	this.user = p;
	this.machine = q;
}
