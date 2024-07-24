import LogoutButton from "../components/Logout"
import s from "../stores/styling"
import { UserCredential } from "firebase/auth"

export default function Profile() {
  return (
    <s.ProfileDiv className="wrapper">
      <LogoutButton />
    </s.ProfileDiv>
  )
}
