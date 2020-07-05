import './style.css';

function initialData(){
   return [{name:'LinkedIn', emailID : 'abc@linkedIn.com', title:'Linked In Jobs', 
   sub :'sdjb jbcjc bjc ajscn'},{name:'Myntra', emailID : 'abc@myntra.com', title:'Myntra',
   sub :'sdjbj bc jcb jcajscn'},{name:'Medium', emailID : 'abc@medium.com', title:'Javascript', sub :'sdj bj bcj cbj caj scn'}]
  }

  function createTable(){
    let content = initialData()
    let view= '<table>';
    for(let i=0; i< content.length;i++){
    view =  view +
            '<tr class ="emailID">' + 
            '<td class="underline">'+content[i]['name']+'</td>'+
            '<td>' + content[i]['sub']+'</td>'+
            '</tr>'
    }
     view = view + '</table>';
     document.getElementById('data').innerHTML = view;
  }
 
  createTable();

  var userSelection = document.getElementsByClassName("emailID");

  for(let i = 0; i < userSelection.length; i++) {
    userSelection[i].addEventListener("click", function() {
    let content = initialData()
    let newWin = window.open();
    let str = '<div>'+ content[i]['title'] +'</div>' + 
              '<div>'+ content[i]['emailID'] +'</div>' +
              '<div>'+ content[i]['sub'] +'</div>';

   newWin.document.write(str)
    },false)
  }

  
