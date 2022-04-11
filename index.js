document.querySelector('#box').addEventListener('submit', myFunction);


var  ds=localStorage.getItem('ds');
var newds;
if(ds==null){
    newds=[]
}
else{
    newds=JSON.parse(ds);
}

function myFunction(){
    event.preventDefault();
    var jobobj={
        name:document.querySelector('name').Value,
        no:document.querySelector('no').value,
        opt:document.querySelector('opt').Value
    }
    newds.push(jobobj);
    localStorage.setItem('ds', JSON.stringify(ds));
    alert("Added contact to your contact list");
}
