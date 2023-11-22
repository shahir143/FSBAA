const listItem=document.getElementById('list');
const myform=document.getElementById('my-form');
const userName=document.getElementById('name');
const userEmail=document.getElementById('email');
const userNumber=document.getElementById('number');

myform.addEventListener('submit', savedata);

async function savedata(e){
    e.preventDefault();
    const userDetails={
        name:userName.value,
        email:userEmail.value,
        phone:userNumber.value
    }
    try{
        const response=await axios.post(`http://localhost:4000/user/data`,userDetails);
        const data=response.data;
        displaydata(data);
    }catch(err){
        console.log(err);
    }
}

function displaydata(data){
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`name:${data.name} - - email:${data.email} - - phone:${data.phone}`));
    
    const deletebtn=document.createElement('button');
    deletebtn.type="button";
    deletebtn.className="delete";
    deletebtn.id="deletebtn";
    deletebtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deletebtn);

    const editbtn=document.createElement('button');
    editbtn.type="button";
    editbtn.className="edit";
    editbtn.id="editbtn";
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);
    listItem.appendChild(li);
    deletebtn.onclick = async (e) => {
        const target = e.target.parentElement;
        console.log(target);
        const id = data.id;
        try{
        const user = await axios.delete(`http://localhost:4000/user/delete-data/${id}`);
        listItem.removeChild(target)
        }catch(e){
            console.log(e)
        }
    }
    editbtn.onclick=async(e)=>{
        const target=e.target.parentElement;
        const id=data.id;
        try{
            userName.value=data.name;
            userEmail.value=data.email;
            userNumber.value=data.phone;

            const user=await axios.delete(`http://localhost:4000/user/delete-data/${id}`);
            listItem.removeChild(target);
        }
        catch(err){
            console.log(err)
        }
    }
}

document.addEventListener('DOMContentLoaded',loadDetails);
async function loadDetails(){
    try{
        const dbData = await axios.get('http://localhost:4000/user/user-data')
        const usersData =dbData.data;
        if(usersData.length<1){
            console.log("No users");
        }

        for(let i =0;i<usersData.length;i++){
            displaydata(usersData[i]);
        }

    }catch(err){
        console.log(err);
    }
}
