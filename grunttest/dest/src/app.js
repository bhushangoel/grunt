var shortName = 'MyDatabase';
var version = '1.0';
var displayName = 'My Test Database Example';
var maxSizeInBytes = 65536;
var db = openDatabase(shortName, version, displayName, maxSizeInBytes);


function createTableIfNotExists() 
{
    //console.debug('createTableIfNotExists()');
var sql = "CREATE TABLE IF NOT EXISTS MyPage (id int PRIMARY KEY AUTOINCREMENT, name TEXT , number TEXT, sex RADIO, dob DATE, email EMAIL)";

    db.transaction
    (
        function (tr) 
        {
            tr.executeSql(sql, []);
            //console.debug('executeSql: ' + sql);
        }
    );
}

function insertRecord() 
{
    //console.debug('called insertRecord()');
    console.log('here is cursor');
    console.log('in here');

    var name = document.getElementById("nme").value;
    console.log(name);
    var sex;
    if (document.getElementById("sexMale").checked) 
    {
        //Male radio button is checked
        sex ="Male";
    } else if (document.getElementById("sexFemale").checked)
     {
        //Female is checked
        sex = "Female";
    }
    console.log(sex);
    var dob = document.getElementById("db").value;
    console.log(dob);
    var number = document.getElementById("number").value;
    console.log(number);
    var email = document.getElementById("email").value;
    console.log(email);
    //var qualification=document.getElementById('qq');
    //var knwlg = document.getElementById('tk');
    
     var sql = 'INSERT INTO MyPage (name, number, sex, dob, email) VALUES (?,?,?,?,?)';
    db.transaction
    (
        function (tr) 
        {
            console.log('hh');
            
            //console.log(sql);
            tr.executeSql(sql, [name, number.value, sex, dob, email]);
            console.log("jj");
            tr.executeSql('INSERT INTO MyPage (name, number, sex, dob, email) VALUES (?,?,?,?,?) [id, radio, date, text, email]');
            //console.debug('executeSql: ' + sql);
        }
    );
    //return false;
}

function showRecords() 
{
    console.log("showRecords called") ;
    db.transaction
    (
        function(tx) 
        {
        tx.executeSql
        (
            "SELECT * FROM MyPage", [], function(tr, shw) 
        {
            dataset = shw.rows;
            var res = document.getElementById("shw");
            var data = "<table border='1px' ><th>Id</th></th><th>name</th><th>number</th><th>sex</th><th>dob</th><th>email</th>";
            for (var i = 0; i < dataset.length; i++) 
            {

                data += "<tr>";
                data += "<td>" + dataset.item(i).Id + "</td>";
                data += "<td>" + dataset.item(i).nme + "</td>";
                data += "<td>" + dataset.item(i).number + "</td>"
                data += "<td>" + dataset.item(i).sexMale + "</td>";
                data += "<td>" + dataset.item(i).sexFemale + "</td>";
                data += "<td>" + dataset.item(i).db + "</td>";
                data += "<td>" + dataset.item(i).email + "</td>";
                data += "<td><a href='#' onclick='deleteRecord(" + dataset.item(i).Id + ")'>delete</a></td>";
                //data += "<td><a href='#' onclick='loadRecord(" + i + ")'>edit</a></td>";
                data += "</tr>";
            }
            console.log("chek");
            data += "</table>";
            res.innerHTML = data;
        }
        );
    }
    );
}

function deleteRecord(id) 
{
    console.debug('called deleteRecord()');

    var sql = 'DELETE FROM MyPage WHERE id=';

    db.transaction
    (
        function (tr) 
        {
            transaction.executeSql(sql, []);
            console.debug('executeSql: ' + sql);
            alert('Delete Sucessfully');
        }
    );
}

function resetForm()
{
    nme.value="";
    sexMale.value="";
    sexFemale.value="";
    db.value="";
    number.value="";    
    email.value="";
}

