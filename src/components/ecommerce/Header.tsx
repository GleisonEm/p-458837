import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex h-16 justify-between items-center border bg-[#060606] backdrop-blur-[[32px]] px-6 py-4 border-black">
      <div className="flex w-60 items-center gap-2">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/73f23f8301e74656de33a74740de2c4f3b23364a" alt="Logo" className="w-[56.914px] h-[40px]" />
      </div>
      <div>
        <button aria-label="Shopping bag">
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg id=&quot;132:1333&quot; layer-name=&quot;Interface, Essential/Bag,Circle,Essential,Interface,Shopping,Ui&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;w-[24px] h-[24px]&quot;> <path fill-rule=&quot;evenodd&quot; clip-rule=&quot;evenodd&quot; d=&quot;M17.9998 21H5.99976C4.27776 21 2.90876 19.553 3.00476 17.834L3.61876 6.778C3.73676 4.658 5.48976 3 7.61276 3H16.3878C18.5108 3 20.2638 4.658 20.3818 6.778L20.9958 17.833C21.0908 19.553 19.7218 21 17.9998 21Z&quot; stroke=&quot;white&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> <path d=&quot;M16 7.75C16 9.959 14.209 11.75 12 11.75C9.791 11.75 8 9.959 8 7.75&quot; stroke=&quot;white&quot; stroke-width=&quot;1.5&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
