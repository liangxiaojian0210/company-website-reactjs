import { useNavigate } from 'react-router-dom';

function Card(props) {
  const navigate = useNavigate();
  
  const handleCardClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (props.productId) {
      navigate(`/product/${props.productId}`);
    }
  };

  return (
    <div className="card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <br />
      <div className="text-center">
        <img 
          alt="card-img" 
          src={`${process.env.PUBLIC_URL}/img/${props.img}`} 
          className="text-center img-fluid card-image" 
          style={{ width: '500px', height: '200px', objectFit: 'contain' }}
        />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text" style={{ whiteSpace: 'pre-line' }}>
          {props.text}
        </p>
      </div>
      {props.productId && (
        <div className="text-center p-3">
          <span className="view-details">点击查看详情 →</span>
        </div>
      )}
    </div>
  );
}
export default Card;