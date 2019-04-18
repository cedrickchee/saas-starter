import Link from 'next/link';
import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignIn';

const Sell = () => (
  <div>
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  </div>
);

export default Sell;
