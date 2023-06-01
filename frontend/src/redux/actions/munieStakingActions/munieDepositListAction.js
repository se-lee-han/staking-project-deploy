import { MunieTokenAddress, MunieStakingContract } from "../../../config/MunieConfig";
// import { MunieTokenAddress } from "../../../config/MunieConfigTest";
import axios from "axios";
import Web3 from "web3";

function munieDepositListAct(account) {
    return async (dispatch) => {
        try {
            if (account !== "") {
                // 주소별 가지고 있는 민팅된 tokenID
                // console.log(account);
                const getMyMunieTokenToBack = await axios.get(
                    `https://alchemyapi.khans.io/alchemy/getNFTs?owner=${account}&contractAddress=${MunieTokenAddress}`
                );
                // const getMyMunieTokenToBack = await axios.get(
                //     `https://alchemyapi.khans.io/alchemy/getNFTs?network=eth&owner=${account}&contractAddress=${MunieTokenAddress}`
                // );

                // console.log("test", getMyMunieTokenToBack.data.data);

                let getMyMunieTokenIdsApi = getMyMunieTokenToBack.data.data;
                if (getMyMunieTokenIdsApi !== null && getMyMunieTokenIdsApi.length !== undefined) {
                    // 가지고 있는 민팅 ID로 Token정보 뽑기
                    for (let i = 0; i < getMyMunieTokenIdsApi.length; i++) {
                        let myMunieMetaDataTokenid = getMyMunieTokenIdsApi[i];
                        let mTokenId = Web3.utils.hexToNumber(myMunieMetaDataTokenid.nft.tokenId);
                        getMyMunieTokenIdsApi[i].tokenId = mTokenId;
                    }
                } else {
                    getMyMunieTokenIdsApi = [];
                }

                const getMunieStakerData = await MunieStakingContract.methods.getStakerData(account).call();

                const depositStakedAmountApi = getMunieStakerData.countStaked;

                dispatch({
                    type: "MUNIE_DEPOSIT_LIST",
                    payload: {
                        getMyMunieTokenIds: getMyMunieTokenIdsApi,
                        depositStakedAmount: depositStakedAmountApi,
                    },
                });
            }
        } catch (error) {
            console.error(error);
        }
    };
}

export const munieDepositListAction = { munieDepositListAct };
