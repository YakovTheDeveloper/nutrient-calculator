import { PayData } from "../domain/payData"
import { usePayment } from "../services/paymentAdapter"

export const useDonate = () => {

	const payment = usePayment()
	async function donate(donateFormInfo: PayData) {

		const paid = await payment.pay(donateFormInfo)
		return paid
	}
	return { donate }
}

