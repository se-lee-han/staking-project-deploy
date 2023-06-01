import { MunieStakingContract, MunieTokenAddress, MunieTokenContract } from "../../../config/MunieConfig";
// import { MunieStakingContract, MunieTokenAddress, MunieTokenContract } from "../../../config/MunieConfigTest";
import axios from "axios";
import Web3 from "web3";
function munieStakingViewAct(account) {
    return async (dispatch) => {
        try {
            if (account !== "") {
                // 주소 별 스테이킹한 토큰 아이디 반환 getstakedTokenId 주소별 토큰 아이디 반환
                const getMunieStakerData = await MunieStakingContract.methods.getStakerData(account).call();
                // console.log("주소별 스테이킹한 토큰 아이디 ", getMunieStakerData);

                // console.log(getMunieStakerData.countStaked);

                const munieAmountStakedApi = getMunieStakerData.countStaked;

                const munieStakedTokenIdsApi = getMunieStakerData.tokenIds;
                // console.log("munieStakedTokenId", munieStakedTokenIdsApi);

                let [munieAmountStaked, munieStakedTokenIds] = await Promise.all([munieAmountStakedApi, munieStakedTokenIdsApi]);
                dispatch({
                    type: "MUNIE_STAKING_VIEW",
                    payload: {
                        munieAmountStaked: munieAmountStaked,
                        munieStakedTokenIds: munieStakedTokenIds,
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const munieStakingViewAction = { munieStakingViewAct };
