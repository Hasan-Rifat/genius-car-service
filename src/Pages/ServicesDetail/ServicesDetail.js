import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../../Hooks/useServiceDetail";

const ServicesDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div>
      <h2>Your are about to book : {service.name}</h2>
      <div className="text-center">
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesDetail;
