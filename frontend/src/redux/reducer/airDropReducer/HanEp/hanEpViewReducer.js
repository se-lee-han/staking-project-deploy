let initialState = {
    privateUniV2StakingTokenBalance: "",
    privateUniV2TotalStaked: "",
    totalUniV2PrivateStakedAmount: "",
    privateUniV2Allowance: "",
    successPrivateUniV2Approve: false,
    getUniPrivateStakerDataArray: {},
    privateWithdrawAmountToModal: "",
    privateWithdrawIndex: "",
    privateUniV2RewardPerSecondView: "",
    privateUniV2TotalRewardReleased: "",
};

function hanEpViewReducer(state = initialState, action) {
    let { type, payload } = action;

    switch (type) {
        case "UNIV2_PRIVATE_VIEW_SUCCESS":
            return {
                ...state,
                privateUniV2StakingTokenBalance: payload.privateUniV2StakingTokenBalance,
                privateUniV2TotalStaked: payload.privateUniV2TotalStaked,
                totalUniV2PrivateStakedAmount: payload.totalUniV2PrivateStakedAmount,
            };
        case "PRIVATE_UNIV2_APPROVE_STATE":
            return {
                ...state,
                privateUniV2Allowance: payload.privateUniV2Allowance,
            };
        case "PRIVATE_UNIV2_APPORVE_SUCCESS":
            return {
                ...state,
                successPrivateUniV2Approve: payload.successPrivateUniV2Approve,
            };
        case "UNIV2_PRIVATE_WITHDRAW_TOKENLIST":
            return {
                ...state,
                getUniPrivateStakerDataArray: payload.getUniPrivateStakerDataArray,
            };

        case "PRIVATE_WITHDRAW_VIEW_SUCCESS":
            return {
                ...state,
                privateWithdrawAmountToModal: payload.privateWithdrawAmountToModal,
                privateWithdrawIndex: payload.privateWithdrawIndex,
            };
        case "PRIVATE_UNIV2_REWARD_VIEW":
            return {
                ...state,
                privateUniV2RewardPerSecondView: payload.privateUniV2RewardPerSecondView,
                privateUniV2TotalRewardReleased: payload.privateUniV2TotalRewardReleased,
            };

        default:
            return { ...state };
    }
}

export default hanEpViewReducer;
