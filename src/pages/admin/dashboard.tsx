import CountCard from "../../components/admin/dashboard/count-card";

const Dashboard = () => {
  return (
    <main className="h-full w-full">
      <div className="grid grid-cols-4 gap-5">
        <CountCard label="Admin" count={100} />
        <CountCard label="Users" count={500} />
        <CountCard label="Categories" count={10} />
        <CountCard label="Brands" count={50} />
        <CountCard label="Products" count={100} />
        <CountCard label="Orders" count={90} />
      </div>
    </main>
  );
};

export default Dashboard;
