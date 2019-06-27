function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}

function addNewElementAsLi() {
  let eInfo = retrieveEmployeeInformation();
  let ul = document.getElementsByClassName('employee-list')[0];
  let li = document.createElement('li');
  let textnode = document.createTextNode(eInfo);
  li.appendChild(textnode);
  ul.appendChild(li);
}

function addNewLiOnClick() {
  let f = document.getElementsByTagName('form')[0];
  f.addEventListener('click', function(e) {
    addNewElementAsLi();
  })
}

function clearEmployeeListOnLinkClick()
{

}
preventRefreshOnSubmit()
