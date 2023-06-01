import Web3 from "web3";

export const web3 = new Web3(window.ethereum);

function L2TokenContractAct(l2TokenAddress) {
    return async (dispatch) => {
        try {
            const l2Address = l2TokenAddress;
            const IMusikhanABI = {
                abi: [
                    {
                        inputs: [
                            {
                                internalType: "string",
                                name: "_name",
                                type: "string",
                            },
                            {
                                internalType: "string",
                                name: "_symbol",
                                type: "string",
                            },
                            {
                                internalType: "address",
                                name: "airdropCa",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "musikhanCa",
                                type: "address",
                            },
                            {
                                internalType: "address",
                                name: "tokenFactoryCa",
                                type: "address",
                            },
                            {
                                internalType: "bool",
                                name: "boolean",
                                type: "bool",
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
                                name: "spender",
                                type: "address",
                            },
                            {
                                indexed: false,
                                internalType: "uint256",
                                name: "value",
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
                                name: "previousOwner",
                                type: "address",
                            },
                            {
                                indexed: true,
                                internalType: "address",
                                name: "newOwner",
                                type: "address",
                            },
                        ],
                        name: "OwnershipTransferred",
                        type: "event",
                    },
                    {
                        anonymous: false,
                        inputs: [
                            {
                                indexed: false,
                                internalType: "address",
                                name: "account",
                                type: "address",
                            },
                        ],
                        name: "Paused",
                        type: "event",
                    },
                    {
                        anonymous: false,
                        inputs: [
                            {
                                indexed: false,
                                internalType: "uint256",
                                name: "id",
                                type: "uint256",
                            },
                        ],
                        name: "Snapshot",
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
                                indexed: false,
                                internalType: "uint256",
                                name: "value",
                                type: "uint256",
                            },
                        ],
                        name: "Transfer",
                        type: "event",
                    },
                    {
                        anonymous: false,
                        inputs: [
                            {
                                indexed: false,
                                internalType: "address",
                                name: "account",
                                type: "address",
                            },
                        ],
                        name: "Unpaused",
                        type: "event",
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
                                name: "spender",
                                type: "address",
                            },
                        ],
                        name: "allowance",
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
                                name: "spender",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        name: "approve",
                        outputs: [
                            {
                                internalType: "bool",
                                name: "",
                                type: "bool",
                            },
                        ],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [
                            {
                                internalType: "address",
                                name: "account",
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
                        inputs: [
                            {
                                internalType: "address",
                                name: "account",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "snapshotId",
                                type: "uint256",
                            },
                        ],
                        name: "balanceOfAt",
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
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        name: "burn",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [
                            {
                                internalType: "address",
                                name: "account",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        name: "burnFrom",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "check",
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
                        name: "decimals",
                        outputs: [
                            {
                                internalType: "uint8",
                                name: "",
                                type: "uint8",
                            },
                        ],
                        stateMutability: "view",
                        type: "function",
                    },
                    {
                        inputs: [
                            {
                                internalType: "address",
                                name: "spender",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "subtractedValue",
                                type: "uint256",
                            },
                        ],
                        name: "decreaseAllowance",
                        outputs: [
                            {
                                internalType: "bool",
                                name: "",
                                type: "bool",
                            },
                        ],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "factory",
                        outputs: [
                            {
                                internalType: "contract MusikhanTokenFactory",
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
                                name: "spender",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "addedValue",
                                type: "uint256",
                            },
                        ],
                        name: "increaseAllowance",
                        outputs: [
                            {
                                internalType: "bool",
                                name: "",
                                type: "bool",
                            },
                        ],
                        stateMutability: "nonpayable",
                        type: "function",
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
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        name: "mint",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
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
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        name: "mintSwapToken",
                        outputs: [],
                        stateMutability: "nonpayable",
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
                        inputs: [],
                        name: "owner",
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
                        inputs: [],
                        name: "pause",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "paused",
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
                        name: "renounceOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "snapshot",
                        outputs: [],
                        stateMutability: "nonpayable",
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
                                internalType: "uint256",
                                name: "snapshotId",
                                type: "uint256",
                            },
                        ],
                        name: "totalSupplyAt",
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
                                name: "to",
                                type: "address",
                            },
                            {
                                internalType: "uint256",
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        name: "transfer",
                        outputs: [
                            {
                                internalType: "bool",
                                name: "",
                                type: "bool",
                            },
                        ],
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
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        name: "transferAirdrop",
                        outputs: [
                            {
                                internalType: "bool",
                                name: "",
                                type: "bool",
                            },
                        ],
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
                                name: "amount",
                                type: "uint256",
                            },
                        ],
                        name: "transferFrom",
                        outputs: [
                            {
                                internalType: "bool",
                                name: "",
                                type: "bool",
                            },
                        ],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [
                            {
                                internalType: "address",
                                name: "newOwner",
                                type: "address",
                            },
                        ],
                        name: "transferOwnership",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                    {
                        inputs: [],
                        name: "unpause",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                    },
                ],
            };

            const L2TokenContractApi = new web3.eth.Contract(IMusikhanABI.abi, l2Address);
            const res = dispatch({
                type: "L2_TOKEN_CONTRACT",
                payload: { L2Contract: L2TokenContractApi },
            });
            if (res) dispatch({ type: "DEPOSIT_API_STATUS", payload: true });
        } catch (error) {
            console.error(error);
        }
    };
}

export const L2TokenContractAction = { L2TokenContractAct };