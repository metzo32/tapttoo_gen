const nicknameRule =
  /^(([a-zA-Z]+[0-9]*|[0-9]*[a-zA-Z]+)[a-zA-Z0-9]*|([가-힣]+[0-9]*|[0-9]*[가-힣]+)[가-힣0-9]*)$/;

const fullnameRule = /^([a-zA-Z]{3,15}|[가-힣]{2,15})$/;




export { nicknameRule, fullnameRule }