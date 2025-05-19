const Header = () => {
  return (
    <div className="flex items-center justify-between mt-[28px] mb-[16px]">
      <div className="flex items-center gap-[6px]">
        <div className="text-[18px] font-[600] leading-[28px] text-[rgba(0,0,0,0.7)]">
          전체
        </div>
        <div className="text-[14px] font-[500] leading-[24px] text-white px-3 py-[2px] rounded-[100px] bg-[#7D90F9]">
          24
        </div>
      </div>
    </div>
  );
};

export default Header;
