import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from "../components/Button";


const Receipt = ({details}) => {

    const navigate = useNavigate();

    // if empty receipt //
    useEffect(() => {
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
                            <img src="https://cdn.discordapp.com/attachments/1204477744830746655/1208990870171287633/computerBee.png?ex=65e54b7d&is=65d2d67d&hm=e9ce9fda34d8ced8d29a87e9d493dd3295c98e41479f06e32b09490cf5e8fc96&" alt="TechByte Bee" />
                            <h2>Receipt</h2>
                        </div>
                        <div className="receipt_header">
                            {/* left header */}
                            <div className="receipt_left">
                                <h3>TechByte Learning </h3>
                                <h5>1014 Lasalle Street</h5>
                                <h5>Berwick, PA 18603</h5>
                                <br />
                                <h5>Invoice#: { details.id }</h5>
                            </div>
                            {/* right header */}
                            <div className="receipt_right">
                                <h4>Customer Info:</h4>
                                <h5>{ details.payer.name.given_name } { details.payer.name.surname }</h5>
                                <h5>{ details.purchase_units[0].shipping.address.address_line_1 }, { details.purchase_units[0].shipping.address.admin_area_2 }, { details.purchase_units[0].shipping.address.admin_area_1 },</h5>
                                <h5>{ details.purchase_units[0].shipping.address.admin_area_2 }, { details.purchase_units[0].shipping.address.admin_area_1 }, { details.purchase_units[0].shipping.address.postal_code } { details.purchase_units[0].shipping.address.country_code }</h5>
                                <h5></h5>
                            </div>
                        </div>
                        {/* receipt table*/}
                        <table className="receipt_table">
                            <thead>
                                <tr className="receipt_row">
                                    <th>Item Desc.</th>
                                    <th>Each</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                details.purchase_units[0].items.map((item, index) =>{
                                return(
                                    <tr key ={index}>
                                    <td>{item.name}</td>
                                    <td>${item.unit_amount.value}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.unit_amount.value * item.quantity).toFixed(2)}</td>
                                </tr>
                            )})}
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr style={{borderTop:"1px solid black"}}>
                                    <td></td>
                                    <td></td>
                                    <td>Total:</td>
                                    <td><h3>${ details.purchase_units[0].amount.value }</h3> </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* notes */}
                        <p>Print and keep this receipt for your records</p>
                        <h4>Thank You For Joining The TechByte Learning Hive!</h4>
                    </div>
                    <Button to="/" text="CLOSE" />
                </div>
            </main>
            }
        </div>
    );
}

export default Receipt;