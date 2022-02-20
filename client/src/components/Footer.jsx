import logo from '../../images/ethereum.jpg';

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="Logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            <a
              href="https://yuriy-cryptoverse.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crypto
            </a>
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            <a
              href="https://ropsten.etherscan.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ropsten
            </a>
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            <a
              href="https://hackr.io/blog/top-cryptocurrency-blockchain-tutorials"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tutorials
            </a>
          </p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            <a
              href="https://metamask.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Metamask
            </a>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Contact me</p>
        <p className="text-white text-sm text-center">
          <a href="mailto:chamkoriyski@gmial.com">chamkoriyski@gmial.com</a>
        </p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3 pb-12">
        <p className="text-white text-sm text-center">
          <a href="https://github.com/Hombre2014">Hombre2014</a>
        </p>
        <p className="text-white text-sm text-center">
          All rights reserved <sup>&reg;</sup>
        </p>
      </div>
    </div>
  );
};

export default Footer;
