const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Wedding Party</a>
    <a className="link link-hover">Birthday Party</a>
    <a className="link link-hover">Anniversaries</a>
    <a className="link link-hover">Engagement parties</a>
    <a className="link link-hover">Retirement parties</a>
    <a className="link link-hover">Baby Shower</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Gallary</a>
    <a className="link link-hover">Login</a>
    <a className="link link-hover">Register</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;