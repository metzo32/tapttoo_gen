import s from "../stores/styling";

interface RegisterInputItemsProps {
    name: string;
    type: string;
     id: string;
     value: string;
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; //이벤트 핸들러 함수
     onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
     required : boolean;
     label: string;
     minLength?: number;
     maxLength?: number;
     placeholder?: string;
     extraClass?: string;
     autocomplete?: string;
}

const RegisterInputItems: React.FC<RegisterInputItemsProps> = ({ name, type, id, value, onChange, onBlur, required, label, minLength, placeholder, extraClass }) => {
  return (
    <s.LoginDiv className={`input-box ${extraClass ? extraClass : ''}`}>
      <s.Input
        name={name}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        minLength={minLength}
        placeholder={placeholder}
        className="loginpage"
      />
      <s.Label className={`login-info ${value ? "active" : ""}`}>
        {label}
      </s.Label>
    </s.LoginDiv>
  );
};

export default RegisterInputItems;