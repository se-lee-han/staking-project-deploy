import Web3 from "web3";

export const web3 = new Web3(window.ethereum);

export const StakingTokenAddress = "0xe1D6aD723e20206A655b0677354d67BcD671b084";
export const StakingTokenABI = {
    abi: [
        { inputs: [], payable: false, stateMutability: "nonpayable", type: "constructor" },
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
                { indexed: true, internalType: "address", name: "sender", type: "address" },
                { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
                { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
                { indexed: true, internalType: "address", name: "to", type: "address" },
            ],
            name: "Burn",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: "address", name: "sender", type: "address" },
                { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
                { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
            ],
            name: "Mint",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                { indexed: true, internalType: "address", name: "sender", type: "address" },
                { indexed: false, internalType: "uint256", name: "amount0In", type: "uint256" },
                { indexed: false, internalType: "uint256", name: "amount1In", type: "uint256" },
                { indexed: false, internalType: "uint256", name: "amount0Out", type: "uint256" },
                { indexed: false, internalType: "uint256", name: "amount1Out", type: "uint256" },
                { indexed: true, internalType: "address", name: "to", type: "address" },
            ],
            name: "Swap",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                { indexed: false, internalType: "uint112", name: "reserve0", type: "uint112" },
                { indexed: false, internalType: "uint112", name: "reserve1", type: "uint112" },
            ],
            name: "Sync",
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
            constant: true,
            inputs: [],
            name: "DOMAIN_SEPARATOR",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "MINIMUM_LIQUIDITY",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "PERMIT_TYPEHASH",
            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [
                { internalType: "address", name: "", type: "address" },
                { internalType: "address", name: "", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [{ internalType: "address", name: "to", type: "address" }],
            name: "burn",
            outputs: [
                { internalType: "uint256", name: "amount0", type: "uint256" },
                { internalType: "uint256", name: "amount1", type: "uint256" },
            ],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "factory",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "getReserves",
            outputs: [
                { internalType: "uint112", name: "_reserve0", type: "uint112" },
                { internalType: "uint112", name: "_reserve1", type: "uint112" },
                { internalType: "uint32", name: "_blockTimestampLast", type: "uint32" },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                { internalType: "address", name: "_token0", type: "address" },
                { internalType: "address", name: "_token1", type: "address" },
            ],
            name: "initialize",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "kLast",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [{ internalType: "address", name: "to", type: "address" }],
            name: "mint",
            outputs: [{ internalType: "uint256", name: "liquidity", type: "uint256" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [{ internalType: "address", name: "", type: "address" }],
            name: "nonces",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                { internalType: "address", name: "owner", type: "address" },
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
                { internalType: "uint256", name: "deadline", type: "uint256" },
                { internalType: "uint8", name: "v", type: "uint8" },
                { internalType: "bytes32", name: "r", type: "bytes32" },
                { internalType: "bytes32", name: "s", type: "bytes32" },
            ],
            name: "permit",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "price0CumulativeLast",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "price1CumulativeLast",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [{ internalType: "address", name: "to", type: "address" }],
            name: "skim",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                { internalType: "uint256", name: "amount0Out", type: "uint256" },
                { internalType: "uint256", name: "amount1Out", type: "uint256" },
                { internalType: "address", name: "to", type: "address" },
                { internalType: "bytes", name: "data", type: "bytes" },
            ],
            name: "swap",
            outputs: [],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        { constant: false, inputs: [], name: "sync", outputs: [], payable: false, stateMutability: "nonpayable", type: "function" },
        {
            constant: true,
            inputs: [],
            name: "token0",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "token1",
            outputs: [{ internalType: "address", name: "", type: "address" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            payable: false,
            stateMutability: "view",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            constant: false,
            inputs: [
                { internalType: "address", name: "from", type: "address" },
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            payable: false,
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
};
export const StakingTokenContract = new web3.eth.Contract(StakingTokenABI.abi, StakingTokenAddress);

export const RewardTokenAddress = "0x5052fa4a2a147eaAa4c0242e9Cc54a10A4f42070";
export const RewardTokenABI = {
    abi: [
        { inputs: [], stateMutability: "nonpayable", type: "constructor" },
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
        { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "burn", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
            inputs: [
                { internalType: "address", name: "account", type: "address" },
                { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "burnFrom",
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
        { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        {
            inputs: [
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                { internalType: "address", name: "from", type: "address" },
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
};
export const RewardTokenContract = new web3.eth.Contract(RewardTokenABI.abi, RewardTokenAddress);

export const StakingPrivateUniV2Address = "0x9E27DE7c61Af23cAcA7b099eA83F8f8a4a0d542f";
export const StakingPrivateUniV2ABI = {
    abi: [
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_stakingToken",
                    type: "address",
                },
                {
                    internalType: "address",
                    name: "_rewardToken",
                    type: "address",
                },
                {
                    internalType: "uint32",
                    name: "_participationCode",
                    type: "uint32",
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
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "user",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "reward",
                    type: "uint256",
                },
            ],
            name: "RewardPaid",
            type: "event",
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "user",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "Staked",
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
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "user",
                    type: "address",
                },
                {
                    indexed: false,
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
            ],
            name: "Withdrawn",
            type: "event",
        },
        {
            inputs: [],
            name: "claimReward",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [],
            name: "getParticipationCode",
            outputs: [
                {
                    internalType: "uint32",
                    name: "",
                    type: "uint32",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "getStakerArray",
            outputs: [
                {
                    components: [
                        {
                            internalType: "uint256",
                            name: "amount",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "startTime",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",
                            name: "withdrawalTime",
                            type: "uint256",
                        },
                        {
                            internalType: "uint256",

                            name: "totalRewardAmount",
                            type: "uint256",
                        },
                    ],
                    internalType: "struct StakingPrivateUniV2.Staker[]",
                    name: "",
                    type: "tuple[]",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "hanTokenPerLpToken",
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
            inputs: [
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "_index",
                    type: "uint256",
                },
            ],
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
            name: "renounceOwnership",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "_user",
                    type: "address",
                },
            ],
            name: "rewardView",
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
                    internalType: "uint32",
                    name: "_newParticipationCode",
                    type: "uint32",
                },
            ],
            name: "setParticipationCode",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_newTokenQuota",
                    type: "uint256",
                },
            ],
            name: "setTokenQuota",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint32",
                    name: "_participationCode",
                    type: "uint32",
                },
                {
                    internalType: "uint256",
                    name: "_amount",
                    type: "uint256",
                },
            ],
            name: "stake",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address",
                },
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "stakerArray",
            outputs: [
                {
                    internalType: "uint256",
                    name: "amount",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "startTime",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "withdrawalTime",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "totalRewardAmount",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "tokenQuota",
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
                    name: "",
                    type: "address",
                },
            ],
            name: "totalRewardReleased",
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
                    name: "",
                    type: "address",
                },
            ],
            name: "totalStakedAmount",
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
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_index",
                    type: "uint256",
                },
            ],
            name: "withdraw",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
};
export const StakingPrivateUniV2Contract = new web3.eth.Contract(StakingPrivateUniV2ABI.abi, StakingPrivateUniV2Address);
