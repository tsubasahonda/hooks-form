import { useState } from 'react';

interface IInputs {
  [key: string]: string
}

const useSignUpForm = (callback?: () => void) => {
  const [inputs, setInputs] = useState<IInputs>({});

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
    if (callback) {
      callback();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    // https://scrapbox.io/onnanoko/React_Hooks%E3%81%A7%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E3%82%92%E4%BD%BF%E3%81%86
    setInputs(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};
export default useSignUpForm;
