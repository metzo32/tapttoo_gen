import { useState } from "react";
import s from "../stores/styling"

export default function GenderSelect() {
    const [selectedGender, setSelectedGender] = useState<string>("");

    const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const gender = event.target.value;
        setSelectedGender(gender);
      };

  return (
    <s.LoginDiv className="radio-container">
              <s.LoginDiv className="radio-box">
                <s.Input
                  name="gender"
                  type="radio"
                  id="gender-male"
                  value="male"
                  checked={selectedGender === "male"}
                  onChange={handleGenderChange}
                  className="radio"
                  required
                />
                <s.Span className="checkmark"></s.Span>
                <s.Label htmlFor="gender-male">Male</s.Label>
              </s.LoginDiv>

              <s.LoginDiv className="radio-box">
                <s.Input
                  name="gender"
                  type="radio"
                  id="gender-female"
                  value="female"
                  checked={selectedGender === "female"}
                  onChange={handleGenderChange}
                  required
                />
                <s.Span className="checkmark"></s.Span>
                <s.Label htmlFor="gender-female">Female</s.Label>
              </s.LoginDiv>

              <s.LoginDiv className="radio-box">
                <s.Input
                  name="gender"
                  type="radio"
                  id="gender-other"
                  value="other"
                  checked={selectedGender === "other"}
                  onChange={handleGenderChange}
                  required
                />
                <s.Span className="checkmark"></s.Span>
                <s.Label htmlFor="gender-other">Other</s.Label>
              </s.LoginDiv>
            </s.LoginDiv>
  )
}
