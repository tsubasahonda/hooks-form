import * as React from 'react';
import { useState, useCallback } from 'react';

type InputType = {
  [key: string]: 'text' | 'email' | 'password'
}

type State = {
  first_name: string
  last_name: string
  email: string
  password1: string
  password2: string
};
type Props = {
  className?: string
  inputType?: InputType
  handleSubmit?: (evnet: React.FormEvent<HTMLFormElement>) => void
  onChangeInputText: (event: React.ChangeEvent<HTMLInputElement>) => void
} & State;

const Component: React.FC<Props> = (props: Props) => (
  <form className={props.className} onSubmit={props.handleSubmit}>
    {(['first_name', 'last_name', 'email', 'password1', 'password2'] as const).map((state) => {
      const name = state;
      return (
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
      );
    })}
    <button type="submit">Sign Up</button>
  </form>
);

const Container: React.FC = () => {
  const inputType = {
    first_name: 'text',
    last_name: 'text',
    email: 'email',
    password1: 'password',
    password2: 'password',
  } as InputType;

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
  return <Component {...state} inputType={inputType} onChangeInputText={onChangeInputText} />;
};

export default Container;
