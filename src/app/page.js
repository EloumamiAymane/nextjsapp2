import dynamic from 'next/dynamic'

const Bootstrap = dynamic(() => import('../../components/index'), {
  ssr: false
})
export default function Home() {
  return (
  <>
    <div>

      <Bootstrap/>
    </div>
  </>
  );
}
