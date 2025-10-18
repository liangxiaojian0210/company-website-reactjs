import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

// 产品数据配置 - 按类型分组
const productData = {
  'agricultural-products': {
    categoryTitle: '农产品原料',
    categoryDescription: '我们提供优质的农产品原料，包括新鲜蔬菜、水果、谷物等。所有原料都经过严格的质量检测，确保食品安全和营养价值。',
    products: [
      {
        id: 'fresh-vegetables',
        title: '新鲜蔬菜',
        img: 'service_nongfu.png',
        description: '当季新鲜蔬菜，从农场直供，保证新鲜度和营养价值。',
        features: [
          '当日采摘，新鲜度100%保证',
          '无农药残留，安全健康',
          '品种丰富，满足不同需求',
          '冷链运输，保持新鲜'
        ],
        specifications: {
          '主要品种': '白菜、萝卜、土豆、西红柿',
          '包装规格': '5kg/10kg装',
          '保质期': '冷藏7-10天',
          '产地': '山东寿光、河北张家口'
        }
      },
      {
        id: 'fresh-fruits',
        title: '新鲜水果',
        img: 'service_nongfu.png',
        description: '优质水果，甜度高，口感佳，富含维生素和矿物质。',
        features: [
          '自然成熟，口感香甜',
          '富含维生素C和膳食纤维',
          '严格筛选，品质保证',
          '多种包装规格可选'
        ],
        specifications: {
          '主要品种': '苹果、梨、橙子、葡萄',
          '包装规格': '3kg/5kg/10kg装',
          '保质期': '冷藏5-7天',
          '产地': '新疆、山东、河北'
        }
      },
      {
        id: 'grains-cereals',
        title: '谷物杂粮',
        img: 'service_nongfu.png',
        description: '优质谷物杂粮，营养丰富，适合各种烹饪方式。',
        features: [
          '营养丰富，健康首选',
          '多种谷物混合搭配',
          '真空包装，保持新鲜',
          '适合家庭和餐饮使用'
        ],
        specifications: {
          '主要品种': '大米、小米、红豆、绿豆',
          '包装规格': '1kg/5kg/25kg装',
          '保质期': '常温12个月',
          '产地': '东北、华北优质产区'
        }
      }
    ]
  },
  'glass-bottles': {
    categoryTitle: '玻璃瓶容器',
    categoryDescription: '专业生产各类玻璃瓶容器，适用于食品、饮料、化妆品等行业。采用优质玻璃材料，工艺精湛，密封性能优良。',
    products: [
      {
        id: 'food-bottles',
        title: '食品级玻璃瓶',
        img: 'service_boliping.png',
        description: '食品级玻璃瓶，安全无毒，适用于各种食品包装。',
        features: [
          '食品级玻璃材质，安全可靠',
          '密封性能优良，保鲜效果好',
          '多种容量规格可选',
          '符合食品安全标准'
        ],
        specifications: {
          '容量范围': '100ml - 1000ml',
          '瓶口规格': '标准28mm/38mm',
          '材质': '食品级钠钙玻璃',
          '包装方式': '纸箱包装，防震防碎'
        }
      },
      {
        id: 'beverage-bottles',
        title: '饮料瓶',
        img: 'service_boliping.png',
        description: '专业饮料瓶，适用于各种饮料包装，密封性能卓越。',
        features: [
          '高温烧制，密封性能卓越',
          '透明度高，展示效果好',
          '抗压能力强，运输安全',
          '可定制印刷和形状'
        ],
        specifications: {
          '容量范围': '250ml - 2000ml',
          '瓶口规格': '标准28mm/38mm/58mm',
          '材质': '高硼硅玻璃',
          '包装方式': '纸箱包装，防震防碎'
        }
      },
      {
        id: 'cosmetic-bottles',
        title: '化妆品瓶',
        img: 'service_boliping.png',
        description: '精美化妆品瓶，适用于各种化妆品包装，外观精美。',
        features: [
          '外观精美，提升产品档次',
          '多种颜色和形状可选',
          '密封性能好，保护内容物',
          '支持定制设计和印刷'
        ],
        specifications: {
          '容量范围': '30ml - 500ml',
          '瓶口规格': '标准15mm/20mm/28mm',
          '材质': '高透明度玻璃',
          '包装方式': '独立包装，防刮花'
        }
      }
    ]
  }
};

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const categoryData = productData[productId];
  
  if (!categoryData) {
    return (
      <div className="container">
        <div className="product-not-found">
          <h2>产品类型未找到</h2>
          <button className="btn" onClick={() => navigate('/')}>
            返回首页
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container product-detail">
      <div className="product-header">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← 返回产品列表
        </button>
        <h1 className="product-title">{categoryData.categoryTitle}</h1>
      </div>
      
      {/* 产品类型介绍 */}
      <div className="category-intro">
        <p className="category-description">{categoryData.categoryDescription}</p>
      </div>
      
      <div className="product-list-container">
        {categoryData.products.map((product) => (
          <div key={product.id} className="product-list-item">
            <div className="list-item-header">
              <img 
                src={`${process.env.PUBLIC_URL}/img/${product.img}`}
                alt={product.title}
                className="list-item-image"
              />
              <div className="list-item-title">
                <h2>{product.title}</h2>
              </div>
            </div>
            
            <div className="list-item-content">
              <div className="list-section">
                <h3 className="list-section-title">产品介绍</h3>
                <p className="list-section-text">{product.description}</p>
              </div>
              
              <div className="list-section">
                <h3 className="list-section-title">产品特点</h3>
                <ul className="list-features">
                  {product.features.map((feature, index) => (
                    <li key={index} className="list-feature-item">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="list-section">
                <h3 className="list-section-title">产品规格</h3>
                <div className="list-specifications">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="list-spec-item">
                      <span className="list-spec-label">{key}:</span>
                      <span className="list-spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="list-section">
                <h3 className="list-section-title">操作</h3>
                <div className="list-actions">
                  <button className="btn contact-btn">
                    联系我们
                  </button>
                  <button className="btn quote-btn">
                    获取报价
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
