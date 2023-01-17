const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
];

export default function StatTable() {
  return (
    <div class="flex flex-col w-3/4">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r-4 border-slate-800"
                  >
                    WK
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r-4 border-slate-800"
                  >
                    OPP
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r-4 border-slate-800"
                  >
                    PROJ
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r-4 border-slate-800"
                  >
                    FPTS
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r-4 border-slate-800"
                  >
                    PASS YDS
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r-4 border-slate-800"
                  >
                    PASS TD
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r-4 border-slate-800"
                  >
                    INT
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r-4 border-slate-800"
                  >
                    RUSH YDS
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4 border-r-4 border-slate-800"
                  >
                    RUSH TD
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class>
                  <td class="px-6 py-4 bg-slate-700 whitespace-nowrap text-sm font-medium border-r-4-4 border-slate-800 text-white">
                    1
                  </td>
                  <td class="text-sm bg-slate-700 text-white font-light px-6 py-4 whitespace-nowrap border-r-4-4 border-slate-800">
                    PIT
                  </td>
                  <td class="text-sm bg-slate-700 text-white font-light px-6 py-4 whitespace-nowrap border-r-4-4 border-slate-800">
                    21.40
                  </td>
                  <td class="text-sm bg-slate-600 text-white font-light border-r-4 border-slate-800 px-6 py-4 whitespace-nowrap">
                    19.72
                  </td>
                  {/* Pass Yds */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    338
                  </td>
                  {/* Pass TD */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    2
                  </td>
                  {/* INT */}
                  <td class="text-sm bg-pink-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    4
                  </td>
                  {/* RUSH YDS */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    47
                  </td>
                  {/* RUSH TDS */}
                  <td class="text-sm bg-slate-700 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    -
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm bg-slate-700 font-medium text-white border-slate-800">
                    2
                  </td>
                  <td class="text-sm text-white font-light bg-slate-700 px-6 py-4 whitespace-nowrap border-slate-800">
                    @DAL
                  </td>
                  <td class="text-sm text-white bg-slate-700 font-light px-6 py-4 whitespace-nowrap border-slate-800">
                    25.10
                  </td>
                  <td class="text-sm text-white bg-slate-600 font-light border-r-4 border-slate-800 px-6 py-4 whitespace-nowrap">
                    17.06
                  </td>
                  {/* Pass Yds */}
                  <td class="text-sm bg-pink-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    199
                  </td>
                  {/* Pass TD */}
                  <td class="text-sm bg-yellow-600 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    1
                  </td>
                  {/* INT */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    0
                  </td>
                  {/* RUSH YDS */}
                  <td class="text-sm bg-yellow-600 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    26
                  </td>
                  {/* RUSH TDS */}
                  <td class="text-sm bg-slate-700 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    -
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm bg-slate-700 font-medium text-white border-r-4-4 border-slate-800">
                    3
                  </td>
                  <td class="text-sm text-white font-light bg-slate-700 px-6 py-4 whitespace-nowrap text-center border-r-4-4 border-slate-800">
                    @NYJ
                  </td>
                  <td class="text-sm text-white font-light bg-slate-700 px-6 py-4 whitespace-nowrap">
                    19.75
                  </td>
                  <td class="text-sm text-white bg-slate-600 font-light border-r-4 border-slate-800 px-6 py-4 whitespace-nowrap">
                    23.5
                  </td>
                  {/* Pass Yds */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    275
                  </td>
                  {/* Pass TD */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    3
                  </td>
                  {/* INT */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    0
                  </td>
                  {/* RUSH YDS */}
                  <td class="text-sm bg-pink-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    0
                  </td>
                  {/* RUSH TDS */}
                  <td class="text-sm bg-slate-700 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    -
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm bg-slate-700 font-medium text-white border-r-4-4 border-slate-800">
                    4
                  </td>
                  <td class="text-sm text-white font-light bg-slate-700 px-6 py-4 whitespace-nowrap text-center border-r-4-4 border-slate-800">
                    MIA
                  </td>
                  <td class="text-sm text-white font-light bg-slate-700 px-6 py-4 whitespace-nowrap">
                    20.00
                  </td>
                  <td class="text-sm text-white bg-slate-600 font-light border-r-4 border-slate-800 px-6 py-4 whitespace-nowrap">
                    20.08
                  </td>
                  {/* Pass Yds */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    287
                  </td>
                  {/* Pass TD */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    2
                  </td>
                  {/* INT */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    0
                  </td>
                  {/* RUSH YDS */}
                  <td class="text-sm bg-pink-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    6
                  </td>
                  {/* RUSH TDS */}
                  <td class="text-sm bg-slate-700 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    -
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm bg-slate-700 font-medium text-white border-r-4-4 border-slate-800">
                    5
                  </td>
                  <td class="text-sm text-white font-light bg-slate-700 px-6 py-4 whitespace-nowrap text-center border-r-4-4 border-slate-800">
                    @BAL
                  </td>
                  <td class="text-sm text-white font-light bg-slate-700 px-6 py-4 whitespace-nowrap">
                    25.33
                  </td>
                  <td class="text-sm text-white bg-slate-600 font-light border-r-4 border-slate-800 px-6 py-4 whitespace-nowrap">
                    17.78
                  </td>
                  {/* Pass Yds */}
                  <td class="text-sm bg-yellow-600 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    217
                  </td>
                  {/* Pass TD */}
                  <td class="text-sm bg-yellow-600 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    1
                  </td>
                  {/* INT */}
                  <td class="text-sm bg-yellow-600 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    1
                  </td>
                  {/* RUSH YDS */}
                  <td class="text-sm bg-pink-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    6
                  </td>
                  {/* RUSH TDS */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    1
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-nowrap bg-slate-700 text-sm font-medium text-white border-r-4-4 border-slate-800">
                    6
                  </td>
                  <td class="text-sm text-white bg-slate-700 font-light px-6 py-4 whitespace-nowrap text-center border-r-4-4 border-slate-800">
                    @NO
                  </td>
                  <td class="text-sm text-white bg-slate-700 font-light px-6 py-4 whitespace-nowrap">
                    21.10
                  </td>
                  <td class="text-sm text-white bg-slate-600 font-light border-r-4 border-slate-800 px-6 py-4 whitespace-nowrap">
                    33.00
                  </td>
                  {/* Pass Yds */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    300
                  </td>
                  {/* Pass TD */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    3
                  </td>
                  {/* INT */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    0
                  </td>
                  {/* RUSH YDS */}
                  <td class="text-sm bg-yellow-600 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    25
                  </td>
                  {/* RUSH TDS */}
                  <td class="text-sm bg-green-900 text-white font-light px-6 py-4 whitespace-nowrap border-r-4 border-b-4 border-slate-800">
                    1
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
