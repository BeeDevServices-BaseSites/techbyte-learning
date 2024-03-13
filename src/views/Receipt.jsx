import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { changeTitle } from "../utilities/utilityFunctions";
import Button from "../components/Button";


const Receipt = ({ details }) => {

    const navigate = useNavigate();



    useEffect(() => {
        window.scrollTo(0, 0),
        changeTitle("TechByte Receipt - ")
        // If empty receipt, navigate away from page
        if (details.length === 0) {
            console.log("NO DATA!!")
            navigate("/");
        }
    }, [details, navigate]);

    return (
        <div> 
            {/* ternary checking if details data exists */}
            { details.length === 0 ?
                // if empty receipt //
                null
                :
            <main>
                <div className="wrapper">
                    {/* recepit container */}
                    <div className="receipt_container">
                        <div className='receipt_title'>
                            <h2>
                                Receipt
                            </h2>
                            <br />
                            <h5>
                                Invoice#: { details.id }
                            </h5>
                        </div>
                        <div className="receipt_header">
                            {/* left header */}
                            <div className="receipt_left">
                                <h4>
                                    TechByte Learning
                                </h4>
                                <br />
                                <h5>
                                    1005 Scott Town Center #1017
                                </h5>
                                <h5>
                                    Bloomsburg, PA 17815
                                </h5>
                                <h5>
                                    United States
                                </h5>
                                <h5>
                                    Phone: (570) 731-8660
                                </h5>
                            </div>
                            {/* right header */}
                            <div className="receipt_right">
                                <h4>
                                    Customer Info:
                                </h4>
                                <br />
                                <h5>
                                    { details.payer.name.given_name } { details.payer.name.surname }
                                </h5>
                                <h5>
                                    { details.purchase_units[0].shipping.address.address_line_1 }, { details.purchase_units[0].shipping.address.admin_area_2 }, { details.purchase_units[0].shipping.address.admin_area_1 },
                                </h5>
                                <h5>
                                    { details.purchase_units[0].shipping.address.admin_area_2 }, { details.purchase_units[0].shipping.address.admin_area_1 }, { details.purchase_units[0].shipping.address.postal_code } { details.purchase_units[0].shipping.address.country_code }
                                </h5>
                            </div>
                        </div>
                        {/* receipt table*/}
                        <table className="receipt_table">
                            <thead>
                                <tr className="receipt_row">
                                    <th>
                                        Item Desc.
                                    </th>
                                    <th>
                                        Each
                                    </th>
                                    <th>
                                        Qty
                                    </th>
                                    <th>
                                        Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                details.purchase_units[0].items.map((item, index) =>{
                                return(
                                <tr key ={ index }>
                                    <td>
                                        { item.name }
                                    </td>
                                    <td>
                                        ${ item.unit_amount.value }
                                    </td>
                                    <td>
                                        { item.quantity }
                                    </td>
                                    <td>
                                        ${ (item.unit_amount.value * item.quantity).toFixed(2) }
                                    </td>
                                </tr>
                            )})}
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                    <td>
                                        &nbsp;
                                    </td>
                                    <td>
                                        &nbsp;
                                    </td>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <b>Total:</b>
                                    </td>
                                    <td>
                                        <h3>
                                            ${ details.purchase_units[0].amount.value }
                                        </h3> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* notes */}
                        <h5>
                            Print and keep this receipt for your records
                        </h5>
                        <br />
                        <p><b>
                            Thank You For Joining The TechByte Learning Hive!
                        </b></p>
                    </div>
                    <br />
                    <Button to="/services" text="Close" />
                </div>
            </main>
            }
        </div>
    );
}

export default Receipt;