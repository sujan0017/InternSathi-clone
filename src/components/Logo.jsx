function Logo({ width = 170, height = 60 }) {
  return (
    <div>
      <img
        width={width}
        height={height}
        src="https://internsathi.com/_next/image?url=%2Fflaticon.png&w=256&q=75"
        alt="Internsathi logo"
      />
    </div>
  );
}

export default Logo;
