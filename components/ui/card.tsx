export default function Card() {
  return (
    <div className="w-[400px] h-[350px] flex flex-col border border-neutral-200 rounded-md px-10 py-5 ">
      <h3 className="text-2xl">Title</h3>
      <div className="h-[2px] w-full bg-neutral-100"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quas sed in
        nemo, quod, magnam magni eius temporibus eos, voluptas voluptates? At
        provident consequatur distinctio dolorum eveniet unde? Saepe, ab.
      </p>
      <div className="justify-self-end">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
}
