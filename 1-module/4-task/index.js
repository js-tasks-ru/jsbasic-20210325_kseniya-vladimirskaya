function checkSpam(str) {
  var res = str.toLowerCase();
  if (res.includes('1xbet') || res.includes('xxx')) {
  //if (('1xBet'.toLowerCase().indexOf('1xBet') === -1 || 'XXX'.toLowerCase().indexOf('XXX') === -1)) {
    return true;
  } else {
    return false;
  }
}
