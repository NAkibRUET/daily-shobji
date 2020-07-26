import React from 'react';
import './SelectBox.css';

class SelectBox extends React.Component {
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
                    className="select-box--box"
                >
                    <div 
                        className="select-box--container"
                    >
                        <div className="select-box-selected-item">
                            <div>
                                {this.state.selectedItem.value}
                            </div>
                        </div>
                        <div 
                            className="select-box--arrow"
                            onClick={this.dropdown}
                        >
                            <span className={`${this.state.showItems ? `select-box--arrow-up` : `select-box--arrow-down`}`}></span>
                        </div>
                        <div 
                            style={{display: this.state.showItems ? 'block' : 'none'}}
                            className="select-box--items"
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

export default SelectBox




