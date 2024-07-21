export default function Modal() {
  return (
    <div className="bg-[rgba(1,1,1,0.04)] w-full h-full z-50 fixed top-0 left-0 flex items-center justify-center">
      <div className="bg-background">
        <div className="h-[150px] w-[350px] flex">Confirm delete post.</div>
        <div>
          <button>Delete</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}
