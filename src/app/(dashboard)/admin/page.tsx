import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-5 ">
        {/* user cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students" />
          <UserCard type="teachers" />
          <UserCard type="parents" />
          <UserCard type="staff" />
        </div>
        {/* middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[450pxx]">
            <CountChart/>
          </div>
          {/* attendance chart */}
          <div className="w-full lg:w-2/3 h-[450pxx]">
            <AttendanceChart/>
          </div>
        </div>
        {/* bottom chart */}

      </div>
      {/* right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
