import { createContext } from 'react';

export type ApplicationContextProps = {
  headerIsOpen: boolean;
  setHeaderIsOpen: (state: boolean, scrollToTop?: boolean) => void;
};

export const ApplicationContext = createContext<ApplicationContextProps>({
  headerIsOpen: false,
  setHeaderIsOpen: () => {},
});
