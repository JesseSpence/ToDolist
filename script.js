// Adding array
const array = [
];

// Original Loop
function showItems(array) {
document.querySelector("#list").innerHTML = " "; // This function is so that the loop doesn't repeat itself everytime there is new information put in
array.forEach((name) => {
  document.querySelector("#list").innerHTML += //Displays the loop
    `
    <li id='li'> <input id='checkbox'type="checkbox" onclick="taskCompleted()">${name} 
    
    <button onclick="openModal()">✎</button>
    
   <button type="button" onclick="deleteTask()">✂</button> </li>
   
  `; //Displays the loop as a list
});

}
showItems(array); //Executes the loop

// Add Function
function Add() {
const doTask = document.getElementById("Input1").value;
array.push(doTask);
showItems(array);
document.getElementById('Input1').value = ""
}

// Find function
function Search() {
SearchText = document.getElementById("Input2").value;
const FindText = array.find((msg) => msg.includes(SearchText));
 document.getElementById("list").innerHTML = `
   <li>${FindText ? FindText : "none of that, search is case sensitive."}
   </li>
   `;
console.log(array);
}

function taskCompleted() {
event.preventDefault();
  if (checkbox.checked === true) {
li.classList.toggle("completed", true)
} else {
li.classList.toggle("completed", false)
}
}

function deleteTask(){
const id = array.indexOf(name); 
const removeTask = array.splice(id,  1);  //splice array method
showItems(array);

}

function editTask(){

}
function openModal() {
document.getElementById("modal-container").style.display = "block";
}
function closeModal() {
document.getElementById("modal-container").style.display = "none";
}

