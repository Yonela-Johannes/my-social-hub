import './About/about.css'
export default function PText({ children }) {
  return (
    <div className="para">
      <p>{children}</p>
    </div>
  );
}
