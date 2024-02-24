import "./Wallet.css";
import CreateWallet from "./wallet-create/CreateWallet";

const Wallet = () => {
    return ( 
        <div className="wallet-container">
            <h2 className="title">ID Wallet</h2>
            <CreateWallet />
        </div>
    );
}
 
export default Wallet;