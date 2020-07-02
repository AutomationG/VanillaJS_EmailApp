import './style.css';

const appDiv = document.getElementById('app');

class Email{

  constructor(){
   this.data = [{name:'LinkedIn', emailID : 'abc@linkedIn.com', title='Linked In Jobs', content :'sdjbjbcjcbjcajscn'},
   {name:'Myntra', emailID : 'abc@myntra.com', title='Myntra', content :'sdjbjbcjcbjcajscn'},
   {name:'Medium', emailID : 'abc@medium.com', title='Javascript', content :'sdjbjbcjcbjcajscn'}]
  }
}
appDiv.innerHTML = `<h1>JS Starter</h1>`;