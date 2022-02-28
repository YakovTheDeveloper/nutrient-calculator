import { payApi } from "./payApi"
import { PayData } from "../domain/payData"

export function usePayment(){

	return {
		pay(data: PayData){
			return payApi(data)
		}
	}
}