import type {ReactNode} from 'react';
import React, {createContext, useContext, useState} from 'react';
import type {
  AutoCompleteContextProps,
  AutoCompleteOption,
} from '../types/autocomplete';

const AutoCompleteContext = createContext<AutoCompleteContextProps | undefined>(
  undefined,
);

export const AutoCompleteProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<AutoCompleteOption | null>(
    null,
  );

  return (
    <AutoCompleteContext.Provider value={{selectedValue, setSelectedValue}}>
      {children}
    </AutoCompleteContext.Provider>
  );
};

export const useAutoCompleteContext = () => {
  const context = useContext(AutoCompleteContext);
  if (!context) {
    throw new Error(
      'useAutoCompleteContext must be used within an AutoCompleteProvider',
    );
  }
  return context;
};
