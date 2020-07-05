import './style.css';

function initialData(){
   return [{name:'LinkedIn', emailID : 'abc@linkedIn.com', title:'Linked In Jobs',  sub :'sdjb jbcjc bjc ajscn'},
   {name:'Myntra', emailID : 'abc@myntra.com', title:'Myntra', sub :'sdjbj bc jcb jcajscn'},
   {name:'Medium', emailID : 'abc@medium.com', title:'Javascript', sub :'sdj bj bcj cbj caj scn'}]
  }

  function createTable(){
    let content = initialData()
    let view= "<table>";
    for(let i=0; i< content.length;i++){
    view =  view +
            "<tr onclick='openTab(i)'>" + 
            "<td class='underline'>"+content[i]['name']+"</td>"+
            "<td>" + content[i]['sub']+"</td>"+
            "</tr>"
    }
     view = view + "</table>";
     document.getElementById('data').innerHTML = view;
  }
  createTable();

  function openTab(index){
   let newWin = window.open()
   let data = initialData()
   let content = '<html>'+
                  '<body>' +
                  '<div>'+data[index]['title']+'</div>' +
                  '<div>'+data[index]['emailID']+'</div>' +
                  '<div>'+data[index]['sub']+'</div>' +
                  '</body>' +
                  '</html>' +
   newWin.document.write(content)

  }

  
