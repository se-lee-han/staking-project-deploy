import { MusikhanStakingContract, web3 } from "../../../../config/MusikhanConfig";
// import { MusikhanStakingContract } from "../../../../config/MusikhanConfigTest";

function L2RewardTotalAct(account) {
    return async (dispatch) => {
        try {
            if (account) {
                const totalRewardApi = await MusikhanStakingContract.methods.totalReward(account).call();
                const totalReward = web3.utils.fromWei(String(totalRewardApi), "ether");
                dispatch({
                    type: "L2_TOTAL_REWARD_TOKEN",
                    payload: {
                        totalRewardToken: totalReward,
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

export const L2RewardTotalAction = { L2RewardTotalAct };
