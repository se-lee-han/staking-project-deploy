import { MunieV2StakingContract, MunieTokenAddress } from "../../../config/new/StakingMunieV2Config";

import axios from "axios";

function munieWithdrawListAct(account) {
    return async (dispatch) => {
        try {
            if (account !== "") {
                // 스테이킹한 총 토큰 아이디 배열 출력 함수
                // const getTotalMunieTokenIdsApi = await MunieStakingContract.methods.getTotalTokenIds().call();
                // console.log(getTotalMunieTokenIdsApi);
                // 내가 스테이킹한 정보 출력 함수 (스테이킹한 토큰 아이디 배열, 총 보상 받은 양, 클래임 받지 않은 보상 양, 스테이킹한 토큰 개수, 마지막 업데이트 시간)
                const getMunieStakerData = await MunieV2StakingContract.methods.getStakerData(account).call();
                // console.log("munieStaker", getMunieStakerData.tokenIds);
                // staking된 nft 정보 가져오기
                const stakingTokenIdImgBack = await axios.get(`https://alchemyapi.khans.io/alchemy/getNFTImages?contractAddress=${MunieTokenAddress}&tokenIds=${getMunieStakerData.tokenIds}`);
                // const stakingTokenIdImgBack = await axios.get(
                //     `https://alchemyapi.khans.io/alchemy/getNFTImages?network=eth&contractAddress=${MunieTokenAddress}&tokenIds=${getMunieStakerData.tokenIds}`
                // );

                // console.log("MunieWithdrawList", stakingTokenIdImgBack);

                const stakedMunieTokenIdApi = stakingTokenIdImgBack.data.data;

                const withdrawStakedAmountApi = getMunieStakerData.countStaked;

                dispatch({
                    type: "MUNIE_WITHDRAW_LIST",
                    payload: {
                        stakedMunieTokenId: stakedMunieTokenIdApi,
                        withdrawStakedAmount: withdrawStakedAmountApi,
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const munieWithdrawListAction = { munieWithdrawListAct };
