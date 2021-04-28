function fact(n) {
	var ret = 1;
	while(n > 1) {
		if (ret > 1000) break;
		n = n - 1;
		if (n % 2 == 0) continue;
		ret = ret * n;
	}
	return ret;
}

var x = fact(3);

fact(x)
//let halt = x => console.log(x)
//
//function fact (n, k1) {
//    let ret = 1.0
//    let k2 = _ => {
//        let u3 = n > 1.0
//        if (u3) {
//            let k7 = _ => {
//                n = n - 1.0
//                let k8 = _ => {
//                    ret = ret * n
//                    k2(ret)
//                }
//                let u9 = n % 2.0
//                let u10 = u9 == 0.0
//                if (u10) {
//                    k2(null)
//                }
//                else {
//                    k8(null)
//                }
//            }
//            let u11 = ret > 1000.0
//            if (u11) {
//                k1(ret)
//            }
//            else {
//                k7(null)
//            }
//        }
//        else {
//            k1(ret)
//        }
//    }
//    k2(null)
//}
//
//let k14 = x12 => {
//    let x = x12
//    fact(x, halt)
//}
//fact(3.0, k14)