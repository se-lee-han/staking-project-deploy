import axios from "axios";

function gasPriceResultAct(account) {
    return async (dispatch) => {
        try {
            if (account !== "") {
                const gasPriceBack = await axios.get(`https://alchemyapi.khans.io/alchemy/getEthGasPrice`);

                const gasPriceResultApi = gasPriceBack.data.data.result;

                let [gasPriceResult] = await Promise.all([gasPriceResultApi]);

                dispatch({
                    type: "GET_GASPRICE_RESULT_SUCCESS",
                    payload: {
                        gasPriceResult: gasPriceResult,
                    },
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}

export const gasPriceResultAction = { gasPriceResultAct };
