export default function Sidebar() {
  return (
    <div className="w-full bg-slate-200 min-h-screen p-5 sticky top-0 border-r border-slate-300 shadow-xl">
      <div className="flex flex-col gap-10">
        {/* {header} */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="size-16 bg-slate-400 rounded-full"></div>
            <p className="text-xl font-semibold">LOGO</p>
          </div>
          <p>Btn</p>
        </div>
        {/* {lists} */}
        <ul className="flex flex-col gap-3">
          <li className="p-3 bg-white flex gap-3 items-center rounded-xl shadow-md">
            <p className="size-6 flex justify-center items-center text-2xl bg-blue-200 rounded-md">
              +
            </p>
            <p>AI Chat</p>
          </li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
          <li>123</li>
        </ul>
      </div>
    </div>
  );
}
