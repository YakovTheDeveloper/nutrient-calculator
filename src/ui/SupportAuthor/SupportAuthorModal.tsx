import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import styles from "./SupportAuthorModal.module.css"
import { useDonate } from "../../application/donate"
import { PayData } from "../../domain/payData"
// import { getUser } from "../../api/getFood"

const SupportAuthorModal = () => {

	const [loading, setLoading] = useState(false)
	const [result, setResult] = useState<any>(false)
	const [showMessage, setShowMessage] = useState(false)
	const { donate } = useDonate()



	const [form, setForm] = useState<PayData>({
		currency: "EUR",
		value: 0,
		message: ""
	})

	const handleChange = (e: React.ChangeEvent) => {
		const target = (e.target as HTMLSelectElement)

		if (target.name === "currency") {
			if (target.value === "BTC" || target.value === "EUR")
				setForm({ ...form, currency: target.value })
		}
		if (target.name === "supportValue") {
			setForm({ ...form, value: +target.value })
		}
		if (target.name === "text") {
			setForm({ ...form, message: target.value })
		}
	}

	const handleSubmit = async (e: React.FormEvent) => {
		setLoading(true)
		e.preventDefault()

		const isSuccessful = await donate(form)
		setShowMessage(true)
		setResult(isSuccessful)
		setLoading(false)

		setTimeout(() => setShowMessage(false), 5000)
	}

	return (
		<>

			<form action="" className={styles.form} onSubmit={handleSubmit}>
				<label htmlFor="currency">
					Preferable currency
				</label>
				<select name="currency" id="currency" className={styles.currency} onChange={(e) => handleChange(e)}>
					<option value="RUB">RUB</option>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
					<option value="BTC">BTC</option>
				</select>

				<label htmlFor="supportValue">
					Sum
				</label>
				<input type="number" name="supportValue" id="supportValue" onChange={(e) => handleChange(e)} />

				<label htmlFor="supportMsg">
					Message (optional)
				</label>
				<textarea className={styles.message} id="supportMsg" name="text" onChange={(e) => handleChange(e)} />

				{/* <button
					className={styles.btn}
					type="submit"
					onClick={(e) => clickHandler(e)}
				>
					Donate
				</button> */}
				<input type="submit" value="Donate" className={styles.btn} disabled={loading}/>
			</form>

			<p>{loading ? "Connecting to the service..." : ""}</p>

			{showMessage &&
				<p className={styles.status}>{result ? "Success!" : "Error ;( Try again later"}</p>
			}


			<Link to="/" className={styles.linkOverlay}></Link>
			<Link to="/" className={styles.closeBtnLink}>x</Link>

		</>
	)
}

export default SupportAuthorModal
