import LogoWhite from "../assets/img/head/logo-white.svg"
const Footer = () => {
  return(
    <footer className='py-10 bg-black text-white '>
    <div className='container mx-auto flex flex-wrap items-center justify-between '>
      <a href="/">
      <img src={LogoWhite} alt="logo" />
      </a>
      <p>&copy; Copyright 2023. All rights reserved</p>
    </div>
  </footer>
  );
};

export default Footer;
