/**
 * Created by N.Babenkov on 05.12.2017.
 */
import React, {Component} from 'react';

class Search extends Component {
    replaceAllSpaces(value) {
        for (var i = 0; i < value.length; i++)
            value = value.replace(/\s/g, "");
        return value;
    }

    inputValueUpdate() {
        const value = this.replaceAllSpaces(this.inputValue.value);
        this.props.filterUpdate(value);
    }

    render() {
        return (
            <div className="tableheader sticky">
                <span className="headerSpan">Поиск по файлам:{' '}
                    <input type="text" ref={(value) => {
                            this.inputValue = value
                        }} className="inputs" id="search"
                        title="Укажите параметры поиска" onChange={this.inputValueUpdate.bind(this)}/>
                </span>
            </div>
        );
    }
}

export default Search;