import { useLoaderData } from "react-router-dom";
import { LiaStarSolid } from "react-icons/lia";
const AllArtAndCraft = () => {
  const craftData = useLoaderData();

  return (
    <>
      <div className="container bg-slate-400 p-2 mx-auto sm:p-4 text-gray-100 dark:text-gray-800">
        <h2 className="mb-4  hot text-2xl font-semibold leading-tight">
          Arts and Crafts Table
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-700  dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Item Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">customization</th>
                <th className="p-3">processing</th>
                <th className="p-3">rating</th>
                <th className="p-3 text-right">price</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            {craftData.map((c) => (
              <>
                <tbody>
                  <tr className="border-b border-opacity-20 border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50">
                    <td className="p-3">
                      <p>{c.itemName}</p>
                    </td>
                    <td className="p-3">
                      <p>{c.subCategoryName}</p>
                    </td>
                    <td className="p-3">
                      <p>Available</p>
                      <p className="text-gray-400 dark:text-gray-600">
                        {c.customization}
                      </p>
                    </td>
                    <td className="p-3">
                      <p>Time</p>
                      <p className="text-gray-400 dark:text-gray-600">
                        {c.processingTime}
                      </p>
                    </td>
                    <td className="p-3">
                      <p>{c.rating}</p>
                      <p className="text-gray-400 dark:text-gray-600">
                        <LiaStarSolid />
                      </p>
                    </td>
                    <td className="p-3 text-right">
                      <p>$ {c.price}</p>
                    </td>
                    <td className="p-3 text-right">
                      <button className="px-3 py-1 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
                        <span>view Details</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default AllArtAndCraft;
