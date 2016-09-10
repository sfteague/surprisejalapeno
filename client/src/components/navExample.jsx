//react navbar example, styled with bootstrap

var Nav = () => (
  <nav className='container navbar navbar-inverse navbar-fixed-top'>
    <a href='/' className='navbar-brand'><p>Our News App Title Here</p></a>
    <ul className='nav navbar-nav navbar-right'>
      <li><a href='#'>Navigation Link Here</a></li>
    </ul>
  </nav>  
);

export default Nav;