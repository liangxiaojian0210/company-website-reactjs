import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">景译供应链有限公司</h1>
                <p className="footer-text">
                景译供应链有限公司是一家专业的供应链服务企业，专注于农副产品和玻璃制品的供应链整合与运营服务。
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">导航</p>
                <ul>
                  <li>
                  <Link   
                         spy={true}
                         smooth={true}
                         duration={1000}
                         to="headerbg"
                  > 首页 </Link>
                  </li>
                  <li>
                  <Link to="services" spy={true} smooth={true} duration={1000} > 业务板块 </Link>
                  </li>
                  <li>
                  <Link to="about-scroll" spy={true} smooth={true} duration={1000}>关于我们  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> 联系方式  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">联系我们</p>
                <ul>
                  <li>
                    <Link to="#" >darren.hu@jingyigyl.com.cn</Link>
                  </li>
                  <li>
                    <Link to="#" >总经理: Darren Hu</Link>
                  </li>
                  <li>
                    <Link to="#" >+8618259288682</Link>
                  </li>
                </ul>
              </div>
              {/* <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/darkleas" > Github</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/burhankocadag0" > Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/"> Linkedin</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
