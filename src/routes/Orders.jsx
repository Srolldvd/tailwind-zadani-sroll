import Order from "../components/Order";

const Orders = () => {
    return (
        <div className="flex flex-col gap-8 col-span-2 lg:col-span-1">
            <Order />
            <Order />
            <Order />
        </div>
    )
}

export default Orders;