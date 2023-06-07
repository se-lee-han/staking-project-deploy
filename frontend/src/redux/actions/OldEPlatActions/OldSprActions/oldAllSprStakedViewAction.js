import { SheepooriStakingAddress, SheepooriTokenAddress, web3 } from "../../../../config/SheepooriStakingConfig";
import axios from "axios";

function oldAllSprStakedViewAct(account) {
    return async (dispatch) => {
        try {
            if (account) {
                // Sheepri All Staking get Api
                // const getTotalSprTokenIdsApi = await SheepooriStakingContract.methods.getTotalTokenIds().call();

                // const getContractAllStakingTokenToBack = await axios.get(
                //     `https://alchemyapi.khans.io/alchemy/getNFTImages?contractAddress=${SheepooriTokenAddress}&tokenIds=${getTotalSprTokenIdsApi}`
                // );

                // main
                const getContractAllStakingTokenToBack = await axios.get(`https://alchemyapi.khans.io/alchemy/getNFTs?owner=${SheepooriStakingAddress}`);
                // console.log(getContractAllStakingTokenToBack);
                //test
                // const getContractAllStakingTokenToBack = await axios.get(
                //   `https://staking.paykhan.io:12000/test/alchemy/getNFTs?owner=${SheepooriStakingAddress}`
                // );

                const getAllStakingTokenIdsApi = getContractAllStakingTokenToBack.data.data;

                const allTokenIdArrays = [];
                for (let i = 0; i < getAllStakingTokenIdsApi.length; i++) {
                    let allContractMetaDataTokenid = getAllStakingTokenIdsApi[i];
                    let hAllTokenId = web3.utils.hexToNumber(allContractMetaDataTokenid.nft.tokenId);
                    getAllStakingTokenIdsApi[i].nft.tokenId = hAllTokenId;
                    allTokenIdArrays.push(hAllTokenId);
                }

                // console.log("1234", getAllStakingTokenIdsApi);

                // main
                const getStakingTokenImgVideoUrlToBack = await axios.get(`https://alchemyapi.khans.io/alchemy/getNFTImages?contractAddress=${SheepooriTokenAddress}&tokenIds=${allTokenIdArrays}`);

                // test
                // const getStakingTokenImgVideoUrlToBack = await axios.get(
                //   `https://3.28.228.70:12000/test/alchemy/getNFTImages?contractAddress=${SheepooriTokenAddress}&tokenIds=${allTokenIdArrays}`
                // );

                // console.log(getStakingTokenIdImgVideoUrl);
                const getOldSprStakingTokenIdImgVideoUrlApi = getStakingTokenImgVideoUrlToBack.data.data;

                // console.log(getStakingTokenIdImgVideoUrlApi);

                let [getOldSprStakingTokenIdImgVideoUrl] = await Promise.all([getOldSprStakingTokenIdImgVideoUrlApi]);

                dispatch({
                    type: "GET_OLD_SPR_ALL_TOKEN_VIEW_SUCCESS",
                    payload: {
                        getOldSprStakingTokenIdImgVideoUrl: getOldSprStakingTokenIdImgVideoUrl,
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const oldAllSprStakedViewAction = { oldAllSprStakedViewAct };
