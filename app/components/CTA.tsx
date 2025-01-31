// TODO: make it into a grid and on top of the CTA put 2 items that are ads perhaps.

const CTA = () => {
  return (
    <section className="mt-8 bg-secondary hover:bg-primary rounded-lg">
      <div className="flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
        <h3 className="text-3xl font-semibold leadi text-center lg:text-left text-white">
          The TokenStork Flipstarter is now available!
        </h3>
        <button className="!text-primary px-8 py-3 text-lg font-semibold rounded bg-white">
          <a
            className="no-underline !text-primary"
            href="https://flipstarter.tokenstork.com/en"
            target="_blank"
          >
            Pledge now
          </a>
        </button>
      </div>
    </section>
  );
};

export default CTA;
