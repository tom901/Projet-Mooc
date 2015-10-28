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
									   var exoi = new exercice(data.content[i].exercises[j].exercises[k].name, data.content[i].exercises[j].exercises[k].nickname, data.content[i].exercises[j].exercises[k].url, data.content[i].exercises[j].exercises[k].summary, data.content[i].exercises[j].exercises[k].tags);
									   
										sousexotab.push(exoi);									
								
									}
									
									 var prologuee = data.content[i].exercises[j].prologue != undefined ? data.content[i].exercises[j].prologue :"";
									var exoid = new exercices(data.content[i].exercises[j].title, prologuee,sousexotab);
									 exotab.push(exoid);
								
								}else{
								
								
								var exoi = new exercice(data.content[i].exercises[j].name, data.content[i].exercises[j].nickname, data.content[i].exercises[j].url, data.content[i].exercises[j].summary, data.content[i].exercises[j].tags);	
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

