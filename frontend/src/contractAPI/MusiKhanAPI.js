import { testTokenContract } from "./../config/SheepooriStakingConfigTest";
import {
    BridgeContract,
    MusikhanContract,
    MusikhanTokenFactoryContract,
    MusikhanStakingContract,
    MusikhanAirdropContract,
    TokenSwapContract,
} from "../config/MusikhanConfigTest";
const account = 0;
const amount = 0;
const L2TokenAddress = "0xD421681215599ABFdE8EEC8e035Bcb0b30732C68";

//! Bridge 사용시 네트워크 확인
//! --------------------------- L1 BridgeContract --------------------------- //

// L1에서 내가 가지고 있는 토큰 L2에 보내는 함수(내가 가지고 있는 토큰 주소 매개변수로 입력)
// approve 필수 체크
const sendToken = await BridgeContract.methods.sendToken(L2TokenAddress).send({ from: account });

//! --------------------------- L2 MusikhanContract --------------------------- //

// --------------------------- view --------------------------- //

// L1에서 배포한 모든 토큰 주소
const getL1TokenList = await MusikhanContract.methods.getL1TokenList().call();

// L2에서 배포한 모든 토큰 주소
const getL2TokenList = await MusikhanContract.methods.getL2TokenList().call();

// 내 주소 입력시 L1에서 Bridge로 보낸 토큰 정보 출력, amount 심볼 토큰주소 (L1 Token Address, address 내 주소)
const getL1TokenInfo = await MusikhanContract.methods.getL1TokenInfo(account).call();

// 토큰 주소 입력시 name, symbol, l1Ca, l2Ca, owner, root 출력
const getL2TokenInfo = await MusikhanContract.methods.getL2TokenInfo(L2TokenAddress).call();

// 내가 민팅한 모든 토큰 주소
const getMyTokenList = await MusikhanContract.methods.getMyTokenList(account).call();

// 내가 스테이킹한 모든 토큰 주소
const getMyStakingTokenList = await MusikhanContract.methods.getStakingTokenList(account).call();

// 토큰 주소 입력시 내가 민팅한 토큰 이름이랑 심볼 금액 출력
const getMyTokenInfo = await MusikhanContract.methods.getMyTokenInfo(L2TokenAddress, account).call();

// --------------------------- transaction --------------------------- //

// L1에 가지고 있던 토큰 양 만큼 L2에서 민팅하는 함수 (address L2토큰 주소)
const mint = await MusikhanContract.methods.mint(L2TokenAddress).send({ from: account });

//! --------------------------- L2 MusikhanStakingContract --------------------------- //

// --------------------------- view --------------------------- //
// 내가 지금까지 받은 총 보상 토큰 양
// const totalReward = await MusikhanStakingContract.methods.totalReward(account).call();

// // 내가 입력한 토큰을 스테이킹한 정보
// const getStaker = await MusikhanStakingContract.methods.getStaker(L2TokenAddress, account).call();

// // 스테이킹한 모든 토큰 양
// const totalSupply = await MusikhanStakingContract.methods.totalSupply().call();

// // 컨트랙트가 보상으로 줄 수 있는 양
// const tokenQuota = await MusikhanStakingContract.methods.tokenQuota().call();

// // 계산식에 필요한 함수
// const rewardsDuration = await MusikhanStakingContract.methods.rewardsDuration().call();

// // 계산식에 필요한 함수
// // 초당 주는 hanToken
// const hanTokenPerLpToken = await MusikhanStakingContract.methods.hanTokenPerLpToken().call();

// // 내가 출금할 수 있는 토큰 리스트
// const getStakingTokenList = await MusikhanStakingContract.methods.getStakingTokenList(account).call();

// // 내가 클레임 할 수 있는 토큰 CA 리스트
// const getClaimTokenList = await MusikhanStakingContract.methods.getClaimTokenList(account).call();
// // Ca
// const getStaker1 = await MusikhanStakingContract.methods.getStaker(L2TokenAddress, account).call();

// // --------------------------- transaction --------------------------- //

// // 스테이킹 함수
// // 내가 스테이킹하고 싶은 토큰 주소랑 금액 입력
// const stake = await MusikhanStakingContract.methods.stake(L2TokenAddress, amount).send({ from: account });

// // 출금 함수
// // 내가 출금하고 싶은 토큰 주소랑 금액 입력
// const withdraw = await MusikhanStakingContract.methods.withdraw(L2TokenAddress, amount).send({ from: account });

// // 클레임 함수
// // 내가 클레임하고 싶은 토큰 주소 입력
// const claimReward = await MusikhanStakingContract.methods.claimReward(L2TokenAddress).send({ from: account });

//! --------------------------- L2 MusikhanAirdrop Contract --------------------------- //

// 클레임 하는 함수
const claim = await MusikhanAirdropContract.methods.claim(["Proof"], amount, L2TokenAddress).send({ from: account });

// 토큰 주소 입력시 (root, startTime, claimDuration, whitelistClaimed) 출력
const getAirdropTokenData = await MusikhanAirdropContract.methods.getAirdropTokenData(L2TokenAddress).call();

// airdrop에서 클레임 가능한 토큰 리스트 반환 함수
const getCanClaimTokenList = await MusikhanAirdropContract.methods.getCanClaimTokenList().call();

const remainingDuration = await MusikhanAirdropContract.methods.remainingDuration(L2TokenAddress).call();

const canClaim = await MusikhanAirdropContract.methods.canClaim(["proof"], amount, L2TokenAddress).call({ from: account });

const claimed = await MusikhanAirdropContract.methods.claimed(["proof"], amount, L2TokenAddress).call({ from: account });

//! --------------------------- L2 TokenSwap Contract --------------------------- //
const balanceOf1 = await testTokenContract.methods.balanceOf(account).call();

const approve2 = await testTokenContract.methods.approve("Contract Address", amount).send({ from: account });
// 토큰 전환 해주는 함수 이거 하기 전에 approve 해야됩니다
const swapToken = await TokenSwapContract.methods.swapToken("Existed Token", "Swap Token").send({ from: account });

//! --------------------------- admin --------------------------- //

// pause 기능은 MusikhanStakingContract, MusikhanAirdropContract, IMusikhanContract 에도 있다
const pause = await MusikhanStakingContract.methods.pause().send({ from: account });

const unpause = await MusikhanStakingContract.methods.unpause().send({ from: account });

// recover 기능은 MusikhanStakingContract, MusikhanAirdropContract, TokenSwapContract 에도 있다
const recoverERC20 = await MusikhanStakingContract.methods.recoverERC20().send({ from: account });

const recoverERC721 = await MusikhanStakingContract.methods.recoverERC721().send({ from: account });

// 주소 입력시 가진 금액 출력
const balanceOf = await testTokenContract.methods.balanceOf(account).call();

// 입력한 컨트렉트 주소에 금액만큼 권한을 주는 함수
const approve = await testTokenContract.methods.approve("Contract Address", amount).send({ from: account });

// approve 한 금액 확인 함수 내가 누구한테 얼만큼 권한을 줬는지 확인하는 함수
const allowance = await testTokenContract.methods.allowance(account, "Contract Address").call();

// --------------------------- Musikhan Contract --------------------------- //

// L1에 배포한 토큰 주소 추가 함수 검증을 위해 컨트랙트에 저장 (address 토큰 주소)
const addL1TokenAddress = await MusikhanContract.methods.addL1TokenAddress("L1 Token Address").send({ from: account });

// 유저가 잃어버린 토큰 민팅해주는 함수
const lostTokenMint = await MusikhanContract.methods.lostTokenMint("L2 Token Address", "User Address", amount).send({ from: account });
// --------------------------- Musikhan Staking Contract --------------------------- //

const setRewardsDuration = await MusikhanStakingContract.methods.setRewardsDuration(amount).send({ from: account });

const setTokenQuota = await MusikhanStakingContract.methods.setTokenQuota(amount).send({ from: account });

const transferRewardToken = await MusikhanStakingContract.method.transferRewardToken(amount).send({ from: account });

// --------------------------- L2 MusiKhanTokenFactoryContract --------------------------- //

// L2에서 Token 배포하는 함수 (string 이름, string 심볼, address L1 Token Address)
const createToken = await MusikhanTokenFactoryContract.methods.createToken("name", "symbol", L2TokenAddress).send({ from: account });

// 에어드랍
// 브릿지말고 L2에서 바로 베포하는 함수
const createNewL2Token = await MusikhanTokenFactoryContract.methods.createNewL2Token("name", "symbol", "root").send({ from: account });

// L2에 이미 베포한 토큰 musikhanToken으로 베포하는 함수
const createL2SwapToken = await MusikhanTokenFactoryContract.methods.createL2SwapToken("name", "symbol", "existed Token").send({ from: account });

// --------------------------- L2 Musikhan Airdrop Contract --------------------------- //

// setRoot를 실행해야 에어드랍 클레임 사용 가능 userNumber 는 root 만들때 지정한 유저 배열의 길이
const setRoot = await MusikhanAirdropContract.methods.setRoot("root", "userNumber", "Token Address").send({ from: account });

// duration 변경하는 함수
const setClaimDuration = await MusikhanAirdropContract.methods.setClaimDuration("New Duration", "Token Address").send({ from: account });

// --------------------------- 여여여기기기 L2 Musikhan Staking Contract --------------------------- //

// 여기는 같아요 바뀐거 없어요
const stake = await MusikhanStakingContract.methods.stake(L2TokenAddress, amount).send({ from: account });

const withdraw = await MusikhanStakingContract.methods.withdraw(L2TokenAddress, amount).send({ from: account });

const claimReward = await MusikhanStakingContract.methods.claimReward(L2TokenAddress).send({ from: account });

// 이 함수는 중복 getStaker 에 amountStaked 랑 같은 값
const getStakerAmount = await MusikhanStakingContract.methods.getStakerAmount(L2TokenAddress, account).call();

// name, symbol, l2Ca, amountStaked, claimedReward, timeOfLastUpdate, unclaimedRewards
const getStaker = await MusikhanStakingContract.methods.getStaker(L2TokenAddress, account).call();

// 내가 지금까지 받은 총 보상 토큰 양
const totalReward = await MusikhanStakingContract.methods.totalReward(account).call();

// 스테이킹한 모든 토큰 양
const totalSupply = await MusikhanStakingContract.methods.totalSupply().call();

// 컨트랙트가 보상으로 줄 수 있는 양
const tokenQuota = await MusikhanStakingContract.methods.tokenQuota().call();

// 계산식에 필요한 함수
const rewardsDuration = await MusikhanStakingContract.methods.rewardsDuration().call();

// 계산식에 필요한 함수
// 초당 주는 hanToken
const hanTokenPerLpToken = await MusikhanStakingContract.methods.hanTokenPerLpToken().call();
// 여기까지

// 여기는 추가
// 유저가 스테이킹한 토큰 리스트
const getStakedTokenList = await MusikhanStakingContract.methods.getStakedTokenList(account).call();

// 유저가 클레임 받을 수 있는 토큰 리스트
const getCanClaimedTokenList = await MusikhanStakingContract.methods.getCanClaimedTokenList(account).call();

// 토큰에 스테이킹한 지값 주소 리스트
const getStakerAddressList = await MusikhanStakingContract.methods.getStakerAddressList(L2TokenAddress).call();
// 여기까지

// 여기는 삭제
const getStakingTokenList = await MusikhanStakingContract.methods.getStakingTokenList(account).call();
const getClaimTokenList = await MusikhanStakingContract.methods.getClaimTokenList(account).call();
// 여기까지

// test Token address
// getL2TokenInfo 로 검색해도 안나옵니다 제가 root 값이 없어서 그냥 스테이킹 되는지 확인하는거니까 배열 만들어서 거기서 테스트 부탁드립니다.

// name : qwer, symbol : qq
const qwer = "0x6e0e1E944BF9d9249245F887A3c0AdD0A67f8497";

// name : asdf, symbol : aa
const asdf = "0x7767C69Fd06f748a66bb184b932b62fD5d604BFd";

// name : zxcv, symbol : zz
const zxcv = "0x947d85Ab958853a1BdeAFd1a23Ee358d8aF52446";
