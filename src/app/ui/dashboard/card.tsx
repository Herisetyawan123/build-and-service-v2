import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
//   import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon
};

export default async function CardWrapper() {
  // const {
  //   numberOfInvoices,
  //   numberOfCustomers,
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  // } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}

      <Card title="Collected" value={10} type="collected" />
      <Card title="Pending" value={20} type="pending" />
      <Card title="Total Invoices" value={25} type="invoices" />
      <Card title="Total Customers" value={30} type="customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-emerald-500 transition p-2 shadow-lg hover:bg-green-200">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
