import { Suspense } from "react";
import CardWrapper from "@/app/ui/dashboard/card";
import LatestInvoices from "@/app/ui/dashboard/latest-invoice";
import { inter } from "@/app/ui/fonts";
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from "@/app/ui/skeletons";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import Link from "next/link";

// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import { Card } from '@/app/ui/dashboard/cards';
// import { fetchCardData } from '@/app/lib/data';

export default async function Page() {
  // const fetchData = await Promise.all([
  //   fetchRevenue(),
  //   fetchLatestInvoices(),
  //   fetchCardData(),
  // ]); // In this section try to fetching data without paralel but with sequential

  // const revenue = await fetchRevenue();
  // const latestInvoices = await fetchLatestInvoices();
  // const {
  //   totalPaidInvoices,
  //   totalPendingInvoices,
  //   numberOfInvoices,
  //   numberOfCustomers,
  // } = await fetchCardData();
  const session = await getServerSession(authOptions);
  console.log(session?.user);
  return (
    <main>
      {session && session.user?.email ? (
        <>
          <p>
            <b>Signed in as {session.user?.email}</b>
          </p>
        </>
      ) : (
        <>
          <p>Belum login</p>
        </>
      )}
      <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid justify-center xl:grid-cols-4 grid-cols-1 gap-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense> */}
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}
