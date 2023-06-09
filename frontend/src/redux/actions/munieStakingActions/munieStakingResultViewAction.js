import { MunieV2StakingContract, web3 } from "../../../config/new/StakingMunieV2Config";

function munieStakingResultViewAct(account) {
    return async (dispatch) => {
        try {
            if (account !== "") {
                // 내가 스테이킹한 정보 출력 함수 (스테이킹한 토큰 아이디 배열, 총 보상 받은 양, 클래임 받지 않은 보상 양, 스테이킹한 토큰 개수, 마지막 업데이트 시간)
                const getStakerDataApi = await MunieV2StakingContract.methods.getStakerData(account).call();

                const getMunieAmountStakedApi = getStakerDataApi.countStaked;

                const getMunieTotalRewardApi = web3.utils.fromWei(String(getStakerDataApi.totalReward), "ether");

                const getMunieUnClaimedRewardsApi = web3.utils.fromWei(String(getStakerDataApi.unclaimedRewards), "ether");

                const getMunieTimeOfLastUpdateApi = getStakerDataApi.timeOfLastUpdate;

                // 초 당 보상으로 줄 보상 금액
                const rewardTokenPerStakingTokenApi = await MunieV2StakingContract.methods.rewardTokenPerStakingToken().call();

                // 현재시간
                const munieCurrentTimeApi = Math.floor(new Date().getTime() / 1000);

                const munieStakedTime = munieCurrentTimeApi - getMunieTimeOfLastUpdateApi;

                const munieResultValueApi = web3.utils.fromWei(String(munieStakedTime * (getMunieAmountStakedApi * rewardTokenPerStakingTokenApi)), "ether");

                let [munieResultValue, getMunieUnClaimedRewards, getMunieTotalReward] = await Promise.all([munieResultValueApi, getMunieUnClaimedRewardsApi, getMunieTotalRewardApi]);
                dispatch({
                    type: "MUNIE_RESULT_VIEW",
                    payload: {
                        munieResultValue: munieResultValue,
                        getMunieUnClaimedRewards: getMunieUnClaimedRewards,
                        getMunieTotalReward: getMunieTotalReward,
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const munieStakingResultViewAction = { munieStakingResultViewAct };
