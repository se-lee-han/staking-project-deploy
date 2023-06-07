import { MunieTokenAddress, MunieStakingContract, web3 } from "../../../../config/MunieConfig";
import axios from "axios";

function oldMunieDepositListAct(account) {
    return async (dispatch) => {
        try {
            if (account !== "") {
                // 주소별 가지고 있는 민팅된 tokenID
                // console.log(account);
                const getMyMunieTokenToBack = await axios.get(`https://alchemyapi.khans.io/alchemy/getNFTs?owner=${account}&contractAddress=${MunieTokenAddress}`);
                // const getMyMunieTokenToBack = await axios.get(
                //     `https://alchemyapi.khans.io/alchemy/getNFTs?network=eth&owner=${account}&contractAddress=${MunieTokenAddress}`
                // );

                // console.log("test", getMyMunieTokenToBack.data.data);

                let getMyOldMunieTokenIdsApi = getMyMunieTokenToBack.data.data;
                if (getMyOldMunieTokenIdsApi !== null && getMyOldMunieTokenIdsApi.length !== undefined) {
                    // 가지고 있는 민팅 ID로 Token정보 뽑기
                    for (let i = 0; i < getMyOldMunieTokenIdsApi.length; i++) {
                        let myMunieMetaDataTokenid = getMyOldMunieTokenIdsApi[i];
                        let mTokenId = web3.utils.hexToNumber(myMunieMetaDataTokenid.nft.tokenId);
                        getMyOldMunieTokenIdsApi[i].tokenId = mTokenId;
                    }
                } else {
                    getMyOldMunieTokenIdsApi = [];
                }

                const getMunieStakerData = await MunieStakingContract.methods.getStakerData(account).call();

                const oldMuineDepositStakedAmountApi = getMunieStakerData.countStaked;

                dispatch({
                    type: "OLD_MUNIE_DEPOSIT_LIST",
                    payload: {
                        getMyOldMunieTokenIds: getMyOldMunieTokenIdsApi,
                        oldMuineDepositStakedAmount: oldMuineDepositStakedAmountApi,
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const oldMunieDepositListAction = { oldMunieDepositListAct };
