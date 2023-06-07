import { MunieStakingContract, MunieTokenAddress } from "../../../../config/MunieConfig";
import axios from "axios";

function oldMunieWithdrawListAct(account) {
    return async (dispatch) => {
        try {
            if (account !== "") {
                // 스테이킹한 총 토큰 아이디 배열 출력 함수
                const getTotalMunieTokenIdsApi = await MunieStakingContract.methods.getTotalTokenIds().call();
                // console.log(getTotalMunieTokenIdsApi);
                // 내가 스테이킹한 정보 출력 함수 (스테이킹한 토큰 아이디 배열, 총 보상 받은 양, 클래임 받지 않은 보상 양, 스테이킹한 토큰 개수, 마지막 업데이트 시간)
                const getMunieStakerData = await MunieStakingContract.methods.getStakerData(account).call();
                // console.log("munieStaker", getMunieStakerData.tokenIds);
                // staking된 nft 정보 가져오기
                const stakingTokenIdImgBack = await axios.get(`https://alchemyapi.khans.io/alchemy/getNFTImages?contractAddress=${MunieTokenAddress}&tokenIds=${getMunieStakerData.tokenIds}`);
                // const stakingTokenIdImgBack = await axios.get(
                //     `https://alchemyapi.khans.io/alchemy/getNFTImages?network=eth&contractAddress=${MunieTokenAddress}&tokenIds=${getMunieStakerData.tokenIds}`
                // );

                // console.log("MunieWithdrawList", stakingTokenIdImgBack);

                const stakedOldMunieTokenIdApi = stakingTokenIdImgBack.data.data;

                const oldMunieWithdrawStakedAmountApi = getMunieStakerData.countStaked;

                dispatch({
                    type: "OLD_MUNIE_WITHDRAW_LIST",
                    payload: {
                        stakedOldMunieTokenId: stakedOldMunieTokenIdApi,
                        oldMunieWithdrawStakedAmount: oldMunieWithdrawStakedAmountApi,
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const oldMunieWithdrawListAction = { oldMunieWithdrawListAct };
