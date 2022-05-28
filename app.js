$('.radio-btn').click(function (){
    $('.radio-inner').toggleClass('active');
    $('body').toggleClass("dark-theme");
})

$('.nav-link').toggleClass('active');

// function sendEmail(){
//     var email = "minpyaes12.com";
//     var subject = "";
//     var msgBody = "Thank you for contacting us, we will get back to you in 24 hours!";
//     window.open(`mailto:${email}?subject=${subject}&body=${msgBody}`);
//   }

// function sendEmail(){
//     Email.send({
//         Host : "smtp.yourisp.com",
//         Username : "minpyaes12@gmail.com",
//         Password : "minpyaesone12899",
//         To : 'louishurri@gmail.com',
//         From : document.getElementsByName('.email').value(), 
//         Subject : "This is the subject",
//         Body : "Name" + document.getElementsByName('.name').value() + "<br> Email" + document.getElementsByName('.email').values() + "<br> Message" + document.getElementsByName('.message').values()
//     }).then(
//       message => alert('Message send successfully')
//     );
// }

// function sendMail() {
//     let fields = {
//         name: document.querySelector(".name").value,
//         email: document.querySelector(".email").value,
//         message: document.querySelector(".message").value,
//     };
//     let body = 'name' + fields.name + '<br>' + 'email' + fields.email + '<br>' + 'message' + fields.message + '<br>';
//     Email.send({
//         // SecureToken: "這裡填你的token",
//         To: 'louishurri@gmail.com',
//         From: fields.email,
//         Subject: "this is the test",
//         Body: body,
//     }).then(
//         message => alert('message send win')
//     );
// }


  
