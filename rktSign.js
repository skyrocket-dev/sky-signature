let InitializeSignature = () => {
  console.clear();
  var userAgent = navigator.userAgent.toLowerCase();
  var supported = /(chrome|firefox)/;
  if (supported.test(userAgent.toLowerCase())) {
    var dark = [
      'background-color: #171718',
      'color: #ffffff',
      'padding: 20px 16px 16px 16px',
      'font-size: 16px;'
    ].join(';');
  
    var blue = [
      'padding: 20px 5px 16px',
      'background-color: #1727ff',
      'color: #ffffff',
      'font-size: 16px;'
    ].join(';');
  
    var spacer = ['background-color: transparent'].join(';');
  
    var msg =
      '\n\n %c Crafted by Skyrocket Digital %c https://skyrocket.is %c \n\n\n';
  
    console.log(msg, dark, blue, spacer);
  } else if (window.console) {
    console.log('Crafted by Skyrocket Digital https://skyrocket.is ');
  }
}

if (/complete|interactive|loaded/.test(document.readyState)) {
    InitializeSignature();
} else { 
    window.addEventListener('DOMContentLoaded', function () { 
        InitializeSignature();
    })
}
