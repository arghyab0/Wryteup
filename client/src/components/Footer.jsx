const Footer = () => {
  return (
    <>
      <div className="w-screen pt-6 md:pt-14 pb-4 md:pb-10 bg-black">
        <div className="w-4/5 md:w-1/2 mx-auto text-white text-center">
          <div className="font-brand text-3xl md:text-5xl my-8">WRYTEUP</div>
          <div className="text-sm md:text-base font-ui py-2 md:py-4">
            A build by Arghya Biswas. I am a final year CS undergrad student and
            I enjoy building things that live on the internet. I aspire to be a
            front-end engineer who can design and build user-friendly products
            optimized for speed and scalability.
          </div>
          <div className="w-4/5 md:w-1/2 mx-auto my-4 md:my-8 flex justify-around text-sm md:text-base">
            <a
              className="border-b"
              href="https://arghyabiswas.me/"
              target="blank"
            >
              Website
            </a>
            <a
              className="border-b"
              href="https://twitter.com/arghyab0"
              target="blank"
            >
              Twitter
            </a>
            <a
              className="border-b"
              href="https://github.com/arghyab0/Wryteup"
              target="blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
