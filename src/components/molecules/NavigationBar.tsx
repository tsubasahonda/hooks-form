import * as React from 'react';
import { Link } from 'react-router-dom';

type OwnProps = {
  className?: string;
  items: {
    display: string;
    to: string;
  }[];
};

type Props = OwnProps;

const component: React.FC<Props> = (props: Props) => {
  const { className, items } = props;
  return (
    <ul className={className}>
      {
      items.map(e => (
        <li key={e.to}>
          <Link to={e.to}>{e.display}</Link>
        </li>
      ))
    }
    </ul>
  );
};

export default component;
