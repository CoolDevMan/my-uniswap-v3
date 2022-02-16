/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721 } from "../ERC721";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d2f38038062001d2f833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b5060405250620001b391506301ffc9a760e01b90506200021d565b8151620001c8906006906020850190620002a2565b508051620001de906007906020840190620002a2565b50620001f16380ac58cd60e01b6200021d565b62000203635b5e139f60e01b6200021d565b6200021563780e9d6360e01b6200021d565b50506200034e565b6001600160e01b031980821614156200027d576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620002da576000855562000325565b82601f10620002f557805160ff191683800117855562000325565b8280016001018555821562000325579182015b828111156200032557825182559160200191906001019062000308565b506200033392915062000337565b5090565b5b8082111562000333576000815560010162000338565b6119d1806200035e6000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c80634f6ccce7116100b257806395d89b4111610081578063b88d4fde11610066578063b88d4fde1461038f578063c87b56dd14610455578063e985e9c5146104725761011b565b806395d89b4114610359578063a22cb465146103615761011b565b80634f6ccce7146102f15780636352211e1461030e5780636c0360eb1461032b57806370a08231146103335761011b565b806318160ddd116100ee57806318160ddd1461023f57806323b872dd146102595780632f745c591461028f57806342842e0e146102bb5761011b565b806301ffc9a71461012057806306fdde031461015b578063081812fc146101d8578063095ea7b314610211575b600080fd5b6101476004803603602081101561013657600080fd5b50356001600160e01b0319166104a0565b604080519115158252519081900360200190f35b6101636104c3565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561019d578181015183820152602001610185565b50505050905090810190601f1680156101ca5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101f5600480360360208110156101ee57600080fd5b5035610559565b604080516001600160a01b039092168252519081900360200190f35b61023d6004803603604081101561022757600080fd5b506001600160a01b0381351690602001356105bb565b005b610247610696565b60408051918252519081900360200190f35b61023d6004803603606081101561026f57600080fd5b506001600160a01b038135811691602081013590911690604001356106a7565b610247600480360360408110156102a557600080fd5b506001600160a01b0381351690602001356106fe565b61023d600480360360608110156102d157600080fd5b506001600160a01b03813581169160208101359091169060400135610729565b6102476004803603602081101561030757600080fd5b5035610744565b6101f56004803603602081101561032457600080fd5b503561075a565b610163610782565b6102476004803603602081101561034957600080fd5b50356001600160a01b03166107e3565b61016361084b565b61023d6004803603604081101561037757600080fd5b506001600160a01b03813516906020013515156108ac565b61023d600480360360808110156103a557600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156103e057600080fd5b8201836020820111156103f257600080fd5b8035906020019184600183028401116401000000008311171561041457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506109b1945050505050565b6101636004803603602081101561046b57600080fd5b5035610a0f565b6101476004803603604081101561048857600080fd5b506001600160a01b0381358116916020013516610c90565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561054f5780601f106105245761010080835404028352916020019161054f565b820191906000526020600020905b81548152906001019060200180831161053257829003601f168201915b5050505050905090565b600061056482610cbe565b61059f5760405162461bcd60e51b815260040180806020018281038252602c8152602001806118ef602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006105c68261075a565b9050806001600160a01b0316836001600160a01b031614156106195760405162461bcd60e51b81526004018080602001828103825260218152602001806119736021913960400191505060405180910390fd5b806001600160a01b031661062b610ccb565b6001600160a01b0316148061064c575061064c81610647610ccb565b610c90565b6106875760405162461bcd60e51b81526004018080602001828103825260388152602001806118426038913960400191505060405180910390fd5b6106918383610ccf565b505050565b60006106a26002610d55565b905090565b6106b86106b2610ccb565b82610d60565b6106f35760405162461bcd60e51b81526004018080602001828103825260318152602001806119946031913960400191505060405180910390fd5b610691838383610e04565b6001600160a01b03821660009081526001602052604081206107209083610f50565b90505b92915050565b610691838383604051806020016040528060008152506109b1565b600080610752600284610f5c565b509392505050565b6000610723826040518060600160405280602981526020016118a46029913960029190610f78565b60098054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561054f5780601f106105245761010080835404028352916020019161054f565b60006001600160a01b03821661082a5760405162461bcd60e51b815260040180806020018281038252602a81526020018061187a602a913960400191505060405180910390fd5b6001600160a01b038216600090815260016020526040902061072390610d55565b60078054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561054f5780601f106105245761010080835404028352916020019161054f565b6108b4610ccb565b6001600160a01b0316826001600160a01b0316141561091a576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610927610ccb565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff19169215159290921790915561096b610ccb565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6109c26109bc610ccb565b83610d60565b6109fd5760405162461bcd60e51b81526004018080602001828103825260318152602001806119946031913960400191505060405180910390fd5b610a0984848484610f8f565b50505050565b6060610a1a82610cbe565b610a555760405162461bcd60e51b815260040180806020018281038252602f815260200180611944602f913960400191505060405180910390fd5b60008281526008602090815260408083208054825160026001831615610100026000190190921691909104601f810185900485028201850190935282815292909190830182828015610ae85780601f10610abd57610100808354040283529160200191610ae8565b820191906000526020600020905b815481529060010190602001808311610acb57829003601f168201915b505050505090506000610af9610782565b9050805160001415610b0d575090506104be565b815115610bce5780826040516020018083805190602001908083835b60208310610b485780518252601f199092019160209182019101610b29565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610b905780518252601f199092019160209182019101610b71565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506104be565b80610bd885610fe1565b6040516020018083805190602001908083835b60208310610c0a5780518252601f199092019160209182019101610beb565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610c525780518252601f199092019160209182019101610c33565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006107236002836110d4565b3390565b600081815260046020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384169081179091558190610d1c8261075a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610723826110e0565b6000610d6b82610cbe565b610da65760405162461bcd60e51b815260040180806020018281038252602c815260200180611816602c913960400191505060405180910390fd5b6000610db18361075a565b9050806001600160a01b0316846001600160a01b03161480610dec5750836001600160a01b0316610de184610559565b6001600160a01b0316145b80610dfc5750610dfc8185610c90565b949350505050565b826001600160a01b0316610e178261075a565b6001600160a01b031614610e5c5760405162461bcd60e51b815260040180806020018281038252602981526020018061191b6029913960400191505060405180910390fd5b6001600160a01b038216610ea15760405162461bcd60e51b81526004018080602001828103825260248152602001806117f26024913960400191505060405180910390fd5b610eac838383610691565b610eb7600082610ccf565b6001600160a01b0383166000908152600160205260409020610ed990826110e4565b506001600160a01b0382166000908152600160205260409020610efc90826110f0565b50610f09600282846110fc565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006107208383611112565b6000808080610f6b8686611176565b9097909650945050505050565b6000610f858484846111f1565b90505b9392505050565b610f9a848484610e04565b610fa6848484846112bb565b610a095760405162461bcd60e51b81526004018080602001828103825260328152602001806117c06032913960400191505060405180910390fd5b60608161100657506040805180820190915260018152600360fc1b60208201526104be565b8160005b811561101e57600101600a8204915061100a565b60008167ffffffffffffffff8111801561103757600080fd5b506040519080825280601f01601f191660200182016040528015611062576020820181803683370190505b50859350905060001982015b83156110cb57600a840660300160f81b8282806001900393508151811061109157fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8404935061106e565b50949350505050565b6000610720838361144d565b5490565b60006107208383611465565b6000610720838361152b565b6000610f8584846001600160a01b038516611575565b815460009082106111545760405162461bcd60e51b815260040180806020018281038252602281526020018061179e6022913960400191505060405180910390fd5b82600001828154811061116357fe5b9060005260206000200154905092915050565b8154600090819083106111ba5760405162461bcd60e51b81526004018080602001828103825260228152602001806118cd6022913960400191505060405180910390fd5b60008460000184815481106111cb57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b6000828152600184016020526040812054828161128c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611251578181015183820152602001611239565b50505050905090810190601f16801561127e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061129f57fe5b9060005260206000209060020201600101549150509392505050565b60006112cf846001600160a01b031661160c565b6112db57506001610dfc565b6000611413630a85bd0160e11b6112f0610ccb565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561135757818101518382015260200161133f565b50505050905090810190601f1680156113845780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518060600160405280603281526020016117c0603291396001600160a01b0388169190611612565b9050600081806020019051602081101561142c57600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b60008181526001830160205260408120548015611521578354600019808301919081019060009087908390811061149857fe5b90600052602060002001549050808760000184815481106114b557fe5b6000918252602080832090910192909255828152600189810190925260409020908401905586548790806114e557fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610723565b6000915050610723565b6000611537838361144d565b61156d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610723565b506000610723565b6000828152600184016020526040812054806115da575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055610f88565b828560000160018303815481106115ed57fe5b9060005260206000209060020201600101819055506000915050610f88565b3b151590565b6060610f858484600085856116268561160c565b611677576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106116b55780518252601f199092019160209182019101611696565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611717576040519150601f19603f3d011682016040523d82523d6000602084013e61171c565b606091505b509150915061172c828286611737565b979650505050505050565b60608315611746575081610f88565b8251156117565782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561125157818101518382015260200161123956fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a164736f6c6343000706000a";
