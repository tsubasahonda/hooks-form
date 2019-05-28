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

const component: React.SFC<Props> = (props: Props) => {
  return (
    <ul className={props.className}>
      {
        props.items.map((e, i) => {
          return (
            <li key={e.to}>
              <Link to={e.to}>{e.display}</Link>
            </li>
          )
        })
      }
    </ul>
  );
};

export default component;
