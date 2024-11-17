import Order from "../components/Order";

const Orders = () => {
    return (
        <div className="flex flex-col gap-8">
            <Order />
            <Order />
            <Order />
        </div>
    )
}

export default Orders;