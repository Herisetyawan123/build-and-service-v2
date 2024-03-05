import Form from '@/app/ui/source/create-form';
import Breadcrumbs from '@/app/ui/source/breadcrumbs';
// import { fetchCustomers } from '@/app/lib/data';

export default async function Page() {
  //   const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Source', href: '/dashboard/source' },
          {
            label: 'Create Invoice',
            href: '/dashboard/source/create',
            active: true
          }
        ]}
      />
      <Form />
    </main>
  );
}
