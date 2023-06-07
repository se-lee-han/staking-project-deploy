import { HanBonusStakingContract, web3 } from "../../../config/StakingHanChain";
// import { StakingHanChainContract } from "../../../config/StakingHanchainTest";

function hanStakingRewardViewAct(account) {
    return async (dispatch) => {
        try {
            // 내가 받을 수 있는 보상 양 실시간으로 계산
            const hanRewardPerSecondViewApi = await HanBonusStakingContract.methods.rewardView(account).call();

            const hanRewardPerSecondView = web3.utils.fromWei(String(hanRewardPerSecondViewApi), "ether");
            // 지금 까지 내가 받은 총 보상 양
            const hanTotalRewardReleasedApi = await HanBonusStakingContract.methods.totalRewardReleased(account).call();

            const hanTotalRewardReleased = web3.utils.fromWei(String(hanTotalRewardReleasedApi), "ether");

            dispatch({
                type: "HAN_CHAIN_REWARD_VIEW",
                payload: {
                    hanRewardPerSecondView: hanRewardPerSecondView,
                    hanTotalRewardReleased: hanTotalRewardReleased,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const hanStakingRewardViewAction = { hanStakingRewardViewAct };
