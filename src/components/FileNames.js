/**
 * Created by N.Babenkov on 05.12.2017.
 */
import React, {Component} from 'react';
import TableRow from'./TableRow';

class FileNames extends Component {
    render() {
        const {data, filterText} = this.props;

        const fileNamesList = data
            .filter(file => {
                var district = file.district.toLowerCase().substr(3,2);
                var contract = file.contract.toLowerCase();
                return ((district + contract).indexOf(filterText/*.replace(/\D+/g,"")*/) >= 0) ||
                    ((contract + district).indexOf(filterText/*.replace(/\D+/g,"")*/) >= 0)
            })
            .slice(0, 200) //ограничение количества элементов для отображения на странице
            .sort((fileA,fileB) => {
                var districtA = fileA.district.toLowerCase();
                var districtB = fileB.district.toLowerCase();
                var contractA = fileA.contract.toLowerCase();
                var contractB = fileB.contract.toLowerCase();
                if ((districtA < districtB) ||
                    ((districtA === districtB) && (contractA<contractB)))
                    return -1;
                else if ((districtA === districtB) && (contractA === contractB)) return 0;
                return 1;
            })
            .map(file => {
                return (
                    // возвращает строку таблицы для одного docx файла
                    <TableRow key={file.id} district={file.district.toLowerCase().substr(3,2)} contract={file.contract.toLowerCase()} ser_nbr={file.serNbr} id={file.id}/>
                );
            });

        return (
            <table id='doc_table'>
                {fileNamesList.length > 0 ? (       //если список договоров не пуст - вывод списка в таблицу
                        <tbody>
                        <tr className="header sticky">
                            <td>Участок</td>
                            <td>Договор</td>
                            <td>Номер счетчика</td>
                        </tr>
                        {fileNamesList}
                        </tbody>
                    ) : (                           //иначе, вывод сообщения
                        <tbody>
                            <tr className="header sticky">
                                <td>Договор не найден</td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
        );
    }
}

export default FileNames;