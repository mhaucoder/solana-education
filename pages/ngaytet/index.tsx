import dynamic from 'next/dynamic';
const DateTet = dynamic(() => import('../../containers/DataTet'));
import SEO from '../../components/SEO';
export default function getPromt() {
  return (
    <div>
      <SEO />
      <DateTet />
    </div>
  );
}
