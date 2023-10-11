"use client";

export default function GetInTouch({ classList, text }) {
  const openModal = (e) => {
    e.preventDefault();
    document.getElementById("contact-form").classList.remove("invisible");
    document.querySelector("[data-modal]").showModal();
  };
  return (
    <a className={classList} onClick={(e) => openModal(e)}>
      <div className="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full x-0 duration-200"></div>
      <h4 className="relative">{text}</h4>
    </a>
  );
}
