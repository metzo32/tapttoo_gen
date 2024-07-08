import s from "../stores/styling";

export default function DarkModeButton() {
  return (
    <>
      <s.Label className="switch">
        <s.Input type="checkbox"  className="dark-mode"/>
        <s.Span className="slider" />
      </s.Label>
    </>
  );
}
