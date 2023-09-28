import Image from "next/image";

export default function TechList({ className, props }) {
  const data = props.block_data.data;

  const techIcons = Object.entries(data)
    .filter(([key]) => key.match(/^tech_list_\d+_tech_name$/))
    .map(([, value]) => value);

  return (
    <>
      <section
        className={`${className} w-full flex flex-col mx-auto max-w-7xl p-6 md:flex-row justify-center md:my-20`}
      >
        <div className="justify-center items-center text-3xl flex w-full text-center md:text-left md:w-80 mr-5 md:border-r">
          <p className="w-full">{data.list_heading}</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-5 px-10 md:px-2 mt-10 md:mt-0 w-full md:pr-8">
          {techIcons.map((icon, i) => {
            return (
              <>
                <div
                  key={i}
                  className="mx-auto shadow-lg shadow-slate-200 w-[4.5rem] h-[4.5rem] border border-slate-200   rounded-full flex justify-center bg-white"
                >
                  <Image
                    src={`/assets/${icon.toLowerCase()}-icon.svg`}
                    width={100}
                    height={100}
                    alt={`${icon} icon`}
                    className="w-10 cursor-pointer"
                    title={`${icon} icon`}
                  />
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}
