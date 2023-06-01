import { MunieStakingAddress, MunieStakingContract, MunieTokenContract } from "../config/MunieConfigTest";

const account = 0;
const tokenId = 0;

// 여기 먼저 하고 시작 합시다
const Mint = await MunieTokenContract.methods.Mint().send({ from: account });

const approve = await MunieTokenContract.methods.approve(MunieStakingAddress, tokenId).send({ from: account });

// 내가 민팅한 토큰 id 배열로 출력 함수
const getMyTokenIds = await MunieTokenContract.methods.getMyTokenIds().call({ from: account });

// 내가 스테이킹한 정보 출력 함수 (스테이킹한 토큰 아이디 배열, 총 보상 받은 양, 클래임 받지 않은 보상 양, 스테이킹한 토큰 개수, 마지막 업데이트 시간)
const getStakerData = await MunieStakingContract.methods.getStakerData(account).call();

// 스테이킹한 총 토큰 아이디 배열 출력 함수
const getTotalTokenIds = await MunieStakingContract.methods.getTotalTokenIds().call();

// 초 당 보상으로 줄 보상 금액
const rewardTokenPerStakingToken = await MunieStakingContract.methods.rewardTokenPerStakingToken().call();

// 토큰 아이디 입력시 오너 주소 출력 함수
const tokenOwner = await MunieStakingContract.methods.tokenOwner(tokenId).call();

const stake = await MunieStakingContract.methods.stake(tokenId).send({ from: account });

const unStake = await MunieStakingContract.methods.unStake(tokenId).send({ from: account });

const claimReward = await MunieStakingContract.methods.claimReward().send({ from: account });
