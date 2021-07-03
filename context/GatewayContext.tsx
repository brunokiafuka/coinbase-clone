import React from 'react';

interface IGatewayContext {
  assets?: ICryptoAssets[];
}

export const GatewayContext = React.createContext<IGatewayContext>({});

export const useGatewayContext = () => React.useContext(GatewayContext);

export const GatewayProvider: React.FC = ({ children }) => {
  const [assets, setAssets] = React.useState<ICryptoAssets[]>([]);
  const getAssets = async () => {
    const response = await fetch('https://api.coincap.io/v2/assets?limit=20');
    const { data } = await response.json();

    setAssets(data);
  };

  React.useEffect(() => {
    getAssets();
  }, []);

  return (
    <GatewayContext.Provider value={{ assets }}>
      {children}
    </GatewayContext.Provider>
  );
};
