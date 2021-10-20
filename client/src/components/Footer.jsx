const Footer = () => {
  return (
    <>
      <div className="w-screen pt-14 pb-10 bg-black">
        <div className="w-1/2 mx-auto text-white text-center">
          <div className="font-heading text-5xl my-8">WRYTEUP</div>
          <div className="font-ui py-4">A build by Arghya Biswas.</div>
          <div className="w-1/2 mx-auto my-8 flex justify-around">
            <a href="https://arghyabiswas.me/" target="blank">
              Website
            </a>
            <a href="https://twitter.com/arghyab0" target="blank">
              Twitter
            </a>
            <a href="https://github.com/arghyab0/Wryteup" target="blank">
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
