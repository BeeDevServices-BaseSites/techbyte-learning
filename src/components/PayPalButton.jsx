import { useNavigate } from 'react-router-dom';
import { PayPalButtons } from "@paypal/react-paypal-js";

const Paypal = (props) => {

    const navigate = useNavigate();
    const {base_price, units, description, isOnSale, percent, setDetails} = props;
    // amount based on base price and quantity NO DISCOUNT
    const total_amount = (base_price*units).toFixed(2)
    // amount based on total amount WITH discount rate applied
    const discount_amount = (total_amount - (total_amount*percent)/100).toFixed(2)

    const items = {
        name: description,
        unit_amount: {
            currency_code: "USD",
            value: (discount_amount/units)
        },
        quantity: units,
    }

    return(
        <>
            <div className='pay_button'>
                { isOnSale === true ?
                <p>
                    <span className="lineout">${ total_amount }</span> <span className="sale">save { percent }%</span>
                </p>
            : <br /> }
                <p>${ discount_amount }</p>
                <PayPalButtons
                    style={{
                        layout: "vertical",
                        size: "small",
                        label: "checkout",
                        height: 40,
                        width: 125,
                        tagline: "false",
                        borderRadius: 5,
                        applepay: "true",
                    }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    currency_code: "USD",
                                    value: discount_amount,
                                    breakdown: {
                                        item_total: {
                                            currency_code: "USD",
                                            value: discount_amount
                                        },
                                    }
                                },
                                items: [ items ]
                            }]
                        })
                    }}
                    onApprove={async (data, actions) => {
                        const details = await actions.order.capture();
                        setDetails(details)
                        navigate("/receipt")
                    }}
                />
            </div>
        </>
    )
}

export default Paypal;
