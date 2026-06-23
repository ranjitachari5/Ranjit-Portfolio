  const Wave = ({ children }) => (
    <div className="w-full overflow-hidden leading-none absolute bottom-0 left-0">
      <svg
        viewBox="0 0 1200 150"
        preserveAspectRatio="none"
        className="relative block w-full h-24 md:h-36 fill-[#e2e4dc]"
      >
        <path d="M0,20C240,20,480,100,720,100C960,100,1200,20,1440,20L1440,150L0,150Z"></path>
        {children && (
          <foreignObject x="0" y="30" width="1200" height="90">
            <div xmlns="http://www.w3.org/1999/xhtml" className="w-full h-full flex items-center justify-center">
              {children}
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );

  export default Wave;
