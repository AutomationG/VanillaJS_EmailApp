import './style.css';

function openTab(){
  console.log('new tab')
  var newWin = window.open();
  let str = '<div>ajsnx</div>' + 
            '<div>aksm</div>' + 
            '<div>jnjsn</div>';

 newWin.document.write(str)
}

function open(){
console.log('ddbausdbu')
}

//openTab();
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
            '<tr onclick = "openk()">' + 
            '<td class="underline">'+content[i]['name']+'</td>'+
            '<td>' + content[i]['sub']+'</td>'+
            '</tr>'
    }
     view = view + '</table>';
     document.getElementById('data').innerHTML = view;
  }
 
  createTable();

  
