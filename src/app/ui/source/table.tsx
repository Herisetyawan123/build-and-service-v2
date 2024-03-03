import Image from "next/image";
import { UpdateSource, DeleteSource } from "@/app/ui/source/buttons";
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function SourceTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  //   const sources = await fetchFilteredSource(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {/* <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      />
                      <p>{invoice.name}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateSource id={invoice.id} />
                    <DeleteSource id={invoice.id} />
                  </div>
                </div>
              </div> */}
            {/* {sources?.map((source) => (
            ))} */}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Project Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Category
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  File
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr
                //   key={source.id}
                className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
              >
                <td className="whitespace-nowrap px-3 py-3">
                  Laravel Ecom
                  {/* {source.email} */}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  Laravel
                  {/* {formatCurrency(source.amount)} */}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  Rp. 900.000
                  {/* {formatDateToLocal(source.date)} */}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                  09/01/2024
                  {/* {formatDateToLocal(source.date)} */}
                </td>
                <td className="whitespace-nowrap py-3 pl-6 pr-3">
                  <div className="flex justify-end gap-3">
                    {/* <UpdateSource id={source.id} />
                      <DeleteSource id={source.id} /> */}
                  </div>
                </td>
              </tr>
              {/* {invoices?.map((invoice) => (
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
