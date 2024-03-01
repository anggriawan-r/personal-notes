import SearchBar from './SearchBar';

function Header({ onSearch }) {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between w-full h-16 gap-6 px-4 bg-slate-800">
      <div className="text-3xl font-normal leading-none text-slate-300">
        Notes
      </div>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Header;
