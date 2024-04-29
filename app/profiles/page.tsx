// Example of dynamically importing a component with client-side rendering
import dynamic from 'next/dynamic';

const ClientSideComponent = dynamic(() => import('../components/ClientSideComponent'), {
  ssr: false  // This will disable server-side rendering for this component
});

function MyPage() {
  return (
    <div>
      <h1>This is a server-rendered heading</h1>
      <ClientSideComponent />  {/* This component will only be rendered client-side */}
    </div>
  );
}

export default MyPage;
