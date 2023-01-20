import { Card } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  price: number;
  name: string;
  imgUrl: string;
};

const StoreItem = ({ id, price, name, imgUrl }: StoreItemProps) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
    </Card>
  );
};

export default StoreItem;
