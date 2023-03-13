import "./App.css";

function App() {
  return (
    <div className="bg-[#f7f7f7] w-[100%]">
      <div className="flex flex-col justify-center items-center py-8">
        <img src="orderlogo.png" alt="order" />
        <p className="font-medium text-xl text-black leading-[27px] mt-8">
          Order Status
        </p>
      </div>
      <div className="w-[95%] mx-auto bg-white p-6 rounded-lg">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
          <select
            id="date"
            className="bg-[#ffff] border border-[#EDEDED]  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 text-[#7E7E7E] p-3 w-full"
          >
            <option selected >Sort by: Date / Time</option>
            <option value="23">23 March</option>
            <option value="1">1 April</option>
            <option value="20">20 January</option>
            <option value="30">30 December</option>
          </select>
          <select
            id="Second"
            className="bg-[#ffff] border border-[#EDEDED] text-[#7E7E7E] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 w-full"
          >
            <option selected>Auto Refresh: 60 Seconds</option>
            <option value="10">10 sec</option>
            <option value="9">9 sec</option>
            <option value="70">70 sec</option>
            <option value="60">60 sec</option>
          </select>
          <div className="flex  items-center gap-10 lg:gap-2">
          <button className="py-[14px] px-6 bg-[#264B5D] text-white rounded-lg text-sm leading-4 font-medium whitespace-nowrap">
            Apply Filter
          </button>
          <button className="py-[14px] px-6 bg-[#ffffff] border border-[#EDEDED] rounded-lg text-sm leading-4 font-medium ">
            {" "}
            Reset
          </button>
          </div>
        </div>
        <div className="rounded-lg overflow-x-auto">
          <table className=" w-full border border-[#EDEDED] mt-8 ">
            <thead>
              <tr>
                <th className="text-xs whitespace-nowrap   font-medium leading-4 text-black p-4 bg-[#F7F7F7]">
                  Order Number
                </th>
                <th className="text-xs whitespace-nowrap   font-medium leading-4 text-black p-4 bg-[#F7F7F7]">
                  Project Number
                </th>
                <th className="text-xs whitespace-nowrap   font-medium leading-4 text-black p-4 bg-[#F7F7F7]">
                  Project Name
                </th>
                <th className="text-xs whitespace-nowrap   font-medium leading-4 text-black p-4 bg-[#F7F7F7]">
                  Date Submitted
                </th>
                <th className="text-xs whitespace-nowrap   font-medium leading-4 text-black p-4 bg-[#F7F7F7]">
                  Submitted by
                </th>
                <th className="text-xs whitespace-nowrap   font-medium leading-4 text-black p-4 bg-[#F7F7F7]">
                  Due Date
                </th>
                <th className="text-xs whitespace-nowrap   font-medium leading-4 text-black p-4 bg-[#F7F7F7]">
                  % Complete
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center bg-[#FEECEE]">
                  221213210452458
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center bg-[#FEECEE]">
                  000010.0000.00
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center bg-[#FEECEE]">
                  General Overhead
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center bg-[#FEECEE]">
                  Feb 20th, 2023 at 09:00:00 PM
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center bg-[#FEECEE]">
                  Kenny McCoig
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center bg-[#FEECEE]">
                  Feb 24th, 2023 at 09:00:00 PM
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center bg-[#FEECEE]">
                  0.00%
                </td>
              </tr>
              <tr>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  221213210452458
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  {" "}
                  000010.0000.00
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  General Overhead
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Feb 20th, 2023 at 09:00:00 PM
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Kenny McCoig
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Feb 24th, 2023 at 09:00:00 PM
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  0.00%
                </td>
              </tr>
              <tr>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  221213210452458
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  000010.0000.00
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  General Overhead
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Feb 20th, 2023 at 09:00:00 PM
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Kenny McCoig
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Feb 24th, 2023 at 09:00:00 PM
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  0.00%
                </td>
              </tr>
              <tr>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  221213210452458
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  000010.0000.00
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  General Overhead
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Feb 20th, 2023 at 09:00:00 PM
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Kenny McCoig
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Feb 24th, 2023 at 09:00:00 PM
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  0.00%
                </td>
              </tr>
              <tr>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  221213210452458
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  000010.0000.00
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  General Overhead
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Feb 20th, 2023 at 09:00:00 PM
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Kenny McCoig
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  Feb 24th, 2023 at 09:00:00 PM
                </td>
                <td className="text-xs whitespace-nowrap   font-normal leading-4 text-black p-4 text-center">
                  0.00%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
