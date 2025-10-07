import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">业务板块</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card 
                          title="农产品原料" 
                          img="service_nongfu.png" 
                          text=""
                          productId="agricultural-products" // 添加产品ID
                        />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card 
                          title="玻璃瓶" 
                          img="service_boliping.png" 
                          text=""
                          productId="glass-bottles" // 添加产品ID
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;