function Logo({ width = 170, height = 60, img=`https://internsathi.com/_next/image?url=%2Fflaticon.png&w=256&q=75` }) {
  return (
    <div>
      <img
        width={width}
        height={height}
        src={img}
        alt="Internsathi logo"
      />
    </div>
  );
}

export default Logo;
