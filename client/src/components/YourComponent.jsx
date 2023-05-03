import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useProvider } from "wagmi";
import { create } from "zustand";
/*
const useConnectStore = create((set) => ({
  isConnected: false,
  setIsConnected: (value) => set(() => ({ isConnected: value })),
}));*/

const YourComponent = () => {
  /* const account = useAccount();
  const provider = useProvider();
  const { isConnected, setIsConnected } = useConnectStore();

  const handleConnect = async () => {
    try {
      await provider.connect();
      setIsConnected(true);
    } catch (error) {
      console.error("Failed to connect to wallet:", error);
    }
  };*/

  return (
    /* <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!isConnected ? (
        <ConnectButton onClick={handleConnect} />
      ) : (
        <div>Account {account.address} is now connected!</div>
      )}
    </div>*/
    <ConnectButton />
  );
};

export default YourComponent;
