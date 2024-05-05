export default function SearchMobile() {
  return (
    <div>
      <div className="w-full h-[120px] grid items-center bg-gradient-to-r from-orange-400 to-orange-600">
        <input
          className="mx-[20px] h-[35px] pl-[10px] rounded-xl text-lg tracking-wide text-black"
          type="text"
          placeholder="Search Movie..."
        />
      </div>
    </div>
  );
}
