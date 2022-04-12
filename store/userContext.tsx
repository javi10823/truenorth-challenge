import React from 'react';

interface Props {
  userContext: {
    name: string;
    pass: string;
  };
  setUserContext: React.Dispatch<
    React.SetStateAction<{name: string; pass: string}>
  >;
}
export const UserContext = React.createContext<Props>({
  userContext: {name: '', pass: ''},
  setUserContext: () => null,
});
