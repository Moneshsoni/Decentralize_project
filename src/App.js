import './App.css';
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import {useState,useEffect} from "react";
import { ethers} from "ethers";
import FileUpload from "./components/FileUpload.js";
import Modal from "./components/Modal.js";
import Display from "./components/Display.js";

function App() {
  const [account,setAccount] = useState("");
  const [contract,setContract]=useState(null);
  const [provider,setProvider] = useState(null);
  const [modelOpen,setModalOpen] = useState(false);

  useEffect(()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async()=>{
      if(provider){

        window.ethereum.on("chainChanged",()=>{
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", ()=>{
          window.location.reload();
        });
        await provider.send("eth_requestAccounts",[]);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
        const contract = new ethers.Contract(contractAddress,Upload.abi,signer);
        console.log("Contract",contract);
        setContract(contract);
        setProvider(provider);
    }else{
      console.log("Metamask is not Installed");
    } 
    }

    provider && loadProvider()
  })
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>Mdrive WEB3.0</h1>
      <div class = "bg"></div>
      <div class = "bg bg2"></div>
      <div class = "bg bg3"></div>

      <p>Account : {account ? account:"Not connected"}</p>
      

    </div>
  );
}

export default App;
