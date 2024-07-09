
const nicknameRule =
/^(([a-zA-Z]+[0-9]*|[0-9]*[a-zA-Z]+)[a-zA-Z0-9]*|([가-힣]+[0-9]*|[0-9]*[가-힣]+)[가-힣0-9]*)$/;
//3~15자의 영문자, 한글, 숫자(숫자는 반드시 문자와 조합할 것)
const fullnameRule = /^([a-zA-Z]{3,15}|[가-힣]{2,15})$/;
//2~15자의 영자, 3~15자의 한글, 알파벳과 한글 병기 금지, 띄어쓰기 허용

export {nicknameRule, fullnameRule}