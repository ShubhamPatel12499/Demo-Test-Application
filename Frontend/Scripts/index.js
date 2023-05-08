// function Add(){
//     Full_name=document.getElementById("Full_name").value;
//     Email= document.getElementById("Email").value;
//     Country= document.getElementById("Country").value;
//     State= document.getElementById("State").value;
//     City= document.getElementById("City").value;
//     Languages= document.getElementById("Languages").value;
//     Date= document.getElementById("Date").value;
//     Actions= document.getElementById("Actions").value;
// }

// let deleteData = async(id) =>{
//     let res = await fetch(`http://localhost:8080/customers/${id}`,{
//         method:"DELETE",
//         headers:{
//             "Content-Type":"application/json",
//         }
//     });
//     getData();
// }

// let updateData= async(id)=>{
//     let data = await fetch(`http://localhost:8080/customers/${id}`);
//     const new_customer = window.prompt("Enter new Name");

//     let udata = {}
// }

document.querySelector("form").addEventListener("submit",MyFunction);

let formTag=document.querySelector("form");

function MyFunction(event){
    event.preventDefault();
    let Full_name = formTag.name.value;
    let Email =formTag.employeeID.value;
    let Country = formTag.department.value;
    let State= formTag.exp.value;
    let City= formTag.email.value;
    let Languages= formTag.mbl.value;
    let Date= formTag.mbl.value;
    let Actions= formTag.mbl.value;
    

  let element=document.createElement("tr");

  let td1=document.createElement("td");
  td1.innerText= Name;

  let td2=document.createElement("td");
  td2.innerText= EmployeeID;

  let td3=document.createElement("td");
  td3.innerText= department;

  let td4=document.createElement("td");
  td4.innerText= Experience;

  let td5=document.createElement("td");
  td5.innerText= Email;

  let td6=document.createElement("td");
  td6.innerText= Mobile;

  let td7=document.createElement("td");
  td7.innerText= Mobile;

  let td8=document.createElement("td");
  td8.innerText="DELETE";
//   td8.style.backgroundColor="red";
  td8.style.cursor ="pointer";
  td8.addEventListener("click",DeleteRow);

  tr.append(td1, td2, td3, td4, td5, td6 ,td7, td8);
  document.querySelector("tbody").append(tr);
  
 
}

function DeleteRow(event){
    event.target.parentNode.remove();
}