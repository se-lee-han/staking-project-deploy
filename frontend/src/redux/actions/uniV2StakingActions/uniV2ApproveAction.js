import Swal from "sweetalert2";
import { StakingTokenContract, StakingUniV2Address } from "../../../config/new/StakingUniV2Config";
// import { StakingTokenContract, StakingRakis6Address } from "../../../config/new/StakingRakis6ConfigTest";

function uniV2ApproveAct(account, hanChainStakingNum) {
    return async (dispatch) => {
        try {
            if (account) {
                const approve = await StakingTokenContract.methods.approve(StakingUniV2Address, hanChainStakingNum).send({ from: account });

                if (approve.status) {
                    Swal.fire({
                        title: "Success",
                        text: "Approve was successful!",
                        icon: "success",

                        confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
                        confirmButtonText: "OK", // confirm 버튼 텍스트 지정
                        // showCancelButton: true,
                        // cancelButtonText: '취소',
                        // cancelButtonColor: '#d33',

                        // reverseButtons: true,
                    });
                    dispatch({
                        type: "UNIV2_STAKING_APPORVE_SUCCESS",
                        payload: {
                            successUniV2Approve: true,
                        },
                    });
                }
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: "Fail",
                text: "Approve was Fail!",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK",
            });
        }
    };
}

export const uniV2ApproveAction = { uniV2ApproveAct };
