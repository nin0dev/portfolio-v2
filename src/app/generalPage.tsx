import { createClient } from '@/../lib/contento';
import { notFound } from 'next/navigation';

export default async function page() {
  const content = await createClient()
    .getContentBySlug('home', 'general_page')
    .catch(() => {
      notFound();
    });

  console.log(content);

  return (
    <main>
      <div>
        <h1>{content.fields.title.text}</h1>
      </div>
    </main>
  );
}
