export default function GetInTouch({ classList, text }) {
  <a className={classList}>
    <div className="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full x-0 duration-200"></div>
    <h4 className="relative">{text}</h4>
  </a>;
}
