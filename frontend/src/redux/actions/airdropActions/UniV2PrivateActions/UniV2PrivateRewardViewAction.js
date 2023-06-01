import Web3 from "web3";
import { StakingPrivateUniV2Contract } from "../../../../config/new/StakingPrivateUniV2Config";
// import { StakingPrivateRakis6Contract } from "../../../../config/new/StakingPrivateRakis6";

function UniV2PrivateRewardViewAct(account) {
    return async (dispatch) => {
        try {
            // 내가 받을 수 있는 총 보상 출력 함수
            const privateRewardApi = await StakingPrivateUniV2Contract.methods.rewardView(account).call();

            const privateUniV2RewardPerSecondView = Web3.utils.fromWei(String(privateRewardApi), "ether");

            // 총 보상받은 토큰 양
            const privateTotalRewardReleasedApi = await StakingPrivateUniV2Contract.methods.totalRewardReleased(account).call();

            const privateUniV2TotalRewardReleased = Web3.utils.fromWei(String(privateTotalRewardReleasedApi), "ether");

            dispatch({
                type: "PRIVATE_UNIV2_REWARD_VIEW",
                payload: {
                    privateUniV2RewardPerSecondView: privateUniV2RewardPerSecondView,
                    privateUniV2TotalRewardReleased: privateUniV2TotalRewardReleased,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const UniV2PrivateRewardViewAction = { UniV2PrivateRewardViewAct };
