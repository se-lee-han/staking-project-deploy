import { MunieStakingContract } from "../../../../config/MunieConfig";

function oldMunieStakingViewAct(account) {
    return async (dispatch) => {
        try {
            if (account !== "") {
                // 주소 별 스테이킹한 토큰 아이디 반환 getstakedTokenId 주소별 토큰 아이디 반환
                const getMunieStakerData = await MunieStakingContract.methods.getStakerData(account).call();
                // console.log("주소별 스테이킹한 토큰 아이디 ", getMunieStakerData);

                // console.log(getMunieStakerData.countStaked);

                const oldMunieAmountStakedApi = getMunieStakerData.countStaked;

                const oldMunieStakedTokenIdsApi = getMunieStakerData.tokenIds;
                // console.log("munieStakedTokenId", munieStakedTokenIdsApi);

                let [oldMunieAmountStaked, oldMunieStakedTokenIds] = await Promise.all([oldMunieAmountStakedApi, oldMunieStakedTokenIdsApi]);
                dispatch({
                    type: "OLD_MUNIE_STAKING_VIEW",
                    payload: {
                        oldMunieAmountStaked: oldMunieAmountStaked,
                        oldMunieStakedTokenIds: oldMunieStakedTokenIds,
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const oldMunieStakingViewAction = { oldMunieStakingViewAct };
