export default function TronDivider() {
  return (
    <div className="w-full my-10">
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={i}
          className="tron-line"
          style={{
            marginTop: i === 0 ? 0 : `${i + 2}px`,
            opacity: 1 - i * 0.1,
          }}
        />
      ))}
    </div>
  );
}
