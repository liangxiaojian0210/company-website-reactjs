function About() {
  const aboutText = `景译供应链有限公司是一家专业的供应链服务企业，专注于农副产品和玻璃制品的供应链整合与运营服务。
我们致力于为客户提供高效、可靠的供应链服务，帮助他们实现业务增长和成本优化。
我们的团队由经验丰富的供应链专家组成，拥有广泛的行业知识和专业技能。
我们与国内外众多合作伙伴建立了长期稳定的合作关系，确保供应链的稳定性和可持续性。
我们秉承诚信、创新、合作、共赢的核心价值观，为客户提供优质的服务。`;

  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={`${process.env.PUBLIC_URL}/img/img1.png`} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">关于我们</h2>
            <p className="main-p" style={{whiteSpace: 'pre-line'}}>
              {aboutText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;