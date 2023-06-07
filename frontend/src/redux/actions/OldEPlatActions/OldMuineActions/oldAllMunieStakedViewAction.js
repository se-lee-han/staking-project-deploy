import { MunieTokenAddress, MunieStakingContract } from "../../../../config/MunieConfig";

import axios from "axios";
function oldAllMunieStakedViewAct() {
    return async (dispatch) => {
        try {
            const getTotalMunieTokenIdsApi = await MunieStakingContract.methods.getTotalTokenIds().call();

            // const getMunieStakingTokenImgVideoUrlToBack = await axios.get(
            //     `https://alchemyapi.khans.io/alchemy/getNFTImages?network=eth&contractAddress=${MunieTokenAddress}&tokenIds=${getTotalMunieTokenIdsApi}`
            // );
            // console.log(getTotalMunieTokenIdsApi);
            // if (getTotalMunieTokenIdsApi.length === 0) {
            //     console.log("No Munie tokens staked.");
            //     return; // 또는 예외 처리를 위해 throw 문을 사용할 수도 있습니다.
            // }
            const getMunieStakingTokenImgVideoUrlToBack = await axios.get(`https://alchemyapi.khans.io/alchemy/getNFTImages?contractAddress=${MunieTokenAddress}&tokenIds=${getTotalMunieTokenIdsApi}`);

            // console.log(getMunieStakingTokenImgVideoUrlToBack);

            const getOldMunieStakingTokenIdImgVideoUrlApi = getMunieStakingTokenImgVideoUrlToBack.data.data;

            // console.log(getMunieStakingTokenImgVideoUrlToBack);

            dispatch({
                type: "GET_OLD_MUNIE_ALL_TOKEN_VIEW",
                payload: {
                    getOldMunieStakingTokenIdImgVideoUrl: getOldMunieStakingTokenIdImgVideoUrlApi,
                },
            });
        } catch (error) {
            console.error(error);
        }
    };
}

export const oldAllMunieStakedViewAction = { oldAllMunieStakedViewAct };
