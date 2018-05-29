/**
 * Created by N.Babenkov on 11.12.2017.
 */
import React, {Component} from 'react';

class TableRow extends Component {
    render() {
        const {district, contract, ser_nbr, id} = this.props;
        const link = "http://app-gf.esbt.loc:8081/debtors/docs/" + district + "/" + contract + "/" + ser_nbr;
        return (
            <tr key={id}>
                <td>
                    <a href={link}>
                        <div className="tdDiv">{district}</div>
                    </a>
                </td>
                <td>
                    <a href={link}>
                        <div className="tdDiv">{contract}</div>
                    </a>
                </td>
                <td>
                    <a href={link}>
                        <div className="tdDiv">{ser_nbr}</div>
                    </a>
                </td>
            </tr>
        );
    }
}

export default TableRow;