import { useState, ReactNode, createContext } from "react";

export type HackyActionContextType = {
  hackyActionContext: IHackyAction;
  updateHackyActionContext: (hackyAction: IHackyAction) => void;
};

export interface IHackyAction {
  date: string;
  location: {
    lat: string;
    lon: string;
  };
}

interface Props {
  children: ReactNode;
}

const contextDefaultValues: IHackyAction = {
  date: "",
  location: {
    lat: "",
    lon: "",
  },
};

export const HackyActionContext = createContext<HackyActionContextType | null>(null);

function HackyActionProvider({ children }: Props) {
  const [hackyActionContext, setHackyActionContext] = useState<IHackyAction>(contextDefaultValues);

  function updateHackyActionContext(hackyAction: IHackyAction) {
    setHackyActionContext(hackyAction);
  }

  return (
    <HackyActionContext.Provider value={{ hackyActionContext, updateHackyActionContext }}>
      {children}
    </HackyActionContext.Provider>
  );
}

export default HackyActionProvider;
