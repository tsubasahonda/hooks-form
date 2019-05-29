import * as React from 'react';
import { useState, useCallback } from 'react';

type State = {
  first_name: string
  last_name: string
  email: string
  password1: string
  password2: string
};
type Props = {
  className?: string
  handleSubmit?: (evnet: React.FormEvent<HTMLFormElement>) => void
  onChangeInputText: (event: React.ChangeEvent<HTMLInputElement>) => void
} & State;

const Input: React.FC<Props> = (props: Props) => (
  <label htmlFor={props[name]}>
    <input
      name={name}
      type="text"
      value={props[name]}
      onChange={props.onChangeInputText}
    />
  </label>
);

const Component: React.FC<Props> = (props: Props) => (
  <form className={props.className} onSubmit={props.handleSubmit}>
    {(['first_name', 'last_name', 'email', 'password1', 'password2'] as const).map(name => (
      <div key={name}>
        <label htmlFor={props[name]}>
          {name}
          <input
            name={name}
            type="text"
            value={props[name]}
            onChange={props.onChangeInputText}
          />
        </label>
      </div>
    ))}
    <button type="submit">Sign Up</button>
  </form>
);

const Container: React.FC = () => {
  const [state, update] = useState<State>({
    first_name: '',
    last_name: '',
    email: '',
    password1: '',
    password2: '',
  });
  const onChangeInputText = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist();
      update(prev => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    },
    [],
  );
  return <Component {...state} onChangeInputText={onChangeInputText} />;
};

export default Container;
