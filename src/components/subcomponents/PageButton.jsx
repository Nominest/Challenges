import "../../style/pagebutton.css";
export default function PageButton({ btnName, btnClass }) {
  return <button className={btnClass}>{btnName}</button>;
}
