import './style.css';

  <table>
  <tr onclick='openTab(0)'>
    <td class='underline'>LinkedIn</td>
    <td>hdjj sjnsjnj asn</td>
  </tr>
   <tr>
    <td class='underline'>LinkedIn</td>
    <td>hdj jsjns jnjasn</td>
  </tr>
  <tr>
    <td class='underline'>LinkedIn</td>
    <td>hdj jsjns jnjasn</td>
  </tr>
</table>

  function initialData(){
   return [{name:'LinkedIn', emailID : 'abc@linkedIn.com', title='Linked In Jobs', content :'sdjbjbcjcbjcajscn'},
   {name:'Myntra', emailID : 'abc@myntra.com', title='Myntra', content :'sdjbjbcjcbjcajscn'},
   {name:'Medium', emailID : 'abc@medium.com', title='Javascript', content :'sdjbjbcjcbjcajscn'}]
  }

  function openTab(){

   let newWin = window.open()
   let data = initialData()
   let content = '<html>'+
                  '<body>' +
                  '<div></div>' +
                  '<div></div>' +
                  '<div></div>' +
                  '</body>' +
                  '</html>' +
   newWin.write()

  }

  
