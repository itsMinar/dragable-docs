const Background = () => {
  return (
    <>
      <div className="fixed z-[2] h-screen w-full">
        <div className="absolute top-[5%] flex w-full justify-center py-10 text-xl font-semibold text-zinc-600">
          Documents
        </div>
        <h1 className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold leading-none tracking-tighter text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
