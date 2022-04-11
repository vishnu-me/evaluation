var addedcontacts= JSON.parse(localStorage.getItem('ds'));
function displaydata(addedcontacts){
    document.querySelector('tbody').innerHTML='';
    addedcontacts.forEach(job => {

    var row=document.createElement('tr');


    var td1=document.createElement('td');
    td1.innerText=job.name;

    var td2=document.createElement('td');
    td2.innerText=job.no;

    var td3=document.createElement('td');
    td3.innerText=job.opt;

    row.append(td1,td2,td3);
    document.querySelector('#tablebody').append(row);
        
    });
   
}
window.addEventListener('load', function(){
displaydata(addedcontacts);


});