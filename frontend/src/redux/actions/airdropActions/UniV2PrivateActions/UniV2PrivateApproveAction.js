import Swal from "sweetalert2";
import { StakingTokenContract, StakingPrivateUniV2Address } from "../../../../config/new/StakingPrivateUniV2Config";
// import { StakingTokenContract, StakingPrivateRakis6Address } from "../../../../config/new/StakingPrivateRakis6";

function UniV2PrivateApproveAct(account, rakis6PrStakingnum) {
    return async (dispatch) => {
        try {
            if (account) {
                const approve = await StakingTokenContract.methods.approve(StakingPrivateUniV2Address, rakis6PrStakingnum).send({ from: account });

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
                        type: "PRIVATE_UNIV2_APPORVE_SUCCESS",
                        payload: {
                            successPrivateUniV2Approve: true,
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

export const UniV2PrivateApproveAction = { UniV2PrivateApproveAct };
