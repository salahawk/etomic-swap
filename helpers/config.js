const config = {
  alice: {
    abi: [{"constant":false,"inputs":[{"name":"_dealId","type":"bytes32"},{"name":"_aliceSecret","type":"bytes"}],"name":"bobClaimsPayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_dealId","type":"bytes32"},{"name":"_bob","type":"address"},{"name":"_aliceHash","type":"bytes20"},{"name":"_bobHash","type":"bytes20"}],"name":"initEthDeal","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_dealId","type":"bytes32"},{"name":"_bobSecret","type":"bytes"}],"name":"aliceClaimsPayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"deals","outputs":[{"name":"alice","type":"address"},{"name":"bob","type":"address"},{"name":"tokenAddress","type":"address"},{"name":"amount","type":"uint256"},{"name":"aliceHash","type":"bytes20"},{"name":"bobHash","type":"bytes20"},{"name":"state","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"EtomicSwap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_dealId","type":"bytes32"},{"name":"_bob","type":"address"},{"name":"_aliceHash","type":"bytes20"},{"name":"_bobHash","type":"bytes20"},{"name":"_tokenAddress","type":"address"},{"name":"_amount","type":"uint256"}],"name":"initErc20Deal","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],
    address: '0xa66Bc2B55EF5dFF147Edd7352A633Fe8D510839c',
    byteCode: '0x6060604052341561000f57600080fd5b610a978061001e6000396000f3006060604052600436106100535763ffffffff60e060020a600035041663236c35ec811461005857806347c7b6e21461007c57806356fc27ed146100ab57806381cd872a146100cd5780639b2a233c14610150575b600080fd5b341561006357600080fd5b61007a600480359060248035908101910135610196565b005b61007a600435600160a060020a03602435166bffffffffffffffffffffffff1960443581169060643516610409565b34156100b657600080fd5b61007a6004803590602480359081019101356105c7565b34156100d857600080fd5b6100e3600435610724565b604051600160a060020a038089168252878116602083015286166040820152606081018590526bffffffffffffffffffffffff198085166080830152831660a082015260c0810182600381111561013657fe5b60ff16815260200197505050505050505060405180910390f35b341561015b57600080fd5b61007a600435600160a060020a036024358116906bffffffffffffffffffffffff19604435811691606435909116906084351660a43561077d565b6000600160008581526020819052604090206005015460a060020a900460ff1660038111156101c157fe5b1480156101eb575060008481526020819052604090206001015433600160a060020a039081169116145b80156102b1575060008481526020819052604080822060040154606060020a026bffffffffffffffffffffffff191691600391600291879187919051602001526040518083838082843782019150509250505060206040518083038160008661646e5a03f1151561025b57600080fd5b5050604051805190506000604051602001526040519081526020908101906040518083038160008661646e5a03f1151561029457600080fd5b505060405151606060020a026bffffffffffffffffffffffff1916145b15156102bc57600080fd5b600084815260208190526040902060050180546002919074ff0000000000000000000000000000000000000000191660a060020a835b0217905550600084815260208190526040902060020154600160a060020a03161515610362576000848152602081905260409081902060030154600160a060020a0333169181156108fc02919051600060405180830381858888f19350505050151561035d57600080fd5b610403565b506000838152602081905260408082206002810154600390910154600160a060020a0390911692839263a9059cbb9233929091516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156103dd57600080fd5b6102c65a03f115156103ee57600080fd5b50505060405180519050151561040357600080fd5b50505050565b610411610a2f565b600160a060020a038416158015906104295750600034115b801561045a57506000808681526020819052604090206005015460a060020a900460ff16600381111561045857fe5b145b151561046557600080fd5b60e06040519081016040908152600160a060020a033381168352861660208301526000908201523460608201526bffffffffffffffffffffffff198085166080830152831660a082015260c08101600190526000868152602081905260409020909150819081518154600160a060020a031916600160a060020a03919091161781556020820151600182018054600160a060020a031916600160a060020a03929092169190911790556040820151600282018054600160a060020a031916600160a060020a0392909216919091179055606082015181600301556080820151600482018054600160a060020a031916606060020a90920491909117905560a0820151600582018054600160a060020a031916606060020a90920491909117905560c082015160058201805474ff0000000000000000000000000000000000000000191660a060020a8360038111156105b957fe5b021790555050505050505050565b6000600160008581526020819052604090206005015460a060020a900460ff1660038111156105f257fe5b148015610619575060008481526020819052604090205433600160a060020a039081169116145b80156106df575060008481526020819052604080822060050154606060020a026bffffffffffffffffffffffff191691600391600291879187919051602001526040518083838082843782019150509250505060206040518083038160008661646e5a03f1151561068957600080fd5b5050604051805190506000604051602001526040519081526020908101906040518083038160008661646e5a03f115156106c257600080fd5b505060405151606060020a026bffffffffffffffffffffffff1916145b15156106ea57600080fd5b600084815260208190526040902060050180546003919074ff0000000000000000000000000000000000000000191660a060020a836102f2565b600060208190529081526040902080546001820154600283015460038401546004850154600590950154600160a060020a039485169593851694909216929091606060020a9182029181029060a060020a900460ff1687565b6000600160a060020a0386161580159061079f5750600160a060020a03831615155b80156107ab5750600082115b80156107dc57506000808881526020819052604090206005015460a060020a900460ff1660038111156107da57fe5b145b15156107e757600080fd5b506000868152602081905260408082206005810180548254600160a060020a0333818116600160a060020a0319938416178655600486018054606060020a808f04918616919091179091556001870180548f85169086161790558b0474ff00000000000000000000000000000000000000001990941660a060020a178316939093179093556002840180549389169390911683179055600390920185905585938593919263dd62ed3e9290913091516020015260405160e060020a63ffffffff8516028152600160a060020a03928316600482015291166024820152604401602060405180830381600087803b15156108df57600080fd5b6102c65a03f115156108f057600080fd5b505050604051805190501015801561098b57506000878152602081905260408082206003015491600160a060020a038416916370a08231913391516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561096d57600080fd5b6102c65a03f1151561097e57600080fd5b5050506040518051905010155b151561099657600080fd5b80600160a060020a03166323b872dd33308560006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b1515610a0057600080fd5b6102c65a03f11515610a1157600080fd5b505050604051805190501515610a2657600080fd5b50505050505050565b60e06040519081016040908152600080835260208301819052908201819052606082018190526080820181905260a0820181905260c0820152905600a165627a7a7230582086ad6a0c0444e97092746b45566981bb52e636c50a465dc86cc55f89c959cf820029',
  },
  tokenContract: {
    abi: [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}],
    address: '0xc0eb7AeD740E1796992A08962c15661bDEB58003',
    byteCode: '0x6060604052341561000f57600080fd5b683635c9adc5dea00000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550683635c9adc5dea000006000819055506111d48061007b6000396000f3006060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100b4578063095ea7b31461014257806318160ddd1461019c57806323b872dd146101c5578063313ce5671461023e578063661884631461026d57806370a08231146102c757806395d89b4114610314578063a9059cbb146103a2578063d73dd623146103fc578063dd62ed3e14610456575b600080fd5b34156100bf57600080fd5b6100c76104c2565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101075780820151818401526020810190506100ec565b50505050905090810190601f1680156101345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014d57600080fd5b610182600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506104fb565b604051808215151515815260200191505060405180910390f35b34156101a757600080fd5b6101af6105ed565b6040518082815260200191505060405180910390f35b34156101d057600080fd5b610224600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506105f3565b604051808215151515815260200191505060405180910390f35b341561024957600080fd5b6102516109b2565b604051808260ff1660ff16815260200191505060405180910390f35b341561027857600080fd5b6102ad600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109b7565b604051808215151515815260200191505060405180910390f35b34156102d257600080fd5b6102fe600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c48565b6040518082815260200191505060405180910390f35b341561031f57600080fd5b610327610c91565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561036757808201518184015260208101905061034c565b50505050905090810190601f1680156103945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103ad57600080fd5b6103e2600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610cca565b604051808215151515815260200191505060405180910390f35b341561040757600080fd5b61043c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610eee565b604051808215151515815260200191505060405180910390f35b341561046157600080fd5b6104ac600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506110ea565b6040518082815260200191505060405180910390f35b6040805190810160405280600a81526020017f4a75737420546f6b656e0000000000000000000000000000000000000000000081525081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60005481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561063057600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561067e57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561070957600080fd5b61075b82600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461117190919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506107f082600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461118a90919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108c282600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461117190919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b601281565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610ac8576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b5c565b610adb838261117190919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6040805190810160405280600381526020017f4a5354000000000000000000000000000000000000000000000000000000000081525081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d0757600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610d5557600080fd5b610da782600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461117190919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e3c82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461118a90919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000610f7f82600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461118a90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600082821115151561117f57fe5b818303905092915050565b600080828401905083811015151561119e57fe5b80915050929150505600a165627a7a723058204fa5a47919ba4010e83d5c6ab7397081e1a7cf16c527ee08c7c292aa3445bf8a0029'
  },
  bob: {
    abi: [{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"payments","outputs":[{"name":"alice","type":"address"},{"name":"bob","type":"address"},{"name":"bobCanClaimAfter","type":"uint256"},{"name":"secretHash","type":"bytes20"},{"name":"tokenAddress","type":"address"},{"name":"amount","type":"uint256"},{"name":"state","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_txId","type":"bytes32"},{"name":"_alice","type":"address"},{"name":"_secretHash","type":"bytes20"},{"name":"_tokenAddress","type":"address"},{"name":"_amount","type":"uint256"}],"name":"bobMakesErc20Payment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_txId","type":"bytes32"}],"name":"bobClaimsPayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"deposits","outputs":[{"name":"alice","type":"address"},{"name":"bob","type":"address"},{"name":"aliceCanClaimAfter","type":"uint256"},{"name":"secretHash","type":"bytes20"},{"name":"tokenAddress","type":"address"},{"name":"amount","type":"uint256"},{"name":"state","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_txId","type":"bytes32"},{"name":"_secret","type":"bytes"}],"name":"bobClaimsDeposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_txId","type":"bytes32"},{"name":"_secret","type":"bytes"}],"name":"aliceClaimsPayment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_txId","type":"bytes32"},{"name":"_alice","type":"address"},{"name":"_secretHash","type":"bytes20"},{"name":"_tokenAddress","type":"address"},{"name":"_amount","type":"uint256"}],"name":"bobMakesErc20Deposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_txId","type":"bytes32"}],"name":"aliceClaimsDeposit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_txId","type":"bytes32"},{"name":"_alice","type":"address"},{"name":"_secretHash","type":"bytes20"}],"name":"bobMakesEthDeposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"blocksPerDeal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_txId","type":"bytes32"},{"name":"_alice","type":"address"},{"name":"_secretHash","type":"bytes20"}],"name":"bobMakesEthPayment","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[{"name":"_blocksPerDeal","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],
    address: '0x455B2D9cD85E773Ff22F6cA818bc7a33a5d576de',
    byteCode: '0x6060604052341561000f57600080fd5b604051602080611396833981016040528080519150506000811161003257600080fd5b600055611352806100446000396000f3006060604052600436106100955763ffffffff60e060020a6000350416630716326d811461009a57806322cb81b61461011c5780632cd76c691461015c5780633d4dff7b1461017257806355e5a7141461018857806356fc27ed146101aa57806366c8ac90146101cc5780639fbb10091461020a578063c2c5143f14610220578063cd73d26c14610249578063cf36fe8e1461026e575b600080fd5b34156100a557600080fd5b6100b0600435610297565b604051600160a060020a0380891682528781166020830152604082018790526bffffffffffffffffffffffff19861660608301528416608082015260a0810183905260c0810182600381111561010257fe5b60ff16815260200197505050505050505060405180910390f35b341561012757600080fd5b61015a600435600160a060020a036024358116906bffffffffffffffffffffffff196044351690606435166084356102ed565b005b341561016757600080fd5b61015a600435610637565b341561017d57600080fd5b6100b06004356107cd565b341561019357600080fd5b61015a600480359060248035908101910135610824565b34156101b557600080fd5b61015a600480359060248035908101910135610a82565b34156101d757600080fd5b61015a600435600160a060020a036024358116906bffffffffffffffffffffffff19604435169060643516608435610caf565b341561021557600080fd5b61015a600435610e62565b61015a600435600160a060020a03602435166bffffffffffffffffffffffff1960443516610fc5565b341561025457600080fd5b61025c611158565b60405190815260200160405180910390f35b61015a600435600160a060020a03602435166bffffffffffffffffffffffff196044351661115e565b60026020819052600091825260409091208054600182015492820154600383015460048401546005850154600690950154600160a060020a03948516968516959394606060020a90930293919092169160ff1687565b6000600160a060020a038516158015906103075750600082115b8015610330575060008681526002602052604081206006015460ff16600381111561032e57fe5b145b80156103445750600160a060020a03831615155b151561034f57600080fd5b60e06040519081016040528086600160a060020a0316815260200133600160a060020a0316815260200161038e600054436112e190919063ffffffff16565b81526bffffffffffffffffffffffff1986166020820152600160a060020a03851660408201526060810184905260800160019052600087815260026020526040902081518154600160a060020a031916600160a060020a03919091161781556020820151600182018054600160a060020a031916600160a060020a0392909216919091179055604082015181600201556060820151600382018054600160a060020a031916606060020a9092049190911790556080820151600482018054600160a060020a031916600160a060020a039290921691909117905560a0820151816005015560c082015160068201805460ff1916600183600381111561048f57fe5b02179055509050508290508181600160a060020a031663dd62ed3e333060006040516020015260405160e060020a63ffffffff8516028152600160a060020a03928316600482015291166024820152604401602060405180830381600087803b15156104fa57600080fd5b6102c65a03f1151561050b57600080fd5b505050604051805190501015801561059457508181600160a060020a03166370a082313360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561057657600080fd5b6102c65a03f1151561058757600080fd5b5050506040518051905010155b151561059f57600080fd5b80600160a060020a03166323b872dd33308560006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561060957600080fd5b6102c65a03f1151561061a57600080fd5b50505060405180519050151561062f57600080fd5b505050505050565b6000600160008381526002602052604090206006015460ff16600381111561065b57fe5b148015610685575060008281526002602052604090206001015433600160a060020a039081169116145b80156106a35750600082815260026020819052604090912001544310155b15156106ae57600080fd5b600082815260026020526040902060068101805460ff1916600317905560040154600160a060020a03161515610728576000828152600260205260409081902060050154600160a060020a0333169181156108fc02919051600060405180830381858888f19350505050151561072357600080fd5b6107c9565b506000818152600260205260408082206004810154600590910154600160a060020a0390911692839263a9059cbb9233929091516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156107a357600080fd5b6102c65a03f115156107b457600080fd5b5050506040518051905015156107c957600080fd5b5050565b60016020819052600091825260409091208054918101546002820154600383015460048401546005850154600690950154600160a060020a0396871696948516959394606060020a90930293919092169160ff1687565b6000600160008581526001602052604090206006015460ff16600381111561084857fe5b14801561087357506000848152600160208190526040909120015433600160a060020a039081169116145b801561088f575060008481526001602052604090206002015443105b80156109565750600084815260016020526040808220600390810154606060020a026bffffffffffffffffffffffff1916929091600291879187919051602001526040518083838082843782019150509250505060206040518083038160008661646e5a03f1151561090057600080fd5b5050604051805190506000604051602001526040519081526020908101906040518083038160008661646e5a03f1151561093957600080fd5b505060405151606060020a026bffffffffffffffffffffffff1916145b151561096157600080fd5b600084815260016020526040902060068101805460ff1916600317905560040154600160a060020a031615156109db576000848152600160205260409081902060050154600160a060020a0333169181156108fc02919051600060405180830381858888f1935050505015156109d657600080fd5b610a7c565b506000838152600160205260408082206004810154600590910154600160a060020a0390911692839263a9059cbb9233929091516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610a5657600080fd5b6102c65a03f11515610a6757600080fd5b505050604051805190501515610a7c57600080fd5b50505050565b6000600160008581526002602052604090206006015460ff166003811115610aa657fe5b148015610acd575060008481526002602052604090205433600160a060020a039081169116145b8015610aea57506000848152600260208190526040909120015443105b8015610bb057506000848152600260208190526040808320600390810154606060020a026bffffffffffffffffffffffff1916939092918791879151602001526040518083838082843782019150509250505060206040518083038160008661646e5a03f11515610b5a57600080fd5b5050604051805190506000604051602001526040519081526020908101906040518083038160008661646e5a03f11515610b9357600080fd5b505060405151606060020a026bffffffffffffffffffffffff1916145b1515610bbb57600080fd5b600084815260026020819052604090912060068101805460ff191690921790915560040154600160a060020a03161515610c34576000848152600260205260409081902060050154600160a060020a0333169181156108fc02919051600060405180830381858888f1935050505015156109d657600080fd5b506000838152600260205260408082206004810154600590910154600160a060020a0390911692839263a9059cbb9233929091516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b1515610a5657600080fd5b6000600160a060020a03851615801590610cc95750600082115b8015610cf2575060008681526001602052604081206006015460ff166003811115610cf057fe5b145b8015610d065750600160a060020a03831615155b1515610d1157600080fd5b60e06040519081016040528086600160a060020a0316815260200133600160a060020a03168152602001610d61610d5460026000546112fb90919063ffffffff16565b439063ffffffff6112e116565b81526bffffffffffffffffffffffff1986166020820152600160a060020a03851660408201526060810184905260800160019052600087815260016020526040902081518154600160a060020a031916600160a060020a03919091161781556020820151600182018054600160a060020a031916600160a060020a0392909216919091179055604082015181600201556060820151600382018054600160a060020a031916606060020a9092049190911790556080820151600482018054600160a060020a031916600160a060020a039290921691909117905560a0820151816005015560c082015160068201805460ff1916600183600381111561048f57fe5b6000600160008381526001602052604090206006015460ff166003811115610e8657fe5b148015610ead575060008281526001602052604090205433600160a060020a039081169116145b8015610eca57506000828152600160205260409020600201544310155b1515610ed557600080fd5b600082815260016020526040902060068101805460ff1916600217905560040154600160a060020a03161515610f4a576000828152600160205260409081902060050154600160a060020a0333169181156108fc02919051600060405180830381858888f19350505050151561072357600080fd5b506000818152600160205260408082206004810154600590910154600160a060020a0390911692839263a9059cbb9233929091516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b15156107a357600080fd5b600160a060020a03821615801590610fdd5750600034115b8015611006575060008381526001602052604081206006015460ff16600381111561100457fe5b145b151561101157600080fd5b60e06040519081016040528083600160a060020a0316815260200133600160a060020a03168152602001611054610d5460026000546112fb90919063ffffffff16565b81526bffffffffffffffffffffffff19831660208201526000604082015234606082015260800160019052600084815260016020526040902081518154600160a060020a031916600160a060020a03919091161781556020820151600182018054600160a060020a031916600160a060020a0392909216919091179055604082015181600201556060820151600382018054600160a060020a031916606060020a9092049190911790556080820151600482018054600160a060020a031916600160a060020a039290921691909117905560a0820151816005015560c082015160068201805460ff1916600183600381111561114c57fe5b02179055505050505050565b60005481565b600160a060020a038216158015906111765750600034115b801561119f575060008381526002602052604081206006015460ff16600381111561119d57fe5b145b15156111aa57600080fd5b60e06040519081016040528083600160a060020a0316815260200133600160a060020a031681526020016111e9600054436112e190919063ffffffff16565b81526bffffffffffffffffffffffff19831660208201526000604082015234606082015260800160019052600084815260026020526040902081518154600160a060020a031916600160a060020a03919091161781556020820151600182018054600160a060020a031916600160a060020a0392909216919091179055604082015181600201556060820151600382018054600160a060020a031916606060020a9092049190911790556080820151600482018054600160a060020a031916600160a060020a039290921691909117905560a0820151816005015560c082015160068201805460ff1916600183600381111561114c57fe5b6000828201838110156112f057fe5b8091505b5092915050565b60008083151561130e57600091506112f4565b5082820282848281151561131e57fe5b04146112f057fe00a165627a7a72305820a1c8c5188b46631a1b42174d2f8eb46c8dd898938675c9d6cf066667365d371e0029',
    blocksPerDeal: 480
  },
  deal: {
    alice: '0x485d2cc2d13a9e12E4b53D606DB1c8adc884fB8a',
    bob: '0xA7EF3f65714AE266414C9E58bB4bAa4E6FB82B41'
  }
};

module.exports = config;
