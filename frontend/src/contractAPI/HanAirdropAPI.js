import { HanAirdropTokenContract, HanAirdropContract } from "./../config/HanAirdropConfigTest";

const proof = ["0xec5181cdfe839c864b90791913a51c139636e7c52a0244e7579eb8cf36026aa9"];
const amount = 0;
const account = "0x2D4F1b98B431d2cE6Cd5CB6a2A461b83CEe83459";

// 클래임 받을 수 있는 상태면 true 출력 함수
const canClaim = await HanAirdropContract.methods.canClaim(proof, amount).call({ from: account });

// 클래임 받으면 true 출력 함수
const claimed = await HanAirdropContract.methods.claimed(proof, amount).call({ from: account });

// 클래임 받은 지갑 주소 출력 함수
const getWhitelistClaimed = await HanAirdropContract.methods.getWhitelistClaimed().call();

// 클래임 받을 수 있는 남은 시간 출력 함수
const remainingDuration = await HanAirdropContract.methods.remainingDuration().call();

// 현재 root 값 출력 함수
const root = await HanAirdropContract.methods.root().call();

// 클래임 함수
const claim = await HanAirdropContract.methods.claim(proof, amount).send({ from: account });

// 테스트 할 때 클래임 받고 확인할 때 쓰는 함수
const balanceOf = await HanAirdropTokenContract.methods.balanceOf(account).call();

