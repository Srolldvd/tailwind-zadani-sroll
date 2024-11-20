import Order from "../components/Order";

const Orders = () => {
  return (
    <div className="col-span-2 flex flex-col gap-8 lg:col-span-1">
      <Order />
      <Order />
      <Order />
    </div>
  );
};

export default Orders;
