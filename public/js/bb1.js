function Authentification(ps, psw, callback) {
    $.ajax({
        url: "http://x.paracamplus.com/direct/check",
        type: 'POST',
        data: {
            login: ps,
            password: psw
        },
        dataType: 'xml',
        success: function(data) {
            var appendHtml = '';
            $(data).find('person').each(function() {
                var id = $(this).attr('personid');
                var fname = $(this).attr('firstname');
                var lname = $(this).attr('lastname');
                var pname = $(this).attr('pseudo');
                var email = $(this).attr('email');
                appendHtml = {
                    Id: id,
                    Firstname: fname,
                    Lastname: lname,
                    Pseudo: pname,
                    Email: email
                };
            });
            callback(appendHtml, "no error");
        },
        error: function(e) {
            callback("", "error");
        }
    });
}

function ExercicesList(retour) {
    var exercicelist;
    $.ajax({
        url: "http://e1.paracamplus.com/path/insta2?callback=backexolist",
        type: 'GET',
        crossDomain: true,
        xhrFields: {
            withCredentials: true
        },
        contentType: "application/json; charset=utf-8",
        jsonpCallback: 'backexolist',
        dataType: 'jsonp',
        success: function(data) {
            var exoarray = [];
            var noticearray = [];
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
            var not = "";
            for (var i = 0; i < data.notice.length; i++) {
                not = not == "" ? JSON.stringify(data.notice[i]) : not + "------" + JSON.stringify(data.notice[i]);
            }
            exercicelist = {
                Notice: not,
                ExoTab: exoarray
            };
            retour(exercicelist, "no error");
        },
        error: function(e) {
            retour("", "error");
        }
    });
}