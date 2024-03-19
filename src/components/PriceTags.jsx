import { Link } from "react-router-dom";
import Paypal from "../components/PayPalButton";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const PriceTags = ({ tag_data , setDetails }) => {

    const initialOptions = {
        "client-id": "AboCjdkH7teR_lvYiywVhF41PTL0gUZ6UM0Uz5mTf3BOaFaJTh_njS1PrDz0wljMB5MYOv7PvYu1NvU0",
        "enable-funding": "venmo,card",
        "disable-funding": "paylater",
        "data-sdk-integration-source": "integrationbuilder_sc",
    };

    return (
        <PayPalScriptProvider options={ initialOptions } >
            <div className="pricing_container">
                {/* DEV CARD 1 */}
                {tag_data.map(( price_tag ) => (
                    <div className="pricing_card" key={ price_tag.id }>
                        {/* PRICE RIBBON W/ TEXT */}
                        <div className="pricing_ribbon">
                            {price_tag.is_popular ? 
                            <img src="https://live.staticflickr.com/65535/53583339767_1406c80170_n.jpg" alt="best seller" />
                            :""
                            }
                            <div className="pricing_ribbon_text"> { price_tag.title }</div>
                        </div>
                        {/* PRICE TAG IMAGE */}
                        { price_tag.image == "" ? 
                            <img src="https://live.staticflickr.com/65535/53584865328_7580a08c05.jpg" alt="default card"/>
                        :
                            <img src={ price_tag.image } alt={ price_tag.title } />
                        }
                        {/* START DATE */}
                        { price_tag.start_date !== "" ?
                            <>
                                <br />
                                <h4>Course Start Date: <br className="mobile_only" /> { price_tag.start_date }</h4>
                            </>
                        :
                            ""
                        }
                        {/* COURSE SUMMARY */}
                        <div className="pricing_card_info">
                            { price_tag.summary.map((card_summary, idx) => (
                                <p className="pricing_card_text" key={ idx }>
                                    { card_summary }
                                </p>
                            ))}
                            {/* PRICE TAG */}
                            { price_tag.has_checkout ? 
                                <Paypal
                                    base_price={ price_tag.price }
                                    units={ price_tag.units }
                                    description= { price_tag.receipt_description }
                                    isOnSale={ price_tag.is_on_sale }
                                    percent={ price_tag.percent }
                                    setDetails={ setDetails } 
                                    is_tutoring = { price_tag.is_tutoring }
                                />
                            :
                                <div className="price_tag">
                                    {/*  */}
                                    <h4>{ price_tag.price }</h4>
                                    <Link to="/Apply">Talk <br /> With <br />Admissions</Link>
                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </PayPalScriptProvider>
    )
}

export default PriceTags;