import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  rainbowWallet,
  metaMaskWallet,
  coinbaseWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
//import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from "wagmi/providers/public";
import YourComponent from "./YourComponent";

const { chains, provider } = configureChains(
  [optimism, mainnet, polygon, arbitrum],
  [publicProvider()]
  /*[
    //alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), ADD DURING PRODUCTION
    publicProvider(),
  ]*/
);

/*const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App", // if required later , use appinfo
  // projectId: "220c0d82a4beb3e77052df03347fba7e",
  chains,
});*/ // for default  wallet

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ chains }),
      rainbowWallet({ chains }),
      walletConnectWallet({ chains }),
      coinbaseWallet({ chains }),
    ],
  },
]); //custom wallet list

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const RainbowKit = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={lightTheme({
          borderRadius: "small",
          fontStack: "system",
          accentColor: "#000000 ",
          accentColorForeground: "white",
        })}
        showRecentTransactions={true}
      >
        <YourComponent />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default RainbowKit;
