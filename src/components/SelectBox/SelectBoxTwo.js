import React from 'react';
import './SelectBox.css';

class SelectBoxTwo extends React.Component {
    state = {
        ...this.props,
        items: this.props.items || [],
        showItems: false,
        selectedItem: this.props.items && this.props.items[0],
    }

    dropdown = () => {
        this.setState(prevState => ({
            showItems: !prevState.showItems,
        }))
    }

    selectedItem = (item) => this.setState({
        selectedItem: item,
        showItems: false,
    })

    render() {
        return (
            <div>
                <div 
                    className="select-box--box-tow"
                >
                    <div 
                        className="select-box--container-two"
                    >
                        <div className="select-box-selected-item">
                            {this.state.selectedItem.value}
                        </div>
                        <div 
                            className="select-box--arrow-two"
                            onClick={this.dropdown}
                        >
                            <span className={`${this.state.showItems ? `select-box--arrow-up` : `select-box--arrow-down`}`}></span>
                        </div>
                        <div 
                            style={{display: this.state.showItems ? 'block' : 'none'}}
                            className="select-box--items-two"
                        >
                            {
                                this.state.items.map(item => <div 
                                    key={item.id}
                                    onClick={() => this.selectedItem(item)}
                                    className={this.state.selectedItem === item ? 'selected' : ''}
                                >
                                    {item.value}
                                </div>)
                            }
                        </div>
                    </div>
                </div>
                <input 
                    type="hidden"
                    value={this.state.selectedItem.id}
                    name={this.state.name}
                />
            </div>
        )
    }
}

export default SelectBoxTwo


