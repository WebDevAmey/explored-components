import { Badge } from "@/components/showcase/badge";

const rows = [
  { name: "Button", type: "Action", status: "live", date: "04.Aug.2026" },
  { name: "Toggle", type: "Input", status: "live", date: "04.Aug.2026" },
  { name: "Table", type: "Data", status: "draft", date: "03.Aug.2026" },
  { name: "Skeleton", type: "Feedback", status: "draft", date: "02.Aug.2026" },
];

export function TableShowcase() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-lg border border-olive-300 dark:border-olive-700 bg-white dark:bg-olive-900">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-olive-300 dark:border-olive-700">
            <th className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-wide text-olive-400 dark:text-olive-500">
              Component
            </th>
            <th className="hidden sm:table-cell px-4 py-2.5 font-mono text-[10px] uppercase tracking-wide text-olive-400 dark:text-olive-500">
              Type
            </th>
            <th className="px-4 py-2.5 font-mono text-[10px] uppercase tracking-wide text-olive-400 dark:text-olive-500">
              Status
            </th>
            <th className="px-4 py-2.5 text-right font-mono text-[10px] uppercase tracking-wide text-olive-400 dark:text-olive-500">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              className="border-b border-olive-200 last:border-b-0 dark:border-olive-800"
            >
              <td className="px-4 py-2.5 font-medium text-olive-800 dark:text-olive-100">
                {row.name}
              </td>
              <td className="hidden sm:table-cell px-4 py-2.5 text-olive-500 dark:text-olive-400">
                {row.type}
              </td>
              <td className="px-4 py-2.5">
                <Badge tone={row.status === "live" ? "success" : "warning"}>
                  {row.status}
                </Badge>
              </td>
              <td className="px-4 py-2.5 text-right font-mono text-[10px] uppercase text-olive-400 dark:text-olive-500">
                {row.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
