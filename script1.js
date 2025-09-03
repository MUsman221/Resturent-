function BookATable(){
    document.getElementById("heroSection").className = 'd-none'
    document.getElementById("bookingForm").className = 'd-block'

}
const SubmitMessage = () =>{
    event.preventDefault()
    const FullName = document.getElementById('fullName').value;
    const Phone = document.getElementById('phone-no').value;
    const Email = document.getElementById('e-mail').value;
    const Service = document.getElementById('service').value;
    const MessageBox = document.getElementById("MsgBox").value
    const  User = {FullName,Phone, Email, Service, MessageBox}
    
    console.log(User)

    if (!FullName || FullName.length< 3){
        return showNotification("Please enter the Name")
        
    }
    if (!Email || Email.length< 3){
        return showNotification('Please Enter the Email')
    }
    if (!Phone || Phone.length< 3){
        
        return showNotification('Please Enter the Phone')
    }
    if (!Service){
        return showNotification('Please Select the Service')
    }
    if (!MessageBox || MessageBox.length< 3){
        
        return showNotification('Please Enter the Message')
    }
    
    let Message = JSON.parse(localStorage.getItem('Message')) || [];
    Message.push(User);
    localStorage.setItem('Message', JSON.stringify(Message));

}


const handleSubmit = () => {
    event.preventDefault()
    const Name = document.getElementById('name').value;
     const Email = document.getElementById('E-mail').value;
     const Phone = document.getElementById('phone').value;
    const Person = document.getElementById('person').value;
    const Date = document.getElementById('date').value;
     const Time = document.getElementById('time').value;
     const Message = document.getElementById('mess').value;
   
     const  Data = {Name, Email, Phone, Person,Date,Time , Message}
    console.log(Data)

    if (!Name || Name.length< 3){
        return showNotification("Please enter the Name")
        
    }
    if (!Email || Email.length< 3){
        return showNotification('Please Enter the Email')
    }
    if (!Phone || Phone.length< 3){
        
        return showNotification('Please Enter the Phone')
    }
    if (!Person){
        return showNotification('Please Enter the Person')
    }
    
    if (!Date) {
        return showNotification('Please Enter the Date')
    }
    if (!Time) {
       return showNotification('Please Enter the Time')
    }
  if (Message.length< 3){
        return showNotification('Please Enter the Message')
    }
    let AddData = JSON.parse(localStorage.getItem('AddData')) || [];
    AddData.push(Data);
    localStorage.setItem('AddData', JSON.stringify(AddData));

   
}



function showNotification(msg, type){
    
    let bgColor
    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #D976C, #93F9B9)"
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break
        default:
            bgColor = "#0f3c4c" 
            break;
    }

    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: bgColor,
        },
        // onClick: function(){} // Callback after click
      }).showToast();      
    }
    










