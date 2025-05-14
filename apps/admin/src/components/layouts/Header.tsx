import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Header = () => {
  return (
    <header className="w-full h-[88px] flex items-center px-[60px] bg-white border-b border-gray-[#E0E0E0] justify-between">
      <div>logo</div>
      <div className="flex items-center gap-2">
        <Avatar className="flex items-center justify-center w-[40px] h-[40px]">
          <AvatarImage
            className="object-cover"
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            alt="Colm Tuite"
          />
          <AvatarFallback className="size-10">L</AvatarFallback>
        </Avatar>
        <div className="text-[16px] font-medium leading-[24px] text-[rgba(0,0,0,0.35)]">
          나루미
        </div>
      </div>
    </header>
  );
};

export default Header;
