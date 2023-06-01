import Web3 from "web3";

export const web3 = new Web3(window.ethereum);

export const HanAirdropAddress = "0xB3FC457e336dBE18f79D602942F372A6130Fd115";
export const HanAirdropABI = {
    abi: [
        {
            inputs: [
                {
                    internalType: "bytes32[]",
                    name: "merkleProof",
                    type: "bytes32[]",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "claim",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "contract IERC20",
                    name: "_token",
                    type: "address",
                },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "claimer",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "claimAmount",
                    type: "uint256",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "timestamp",
                    type: "uint256",
                },
            ],
            name: "Claim",
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
                    internalType: "address",
                    name: "token",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "RecoveredERC20",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    internalType: "address",
                    name: "token",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256",
                },
            ],
            name: "RecoveredERC721",
            type: "event",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_tokenAddress",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_tokenAmount",
                    type: "uint256",
                },
            ],
            name: "recoverERC20",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_tokenAddress",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_tokenId",
                    type: "uint256",
                },
            ],
            name: "recoverERC721",
            outputs: [],
            stateMutability: "nonpayable",
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
            inputs: [
                {
                    internalType: "uint256",
                    name: "_newDuration",
                    type: "uint256",
                },
            ],
            name: "setClaimDuration",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "bytes32",
                    name: "_root",
                    type: "bytes32",
                },
            ],
            name: "setRoot",
            outputs: [],
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
                    internalType: "bytes32[]",
                    name: "merkleProof",
                    type: "bytes32[]",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "canClaim",
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
            name: "claimDuration",
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
                    internalType: "bytes32[]",
                    name: "merkleProof",
                    type: "bytes32[]",
                },
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "claimed",
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
            name: "getWhitelistClaimed",
            outputs: [
                {
                    internalType: "address[]",
                    name: "",
                    type: "address[]",
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
            name: "remainingDuration",
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
            name: "root",
            outputs: [
                {
                    internalType: "bytes32",
                    name: "",
                    type: "bytes32",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "startTime",
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
            name: "token",
            outputs: [
                {
                    internalType: "contract IERC20",
                    name: "",
                    type: "address",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
    ],
};

export const HanAirdropContract = new web3.eth.Contract(HanAirdropABI.abi, HanAirdropAddress);

export const HanAirdropTokenAddress = "0x50Bce64397C75488465253c0A034b8097FeA6578";
export const HanAirdropTokenABI = {
    abi: [
        {
            inputs: [
                { internalType: "address", name: "_l2Bridge", type: "address" },
                { internalType: "address", name: "_l1Token", type: "address" },
                { internalType: "string", name: "_name", type: "string" },
                { internalType: "string", name: "_symbol", type: "string" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: "address", name: "owner", type: "address" },
                { indexed: true, internalType: "address", name: "spender", type: "address" },
                { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "Approval",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: "address", name: "_account", type: "address" },
                { indexed: false, internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "Burn",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: "address", name: "_account", type: "address" },
                { indexed: false, internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "Mint",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: "address", name: "from", type: "address" },
                { indexed: true, internalType: "address", name: "to", type: "address" },
                { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "Transfer",
            type: "event",
        },
        {
            inputs: [
                { internalType: "address", name: "owner", type: "address" },
                { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [{ internalType: "address", name: "account", type: "address" }],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                { internalType: "address", name: "_from", type: "address" },
                { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "burn",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" },
        {
            inputs: [
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "subtractedValue", type: "uint256" },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
        },
        { inputs: [], name: "l1Token", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "l2Bridge", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
        {
            inputs: [
                { internalType: "address", name: "_to", type: "address" },
                { internalType: "uint256", name: "_amount", type: "uint256" },
            ],
            name: "mint",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
        {
            inputs: [{ internalType: "bytes4", name: "_interfaceId", type: "bytes4" }],
            name: "supportsInterface",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "pure",
            type: "function",
        },
        { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        {
            inputs: [
                { internalType: "address", name: "recipient", type: "address" },
                { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                { internalType: "address", name: "sender", type: "address" },
                { internalType: "address", name: "recipient", type: "address" },
                { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
};

export const HanAirdropTokenContract = new web3.eth.Contract(HanAirdropTokenABI.abi, HanAirdropTokenAddress);
