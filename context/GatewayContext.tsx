import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import Colors from '../constants/Colors';

interface IGatewayContext {
  assets?: ICryptoAssets[];
  openExplorer: (url: string) => Promise<void>;
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

  const openExplorer = async (url: string) => {
    await WebBrowser.openBrowserAsync(url, {
      controlsColor: Colors.darkText,
      dismissButtonStyle: 'close',
    });
  };

  React.useEffect(() => {
    getAssets();
  }, []);

  return (
    <GatewayContext.Provider value={{ assets, openExplorer }}>
      {children}
    </GatewayContext.Provider>
  );
};
