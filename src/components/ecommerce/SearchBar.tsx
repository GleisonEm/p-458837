import React from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Buscar item",
  onSearch,
}) => {
  const [query, setQuery] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex h-12 items-center bg-white rounded">
        <div className="flex items-center gap-4 w-full px-4 py-3">
          <div className="flex items-center gap-2 flex-1">
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg id=&quot;132:1211&quot; layer-name=&quot;Search&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[24px] h-[24px]&quot;> <path d=&quot;M19.9987 20.0002L16.375 16.3765&quot; stroke=&quot;#86858F&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M4 11.25C4 15.2541 7.24594 18.5 11.25 18.5C15.2541 18.5 18.5 15.2541 18.5 11.25C18.5 7.24594 15.2541 4 11.25 4V4C7.24606 4.00029 4.00029 7.24606 4 11.25&quot; stroke=&quot;#86858F&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
                }}
              />
            </div>
            <input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={handleChange}
              className="text-[#86858F] text-sm leading-6 bg-transparent outline-none w-full"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
