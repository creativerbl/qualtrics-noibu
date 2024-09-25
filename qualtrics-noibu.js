// Function to get the value of a cookie by name
function getCookieValue(cookieName) {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  
  console.log('Cookie not found: ' + cookieName);
  return null;
}

// Function to check SDK existence and add custom attribute
function checkSDKExistanceAndAddCustomAttribute(attributeName, cookieName) {
  const sdkCheck = setInterval(() => {
    if (window.NOIBUJS) {
      clearInterval(sdkCheck);
      var cookieValue = getCookieValue(cookieName);
      if (cookieValue) {
        window.NOIBUJS.addCustomAttribute(attributeName, cookieValue);
      } else {
        console.error('Could not find the ' + cookieName + ' cookie.');
        console.log('Error: The ' + cookieName + ' cookie is missing. Please check your cookie settings.');
      }
    }
  }, 3000);
}

// Usage for 'QST' cookie
checkSDKExistanceAndAddCustomAttribute('QST', 'QST');

// Usage for 't_uid' cookie
checkSDKExistanceAndAddCustomAttribute('t_uid', 't_uid');
