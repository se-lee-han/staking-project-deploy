import { PrivateStakingContract, web3 } from "../../../../config/PrivateStakingRakis6Config";
// import { PrivateStakingContract } from "../../../../config/PrivateStakingRakis6ConfigTest";

function rakis6TotalRewardViewAct(account) {
    return async (dispatch) => {
        try {
            if (account) {
                const totalRewardViewApi = await PrivateStakingContract.methods.rewardView(account).call();
                const totalRewardView = web3.utils.fromWei(String(totalRewardViewApi), "ether");

                dispatch({
                    type: "RAKIS6_AIRDROP_TOTAL_REWARD_VIEW",
                    payload: {
                        totalRewardView: totalRewardView,
                    },
                });
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const rakis6TotalRewardViewAction = { rakis6TotalRewardViewAct };
